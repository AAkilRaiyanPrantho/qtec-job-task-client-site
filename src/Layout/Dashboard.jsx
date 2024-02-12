import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaDoorOpen, FaHouse, FaList, FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProviders/AuthProvider";

const Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);
  // const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged Out")
        // Navigate after logout
        navigate('/');
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center max-lg:justify-center lg:justify-start p-4 text-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div>
            <h1 className="font-semibold text-2xl underline py-5 text-orange-200">
              Welcome to the Task Master DashBoard
            </h1>
            <p className="font-semibold text-lg py-2">
              Click on the 'All Tasks' tab to see your Tasks
            </p>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <div>
            <h1 className="lg:px-10 lg:py-4 text-center text-3xl font-bold italic text-orange-300">
              Task Master
            </h1>
            <img
              className="w-24 mask mask-squircle mx-auto"
              src={user.photoURL}
              alt=""
            />
            <h2 className="text-center my-4 text-2xl text-orange-200">
              {user.displayName}
            </h2>
          </div>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard/allTasks"}>
                <FaList /> All Tasks{" "}
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/createTask"}>
                <FaPlus /> Add Task{" "}
              </Link>
            </li>
            <li>
              <div className="divider divider-accent"></div>
            </li>
            <li>
              <Link to={"/"}>
                <FaHouse /> Home{" "}
              </Link>
            </li>
            <li>
              <a onClick={handleLogOut}>
                <FaDoorOpen />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
