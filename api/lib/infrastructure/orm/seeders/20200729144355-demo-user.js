'use strict'

export async function up(queryInterface, _) {
  await queryInterface.bulkInsert(
    'Users',
    [
      {
        id: -1,
        name: 'Teste Miguel Oliveira',
        email: 'teste@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  )
}

export async function down(queryInterface, _) {
  await queryInterface.bulkDelete('Users', null, {})
}
