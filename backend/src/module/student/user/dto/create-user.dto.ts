export class Customer { }
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateUserSchema = z.object({
    email: z.string(),
    name: z.string(),
    phoneNo: z.string().optional(),
    password: z.string().optional(),
    jobTitle: z.string().optional(),
    roleId: z.string().optional(),
});
export class CreateStaffDto extends createZodDto(CreateUserSchema) { }


export const findStaffSchema = z.object({
    type: z.enum(["STAFF_ADMIN", "COMPANY_ADMIN"])
});
export class findAllStaffDto extends createZodDto(findStaffSchema) { }
