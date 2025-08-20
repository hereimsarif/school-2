import { z } from 'zod';

export const admissionsSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  parentEmail: z.string().email('Valid parent email required'),
  grade: z.enum(['Primary', 'Secondary', 'Higher Secondary']),
  message: z.string().optional(),
});

export type AdmissionsFormType = z.infer<typeof admissionsSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(3, 'Message required'),
});

export type ContactFormType = z.infer<typeof contactSchema>;
