import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OverdueActivities from "./OverdueActivities";
import ActivityLogs from "./ActivityLogs";

function CustomerActivityInfo(){
    const [formData, setFormData] = useState({
        subject: "",
        teamMember: "",
        contact: "",
        dueDate: "",
        time: "",
        description: "",
      });
    
      const [submittedData, setSubmittedData] = useState([
        {
            dueDate: "2025-02-02",
            subject: "Share Catalogue", 
            time:"16:20"
        },
        {
            dueDate: "2025-02-03",
            subject: "Introductory Call", 
            time:"17:30"
        }
      ]);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({
          subject: "",
          teamMember: "",
          contact: "",
          dueDate: "",
          time: "",
          description: "",
        });
        toast.success("Activity added Successfully!", {
            position: "top-right",
          });
      };

    return(
        <>
         <div className="w-[100%]  md:w-[60%]">
            <div className="flex flex-wrap">
                <div className="w-[100%] md:w-[70%] ">
                <div className="flex w-[100%] py-2 gap-4 flex-wrap px-4 text-gray-500 font-bold text-sm border-b-2 border-r-2 border-t-2 md:border-t-0">
                    <span className="text-primary">Acitivty</span>
                    <span >Actionable</span>
                    <span>Task</span>
                    <span>Notes & Files</span>
                </div>

                <div className="px-4 py-2 border-r-2 border-b-2">
                    
                <div className="flex flex-wrap gap-4 my-3">
                    <span className="border rounded-md cursor-pointer py-1 pr-4 text-sm font-bold">
                    <i className="bi bi-telephone px-2 py-1 bg-green-300 text-green-700 pl-2 rounded-l-md mr-2"></i> Log a call
                    </span>
                    <span className="border rounded-md cursor-pointer py-1 pr-4 text-sm font-bold">
                    <i className="bi bi-envelope px-2 py-1 bg-gray-300 text-gray-700 pl-2 rounded-l-md mr-2"></i> Email
                    </span>
                    <span className="border rounded-md cursor-pointer py-1 pr-4 text-sm font-bold ">
                    <i className="bi bi-lightbulb px-2 py-1 bg-gray-300 text-gray-700 pl-2 rounded-l-md mr-2"></i>  Event
                    </span>
                </div>

                    <form onSubmit={handleSubmit}>
                        <div className="py-2">
                            <div>
                                <label htmlFor="subject" className="font-bold text-sm">Subject*</label>
                                <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 text-sm rounded-md my-2 outline-none focus:border focus:border-primary"
                                required
                                />
                            </div>

                            <div className="flex flex-wrap justify-between my-2">
                                <div className="w-[48%]">
                                <label htmlFor="teamMember" className="font-bold text-sm">Add Team Member</label>
                                <input
                                    type="text"
                                    id="teamMember"
                                    name="teamMember"
                                    value={formData.teamMember}
                                    onChange={handleChange}
                                    placeholder="Select Team Members"
                                    className="w-full border border-gray-300 text-sm p-2 rounded-md my-2 focus:outline-none"
                                />
                                </div>

                                <div className="w-[48%]">
                                <label htmlFor="contact" className="font-bold text-sm">Add Contact</label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="Select Contacts"
                                    className="w-full border border-gray-300 text-sm p-2 rounded-md my-2 focus:outline-none"
                                />
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between my-2">
                                <div className="w-[48%]">
                                <label htmlFor="dueDate" className="font-bold text-sm">Due Date*</label>
                                <input
                                    type="date"
                                    id="dueDate"
                                    name="dueDate"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    className="w-[100%] border border-gray-300 text-sm p-2 rounded-md my-2 focus:outline-none text-gray-400"
                                    required
                                />
                                </div>

                                <div className="w-[48%]">
                                <label htmlFor="time" className="font-bold text-sm">Time*</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-[100%] border border-gray-300 text-sm p-2 rounded-md my-2 focus:outline-none text-gray-400"
                                    required
                                    
                                />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="font-bold text-sm">Description</label>
                                <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 text-sm rounded-md my-2 outline-none focus:border focus:border-primary"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                type="submit"
                                className={`px-4 py-2 rounded-md text-white bg-primary cursor-pointer`}
                                >
                                Submit
                                </button>
                            </div>
                        </div>    
                    </form>

                </div>

                </div>

                <ActivityLogs tasks={submittedData}/>
            </div>

            <OverdueActivities submittedData={submittedData}/>
        </div>
        <ToastContainer />
        </>
    )
}

export default CustomerActivityInfo