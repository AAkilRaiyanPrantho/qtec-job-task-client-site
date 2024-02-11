
const NavBar = () => {
    const list = <>
    <li><a href="/" className="text-[#1584af]">HOME</a></li>
    <li><a href="#clients" className="text-[#1584af]" >CLIENTS</a></li>
    <li><a href="#about" className="text-[#1584af]">ABOUT</a></li>
    <li><a href="#contact" className="text-[#1584af]">CONTACT US</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
        {list}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex lg:flex-col">
  <p className="text-orange-300 text-3xl">TASKIFY</p>
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
        </div>
    );
};

export default NavBar;