import winston from 'winston';

const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple(),
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
