import { test, expect } from "@playwright/test";

//Hooks
test.beforeAll("Before all ", async () => {
  console.log("Before all the test");
});

test.afterAll("After all ", async () => {
  console.log("After all the test");
});

test.beforeEach("Before each ", async () => {
  console.log("Before each the test");
});

test.afterEach("After each ", async () => {
  console.log("After each the test");
});

// Grouping concept

test.describe("Group 1", () => {
  test("Test 01 ", async ({ page }) => {
    console.log("This is test 01");
  });

  test("Test 2 ", async ({ page }) => {
    console.log("This is test 2");
  });
});

// test.describe.only("Group 2", () => {
//   test("Test 3 ", async ({ page }) => {
//     console.log("This is test 3");
//   });

//   test("Test 04 ", async ({ page }) => {
//     console.log("This is test 04");
//   });
// });

test.describe.skip("Group 3", () => {
  test("Test 05 ", async ({ page }) => {
    console.log("This is test 05");
  });

  test("Test 06 ", async ({ page }) => {
    console.log("This is test 06");
  });
});
