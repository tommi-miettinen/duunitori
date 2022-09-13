import { Job } from "../../types";

interface JobPreviewProps {
  job: Job;
  setSelectedJob: (job: Job) => void;
  selectedJob: Job | undefined;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString();

const JobPreview = ({ job, setSelectedJob, selectedJob }: JobPreviewProps) => {
  return (
    <div
      key={job.id}
      onClick={() => setSelectedJob(job)}
      className={`shadow rounded-xl border p-4 m-1 cursor-pointer hover:bg-gray-100 ${
        selectedJob === job && "border border-gray-400"
      }`}
    >
      <div className="font-semibold">{job.heading}</div>
      <div>{job.company_name}</div>
      <div className="flex justify-between mt-4">
        <div>{job.municipality_name}</div>
        <div>
          {formatDate(job.date_posted)} - {formatDate(job.date_ends)}
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
