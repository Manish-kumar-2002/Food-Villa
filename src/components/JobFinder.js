import React, { useEffect, useState } from "react";

const JobFinder = () => {
  const [jobs, setJobs] = useState([]);
  const API_KEY = "9f14b187-1669-4754-a372-8e986c3b7bc0"; // Yaha apni API key daalo

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`https://jooble.org/api/${API_KEY}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            keywords: "Frontend Developer",
            location: "Remote",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        setJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobFinder;