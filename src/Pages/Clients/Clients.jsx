import './Clients.css'

const Clients = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 gap-10 my-5">
        {/* card 1 */}
        <div className="card cards w-96 bg-base-100 shadow-xl" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/good-software-developer-1128x635.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1584af]">Developers</h2>
            <p>Software or Web Developers usually need to work on multiple projects at once. So in order to keep track of all those projects, they rely on our Task Master application.</p>
            
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
          <figure className="px-10 pt-10">
            <img
              src="https://hms.harvard.edu/sites/default/files/media/800-Doctors-Talking-GettyImages-1421919753.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1584af]">Doctors</h2>
            <p>Doctors lead a very busy life. They need to attend patients, take part in meetings and also if he's a surgeon, then he needs to manage all his Operation dates.To manage all these chaos, they choose our Task Master app to make everything easier.</p>
            
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
          <figure className="px-10 pt-10">
            <img
              src="https://www.thoughtco.com/thmb/dChBnpU_nYn0QE54kiA_s-H9nHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/teenage-students-in-classroom--141090063-5a653ed40c1a8200366bdd66.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1584af]">Students</h2>
            <p>Student life is full of stress. They need to keep track of assignments, quizzes, exams, presentations and what not. If not being careful, then all these pressure may cause a chaotic situation. To prevent such situation, they choose us to make it easier for them.</p>
            
          </div>
        </div>
        {/* card 4 */}
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pond5.com/smiling-woman-child-speaking-phone-090210095_prevstill.jpeg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1584af]">Personal Use</h2>
            <p>In our day-to-day life, we take part in various activities. We may need to attend and go to various places at various times. And sometimes without proper time management, we may miss our schedules tasks. So to make it much easier to remember and not to forget any appointments, people in their personal take our services as well. </p>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Clients;
  