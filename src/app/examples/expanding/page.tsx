import { getJobListings } from "@/app/actions/actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Listings(){
    const data = [
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
          subRows: [
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
          ]
        },
      ];
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
      </div>
    )

}