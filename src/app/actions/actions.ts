"use server";
import { z } from "zod";

import { actionClient } from "@/lib/safe-action";
import { typeJob } from "@/types/job";
import { formInputSchema } from "@/schema/schema";

const schema = z.object({
    jobId: z.string(),
  });


export async function getJobByIdold(jobId: string) {
  const response = await fetch(`http://localhost:3000/api/jobs/${jobId}`);
  return response.json();
}
export const getJobById = actionClient
    .schema(schema)
    .action(async ({ parsedInput: { jobId } }) => {
    const response = await fetch(`http://localhost:3000/api/jobs/${jobId}`);
    return response.json();
})

export const createJob = actionClient
  .schema(formInputSchema)
  .action(async ({ parsedInput: { title,company,location,jobType,description,salary,requirements, }}) => {
    const response = await fetch(`http://localhost:3000/api/jobs/create`);
    return response.json()
  })