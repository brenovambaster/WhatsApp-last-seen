let b = setInterval(() => {
    let hora = new Date;
    let a = document.getElementsByClassName("_2YPr_ i0jNr selectable-text copyable-text");
    if (a.length) {
        console.log(`ONLINE hora: ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`);
    } else
        console.log("off");
}, 3000)
