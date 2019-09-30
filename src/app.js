/* src/app */

// Styles
import "./assets/styles/_app.scss";

//Menu
import "mmenu-js";
import "hamburgers";
import "jquery";
import "jquery.stellar/jquery.stellar";
import "scrollax";

$(document).ready(() => {
  require("./assets/scripts/main");
  require("./assets/scripts/menu");
  require("./assets/scripts/parallax");
});
