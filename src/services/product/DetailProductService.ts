import prismaClient from "../../prisma";

class DetailProductService {
  async executeByName({ name }) {
    const products = await prismaClient.product.findMany({
      select: { id: true, name: true },
      where: { name },
    });

    return products;
  }

  async executeById({ id }) {
    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        price: true,
        description: true,
        name: true,
        category_id: true,
      },
      where: { id },
    });

    return products;
  }
}

export { DetailProductService };
