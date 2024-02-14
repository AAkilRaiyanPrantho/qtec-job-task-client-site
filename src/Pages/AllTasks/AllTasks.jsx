// import { useLoaderData } from "react-router-dom";
import AllTask from "../AllTask/AllTask";
import Completed from "../Completed/Completed";
import Incomplete from "../Incomplete/Incomplete";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AllTasks = () => {
  // const tasks = useLoaderData();
  const [tasks, setTasks] = useState([]);

  const url = "http://localhost:5000/allTasks";
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setTasks(data))
  }, []);

  // Delete Operations
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log('delete confirmed')

        fetch(`http://localhost:5000/allTasks/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
          title: "Deleted!",
          text: "Task has been deleted. Please Reload the page to see the results",
          icon: "success"
        });
        const remaining = tasks.filter(task => task._id !== _id);
        setTasks(remaining);
          }
        })
        
      }
    });
    
  }

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
              
              <th className="text-center text-xl">All Tasks</th>
             
            </tr>
          </thead>
          <tbody>
            <td>
              <div className="flex flex-col p-4 gap-10">
                {tasks.map((task) => (
                  <AllTask key={task._id} task={task} handleDelete={handleDelete}></AllTask>
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
            <th className="text-center text-xl">Incomplete Tasks</th>
              
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
              <th className="text-center text-xl">Completed Tasks</th>
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
