function clock(){
    var date_time= new Date();
    var hours=date_time.getHours();
    var minutes=date_time.getMinutes();
    var seconds=date_time.getSeconds();
    var am_or_pm=document.getElementById("am-or-pm");
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;  
    if(hours>=12){
        am_or_pm.innerHTML="PM";
    }
else{
        am_or_pm.innerHTML="AM";
    }
    }
    setInterval(clock,1000);