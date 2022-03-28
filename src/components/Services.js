import React from 'react';

const Services = ({ service }) => {
    console.log(service);

    return (
        <div className="container overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={service?.img}
                className="object-cover w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    {/* <a
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-400 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                >
                    traveling
                </a> */}
                    <span className="text-gray-600">{service?.category}</span>
                </p>

                <p className="font-medium mb-2 text-gray-700">
                    {service?.desc}
                </p>
            </div>
        </div>
    );
}
export default Services;
