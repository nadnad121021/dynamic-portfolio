import { TPortfolioInfo } from "./interfaces/portfolioInfo.interface";

const portfolioInfo: TPortfolioInfo = {
    name: 'Danilo Alingasa',
    title: 'Software Engineer',
    description: 'A passionate software engineer specializing in building robust and scalable backend systems using Node.js and Express.',
    resumeLink: "https://drive.google.com/uc?export=download&id=1haRKxoC8y9TOP0858ObxLgD1i08Axsmh",
    aboutMe: {
        quote: " - ❝ It takes thousands of inputs to achieve good output. ❞",
        greetings:`Greetings! I'm Dan, a highly skilled software engineer specializing in React.js and Node.js development. With a passion for building robust and scalable web applications, I bring over 5 years of experience to the table.I thrive in collaborative environments and have a proven track record of delivering high-quality solutions that meet client requirements. From crafting dynamic user interfaces with React.js to designing efficient server-side systems with Node.js, I have the expertise to bring your ideas to life. Let's work together to create exceptional software experiences that drive your business forward.`,
        philosophies: [
            {
                "title": "Coder",
                "description": "I have a strong passion for coding and thoroughly enjoy exploring emerging concepts within the IT industry.",
            },
            {
                "title": "Beginner's mindset",
                "description": "I constantly maintain a beginner's mindset, as it fuels my motivation to continuously strive for growth and improvement.",
            }
        ],
        isOpenToWork: true
    },
    socialMediaLinks: {
        github: "https://github.com/nadnad121021",
        linkedin: "https://www.linkedin.com/in/danilo-alingasa-a727241a2/",
        email: "alingasadan@gmail.com",
        facebook: "https://www.facebook.com/danilo.alingasa.7",
        twitter: "",
        instagram: "",
        phone: "+639365192469",
        skype: "live:.cid.a08eee29df0e2c17"
    },
    skills: [
        { category: 'Frontend', items: ['React', 'Javascript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'NPM', 'pnpm', 'TypeORM'] },
        { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Firebase'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira', 'Postman'] }
    ],
    education: [
        {
            degree: 'Certificate in Computer Technology',
            school: 'University of San Carlos - Cebu',
            location: 'Talamban, Cebu City, Philippines',
            period: '2017 - 2020',
            description: 'Major in Software Development',
            logo: "usc_logo.svg",
            achievements: [
                'I’ve studied core programming languages like C# and Java as part of my software development foundation.',
                'I’ve also learned essential web technologies including HTML, CSS, JavaScript, and Node.js.',
                'On the database side, I’ve worked with both SQL and NoSQL systems like MySQL and MongoDB.'
            ]
        }
    ],
    projects: [
        {
            title: 'Lear Clinic System - LCS',
            description: 'Designed to track OPD balances and issued medical slips for each employee at Lear Corporation. The system also monitors total PR amounts, usage, and remaining balances for partner vendors—primarily supporting operations at the Lear Clinic.',
            technologies: ['.NET', 'MS SQL Server', 'JQUERY', 'IIS'],
            logo: 'lear-login-sm.png',
            link: '#',
            github: '#',
            role: 'Full-Stack Developer',
            duration: "2018 - 2019",
        },
        {
            title: 'Lear Employee Certification System - LECS',
            description: 'A Skills Matrix application developed for Lear Corporation to efficiently track employee certifications, covering both initial certifications and recertifications.',
            technologies: ['.NET', 'MS SQL Server', 'JQUERY', 'IIS', 'Bootstrap'],
            logo: 'lear-login-sm.png',
            link: '#',
            github: '#',
            role: 'Full-Stack Developer',
            duration: "2018 - 2019",
        },
        {
            title: 'Task King System - TKS',
            description: 'A task automation system built to manage daily responsibilities among scholar students, such as dishwashing, dining hall duties, gardening & etc. The application simplifies task scheduling by automatically assigning chores based on predefined rules, rotation cycles, or availability, helping ensure fair and consistent distribution of responsibilities in a shared living environment.',
            technologies: ['NodeJS', 'MySQL', 'JavaScript', 'JQUERY'],
            logo: 'task-king-sm.png',
            link: '#',
            github: '#',
            role: 'Backend Developer',
            duration: "2018 - 2019"
        },
        {
            title: 'DCISM Web-Based Resource Management System',
            description: 'A capstone project featuring inventory management, item borrowing, and reservation functionalities, all seamlessly integrated with SMS notification support.',
            technologies: ['.NET', 'MS SQL Server', 'JQUERY', 'Bootstrap'],
            logo: 'dcism-sm.png',
            link: '#',
            github: '#',
            role: 'Lead Developer',
            duration: "2018 - 2019"
        }
    ],
    experiences: [
        {
            title: 'Software Engineer',
            company: 'Mojo AI',
            period: 'December 2023 - July 2025',
            description: 'Worked as a Back-End Developer building scalable services using Node.js, TypeScript, and TypeORM. Managed end-to-end deployment workflows through Git-based CI/CD pipelines, containerizing applications with Docker and deploying to AWS ECS with image management via ECR.',
            achievements: [
                'Designed and optimized RESTful APIs using Node.js, Express.js and TypeScript, improving backend performance.',
                'Implemented CI/CD pipelines using AWS ECR and ECS.',
                'Managed PostgreSQL database, ensuring high data integrity and query efficiency.',
                'Conducted peer code reviews, improving code quality and reducing post-deployment bugs.',
                'Collaborated in Agile sprints, driving on-time delivery of high-priority backend features.'
            ],
            logo: 'mojo-ai.svg'
        },
        {
            title: 'Node.js Developer',
            company: 'DGV SmartStart Inc.',
            period: 'July 2022 – December 2023',
            description: 'Developed RESTful APIs with Node.js/Express and integrated them with React front-end components to enable smooth client-server communication.',
            achievements: [
                'Refactored and migrated existing JavaScript codebase to TypeScript.',
                'Managed and maintained MongoDB database, optimizing queries and ensuring data consistency.',
                'Collaborated with cross-functional teams to integrate new API endpoints and improve system reliability.'
            ],
            logo: 'smartstart.jpeg'
        },
        {
            title: 'Software Engineer',
            company: 'DNA Micro Software Inc.',
            period: 'October 2020 – July 2022',
            description: 'Worked as a semi full-stack developer, primarily focused on back-end development using Node.js and Express. On the front-end, collaborated closely with React developers by implementing integration logic, connecting UI components to backend services, and ensuring seamless data flow between client and server.',
            achievements: [
                'Developed microservice-based architectures to improve modularity, maintainability, and scalability.',
                'Integrated frontend components with backend APIs, ensuring seamless user experiences.',
            ],
            logo: 'dna.jpeg'
        },
        {
            title: 'Application Developer Intern',
            company: 'Lear Corporation',
            period: 'July 2019 - April 2020',
            description: 'Developed back-end solutions with the .NET Framework to streamline and eliminate manual paperwork, improving operational efficiency.',
            achievements: [
                'Developed internal web applications using .NET and MS SQL Server, automating reporting workflows.',
                'Migrated manual Excel-based processes into web tools, improving data accuracy and accessibility across teams.',
            ],
            logo: 'lear.png'
        }
    ],
    reviews: [
        {
            name: 'Jane Repollo',
            role: 'Software Engineer',
            company: 'DNA Micro Software Inc.',
            image: 'jane.png',
            review: `I have developed a deep admiration for Danilo's exceptional technical skills over our nearly one year of collaboration, which are only surpassed by his remarkable patience and professional attitude toward his coworkers.`
        },
        {
            name: 'Cris Laurence Lorejas',
            role: 'Software Engineer',
            company: 'DGV SmartStart Inc.',
            image: 'cris.png',
            review: 'Dan and I have collaborated for over a year on Backend and database tasks. Working with Dan is enjoyable due to his excellent programming skills, adaptability, timely delivery, and open communication. His clear diagrams and simple yet effective code make collaboration smooth and productive.'
        }
    ]
};

export const defaultPortfolio: TPortfolioInfo = portfolioInfo