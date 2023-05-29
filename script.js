function getCart () {
  var modal = document.getElementById("cartModal");

  var btn = document.getElementById("cartBtn");

  var span = document.getElementsByClassName("close")[0];

  document.getElementById("cartBtn").onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */

      console.log("done")
      return;
    }
  }
}


function getDropdown(icon, i) {
  let x = document.getElementsByClassName("dropdown-content")[i];

  console.log(x);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  
  icon.classList.toggle("rotate");
}



// $(function () {
//     var includes = $('[data-include]')
//     $.each(includes, function () {
//       var file = $(this).data('include') + '.html'
//       $(this).load(file)
//       console.log($(this).data('include') + '.html')
//     })
// })


// let myArr = [
//   {
//     name: "Saxaphone",
//     cost: 88000,
//     image: "1601288220_file2.jpg"
//    },
//    {
//     name: "Saxaphone",
//     cost: 88000,
//     image: "1601288220_file2.jpg"
//    }
// ]

// function loadElements(array) {
//   for (let i in array) {
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = "<h5>" + array.name + "</h5><h8>¥" + array.cost + "</h8>";
//     console.log(newDiv.innerHTML);
//   }
// }

// function setUp() {
// loadElements(myArr);
// }
