import CustomerActivityInfo from "./CustomerActivityInfo";
import PersonalInfo from "./PersonalInfo";
import TopDetail from "./TopDetail";

function DetailInfo(){
    return(
        <>
        <div className="w-[100%] lg:w-[95%] min-h-screen py-2">
           <TopDetail/> 
           <div className="flex flex-wrap">
                <PersonalInfo/>
                <CustomerActivityInfo/>
            </div>        
        </div>
        </>
    )
}

export default DetailInfo;