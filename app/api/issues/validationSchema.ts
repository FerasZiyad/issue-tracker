import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(0, "Title is required."),
  description: z.string().min(0, "Description is required."),
});
