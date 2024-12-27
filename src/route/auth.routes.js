import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/user.controller.js";

import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../schemas/user.schema.js";

const router = Router();

//peticiones

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);

// proteger las rutas
router.get("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
