"use server";
import axios from "axios";

interface IJobFormInputs {
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
  salary: string;
  requirements: string;
}

export default async function CreateJobForm () {

  async function createJob(formData:FormData) {
    "use server";

    
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create New Job Posting
        </h1>

        <form
        action={createJob}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Title*
            </label>
            <input
            name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Senior Software Engineer"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Company Name*
            </label>
            <input
              name="company"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Tech Corp Inc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location*
              </label>
              <input
                name="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. New York, NY"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Type*
              </label>
              <input
                name="jobType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Full-time"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Salary
            </label>
            <input
              name="salary"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. $100,000 - $130,000"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Description*
            </label>
            <textarea
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Enter job description..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Requirements*
            </label>
            <textarea
              name="requirements"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Enter job requirements..."
            />
          </div>


          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {"Create Job Posting"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
