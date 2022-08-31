import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";
import { ListProductController } from "./controllers/product/ListProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//User Routes
router.post("/user", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//Category Routes
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

router.get(
  "/category/:id",
  isAuthenticated,
  new ListCategoryController().handle
);

router.put(
  "/category/:id",
  isAuthenticated,
  new UpdateCategoryController().handle
);

router.delete(
  "/category/:id",
  isAuthenticated,
  new DeleteCategoryController().handle
);

//Product Routes
router.post(
  "/product",
  isAuthenticated,
  // upload.single("file"),
  new CreateProductController().handle
);

router.get("/product", isAuthenticated, new ListProductController().handle);

router.put(
  "/product/:id",
  isAuthenticated,
  new UpdateProductController().handle
);

router.delete(
  "/product/:id",
  isAuthenticated,
  new DeleteProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//Order Routes
router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.post("/order/add", isAuthenticated, new AddItemController().handle);

router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);

router.get("/order", isAuthenticated, new ListOrderController().handle);

router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);

router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

export { router };
