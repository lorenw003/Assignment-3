// FUNCTION to navigate to previous page based on histroyr and cureent url
function goBack() {
  if (window.history.length = 1) {
    window.location.assign('index.html')
  } else if (window.location.href.includes("productList")) {
    window.location.assign('index.html')
    console.log(window.location.href);
  } else {
    window.history.back()
  }
  console.log(window.history.back())
}



// FUNCTIONS used to retieve modals or hidden features
function getNav() {
  let x = document.getElementById("hiddenNav");

  console.log(x)
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


// gets cart modal
function getCart () {
  var modal = document.getElementById("cartModal");

  var span = document.getElementsByClassName("close")[0];
 
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


// gets mobile filter modal
function getFilter () {
  var modal = document.getElementById("filterModal");

  var span = document.getElementById("close");

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


// get mobile reqest confimration modal
function requestItem () {
  var modal = document.getElementById("requestModal");

  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


// FUNCTION to close a modal
function closeModal() {
  var modal = document.getElementById("requestModal");
  modal.style.display = "none";
}


//NA (2023) How TO - Include HTML [Source code]. https://www.w3schools.com/howto/howto_html_include.asp.
//CODE taken from w3 schools (see above reference) to reference and load html from other pages 
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
  if (window.location.href.includes("checkout")) {
    getCartContent();
  }
}



//FUNCTION to control dropdown and related responsive icons
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

//get cart dropdown
function getCartDrop(icon) {
  let content = document.getElementById("cartContent");
  let x = document.getElementById('cartDropdown');

  console.log(content);

  if (x.style.display === "none" || x.style.display === "") {
    x.innerHTML = document.getElementById("cartContent").innerHTML;
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  icon.classList.toggle("rotate");
}

//reteives cart content to remain conistent
function getCartContent() {
  let content = document.getElementById("cartContent");
  let x = document.getElementById('cartSidebar');

  x.innerHTML = document.getElementById("cartContent").innerHTML;
}



//FUNCTION to change interactive element dependent on page content 
function checkText () {
  let x = document.getElementById("details").innerText

  if (x.includes("Tanzanite")) {
    document.getElementById("info").classList.add("active__secondary");
    let y = document.getElementById("info").classList;
    console.log("y")
    document.getElementById("care").classList.remove("active__secondary");
    document.getElementById("condition").classList.remove("active__secondary");
  } else if (x.includes("Maintenance")) {
    document.getElementById("info").classList.remove("active__secondary");
    document.getElementById("care").classList.remove ("active__secondary");
    document.getElementById("condition").classList.add("active__secondary");
  } else {
    document.getElementById("info").classList.remove("active__secondary");
    document.getElementById("care").classList.add ("active__secondary");
    document.getElementById("condition").classList.remove("active__secondary");
  }
}


// FUNCTION to change arrangment of products on product page according to selected filter
function getProducts() {
  var modal = document.getElementById("filterModal");
  let products = document.getElementsByClassName("products")[1];

  products.classList.toggle("img__1");

  let x = products.classList

  if (x.contains('img__1')) {
    document.getElementById("oneIcon").classList.add("hidden");
    document.getElementById("manyIcon").classList.remove("hidden");
  } else {
    document.getElementById("oneIcon").classList.remove ("hidden");
    document.getElementById("manyIcon").classList.add("hidden");
  }

  modal.style.display = "none";
}


// FUNCTION to add predetermined item to cart
function addToCart() {
  let z = document.getElementById("cartContent");
  let vars = z.getElementsByClassName("product__cart").id;
  let product = document.getElementById("addedProduct");

  if (vars = "undefined") {
    z.appendChild(product);
    product.style.display = "flex";
  } else {
    console.log("added")
  }
}


//FUNCTION to load product to page
function loadProducts() {
  document.getElementById('loadButton1').style.display= "none";
  document.getElementById('loadButton').style.display= "none";
  document.getElementById('animationLoad1').style.display = "flex";
  document.getElementById('animationLoad').style.display = "flex";


  let x = document.getElementById("list1");
  let list1 = x.getElementsByClassName("stack__xl");

  let y = document.getElementById("list2");
  let list2 = y.getElementsByClassName("stack__xl");

  console.log(document.getElementsByClassName("products"));

  setTimeout(function() {
    document.getElementById('animationLoad1').style.display = "none";
    document.getElementById('animationLoad').style.display = "none";

    for (i = 0; i < list1.length; i++) {
      console.log(list1[i].id);
      list1[i].style.display = "flex";
    }

    for (i = 0; i < list2.length; i++) {
      console.log(list2[i].id);
      list2[i].style.display = "flex";
    }
    
  }, 1500);
}


//CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("product__Slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


