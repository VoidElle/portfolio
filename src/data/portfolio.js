import portfolioImage from "../assets/portfolio.png";
import tapItImage from "../assets/tapit.jpg";
import sossoldiImage from "../assets/projects/sossoldi.jpg";
import alphonseClubImage from "../assets/projects/alphonseClub.jpg";

export default [
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