import React, { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
const Employee = ({ userRole }) => {
  Employee.propTypes = {
          userRole: PropTypes.string.isRequired,
        };
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handlePostJob = async () => {
    if (userRole !== "employee") {
      alert("Only employees can post jobs!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/jobs", jobData);
      alert("Job posted successfully!");
      setJobs([...jobs, response.data]); 
    } catch (error) {
      alert("Error posting job: " + error.message);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs");
      setJobs(response.data);
    } catch (error) {
      alert("Error fetching jobs: " + error.message);
    }
  };

  React.useEffect(() => {
    fetchJobs(); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
  {/* Post a Job Section */}
  <h2 className="text-2xl font-bold text-center mb-6">Post a Job</h2>
  <div className="bg-white shadow-md rounded-md p-4 sm:p-6 max-w-md mx-auto">
    {/* Job Title Input */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Job Title</label>
      <input
        type="text"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>

    {/* Job Description Textarea */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        name="description"
        value={jobData.description}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      ></textarea>
    </div>

    {/* Job Location Input */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Location</label>
      <input
        type="text"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>

    {/* Post Job Button */}
    <button
      onClick={handlePostJob}
      className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full sm:w-auto"
    >
      Post Job
    </button>
  </div>
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Posted Jobs</h3>
    <ul>
      {jobs.map((job, index) => (
        <li key={index} className="border-b py-2">
          <h4 className="font-bold">{job.title}</h4>
          <p>{job.description}</p>
          <p className="text-sm text-gray-500">Location: {job.location}</p>
        </li>
      ))}
    </ul>
  </div>
</div>
  );
};

export default Employee;
