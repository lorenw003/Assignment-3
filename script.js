// const onClick = function() {
//   console.log(this.id, this.innerHTML);
//   if (this.id == "info") {
//     document.getElementById("details").innerText = "Tanzanite, an Italian-made vintage combo organ with a rare earthy color. VOX Jaguar-like combo organ specifications for bass and tone control and sound. We have customized the Italian power supply AC220V specification to an AC adapter, so you can use it as it is with a Japanese specification 100V power outlet.";
//   } else if (this.id == "condition") {
//     document.getElementById("details").innerText = "Maintenance completed and fully working (all electrolytic capacitors replaced, semi-fixed resistors all replaced, BASS key contact cleaning & position adjustment, 440Hz tuning, volume pot cleaning [no gully due to operation], internal cleaning, etc.) / AC adapter jack (2.1 mm) Newly installed / Replaced power light with LED / Minor scratches and blurring overall (2020.9.28)";
//   } else {
//     document.getElementById("details").innerText = "If a defect other than the condition notation on the product page occurs during normal use within one year after purchase, we will repair it free of charge or irreparable. In that case, we will accept returns. For the first warranty repair within the warranty period, we will bear the shipping fee, but for the second and subsequent repairs within the warranty period, please only pay the shipping fee (shipping & return). For products that have passed one year after purchase, we will repair at the actual cost (labor, parts, shipping). If you let us know about the problem in advance, we will give you a rough estimate of the repair cost. However, please note that there may be cases where repair is not possible.";
//   }
// }

// document.getElementById('info').onclick = onClick;
// document.getElementById('care').onclick = onClick;
// document.getElementById('condition').onclick = onClick;

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

function getNav() {
  let x = document.getElementById("hiddenNav");

  console.log(x)
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

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
