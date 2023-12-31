import * as z from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }).max(50, { message: 'Name must be at most 50 characters long' }),
  username: z.string().min(2, { message: 'Username must be at least 2 characters long' }).max(50, { message: 'Username must be at most 50 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).max(50, { message: 'Password must be at most 50 characters long' }),
});
