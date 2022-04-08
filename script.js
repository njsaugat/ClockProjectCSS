
setInterval(() => {
    
    const date=new Date();
    //getting all the requirements
    const currHour=date.getHours();
    const currMinute=date.getMinutes();
    const currSecond=date.getSeconds();
    
    // did some math so that the time could be calculted
    const hrotation=30*currHour+0.5*currMinute;
    const mrotation=6*currMinute;
    const srotation=6*currSecond;

    // selected particular elements
    const hour=document.querySelector('.hour');
    const minute=document.querySelector('.minute');
    const second=document.querySelector('.second');

    //this is css, itself controlled with js
    // i learned about transform property which can rotate 
    // an element by cettain degree
    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`

}, 1000);
