import { NextApiRequest, NextApiResponse } from "next";
import { typeJob } from "../../types/job";

const mockJobs: typeJob[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Company A",
    location: "New York, NY",
    jobType: "Full-time",
    description: "Develop and maintain web applications.",
  },
  {
    id: "2",
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    jobType: "Part-time",
    description: "Analyze and interpret complex data.",
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "Company C",
    location: "Remote",
    jobType: "Contract",
    description: "Build user interfaces for web applications.",
  },
  {
    id: "4",
    title: "Backend Developer",
    company: "Company D",
    location: "Chicago, IL",
    jobType: "Full-time",
    description: "Design and manage server-side web application logic.",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Company E",
    location: "Austin, TX",
    jobType: "Full-time",
    description: "Streamline development and operations processes.",
  },
  {
    id: "6",
    title: "UX Designer",
    company: "Company F",
    location: "Boston, MA",
    jobType: "Contract",
    description: "Design user-friendly interfaces and improve user experience.",
  },
  {
    id: "7",
    title: "Mobile App Developer",
    company: "Company G",
    location: "Seattle, WA",
    jobType: "Part-time",
    description: "Develop applications for Android and iOS platforms.",
  },
  {
    id: "8",
    title: "AI Engineer",
    company: "Company H",
    location: "Remote",
    jobType: "Full-time",
    description: "Develop AI models to solve real-world problems.",
  },
  {
    id: "9",
    title: "Cybersecurity Analyst",
    company: "Company I",
    location: "Washington, DC",
    jobType: "Full-time",
    description: "Protect systems and networks from cyber threats.",
  },
  {
    id: "10",
    title: "Product Manager",
    company: "Company J",
    location: "New York, NY",
    jobType: "Full-time",
    description: "Lead product development from ideation to launch.",
  },
  {
    id: "11",
    title: "Technical Writer",
    company: "Company K",
    location: "San Diego, CA",
    jobType: "Contract",
    description: "Create and edit technical documentation.",
  },
  {
    id: "12",
    title: "QA Engineer",
    company: "Company L",
    location: "Denver, CO",
    jobType: "Part-time",
    description: "Test software to ensure quality and functionality.",
  },
  {
    id: "13",
    title: "Full Stack Developer",
    company: "Company M",
    location: "Los Angeles, CA",
    jobType: "Full-time",
    description: "Work on both frontend and backend of web applications.",
  },
  {
    id: "14",
    title: "Data Analyst",
    company: "Company N",
    location: "Dallas, TX",
    jobType: "Part-time",
    description: "Interpret data and deliver actionable insights.",
  },
  {
    id: "15",
    title: "Cloud Architect",
    company: "Company O",
    location: "Houston, TX",
    jobType: "Full-time",
    description: "Design and implement cloud-based solutions.",
  },
  {
    id: "16",
    title: "Game Developer",
    company: "Company P",
    location: "Orlando, FL",
    jobType: "Contract",
    description: "Create and optimize video game experiences.",
  },
  {
    id: "17",
    title: "System Administrator",
    company: "Company Q",
    location: "Phoenix, AZ",
    jobType: "Full-time",
    description: "Manage and maintain IT infrastructure.",
  },
  {
    id: "18",
    title: "SEO Specialist",
    company: "Company R",
    location: "Miami, FL",
    jobType: "Part-time",
    description: "Optimize websites to improve search engine rankings.",
  },
  {
    id: "19",
    title: "Digital Marketing Manager",
    company: "Company S",
    location: "Atlanta, GA",
    jobType: "Full-time",
    description: "Develop and execute online marketing strategies.",
  },
  {
    id: "20",
    title: "IT Support Specialist",
    company: "Company T",
    location: "Nashville, TN",
    jobType: "Full-time",
    description: "Provide technical support to end users.",
  },
  {
    id: "21",
    title: "Blockchain Developer",
    company: "Company U",
    location: "Remote",
    jobType: "Full-time",
    description: "Build and maintain blockchain-based applications.",
  },
  {
    id: "22",
    title: "Machine Learning Engineer",
    company: "Company V",
    location: "San Jose, CA",
    jobType: "Full-time",
    description: "Develop machine learning models and algorithms.",
  },
  {
    id: "23",
    title: "Graphic Designer",
    company: "Company W",
    location: "Portland, OR",
    jobType: "Contract",
    description: "Create visual designs for marketing materials.",
  },
  {
    id: "24",
    title: "Business Analyst",
    company: "Company X",
    location: "Charlotte, NC",
    jobType: "Full-time",
    description: "Analyze business processes and recommend improvements.",
  },
  {
    id: "25",
    title: "Web Developer",
    company: "Company Y",
    location: "Philadelphia, PA",
    jobType: "Part-time",
    description: "Develop and maintain websites.",
  },
  {
    id: "26",
    title: "Data Engineer",
    company: "Company Z",
    location: "Salt Lake City, UT",
    jobType: "Full-time",
    description: "Build and optimize data pipelines and workflows.",
  },
  {
    id: "27",
    title: "Database Administrator",
    company: "Company AA",
    location: "Las Vegas, NV",
    jobType: "Full-time",
    description: "Manage and maintain database systems.",
  },
  {
    id: "28",
    title: "IT Project Manager",
    company: "Company AB",
    location: "Minneapolis, MN",
    jobType: "Full-time",
    description: "Lead IT projects to successful completion.",
  },
  {
    id: "29",
    title: "Content Manager",
    company: "Company AC",
    location: "Remote",
    jobType: "Part-time",
    description: "Oversee content creation and strategy.",
  },
  {
    id: "30",
    title: "Network Engineer",
    company: "Company AD",
    location: "Columbus, OH",
    jobType: "Full-time",
    description: "Design and implement network systems.",
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { location, jobType, company } = req.query;

  let filteredJobs = mockJobs;

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location as string)
    );
  }
  if (jobType) {
    filteredJobs = filteredJobs.filter((job) =>
      job.jobType.toLowerCase().includes(jobType as string)
    );
  }
  if (company) {
    filteredJobs = filteredJobs.filter((job) =>
      job.company.toLowerCase().includes(company as string)
    );
  }

  res.status(200).json(filteredJobs);
}
