import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import Ecommerce from '../assets/Ecommerce.png'
import Netflix from '../assets/Netflix.png'
import Spicybits from '../assets/SpicyBites.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'A personal portfolio website showcasing my projects, skills, and passion for web development, highlighting my expertise in full-stack development and design.',
          image: Portfolio,
          live: "#",
          github: "#"
        },
        {
          title: 'Ecommerce Website',
          desc: 'An eCommerce website built to provide a seamless shopping experience, featuring product listings, secure payment integration, and user-friendly navigation.',
          image: Ecommerce,
          live: "https://ecommerce181.netlify.app//",
          github: "https://github.com/Yashvantrayte/Ecommerce-Website-React-Project.git"
        },
        {
          title: 'Spicybits',
          desc: 'SpicyBites is a restaurant app that allows users to browse menus, place orders, and enjoy a smooth, intuitive food delivery experience with real-time order tracking.',
          image: Spicybits,
          live: "https://spicybites18.netlify.app/",
          github: "#"
        },
        {
          title: 'Netflix',
          desc: 'The Netflix clone is a streaming platform that replicates key features of Netflix, including user authentication, content categorization, and seamless video playback, providing a rich and responsive entertainment experience.',
          image: Netflix,
          live: "#",
          github: "#"
        },
       
        {
          title: 'Super Car',
          desc: 'SuperCars is a high-performance website showcasing luxury and exotic cars, featuring detailed specifications, stunning visuals, and a seamless user experience for car enthusiasts.',
          image: Supercar,
          live: "https://supercar18.netlify.app/",
          github: "https://github.com/Yashvantrayte/SuperCars"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
