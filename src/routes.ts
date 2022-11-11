import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserControler } from "./controllers/user/DetailUserControler";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

import { isAuthenticated } from "./middleware/isAuthenticated";
import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// --------- USER ROUTES ---------
router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserControler().handle);

// --------- CATEGORY ROUTES ---------
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

// --------- PRODUCT ROUTES ---------
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.get("/category/products", isAuthenticated, new ListProductByCategoryController().handle);

// --------- ORDER ROUTES ---------
router.post("/order", isAuthenticated,new CreateOrderController().handle);
router.delete("/order", isAuthenticated,new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated,new AddItemController().handle);
router.delete("/order/remove", isAuthenticated,new RemoveItemController().handle);
router.patch("/order/send", isAuthenticated,new SendOrderController().handle);
router.get("/order", isAuthenticated,new ListOrderController().handle);
router.get("/order/detail", isAuthenticated,new DetailOrderController().handle);
router.patch("/order/finish", isAuthenticated,new FinishOrderController().handle);


export { router };