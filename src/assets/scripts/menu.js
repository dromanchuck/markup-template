(() => {
  $("#my-menu").mmenu({
    extensions: [
      "theme-black",
      "effect-menu-slide",
      "pagedim-black",
      "position-right"
    ],
    navbar: {
      title: '<img src="./assets/images/logo.png">'
    }
  });

  const api = $("#my-menu").data("mmenu");

  api.bind("open:finish", () => {
    $(".hamburger").addClass("is-active");
  });

  api.bind("close:before", () => {
    $(".hamburger").removeClass("is-active");
  });
})();
