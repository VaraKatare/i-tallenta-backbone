const HttpError = require('../util/http-error')
const apiV1 = require('./v1')
const Raven = require('raven')
const config = require('config')

const router = require('express').Router()

router.use('/v1', apiV1)

if (process.env.NODE_ENV === 'production') {
  Raven.config(config.get('sentry_dns')).install()
}

router.use(function (req, res, next) {
  const err = new HttpError('Not Found', 404)

  next(err)
})

router.use(function (err, req, res, next) {
  const response = {
    message: err.message,
    error: err.stack
  }

  if (process.env.NODE_ENV === 'production') {
    delete response.error

    if (!(err instanceof HttpError)) {
      Raven.captureException(err)
    }
  }

  res.status(err instanceof HttpError ? err.httpStatusCode : 500).send(response)
})

module.exports = router
