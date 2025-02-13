let yesBtn = document.querySelector(".container .buttons #yes-btn");
let noBtn = document.querySelector(".container .buttons #no-btn");

yesBtn.addEventListener("click", () => {
   window.location.href = "yes_page/yes.html";
});

let moveBtn = () => {
   let maxWidth = window.innerWidth - noBtn.offsetWidth;
   let maxHeight = window.innerHeight - noBtn.offsetHeight;
   let randomX = Math.random() * maxWidth;
   let randomY = Math.random() * maxHeight;
   noBtn.style.position = "absolute";
   noBtn.style.left = `${randomX}px`;
   noBtn.style.top = `${randomY}px`;
   noBtn.style.width = "120px";
   noBtn.style.height = "80px";
   noBtn.classList.add("wiggle");

   noBtn.addEventListener(
      "animationend",
      () => {
         console.log("done");
         noBtn.classList.remove("wiggle");
      },
      { once: true }
   );

   const heart = document.createElement("div");
   heart.classList.add("heart");
   heart.style.left = `${noBtn.offsetLeft + noBtn.offsetWidth / 2}px`;
   heart.style.top = `${noBtn.offsetTop + noBtn.offsetHeight / 2}px`;
   document.body.appendChild(heart);
   noBtn.addEventListener(
      "animationend",
      () => {
         heart.remove();
      },
      { once: true }
   );
};
noBtn.addEventListener("mouseover", moveBtn);

noBtn.addEventListener("touchstart", moveBtn);
