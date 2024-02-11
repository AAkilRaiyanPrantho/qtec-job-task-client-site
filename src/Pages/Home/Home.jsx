import Headings from "../../Components/Headings/Headings";
import AboutUs from "../AboutUs/AboutUs";
import Clients from "../Clients/Clients";


const Home = () => {
    return (
        <div>
            <div id="clients" className="flex flex-col items-center">
            <Headings mainHeading={'our clients'} subHeading={'Who do we serve?'}></Headings>
             <Clients></Clients>
            </div>
            
            <div id="about">
            <Headings mainHeading={'About Us'} subHeading={'What do we serve?'}></Headings>
            <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;