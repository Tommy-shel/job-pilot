export const applyForJobs = async (jobId) => {
   const token = localStorage.getItem('authToken'); // Ensure the correct token is retrieved
   if (!token) {
     throw new Error('User not authenticated');
   }
 
   const response = await fetch(`http://localhost:5000/apply-job/${jobId}`, {
     method: 'GET', // `GET` request should not have a body
     headers: {
       Authorization: `Bearer ${token}`, // Standard header for tokens
     },
   });
 
   if (!response.ok) {
     const error = await response.json();
     throw new Error(error.message || 'Failed to apply for the job');
   }
 
   const data = await response.json();
   return data;
 };
 