const Incomplete = ({ incomplete }) => {
  const { _id, taskName, taskDescription, dueDate, priority, status } =
    incomplete;
  console.log(_id, taskName, taskDescription, dueDate, priority, status);

  return (
    <div>
      <div className="card w-96 bg-green-400 text-primary-content">
        <div className="card-body items-center">
          <h2 className="card-title">{taskName}</h2>
          <p>{taskDescription}</p>
          <p>
            Priority: <span className="font-bold">{priority}</span>
          </p>
          <p>
            Status: <span className="font-bold">{status}</span>
          </p>
          <p>
            Deadline: <span className="font-bold">{dueDate}</span>
          </p>
          {/* <div className="card-actions justify-end">
<button className="btn btn-error">Delete</button>
  <button className="btn btn-primary">Update</button>
</div> */}
        </div>
      </div>
    </div>
  );
};

export default Incomplete;
