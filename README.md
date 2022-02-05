# WhatsApp-last-seen
When was it last seen and how long it was online.
### Copy the javascript code and paste in the browser console after opening an inbox in whatsapp web.

### Code:
```js
let b = setInterval(() => {
    let hora = new Date;
    let a = document.getElementsByClassName("_2YPr_ i0jNr selectable-text copyable-text");
    if (a.length) {
        console.log(`ONLINE hora: ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`);
    } else
        console.log(`off ${hora.getHours()}:${hora.getMinutes()}`);
}, 3000)
```

❗🔺 Considerations
 - The code is intended for parents to monitor their children when they are online (especially during the night).
 - Just copy and paste into the console, after opening the chat, and leave it running. To do this, you must keep the computer turned on and the  whatsapp web open.

![image](https://user-images.githubusercontent.com/42620040/147936235-c90a22eb-c24b-4e4a-810c-6a55c914f2b7.png)


