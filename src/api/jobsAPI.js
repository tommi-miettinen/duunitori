import data from "../jobs.json";

const fetchJobs = async () => {
  const res = data;
  return res.jobs;
};

export default {
  fetchJobs,
};
