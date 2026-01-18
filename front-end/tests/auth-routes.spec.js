const { test, expect } = require("@playwright/test");

const protectedRoutes = ["/", "/home", "/artigo-semanal", "/livros"];

test.describe("proteção de rotas", () => {
	test("sem token redireciona para /login", async ({ page }) => {
		await page.goto("/home");
		await expect(page).toHaveURL(/\/login$/);
	});

	test("com token acessa todas as rotas críticas", async ({ page }) => {
		await page.addInitScript(() => localStorage.setItem("authToken", "fake-token"));

		for (const route of protectedRoutes) {
			await page.goto(route);
			await expect(page.locator("header")).toBeVisible();
		}
	});
});
