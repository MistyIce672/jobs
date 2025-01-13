import { NextApiRequest, NextApiResponse } from 'next';
import { typeJob } from '../../types/job';

const mockJobs: typeJob[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Company A',
    location: 'New York, NY',
    jobType: 'Full-time',
    description: 'Develop and maintain web applications.',
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'Company B',
    location: 'San Francisco, CA',
    jobType: 'Part-time',
    description: 'Analyze and interpret complex data.',
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Company C',
    location: 'Remote',
    jobType: 'Contract',
    description: 'Build user interfaces for web applications.',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { location, jobType, company } = req.query;

  let filteredJobs = mockJobs;

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location as string));
  }
  if (jobType) {
    filteredJobs = filteredJobs.filter((job) => job.jobType.toLowerCase().includes(jobType as string));
  }
  if (company) {
    filteredJobs = filteredJobs.filter((job) => job.company.toLowerCase().includes(company as string));
  }

  res.status(200).json(filteredJobs);
}