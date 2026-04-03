import "./styles.css";

import odinImage from "./odin.png";
const image = document.createElement("img");
image.src = odinImage;
document.body.appendChild(image);

import { greeting } from "./greeting.js";

console.log(greeting);