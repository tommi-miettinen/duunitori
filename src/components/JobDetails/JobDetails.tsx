import { Job } from "../../types";

interface JobDetailProps {
  job: Job;
}

const JobDetails = ({ job }: JobDetailProps) => {
  return (
    <div className="shadow rounded-xl border p-8 whitespace-pre-wrap h-full overflow-auto">
      {job.descr}
    </div>
  );
};

export default JobDetails;
