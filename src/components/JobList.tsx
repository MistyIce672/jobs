import { typeJob } from "../types/job";

type typeJobListProps = {
  jobs: typeJob[];
};

const JobList = ({ jobs }: typeJobListProps) => {
  return (
    <div className="divide-y divide-gray-200">
      {jobs.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="p-6 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    {job.company}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {job.location}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {job.jobType}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {job.description}
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;
