import express from "express"
import { Router, Request, Response } from "express"
import {getData, setData} from "../MySQL"
import {Field} from "mysql2"
const app = express.Router()

// mysql.query('SELECT 1 + 1 AS solution', function (error:Error, results:any, fields:Field) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

app.get("/", async (req:Request,res:Response) => {
  const query = await getData("select * from users")
  res.send(query)
})

app.get("/:id", async (req:Request,res:Response) => {
  const query = await getData(`select * from users where userID = ${req.params.id}`)
  res.send(query)
})

app.post("/new", async (req:Request,res:Response) => {
  console.log(req.body.Email);
  const query = await setData(`insert into users(FirstName,LastName,Birthday,Email)values('${req.body.FirstName}','${req.body.LastName}','${req.body.Birthday}','${req.body.Email}')`)
  if(query.errno){
    res.status(400)
    res.send(query)
  }
  res.status(200)
  res.send("User created Successfully")
})

app.put("/:id", async (req:Request,res:Response) => {
  res.send("update method")
})

app.delete("/:id", async (req:Request,res:Response) => {
  res.send("Delete user method")
})

export default app