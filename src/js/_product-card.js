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
