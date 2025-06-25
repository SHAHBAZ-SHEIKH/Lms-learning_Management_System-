import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "../../backend/lib/db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateSequentialStudentId = async () => {
  const lastStudent = await prisma.student.findFirst({
    orderBy: { createdAt: "desc" },
    select: { studentId: true },
  });

  const lastIdNumber = lastStudent?.studentId
    ? parseInt(lastStudent.studentId.split("-")[1])
    : 0;

  const newIdNumber = lastIdNumber + 1;
  const paddedNumber = newIdNumber.toString().padStart(4, "0");

  return `STD-${paddedNumber}`;
};
