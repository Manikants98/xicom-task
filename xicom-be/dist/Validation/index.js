"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCandidateValidationRules = void 0;
var express_validator_1 = require("express-validator");
var addCandidateValidationRules = function () { return [
    (0, express_validator_1.body)('first_name').trim().isString().isLength({ min: 2, max: 50 }).notEmpty(),
    (0, express_validator_1.body)('last_name').trim().isString().isLength({ min: 2, max: 50 }).notEmpty(),
    (0, express_validator_1.body)('email').trim().isEmail().normalizeEmail().notEmpty(),
    (0, express_validator_1.body)('dob').isISO8601().toDate().notEmpty(),
    (0, express_validator_1.body)('residential_address_one').trim().isString().notEmpty(),
    (0, express_validator_1.body)('residential_address_two').trim().isString().notEmpty(),
    (0, express_validator_1.body)('permanent_address_one').trim().isString(),
    (0, express_validator_1.body)('permanent_address_two').trim().isString(),
]; };
exports.addCandidateValidationRules = addCandidateValidationRules;
