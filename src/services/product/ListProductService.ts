import prismaClient from "../../prisma";

class ListProductService {
  async execute() {
    const res = await prismaClient.product.findMany({
      select: {
        id: true,
        price: true,
        description: true,
        name: true,
        category: { select: { id: true, name: true } },
      },
      orderBy: { category_id: "desc" },
    });

    return res;
  }
}

export { ListProductService };
