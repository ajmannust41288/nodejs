//==========================ascynchrounous 
// console.log("start here");
// setTimeout(()=>{
// console.log("logic here ");
// },2000);
// console.log("complete execution here");
//output are
// start here
// complete execution here
// logic here
//=====================================example 2 of ascychrounous
// let a=10;
// let b=0;
// setTimeout(() => {
//     b=20;
// }, 2000);
// console.log(a+b);//10
//====================================Use of Promise
// let a=10;
// let waitingdata=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(30);
//     }, 2000);
// });
// waitingdata.then((data)=>{
//     b=data;
//     console.log(a+b);//print 40 after 2second
// });
//===============================================use of Timeout()
// console.log("starting up");
// setTimeout(()=>{
//     console.log(" 2 seconds here");
// },2000);
// setTimeout(()=>{
// console.log("o seond here");
// },0);
// console.log("Finishing UP");
//output are here
// starting up
// Finishing UP
// o seond here
//  2 seconds here
