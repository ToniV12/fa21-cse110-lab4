function printSeconds(){
    let d = new Date();
    let time = d.toLocaleTimeString;
    console.log(time);
}
let interval= setInterval(printSeconds,1000)