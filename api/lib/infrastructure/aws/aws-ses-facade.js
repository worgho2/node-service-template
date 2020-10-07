import { config } from './config'

class AwsSesFacade {
  static setup(configFile = config) {
    return
  }

  writeEmail({ to, subject, text, html }) {
    return null
  }

  async sendEmail({ params }) {
    return null
  }
}

export default AwsSesFacade
