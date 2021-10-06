exports.lambdaHandler = async (event, context) => {
	try {
		const _id = event.requestContext.authorizer.principalId;
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "API Authorized", _id: _id }),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify(err),
		};
	}
};
