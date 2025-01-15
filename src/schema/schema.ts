import { z } from "zod";

export const formInputSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  jobType: z.string(),
  description: z.string(),
  salary: z.string(),
  requirements: z.string(),
})

export type formInput = z.infer<typeof formInputSchema>