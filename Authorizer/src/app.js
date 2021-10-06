function generateAuthResponse(principalId, effect, methodArn) {
	const policyDocument = generatePolicyDocument(effect, methodArn);
	return {
		principalId,
		policyDocument,
	};
}

function generatePolicyDocument(effect, methodArn) {
	if (!effect || !methodArn) return null;

	const policyDocument = {
		Version: "2012-10-17",
		Statement: [
			{
				Action: "execute-api:Invoke",
				Effect: effect,
				Resource: methodArn,
			},
		],
	};

	return policyDocument;
}

exports.lambdaHandler = async (event, context) => {
	try {
		const token = event.authorizationToken.toLowerCase();
		const methodArn = event.methodArn;

		switch (token) {
			case "allow":
				return generateAuthResponse("123123123", "Allow", methodArn);
			default:
				return generateAuthResponse("123123123", "Deny", methodArn);
		}
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify(err),
		};
	}
};
