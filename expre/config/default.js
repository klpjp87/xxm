'use strict';

module.exports = {
	port: 8001,
	url: 'mongodb://localhost:27017/yl',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	},
	REDIS_PORT :"127.0.0.1:6379",
}