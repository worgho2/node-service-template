import ClientError from '../../../lib/interfaces/core/client-error'

class DeleteUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    const deletedUserId = await this.userRepository.deleteUser(id)

    if (!deletedUserId) throw ClientError.notFound('User Not Found')

    return deletedUserId
  }
}

export default DeleteUserUseCase
