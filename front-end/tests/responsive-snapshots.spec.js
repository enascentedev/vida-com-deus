const { test, expect, devices } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const routes = [
	{ name: "home", path: "/home" },
	{ name: "artigo", path: "/artigo-semanal" },
	{ name: "livros", path: "/livros" },
];

const snapshotsRoot = path.join(__dirname, "__snapshots__", "default");

function listPngFiles(dir) {
	if (!fs.existsSync(dir)) return [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...listPngFiles(fullPath));
		} else if (entry.isFile() && entry.name.endsWith(".png")) {
			files.push(fullPath);
		}
	}
	return files;
}

function hasBaselineSnapshots() {
	return listPngFiles(snapshotsRoot).length > 0;
}

async function disableAnimations(page) {
	await page.addStyleTag({
		content: `
			*,
			*::before,
			*::after {
				animation: none !important;
				transition: none !important;
				scroll-behavior: auto !important;
			}
		`,
	});
}

async function waitForPageReady(page) {
	await page.waitForLoadState("networkidle");
	await page.waitForSelector("header", { state: "visible" });
	await page.waitForTimeout(1000);
}

async function takeOrCompare(page, testInfo, name, options = {}) {
	if (!hasBaselineSnapshots()) {
		const expectedPath = testInfo.snapshotPath(path.join("default", name));
		fs.mkdirSync(path.dirname(expectedPath), { recursive: true });
		await page.screenshot({ path: expectedPath, ...options });
		return;
	}

	await expect(page).toHaveScreenshot(name, options);
}

test.describe("snapshots responsivos", () => {
	test("iphone 11", async ({ browser }, testInfo) => {
		const context = await browser.newContext({
			...devices["iPhone 11"],
		});
		const page = await context.newPage();
		await page.addInitScript(() => localStorage.setItem("authToken", "fake-token"));
		await disableAnimations(page);

		for (const route of routes) {
			await page.goto(route.path);
			await waitForPageReady(page);
			await takeOrCompare(page, testInfo, `${route.name}-iphone-11.png`);
		}

		await context.close();
	});

	test("desktop 1280x800", async ({ browser }, testInfo) => {
		const context = await browser.newContext({
			viewport: { width: 1280, height: 800 },
		});
		const page = await context.newPage();
		await page.addInitScript(() => localStorage.setItem("authToken", "fake-token"));
		await disableAnimations(page);

		for (const route of routes) {
			await page.goto(route.path);
			await waitForPageReady(page);
			await takeOrCompare(page, testInfo, `${route.name}-desktop.png`);
		}

		await context.close();
	});
});
