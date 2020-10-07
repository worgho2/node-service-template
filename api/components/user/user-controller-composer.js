import UserRepository from './user-repository'
import UserController from './user-controller'
import {
  DeleteUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  CreateUserUseCase,
  UpdateUserUseCase,
} from './use-cases'

class UserControllerComposer {
  static compose() {
    const userRepository = new UserRepository()

    const deleteUserUseCase = new DeleteUserUseCase({ userRepository })
    const getAllUsersUseCase = new GetAllUsersUseCase({ userRepository })
    const getUserUseCase = new GetUserUseCase({ userRepository })
    const updateUserUseCase = new UpdateUserUseCase({ userRepository })
    const createUserUseCase = new CreateUserUseCase({ userRepository })

    return new UserController({
      deleteUserUseCase,
      getAllUsersUseCase,
      getUserUseCase,
      updateUserUseCase,
      createUserUseCase,
    })
  }
}

export default UserControllerComposer
