import { PrismaClient } from "@prisma/client"

class DetailUserService {
    async execute(user_id: string) {
        const prismaClient = new PrismaClient();

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }, select: {
                id: true,
                nome: true,
                email: true,
            }
        })

        return user;
    }

}

export { DetailUserService }