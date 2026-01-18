const { test, expect } = require("@playwright/test");

test("login fake e checagens básicas de UI", async ({ page }) => {
	await page.addInitScript(() => localStorage.setItem("authToken", "fake-token"));
	await page.goto("/home");

	await expect(page.locator("header")).toBeVisible();
	await expect(page.locator("footer")).toBeVisible();

	const footerLinks = page.locator("footer a");
	await expect(footerLinks).toHaveCount(3);
	const hrefs = await footerLinks.evaluateAll((links) =>
		links.map((link) => link.getAttribute("href"))
	);
	for (const href of hrefs) {
		expect(href).toMatch(/^https?:\/\//);
	}

	const hamburgerToggle = page.locator("#hamburguer label");
	if (await hamburgerToggle.isVisible()) {
		const mobileMenu = page.locator("#mobile");
		await expect(mobileMenu).toHaveClass(/hidden/);
		await hamburgerToggle.click();
		await expect(mobileMenu).not.toHaveClass(/hidden/);
	}
});
