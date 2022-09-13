import JobList from "./components/JobList/JobList";

const App = () => {
  return (
    <div className="h-screen max-h-screen flex w-full xl:w-4/6 m-auto pt-4 px-2 overflow-hidden">
      <JobList />
    </div>
  );
};

export default App;
