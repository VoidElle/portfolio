import { useEffect, useState } from 'react';

export interface LeetCodeData {
    solvedProblem: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
}

export interface LeetCodeState {
    loading: boolean;
    data: LeetCodeData | null;
}

interface LeetCodeApiResponse {
    solvedProblem?: number;
    easySolved?: number;
    mediumSolved?: number;
    hardSolved?: number;
}

const IDLE_STATE: LeetCodeState = { loading: false, data: null };

export function useLeetCode(username: string): LeetCodeState {
    const [state, setState] = useState<LeetCodeState>(
        username ? { loading: true, data: null } : IDLE_STATE
    );

    useEffect(() => {
        if (!username) {
            setState(IDLE_STATE);
            return;
        }

        let cancelled = false;
        const controller = new AbortController();

        setState({ loading: true, data: null });

        const load = async () => {
            try {
                const res = await fetch(
                    `https://alfa-leetcode-api.onrender.com/${username}/solved`,
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data: LeetCodeApiResponse = await res.json();
                if (!data || typeof data.solvedProblem !== 'number') {
                    throw new Error('Malformed LeetCode response');
                }

                if (!cancelled) {
                    setState({
                        loading: false,
                        data: {
                            solvedProblem: Number(data.solvedProblem) || 0,
                            easySolved: Number(data.easySolved) || 0,
                            mediumSolved: Number(data.mediumSolved) || 0,
                            hardSolved: Number(data.hardSolved) || 0,
                        },
                    });
                }
            } catch (err) {
                if (cancelled || (err instanceof DOMException && err.name === 'AbortError')) {
                    return;
                }
                setState({ loading: false, data: null });
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
