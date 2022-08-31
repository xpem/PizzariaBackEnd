import prismaClient from "../../prisma";

class ListItemService {
  async executeByProductId({ productId }) {
    const Items = await prismaClient.item.findMany({
      where: { product_id: productId },
      select: { id: true },
    });

    return Items;
  }
}

export { ListItemService };
