"use client";
import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { createJob } from "../actions/actions";
import { formInput } from "@/schema/schema";

interface IJobFormInputs {
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
  salary: string;
  requirements: string;
}

const CreateJobForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formInput>();

  const {execute,result,isExecuting} = useAction(createJob)


  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create New Job Posting
        </h1>

        <form
          onSubmit={handleSubmit(execute)}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Title*
            </label>
            <input
              {...register("title", { required: "Job title is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Senior Software Engineer"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Company Name*
            </label>
            <input
              {...register("company", { required: "Company name is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Tech Corp Inc."
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location*
              </label>
              <input
                {...register("location", { required: "Location is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. New York, NY"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Type*
              </label>
              <input
                {...register("jobType", { required: "Job type is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Full-time"
              />
              {errors.jobType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobType.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Salary
            </label>
            <input
              {...register("salary")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. $100,000 - $130,000"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Description*
            </label>
            <textarea
              {...register("description", {
                required: "Job description is required",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Enter job description..."
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Requirements*
            </label>
            <textarea
              {...register("requirements", {
                required: "Job requirements are required",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Enter job requirements..."
            />
            {errors.requirements && (
              <p className="text-red-500 text-sm mt-1">
                {errors.requirements.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isExecuting ? "Creating..." : "Create Job Posting"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobForm;