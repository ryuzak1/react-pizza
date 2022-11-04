import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserControler } from "./controllers/user/DetailUserControler";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";

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


export { router };