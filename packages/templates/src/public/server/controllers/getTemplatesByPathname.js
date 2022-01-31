import uuid from 'react-uuid';
import renderApp from '../services/renderApp';
import { logger } from '../config/winston';

const getTemplateByPathname = async (req, res, next) => {
  const {
    query: queryParams,
    hostname,
    path,
    params: { pathname },
  } = req;
  const logMeta = {
    ip: req.headers['cf-connecting-ip'] || req.ip,
    traceID: uuid(),
    path,
    hostname,
    queryParams,
  };

  logger.profile(`render-app-${logMeta.traceID}`);
  logger.info(`rendering app`, logMeta);

  const rendered = await renderApp(req, logMeta, next);

  logger.profile(`render-app-${logMeta.traceID}`, {
    message: `finish rendering app`,
    ...logMeta,
  });
  logger.profile(`request-${logMeta.traceID}`, {
    message: `return rendered response`,
    ...logMeta,
  });

  if (rendered?.timeout) {
    res.header('Last-Modified', req.headers['if-modified-since']);
    return res.sendStatus(304);
  }

  if (rendered) {
    return res.send(rendered);
  }

  return next();
};

export default getTemplateByPathname;
