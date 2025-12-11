import { expect, test } from "@playwright/test";

test("GET REQUEST TEST", async function ({ request }) {
  const headers = {
    brand: "WBC",
    "x-userId": "234567",
    "x-userIdScheme": "CustomerInternalId",
  };
  const params = { brandSilo: "WPAC" };
  const response = await request.get("http://localhost:3000/playwrightget", {
    headers: headers,
    params,
  });
  console.log(await response.json());
  //   console.log(await response.headers());
  //   console.log(expect(response).toBeOK());
});

test("POST REQUEST", async function ({ request }) {
  const employee = {
    id: 101,
    name: "Aman Dixit",
    department: "Engineering",
    isActive: true,
  };
  const params = { brandSilo: "WPAC" };
  const headers = {
    brand: "WBC",
    "x-userId": "234567",
    "x-userIdScheme": "CustomerInternalId",
  };

  const response = await request.post("http://localhost:3000/playwrightpost", {
    data: employee,
    headers,
    params,
    maxRetries: 3,
  });
  console.log(await response.status());
});
