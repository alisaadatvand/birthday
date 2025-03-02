let startBtn = document.querySelector("#startBtn");
let container = document.querySelector(".container");
let modal = document.querySelector("#modal");
let question = document.querySelector("#question");
let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");
let media = document.querySelector(".media");
let mediaImg = document.querySelector(".media>img");
let postal = document.querySelector(".postal");
let finish = document.querySelector(".finish");
let video = document.querySelector(".video");
let music = document.querySelector(".music");

startBtn.addEventListener("click", function () {
  container.classList.add("none");
  modal.classList.add("active");
  question.innerHTML = "اول بگو ببینم ، حالت خوبه ؟";
  leftBtn.innerHTML = "بله";
  rightBtn.innerHTML = "خیر";
  rightBtn.addEventListener("click", function () {
    question.innerHTML = "عه، یعنی چی ؟ تا حالت خوب نباشه نمیزارم ادامه بدی :]";
    leftBtn.innerHTML = "باشه بابا خوبم";
    rightBtn.innerHTML = "خوب نیستم";
    rightBtn.classList.add("disable");
    leftBtn.addEventListener("click", function () {
      question.innerHTML =
        "خب بسیار عالی ، یه سوال تو می دونی ۲۶ اسفند چه روزیه ؟ :}";
      leftBtn.innerHTML = "تولدمه";
      rightBtn.innerHTML = "شب ۲۷ اسفند";
      rightBtn.classList.remove("disable");
      rightBtn.addEventListener("click", function () {
        question.innerHTML = "نه بابا جدی می فرمایید ؟";
        leftBtn.innerHTML = "والا";
        rightBtn.classList.add("none");
        media.classList.add("active");
        leftBtn.addEventListener("click", function () {
          media.classList.remove("active");
          question.innerHTML = "ولی من میدونم چه روزیه :)";
          leftBtn.innerHTML = "جدی؟ چه روزیه ؟";
          leftBtn.addEventListener("click", function () {
            media.classList.remove("active");

            question.innerHTML = "تولدته :) ، بزن روی دکمه زیر تا ببینی";
            leftBtn.innerHTML = "بریم ببینیم";
            leftBtn.addEventListener("click", function () {
              postal.classList.add("active");
              modal.classList.remove("active");
              setTimeout(() => {
                modal.classList.add("active");
                postal.classList.remove("active");
                media.classList.remove("active");
                question.innerHTML =
                  "باز هم تولدت مبارک :) ، از تبریک یک فرانت کار خوشت اومد ؟";
                leftBtn.innerHTML = "اره خوب بود";
                rightBtn.innerHTML = "نه خوب نبود";
                rightBtn.classList.remove("none");
                rightBtn.addEventListener("click", function () {
                  media.classList.remove("active");
                  question.innerHTML = "عه ، باشه پس خداحافظ برای همیشه";
                  rightBtn.classList.add("none");
                  leftBtn.classList.add("none");
                  setTimeout(() => {
                    modal.classList.remove("active");
                    finish.classList.add("active");
                  }, 6000);
                });
                leftBtn.addEventListener("click", function () {
                    modal.classList.add("active");
                    media.classList.remove("active");
                    postal.classList.remove("active");
                    question.innerHTML =
                      "ممنون از لطفت قابلی نداشت ، راستی یک فیلم هم برات دارم در پایان";
                    rightBtn.classList.add("none");
                    leftBtn.innerHTML = "مشاهده فیلم";
                    leftBtn.addEventListener("click", function () {
                      modal.classList.remove("active");
                      video.classList.add("active");
                      postal.classList.remove("active");
                    });
                  });
              }, 10000);
            });
          });
        });
      });
      leftBtn.addEventListener("click", function () {
        question.innerHTML = "نه بابا جدی می فرمایید ؟";
        leftBtn.innerHTML = "والا";
        rightBtn.classList.add("none");
        media.classList.add("active");
        leftBtn.addEventListener("click", function () {
          media.classList.add("active");
          mediaImg.setAttribute("src", "../images/pou.jpeg");
          question.innerHTML = "پس تولدته :) ، نیاز شد تبریک بگم پس بهت";
          leftBtn.innerHTML = "بریم برای تبریک";
          leftBtn.addEventListener("click", function () {
            media.classList.remove("active");
            postal.classList.add("active");
            modal.classList.remove("active");
            setTimeout(() => {
              modal.classList.add("active");
              media.classList.remove("active");
              postal.classList.remove("active");
              question.innerHTML =
                "باز هم تولدت مبارک :) ، از تبریک یک فرانت کار خوشت اومد ؟";
              leftBtn.innerHTML = "اره خوب بود";
              rightBtn.innerHTML = "نه خوب نبود";
              rightBtn.classList.remove("none");
              rightBtn.addEventListener("click", function () {
                media.classList.add("active");
                mediaImg.setAttribute("src", "../images/jedi.jpg");
                question.innerHTML = "عه ، باشه پس خداحافظ برای همیشه";
                rightBtn.classList.add("none");
                leftBtn.classList.add("none");
                setTimeout(() => {
                  modal.classList.remove("active");
                  finish.classList.add("active");
                }, 6000);
              });
              leftBtn.addEventListener("click", function () {
                modal.classList.add("active");
                media.classList.remove("active");
                postal.classList.remove("active");
                question.innerHTML =
                  "ممنون از لطفت قابلی نداشت ، راستی یک فیلم هم برات دارم در پایان";
                rightBtn.classList.add("none");
                leftBtn.innerHTML = "مشاهده فیلم";
                leftBtn.addEventListener("click", function () {
                  modal.classList.remove("active");
                  video.classList.add("active");
                  postal.classList.remove("active");
                });
              });
            }, 10000);
          });
        });
      });
    });
  });
  leftBtn.addEventListener("click", function () {
    question.innerHTML =
      "خب بسیار عالی ، یه سوال تو می دونی ۲۶ اسفند چه روزیه ؟ :}";
    leftBtn.innerHTML = "تولدمه";
    rightBtn.innerHTML = "شب ۲۷ اسفند";
    rightBtn.classList.remove("disable");
    rightBtn.addEventListener("click", function () {
      question.innerHTML = "نه بابا جدی می فرمایید ؟";
      leftBtn.innerHTML = "والا";
      rightBtn.classList.add("none");
      media.classList.add("active");
      leftBtn.addEventListener("click", function () {
        media.classList.remove("active");
        question.innerHTML = "ولی من میدونم چه روزیه :)";
        leftBtn.innerHTML = "جدی؟ چه روزیه ؟";
        leftBtn.addEventListener("click", function () {
          media.classList.remove("active");
          question.innerHTML = "تولدته :) ، بزن روی دکمه زیر تا ببینی";
          leftBtn.innerHTML = "بریم ببینیم";
          leftBtn.addEventListener("click", function () {
            postal.classList.add("active");
            modal.classList.remove("active");
            setTimeout(() => {
              modal.classList.add("active");
              postal.classList.remove("active");
              media.classList.remove("active");
              question.innerHTML =
                "باز هم تولدت مبارک :) ، از تبریک یک فرانت کار خوشت اومد ؟";
              leftBtn.innerHTML = "اره خوب بود";
              rightBtn.innerHTML = "نه خوب نبود";
              rightBtn.classList.remove("none");
              rightBtn.addEventListener("click", function () {
                media.classList.add("active");
                mediaImg.setAttribute("src", "../images/jedi.jpg");
                question.innerHTML = "عه ، باشه پس خداحافظ برای همیشه";
                rightBtn.classList.add("none");
                leftBtn.classList.add("none");
                setTimeout(() => {
                  modal.classList.remove("active");
                  finish.classList.add("active");
                }, 6000);
              });
              leftBtn.addEventListener("click", function () {
                modal.classList.add("active");
                media.classList.remove("active");
                postal.classList.remove("active");
                question.innerHTML =
                  "ممنون از لطفت قابلی نداشت ، راستی یک فیلم هم برات دارم در پایان";
                rightBtn.classList.add("none");
                leftBtn.innerHTML = "مشاهده فیلم";
                leftBtn.addEventListener("click", function () {
                  modal.classList.remove("active");
                  video.classList.add("active");
                  postal.classList.remove("active");
                });
              });
            }, 10000);
          });
        });
      });
    });
    leftBtn.addEventListener("click", function () {
      question.innerHTML = "نه بابا جدی می فرمایید ؟";
      leftBtn.innerHTML = "والا";
      rightBtn.classList.add("none");
      media.classList.add("active");
      leftBtn.addEventListener("click", function () {
        mediaImg.setAttribute("src", "../images/pou.jpeg");
        question.innerHTML = "پس تولدته :) ، نیاز شد تبریک بگم پس بهت";
        leftBtn.innerHTML = "بریم برای تبریک";
        leftBtn.addEventListener("click", function () {
          media.classList.remove("active");
          postal.classList.add("active");
          modal.classList.remove("active");
          setTimeout(() => {
            modal.classList.add("active");
            postal.classList.remove("active");
            media.classList.remove("active");
            question.innerHTML =
              "باز هم تولدت مبارک :) ، از تبریک یک فرانت کار خوشت اومد ؟";
            leftBtn.innerHTML = "اره خوب بود";
            rightBtn.innerHTML = "نه خوب نبود";
            rightBtn.classList.remove("none");
            rightBtn.addEventListener("click", function () {
              media.classList.add("active");
              mediaImg.setAttribute("src", "../images/jedi.jpg");
              question.innerHTML = "عه ، باشه پس خداحافظ برای همیشه";
              rightBtn.classList.add("none");
              leftBtn.classList.add("none");
              setTimeout(() => {
                modal.classList.remove("active");
                finish.classList.add("active");
              }, 6000);
            });
            leftBtn.addEventListener("click", function () {
              modal.classList.add("active");
              media.classList.remove("active");
              postal.classList.remove("active");
              question.innerHTML =
                "ممنون از لطفت قابلی نداشت ، راستی یک فیلم هم برات دارم در پایان";
              rightBtn.classList.add("none");
              leftBtn.innerHTML = "مشاهده فیلم";
              leftBtn.addEventListener("click", function () {
                modal.classList.remove("active");
                video.classList.add("active");
                postal.classList.remove("active");
              });
            });
          }, 10000);
        });
      });
    });
  });
});
