const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
	testDir: "./tests",
	timeout: 60 * 1000,
	expect: {
		timeout: 10 * 1000,
	},
	use: {
		baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:5173",
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "iphone-11",
			use: { ...devices["iPhone 11"] },
		},
	],
	webServer: {
		command: "npm run dev -- --host 0.0.0.0 --port 5173",
		url: "http://127.0.0.1:5173",
		reuseExistingServer: true,
	},
});
