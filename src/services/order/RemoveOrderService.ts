import {PrismaClient} from"@prisma/client"

class RemoveOrderService{
    async execute(id:string){
        const prismaCliente = new PrismaClient();

        const removedOrder = await prismaCliente.order.delete({
            where:{
                id:id
            }
        })

        return removedOrder;
    }
}

export {RemoveOrderService}