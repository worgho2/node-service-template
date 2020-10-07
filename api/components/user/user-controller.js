import HttpResponse from '../../lib/interfaces/core/http-response'
import ServerError from '../../lib/interfaces/core/server-error'

class UserController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getAllUsers(req) {
    const { getAllUsersUseCase } = this.useCases
    const users = await getAllUsersUseCase.execute()

    return HttpResponse.ok({ users })
  }

  async getUser(req) {
    const { id } = req.params

    const { getUserUseCase } = this.useCases
    const user = await getUserUseCase.execute(id)

    if (!user) {
      throw new ServerError.NotFound(id)
    }

    return HttpResponse.ok({ user })
  }

  async createUser(req) {
    const { name, email } = req.body

    const { createUserUseCase } = this.useCases
    const user = await createUserUseCase.execute({ name, email })

    return HttpResponse.created({ user })
  }

  async updateUser(req) {
    const { name, email } = req.body
    const { id } = req.params

    const { updateUserUseCase } = this.useCases
    const user = await updateUserUseCase.execute(id, { name, email })

    if (!user) {
      throw new ServerError.Validation('Cannot update user')
    }

    return HttpResponse.ok({ user })
  }

  async deleteUser(req) {
    const { id } = req.params

    const { deleteUserUseCase } = this.useCases
    const success = await deleteUserUseCase.execute(id)

    if (!success) {
      throw new ServerError.Validation('Cannot delete user')
    }

    return HttpResponse.ok({ id })
  }
}

export default UserController
