import { useLocation } from "react-router-dom";

function TopDetail(){
    const location = useLocation();
    return(
        <>
        <div className="my-2 px-4">
            <p className="text-gray-500 text-md my-2">Dashboard {location.pathname} /<span className="text-blue-500 underline cursor-pointer"> LE-1023</span></p>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">
                    LE-1023
                </p>
                <p className="flex gap-4 text-lg">
                <i className="bi bi-tag"></i>
                <i className="bi bi-plus-square"></i>
                <i className="bi bi-people"></i>
                <i className="bi bi-list-ul"></i>
                <i className="bi bi-arrow-clockwise"></i>
                </p>
            </div>
        </div>
        <div className="flex justify-between items-center flex-wrap border-y-2 border-gray-200  px-4">
        <div className="flex gap-4 items-center my-2"> 
            <i className="bi bi-check-circle-fill bg-green-500 text-white px-2 py-1 rounded-md"></i>
            <i className="bi bi-check-circle-fill bg-green-500 text-white px-2 py-1 rounded-md"></i>
            <span className="px-2 py-1 bg-orange-200 text-orange-500 rounded-md">Nurturing</span>
            <span className="px-2 py-1 bg-gray-300 text-gray-600 rounded-md">Convert</span>
        </div>
        <p className="px-2 py-1 bg-primary rounded-md my-2 sm:my-0 text-white">
            <i className="bi bi-check ml-2"></i> Mark as Converted
        </p>
        </div>
        </>
    )
}

export default TopDetail;