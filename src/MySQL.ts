import { Field } from "mysql2"
const mysql = require('mysql2')
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_db'
})

connection.connect()

// connection.end()

export async function getData(query:string){
  try {
    let data = await connection.promise().query(query)
    .then( ([rows,fields]:any) => { return rows })
    return data
  }catch(error:any){
    return error
  }
}

export async function setData(query:string) {
  try {
    let data = await connection.promise().execute(query)
    .then( ([rows,fields]:any) => { return rows })
    return data
  }catch(error:any){
    return error
  }
}
