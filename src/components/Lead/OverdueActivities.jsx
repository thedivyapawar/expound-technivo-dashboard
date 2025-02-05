function OverdueActivities({submittedData}){
    return(
        <>
          <div className="w-[100%] border-b-2 p-4 border-t-2 border-r-2">
            <div className="flex justify-between text-sm">
                <p className="font-bold text-sm">Overdue Activities</p>
                <p className="underline text-sm font-bold">View Upcoming</p>
            </div>

            <div className="flex gap-2 flex-wrap">
                {/* creating card */}
                {
                    submittedData.map((items,index)=>{
                        return(
                            <div className="border-2 rounded-md px-4 py-2 my-3 mx-2" key={index}>
                            <p className="px-2 my-2 text-sm font-semibold"><i className="bi bi-telephone text-green-600 font-bold"></i>
                            &nbsp; {items.subject}</p>
                            <hr />
                            <div className="flex text-sm gap-3 my-2">
                            <p className="font-semibold">Due Date <br /> <span className="text-gray-500">{items.dueDate}</span></p>
                            <p className="font-semibold">Time<br /> <span className="text-gray-500">{items.time}</span></p>

                    </div>
                </div>
                        )
                    })
                }


            </div>
          </div>
        </>
    )
}

export default OverdueActivities