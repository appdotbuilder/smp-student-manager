import { z } from 'zod';

// Student schema
export const studentSchema = z.object({
  id: z.number(),
  nama_lengkap: z.string(),
  nis: z.string(), // Nomor Induk Siswa
  kelas: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
});

export type Student = z.infer<typeof studentSchema>;

// Input schema for creating students
export const createStudentInputSchema = z.object({
  nama_lengkap: z.string().min(1, "Nama lengkap harus diisi"),
  nis: z.string().min(1, "NIS harus diisi"),
  kelas: z.string().min(1, "Kelas harus diisi")
});

export type CreateStudentInput = z.infer<typeof createStudentInputSchema>;

// Input schema for updating students
export const updateStudentInputSchema = z.object({
  id: z.number(),
  nama_lengkap: z.string().min(1, "Nama lengkap harus diisi").optional(),
  nis: z.string().min(1, "NIS harus diisi").optional(),
  kelas: z.string().min(1, "Kelas harus diisi").optional()
});

export type UpdateStudentInput = z.infer<typeof updateStudentInputSchema>;

// Schema for getting student by NIS (for student access)
export const getStudentByNisInputSchema = z.object({
  nis: z.string().min(1, "NIS harus diisi")
});

export type GetStudentByNisInput = z.infer<typeof getStudentByNisInputSchema>;

// Schema for getting student by ID
export const getStudentByIdInputSchema = z.object({
  id: z.number()
});

export type GetStudentByIdInput = z.infer<typeof getStudentByIdInputSchema>;