import ServerError from '../../../lib/interfaces/core/server-error'

class CreateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(user) {
    return await this.userRepository.createUser(user)
  }
}

export default CreateUserUseCase
