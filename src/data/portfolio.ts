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

export default [
    {
        id: 12,
        title: "Hass LLM Watchdog",
        imgUrl: hassLlmWatchdogImage,
        imgContain: true,
        stack: ["Python", "Home Assistant"],
        link: "https://github.com/VoidElle/hass-llm-watchdog"
    },
    {
        id: 11,
        title: "Hass Open iAlarm MK",
        imgUrl: hassOpenIalarmMkImage,
        stack: ["Python", "Home Assistant"],
        link: "https://github.com/VoidElle/hass-open-ialarm-mk"
    },
    {
        id: 10,
        title: "Open iAlarm MK Local API",
        imgUrl: openIalarmMkLocalApiImage,
        stack: ["Python", "TCP"],
        link: "https://github.com/VoidElle/open-ialarm-mk-local-api"
    },
    {
        id: 9,
        title: "What I Did",
        imgUrl: whatIDidImage,
        stack: ["TypeScript", "Tauri"],
        link: "https://github.com/VoidElle/what-i-did"
    },
    {
        id: 8,
        title: "Gymnalyzer",
        imgUrl: gymnalyzerImage,
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        link: "https://www.gymnalyzer.com"
    },
    {
        id: 7,
        title: "Open Tecnosystemi",
        imgUrl: openTecnosystemi,
        stack: ["Python", "Home assistant"],
        link: "https://github.com/VoidElle/hass-open-tecnosystemi"
    },
    {
        id: 6,
        title: "Open Pico Local API",
        imgUrl: openPicoLocalApi,
        stack: ["Python", "UDP"],
        link: "https://github.com/VoidElle/open-pico-local-api"
    },
    {
        id: 5,
        title: "Open Polaris Local API",
        imgUrl: openPolarisLocalApi,
        stack: ["Python", "TCP"],
        link: "https://github.com/VoidElle/open-polaris-local-api"
    },
    {
        id: 4,
        title: "Black Theory",
        imgUrl: blackTheoryImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/black-theory"
    },
    {
        id: 3,
        title: "Open Pico App",
        imgUrl: openPicoApp,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/open-pico-app"
    },
    {
        id: 2,
        title: "Alphonse Club",
        imgUrl: alphonseClubImage,
        stack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Supabase", "Clerk"],
        link: "https://www.alphonseclub.com/"
    },
    {
        id: 1,
        title: "Sossoldi",
        imgUrl: sossoldiImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://rip-comm.github.io/sossoldi/"
    },
    {
        id: 0,
        title: "Portfolio",
        imgUrl: portfolioImage,
        stack: ["React", "Javascript", "Tailwind CSS"],
        link: "https://github.com/VoidElle/Portfolio"
    },
]
