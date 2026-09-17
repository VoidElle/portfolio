import zigbeeMeshHealthImage from "../assets/projects/zigbeeMeshHealth.png";
import hassLlmWatchdogImage from "../assets/projects/hassLlmWatchdog.webp";
import sossoldiImage from "../assets/projects/sossoldi.webp";
import hassOpenIalarmMkImage from "../assets/projects/hassOpenIalarmMk.webp";
import openIalarmMkLocalApiImage from "../assets/projects/openIalarmMkLocalApi.webp";
import whatIDidImage from "../assets/projects/whatIDid.webp";
import gymnalyzerImage from "../assets/projects/gymnalyzer.webp";
import openTecnosystemiImage from "../assets/projects/openTecnosystemi.webp";
import openPicoLocalApiImage from "../assets/projects/openPicoLocalApi.webp";
import openPolarisLocalApiImage from "../assets/projects/openPolarisLocalApi.webp";
import blackTheoryImage from "../assets/projects/blackTheory.webp";
import openPicoAppImage from "../assets/projects/openPicoApp.webp";
import alphonseClubImage from "../assets/projects/alphonseClub.webp";
import portfolioImage from "../assets/portfolio.webp";

export interface CaseStudySection {
    id: string;
    titleKey: string;
    bodyKey: string;
    bulletsKey?: string;
    calloutKey?: string;
}

