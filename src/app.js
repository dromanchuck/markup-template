/* src/app */

// Styles
import "./assets/styles/_app.scss";

// Slider
import "slick-carousel";
import "mmenu-js";
import "hamburgers";

$(document).ready(() => {
  require("./assets/scripts/main");
  require("./assets/scripts/menu");
  require("./assets/scripts/parallax");
});
