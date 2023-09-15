import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project_person from "../assets/images/pimage1.png";
import "swiper/css/bundle";


import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
    const projects = [
        {
            img: project1,
            name: "Spotifymusic",
            github_link: "https://github.com/singhvaishu/Spotify-music-clone",
            live_link: "https://singhvaishu.github.io/Spotify-music-clone/",
        },
        {
            img: project2,
            name: "TextUtils",
            github_link: "https://github.com/singhvaishu/TextUtils",
            live_link: "https://singhvaishu.github.io/TextUtils/",
        },
        {
            img: project3,
            name: "Temperature-Converter",
            github_link: "https://github.com/singhvaishu/Temperature-Converter",
            live_link: "https://singhvaishu.github.io/Temperature-Converter/",
        },
        {
            img: project4,
            name: "Weather-app",
            github_link: "https://github.com/singhvaishu/Weather-app",
            live_link: "https://singhvaishu.github.io/Weather-app/",
        },
        {
            img: project5,
            name: "Analog-Clock",
            github_link: "https://github.com/singhvaishu/Analog-Clock",
            live_link: "https://singhvaishu.github.io/Analog-Clock/",
        },
    ];
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidesPerview={2.2}
                        spaceBetween={20}

                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {projects.map((project_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-400 rounded-xl">
                                    <img src={project_info.img} alt="" className="rounded-lg" />
                                    <h3 className="text-xl my-4">{project_info.name}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project_info.github_link}
                                            target="_blank"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={project_info.live_link}
                                            target="_blank"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:block hidden">

                    <img
                        src={project_person}
                        alt=""
                        className="project-person-img" // Add the CSS class for the animation
                    />

                    {/* <img src={project_person} alt="" /> */}
                </div>
            </div>
        </section>
    );
};

export default Project;

// ProjectSlider.jsx
// import React, { useState } from "react";
// import project_person from "../assets/images/pimage1.png";
// import project1 from "../assets/images/project-1.jpg";
// import project2 from "../assets/images/project-2.jpg";
// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.jpg";
// import "./Project.css"; // Import the CSS file

// const Project = () => {
//     const projects = [
//         {
//             img: project1,
//             name: "Spotifymusic",
//             github_link: "https://github.com/singhvaishu/Spotify-music-clone",
//             live_link: "https://singhvaishu.github.io/Spotify-music-clone/",
//         },
//         {
//             img: project2,
//             name: "TextUtils",
//             github_link: "https://github.com/singhvaishu/TextUtils",
//             live_link: "https://singhvaishu.github.io/TextUtils/",
//         },
//         {
//             img: project3,
//             name: "Temperature-Converter",
//             github_link: "https://github.com/singhvaishu/Temperature-Converter",
//             live_link: "https://singhvaishu.github.io/Temperature-Converter/",
//         },
//         {
//             img: project4,
//             name: "Weather-app",
//             github_link: "https://github.com/singhvaishu/Weather-app",
//             live_link: "https://singhvaishu.github.io/Weather-app/",
//         },
//         {
//             img: project5,
//             name: "Analog-Clock",
//             github_link: "https://github.com/singhvaishu/Analog-Clock",
//             live_link: "https://singhvaishu.github.io/Analog-Clock/",
//         },
//         // ... (rest of your projects)
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0);

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//     };

//     return (
//         <section id="projects" className="py-10 text-white">
//             {/* ... (your existing JSX) */}
//             <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
//                 <div className="lg:w-2/3 w-full">
//                     <div className="slider">
//                         {projects.map((project_info, i) => (
//                             <div
//                                 key={i}
//                                 className={`slide ${i === currentSlide ? "active" : ""}`}
//                             >
//                                 <div className="h-fit w-full p-4 bg-slate-400 rounded-xl">
//                                     <img src={project_info.img} alt="" className="rounded-lg" />
//                                     <h3 className="text-xl my-4">{project_info.name}</h3>
//                                     <div className="flex gap-3">
//                                         <a
//                                             href={project_info.github_link}
//                                             target="_blank"
//                                             className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                                         >
//                                             Github
//                                         </a>
//                                         <a
//                                             href={project_info.live_link}
//                                             target="_blank"
//                                             className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                                         >
//                                             Live Demo
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button onClick={prevSlide}>Previous</button>
//                     <button onClick={nextSlide}>Next</button>
//                 </div>
//                 <div className="lg:block hidden">
//                     <img
//                         src={project_person}
//                         alt=""
//                         className="project-person-img" // Add the CSS class for the animation
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Project;
