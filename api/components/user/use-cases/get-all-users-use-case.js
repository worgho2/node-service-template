import ClientError from '../../../lib/interfaces/core/client-error'
import ServerError from '../../../lib/interfaces/core/server-error'

class GetAllUsersUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute() {
    const users = await this.userRepository.getAllUsers()

    if (!users) throw ServerError.internal()

    return users
  }
}

export default GetAllUsersUseCase
