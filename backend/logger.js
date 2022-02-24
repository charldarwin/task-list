const winston = require('winston');

const {combine, timestamp, json} = winston.format

const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({ filename: './logs/events.log'})
    ]
})


module.exports = logger