const cors = require("cors");

const corsMiddleware = (app) => {
	app.use(
		cors({
			origin: "*",
			methods: ["GET", "POST", "PUT", "DELETE"],
			allowedHeaders: ["Content-Type", "Authorization"],
			credentials: true,
		})
	);
};

module.exports = corsMiddleware;
