import prismaClient from "../../prisma";

class DetailCategoryService {
    
  async executeByName({ name }) {
    const categories = await prismaClient.category.findMany({
      select: { id: true, name: true },
      where: { name },
    });

    return categories;
  }

  async executeById({ id }) {
    const categories = await prismaClient.category.findMany({
      select: { id: true, name: true },
      where: { id },
    });

    return categories;
  }

}

export { DetailCategoryService };
