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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
const instance = axios_1.default.create({
    baseURL: process.env.API_URL_DATA
});
const instance1 = axios_1.default.create({
    baseURL: process.env.API_URL1
});
class Model {
}
_a = Model;
Model.categoryAndCountries = (path, page = 1, slug) => __awaiter(void 0, void 0, void 0, function* () {
    return instance
        .get(`${path}/${slug}.json?page=${page}&slug=${slug}`)
        .then(({ data }) => data)
        .catch(() => null);
});
Model.film = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    return instance1
        .get(`phim/${slug}`)
        .then(({ data }) => data)
        .catch(() => null);
});
Model.search = (q, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    return instance
        .get(`tim-kiem.json?keyword=${q}&page=${page}`)
        .then(({ data }) => data)
        .catch(() => null);
});
Model.filter = (slug, sortField = '', category = '', country = '', year = '', page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    return instance
        .get(`danh-sach/${slug}.json?page=${page}&slug=${slug}&country=${country}&sort_field=${sortField}&category=${category}&year=${year}`)
        .then(({ data }) => data)
        .catch(() => null);
});
exports.default = Model;
