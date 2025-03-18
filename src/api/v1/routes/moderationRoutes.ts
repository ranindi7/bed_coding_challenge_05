import { Router } from "express";
import {
  moderatePost,
  flagUser,
  getPostById,
  getUserProfile,
  getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

/**
 * @route GET /post/:id
 * @openapi
 * /api/v1/moderation/post/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     tags:
 *       - Public
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of post to retrieve
 *   responses:
 *     200:
 *       description: Successfully retrieved a post by ID
 *     400:
 *       description: Failure to retrieve a post by ID
 */
router.get("/post/:id", getPostById);

/**
 * @route GET /post/:id/moderate
 * @openapi
 * /api/v1/moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate a post by ID
 *     tags:
 *       - Internal Use Only
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of post to moderate
 *   responses:
 *     200:
 *       description: Successfully mdoerated a post by ID
 *     400:
 *       description: Failure to moderate a post by ID
 */
router.post("/post/:id/moderate", moderatePost);

/**
 * @route GET /user/:id/profile
 * @openapi
 * /api/v1/moderation/user/:id/profile:
 *   get:
 *     summary: Retrieve user profile by ID
 *     tags:
 *       - Public
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of user profile to retrieve
 *   responses:
 *     200:
 *       description: Successfully retrieved user {id} profile
 *     400:
 *       description: Failure to retrieve user {id} profile
 */
router.get("/user/:id/profile", getUserProfile);

/**
 * @route POST /user/:id/flag
 * @openapi
 * /api/v1/moderation//user/:id/flag:
 *   post:
 *     summary: Flag a user by ID
 *     tags:
 *       - Internal Use Only
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of user to flag
 *   responses:
 *     200:
 *       description: Successfully flagged user {id}
 *     400:
 *       description: Failure to flag user {id}
 */
router.post("/user/:id/flag", flagUser);

/**
 * @route GET /content/flags/stats
 * @openapi
 * /api/v1/moderation/content/flags/stats:
 *   get:
 *     summary: Retrieve statistics on flagged content
 *     tags:
 *       - Internal Use Only
 *   responses:
 *     200:
 *       description: Successfully retrieved flagged content
 *       content:
 *         application/json:
 *           example:
 *             status: success
 *             message: "Flagged content statistics"
 *     400:
 *       description: Failure to flag content stats
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;
