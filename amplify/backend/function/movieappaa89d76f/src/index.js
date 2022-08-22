

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, _context, callback) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  event.response.autoConfirmUser = true
  callback(null, event)
}
