import data from "../jobs.json";

const createSearchString = (obj: { [key: string]: any }) => {
  return Object.values(obj)
    .reduce((a, b) => a.toString() + b.toString())
    .toLowerCase()
    .replace(/\s/g, "");
};

interface Query {
  skip: number;
  limit: number;
  filter: string;
}

const fetchJobs = async (query: Query) => {
  const jobs = data.jobs.filter((job) =>
    createSearchString(job).includes(
      query.filter.toLowerCase().replace(/\s/g, "")
    )
  );

  const res = {
    jobs: jobs.slice(query.skip, query.skip + query.limit),
    totalCount: jobs.length,
  };
  return res;
};

const fetchJob = async (id: string) => data.jobs.find((job) => job.id === id);

export default {
  fetchJobs,
  fetchJob,
};
