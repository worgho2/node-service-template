class HttpResponse {
  static ok(body) {
    return {
      statusCode: 200,
      body: {
        data: body,
      },
    }
  }

  static created(body) {
    return {
      statusCode: 201,
      body: {
        data: body,
      },
    }
  }
}

export default HttpResponse
