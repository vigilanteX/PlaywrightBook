import { expect, test } from "@playwright/test";
//=== comparison
test.skip("expect(value).toBe(value)", async function () {
  expect("aman").toBe("aman");
});
//below is negation of toBe
test.skip("expect(value).not.toBe(value)", function () {
  expect("aman").not.toBe("dixit");
});

test.skip("expect(value).toEqual(value)", function () {
  expect([1, 2, 3, 4, 5]).toEqual([1, 2, 3, 4, 5]);
  expect({ name: "Aman", age: 24 }).toEqual({ name: "Aman", age: 24 });
});

test.skip("expect(value).not.toEqual(value)", function () {
  expect([1, 2, 3, 4, 5]).not.toEqual([1, 2, 3, 4, 5, 6]);
});

test.skip("expect(value).toStrictEqual(value)", function () {
  //Fails but .toEqual() pass
  expect([1, , 3]).toStrictEqual([1, undefined, 3]);
});

test.skip("expect(value).toBeTruthy()", function () {
  expect(true).toBeTruthy();
  expect(" ").toBeTruthy();
  expect({}).toBeTruthy();
  expect([]).toBeTruthy();
  expect(1).toBeTruthy();
});

test.skip("expect(value).toBeFalsy()", function () {
  expect(false).toBeFalsy();
  expect("").toBeFalsy();
  expect(null).toBeFalsy();
  expect(0).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(NaN).toBeFalsy();
});

test.skip("expect(value).toBeNull()", function () {
  expect(null).toBeNull();
});

test.skip("expect(value).toBeUndefined()", function () {
  expect(undefined).toBeUndefined();
});
test.skip("expect(value).toBeDefined()", function () {
  //fails as value is undefined
  expect(undefined).toBeDefined();
  expect(null).toBeDefined();
  expect("").toBeDefined();
});

test.skip("expect(value).toBeNaN()", function () {
  expect(NaN).toBeNaN();
});

test.skip("expect(value).toBeGreaterThan(number)", function () {
  expect(3).toBeGreaterThan(1);
});

test.skip("expect(value).toBeGreaterThanOrEqual(number)", function () {
  expect(3).toBeGreaterThanOrEqual(3);
});

test.skip("expect(value).toBeLessThan(number)", function () {
  expect(2).toBeLessThan(3);
});
test.skip("expect(value).toBeLessThanOrEqual(number)", function () {
  expect(2).toBeLessThanOrEqual(2);
});

test.skip("expect(value).toContain(item)", function () {
  expect([1, 2, 3, 4, 5]).toContain(2);
  expect("AmanDixit").toContain("nDi");
});

test.skip("expect(value).toContainEqual(item)", function () {
  expect([{ name: "aman" }, { name: "Adarsh" }]).toContainEqual({
    name: "aman",
  });
});

test.skip("expect(value).toHaveLength(numberval)", function () {
  expect([1, 2, 3]).toHaveLength(3);
  expect("aman").toHaveLength(4);
});

test.skip("expect(value).toMatch(regexp)", function () {
  expect("AMAN").toMatch("AMAN");
});

test.skip("expect(value).toMatchObject(object)", function () {
  expect({ name: "Aman", age: 100 }).toMatchObject({ age: 100 });
});

test.skip("expect(fn).toThrow()", function () {
  expect(function () {
    throw new Error("mellow error");
  }).toThrow();
});

test("expect(fn).toThrowError()", function () {
  expect(function () {
    throw new Error("my error");
  }).toThrowError("my error");
});
