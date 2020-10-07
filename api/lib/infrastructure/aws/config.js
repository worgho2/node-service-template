import dotenv from 'dotenv'

const dotenvPath = process.env.NODE_ENV
  ? `./.env.${process.env.NODE_ENV}`
  : './.env'
dotenv.config({ path: dotenvPath })

export const config = {
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
  s3: {
    region: process.env.AWS_S3_REGION,
    apiVersion: process.env.AWS_S3_VERSION,
    endpoint: process.env.AWS_S3_ENDPOINT,
    signatureVersion: 'v4',
  },
  ses: {
    region: process.env.AWS_SES_REGION,
    apiVersion: process.env.AWS_SES_VERSION,
    endpoint: process.env.AWS_SES_ENDPOINT,
    signatureVersion: 'v4',
  },
}
