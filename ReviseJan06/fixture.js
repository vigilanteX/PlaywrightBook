import { test as base } from "@playwright/test";
import dotenv from "dotenv";
import fs from "fs/promises";
dotenv.config();

export const myfixture = base.extend({
  filereader: "filereader",
  getName: async function ({}, use) {
    use(process.env.TAG);
  },
  fsreader: async function ({}, use) {
    const functions = {
      getName: async function (name) {
        return name + " hoe";
      },
      getDataByName: async function (fieldName) {
        const data = await fs.readFile(`${process.env.TAG}.json`, "utf-8");
        const obj = JSON.parse(data);
        const ticketData = obj[process.env.TAG];
        return ticketData[fieldName];
      },
    };

    use(functions);
  },
});
