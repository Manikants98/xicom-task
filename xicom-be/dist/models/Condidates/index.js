"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidates = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var candidateSchema = new Schema({
    first_name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
    last_name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: 'Invalid email address'
        }
    },
    dob: { type: Date, required: true },
    residential_address_one: { type: String, required: true },
    residential_address_two: { type: String, required: true },
    permanent_address_one: { type: String },
    permanent_address_two: { type: String },
    documents: { type: Array, default: [] }
});
exports.Candidates = mongoose_1.default.models.users || mongoose_1.default.model('users', candidateSchema);
