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
      return;
    }
  }
}

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// document.getElementById("myBtn").onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




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
