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
const model_1 = __importDefault(require("./model"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
class Controller {
}
_a = Controller;
Controller.getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield model_1.default.filter(req.params.slug, req.query.srotField, req.query.category, req.query.country, req.query.year, req.query.page);
        if (!data) {
            res.status(404).json({ status: false, error: 'not found' });
            return;
        }
        res.status(200).json({
            status: true,
            pagination: data.pageProps.data.params.pagination,
            items: data.pageProps.data.items
        });
    }
    catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});
Controller.getCategoryAndCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { path, slug } = req.params;
    const { page } = req.query;
    try {
        const data = yield model_1.default.categoryAndCountries(path, page, slug);
        if (!data) {
            res.status(404).json({ status: false, error: 'not found' });
            return;
        }
        res.status(200).json({
            status: true,
            pagination: data.pageProps.data.params.pagination,
            items: data.pageProps.data.items
        });
    }
    catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});
Controller.getFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield model_1.default.film(req.params.slug);
        if (!data) {
            res.status(404).json({ status: false, error: 'not found' });
            return;
        }
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});
Controller.getSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield model_1.default.search(req.query.q, req.query.page);
        if (!data) {
            res.status(404).json({ status: false, error: 'not found' });
            return;
        }
        res.status(200).json({
            status: true,
            pagination: data.pageProps.data.params.pagination,
            items: data.pageProps.data.items
        });
    }
    catch (error) {
        res.status(500).json({ error, message: 'Internal server' });
        console.log(error);
    }
});
Controller.getImage = (req, res) => {
    try {
        if (!req.query.url) {
            res.status(400).send('URL must not be empty');
            return;
        }
        const url = process.env.IMG_URL +
            'uploads/movies/' +
            encodeURIComponent(req.query.url) +
            '&w=192&q=75';
        axios_1.default
            .get(process.env.API_URL + '_next/image?url=' + url, {
            responseType: 'arraybuffer',
            headers: {
                referer: process.env.API_URL
            }
        })
            .then(({ data }) => {
            res.setHeader('cache-control', 'max-age=99999');
            res.setHeader('content-type', 'image/avif');
            res.send(data);
        })
            .catch((error) => console.log(error));
    }
    catch (error) {
        res.status(500).json({ error, message: 'Internal server' });
        console.log(error);
    }
};
exports.default = Controller;
