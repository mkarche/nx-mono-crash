import { z } from 'zod';
import { UserSchema } from './schemas';

type UserType = z.infer<typeof UserSchema>;
