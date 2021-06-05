import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Job from "./components/job";
import JobsPagination from "./components/pagination";
import SearchBar from "./components/searchbar";
import useFetchJobs from "./functions/useFetchJobs";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params,page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchBar params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error! Try Refreshing...</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
