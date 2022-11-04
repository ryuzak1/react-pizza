import { PrismaClient } from "@prisma/client"

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        const prismaClient = new PrismaClient();

        if (name === "" || name === null || name === undefined) {
            throw new Error("Invalid Name");
        }


        const category = await prismaClient.category.create({
            data: {
                name: name
            }, select: {
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { CreateCategoryService }