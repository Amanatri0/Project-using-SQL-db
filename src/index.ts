import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

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

app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  await pgClient2.connect();

  const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

  const response = await pgClient2.query(insertQuery, [
    username,
    email,
    password,
  ]);
  console.log(response);

  res.json({
    message: "USer signup successfull",
  });
});

app.listen(3000);
