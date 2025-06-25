import prisma from "../../backend/lib/db"
import { Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export const getStudentById = async (id: string) => {
    try {
        return await prisma.student.findFirst({
            where: { id },
        });
    } catch {
        return null;
    }
}

export const getStudentByEmail = async (email: string) => {
    try {
        return await prisma.student.findFirst({
            where: { email },
        });
    } catch {
        return null;
    }
}

type UpdateStudentType = Prisma.Args<typeof prisma.student, "update">["data"];

export const updateStudentById = async (id: string, payload: UpdateStudentType) => {
    try {
        return await prisma.student.update({
            where: { id },
            data: payload,
        });
    } catch (error) {
        console.error("Update failed:", error);
        return null;
    }
};

export const createUserSessionInDB = async (studentId: string) => {
    const sessionToken = uuidv4();

    try {
        await prisma.studentSession.deleteMany({
            where: { studentId },
        });

        await prisma.studentSession.create({
            data: {
                sessionToken,
                studentId,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            },
        });

        await prisma.student.update({
            where: { id: studentId },
            data: {
                lastLogin: new Date(),
            },
        });

    } catch (err) {
        console.error("Error inserting session:", err);
    }
};

export const getAccountByUserId = async (userId: string) => {
    try {
        const account = await prisma.account.findFirst({
            where: { userId },
        });
        return account;
    } catch {
        return null;
    }
};