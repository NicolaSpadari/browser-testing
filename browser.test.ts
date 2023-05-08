import { test } from "@playwright/test";
import { url } from "./variables.json";

test("test browser", async ({ page }) => {
    await page.goto(url);
    await page.pause();
});
