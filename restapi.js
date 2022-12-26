// // // const fs = require('fs');
// // // const express = require('express');
// // // const app = express();


// // // // app.get('/',(req,res)=>{
// // // //     res.status(200).send('Sucessfully covered');
// // // // })


// // // const x = JSON.parse(fs.readFileSync(`data/tour-simple.json`));
// // // app.get('/api/tour',(req,res)=>{
// // //     res.status(200).json({
// // //         status:'sucess',
// // //         data:{
// // //             tour:x
// // //         }
// // //     });
// // // });
// // // const port = 8000;
// // // app.listen(port, () => {
// // //     console.log('Application is running');
// // // });

// // const fs = require('fs');
// // const express = require('express');
// // const app = express();

// // const x = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));

// // app.get('/api/rock', (req, res) => {
// //     res.status(200).json({
// //         "status": "Sucessfully",
// //         "data": {
// //             tour: x
// //         }
// //     });
// // });
// // const port = 8000;
// // app.listen(port, () => {
// //     console.log('Application is running');
// // });
// //--------------------------GET Method------------------------------------

// // const fs = require('fs');
// // const express = require('express');
// // const app = express();

// // const x = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));
// // app.get('/Api/myData', (req, res) => {
// //     res.status(200).json({

// //         "status": "Sucessfuly",
// //         "result": x.length,
// //         "data": {
// //             tour: x
// //         }
// //     });
// // });
// // const port = 8000;
// // app.listen(port, () => {
// //     console.log("Sucesfully Work On");
// // });


// //------------------------------POST Method------------------------------------------------

// // const fs = require('fs');
// // const express = require('express');
// // const app = express();
// // app.use(express.json());


// // const x = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));

// // app.post('/Api', (req, res) => {
// //   console.log(req.body);
// //   res.send('Done');
// // });
// // const port=8500;
// // app.listen(port,()=>{
// //   console.log(`App running on port ${port}`);
// // });

// //------------------------------------PUSH in JSON FIle as New ID-----------------------------------

// // const fs = require('fs');
// // const express = require('express');
// // const app = express();



// // app.use(express.json());

// // const file1 = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));

// // app.post('/Api', (req, res) => {
// //   const newID = file1[file1.length - 1].id + 1;
// //   const newFile = Object.assign({id:newID},req.body);

// //   file1.push(newFile);
// //   fs.writeFile(`${__dirname}/data/tour-simple.json`,
// //             JSON.stringify(file1),
// //             err=>{
// //               res.status(201).json({
// //                status:"sucess",
// //                 data:{
// //                  file1:newFile
// //                    }
// //                 });
// //               });



// // });
// // const port=8500;
// // app.listen(port,()=>{
// //  console.log(`App running on port ${port}`);
// // });

// // const fs = require('fs');
// // const express = require('express');
// // const path = require('path');
// // const app = express();
// // app.use(express.json);


// // const file1 = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));

// // app.get('/Api/Detail',(req,res)=>{
// //      res.status(200).json({
// //       status:"Sucessfully",
// //       data:{
// //         newFile:file1
// //       }
// //      });

// // });
// // const pathe=7500;
// // app.listen(pathe,()=>{
// //   console.log('Sucess fully atempt');
// // })

// //-------------------------POST MEthod-------------------------------------



// const fs = require('fs');
// const express = require('express');
// const app = express();

// app.use(express.json());


// //----------read json file-------------------

// const file1 = JSON.parse(fs.readFileSync(`${__dirname}/data/tour-simple.json`));

// //---------------now post method created----------------

// app.post('/Api/Detail2', (req, res) => {
//   //------------------------newID,newObjec is created--------------

//   const newID = file1[file1.length - 1].id + 1;
//   const newObj = Object.assign({ id: newID }, req.body);
//   //-----------------now newID and new File is push in file--------------

//   file1.push(newObj);

//   //----------------------wreite in to json file---------------

//   fs.writeFile(`${__dirname}/data/tour-simple.json`, 
//                     JSON.stringify(file1),
//                              err => {
//                               res.status(201).json({
//                                 status:'Sucessfully',
//                                 data:{
//                                   file1:newObj
//                                 }
//                               });

//   });




// });
// const path=7600;
// app.listen(path,()=>{
//   console.log('Happy');
// });































































