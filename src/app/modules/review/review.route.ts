import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { reviewValidation } from './review.validation';
import { reviewControllers } from './review.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(reviewValidation.reviewValidationSchema),
  reviewControllers.createReview,
);
router.get('/', reviewControllers.getAllReview);

export const reviewRoutes = router;
