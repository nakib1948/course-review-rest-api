import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidation } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(courseValidation.courseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/',CourseControllers.getAllCourse)

export const courseRoutes = router;
