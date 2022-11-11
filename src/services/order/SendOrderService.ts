import { PrismaClient } from "@prisma/client";

class SendOrderService {
    async execute(order_id: string) {
        const prismaCliente = new PrismaClient();

        const updatedOrder = await prismaCliente.order.update({
            where: {
                id: order_id
            }, data: {
                draft: false
            }
        })

        return updatedOrder;
    }
}

export { SendOrderService }