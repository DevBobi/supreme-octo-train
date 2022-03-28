import React from 'react';
import Button from './Button';

const Contact = () => {
    return (
        <div>
            <section className="py-20 md:pt-30 bg-white text-bkack">

                <div className="container justify-end px-8 lg:flex">
                    <div className="text-center lg:text-left lg:w-8/12 px-5">
                        <h1 className="text-3xl lg:text-5xl xl:text-5xl font-normal leading-none antialiased">
                            Sign up for our newsletter
                        </h1>
                        <p className="text-xl lg:text-3xl mt-10 font-light">
                            Get the latest from us in tech, business, design – and why not life.
                        </p>
                        <form class="py-6 flex flex-col justify-center">
                            <div class="flex flex-col">
                                <label for="name" class="hidden">First Name</label>
                                <input type="name" name="name" id="name" placeholder="First Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-500 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div class="flex flex-col mt-4">
                                <label for="email" class="hidden">Last Name</label>
                                <input type="name" name="name" id="email" placeholder="Last Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-500 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div class="flex flex-col mt-4">
                                <label for="tel" class="hidden">Number</label>
                                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-500 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <button type="submit" class="md:w-32 bg-white duration-700 text-red-600 px-8 py-3 rounded-lg mt-4 border border-solid border-orange hover:bg-orange hover:text-white">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Contact;