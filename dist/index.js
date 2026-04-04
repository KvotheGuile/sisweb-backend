"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const connection_1 = __importDefault(require("./src/connection/connection"));
const routes_1 = __importDefault(require("./src/routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({ origin: true }));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
(0, connection_1.default)();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}\n http://localhost:${port}`);
});
/*
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app. Hosted at: http://localhost:${port}`)
})
//*/
/*
//const express = require('express')
import express, {Express, Request, Response} from 'express';

const app:Express = express();
const port = 3000;
   app.get('/', (req:Request, res:Response) => {
   res.send('Hello Typescript!')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}\n http://localhost:${port}`)
})
//*/
/*
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';

const app: Express = express();
const port: number = 3000

app.use(morgan('dev'))

app.get('/', (rreq:Request, res:Response) => {
    res.send('Up and running !')
})
app.get('/products', (req:Request, res:Response) => {
    res.send('Hello Productos!')
})
app.get('/products/:id', (req:Request, res:Response) => {
    res.send(req.params.id)
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}\n http://localhost:${port}`)
})

//*/ 
//# sourceMappingURL=index.js.map