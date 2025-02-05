import { useEffect } from "react";
import { useState } from "react";

const ActivityLogs = ({tasks}) => {
    const [sortTask, setSortTask] = useState([]);
    useEffect(() => {
        const sortedTasks = tasks.sort((a, b) => {
          if (a.dueDate !== b.dueDate) {
            return a.dueDate.localeCompare(b.dueDate); 
          }
          return a.time.localeCompare(b.time); 
        });
        setSortTask([...sortedTasks]);
      }, [tasks]);
    return (
      <div className="w-[100%] md:w-[30%] flex flex-col items-start border-r-2 pb-10">
        <p className="text-sm font-bold w-[100%] border-b-2 border-r-2 px-4 py-2">Activity Logs</p>
        <div className="flex text-center items-center ml-12">
          <p className="text-lg font-bold text-gray-700 w-16 text-right mr-4 my-2">February</p>
        </div>
        {sortTask.map((task, index) => (
          <div key={index} className="flex items-start">
            <p className="text-sm text-gray-500 w-16 text-right mr-4">{task.time}</p>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              {index !== sortTask.length - 1 && (
                <div className="ml-1 w-1 h-14 border-l border-gray-500 border-dashed"></div>
              )}
            </div>
            <div className="ml-4 flex flex-col">
              <h4 className="text-xs text-gray-400 leading-none">{task.dueDate}</h4>
              <p className="text-sm font-semibold">{task.subject}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default ActivityLogs;