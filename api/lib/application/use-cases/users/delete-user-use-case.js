class DeleteUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    return await this.userRepository.deleteUser(id)
  }
}

export default DeleteUserUseCase
