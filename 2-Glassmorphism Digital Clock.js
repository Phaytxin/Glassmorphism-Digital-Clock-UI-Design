function currentTime(){

    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const ampm = document.getElementById('ampm');

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var am = 'AM';

    //convert 24 hour time to 12 hour format to AM PM 
    if (h > 12){
        h = h - 12;
        var am = 'PM';
    }

    //add 0 to the begining of number if less than 10
    h = ( h < 10) ? '0' + h : h;
    m = ( m < 10) ? '0' + m : m;
    s = ( s < 10) ? '0' + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;

    var t = setTimeout(function(){ currentTime() }, 1000);

}

currentTime();