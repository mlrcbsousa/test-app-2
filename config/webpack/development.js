process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// https://knowndecimal.com/blogs/points/expose-webpack-devserver-websockets-using-ngrok-tunnels
environment.config.merge({
    devServer: {
        public: 'yyy.ngrok.io'
    }
});

module.exports = environment.toWebpackConfig()