// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

  // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Jacob";
  // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://www.alanshawn.com/media/2019/2019-06-10-pyopengl-5.png";
  // 3. Updated the src of main to a photo that's be your first post.
  main.src = "https://static.wixstatic.com/media/c61fe93195d24820abb5c5c273820393.jpg/v1/fill/w_940,h_632,al_c,q_90/Code%20on%20Laptop%20Computer.webp";

});