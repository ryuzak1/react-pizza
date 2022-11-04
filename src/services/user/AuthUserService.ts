import { PrismaClient, User } from "@prisma/client"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const prismaClient = new PrismaClient();

        const userAuth = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (!userAuth) {
            throw new Error("User or password incorrect");
        }

        if (!await compare(password, userAuth.password)) {
            throw new Error("User or password incorrect");
        }

        const token = sign(
            {
                name: userAuth.nome,
                email: userAuth.email
            },
            process.env.JWT_TOKEN,
            {
                subject: userAuth.id,
                expiresIn: "1h"
            }
        )

        return {
            id: userAuth.id,
            email: userAuth.email,
            token: token
        }
    }

}

export { AuthUserService }