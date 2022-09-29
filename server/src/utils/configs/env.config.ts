import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const env = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
};
