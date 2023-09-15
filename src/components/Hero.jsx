// import React from "react";
// import hero from "../assets/images/phero2.png";
// const Hero = () => {
//   const social_media = [
//     "logo-instagram",
//     "logo-facebook",
//     "logo-linkedin",
//     "logo-twitter",
//   ];
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex py-10 md:flex-row flex-col items-center"
//     >
//       <div className="flex-1 flex items-center justify-center h-full">
//         <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
//       </div>
//       <div className="flex-1">
//         <div className="md:text-left text-center">
//           <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
//             <span className="text-customblue md:text-6xl text-5xl">
//               Hello!
//               <br />
//             </span>
//             My Name is <span>Vaishali Singh</span>
//           </h1>
//           <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
//             Fullstack Developer
//           </h4>
//           <button className="btn-primary mt-8">Contact Me</button>
//           <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//             {social_media?.map((icon) => (
//               <div
//                 key={icon}
//                 className="text-gray-600 hover:text-white cursor-pointer "
//               >
//                 <ion-icon name={icon}></ion-icon>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import hero from "../assets/images/phero2.png";
import "./Hero.css"; // Import the CSS file for styling

const Hero = () => {
    //const social_media = [
    //   "logo-instagram",
    //   "logo-github",
    //   "logo-linkedin",
    //   "logo-twitter",
    // ];
    const social_media = {
        instagram: "https://instagram.com/vaishali231305?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
        github: "https://github.com/singhvaishu",
        linkedin: " https://www.linkedin.com/in/vaishali-singh-2273361bb",
        twitter: "https://twitter.com/Singhvaishu16?t=v7Hwg-zOeOvijInqyQ-oQQ&s=09",

    };

    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-customblue md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>

                        <span className="animated-text">My Name is Vaishali Singh</span>
                        {/* Use the "animated-text" class for animation */}
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        Frontend Developer
                    </h4>
                    <button className="btn-primary mt-8">Contact Me</button>
                    {/* <a href={contactMeUrl} target="_blank" rel="noopener noreferrer">
            <button className="btn-primary mt-8">Contact Me</button>
          </a> */}
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {Object.keys(social_media).map((platform) => (
                            <a
                                key={platform}
                                href={social_media[platform]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-white cursor-pointer"
                            >
                                <ion-icon name={`logo-${platform}`}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
