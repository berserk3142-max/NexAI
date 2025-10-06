import 'dotenv/config'; // Add this line to load .env variables
import { drizzle } from 'drizzle-orm/neon-http';

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Add this for debugging
export const db = drizzle(process.env.DATABASE_URL!);
