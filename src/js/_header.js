$(document).ready(() => {
  // переменные
  let fri_btn = $(".btn");
  let fri_menu = $(".menu");
  let fri_active_2 = $(".active-2");
  let fri_fixed_menu = $(".fixed-menu");
  let fri_catalog_btn = $(".catalog-btn");
  let fri_catalog_modal = $(".catalog__modal");
  let fri_menu__link_btn = $(".menu__link-btn");
  let fri_catalog__modal_inner = $(".catalog__modal-inner");
  let fri_transparent_background = $(".transparent-background");
  // кнопка бургерменю
  fri_menu__link_btn[0].onclick = () => {
    fri_menu[0].attributes[0].value == "menu"
      ? fri_menu.addClass("dis-fl")
      : fri_menu.removeClass("dis-fl");
  };
  // кнопка фиксированное бургерменю
  fri_menu__link_btn[1].onclick = () => {
    fri_menu[0].attributes[0].value == "menu fix"
      ? fri_menu.addClass("dis-fl")
      : fri_menu.removeClass("dis-fl");
  };
  // кнопка "каталог"
  fri_catalog_btn[0].onclick = () => {
    if (
      fri_catalog_btn[0].attributes[0].value == "catalog-btn index-min" ||
      fri_catalog_btn[0].attributes[0].value == "catalog-btn"
    ) {
      fri_catalog_modal.addClass("dis-fl");
      fri_transparent_background.addClass("dis-fl");
      fri_catalog_btn.removeClass("index-min");
      fri_catalog_btn.addClass("index-max");
      fri_catalog_btn.addClass("active");
      fri_catalog_btn[0].style.top = "0px";
      fri_catalog_btn[0].style.position = "relative";
      fri_catalog__modal_inner[0].style.position = "absolute";
      if (965 <= $(window).width()) {
        fri_catalog__modal_inner[0].style.top = "162px";
      } else if (753 <= $(window).width() && $(window).width() < 965) {
        fri_catalog__modal_inner[0].style.top = "208px";
      } else if (305 <= $(window).width() && $(window).width() < 753) {
        fri_catalog__modal_inner[0].style.top = "298px";
      }
    } else {
      fri_catalog_modal.removeClass("dis-fl");
      fri_transparent_background.removeClass("dis-fl");
      fri_catalog_btn.removeClass("index-max");
      fri_catalog_btn.addClass("index-min");
      fri_catalog_btn.removeClass("active");
      fri_catalog_btn[0].style.top = "0px";
      fri_catalog_btn[0].style.position = "relative";
    }
  };
  // кнопка "каталог" в бургерменю
  fri_btn[0].onclick = () => {
    fri_menu.removeClass("dis-fl");
    fri_catalog_modal.addClass("dis-fl");
    fri_transparent_background.addClass("dis-fl");
    fri_catalog_btn.removeClass("index-min");
    fri_catalog_btn.addClass("index-max");
    fri_catalog_btn.addClass("active");
    if (753 <= $(window).width() && $(window).width() < 965) {
      fri_catalog__modal_inner[0].style.top = "85px";
      fri_catalog__modal_inner[0].style.position = "fixed";
      fri_catalog_btn[0].style.top = "39px";
      fri_catalog_btn[0].style.position = "fixed";
    }
  };
  // кнопка "каталог" в фиксированном бургерменю
  fri_btn[1].onclick = () => {
    fri_menu.removeClass("dis-fl");
    fri_catalog_modal.addClass("dis-fl");
    fri_transparent_background.addClass("dis-fl");
    fri_catalog_btn.removeClass("index-min");
    fri_catalog_btn.addClass("index-max");
    fri_catalog_btn.addClass("active");
    if (965 <= $(window).width()) {
      fri_catalog__modal_inner[0].style.top = "39px";
      fri_catalog__modal_inner[0].style.position = "fixed";
      fri_catalog_btn[0].style.top = "39px";
      if (
        fri_catalog_btn[0].attributes[0].value == "catalog-btn index-max active"
      ) {
        fri_catalog_btn[0].style.position = "fixed";
      }
    }
  };

  // скрол
  if (754 < $(window).width()) {
    $(window).scroll(() => {
      if ($(this).scrollTop() > 210) {
        fri_fixed_menu.removeClass("default").addClass("fixed");
        if ($(window).width() < 965) {
          fri_menu.addClass("fix");
        } else {
          fri_menu.removeClass("fix");
        }
        fri_active_2.removeClass("active-2").addClass("otstyp");
        if (965 <= $(window).width()) {
          fri_catalog__modal_inner[0].style.top = "39px";
          fri_catalog__modal_inner[0].style.position = "fixed";
          fri_catalog_btn[0].style.top = "39px";
          if (
            fri_catalog_btn[0].attributes[0].value ==
            "catalog-btn index-max active"
          ) {
            fri_catalog_btn[0].style.position = "fixed";
          }
        } else if (753 <= $(window).width() && $(window).width() < 965) {
          fri_catalog__modal_inner[0].style.top = "85px";
          fri_catalog__modal_inner[0].style.position = "fixed";
          if (
            fri_catalog_btn[0].attributes[0].value ==
            "catalog-btn index-max active"
          ) {
            fri_catalog_btn[0].style.top = "39px";
            fri_catalog_btn[0].style.position = "fixed";
          }
        } else if ($(window).width() < 753) {
          fri_catalog__modal_inner[0].style.top = "39px";
          fri_catalog__modal_inner[0].style.position = "fixed";
          if (
            fri_catalog_btn[0].attributes[0].value ==
            "catalog-btn index-max active"
          ) {
            fri_catalog_btn[0].style.top = "39px";
            fri_catalog_btn[0].style.position = "fixed";
          }
        }
      } else if ($(this).scrollTop() <= 210) {
        fri_fixed_menu.removeClass("fixed").addClass("default");
        fri_menu.removeClass("fix");
        fri_menu.removeClass("dis-fl");
        if (965 <= $(window).width() || $(window).width() < 753) {
          fri_catalog__modal_inner[0].style.top = "162px";
          fri_catalog__modal_inner[0].style.position = "absolute";
          fri_catalog_btn[0].style.top = "0px";
          fri_catalog_btn[0].style.position = "relative";
        } else if (753 <= $(window).width() && $(window).width() < 965) {
          fri_catalog__modal_inner[0].style.top = "208px";
          fri_catalog__modal_inner[0].style.position = "absolute";
          fri_catalog_btn[0].style.top = "0px";
          fri_catalog_btn[0].style.position = "relative";
        }
      }
    });
  } else {
    $(window).scroll(() => {
      if ($(this).scrollTop() > 405) {
        fri_menu.addClass("fix");
        fri_fixed_menu.removeClass("default").addClass("fixed");
        fri_active_2.removeClass("active-2").addClass("otstyp");
      } else if ($(this).scrollTop() <= 405) {
        fri_fixed_menu.removeClass("fixed").addClass("default");
        fri_menu.removeClass("fix");
        fri_menu.removeClass("dis-fl");
        if ($(window).width() < 465) {
          fri_catalog__modal_inner[0].style.top = "298px";
        }
      }
    });
  }
});
