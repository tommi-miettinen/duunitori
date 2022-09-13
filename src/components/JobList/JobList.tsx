import { useState, useEffect } from "react";
import { Jobs, Job } from "../../types";
import Pagination from "../Pagination/Pagination";
import JobPreview from "../JobPreview/JobPreview";
import JobDetails from "../JobDetails/JobDetails";
import Search from "../Search/Search";
import jobsAPI from "../../api/jobsAPI";
import Modal from "../Modal/Modal";
import useWindowSize from "../../hooks/useWindowSize";

const stringifyKeys = (obj: { [key: string]: any }): string => {
  return Object.values(obj).reduce((a, b) => a.toString() + b.toString());
};

const JobList = () => {
  const [filter, setFilter] = useState("");
  const [jobs, setJobs] = useState<Jobs>([]);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const dimensions = useWindowSize();

  const isMobile = dimensions.width! < 640;

  const filteredJobs = jobs.filter((job) =>
    stringifyKeys(job).includes(filter)
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const pageSize = 20;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await jobsAPI.fetchJobs();
    setJobs(res);
  };

  const pageCount = filteredJobs.length / pageSize;

  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  const slicedJobs =
    filteredJobs.length > pageSize
      ? filteredJobs.slice(start, end)
      : filteredJobs;

  const handleSelectedJobClick = (job: any) => {
    setSelectedJob(job);
    if (isMobile) toggleModal();
  };

  return (
    <div className="h-full w-full flex flex-col">
      <Search filter={filter} setFilter={setFilter} />
      <div className="grid sm:grid-cols-2 py-4 w-full h-full m-auto overflow-auto">
        <div className="w-full flex flex-col overflow-auto">
          <div className="flex flex-col h-full overflow-auto">
            {slicedJobs.map((job) => (
              <JobPreview
                key={job.id}
                job={job}
                setSelectedJob={handleSelectedJobClick}
                selectedJob={selectedJob}
              />
            ))}
            {slicedJobs.length === 0 && (
              <div className="m-auto">Haulla ei löytynyt tuloksia</div>
            )}
          </div>
          <div className="flex justify-center my-4 p-1">
            <Pagination page={page} pages={pageCount} setPage={setPage} />
          </div>
        </div>
        {selectedJob && !isMobile && <JobDetails job={selectedJob} />}
        {selectedJob && isMobile && (
          <Modal toggleModal={toggleModal} isShowing={modalVisible}>
            <JobDetails job={selectedJob} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default JobList;
