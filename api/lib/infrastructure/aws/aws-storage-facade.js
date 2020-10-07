import { config } from './config'

class AwsStorageFacade {
  static setup(configFile = config) {
    return
  }

  async getObject({ file }) {
    return null
  }

  async putObject({ key, data }) {
    return null
  }

  async putFile({ keyPath, filename, options }) {
    return null
  }
}

export default AwsStorageFacade
