import { Router } from "express";
import {
  getClients,
  getClientById,
  createClient,
  updateClientById,
  deleteClientById,
} from "../controllers/client.controller.js";

import { authRequired } from "../middlewares/validateToken.js";
// import { validateSchema } from "../middlewares/validatorMiddleware.js";
// import { registerSchema, loginSchema } from "../schemas/user.schema.js";

const router = Router();

// proteger las rutas
router.get("/clients", authRequired, getClients);
router.get("/clients/:id", authRequired, getClientById);
router.post("/clients", authRequired, createClient);
router.put("/clients/:id", authRequired, updateClientById);
router.delete("/clients/:id", authRequired, deleteClientById);

export default router;
