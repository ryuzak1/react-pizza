import { PrismaClient } from "@prisma/client";

interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}

class AddItemService {
    async execute({ order_id, product_id, amount }: ItemRequest) {
        const prismaCliente = new PrismaClient();
        
        const item = await prismaCliente.item.create({
            data: {
                order_id: order_id,
                productId: product_id,
                amount
            }
        })

        return item;
    }
}

export {AddItemService}