import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, intent, confirm } from "../controllers/order.controller.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;

// new code
// import express from "express";
// import { verifyToken } from "../middleware/jwt.js";
// import { getOrders, createOrder, intent } from "../controllers/order.controller.js";

// const router = express.Router();

// // router.post("/:gigId", verifyToken, createOrder);
// router.get("/", verifyToken, getOrders);
// router.post("/create-payment-intent/:id", verifyToken, intent);

// export default router;









