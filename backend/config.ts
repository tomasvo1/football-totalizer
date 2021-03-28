export default {
	port: process.env.HTTP_PORT || 8080,
	mongoConnectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/totalizer',
	mongoTestsConnectionString: process.env.MONGO_TESTS_CONNECTION_STRING || 'mongodb://localhost:17017/totalizer-testing',
}
