import { PrismaClient } from "@prisma/client"

interface ProducCategoryRequest {
    category_id: string;

}

class ListProducByCategoryService {
    async execute({ category_id }: ProducCategoryRequest) {

        const prismaClient = new PrismaClient();

        const findProducts = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return findProducts;
    }
}

export {ListProducByCategoryService}