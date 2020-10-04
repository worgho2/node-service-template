import e from 'express'

class ExpressMiddlewareAdapter {
  static adapt(middleware) {
    return async (req, res, next) => {
      const incomingRequest = {
        headers: req.headers,
        body: req.body,
        locals: req.locals,
      }

      try {
        const incomingResponse = await middleware(incomingRequest)
        req.props = incomingResponse ? incomingResponse.props || {} : {}
        next()
      } catch (error) {
        next(error)
      }
    }
  }
}

export default ExpressMiddlewareAdapter
