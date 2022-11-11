import { PrismaClient } from "@prisma/client";

class ListOrderService {
    async execute() {
        const prismaCliente = new PrismaClient();

        const orders = await prismaCliente.order.findMany({
            where: {
                draft: false
            }
        })
        return orders;
    }
}

export { ListOrderService }