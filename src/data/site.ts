import heroBackground from '../assets/heroCodeBackground.jpeg';

export interface SocialLink {
    id: string;
    labelKey: string;
    url: string;
    icon: string;
}

export const SITE = {
    name: "Luca Del Corona",
    heroBackground,
    avatar: "https://avatars.githubusercontent.com/u/26171008?s=200&v=4", // GitHub profile picture (VoidElle); null -> gradient initials fallback
    resumeUrl: null as string | null,       // download link; hide button when null
    email: "info@lucadelcorona.com",
    socials: [
        { id: "github", labelKey: "hero.socials.github", url: "https://github.com/VoidElle", icon: "fab fa-github" },
        { id: "linkedin", labelKey: "hero.socials.linkedin", url: "https://www.linkedin.com/in/luca-del-corona/", icon: "fab fa-linkedin" }
    ] as SocialLink[]
};
