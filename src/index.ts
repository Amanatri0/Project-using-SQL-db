import { Client } from "pg";

// const pgClient = new Client(
//   "postgresql://neondb_owner:npg_Ht1P9UDMzdrb@ep-empty-flower-a1ovgnw2-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
// );

const pgClient2 = new Client({
  user: "neondb_owner",
  password: "npg_Ht1P9UDMzdrb",
  port: 5432,
  host: "ep-empty-flower-a1ovgnw2-pooler.ap-southeast-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

async function main() {
  await pgClient2.connect();

  const insertQuery = `INSERT INTO users ()`;

  const response = await pgClient2.query();

  console.log(response.rows);
}

main();
