import "dotenv/config";

export const env ={
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST,
    DB_HOST_SERVER:process.env.DB_HOST_SERVER,
    DB_PORT:process.env.DB_PORT,
    DB_USER:process.env.DB_USER,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
}