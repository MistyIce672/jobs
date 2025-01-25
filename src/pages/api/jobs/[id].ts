import { NextApiRequest, NextApiResponse } from 'next';
import { typeJob } from '../../../types/job';

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
  {
    id: '4',
    title: 'Frontend Developer',
    company: 'Company A',
    location: 'New York NY',
    jobType: 'Full-time',
    description: 'Build user interfaces for web applications.',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const job = mockJobs.find((job) => job.id === id);

  if (job) {
    res.status(200).json(job);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
}

