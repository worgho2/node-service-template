class GetUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    return await this.userRepository.getUserById(id)
  }
}

export default GetUserUseCase
