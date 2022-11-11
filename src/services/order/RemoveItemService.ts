import { PrismaClient } from "@prisma/client";

class RemoveItemService {
    async execute(id: string) {
        const prismaCliente = new PrismaClient();

        const removedItem = await prismaCliente.item.delete({
            where: {
                id: id
            }
        })

        return removedItem;
    }
}

export { RemoveItemService }