import portfolioImage from "../assets/portfolio.webp";
import sossoldiImage from "../assets/projects/sossoldi.webp";
import alphonseClubImage from "../assets/projects/alphonseClub.webp";
import openTecnosystemi from "../assets/projects/openTecnosystemi.webp";
import openPicoApp from "../assets/projects/openPicoApp.webp";
import openPicoLocalApi from "../assets/projects/openPicoLocalApi.webp";
import openPolarisLocalApi from "../assets/projects/openPolarisLocalApi.webp";
import blackTheoryImage from "../assets/projects/blackTheory.webp";
import gymnalyzerImage from "../assets/projects/gymnalyzer.webp";
import hassLlmWatchdogImage from "../assets/projects/hassLlmWatchdog.webp";
import hassOpenIalarmMkImage from "../assets/projects/hassOpenIalarmMk.webp";
import openIalarmMkLocalApiImage from "../assets/projects/openIalarmMkLocalApi.webp";
import whatIDidImage from "../assets/projects/whatIDid.webp";
import zigbeeMeshHealthImage from "../assets/projects/zigbeeMeshHealth.png";
import jiraStandupSkillImage from "../assets/projects/jiraStandupSkill.svg";
import avvaleLogomark from "../assets/projects/avvaleLogomark.png";

export interface Project {
    id: number;
    title: string;
    imgUrl?: string;
    imgDarkUrl?: string;
    imgContain?: boolean;
    stack: string[];
    link?: string;
    source?: string;
    caseStudy?: string;
}

const portfolio: Project[] = [
    {
        id: 15,
        title: "Avvale Projects",
        imgUrl: avvaleLogomark,
        imgContain: true,
        stack: ["Flutter", "Dart", "React Native", "Expo", "TypeScript", "Kotlin", "Java", "Jetpack Compose", "Firebase", "Android", "iOS"],
        caseStudy: "avvale-projects"
    },
    {
        id: 14,
        title: "Zigbee Mesh Health",
        imgUrl: zigbeeMeshHealthImage,
        imgContain: true,
        stack: ["JavaScript", "Zigbee2MQTT"],
        link: "https://github.com/VoidElle/zigbee-mesh-health",
        caseStudy: "zigbee-mesh-health"
    },
    {
        id: 13,
        title: "Jira Standup Skill",
        imgUrl: jiraStandupSkillImage,
        imgContain: true,
        stack: ["MCP", "AI"],
        link: "https://github.com/VoidElle/jira-standup-skill",
        caseStudy: "jira-standup-skill"
    },
    {
        id: 12,
        title: "Hass LLM Watchdog",
        imgUrl: hassLlmWatchdogImage,
        imgContain: true,
        stack: ["Python", "Home Assistant"],
        link: "https://github.com/VoidElle/hass-llm-watchdog",
        caseStudy: "hass-llm-watchdog"
    },
    {
        id: 11,
        title: "Hass Open iAlarm MK",
        imgUrl: hassOpenIalarmMkImage,
        stack: ["Python", "Home Assistant"],
        link: "https://github.com/VoidElle/hass-open-ialarm-mk",
        caseStudy: "hass-open-ialarm-mk"
    },
    {
        id: 10,
        title: "Open iAlarm MK Local API",
        imgUrl: openIalarmMkLocalApiImage,
        stack: ["Python", "TCP"],
        link: "https://github.com/VoidElle/open-ialarm-mk-local-api",
        caseStudy: "open-ialarm-mk-local-api"
    },
    {
        id: 9,
        title: "What I Did",
        imgUrl: whatIDidImage,
        stack: ["TypeScript", "Tauri"],
        link: "https://github.com/VoidElle/what-i-did",
        caseStudy: "what-i-did"
    },
    {
        id: 8,
        title: "Gymnalyzer",
        imgUrl: gymnalyzerImage,
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        link: "https://www.gymnalyzer.com",
        caseStudy: "gymnalyzer"
    },
    {
        id: 7,
        title: "Open Tecnosystemi",
        imgUrl: openTecnosystemi,
        stack: ["Python", "Home assistant"],
        link: "https://github.com/VoidElle/hass-open-tecnosystemi",
        caseStudy: "open-tecnosystemi"
    },
    {
        id: 6,
        title: "Open Pico Local API",
        imgUrl: openPicoLocalApi,
        stack: ["Python", "UDP"],
        link: "https://github.com/VoidElle/open-pico-local-api",
        caseStudy: "open-pico-local-api"
    },
    {
        id: 5,
        title: "Open Polaris Local API",
        imgUrl: openPolarisLocalApi,
        stack: ["Python", "TCP"],
        link: "https://github.com/VoidElle/open-polaris-local-api",
        caseStudy: "open-polaris-local-api"
    },
    {
        id: 4,
        title: "Black Theory",
        imgUrl: blackTheoryImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/black-theory",
        caseStudy: "black-theory"
    },
    {
        id: 3,
        title: "Open Pico App",
        imgUrl: openPicoApp,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/open-pico-app",
        caseStudy: "open-pico-app"
    },
    {
        id: 2,
        title: "Alphonse Club",
        imgUrl: alphonseClubImage,
        stack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Supabase", "Clerk"],
        caseStudy: "alphonse-club"
    },
    {
        id: 1,
        title: "Sossoldi",
        imgUrl: sossoldiImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://rip-comm.github.io/sossoldi/",
        source: "https://github.com/RIP-Comm/sossoldi",
        caseStudy: "sossoldi"
    },
    {
        id: 0,
        title: "Portfolio",
        imgUrl: portfolioImage,
        stack: ["React", "Javascript", "Tailwind CSS"],
        link: "https://github.com/VoidElle/Portfolio",
        caseStudy: "portfolio"
    },
];

export default portfolio;
