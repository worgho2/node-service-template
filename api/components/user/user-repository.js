import db from '../../lib/infrastructure/orm/models'

class UserRepository {
  async getAllUsers() {
    return await db.User.findAll()
  }

  async getUserById(id) {
    return await db.User.findOne({
      where: {
        id: id,
      },
    })
  }

  async createUser(user) {
    return await db.User.create(user)
  }

  async updateUser(id, updatedFields) {
    const user = await this.getUserById(id)

    if (user) {
      return await user.update(updatedFields)
    }

    return null
  }

  async deleteUser(id) {
    const user = await this.getUserById(id)

    if (!user) {
      return null
    }

    return await user.destroy()
  }
}

export default UserRepository
