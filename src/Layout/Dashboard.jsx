import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaDoorOpen, FaHouse, FaList, FaPlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react"; // Import useEffect and useState
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { BsMenuButtonWide } from "react-icons/bs";

const Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [outletLoaded, setOutletLoaded] = useState(false); // State to track Outlet loading

  useEffect(() => {
    // Set outletLoaded to true when the component is mounted
    setOutletLoaded(true);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged Out");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="drawer bg-[#B2DFDB] lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center max-lg:justify-center lg:justify-start p-4 text-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost text-3xl lg:hidden"
          >
            <BsMenuButtonWide />
          </label>
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div>
            <h1 className="font-semibold text-2xl underline py-5 text-[#008080]">
              Welcome to your Taskify DashBoard
            </h1>
            {/* Conditional rendering based on outletLoaded state */}
            {!outletLoaded && (
              <p className="font-semibold text-lg py-2 text-[#333333]">
                Click on the 'All Tasks' tab to see your Tasks
              </p>
            )}
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side lg:bg-[#004D40]">
          <div className="max-lg:hidden">
            <h1 className="lg:px-10 lg:py-4 text-center text-3xl font-bold italic text-orange-300">
              Taskify
            </h1>
            <img
              className="w-24 noHover mask mask-squircle mx-auto"
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
          
          <ul className="menu p-4 w-80 min-h-full text-[#FFFFFF]">
          <h1 className="my-4 text-3xl font-bold italic text-orange-300 lg:hidden">
              Taskify
            </h1>
            <img
              className="w-24 noHover mask mask-squircle lg:hidden" 
              src={user.photoURL}
              alt=""
            />
            <h2 className="my-4 text-xl text-orange-200 lg:hidden">
              {user.displayName}
            </h2>
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard/allTasks"}>
                <FaList /> All Tasks{" "}
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/addTasks"}>
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
