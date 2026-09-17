import zigbeeMeshHealthImage from "../assets/projects/zigbeeMeshHealth.png";
import hassLlmWatchdogImage from "../assets/projects/hassLlmWatchdog.webp";
import sossoldiImage from "../assets/projects/sossoldi.webp";

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
    }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((c) => c.slug === slug);
}
