// errorMiddleware.js
const {
	CustomError,
	ValidationError,
	AuthenticationError,
} = require("./CustomError");

module.exports = (err, req, res, next) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ message: err.message });
	}

	if (err instanceof ValidationError) {
		// Responde com um código 400 e fornecer detalhes sobre o erro de validação
		return res.status(400).json({ message: err.message, type: "validation" });
	}

	if (err instanceof AuthenticationError) {
		// Responde com um código 401 e fornecer detalhes sobre o erro de autenticação
		return res
			.status(401)
			.json({ message: err.message, type: "authentication" });
	}

	// erro desconhecido
	console.error(err);
	return res.status(500).json({ message: "Internal Server Error" });
};
