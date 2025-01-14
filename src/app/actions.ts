"use server";

import { typeFilterValues } from "../types/job";

export async function filterJobs(filters: typeFilterValues) {
  const { location, jobType, company } = filters;
  const query = `?location=${location}&jobType=${jobType}&company=${company}`;
  const response = await fetch(`http://localhost:3000/api/jobs${query}`);
  return response.json();
}
