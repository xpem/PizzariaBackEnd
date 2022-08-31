import prismaClient from "../../prisma";

interface ProductRequest {
  id: string;
}

class DeleteProductService {
  async execute({ id }: ProductRequest) {
    const item = await prismaClient.product.delete({
      where: { id },
    });
    return item;
  }
}

export { DeleteProductService };
