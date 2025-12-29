import { test as base } from "@playwright/test";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const test = base.extend({
  testData: async ({}, use) => {
    console.log("Setting up test data");
    const data = {
      username: "user@test.com",
      password: "Password123",
    };

    await use(data);
    console.log("Tearing down test data");
  },
  dataConnector: async ({}, use) => {
    console.log("Setting up data connector");
    console.log(process.env.BASE);
    await use({ connected: true });
    console.log("Tearing down data connector");
  },
  apiCall: async function ({}, use) {
    let data = await axios("http://localhost:3000/playwrightget");
    use(data.data);
  },
});
