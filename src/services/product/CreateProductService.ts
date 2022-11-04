import { PrismaClient } from "@prisma/client"
interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({ name, price, description, banner, category_id }: ProductRequest) {

        const prismaClient = new PrismaClient();

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            },
            select: {
                name: true,
                price: true,
                description: true,
                banner: true,
            }
        })
        return product;
    }
}

export { CreateProductService }