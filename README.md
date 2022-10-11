<h1 align="center">
    <br>
    WhatsApp-last-seen <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/>
    <br>
   
</h1>

When was it last seen and how long it was online.
### Copy the javascript code and paste in the browser console after opening an inbox in whatsapp web.

### Code:
```js
let b = setInterval(() => {
    let hora = new Date;
    let a = document.getElementsByClassName("_2YPr_ i0jNr selectable-text copyable-text");
    if (a.length == 0) {
        console.log("off");
    } else if (a[0].title == "online") {
        console.log(`online ${hora.getHours()}:${hora.getMinutes()}`);
    }else{
        console.log("undefined");
    }
}, 3000)
b;
```

❗🔺 Considerations
 - The code is intended for parents to monitor their children when they are online (especially during the night).
 - Just copy and paste into the console, after opening the chat, and leave it running. To do this, you must keep the computer turned on and the  whatsapp web open.

![image](https://user-images.githubusercontent.com/42620040/147936235-c90a22eb-c24b-4e4a-810c-6a55c914f2b7.png)


