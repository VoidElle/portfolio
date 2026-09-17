export interface Achievement {
    id: number;
    year?: string;
    title: string;
    subtitle: string;
    dotColor?: string;
    detailsKey: string;
    chips: string[];
}

export const achievements: Achievement[] = [
    {
        id: 5,
        title: 'CCNA: Switching, Routing & Wireless Essentials',
        subtitle: 'Cisco Networking Academy',
        dotColor: '#22c55e',
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
        dotColor: '#3b82f6',
        detailsKey: 'achievements.entries.6.details',
        chips: [
            "Enterprise Networking",
            "Security",
            "Automation"
        ]
    },
    {
        id: 7,
        title: 'Claude Partner Badge - Claude Code',
        subtitle: 'Anthropic',
        dotColor: '#a855f7',
        detailsKey: 'achievements.entries.7.details',
        chips: [
            "Claude Code",
            "AI"
        ]
    },
    {
        id: 8,
        title: 'English Proficiency Accelerator',
        subtitle: 'Language Certification',
        dotColor: '#f59e0b',
        detailsKey: 'achievements.entries.8.details',
        chips: [
            "English"
        ]
    },
    {
        id: 9,
        title: 'Flutter & Dart - The Complete Guide [2022 Edition]',
        subtitle: 'Online Course',
        dotColor: '#14b8a6',
        detailsKey: 'achievements.entries.9.details',
        chips: [
            "Flutter",
            "Dart"
        ]
    },
    {
        id: 3,
        year: '2019',
        title: 'Cisco Networking Academy',
        subtitle: 'Enterprise Networking & Telecommunications',
        dotColor: '#3b82f6',
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
        id: 4,
        year: '2017',
        title: 'ITI Galileo Galilei',
        subtitle: 'Computer Science Diploma',
        dotColor: '#a855f7',
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
    }
];
