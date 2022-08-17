import prismaClient from "../../prisma";

class ListProductService {
  async execute() {
    const res = await prismaClient.category.findMany({
      select: {
        name: true,
        products: {
          select: {
            id: true,
            price: true,
            description: true,
            name: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });

    return res;
  }
}

export { ListProductService };
