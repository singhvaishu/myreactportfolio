import React from "react";
import hireMe from "../assets/images/hireme4.png";
const Hireme = () => {
    return (
        <section id="hireme" className="py-10 px-3 text-black">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Hire <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
            </div>
            <div className="bg-pink-200 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Do you want any work from me?
                    </h2>
                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-black-200 leading-6">
                        You should hire me as a Frontend developer because I bring a strong foundation in web technologies and a track record of delivering high-quality projects.
                        With expertise in the MERN stack, I can efficiently design, develop, and optimize web applications. My problem-solving skills, attention to detail,
                        and commitment to staying updated with industry trends make me a valuable asset. I thrive in collaborative environments, communicate effectively,
                        and adapt to evolving project requirements. By hiring me, you're gaining a dedicated developer who is passionate about creating web solutions
                        that meet your goals and exceed expectations.
                    </p>
                    <button className="btn-primary mt-10">Say Hello</button>
                </div>
                <img
                    src={hireMe}
                    alt=""
                    className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                />
            </div>
        </section>
    );
};

export default Hireme;
