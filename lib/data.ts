import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'prajwalkanade648@gmail.com',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/litekanade09' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/prajwal-kanade-a4528b27b/' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/prajwalkanade648/' },
    { name: 'Codolio', url: 'https://codolio.com/profile/lite_kanade09' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Canva',
            icon: '/logo/canva.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Real Time Sign Language Translator',
        slug: 'real-time-sign-language-translator', // Original slug from the first placeholder project
        sourceCode: 'https://github.com/litekanade09/Real-Time-Sign-Language-Translator', // ADDED: Placeholder source code link
        year: 2025,
        description: `
      A full-stack application designed for low-latency, real-time translation of sign language gestures using machine learning models integrated with server-side endpoints.
      
      <br/> <br/> Key Features:
      <ul>
        <li>📹 Real-Time Processing: Developed backend APIs to process live video streams and deliver real-time gesture predictions.</li>
        <li>🧠 ML Integration: Integrated OpenCV inference with server-side and frontend components for low-latency detection.</li>
        <li>📈 Reliability: Implemented dynamic result handling, improving response reliability by 20%.</li>
        <li>📱 UX: Optimized UI for cross-device real-time support, ensuring a seamless user experience.</li>
      </ul>`,
        role: `
      Full-Stack Developer
      <ul>
        <li>✅ Backend: Developed and optimized APIs for fast processing of live video streams.</li>
        <li>🧠 Integration: Handled the integration of OpenCV inference with server-side endpoints.</li>
        <li>🎨 Frontend: Built responsive React.js UI components for the live video feed and dynamic results.</li>
        <li>⚡ Performance: Optimized backend and UI performance for cross-device compatibility.</li>
      </ul>`,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'TypeScript',
            'TensorFlow.js',
            'OpenCV',
            'REST APIs',
        ],
        thumbnail: '/projects/thumbnail/rtslt.png', // Placeholder: Keep original photo
        longThumbnail: '/projects/long/rtslt.png', // Placeholder: Keep original photo
        images: [
            '/projects/images/rtslt.png', // Placeholder: Keep original photo
        ],
    },
    {
        title: 'NutriAl- Al Powered Nutrition and Diet Planner',
        slug: 'nutrial-ai', // Original slug from the first placeholder project
        sourceCode: 'https://github.com/litekanade09/Nutri-AI/tree/master', // ADDED: Placeholder source code link
        techStack: [
            'React.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'Random Forest',
        ],
        thumbnail: '/projects/thumbnail/NutriAI.png', // Placeholder: Keep original photo
        longThumbnail: '/projects/long/NutriAI.png', // Placeholder: Keep original photo
        images: [
            '/projects/images/NutriAi1.png', // Placeholder: Keep original photo
            '/projects/images/Nutriai2.png', // Placeholder: Keep original photo
            '/projects/images/Nutriai3.png', // Placeholder: Keep original photo
        ],
        year: 2025,
        description: `
            An AI-powered full-stack application that generates personalized diet plans using a Random Forest machine learning model. The platform manages user data and subscription tracking securely.
            
            <br/> <br/> Key Features:
            <ul>
                <li>🧠 AI Planning: Generates personalized diet plans based on user budget and goals.</li>
                <li>🔗 API Integration: Integrated Random Forest model outputs via Express.js endpoints for dynamic plan rendering.</li>
                <li>💾 Data Security: Managed a MongoDB database for secure storage of 70+ user entries and subscription tracking.</li>
                <li>📱 Responsive Design: Designed a responsive UI to display personalized diet plans effectively.</li>
            </ul>`,
        role: `
      Full-Stack Developer
      <ul>
        <li>✅ Backend: Developed APIs to generate and serve personalized diet plans.</li>
        <li>💾 Database: Managed MongoDB for secure data storage and subscription tracking.</li>
        <li>🧠 Integration: Integrated the Random Forest model with Express.js backend.</li>
        <li>🎨 Frontend: Built the React.js UI and ensured responsiveness across devices.</li>
      </ul>`,
    },
    {
        title: 'EduTrack',
        slug: 'edutrack', // Original slug from the first placeholder project
        sourceCode: 'https://github.com/litekanade09/VCET-Edutrack', // ADDED: Placeholder source code link
        techStack: [
            'React.js',
            'Tailwind CSS',
            'TypeScript',
            'Node.js',
            'MySQL',
            'API Integration',
            'JWT',
            'bcrypt',
        ],
        thumbnail: '/projects/thumbnail/Edutrack.png', // Placeholder: Keep original photo
        longThumbnail: '/projects/long/Edutrack.png', // Placeholder: Keep original photo
        images: [
            '/projects/images/Edutrack1.png', // Placeholder: Keep original photo
            '/projects/images/Edutrack2.png', // Placeholder: Keep original photo
            '/projects/images/Edutrack3.png', // Placeholder: Keep original photo
        ],
        year: 2025,
        description: `
      A full-stack application for managing student data, featuring robust search, filter, and sorting capabilities for large datasets. It includes secure user authentication and role-based access control.
      
      <br/> <br/> Key Features:
      <ul>
        <li>📊 Data Management: Advanced search, filter, and sorting operations for student records.</li>
        <li>🔐 Security: Implemented secure authentication and role-based access using JWT and bcrypt.</li>
        <li>🚀 Performance: Optimized queries and database schemas for low-latency handling of large datasets.</li>
        <li>📱 UI/UX: Developed interactive and reusable React.js UI components for tables and dashboards.</li>
      </ul><br/>
      `,
        role: `
      Full-Stack Developer
      <ul>
        <li>✅ Backend: Developed RESTful APIs for all student data management operations.</li>
        <li>💾 Database: Designed MySQL schemas and optimized queries with indexes and aggregation pipelines.</li>
        <li>🎨 Frontend: Built the React.js UI with a focus on scalability and responsiveness.</li>
        <li>🔗 Integration: Integrated Node.js APIs for dynamic data rendering.</li>
      </ul>
      `,
    },
    {
        title: 'Air Quality Index Prediction System',
        slug: 'aqi', // Original slug from the first placeholder project
        sourceCode: 'https://github.com/litekanade09/AQI-Prediction-System', // ADDED: Placeholder source code link
        techStack: [
            'XGBoost',
            'Streamlit',
            'Pandas',
            'Matplotlib',
            'Scikit-learn',
            'Python',
            'AI / Machine Learning',
        ],
        thumbnail: '/projects/thumbnail/Air-Quality.png', // Placeholder: Keep original photo
        longThumbnail: '/projects/long/Air-Quality.png', // Placeholder: Keep original photo
        images: [
            '/projects/images/Air-Quality.png', // Placeholder: Keep original photo
        ],
        year: 2024,
        description:
            `Developed an AI-powered Air Quality Index (AQI) Prediction System utilizing environmental dataset inputs. The system uses a machine learning approach to provide real-time AQI forecasts, demonstrating proficiency in data science pipeline development and deployment.
            
            <br/> <br/> Key Features:
            <ul>
                <li>🧠 AI Model: Core prediction logic built using the XGBoost algorithm for high accuracy.</li>
                <li>📊 Data Processing: Used Pandas and Scikit-learn for efficient data preprocessing, feature engineering, and model training on environmental data.</li>
                <li>🌐 Deployment: Deployed the prediction interface using Streamlit for easy user interaction and visualization.</li>
                <li>📈 Visualization: Integrated Matplotlib for visualizing prediction results and data patterns.</li>
            </ul>`,
        role: `
      Data Science / ML Developer
      <ul>
        <li>✅ Model Development: Trained and fine-tuned the XGBoost model for accurate AQI prediction.</li>
        <li>💻 Data Engineering: Managed the entire data pipeline from cleaning raw environmental data to feature selection using Pandas and Scikit-learn.</li>
        <li>🚀 Deployment: Built and hosted the interactive prediction web application using Streamlit.</li>
        <li>🔬 Analysis: Performed exploratory data analysis (EDA) and model performance evaluation.</li>
      </ul>`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Project Intern',
        company: 'DeltaSoft Systems',
        duration: 'July 2025 - October 2025',
    },
    {
        title: 'Full-Stack Developer',
        company: 'CodSoft',
        duration: ' March 2025 - May 2025',
    },
    {
        title: 'Frontend Developer',
        company: 'Prodigy Infotech',
        duration: 'December 2024 - February 2025',
    },
];
