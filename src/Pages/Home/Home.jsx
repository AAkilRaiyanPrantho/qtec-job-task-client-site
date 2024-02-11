import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Headings from "../../Components/Headings/Headings";
import AboutUs from "../AboutUs/AboutUs";
import Clients from "../Clients/Clients";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
        
            <Banner></Banner>

            {
                user?<><div className="flex flex-col justify-center items-center">
                <Headings mainHeading={'Want to do some tasks?'} subHeading={'Go to your dashboard'}></Headings>
                <button className="btn btn-success btn-outline px-8"><Link to={'/dashboard'}>Dashboard</Link></button></div></>:<><div className="flex flex-col justify-center items-center">
                <Headings mainHeading={'Want to join us?'} subHeading={'Click the link below'}></Headings>
                <button className="btn btn-success btn-outline px-8"><Link to={'/signup'}>Register</Link></button></div></>
            }


            <div id="clients" className="flex flex-col items-center">
            <Headings mainHeading={'our clients'} subHeading={'Who do we serve?'}></Headings>
             <Clients></Clients>
            </div>
            
            <div id="about">
            <Headings mainHeading={'About Us'} subHeading={'So, who are we?'}></Headings>
            <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;