const welcome = "Welcome to";
const company = "Aarya traders";

let cursor = "|";

let blink = setInterval(function() {
  if(cursor === "|")
    cursor = "";
  else
    cursor = "|";
}, 300);

function type(text, attr, index) {
  if(index <= text.length) {
    $(attr).html(text.substring(0, index) + cursor);
    setTimeout(function() {
      type(text, attr, index + 1);
    }, 200);
  }
}

type(welcome, ".welcome", 0);
setTimeout(function() {
  $(".welcome").html(welcome);
  type(company, ".company", 0);
}, 2500);
setTimeout(function() {
  $(".company").html(company);
  $(".tag").css("visibility", "visible").hide().fadeIn("slow");
  clearInterval(blink);
  setInterval(function() {
    $(".company").css("visibility", "hidden");
    setTimeout(function() {
      $(".company").css("visibility", "visible");
    }, 500);
  }, 3000);
}, 6000);
