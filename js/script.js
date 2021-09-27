// настроика gulp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

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

// slider
(function () {
  class vanillaZoom {
    constructor(element) {
      this.container = element;
      this.firstSmallImage =
      this.container.querySelector(".slider__min-item").firstElementChild;
      this.zoomedImage = this.container.querySelector(".slider__max-img");
      this.init();
      this.changePhoto();
      this.mouseEnter();
      this.mouseMove();
      this.mouseLeave();
    }

    init() {
      if (!this.container) {
        console.error("Нет элемента container");
      }
      if (!this.zoomedImage) {
        console.error("Нет элемента zoomedImage");
      }
      if (!this.firstSmallImage) {
        console.error("Нет элемента firstSmallImage");
      } else {
        this.zoomedImage.style.backgroundImage =
          "url(" + this.firstSmallImage.lastElementChild.src + ")";
      }
    }

    changePhoto() {
      this.container.addEventListener("click", (e) => {
        const elem = e.target;
        if (elem.classList.contains("slider__min-img")) {
          this.zoomedImage.style.backgroundImage = "url(" + elem.src + ")";
        }
        //  добавление удаление класса active-sl
        var fri_active_sl = $(".active-sl");
        fri_active_sl[0].className = fri_active_sl[0].className.replace(
          " active-sl",
          ""
        );
        elem.parentElement.parentElement.className += " active-sl";
      });
    }

    mouseEnter() {
      this.zoomedImage.addEventListener("mouseenter", () => {
        this.zoomedImage.style.backgroundSize = "250%";
      });
    }

    mouseMove() {
      this.zoomedImage.addEventListener("mousemove", (e) => {
        let dimension = this.zoomedImage.getBoundingClientRect(),
          x = e.clientX - dimension.left,
          y = e.clientY - dimension.top,
          xPercent = Math.round(100 / (dimension.width / x)),
          yPercent = Math.round(100 / (dimension.height / y));
        this.zoomedImage.style.backgroundPosition =
          xPercent + "%" + yPercent + "%";
      });
    }

    mouseLeave() {
      this.zoomedImage.addEventListener("mouseleave", () => {
        this.zoomedImage.style.backgroundSize = "contain";
        this.zoomedImage.style.backgroundPosition = "center";
      });
    }
  }

  let zoom = document.querySelectorAll(".slider");

  zoom.forEach((item) => {
    new vanillaZoom(item);
  });
})();

// реитинг
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  // бегаем по всем реитингам на странице
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  // инициализация конкретныи реитинг
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }

  // инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }

  // изменяем ширину активных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // возможность указывать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener("mouseenter", function (e) {
        // обновление переменных
        initRatingVars(rating);
        // обновление активных звезд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        // обновление активных звезд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        // обновление переменных
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // отправка на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          // отобразить указанную оценку
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }

  async function setRatingValue(value, rating) {
    if (!rating.classList.contains("rating_sending")) {
      rating.classList.add("rating_sending");

      let response = await fetch("rating.json", { method: "GET" });
      if (response.ok) {
        const result = await response.json();

        const newRating = result.newRating;

        ratingValue.innerHTML = newRating;

        setRatingActiveWidth();

        rating.removeClass("rating_sending");
      } else {
        alert("Ошибка");

        rating.removeClass("rating_sending");
      }
    }
  }
}

