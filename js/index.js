function Read_More() {
    // var dots = document.getElementById("dots");
    var moreText = document.getElementById("read_more");
    var btnText = document.getElementById("more");
  
    if (moreText.style.display === "inline") {
      // dots.style.display = "inline";
      btnText.innerHTML = "Read More &raquo;";
      moreText.style.display = "none";
    } else {
      // dots.style.display = "none";
      btnText.innerHTML = "&laquo; Read Less";
      moreText.style.display = "inline";
    }
  }