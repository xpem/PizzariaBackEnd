import prismaClient from "../../prisma";

class DetailProductService {    
  async executeByName({ name }) {
    const products = await prismaClient.product.findMany({
      select: { id: true, name: true },
      where: { name },
    });

    return products;
  }
}

export { DetailProductService };