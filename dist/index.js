"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration
dotenv_1.default.config();
//Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//Define the first Route of APP
app.get('/', (req, res) => {
    res.send('Welcome to my API Restful: Express-TS-Swagger-Mongoose=Nodemon');
});
//Define the first Route of APP
app.get('/hello', (req, res) => {
    res.send('Welcome to GET Route : Hello!');
});
//Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map