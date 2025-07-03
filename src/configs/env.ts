import "dotenv/config";

export const processEnv = {
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN,

  BUILD_MODE: process.env.BUILD_MODE,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
}
