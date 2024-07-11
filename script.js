
  const buttons = document.getElementsByClassName("js-collapsible")
  
  for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      let content = this.nextElementSibling.style
      if (content.display === "none") {
        content.display = "block"
      } else {
        content.display = "none"
      }
    })
  }
