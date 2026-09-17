export interface SkillItem {
    label: string;
    icon?: string;
    core?: boolean;
}

export interface SkillGroup {
    id: string;
    labelKey: string;
    icon: string;
    items: SkillItem[];
}

export const coreSkills = ["Flutter", "Dart", "Expo", "React Native", "TypeScript", "AWS"];

export const skills: SkillGroup[] = [
    {
        id: "languages",
        labelKey: "languages",
        icon: "fas fa-code",
        items: [
            { label: "Dart", core: true },
            { label: "Kotlin" },
            { label: "Java" },
            { label: "TypeScript", core: true },
            { label: "JavaScript" },
            { label: "Python" },
            { label: "C" },
            { label: "C++" },
            { label: "PHP" },
            { label: "SQL" },
            { label: "HTML" },
            { label: "CSS" }
        ]
    },
    {
        id: "frameworks",
        labelKey: "frameworks",
        icon: "fas fa-layer-group",
        items: [
            { label: "Flutter", core: true },
            { label: "React" },
            { label: "React Native", core: true },
            { label: "Expo", core: true },
            { label: "Next.js" },
            { label: "Node.js" },
            { label: "Express" },
            { label: "Symfony" },
            { label: "Jetpack Compose" },
            { label: "Tailwind CSS" }
        ]
    },
    {
        id: "tools",
        labelKey: "tools",
        icon: "fas fa-tools",
        items: [
            { label: "Android" },
            { label: "Firebase" },
            { label: "AWS", core: true },
            { label: "Docker" },
            { label: "Git" },
            { label: "PostgreSQL" },
            { label: "MongoDB" },
            { label: "MySQL" },
            { label: "MariaDB" },
            { label: "Supabase" },
            { label: "Prisma" },
            { label: "Tauri" },
            { label: "Datadog" }
        ]
    }
];
