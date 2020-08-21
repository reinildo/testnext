// import axios from 'axios'

// module.exports = async (req, res) => {
//   const users = await axios.get('https://gorest.co.in/public-api/users?_format=json&access-token=NGgQKV2xEQyjpClxjcvSgFIULeGEGzUApcW-')
//   res.send({ message: users.data.result })
// }


import { grades, connectDb } from './db.js'

export default async (req, res) => {
  await connectDb(); // get existing connection or wait for db to create new connection

  const data = await grades.find({})
  const n = await grades.create({
    name: "reinildo reis reis",
    subject: "Portugues",
    type: "Prova Final",
    value: 10
  })




  console.log(n)
  //continue with the rest of your codes.
  res.status(200).send(data)
}