import { useLoaderData } from "react-router-dom";
import AllTask from "../AllTask/AllTask";
import Completed from "../Completed/Completed";
import Incomplete from "../Incomplete/Incomplete";

const AllTasks = () => {
  const tasks = useLoaderData();

  // Completed Filter
  const completeds = tasks.filter((task) => task.status === "Completed");
  const completedsLength = completeds.length;
  console.log(completeds);
  console.log(completedsLength);
  // Incomplete Filter
  const incompletes = tasks.filter((task) => task.status === "Incomplete");
  const incompletesLength = incompletes.length;
  console.log(incompletes);
  console.log(incompletesLength);

  return (
    <div>
     
      {/* Table Implementation Starts */}
      <h1 className="text-3xl text-center py-2 mb-4 outline-dotted max-lg:w-80 mx-auto lg:w-full">
        Total Tasks Available: {tasks.length}
      </h1>
     <div className="flex lg:flex-row max-lg:flex-col max-lg:max-w-96">
         {/* Table 1 */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th className="text-center">All Tasks</th>
             
            </tr>
          </thead>
          <tbody>
            <td>
              <div className="flex flex-col p-4 gap-10">
                {tasks.map((task) => (
                  <AllTask key={task._id} task={task}></AllTask>
                ))}
              </div>
            </td>
            
          </tbody>
        </table>
      </div>
      {/* Table 2 */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
            <th className="text-center">Incomplete Tasks</th>
              
            </tr>
          </thead>
          <tbody>
           
            <td>
              <div className="flex flex-col p-4 gap-10">
                {incompletes.map((incomplete) => (
                  <Incomplete
                    key={incomplete._id}
                    incomplete={incomplete}
                  ></Incomplete>
                ))}
              </div>
            </td>
            
          </tbody>
        </table>
      </div>
      {/* Table 3 */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Completed Tasks</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <div className="flex flex-col p-4 gap-10">
                {completeds.map((completed) => (
                  <Completed
                    key={completed._id}
                    completed={completed}
                  ></Completed>
                ))}
              </div>
            </td>
          </tbody>
        </table>
      </div>
     </div>

      {/* Table Implementation Ends */}
    </div>
  );
};

export default AllTasks;
