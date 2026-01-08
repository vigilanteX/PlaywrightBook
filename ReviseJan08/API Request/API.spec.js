import { test } from "@playwright/test";
const header = {
  brand: "WBC",
  "x-appcorrelationId": "appaman1234",
  "x-messageId": "messageaman1234",
};
const params = {
  brandSilo: "WPAC",
};
const data = {
  id: 101,
  name: "Sample Item",
  active: true,
};
test.skip("get api", async function ({ request }) {
  const data = await request.get("http://localhost:3000/apiresponse1", {
    headers: header,
    params,
  });
  console.log(await data.json());
  console.log(data.headersArray());
});

test("post api", async function ({ request }) {
  const res = await request.post("http://localhost:3000/PlaywrightPOST", {
    data,
    headers: header,
    params,
  });
  const myData = await res.json();
  console.log(myData);
});
