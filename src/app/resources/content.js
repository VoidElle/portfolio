import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Luca",
  lastName: "Del Corona",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mobile developer",
  avatar: "/images/avatar.jpeg",
  location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Italian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/VoidElle",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/luca-del-corona/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lucadelc@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mobile developer</>,
  subline: (
    <>
      I'm Luca, Mobile developer at <InlineCode>Avvale</InlineCode>, where i make
      <br />native Android and cross platform mobile applications.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a highly motivated and results-driven Software Developer with experience in the software development and consulting industry.<br />
        Currently working in hybrid mobile applications development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Avvale SPA",
        timeframe: "Sept 2022 - Present",
        role: "Mobile developer - Consultant",
        achievements: [
          <>Built cross-platform mobile applications using Dart, Flutter, Typescript and React Native</>,
          <>Built native Android applications using Java and Kotlin</>,
          <>Integrated AWS SDKs: S3, Amplify, AppSync, Cognito</>,
          <>Integrated Firebase SDKs: Firestore, Crashlytics, Analytics, Remote config</>,
          <>Onboarding and training of new hires in Flutter</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        company: "Infinity Solutions Commercial Srl",
        timeframe: "Jan 2020 - Jul 2022",
        role: "Full stack developer",
        achievements: [
          <>Designed UI/UX interfaces for mobile applications</>,
          <>Developed cross-platform hybrid applications using Flutter and Dart</>,
          <>Created RESTful APIs using Node.js and Express</>,
          <>Designed, managed and maintained MongoDB databases</>,
          <>Implemented ads within mobile application environments</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Cisco Networking Academy",
        description: <>
          A special collaboration between my high school and Cisco allowed me to specialize in Systems and Networks, gaining expertise in corporate networking and IT security.<br /><br />
          Courses completed:
        </>,
        achievements: [
            <>CCNAv7: Enterprise Networking, Security, and Automation</>,
            <>CCNAv7: Switching, Routing, and Wireless Essentials</>,
            <>CCNA R&S: Introduction to Networks</>,
        ],
      },
      {
        name: "ITI Galileo Galilei",
        description: <>
          Advanced Training Program in Information Technologies & Telecommunications<br /><br />
          Core topics explored:<br />
        </>,
        achievements: [
            <>Programming languages: C, C++, Java, JavaScript, PHP, and SQL</>,
            <>Web technologies: HTML and CSS</>,
            <>RESTful API development using XML and JSON</>,
            <>Database management: MySQL and MariaDB</>,
            <>SCRUM Agile software development</>,
            <>Version control with Git, GitHub, Gitlab, Bitbucket</>,
            <>Application deployment with AWS EC2 and Docker</>
        ]
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Developed projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
