"use client";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import { typeJob, typeFilterValues } from "../types/job";
import JobList from "../components/JobList";

type typeHomeProps = {
  initialJobs: typeJob[];
};

async function getInitialJobs() {
  const res = await axios.get("http://localhost:3000/api/jobs"); // Replace with real API call
  return res.data;
}

const Home = ({ initialJobs }: typeHomeProps) => {
  const [jobs, setJobs] = useState<typeJob[]>(getInitialJobs());
  const [filters, setFilters] = useState<typeFilterValues>({
    location: "",
    jobType: "",
    company: "",
  });

  const handleSearch = async () => {
    const { location, jobType, company } = filters;
    const query = `?location=${location}&jobType=${jobType}&company=${company}`;
    const response = await axios.get(`/api/jobs${query}`);
    setJobs(response.data);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Listings Board
          </h1>

          {/* Search Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="jobType"
                placeholder="Job Type"
                value={filters.jobType}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={filters.company}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleSearch}
              className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Search Jobs
            </button>
          </div>

          {/* Job Listings */}
          <div className="bg-white rounded-lg shadow-md">
            <JobList jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/jobs"); // Replace with real API call
  const initialJobs: typeJob[] = res.data;
  return { props: { initialJobs } };
}

export default Home;
