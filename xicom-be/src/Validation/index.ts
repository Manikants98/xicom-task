import { body } from 'express-validator';

export const addCandidateValidationRules = () => [
  body('first_name').trim().isString().isLength({ min: 2, max: 50 }).notEmpty(),
  body('last_name').trim().isString().isLength({ min: 2, max: 50 }).notEmpty(),
  body('email').trim().isEmail().normalizeEmail().notEmpty(),
  body('dob').isISO8601().toDate().notEmpty(),
  body('residential_address_one').trim().isString().notEmpty(),
  body('residential_address_two').trim().isString().notEmpty(),
  body('permanent_address_one').trim().isString(),
  body('permanent_address_two').trim().isString(),
];