export interface CaseStudy {
    slug: string;
    projectId: number;
    title: string;
    subtitleKey: string;
    roleKey: string;
    stack: string[];
    coverImg?: string;
    coverCaptionKey?: string;
    liveUrl?: string;
    sourceUrl?: string;
    sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "zigbee-mesh-health",
        projectId: 14,
        title: "Zigbee Mesh Health",
        subtitleKey: "caseStudies.zigbee-mesh-health.subtitle",
        roleKey: "caseStudies.zigbee-mesh-health.role",
        stack: ["JavaScript", "Zigbee2MQTT"],
        coverImg: zigbeeMeshHealthImage,
        coverCaptionKey: "caseStudies.zigbee-mesh-health.coverCaption",
        sourceUrl: "https://github.com/VoidElle/zigbee-mesh-health",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.zigbee-mesh-health.sections.overview.title",
                bodyKey: "caseStudies.zigbee-mesh-health.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.zigbee-mesh-health.sections.stack.title",
                bodyKey: "caseStudies.zigbee-mesh-health.sections.stack.body",
                calloutKey: "caseStudies.zigbee-mesh-health.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.zigbee-mesh-health.sections.how-it-works.title",
                bodyKey: "caseStudies.zigbee-mesh-health.sections.how-it-works.body",
                bulletsKey: "caseStudies.zigbee-mesh-health.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.zigbee-mesh-health.sections.challenges.title",
                bodyKey: "caseStudies.zigbee-mesh-health.sections.challenges.body",
                bulletsKey: "caseStudies.zigbee-mesh-health.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.zigbee-mesh-health.sections.outcome.title",
                bodyKey: "caseStudies.zigbee-mesh-health.sections.outcome.body"
            }
        ]
    },
    {
        slug: "hass-llm-watchdog",
        projectId: 12,
        title: "Hass LLM Watchdog",
        subtitleKey: "caseStudies.hass-llm-watchdog.subtitle",
        roleKey: "caseStudies.hass-llm-watchdog.role",
        stack: ["Python", "Home Assistant"],
        coverImg: hassLlmWatchdogImage,
        coverCaptionKey: "caseStudies.hass-llm-watchdog.coverCaption",
        sourceUrl: "https://github.com/VoidElle/hass-llm-watchdog",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.hass-llm-watchdog.sections.overview.title",
                bodyKey: "caseStudies.hass-llm-watchdog.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.hass-llm-watchdog.sections.stack.title",
                bodyKey: "caseStudies.hass-llm-watchdog.sections.stack.body",
                calloutKey: "caseStudies.hass-llm-watchdog.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.hass-llm-watchdog.sections.how-it-works.title",
                bodyKey: "caseStudies.hass-llm-watchdog.sections.how-it-works.body",
                bulletsKey: "caseStudies.hass-llm-watchdog.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.hass-llm-watchdog.sections.challenges.title",
                bodyKey: "caseStudies.hass-llm-watchdog.sections.challenges.body",
                bulletsKey: "caseStudies.hass-llm-watchdog.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.hass-llm-watchdog.sections.outcome.title",
                bodyKey: "caseStudies.hass-llm-watchdog.sections.outcome.body"
            }
        ]
    },
    {
        slug: "sossoldi",
        projectId: 1,
        title: "Sossoldi",
        subtitleKey: "caseStudies.sossoldi.subtitle",
        roleKey: "caseStudies.sossoldi.role",
        stack: ["Flutter", "Dart", "Android", "iOS"],
        coverImg: sossoldiImage,
        coverCaptionKey: "caseStudies.sossoldi.coverCaption",
        liveUrl: "https://rip-comm.github.io/sossoldi/",
        sourceUrl: "https://github.com/RIP-Comm/sossoldi",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.sossoldi.sections.overview.title",
                bodyKey: "caseStudies.sossoldi.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.sossoldi.sections.stack.title",
                bodyKey: "caseStudies.sossoldi.sections.stack.body",
                calloutKey: "caseStudies.sossoldi.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.sossoldi.sections.how-it-works.title",
                bodyKey: "caseStudies.sossoldi.sections.how-it-works.body",
                bulletsKey: "caseStudies.sossoldi.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.sossoldi.sections.challenges.title",
                bodyKey: "caseStudies.sossoldi.sections.challenges.body",
                bulletsKey: "caseStudies.sossoldi.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.sossoldi.sections.outcome.title",
                bodyKey: "caseStudies.sossoldi.sections.outcome.body"
            }
        ]
    },
    {
        slug: "jira-standup-skill",
        projectId: 13,
        title: "Jira Standup Skill",
        subtitleKey: "caseStudies.jira-standup-skill.subtitle",
        roleKey: "caseStudies.jira-standup-skill.role",
        stack: ["MCP", "AI"],
        sourceUrl: "https://github.com/VoidElle/jira-standup-skill",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.jira-standup-skill.sections.overview.title",
                bodyKey: "caseStudies.jira-standup-skill.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.jira-standup-skill.sections.stack.title",
                bodyKey: "caseStudies.jira-standup-skill.sections.stack.body",
                calloutKey: "caseStudies.jira-standup-skill.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.jira-standup-skill.sections.how-it-works.title",
                bodyKey: "caseStudies.jira-standup-skill.sections.how-it-works.body",
                bulletsKey: "caseStudies.jira-standup-skill.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.jira-standup-skill.sections.challenges.title",
                bodyKey: "caseStudies.jira-standup-skill.sections.challenges.body",
                bulletsKey: "caseStudies.jira-standup-skill.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.jira-standup-skill.sections.outcome.title",
                bodyKey: "caseStudies.jira-standup-skill.sections.outcome.body"
            }
        ]
    },
    {
        slug: "hass-open-ialarm-mk",
        projectId: 11,
        title: "Hass Open iAlarm MK",
        subtitleKey: "caseStudies.hass-open-ialarm-mk.subtitle",
        roleKey: "caseStudies.hass-open-ialarm-mk.role",
        stack: ["Python", "Home Assistant"],
        coverImg: hassOpenIalarmMkImage,
        coverCaptionKey: "caseStudies.hass-open-ialarm-mk.coverCaption",
        sourceUrl: "https://github.com/VoidElle/hass-open-ialarm-mk",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.hass-open-ialarm-mk.sections.overview.title",
                bodyKey: "caseStudies.hass-open-ialarm-mk.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.hass-open-ialarm-mk.sections.stack.title",
                bodyKey: "caseStudies.hass-open-ialarm-mk.sections.stack.body",
                calloutKey: "caseStudies.hass-open-ialarm-mk.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.hass-open-ialarm-mk.sections.how-it-works.title",
                bodyKey: "caseStudies.hass-open-ialarm-mk.sections.how-it-works.body",
                bulletsKey: "caseStudies.hass-open-ialarm-mk.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.hass-open-ialarm-mk.sections.challenges.title",
                bodyKey: "caseStudies.hass-open-ialarm-mk.sections.challenges.body",
                bulletsKey: "caseStudies.hass-open-ialarm-mk.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.hass-open-ialarm-mk.sections.outcome.title",
                bodyKey: "caseStudies.hass-open-ialarm-mk.sections.outcome.body"
            }
        ]
    },
    {
        slug: "open-ialarm-mk-local-api",
        projectId: 10,
        title: "Open iAlarm MK Local API",
        subtitleKey: "caseStudies.open-ialarm-mk-local-api.subtitle",
        roleKey: "caseStudies.open-ialarm-mk-local-api.role",
        stack: ["Python", "TCP"],
        coverImg: openIalarmMkLocalApiImage,
        coverCaptionKey: "caseStudies.open-ialarm-mk-local-api.coverCaption",
        sourceUrl: "https://github.com/VoidElle/open-ialarm-mk-local-api",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.open-ialarm-mk-local-api.sections.overview.title",
                bodyKey: "caseStudies.open-ialarm-mk-local-api.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.open-ialarm-mk-local-api.sections.stack.title",
                bodyKey: "caseStudies.open-ialarm-mk-local-api.sections.stack.body",
                calloutKey: "caseStudies.open-ialarm-mk-local-api.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.open-ialarm-mk-local-api.sections.how-it-works.title",
                bodyKey: "caseStudies.open-ialarm-mk-local-api.sections.how-it-works.body",
                bulletsKey: "caseStudies.open-ialarm-mk-local-api.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.open-ialarm-mk-local-api.sections.challenges.title",
                bodyKey: "caseStudies.open-ialarm-mk-local-api.sections.challenges.body",
                bulletsKey: "caseStudies.open-ialarm-mk-local-api.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.open-ialarm-mk-local-api.sections.outcome.title",
                bodyKey: "caseStudies.open-ialarm-mk-local-api.sections.outcome.body"
            }
        ]
    },
    {
        slug: "what-i-did",
        projectId: 9,
        title: "What I Did",
        subtitleKey: "caseStudies.what-i-did.subtitle",
        roleKey: "caseStudies.what-i-did.role",
        stack: ["TypeScript", "Tauri"],
        coverImg: whatIDidImage,
        coverCaptionKey: "caseStudies.what-i-did.coverCaption",
        sourceUrl: "https://github.com/VoidElle/what-i-did",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.what-i-did.sections.overview.title",
                bodyKey: "caseStudies.what-i-did.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.what-i-did.sections.stack.title",
                bodyKey: "caseStudies.what-i-did.sections.stack.body",
                calloutKey: "caseStudies.what-i-did.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.what-i-did.sections.how-it-works.title",
                bodyKey: "caseStudies.what-i-did.sections.how-it-works.body",
                bulletsKey: "caseStudies.what-i-did.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.what-i-did.sections.challenges.title",
                bodyKey: "caseStudies.what-i-did.sections.challenges.body",
                bulletsKey: "caseStudies.what-i-did.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.what-i-did.sections.outcome.title",
                bodyKey: "caseStudies.what-i-did.sections.outcome.body"
            }
        ]
    },
    {
        slug: "gymnalyzer",
        projectId: 8,
        title: "Gymnalyzer",
        subtitleKey: "caseStudies.gymnalyzer.subtitle",
        roleKey: "caseStudies.gymnalyzer.role",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        coverImg: gymnalyzerImage,
        coverCaptionKey: "caseStudies.gymnalyzer.coverCaption",
        liveUrl: "https://www.gymnalyzer.com",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.gymnalyzer.sections.overview.title",
                bodyKey: "caseStudies.gymnalyzer.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.gymnalyzer.sections.stack.title",
                bodyKey: "caseStudies.gymnalyzer.sections.stack.body",
                calloutKey: "caseStudies.gymnalyzer.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.gymnalyzer.sections.how-it-works.title",
                bodyKey: "caseStudies.gymnalyzer.sections.how-it-works.body",
                bulletsKey: "caseStudies.gymnalyzer.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.gymnalyzer.sections.challenges.title",
                bodyKey: "caseStudies.gymnalyzer.sections.challenges.body",
                bulletsKey: "caseStudies.gymnalyzer.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.gymnalyzer.sections.outcome.title",
                bodyKey: "caseStudies.gymnalyzer.sections.outcome.body"
            }
        ]
    },
    {
        slug: "open-tecnosystemi",
        projectId: 7,
        title: "Open Tecnosystemi",
        subtitleKey: "caseStudies.open-tecnosystemi.subtitle",
        roleKey: "caseStudies.open-tecnosystemi.role",
        stack: ["Python", "Home Assistant"],
        coverImg: openTecnosystemiImage,
        coverCaptionKey: "caseStudies.open-tecnosystemi.coverCaption",
        sourceUrl: "https://github.com/VoidElle/hass-open-tecnosystemi",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.open-tecnosystemi.sections.overview.title",
                bodyKey: "caseStudies.open-tecnosystemi.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.open-tecnosystemi.sections.stack.title",
                bodyKey: "caseStudies.open-tecnosystemi.sections.stack.body",
                calloutKey: "caseStudies.open-tecnosystemi.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.open-tecnosystemi.sections.how-it-works.title",
                bodyKey: "caseStudies.open-tecnosystemi.sections.how-it-works.body",
                bulletsKey: "caseStudies.open-tecnosystemi.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.open-tecnosystemi.sections.challenges.title",
                bodyKey: "caseStudies.open-tecnosystemi.sections.challenges.body",
                bulletsKey: "caseStudies.open-tecnosystemi.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.open-tecnosystemi.sections.outcome.title",
                bodyKey: "caseStudies.open-tecnosystemi.sections.outcome.body"
            }
        ]
    },
    {
        slug: "open-pico-local-api",
        projectId: 6,
        title: "Open Pico Local API",
        subtitleKey: "caseStudies.open-pico-local-api.subtitle",
        roleKey: "caseStudies.open-pico-local-api.role",
        stack: ["Python", "UDP"],
        coverImg: openPicoLocalApiImage,
        coverCaptionKey: "caseStudies.open-pico-local-api.coverCaption",
        sourceUrl: "https://github.com/VoidElle/open-pico-local-api",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.open-pico-local-api.sections.overview.title",
                bodyKey: "caseStudies.open-pico-local-api.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.open-pico-local-api.sections.stack.title",
                bodyKey: "caseStudies.open-pico-local-api.sections.stack.body",
                calloutKey: "caseStudies.open-pico-local-api.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.open-pico-local-api.sections.how-it-works.title",
                bodyKey: "caseStudies.open-pico-local-api.sections.how-it-works.body",
                bulletsKey: "caseStudies.open-pico-local-api.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.open-pico-local-api.sections.challenges.title",
                bodyKey: "caseStudies.open-pico-local-api.sections.challenges.body",
                bulletsKey: "caseStudies.open-pico-local-api.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.open-pico-local-api.sections.outcome.title",
                bodyKey: "caseStudies.open-pico-local-api.sections.outcome.body"
            }
        ]
    },
    {
        slug: "open-polaris-local-api",
        projectId: 5,
        title: "Open Polaris Local API",
        subtitleKey: "caseStudies.open-polaris-local-api.subtitle",
        roleKey: "caseStudies.open-polaris-local-api.role",
        stack: ["Python", "TCP"],
        coverImg: openPolarisLocalApiImage,
        coverCaptionKey: "caseStudies.open-polaris-local-api.coverCaption",
        sourceUrl: "https://github.com/VoidElle/open-polaris-local-api",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.open-polaris-local-api.sections.overview.title",
                bodyKey: "caseStudies.open-polaris-local-api.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.open-polaris-local-api.sections.stack.title",
                bodyKey: "caseStudies.open-polaris-local-api.sections.stack.body",
                calloutKey: "caseStudies.open-polaris-local-api.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.open-polaris-local-api.sections.how-it-works.title",
                bodyKey: "caseStudies.open-polaris-local-api.sections.how-it-works.body",
                bulletsKey: "caseStudies.open-polaris-local-api.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.open-polaris-local-api.sections.challenges.title",
                bodyKey: "caseStudies.open-polaris-local-api.sections.challenges.body",
                bulletsKey: "caseStudies.open-polaris-local-api.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.open-polaris-local-api.sections.outcome.title",
                bodyKey: "caseStudies.open-polaris-local-api.sections.outcome.body"
            }
        ]
    },
    {
        slug: "black-theory",
        projectId: 4,
        title: "Black Theory",
        subtitleKey: "caseStudies.black-theory.subtitle",
        roleKey: "caseStudies.black-theory.role",
        stack: ["Flutter", "Dart", "Android", "iOS"],
        coverImg: blackTheoryImage,
        coverCaptionKey: "caseStudies.black-theory.coverCaption",
        sourceUrl: "https://github.com/VoidElle/black-theory",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.black-theory.sections.overview.title",
                bodyKey: "caseStudies.black-theory.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.black-theory.sections.stack.title",
                bodyKey: "caseStudies.black-theory.sections.stack.body",
                calloutKey: "caseStudies.black-theory.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.black-theory.sections.how-it-works.title",
                bodyKey: "caseStudies.black-theory.sections.how-it-works.body",
                bulletsKey: "caseStudies.black-theory.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.black-theory.sections.challenges.title",
                bodyKey: "caseStudies.black-theory.sections.challenges.body",
                bulletsKey: "caseStudies.black-theory.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.black-theory.sections.outcome.title",
                bodyKey: "caseStudies.black-theory.sections.outcome.body"
            }
        ]
    },
    {
        slug: "open-pico-app",
        projectId: 3,
        title: "Open Pico App",
        subtitleKey: "caseStudies.open-pico-app.subtitle",
        roleKey: "caseStudies.open-pico-app.role",
        stack: ["Flutter", "Dart", "Android", "iOS"],
        coverImg: openPicoAppImage,
        coverCaptionKey: "caseStudies.open-pico-app.coverCaption",
        sourceUrl: "https://github.com/VoidElle/open-pico-app",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.open-pico-app.sections.overview.title",
                bodyKey: "caseStudies.open-pico-app.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.open-pico-app.sections.stack.title",
                bodyKey: "caseStudies.open-pico-app.sections.stack.body",
                calloutKey: "caseStudies.open-pico-app.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.open-pico-app.sections.how-it-works.title",
                bodyKey: "caseStudies.open-pico-app.sections.how-it-works.body",
                bulletsKey: "caseStudies.open-pico-app.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.open-pico-app.sections.challenges.title",
                bodyKey: "caseStudies.open-pico-app.sections.challenges.body",
                bulletsKey: "caseStudies.open-pico-app.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.open-pico-app.sections.outcome.title",
                bodyKey: "caseStudies.open-pico-app.sections.outcome.body"
            }
        ]
    },
    {
        slug: "alphonse-club",
        projectId: 2,
        title: "Alphonse Club",
        subtitleKey: "caseStudies.alphonse-club.subtitle",
        roleKey: "caseStudies.alphonse-club.role",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Clerk"],
        coverImg: alphonseClubImage,
        coverCaptionKey: "caseStudies.alphonse-club.coverCaption",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.alphonse-club.sections.overview.title",
                bodyKey: "caseStudies.alphonse-club.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.alphonse-club.sections.stack.title",
                bodyKey: "caseStudies.alphonse-club.sections.stack.body",
                calloutKey: "caseStudies.alphonse-club.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.alphonse-club.sections.how-it-works.title",
                bodyKey: "caseStudies.alphonse-club.sections.how-it-works.body",
                bulletsKey: "caseStudies.alphonse-club.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.alphonse-club.sections.challenges.title",
                bodyKey: "caseStudies.alphonse-club.sections.challenges.body",
                bulletsKey: "caseStudies.alphonse-club.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.alphonse-club.sections.outcome.title",
                bodyKey: "caseStudies.alphonse-club.sections.outcome.body"
            }
        ]
    },
    {
        slug: "portfolio",
        projectId: 0,
        title: "Portfolio",
        subtitleKey: "caseStudies.portfolio.subtitle",
        roleKey: "caseStudies.portfolio.role",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        coverImg: portfolioImage,
        coverCaptionKey: "caseStudies.portfolio.coverCaption",
        sourceUrl: "https://github.com/VoidElle/Portfolio",
        sections: [
            {
                id: "overview",
                titleKey: "caseStudies.portfolio.sections.overview.title",
                bodyKey: "caseStudies.portfolio.sections.overview.body"
            },
            {
                id: "stack",
                titleKey: "caseStudies.portfolio.sections.stack.title",
                bodyKey: "caseStudies.portfolio.sections.stack.body",
                calloutKey: "caseStudies.portfolio.sections.stack.callout"
            },
            {
                id: "how-it-works",
                titleKey: "caseStudies.portfolio.sections.how-it-works.title",
                bodyKey: "caseStudies.portfolio.sections.how-it-works.body",
                bulletsKey: "caseStudies.portfolio.sections.how-it-works.bullets"
            },
            {
                id: "challenges",
                titleKey: "caseStudies.portfolio.sections.challenges.title",
                bodyKey: "caseStudies.portfolio.sections.challenges.body",
                bulletsKey: "caseStudies.portfolio.sections.challenges.bullets"
            },
            {
                id: "outcome",
                titleKey: "caseStudies.portfolio.sections.outcome.title",
                bodyKey: "caseStudies.portfolio.sections.outcome.body"
            }
        ]
    }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((c) => c.slug === slug);
}
