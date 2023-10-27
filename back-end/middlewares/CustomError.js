// CustomError.js
class CustomError extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

class ValidationError extends CustomError {
	constructor(message) {
		super(400, message);
	}
}

class AuthenticationError extends CustomError {
	constructor(message) {
		super(401, message);
	}
}

// Exporte as classes para que possam ser usadas em outros arquivos
module.exports = { CustomError, ValidationError, AuthenticationError };
