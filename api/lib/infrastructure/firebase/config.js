import dotenv from 'dotenv'

const dotenvPath = process.env.NODE_ENV
  ? `./.env.${process.env.NODE_ENV}`
  : './.env'
dotenv.config({ path: dotenvPath })

export default {
  credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
}
