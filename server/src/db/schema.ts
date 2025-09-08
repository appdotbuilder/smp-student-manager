import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const studentsTable = pgTable('students', {
  id: serial('id').primaryKey(),
  nama_lengkap: text('nama_lengkap').notNull(),
  nis: text('nis').notNull().unique(), // NIS should be unique
  kelas: text('kelas').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type Student = typeof studentsTable.$inferSelect; // For SELECT operations
export type NewStudent = typeof studentsTable.$inferInsert; // For INSERT operations

// Important: Export all tables and relations for proper query building
export const tables = { students: studentsTable };