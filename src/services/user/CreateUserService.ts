import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        const client = new PrismaClient();

        if (!email) {
            throw new Error("email incorrect");

        }

        const userAlreadyExists = await client.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("user already exist!");
        }

        const hashPassword = await hash(password, 8);

        const user = await client.user.create({
            data: {
                nome: name,
                email: email,
                password: hashPassword,
            },
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })

        return user;
    }
}

export { CreateUserService }