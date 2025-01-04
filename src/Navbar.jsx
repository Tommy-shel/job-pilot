import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
     <header className="bg-white shadow">
  <div className="container mx-auto px-4 py-4 flex flex-col  md:flex-row justify-between items-center">
    <h1 className="text-2xl font-bold text-purple-600">AlwaysApply</h1>
    <nav className="mt-4 md:mt-0">
      <ul className="flex flex-col md:flex-row space-y-4 sm:flex-row gap-8 items-center md:space-y-0 md:space-x-6">
        <li className="hover:text-purple-600 ">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link to="/find-jobs">Find Jobs</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link to="/employees">Employees</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link to="/admin">Admin</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
    <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded-md">
      Login
    </Link>
  </div>
</header>
    </div>
  );
};

export default Navbar;