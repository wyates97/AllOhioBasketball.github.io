// Hamburger menu appear and disappear
$(function() {
    $(".toggle").on("click", function() {
        if($(".link").hasClass("active")) {
             $(".link").removeClass("active");
        } else {
            $(".link").addClass("active");
        }
    })
})


// Events & Alumni page button selection
const about = document.querySelector(".events");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});