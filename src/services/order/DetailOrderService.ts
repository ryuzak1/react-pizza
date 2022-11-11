import { PrismaClient } from "@prisma/client";

class DetailOrderService {
    async execute(order_id: string) {
        const prismaCliente = new PrismaClient();
        console.log(order_id);

        const order = await prismaCliente.item.findMany({
            where: {
                order_id:order_id
            }, include: {
                order: true,
                Product: true
            }
        })
        return order;
    }
}

export { DetailOrderService }