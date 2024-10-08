import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { ProjectList } from '../../data/Projectlist'

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-auto py-20 border-b-[1px] mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Projects"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                {ProjectList.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.Name}
                        des={item.des}
                        src={item.img}
                        link={item.git}
                        web={item.web}
                    />

                ))}

            </div>
        </section>
    )
}

export default Projects