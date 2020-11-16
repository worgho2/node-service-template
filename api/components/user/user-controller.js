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

    return HttpResponse.ok({ user })
  }

  async createUser(req) {
    const { name, email } = req.body

    const { createUserUseCase } = this.useCases
    const user = await createUserUseCase.execute({
      name,
      email,
    })

    if (!user) return HttpResponse.noContent()
    return HttpResponse.created({ user })
  }

  async updateUser(req) {
    const { name, email } = req.body
    const { id } = req.params

    const { updateUserUseCase } = this.useCases
    const user = await updateUserUseCase.execute(id, { name, email })

    return HttpResponse.ok({ user })
  }

  async deleteUser(req) {
    const { id } = req.params

    const { deleteUserUseCase } = this.useCases
    const deletedUserId = await deleteUserUseCase.execute(id)

    return HttpResponse.noContent()
  }
}

export default UserController
