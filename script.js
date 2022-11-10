function clock(){
    const dateTime = new Date();
    const heures = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const secondes = dateTime.getSeconds();

    document.getElementById('heures').innerHTML = heures;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('secondes').innerHTML = secondes;
}
    setInterval(clock, 10)
