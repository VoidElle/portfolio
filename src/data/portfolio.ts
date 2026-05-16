import portfolioImage from "../assets/portfolio.png";
import sossoldiImage from "../assets/projects/sossoldi.jpg";
import alphonseClubImage from "../assets/projects/alphonseClub.jpg";
import openTecnosystemi from "../assets/projects/openTecnosystemi.png";
import openPicoApp from "../assets/projects/openPicoApp.png";
import openPicoLocalApi from "../assets/projects/openPicoLocalApi.png";
import openPolarisLocalApi from "../assets/projects/openPolarisLocalApi.png";
import blackTheoryImage from "../assets/projects/blackTheory.png";

export default [
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