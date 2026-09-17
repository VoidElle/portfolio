export interface Achievement {
    id: number;
    year?: string;
    title: string;
    subtitle: string;
    group: 'education' | 'certifications';
    dotColor?: string;
    detailsKey: string;
    chips: string[];
}

export const achievements: Achievement[] = [
    {
        id: 4,
        year: '2017',
        title: 'ITI Galileo Galilei',
        subtitle: 'Computer Science Diploma',
        group: 'education',
        dotColor: 'var(--c-swatch-purple)',
        detailsKey: 'achievements.entries.4.details',
        chips: [
            "C",
            "C++",
            "Java",
            "JavaScript",
            "PHP",
            "SQL",
            "HTML",
            "CSS",
            "MySQL",
            "MariaDB",
            "Agile",
            "SCRUM",
            "Git",
            "Docker",
            "AWS EC2"
        ]
    },
    {
        id: 3,
        year: '2019',
        title: 'Cisco Networking Academy',
        subtitle: 'Enterprise Networking & Telecommunications',
        group: 'education',
        dotColor: 'var(--c-swatch-blue)',
        detailsKey: 'achievements.entries.3.details',
        chips: [
            "Enterprise Networks",
            "Static Routing",
            "Dynamic Routing",
            "IPv4",
            "IPv6",
            "Subnetting",
            "Switching",
            "QoS",
            "Automation",
            "Virtualization",
            "Wireless LANs"
        ]
    },
    {
        id: 5,
        title: 'CCNA: Switching, Routing & Wireless Essentials',
        subtitle: 'Cisco Networking Academy',
        group: 'certifications',
        dotColor: 'var(--c-swatch-green)',
        detailsKey: 'achievements.entries.5.details',
        chips: [
            "Switching",
            "Routing",
            "Wireless",
            "WLAN"
        ]
    },
    {
        id: 6,
        title: 'CCNA: Enterprise Networking, Security & Automation',
        subtitle: 'Cisco Networking Academy',
        group: 'certifications',
        dotColor: 'var(--c-swatch-blue)',
        detailsKey: 'achievements.entries.6.details',
        chips: [
            "Enterprise Networking",
            "Security",
            "Automation"
        ]
    },
    {
        id: 9,
        title: 'Flutter & Dart - The Complete Guide [2022 Edition]',
        subtitle: 'Online Course',
        group: 'certifications',
        dotColor: 'var(--c-swatch-teal)',
        detailsKey: 'achievements.entries.9.details',
        chips: [
            "Flutter",
            "Dart"
        ]
    },
    {
        id: 8,
        title: 'English Proficiency Accelerator',
        subtitle: 'Language Certification',
        group: 'certifications',
        dotColor: 'var(--c-swatch-amber)',
        detailsKey: 'achievements.entries.8.details',
        chips: [
            "English"
        ]
    },
    {
        id: 7,
        title: 'Claude Partner Badge - Claude Code',
        subtitle: 'Anthropic',
        group: 'certifications',
        dotColor: 'var(--c-swatch-purple)',
        detailsKey: 'achievements.entries.7.details',
        chips: [
            "Claude Code",
            "AI"
        ]
    }
];
