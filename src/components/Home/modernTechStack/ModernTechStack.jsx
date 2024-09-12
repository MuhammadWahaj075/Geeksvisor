'use client';

import { useState } from 'react';
import { tabs } from '@/utils/mockData';
import { AnimatePresence, motion } from 'framer-motion';
import './style.css'

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
       

        <div className="max-w-[1400px] px-5 flex flex-col items-start  justify-center shadow-2xl mt-[72px]">
          <ul className="flex items-center flex-wrap  justify-center rounded-t-xl bg-[#1b1b1d7a] p-2">
            {tabs.map((tab, index) => (
              <div key={tab.title} className="flex items-center modernTechStackTabs w-[200px] sm:w-[250px]  md:w-auto ">
                <motion.li
                  className={`description_text modernTechStackTabs w-[200px] sm:w-[250px] md:w-auto cursor-pointer flex items-center flex-col gap-2 p-3 rounded-lg ${selectedTab === tab.title ? 'bg-black text-white' : 'text-black hover:text-white transition-all'
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
                {index < tabs.length - 1 && (
                  <div className="w-[1px] h-10 hidden md:block  bg-gray-400 md:mx-4" />
                )}
              </div>
            ))}
          </ul>
          <div className="bg-[#1b1b1d7a] rounded-b-xl w-[100%] sm:max-w-[710px] lg:max-w-[810px] shadow-md p-5">
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
                      {Array.isArray(tab.content) ? (
                        <ul className="mt-4 description_text list-disc pl-5">
                          {tab.content.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-4 description_text">{tab.content}</p>
                      )}
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
