import prismaClient from "../../prisma";

interface ProductRequest {
  id: string;
  name: string;
  price: string;
  description: string;
  // banner: string;
  category_id: string;
}

class UpdateProductService {
  async execute({ id, name, price, description, category_id }: ProductRequest) {
    const product = await prismaClient.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
        category_id,
      },
      select: {
        id: true,
        price: true,
        description: true,
        name: true,
      },
    });

    return product;
  }
}

export { UpdateProductService };
