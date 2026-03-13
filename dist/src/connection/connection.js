"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
const company_1 = require("../models/company");
const tag_1 = require("../models/tag");
const companyTag_1 = require("../models/companyTag");
const associations_1 = require("../models/associations");
//import * as dotenv from 'dotenv';
const { loadEnvFile } = require('node:process');
loadEnvFile('.env');
const userID = (_a = process.env.USERNAME_SQL) !== null && _a !== void 0 ? _a : "unknown";
const userPassword = (_b = process.env.PASSWORD_SQL) !== null && _b !== void 0 ? _b : "unknown";
console.log(`username: ${userID}, password: ${userPassword}`);
const connection = new sequelize_typescript_1.Sequelize({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: userID,
    password: userPassword,
    storage: ':memory:',
    models: [
        product_1.Product,
        company_1.Company,
        tag_1.Tag,
        companyTag_1.CompanyTag
    ],
    define: {
        timestamps: false
    }
});
(0, associations_1.relationAssociation)();
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.sync();
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.default = connectionDB;
//# sourceMappingURL=connection.js.map