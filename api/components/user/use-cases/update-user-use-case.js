import ClientError from '../../../lib/interfaces/core/client-error'

class UpdateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id, updatedFields) {
    const updatedUser = await this.userRepository.updateUser(id, updatedFields)

    if (!updatedUser) throw ClientError.notFound('User Not Found')

    return updatedUser
  }
}

export default UpdateUserUseCase
