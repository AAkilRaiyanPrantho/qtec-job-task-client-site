

const Completed = ( {completed} ) => {
    const{_id, taskName, taskDescription, dueDate, priority, status} = completed;
    console.log(_id, taskName, taskDescription, dueDate, priority, status);

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
{/* <div className="card-actions justify-end">
<button className="btn btn-error">Delete</button>
  <button className="btn btn-primary">Update</button>
</div> */}
</div>
</div>
    </div>
    );
};

export default Completed;