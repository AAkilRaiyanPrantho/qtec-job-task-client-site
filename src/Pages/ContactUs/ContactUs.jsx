import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-lg:text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">Follow Us on our Socials</h1>
            <div className="flex flex-row lg:gap-4 text-[#44ecec] text-4xl font-bold my-4 max-lg:items-center max-lg:justify-center">
            <a href="https://www.facebook.com/aakil.raiyan/" target="blank"><CiFacebook /></a>
            <a href="https://twitter.com/P_r_a_n_t_h_o" target="blank"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/raiyan14aakil" target="blank"><FaLinkedin /></a>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-semibold text-center">Email Us</h1>
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered" required />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Text</span>
                </label>
                <input type="text" placeholder="Write Here" className="input input-bordered" required />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;