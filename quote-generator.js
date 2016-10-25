document.addEventListener("DOMContentLoaded", function(event) {
  var quote;
  var author;
  function generateQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method:"getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
       quote = response.quoteText;
       author = response.quoteAuthor;
       document.getElementById("quote").innerHTML = quote;
       if (author) {
         document.getElementById("author").innerHTML = "— " + author;
        }
        else {
           document.getElementById("author").innerHTML = "— Unknown";
        }
      }
    });
  }
  generateQuote();
//   var button = document.getElementsByClassName("button");
// button.addEventListener("click", generateQuote());
  document.getElementById('clickMe').onclick = generateQuote;
});
