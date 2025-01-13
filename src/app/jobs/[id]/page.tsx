"use client"
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { typeJob } from '../../../types/job';

const JobDetails = () => {
  const router = useRouter();
  const params = useParams<{id: string; item:string}>();
  if (!params) {
    // Handle the case where params are null or undefined
    console.error('Params are not available');
    return <div>Error: Unable to retrieve parameters.</div>;
  }
  const id = params.id;
  const [job, setJob] = useState<typeJob | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchJobDetails(id as string);
    }
  }, [id]);

  const fetchJobDetails = async (jobId: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`);
      if (res.ok) {
        const data: typeJob = await res.json();
        setJob(data);
      } else {
        setJob(null);
      }
    } catch (error) {
      console.error('Error fetching job details:', error);
      setJob(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => {
          router.back();
        }}
        className="mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to listings
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
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
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
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
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-600">{job.description}</p>
        </div>

        <div className="mt-8">
          <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Apply for this position
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

