import { z } from "zod";

export const formInputSchema = z.object({
  job: z.array(
    z.object({
      title: z.string(),
      company: z.string(),
      location: z.string(),
      jobType: z.string(),
      description: z.string(),
      salary: z.number(),
      requirements: z.string(),
    })
  ),
})

export type formInput = z.infer<typeof formInputSchema>;
