import { myfixture } from "./fixture.js";

myfixture("hello", async function ({ filereader, getName, fsreader }) {
  console.log(filereader);
  console.log(getName);
  console.log(await fsreader.getName("aman"));
  console.log(await fsreader.getDataByName("preferences"));
});
