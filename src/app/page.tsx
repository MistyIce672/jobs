import axios from "axios";
import { typeJob } from "../types/job";
import JobList from "../components/JobList";
import { useForm } from "react-hook-form";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/jobs");
  const jobs: typeJob[] = response.data;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Listings Board
          </h1>

          {/* Search Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
          </div>

          {/* Job Listings */}
          <div className="bg-white rounded-lg shadow-md">
            <JobList jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
}
