import express from 'express';
import { getTemplateByPathname } from '../controllers';
import { logger } from '../config/winston';

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: AdsBot-Google\nUser-agent: Googlebot');
});
router.get('/asset-manifest.json', (req, res) => {
  res.type('text/plain');
  res.send('[]');
});
router.get('/_health', (req, res) => res.status(200).end());
router.get('/:pathname', getTemplateByPathname);
router.get('/', getTemplateByPathname);
router.get('*', (req, res) =>
  res.status(404).send(`
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; font-size: 15px; }
          h1 { color: #c7c7c7; text-align: center; }
        </style>
      </head>

      <body>
        <h1>404 - Not Found</h1>
      </body>
    </html>`)
);
router.use(({ e, message, logMeta, ...additionalFields }, req, res, next) => {
  logger.error(message, {
    ...logMeta,
    ...additionalFields,
    errorCode: JSON.stringify(e?.code),
    statusCode: JSON.stringify(e?.response?.status),
    errorMessage: JSON.stringify(e?.message),
    trace: JSON.stringify(e),
    stack: JSON.stringify(e?.stack),
  });

  return res.status(404).send(`
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; font-size: 15px; }
          h1 { color: red; text-align: center; width: 50%; margin: 0 auto }
          h2 { text-align: center; width: 50%; margin: 0 auto }
        </style>
      </head>

      <body>
        <h1>${e.message}</h1>
        <h2>${e.stack}</h2>
      </body>
    </html>`);
});

export default router;
