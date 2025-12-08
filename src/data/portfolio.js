import portfolioImage from "../assets/portfolio.png";
import tapItImage from "../assets/tapit.jpg";
import sossoldiImage from "../assets/projects/sossoldi.jpg";
import alphonseClubImage from "../assets/projects/alphonseClub.jpg";
import hassioOpenPico from "../assets/projects/hassioOpenPico.png";
import openPicoApp from "../assets/projects/openPicoApp.png";
import openPicoLocalApi from "../assets/projects/openPicoLocalApi.png";

export default [
    {
        id: 6,
        title: "Open Pico App",
        imgUrl: openPicoApp,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://github.com/VoidElle/open-pico-app"
    },
    {
        id: 5,
        title: "Hassio Open Pico",
        imgUrl: hassioOpenPico,
        stack: ["Python", "Home assistant"],
        link: "https://github.com/VoidElle/hassio-open-pico"
    },
    {
        id: 4,
        title: "Open Pico Local API",
        imgUrl: openPicoLocalApi,
        stack: ["Python", "UDP"],
        link: "https://github.com/VoidElle/open-pico-local-api"
    },
    {
        id: 3,
        title: "Alphonse Club",
        imgUrl: alphonseClubImage,
        stack: ["Next.js", "React", "Typescript", "Supabase", "Clerk"],
        link: "https://www.alphonseclub.com/"
    },
    {
        id: 2,
        title: "Sossoldi",
        imgUrl: sossoldiImage,
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://rip-comm.github.io/sossoldi/"
    },
    {
        id: 1,
        title: "TapIt: Be the fastest finger",
        imgUrl: tapItImage,
        stack: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
        link: "https://github.com/VoidElle/TapIt"
    },
    {
        id: 0,
        title: "Portfolio",
        imgUrl: portfolioImage,
        stack: ["React", "Javascript", "TailwindCSS"],
        link: "https://github.com/VoidElle/Portfolio"
    },
]