import React, { useState } from 'react';
import HeroImage from '../svg/HeroImage';
import Button from '../components/Button';

const Hero = () => {
    const [changeHeader, setChangeHeader] = useState(false);
    //header change function
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };
    //change header by scrolling
    window.addEventListener("scroll", onChangeHeader);
    return (
        <>
            <section className={
                changeHeader ?
                    "py-20 md:pt-30 bg-white text-black"
                    :
                    " py-20 md:pt-30 bg-oxford-blue text-white"}>

                <div className="container justify-end px-8 lg:flex">
                    <div className="text-center lg:text-left lg:w-8/12 px-5">
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-normal leading-none antialiased">
                            A strategy, design, and technology partner for forward-thinking companies and societies.
                        </h1>
                        <p className="text-xl lg:text-3xl mt-20 font-light">
                            Consultancy and agency services, built on exceptional technological competence.
                        </p>
                        <div className="mt-5 md:mt-12">
                            <button type="submit" class="md:w-40 bg-white duration-700 text-orange px-8 py-4 rounded-lg mt-4 border border-solid border-orange hover:bg-orange hover:text-white">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </ >
    );
}

export default Hero;