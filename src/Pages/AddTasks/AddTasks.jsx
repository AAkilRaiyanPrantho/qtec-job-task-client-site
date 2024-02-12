
import { useForm } from "react-hook-form";


import Swal from 'sweetalert2'

const AddTasks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
    
        // Sending new task data to the server
        fetch('https://scic-task-8-task-management-server.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Congratulations',
              text: 'Data Entry Successful!',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
    
          }
        })
      };
    
    //   const [selectedDate, setSelectedDate] = useState(null);
      return (
        <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Your Task</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body w-96 backdrop-blur-lg"
                  >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Name</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        {...register("title", { required: true })}
                        placeholder="Task Name"
                        className="input input-bordered"
                      />
                      {errors.title && <span className="text-red-700">Title field is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Description</span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        {...register("description", { required: true })}
                        placeholder="Task Description"
                        className="input input-bordered"
                      />
                      {errors.description && <span className="text-red-700">Description field is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Priority Level</span>
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        {...register("priority")}
                        className="p-4 border-2 rounded-lg"
                        required
                      >
                        <option value="High">High</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Low">Low</option>
                        
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Status</span>
                      </label>
                      <select
                        id="status"
                        name="status"
                        {...register("status")}
                        className="p-4 border-2 rounded-lg"
                        required
                      >
                        <option value="To Do">To Do</option>
                        <option value="On Going">On Going</option>
                        <option value="Completed">Completed</option>
                        
                      </select>
                    </div>
    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Deadline</span>
                      </label>
                      {/* <DatePicker id="deadline" name="deadline" value={selectedDate} {...register("deadline")} className="input input-bordered w-full" selected={selectedDate} onChange={(date) => setSelectedDate(date)} /> */}
                      <input
                        type="date"
                        name="deadline"
                        {...register("deadline")}
                        placeholder="Task Deadline"
                        className="input input-bordered"
                        required
                      />
                    </div>
    
                    <div className="form-control mt-6">
                      <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                        Add Task
                      </button>
                    </div>
                  </form>
                  {/* <ToastContainer /> */}
                  {/* {signUpError && <p className="text-red-800">{signUpError}</p>} */}
                  {/* {signUpSuccess && <p className="text-green-800">{signUpSuccess}</p>} */}
                </div>
      </div>
    </div>
      );
    };

export default AddTasks;