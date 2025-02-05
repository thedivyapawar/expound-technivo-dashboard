function PersonalInfo(){
    return(
        <>
        <div className="w-[100%]  md:w-[40%] py-2 border-r-2 flex flex-col justify-between md:border-b-2 py-6 ">
           <div className="flex flex-wrap items-center">
            <div className="w-[50%] px-4">
                <p className="my-3">test</p>
                <p className="text-xl font-bold">Divya Pawar</p>
            </div>
            <div className="w-[50%] px-4">
                <div className="my-3 text-gray-400">
                    <i className="bi bi-exclamation-circle"></i> Pending actions
                    </div>
                <div className="flex flex-wrap">
                    <span className="px-2 py-1  bg-green-200 text-green-500 rounded-md mr-2 text-sm cursor-pointer font-bold my-1 lg:my-0">Create Account</span>
                    
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-500 rounded-md text-sm cursor-pointer font-bold my-1 lg:my-0">Create Contact</span>
                </div>
            </div>
            <div className="my-4 px-3 w-[100%] flex justify-between md:justify-start items-center flex-wrap">
                    <p className="font-bold text-sm my-2">
                    <i className="bi bi-person-circle text-sm bg-purple-600 px-2 py-1 rounded-full cursor-pointer mr-1"></i> Kajal Gupta
                    </p>
                    <p className="w-[30%] font-bold text-sm md:text-center">
                        Event
                    </p>         
            </div>
            <div className="flex w-[100%] my-2 py-2 gap-4 flex-wrap px-4 text-gray-500 font-bold text-sm border-y-2">
                <span className="text-primary">Basic Details
                    <sup><span className="p-1 rounded-full bg-red-600 text-white">10</span></sup>
                </span>
                <span >Account Details</span>
                <span>Lead Details
                <sup><span className="px-2 py-1 rounded-full bg-red-600 text-white">8</span></sup>
                </span>
                <span>Team</span>
                <span>Other Contacts</span>
            </div>
            <div className="flex w-[100%] flex-wrap px-4 border-b-2 pb-2">
                <div className="w-[33%] my-2">
                    <p className="text-sm font-bold">Title</p>
                    <p className="text-sm text-gray-600">test</p>
                </div>
                <div className="w-[33%] my-2">
                    <p className="text-sm font-bold">First Name</p>
                    <p className="text-sm text-gray-600">Divya</p>
                </div>
                <div className="w-[33%] my-2">
                    <p className="text-sm font-bold">Last Name</p>
                    <p className="text-sm text-gray-600">Pawar</p>
                </div>
            </div>
            <div className="w-[100%] px-4 mb-3">
                <p className="my-2 text-lg font-bold">Address Details</p>
                <div className="flex w-[100%] flex-wrap items-center">
                <div className="w-[33%] my-2">
                    <p className="text-sm font-bold">Region</p>
                    <p className="text-sm text-gray-600">APAC</p>
                </div>
                <div className="w-[33%] my-2">
                    <p className="text-sm font-bold">Country</p>
                    <p className="text-sm text-gray-600">India</p>
                </div>
                <div className="w-[33%] my-2">
                    <p className="text-sm font-bold">Zone</p>
                    <p className="text-sm text-gray-600">West</p>
                </div>

                </div>
                
            </div>


           </div>

           <div className="flex flex-wrap justify-between px-4 my-3">
                    <p className="text-sm text-gray-500 ">
                    <i className="bi bi-exclamation-circle"></i> 10 empty fields, fill the pending information
                    </p>

                    <span>
                    <i class="bi bi-pencil bg-primary text-white rounded-md px-3 py-2"></i>
                    </span>
                </div>
        </div>
        </>
    )
}

export default PersonalInfo;