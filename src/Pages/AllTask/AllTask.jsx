
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const AllTask = ( {task} ) => {
    const{_id, taskName, taskDescription, dueDate, priority, status} = task;
console.log(_id, taskName, taskDescription, dueDate, priority, status);

const {loading} = useContext(AuthContext);
if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}

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
          }
        })
        
      }
    });
    
  }


return (
    <div>
        <div className={`card w-96 text-primary-content ${
            priority === 'High'? 'bg-red-500':
            priority === 'Medium'? 'bg-orange-500': 'bg-blue-500'
            }`}>
<div className="card-body items-center">
<h2 className="card-title">{taskName}</h2>
<p>{taskDescription}</p>
<p>Priority: <span className="font-bold">{priority}</span></p>
<p>Status: <span className="font-bold">{status}</span></p>
<p>Deadline: <span className="font-bold">{dueDate}</span></p>
<div className="card-actions justify-end">
  <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
  <button className="btn btn-primary"><Link to={`/dashboard/update/${_id}`}>Update</Link></button>
</div>
</div>
</div>
    </div>
    );
};

export default AllTask;