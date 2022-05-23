const { json } = require("express");
const express = require("express");
const fs = require("fs");
const { stringify } = require("querystring");
const app = express();
app.use(express.json());
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);


app.get("/api/v1/tours", (req,res) =>{
    res.status(200).send("hey there from the server");
})


//parameters lec:///////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////
//////////////////////
//////////////
//////////
//////
///
//

app.get("/api/v1/tours/:id", (req,res) =>{

    console.log(req.params);


    const id = req.params.id *1;

    const tour = tours.find((el) =>{
        el.id === id;
    })


if (id > tours.length){
    res.status(404).json({
        status:"failuer",
        message:"ivalid id"
    })
}



    res.status(200).json({
        status :"success",
        data:{
            tour
        }
    })
})


////////////////////////////////////
//////////////////////////////////
//////////////////////////
/////////////////////
/////////////////
//////////
//////
//









//hadnling patch req:///////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////
//////////////////////
//////////////
//////////
//////
///
//
app.patch('/api/v1/tours/:id', (req, res) => {
    console.log(req.params.id);
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }
  
    res.status(200).json({
      status: 'success',
      data:"will update here"
    });
  });
////////////////////////////////////
//////////////////////////////////
//////////////////////////
/////////////////////
/////////////////
//////////
//////
//







//hadnling patch req:///////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////
//////////////////////
//////////////
//////////
//////
///
//
app.delete('/api/v1/tours/:id', (req, res) => {
    console.log(req.params.id);
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }
  
    res.status(204).json({
      status: 'success',
      data: null
    });
  });
////////////////////////////////////
//////////////////////////////////
//////////////////////////
/////////////////////
/////////////////
//////////
//////
//

app.post("/api/v1/tours",(req,res)=>{
    // console.log(req.body);

    const newid = tours[tours.length - 1]+1;
    const newtour = Object.assign({id : newid}, req.body);


    tours.push(newtour);



    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err => {

        res.status(201).json({

            status : "success",
            tours : tours.length,
            data :{
               data : newtour 
            } 

        });
       
    });
    
});





const port = 30000;
app.listen(port, () => {
    console.log('app running on port ${port}');
})