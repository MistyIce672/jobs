"use client";
import { useController, UseControllerProps, useFieldArray, useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { createJob } from "../actions/actions";
import { formInput } from "@/schema/schema";
import { Button } from "@/components/ui/button";
import React from "react";

function Input(props: UseControllerProps<formInput>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" {...field} placeholder={props.name} />
    </div>
  );
}


const CreateJobForm = () => {
  const defaultJob = {
    title: "",
    company: "",
    location: "",
    jobType: "",
    description: "",
    salary: 0,
    requirements: "",
  }
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<formInput>({
    defaultValues: {
      job: [defaultJob,],
    },
  });

  const { fields,append,remove } = useFieldArray({
    name: "job",
    control,
  });

  const { execute, result, isExecuting } = useAction(createJob);

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
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Job Title*
                  </label>
                  <Input name={`job.${index}.title`} control={control} rules={{required: true}} />
                  {errors.job?.[index]?.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.job?.[index]?.title.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Company Name*
                  </label>
                  <input
                    {...register(`job.${index}.company`, {
                      required: "Company name is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Tech Corp Inc."
                  />
                  {errors.job?.[index]?.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.job?.[index]?.company.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Location*
                    </label>
                    <input
                      {...register(`job.${index}.location`, {
                        required: "Location is required",
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. New York, NY"
                    />
                    {errors.job?.[index]?.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.job?.[index]?.location.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Job Type*
                    </label>
                    <input
                      {...register(`job.${index}.jobType`, {
                        required: "Job type is required",
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. Full-time"
                    />
                    {errors.job?.[index]?.jobType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.job?.[index]?.jobType.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Salary
                  </label>
                  <input
                    {...register(`job.${index}.salary`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. $100,000 - $130,000"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Job Description*
                  </label>
                  <textarea
                    {...register(`job.${index}.description`, {
                      required: "Job description is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Enter job description..."
                  />
                  {errors.job?.[index]?.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.job?.[index]?.description.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Requirements*
                  </label>
                  <textarea
                    {...register(`job.${index}.requirements`, {
                      required: "Job requirements are required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Enter job requirements..."
                  />
                  {errors.job?.[index]?.requirements && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.job?.[index]?.requirements.message}
                    </p>
                  )}
                </div>
                {index > 0 ? (
                  <Button type="button" onClick={() => {remove(index)}}>remove</Button>
                ) : (<></>)}
              </div>
            );
          })}
          <Button className="mt-2 bg-white text-black hover:text-white" type="button" onClick={() => {append(defaultJob)}}>Add Job</Button>

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
