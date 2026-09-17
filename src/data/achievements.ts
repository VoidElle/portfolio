export interface Achievement {
    id: number;
    startDate?: string;
    endDate?: string;
    issuedDate?: string;
    expiryDate?: string;
    certificateUrl?: string;
    title: string;
    subtitle: string;
    group: 'education' | 'certifications';
    dotColor?: string;
    detailsKey: string;
    chips: string[];
}

export const achievements: Achievement[] = [
    {
        id: 3,
        startDate: '2019-01',
        endDate: '2022-04',
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
        id: 4,
        startDate: '2017-01',
        endDate: '2022-06',
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
        id: 7,
        issuedDate: '2026-09',
        expiryDate: '2027-03',
        certificateUrl: 'https://www.credly.com/earner/earned/badge/d57eaa60-f238-47f6-931d-71851baa7edf',
        title: 'Claude Partner Badge - Claude Code',
        subtitle: 'Anthropic',
        group: 'certifications',
        dotColor: 'var(--c-swatch-purple)',
        detailsKey: 'achievements.entries.7.details',
        chips: [
            "Claude Code",
            "AI"
        ]
    },
    {
        id: 10,
        issuedDate: '2025-04',
        title: 'Overview su linguaggi di programmazione in ambito cloud',
        subtitle: 'DELMOFORM',
        group: 'certifications',
        dotColor: 'var(--c-swatch-teal)',
        detailsKey: 'achievements.entries.10.details',
        chips: [
            "Cloud",
            "Programming Languages"
        ]
    },
    {
        id: 11,
        issuedDate: '2024-04',
        expiryDate: '2026-04',
        title: 'IELTS Academic 7.5',
        subtitle: 'British Council',
        group: 'certifications',
        dotColor: 'var(--c-swatch-amber)',
        detailsKey: 'achievements.entries.11.details',
        chips: [
            "English",
            "C1"
        ]
    },
    {
        id: 8,
        issuedDate: '2024-01',
        title: 'English Proficiency Accelerator',
        subtitle: 'Edusogno',
        group: 'certifications',
        dotColor: 'var(--c-swatch-amber)',
        detailsKey: 'achievements.entries.8.details',
        chips: [
            "English"
        ]
    },
    {
        id: 12,
        issuedDate: '2022-09',
        certificateUrl: 'https://www.udemy.com/certificate/UC-db5734f8-4557-4ebf-8c55-ebde0f089706/',
        title: 'Symfony Web Development Complete Guide: Beginner To Advanced',
        subtitle: 'Udemy',
        group: 'certifications',
        dotColor: 'var(--c-swatch-teal)',
        detailsKey: 'achievements.entries.12.details',
        chips: [
            "PHP",
            "Symfony"
        ]
    },
    {
        id: 13,
        issuedDate: '2022-07',
        certificateUrl: 'https://www.udemy.com/certificate/UC-b3e808fb-9fd5-421b-ac70-3184923d05da/',
        title: 'The Complete Git Guide: Understand and master Git and Github',
        subtitle: 'Udemy',
        group: 'certifications',
        dotColor: 'var(--c-swatch-teal)',
        detailsKey: 'achievements.entries.13.details',
        chips: [
            "Git",
            "GitHub"
        ]
    },
    {
        id: 5,
        issuedDate: '2022-04',
        certificateUrl: 'https://www.credly.com/badges/67479c58-c1b6-4c5f-aa3c-2654600f8112/public_url',
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
        issuedDate: '2021-12',
        certificateUrl: 'https://www.udemy.com/certificate/UC-a1457eb1-7e56-458b-bbe8-169290a816fc/',
        title: 'Flutter & Dart - The Complete Guide [2022 Edition]',
        subtitle: 'Udemy',
        group: 'certifications',
        dotColor: 'var(--c-swatch-teal)',
        detailsKey: 'achievements.entries.9.details',
        chips: [
            "Flutter",
            "Dart"
        ]
    },
    {
        id: 6,
        issuedDate: '2021-08',
        certificateUrl: 'https://www.credly.com/badges/3edbdead-57f1-4d2d-95e6-b89e0b8a2bfe/public_url',
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
    }
];
