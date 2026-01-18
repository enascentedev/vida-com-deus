const { test, expect } = require("@playwright/test");

test("footer tem 3 links válidos", async ({ page }) => {
	await page.addInitScript(() => localStorage.setItem("authToken", "fake-token"));
	await page.goto("/home");

	const footerLinks = page.locator("footer a");
	await expect(footerLinks).toHaveCount(3);

	const hrefs = await footerLinks.evaluateAll((links) =>
		links.map((link) => link.getAttribute("href"))
	);

	for (const href of hrefs) {
		expect(href).toMatch(/^https?:\/\//);
	}
});
