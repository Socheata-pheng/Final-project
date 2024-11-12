function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    if (hours > 1 && hours <12){
        document.getElementById('breakfast').style.display = 'block';
    }
    else if (hours >12 && hours < 19){
        document.getElementById('lunch').style.display = 'block';
    }
    else if (hours > 19 && hours <24){
        document.getElementById('dinner').style.display = 'block';
    }
}
console.log(updateTime());
