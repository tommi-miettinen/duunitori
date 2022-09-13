import { useState, useEffect } from "react";
import jobsAPI from "./api/jobsAPI";
import JobList from "./components/JobList/JobList";
import Search from "./components/Search/Search";
import { Jobs } from "./types";

const App = () => {
  const [jobs, setJobs] = useState<Jobs>([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await jobsAPI.fetchJobs();
    setJobs(res);
  };

  return (
    <div className="h-screen w-4/6 m-auto p-4">
      <Search />
      <JobList jobs={jobs.slice(0, 20)} />
    </div>
  );
};

export default App;
