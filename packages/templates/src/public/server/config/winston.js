import winston from 'winston';
import expressWinston from 'express-winston';
import { isDevelopment } from 'helpers';

const customizeLevels = (req, res) => {
  let level = '';
  if (res.statusCode >= 100) {
    level = 'info';
  }
  if (res.statusCode >= 400) {
    level = 'warn';
  }
  if (res.statusCode >= 500) {
    level = 'error';
  }
  if (res.statusCode === 401 || res.statusCode === 403) {
    level = 'critical';
  }
  return level;
};

const consoleTransport = new winston.transports.Console();
const combineFormats = [
  winston.format.timestamp(),
  winston.format.metadata({
    fillExcept: ['message', 'level', 'timestamp', 'label'],
  }),
];

if (isDevelopment) {
  combineFormats.push(winston.format.colorize(), winston.format.simple());
} else {
  combineFormats.push(winston.format.json());
}
const format = winston.format.combine(...combineFormats);

export const expressLogger = expressWinston.logger({
  transports: [consoleTransport],
  format,
  statusLevels: false,
  level: customizeLevels,
  skip: (req, res) => {
    if (res.statusCode < 400 || res.statusCode === 404) return true;
  },
  ignoredRoutes: ['_health'],
});

export const expressErrorLogger = expressWinston.errorLogger({
  transports: [consoleTransport],
  format,
  statusLevels: false,
  level: customizeLevels,
});

export const logger = winston.createLogger({
  transports: [consoleTransport],
  format,
});
