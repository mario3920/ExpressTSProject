import express from "express"
import { Router, Request, Response } from "express"
import mysql from "../MySQL"
import {Field} from "mysql2"
const app = express.Router()

// mysql.query('SELECT 1 + 1 AS solution', function (error:Error, results:any, fields:Field) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


app.get("/", (req:Request,res:Response) => {
  res.send("Get all users");
})

app.get("/:id", (req:Request,res:Response) => {
  res.send(`User ID passed id ${req.params.id}`)
})

app.post("/new", (req:Request,res:Response) => {
  console.log(req.body);
  res.send("ok")
})

app.put("/:id", (req:Request,res:Response) => {
  res.send("update method")
})

app.delete("/:id", (req:Request,res:Response) => {
  res.send("Delete user method")
})

export default app