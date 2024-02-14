
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const AllTask = ( {task , handleDelete} ) => {
    const{_id, taskName, taskDescription, dueDate, priority, status} = task;
console.log(_id, taskName, taskDescription, dueDate, priority, status);

const {loading} = useContext(AuthContext);
if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}




return (
    <div>
        <div className={`card lg:w-96 max-lg:w-80 text-primary-content ${
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
  <button onClick={() => handleDelete(_id)} className="text-3xl btn btn-ghost tooltip" data-tip="Delete Task"><AiTwotoneDelete /></button>
  <button className="text-3xl btn btn-ghost tooltip" data-tip="Edit Task"><Link to={`/dashboard/update/${_id}`}><FaRegEdit /></Link></button>
</div>
</div>
</div>
    </div>
    );
};

export default AllTask;