const fs = require('fs');
const express = require('express');
const app = express();


const file1 = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));

app.get('/Api/:id',(req,res)=>{
    console.log(req.params);
    const id=req.params.id*1;
    const num=file1.find(elem=>elem.id===id);

    res.status(200).json({
        status:'Sucessfully',
            data:{
              file1
             }

    }
    );
});





const path=8200;
app.listen(path,()=>{
    console.log(`your execution on ${path} port`);
});
