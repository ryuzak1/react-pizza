import { PrismaClient } from "@prisma/client";


class FinishOrderService {
    async execute(order_id: string) {
        const prismaCliente = new PrismaClient();
        console.log(order_id);

        const order = await prismaCliente.order.update({
            where: {
                id: order_id
            }, data: {
                status: true,
            }
        })
        return order;
    }
}

export { FinishOrderService }