import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UpdateUserSchema = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phoneNo: z.string().optional(),
    password: z.string().optional(),
    jobTitle: z.string().optional(),
    roleId: z.string().optional(),

});
export class UpdateUserDto extends createZodDto(UpdateUserSchema) { }