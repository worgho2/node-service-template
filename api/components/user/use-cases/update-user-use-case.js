class UpdateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id, updatedFields) {
    return await this.userRepository.updateUser(id, updatedFields)
  }
}

export default UpdateUserUseCase
