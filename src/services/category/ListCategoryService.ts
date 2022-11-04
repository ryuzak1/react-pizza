import { PrismaClient } from "@prisma/client"

class ListCategoryService {
    async execute() {
        const prismaClient = new PrismaClient();

        const categories = prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return categories;

    }

}

export { ListCategoryService }