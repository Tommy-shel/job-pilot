const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-2">Manage Job Postings</h4>
          <p className="text-gray-600 mb-4">Edit, delete, or view job postings.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            Manage
          </button>
        </div>
        <div className="bg-white shadow-md rounded-md p-4"> 
          <h4 className="text-xl font-semibold mb-2">View Applications</h4>
          <p className="text-gray-600 mb-4">Review and manage job applications.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            View Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;