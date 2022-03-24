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
        <div>
            <section className={
                changeHeader ?
                    "pt-20 md:pt-30 bg-white text-black"
                    :
                    " pt-20 md:pt-30 bg-oxford-blue text-white"}>

                <div className="container justify-end px-8 lg:flex">
                    <div className="text-center lg:text-left lg:w-8/12 px-5">
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-normal leading-none ">
                            A strategy, design, and technology partner for forward-thinking companies and societies.
                        </h1>
                        <p className="text-xl lg:text-3xl mt-20 font-light">
                            Consultancy and agency services, built on exceptional technological competence.
                        </p>
                        <p className="mt-5 md:mt-12 border-red">
                            <Button size="lg">Get Started</Button>
                        </p>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Hero;