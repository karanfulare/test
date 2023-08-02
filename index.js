const express = require("express");


const app = express();
const port = 8000; // env can be used

app.get("/hi",(req,res)=>{
res.send("hi this is test by karan")
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server running on ${port}`);
  }
});
