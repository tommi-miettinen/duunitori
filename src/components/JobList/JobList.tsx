import { useState, useEffect } from "react";
import { Jobs, Job } from "../../types";
import Pagination from "../Pagination/Pagination";
import JobPreview from "../JobPreview/JobPreview";
import JobDetails from "../JobDetails/JobDetails";
import Search from "../Search/Search";
import jobsAPI from "../../api/jobsAPI";
import Modal from "../Modal/Modal";
import useWindowSize from "../../hooks/useWindowSize";
import { useLocation, useNavigate } from "react-router-dom";

const JobList = () => {
  const [filter, setFilter] = useState("");
  const [jobs, setJobs] = useState<Jobs>([]);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const pageSize = 20;
  const pageCount = Math.floor(itemCount / pageSize);

  const navigate = useNavigate();
  const location = useLocation();

  const dimensions = useWindowSize();
  const isMobile = dimensions ? dimensions.width < 640 : false;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [itemCount]);

  useEffect(() => {
    fetchJob(location.pathname.split("-").pop()!);
    setModalVisible(true);
  }, [location.pathname]);

  const fetchJobs = async () => {
    const query = {
      skip: (page - 1) * pageSize,
      limit: pageSize,
      filter,
    };
    const res = await jobsAPI.fetchJobs(query);
    setJobs(res.jobs);
    setItemCount(res.totalCount);
  };

  const fetchJob = async (id: string) => {
    const res = await jobsAPI.fetchJob(id);
    setSelectedJob(res);
  };

  const handleSelectedJobClick = (job: Job) => {
    navigate("/" + job.slug, { replace: true });
  };

  return (
    <div className="h-full w-full flex flex-col">
      <Search filter={filter} setFilter={setFilter} fetchJobs={fetchJobs} />
      <div className="grid sm:grid-cols-2 py-4 w-full h-full m-auto overflow-auto">
        <div className="w-full flex flex-col overflow-auto">
          <div className="flex flex-col h-full overflow-auto">
            {jobs.map((job) => (
              <JobPreview
                key={job.id}
                job={job}
                setSelectedJob={handleSelectedJobClick}
                selectedJob={selectedJob}
              />
            ))}
            {jobs.length === 0 && (
              <div className="m-auto">Haulla ei löytynyt tuloksia</div>
            )}
          </div>
          <div className="flex justify-center mt-4 p-1">
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
