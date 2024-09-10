'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaAws, FaReact, FaRobot, FaLink } from 'react-icons/fa'; // Importing icons from react-icons

const tabs = [
  {
    title: "Backend & AWS",
    content: `Node.js: A JavaScript runtime that allows for building scalable network applications, enabling efficient server-side scripting.
AWS Lambda: A serverless compute service that runs your code in response to events, allowing for automatic scaling and management of resources without the need for server provisioning.
Amazon API Gateway: A fully managed service that enables you to create, publish, maintain, and secure APIs at any scale, facilitating communication between your frontend and backend services.
Amazon DynamoDB: A fully managed NoSQL database service that offers fast and predictable performance with seamless scalability, ideal for handling large volumes of data.
Amazon S3: A scalable object storage service for storing and retrieving any amount of data, which is essential for serving static assets and backups.
AWS Elastic Load Balancer: Distributes incoming application traffic across multiple targets, ensuring high availability and reliability by automatically adjusting to traffic demands.
Amazon RDS: A managed relational database service that simplifies database setup, operation, and scaling, providing automated backups and patch management.
`,
    icon: <FaAws size={25} />
  },
  {
    title: "Frontend",
    content: `Next.js: A React framework for building server-rendered applications with features like static site generation and API routes, enhancing performance and SEO.
TypeScript: A superset of JavaScript that adds optional static typing, helping to catch errors during development and improving code maintainability.
Tailwind CSS: A utility-first CSS framework that provides a set of pre-defined classes for styling UI components quickly and consistently, allowing for rapid design and development.
`,
    icon: <FaReact size={25} />
  },
  {
    title: "AI Integration",
    content: `Generative AI: We integrate advanced AI models to enhance user experience by generating personalized content based on user interactions. This includes:
Natural Language Processing (NLP): Utilizing NLP techniques to understand and process user input, enabling the app to respond intelligently and contextually.
Content Generation: Automatically creating relevant content, such as product descriptions, recommendations, or even creative writing, tailored to user preferences.
Machine Learning Models: Leveraging pre-trained models and fine-tuning them for specific tasks, such as sentiment analysis or user behavior prediction, to improve engagement and personalization.
Amazon Bedrock: A fully managed service that offers access to a variety of foundation models (FMs) from leading AI companies, allowing us to build and scale AI applications efficiently.
Real-time Analytics: Implementing real-time data processing to analyze user interactions and feedback, allowing the app to adapt and improve its responses over time.
`,
    icon: <FaRobot size={25} />
  },
  {
    title: "API Integration",
    content: `REST API: We implement RESTful APIs to facilitate seamless communication between the frontend and backend. This architecture allows for easy integration with third-party services and provides a straightforward way to access resources.
GraphQL: We use GraphQL for more flexible and efficient data retrieval. With GraphQL, clients can request exactly the data they need, reducing over-fetching and under-fetching of information, and improving performance.
`,
    icon: <FaLink size={25} />
  }
];

export const ModernTech = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);

  return (
    <div className="!mt-16 md:!mt-10 lg:!mt-[160px]">
      <div className="flex items-center flex-col justify-center">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="title_text">Modern Tech Stack</h1>
          <p className="w-[350px] lg:w-[527px] description_text">
            We build apps with modern and future-proof tech stacks.
          </p>
        </div>
        <div className="max-w-[1400px] flex flex-col items-start  justify-center mt-[72px]">
          <ul className="flex items-center flex-wrap gap-5 justify-center bg-[#1b1b1d7a] p-2">
            {tabs.map((tab) => (
              <motion.li
                key={tab.title}
                className={`description_text cursor-pointer flex items-center flex-col gap-2 p-3 rounded-lg ${selectedTab === tab.title ? 'bg-black text-white' : 'text-black'
                  }`}
                onClick={() => setSelectedTab(tab.title)}
                layoutId={tab.title === selectedTab ? "selectedTab" : undefined}
              >
                <div className='flex items-center gap-3'>
                  <span>{tab.icon}</span>
                  <span>{tab.title}</span>
                </div>
                {tab.title === selectedTab && (
                  <motion.div
                    layoutId="underline"
                    className="w-full h-1 rounded-lg bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
          <div className="bg-[#1b1b1d7a] max-w-[770px] shadow-md p-5">
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  tab.title === selectedTab && (
                    <motion.div
                      key={tab.title}
                      layoutId="tabContent"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-2xl text-neutral font-bold">{tab.title}</h2>
                      <p className="mt-4 description_text">{tab.content}</p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
