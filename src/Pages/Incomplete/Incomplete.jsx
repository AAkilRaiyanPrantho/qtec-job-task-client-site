import { TfiCheckBox } from "react-icons/tfi";

const Incomplete = ({ incomplete, handleCompleted }) => {
  const { _id, taskName, taskDescription, dueDate, priority, status } =
    incomplete;
  console.log(_id, taskName, taskDescription, dueDate, priority, status);

  return (
    <div>
      <div
        className={`card lg:w-96 max-lg:w-80 text-primary-content ${
          priority === "High"
            ? "bg-red-500"
            : priority === "Medium"
            ? "bg-orange-500"
            : "bg-blue-500"
        }`}
      >
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
          <div className="card-actions justify-end">
            <button  onClick={() => handleCompleted(incomplete)}
              className="text-3xl btn btn-ghost tooltip"
              data-tip="Completed?"
            >
              <TfiCheckBox />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incomplete;
