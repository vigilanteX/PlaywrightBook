import dotenv from "dotenv";
import fs from "fs/promises";
dotenv.config();

const data = process.argv.slice(2);

await fs.writeFile(".env", "");
for (let d of data) {
  await fs.appendFile(".env", `${d}\n`);
}
