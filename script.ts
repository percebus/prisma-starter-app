import { PrismaClient } from '@prisma/client'

const oPrismaClient = new PrismaClient()

async function main() {
  const users = await oPrismaClient.user.findMany({
    include: { posts: true },
  })

  console.table(users)

  // use `console.dir` to print nested objects
  console.dir(users, { depth: null })
}


main()
  .catch(oError => {
    throw oError
  })
  .finally(async () => {
    await oPrismaClient.$disconnect()
  })
