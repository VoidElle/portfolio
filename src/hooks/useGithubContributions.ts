import { useEffect, useState } from 'react';

export interface GithubContribution {
    date: string;
    count: number;
}

interface GithubApiResponse {
    total?: Record<string, number>;
    contributions?: GithubContribution[];
}

export interface GithubContributionsState {
    contributions: GithubContribution[];
    total: number;
    streak: number;
    years: number[];
    loading: boolean;
    error: boolean;
}

const INITIAL_STATE: GithubContributionsState = {
    contributions: [],
    total: 0,
    streak: 0,
    years: [],
    loading: true,
    error: false,
};

function formatDate(d: Date): string {
    const off = d.getTimezoneOffset();
    return new Date(d.getTime() - off * 60000).toISOString().split('T')[0];
}

function computeStreak(contribMap: Map<string, number>): number {
    let d = new Date();
    let streak = 0;
    let dateStr = formatDate(d);
    if (!contribMap.get(dateStr)) {
        d.setDate(d.getDate() - 1);
        dateStr = formatDate(d);
    }
    while ((contribMap.get(dateStr) || 0) > 0) {
        streak++;
        d.setDate(d.getDate() - 1);
        dateStr = formatDate(d);
    }
    return streak;
}

function computeTotal(data: GithubApiResponse, contributions: GithubContribution[]): number {
    if (data.total && typeof data.total === 'object') {
        return Object.values(data.total).reduce((a, v) => a + (Number(v) || 0), 0);
    }
    return contributions.reduce((a, c) => a + (Number(c.count) || 0), 0);
}

export function useGithubContributions(username: string): GithubContributionsState {
    const [state, setState] = useState<GithubContributionsState>(INITIAL_STATE);

    useEffect(() => {
        if (!username) {
            setState({ ...INITIAL_STATE, loading: false });
            return;
        }

        let cancelled = false;
        const controller = new AbortController();

        const load = async () => {
            try {
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}`,
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data: GithubApiResponse = await res.json();
                if (!data || !Array.isArray(data.contributions)) {
                    throw new Error('Malformed contributions response');
                }

                const contributions = data.contributions;
                const contribMap = new Map<string, number>();
                contributions.forEach((c) => contribMap.set(c.date, c.count));

                const streak = computeStreak(contribMap);
                const total = computeTotal(data, contributions);

                const yearsSet = new Set(
                    contributions.map((c) => new Date(c.date).getFullYear())
                );
                const years = Array.from(yearsSet).sort((a, b) => a - b);

                if (!cancelled) {
                    setState({
                        contributions,
                        total,
                        streak,
                        years,
                        loading: false,
                        error: false,
                    });
                }
            } catch (err) {
                if (cancelled || (err instanceof DOMException && err.name === 'AbortError')) {
                    return;
                }
                setState({
                    contributions: [],
                    total: 0,
                    streak: 0,
                    years: [],
                    loading: false,
                    error: true,
                });
            }
        };

        load();

        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [username]);

    return state;
}
