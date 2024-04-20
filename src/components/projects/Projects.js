import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Mind Mate.ai"
          des="MindMate.AI is a Next.js and TypeScript-powered web project allowing users to create AI companions for dynamic conversations. Leveraging the Llama 13b model for natural language processing, it employs MongoDB for data storage and Pinecone for vector database management, offering a personalized and interactive AI experience."
          src={projectOne}
          github="https://github.com/AdityaSharma2003/MindMate.ai"
        />
        <ProjectsCard
          title="Language Learning Portal"
          des="A comprehensive web-based language learning portal designed with HTML, CSS, and JavaScript. Utilizes PostgreSQL for robust data management and session handling for user authentication. The portal empowers users to learn any language efficiently while tracking individual progress through personalized score tracking, enhancing the learning experience."
          src={projectTwo}
          github="https://github.com/Amogh1001/DBMS_Project"
        />
        <ProjectsCard
          title="Question Answering System"
          des="Implemented a deep learning-based question answering system utilizing the RoBERTa model for Named Entity Recognition (NER) and relation extraction. Integrated with Neo4j graph database for knowledge representation, enabling the generation of Cypher queries to fetch relevant information. Additionally, employed another model to generate precise answers to user queries. "
          src={projectThree}
          github="https://github.com/AdityaSharma2003/NLP-AI_based_Question_Answering_System-SEM-5-Project-"
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects