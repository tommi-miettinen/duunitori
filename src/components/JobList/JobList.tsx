import { useState } from "react";
import { Jobs, Job } from "../../types";

const formatDate = (date: string) => new Date(date).toLocaleDateString();

const JobList = ({ jobs }: { jobs: Jobs }) => {
  const [selectedJob, setSelectedJob] = useState<Job>();

  return (
    <div className="grid grid-cols-2 py-4 w-full h-full m-auto">
      <div className="overflow-auto h-full">
        {jobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className={`shadow rounded-xl border p-4 m-2 cursor-pointer hover:bg-gray-100 ${
              selectedJob === job && "border border-gray-400"
            }`}
          >
            <div className="font-semibold">{job.heading}</div>
            <div className="flex justify-between mt-4">
              <div>{job.municipality_name}</div>
              <div>
                {formatDate(job.date_posted)} - {formatDate(job.date_ends)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedJob && (
        <div className="shadow rounded-xl border p-8 whitespace-pre-wrap m-2 h-full overflow-auto">
          {selectedJob.descr}
        </div>
      )}
    </div>
  );
};

export default JobList;
