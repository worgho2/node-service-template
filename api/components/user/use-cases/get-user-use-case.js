import ClientError from '../../../lib/interfaces/core/client-error'
import ServerError from '../../../lib/interfaces/core/server-error'

class GetUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    const user = await this.userRepository.getUserById(id)

    if (!user) throw ClientError.notFound('User Not Found')

    return user
  }
}

export default GetUserUseCase
