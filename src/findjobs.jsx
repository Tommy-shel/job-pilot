import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">Find Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
            <p className="text-gray-500 text-sm mb-4">{job.type} | Salary: {job.salary}</p>
            <p className="text-sm text-gray-700 mb-4">Location: {job.location}</p>
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
                View details
              </button>
              <button className="bg-gray-100 hover:bg-purple-600 hover:text-white text-purple-600 px-4 py-2 rounded-md w-full sm:w-auto">
                <Link to="/Apply">Apply now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;