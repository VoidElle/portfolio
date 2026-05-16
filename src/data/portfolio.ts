import portfolioImage from "../assets/portfolio.webp";
import sossoldiImage from "../assets/projects/sossoldi.webp";
import alphonseClubImage from "../assets/projects/alphonseClub.webp";
import openTecnosystemi from "../assets/projects/openTecnosystemi.webp";
import openPicoApp from "../assets/projects/openPicoApp.webp";
import openPicoLocalApi from "../assets/projects/openPicoLocalApi.webp";
import openPolarisLocalApi from "../assets/projects/openPolarisLocalApi.webp";
import blackTheoryImage from "../assets/projects/blackTheory.webp";

export default [
    {
        id: 7,
        title: "Open Tecnosystemi",
        description: "Home assistant integration for Tecnosystemi Pico and Polaris IOT devices",
        imgUrl: openTecnosystemi,
        stack: ["Python", "Home assistant"],
        link: "https://github.com/VoidElle/hass-open-tecnosystemi"
    },
    {
        id: 6,
        title: "Open Pico Local API",
        description: "API library to interface with Tecnosystemi Pico devices locally in Python",
        imgUrl: openPicoLocalApi,
        stack: ["Python", "UDP"],
        link: "https://github.com/VoidElle/open-pico-local-api"
    },
    {
        id: 5,
        title: "Open Polaris Local API",
        description: "API library to interface with Tecnosystemi Polaris 5X HVAC systems locally in Python",
        imgUrl: openPolarisLocalApi,
        stack: ["Python", "TCP"],
        link: "https://github.com/VoidElle/open-polaris-local-api"
    },
    {
        id: 4,
        title: "Black Theory",
        description: "POC for a security vulnerability in GreenTheory (gym) access systems",
        imgUrl: blackTheoryImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/black-theory"
    },
    {
        id: 3,
        title: "Open Pico App",
        description: "Hybrid mobile application to manage Tecnosystemi Pico devices",
        imgUrl: openPicoApp,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/open-pico-app"
    },
    {
        id: 2,
        title: "Alphonse Club",
        description: "Full-stack CRM for a private social club",
        imgUrl: alphonseClubImage,
        stack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Supabase", "Clerk"],
        link: "https://www.alphonseclub.com/"
    },
    {
        id: 1,
        title: "Sossoldi",
        description: "Hybrid mobile application for Wealth management / personal finance / Net Worth tracking",
        imgUrl: sossoldiImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://rip-comm.github.io/sossoldi/"
    },
    {
        id: 0,
        title: "Portfolio",
        description: "Personal portfolio built with React and Tailwind CSS",
        imgUrl: portfolioImage,
        stack: ["React", "Javascript", "Tailwind CSS"],
        link: "https://github.com/VoidElle/Portfolio"
    },
]
