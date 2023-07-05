import express from "express";
import cors from 'cors';

const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use("*",cors({
  origin : true,
  credentials : true
}));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/route' , async(req, res) => {
  res.send()
})