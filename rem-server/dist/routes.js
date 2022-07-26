"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
router.get('/list/:slug', controller_1.default.getList);
router.get('/data/:path/:slug', controller_1.default.getCategoryAndCountries);
router.get('/film/:slug', controller_1.default.getFilm);
router.get('/search', controller_1.default.getSearch);
router.get('/image', controller_1.default.getImage);
router.get('*', (_, res) => {
    res.status(404).json({ status: false, error: 'not found' });
});
exports.default = router;
