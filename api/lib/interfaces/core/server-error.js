'use strict'

class ServerError extends Error {
  constructor(message = 'Internal Server Error', errorCode = '500', path) {
    super(message)
    this.errorCode = errorCode.toString()
    this.path = path
    this.name = `ServerError${errorCode}`
  }

  static Validation(message = 'Bad Request') {
    return new ServerError(message, 400)
  }

  static Forbidden(message = 'Forbidden') {
    return new ServerError(message, 403)
  }

  static NotFound(message = 'Not Found') {
    const id = parseInt(message.id || message)
    if (isNaN(id)) {
      return new ServerError(message, 404)
    }
    return new ServerError(`Not Found: { id: ${id} }`, 404)
  }

  static UnsupportedMediaType(type) {
    return new ServerError(`Unsupported Media Type: '${type}'`, 415)
  }

  add(error) {
    if (!this.errors) this.errors = []
    this.errors.push(error)
    return this
  }

  setPath(path) {
    this.path = path
    return this
  }
}

export default ServerError
