import { PrismaClient } from "@prisma/client"

interface OrderRequest {
    table: number;
    name: string;
}
class CreateOrderService {
    async execute({ table, name }: OrderRequest) {

        const prismaCliente = new PrismaClient();

        const order = await prismaCliente.order.create({
            data: {
                table: table,
                name: name
            }
        })
        return order;
    }
}

export { CreateOrderService }