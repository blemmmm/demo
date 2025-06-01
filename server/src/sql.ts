import postgres from 'postgres'

const POSTGRES_HOST = process.env.POSTGRES_HOST || "localhost";
const POSTGRES_PORT = Number(process.env.POSTGRES_PORT) || 5432;
const POSTGRES_DB = process.env.POSTGRES_DB || "postgres";
const POSTGRES_USER = process.env.POSTGRES_USER || "postgres";
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "postgres";

const sql = postgres({
  database: POSTGRES_DB,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export default sql