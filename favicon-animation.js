let myEmojis = ["❤️", "💖", "💕", "💗", "💓", "💞", "💘", "💝", "💟", "❣️"];

let changeFavicon = () => {
   let emoji = myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
   let canvas = document.createElement("canvas");
   canvas.width = 64;
   canvas.height = 64;
   let ctx = canvas.getContext("2d");
   ctx.font = "50px sans-serif";
   ctx.fillText(emoji, 5, 50);

   let favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
   favicon.rel = "icon";
   favicon.href = canvas.toDataURL();

   document.head.appendChild(favicon);

   setTimeout(changeFavicon, 150); // Đổi favicon mỗi 500ms
};

changeFavicon();
