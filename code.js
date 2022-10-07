let b = setInterval(() => {
    let hora = new Date;
    let a = document.getElementsByClassName("_2YPr_ i0jNr selectable-text copyable-text");
    if (a.length == 0) {
        console.log("off");
    } else if (a[0].title == "online") {
        console.log(`online ${hora.getHours()}:${hora.getMinutes()}`);
    }
}, 3000)
b;
