// import React from "react";
// import aboutImg from "../assets/images/mysocialpic.jpg";

// const About = () => {
//     const info = [
//         { text: "Years experience", count: "0.6" },
//         { text: "Completed Projects", count: "8" },
//         { text: "Companies Work", count: "03" },
//     ];
//     //about section 
//     return (
//         <section id="about" className="py-10 text-white">
//             <div className="text-center mt-8">
//                 <h3 className="text-4xl font-semibold">
//                     About <span className="text-cyan-600">Me</span>
//                 </h3>
//                 <p className="text-gray-400 my-3 text-lg">My introduction</p>
//                 <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
//                     <div className="p-2">
//                         <div className="text-gray-300 my-3">
//                             <p className="text-justify leading-7 w-11/12 mx-auto">
//                                 Hello, I'm  front end web developer with technology reactjs.I always look towards obtaining a challenging and competitive environment.
//                                 A Fast Learner with Strong Time Management and Multitasking
//                                 Skills.Fluent in English with Good Communication and Interpersonal Skills. I have good writing skill.
//                                 Apart from that I try to be a competitive coder along .
//                             </p>
//                             <div className="flex mt-10 items-center gap-7">
//                                 {info.map((content) => (
//                                     <div key={content.text}>
//                                         <h3 className="md:text-4xl text-2xl font-semibold text-white">
//                                             {content.count}
//                                             <span className="text-cyan-600">+</span>{" "}
//                                         </h3>
//                                         <span className="md:text-base text-xs">{content.text}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                             <br />
//                             <br />
//                             <a href="../assets/mycv.pdf" download="mycv.pdf">
//                                 <button className="btn-primary">Download CV</button>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
//                         <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
//                             <img
//                                 src={aboutImg}
//                                 alt=""
//                                 className="w-full object-cover bg-cyan-600 rounded-xl"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
import React from "react";
import aboutImg from "../assets/images/mysocialpic.jpg";
import mycv from "../assets/mycv.pdf"; // Import the PDF file

const About = () => {
    const info = [
        { text: "Years experience", count: "0.6" },
        { text: "Completed Projects", count: "8" },
        { text: "Companies Work", count: "03" },
    ];

    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                Hello, I'm a front-end web developer with expertise in ReactJS. I thrive in challenging and competitive environments, possess strong time management and multitasking skills, and am fluent in English with good communication and interpersonal skills. I also have a passion for competitive coding.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <a href={mycv} download="mycv.pdf"> {/* Updated href attribute */}
                                <button className="btn-primary">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

