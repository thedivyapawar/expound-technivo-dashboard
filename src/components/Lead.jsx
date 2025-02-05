import SideBar from "./Lead/SideBar";
import DetailInfo from "./Lead/DetailInfo";

function Lead() {
    return (
        <>
            <div className="flex">
                <SideBar/>
                <DetailInfo/>  
            </div>
        </>
    )
}

export default Lead;