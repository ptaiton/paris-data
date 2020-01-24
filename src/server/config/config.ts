interface Config {
  JWT_SECRET: string
}

export const config: Config = {
  JWT_SECRET: process.env.JWT_SECRET || 'S3CR37',
}