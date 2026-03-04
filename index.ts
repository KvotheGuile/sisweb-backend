
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';
import apiRouter from './src/routes'; 

const app: Express = express();
const port: number = 3000

app.use(morgan('dev'))
app.use(express.json());  
app.use(apiRouter); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}\n http://localhost:${port}`)  
})



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