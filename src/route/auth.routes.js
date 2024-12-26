import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/user.controller.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

//peticiones

router.post("/register", register);
router.post("/login", login);

// proteger las rutas
router.get("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
