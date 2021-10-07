const { v4: uuidv4 } = require("uuid");

const lambdaHandler = async () => {
	try {
		const uuid = uuidv4();
		return uuid;
	} catch (err) {
		throw err;
	}
};

module.exports = lambdaHandler;
