import { test, expect } from "@playwright/test";

test("desktop mega menu stays open while moving into dropdown", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 900 });
  await page.goto("http://127.0.0.1:5173/final-project/", { waitUntil: "networkidle" });

  const skincare = page.getByText("Skincare", { exact: true });
  const title = page.getByText("Skincare Products");
  const panel = title.locator("..").locator("..").locator("..");

  await skincare.hover();
  await expect(title).toBeVisible();

  const navBox = await skincare.boundingBox();
  const panelBox = await panel.boundingBox();
  expect(navBox).not.toBeNull();
  expect(panelBox).not.toBeNull();

  await page.mouse.move(navBox.x + navBox.width / 2, navBox.y + navBox.height + 6);
  await expect(title).toBeVisible();

  await page.mouse.move(panelBox.x + 40, panelBox.y + 40);
  await expect(title).toBeVisible();
});
