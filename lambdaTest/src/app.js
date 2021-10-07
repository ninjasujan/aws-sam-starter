const uuid = require("/opt/nodejs/app.js");

exports.lambdaHandler = async (event, context) => {
	try {
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "API Authorized for Lambda",
				uuid: uuid(),
			}),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify(err),
		};
	}
};
