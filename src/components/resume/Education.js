import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="Indian Institute Of Information Technology, Kalyani (2021 - 2025)"
            result="8.6/10"
            des="IIIT Kalyani provided a robust foundation in computer science, fostering practical skills and theoretical knowledge essential for my engineering pursuits."
          />
          <ResumeCard
            title="Senior Secondary School Education"
            subTitle="The Aryan International School, Varanasi (2020 - 2021)"
            result="91/100"
            des="The Aryan International School, Varanasi, offered a rich educational experience, emphasizing holistic development and fostering a passion for lifelong learning."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="The Aryan International School, Varanasi (2018 - 2019)"
            result="92.6/100"
            des="The Aryan International School, Varanasi, facilitated a nurturing learning environment, equipping students with essential skills and knowledge for future endeavors."
          />
        </div>
      </div>
      {/* part Two */}
{/* 
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education