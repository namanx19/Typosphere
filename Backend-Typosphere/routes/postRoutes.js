import express from "express";
const router = express.Router();
import {
  createPost,
  updatePost,
  getPost,
  getAllPosts,
  deletePost,
} from "../controllers/postControllers.js";
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

router.post("/", authGuard, adminGuard, createPost).getAllPosts();
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

export default router;
