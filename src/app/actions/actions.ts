"use server";
import { z } from "zod";

import { actionClient } from "@/lib/safe-action";
import { typeJob } from "@/types/job";

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