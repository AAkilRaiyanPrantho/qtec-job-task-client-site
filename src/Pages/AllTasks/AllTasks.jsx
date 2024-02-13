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
      <div className="lg:hidden"> 
        <h1 className="text-3xl text-center py-2 mb-4 outline-dotted">
          Total Tasks Available: {tasks.length}
        </h1>
        <h1 className="text-center font-bold text-4xl text-[#333333] underline uppercase">
          All Tasks
        </h1>
        <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
          {tasks.map((task) => (
            <AllTask key={task._id} task={task}></AllTask>
          ))}
        </div>
      </div>

      {/* Showing the Completed Tasks */}
      <div className="lg:hidden">
        <h1 className="text-center font-bold text-4xl text-[#333333] underline uppercase">
          Completed Tasks
        </h1>
        <div className="grid grid-cols-1 justify-center items-center  lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
          {completeds.map((completed) => (
            <Completed key={completed._id} completed={completed}></Completed>
          ))}
        </div>
      </div>

      {/* Showing the Incomplete Tasks */}
      <div className="lg:hidden">
        <h1 className="text-center font-bold text-4xl text-[#333333] underline uppercase">
          Incomplete Tasks
        </h1>
        <div className="grid grid-cols-1 justify-center items-center  lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
          {incompletes.map((incomplete) => (
            <Incomplete
              key={incomplete._id}
              incomplete={incomplete}
            ></Incomplete>
          ))}
        </div>
      </div>

      {/* Table Implementation Starts */}
      <h1 className="text-3xl text-center py-2 mb-4 outline-dotted">
        Total Tasks Available: {tasks.length}
      </h1>
     <div className="flex flex-row">
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
