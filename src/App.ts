import express from "express"
import { Router, Request, Response } from "express"
const app = express();
const port = 3000;
import userRoute from "./routes/User"


app.use(express.json())

app.get("/", (req: Request, res:Response) => {
  res.send();
});

app.use("/user",userRoute)


app.listen(port, () => {
  console.log("listening 3000 port");
});

module.exports = app