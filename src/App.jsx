import Hero from "./hero.png";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800 ">
      {/* Hero Section */}
      <section className="container flex flex-col md:flex-row items-center pt-20 pr-20">
  <div className="text-center max-w-4xl mx-auto w-full md:w-1/2">
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Find a job that aligns with your interests and skills
    </h2>
    <p className="text-gray-600 mb-8">
      Thousands of jobs in all the leading sectors are waiting for you.
    </p>
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        placeholder="Job title, keyword..."
        className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3"
      />
      <input
        type="text"
        placeholder="Location"
        className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3"
      />
      <button className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-600 hover:text-white rounded-md">
        Find Job
      </button>
    </div>
  </div>
  <img src={Hero} alt="hero image" className="h-96 mt-8 md:mt-0" />
</section>

<section className="container mx-auto px-6 py-12">
  <h3 className="text-2xl font-bold text-center mb-8">Featured Jobs</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Job Cards */}
    {[
            "Technical Support Specialist",
            "Senior UI/UX Designer",
            "Marketing Officer",
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-2">{job}</h4>
              <p className="text-gray-500 text-sm mb-4">
                Part-time | Salary: $2,000 - $3,000
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Location: {["India", "USA", "Singapore"][index]}
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-purple-600 hover:bg-purple-600 hover:text-white text-white px-4 py-2 rounded-md">
                  View details
                </button>
                <button
                 
                  className="bg-gray-100 hover:bg-purple-600 hover:text-white text-purple-600 px-4 py-2 rounded-md"
                >
                  Apply now
                </button>
              </div>
            </div>
          ))}

  </div>
</section>
      {/* Featured Jobs */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mt-8">
          <a href="/find-jobs" className="text-purple-600 hover:underline">
            View all
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-4 md:mb-0">
        <h5 className="font-bold">Company</h5>
        <ul className="space-y-2">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold">Follow Us</h5>
        <ul className="space-y-2">
          <li><Link to="/facebook">Facebook</Link></li>
          <li><Link to="/twitter">Twitter</Link></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
  );
};

export default App;
