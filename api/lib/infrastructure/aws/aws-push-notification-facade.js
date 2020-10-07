import { config } from './config'

class AwsPushNotificationFacade {
  static setup(configFile = config) {
    return
  }

  async sendEmail({ pushToken, message }) {
    return null
  }
}

export default AwsPushNotificationFacade
