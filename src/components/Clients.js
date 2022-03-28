
import React from 'react'


const Clients = () => {
    return (
        <div className="mx-auto py-10 px-10 px-4 w-full max-w-7xl bg-white text-gray-800">
            <div className="flex flex-col items-center space-y-12">

                {/* :TITLE CONTAINER */}
                <div className="mx-auto max-w-2xl space-y-3 text-center">
                    {/* ::Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">Our Trusted Partners</h2>
                </div>


                {/* :PARTNERS LOGOS */}
                <div className="grid grid-cols-6 gap-6">

                    {/* ::Partner 1 -> ALL */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://fancytailwind.com/static/all-limitless-logo-a2bc67b04c70cbdaf47b69769ee38c39.svg" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 2 -> Stellantis */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://fancytailwind.com/static/stellantis-logo-ee3d9a8d3b58a82e1a508260c6daa19a.svg" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 3 -> Blablacar */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://fancytailwind.com/static/blablacar-logo-black-d14f356f24cf3b23017d777b9909293c.svg" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 4 -> Boursorama */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://fancytailwind.com/static/boursorama-banque-logo-black-c5350d0ae1d37f43c2fe206580f279bb.svg" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 5 -> Google */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://fancytailwind.com/static/google-full-black-26e70f93bf2cb3c4f893afd587bc89b2.png" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> Microsoft */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://fancytailwind.com/static/microsoft-logo-29676a36b829016b82e0d8d1865c842b.svg" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> Adidas */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://www.reaktor.com/wp-content/uploads/2018/01/adidas-3-280x0-c-default.webp" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> UN */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://www.reaktor.com/wp-content/uploads/2020/04/united-nations-logo-9CBFC2E65F-seeklogo.com_-280x0-c-default.webp" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> Games */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://www.reaktor.com/wp-content/uploads/2022/01/Epic_Games-280x0-c-default.webp" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> Netflix */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://www.reaktor.com/wp-content/uploads/2021/06/netflix-logo-280x0-c-default.webp" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> Nokia */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://www.reaktor.com/wp-content/uploads/2020/02/Nokia-Logo-280x0-c-default.webp" alt="" className="max-h-6 opacity-80" />
                    </div>

                    {/* ::Partner 6 -> Microsoft */}
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100">
                        <img src="https://www.reaktor.com/wp-content/uploads/2017/10/HBO-1-280x0-c-default.webp" alt="" className="max-h-6 opacity-80" />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Clients
