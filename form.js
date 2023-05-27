let personal = [];
let shipping = [];

// let details = window.location.search.split('&')
// console.log(window.location.search);
// vars = window.location.search.split("!");
// personalDetails.push(vars[0]);
// shippingDetails.push(vars[1]);
// console.log("-------- personal: "+vars[0]);


let vars = window.location.search.replace(/%40/g, '@').replace('?', '').replaceAll('+', ' ').replaceAll('%2B', '+').split('&')
personal.push(vars[0], vars[1], vars[2], vars[3]);
console.log(personal);
shipping.push(vars[4], vars[5], vars[6], vars[7], vars[8]);
payment




personal.forEach( (v) => {
    let inputName = v.split("=")[0];
    let inputValue = v.split("=")[1]
    
    let newP = document.createElement('input');
    newP.readOnly = true;
    newP.value = inputValue;
    newP.name = inputName;
    document.querySelector('#personal').appendChild(newP)
})

shipping.forEach( (v) => {
    let inputName = v.split("=")[0];
    let inputValue = v.split("=")[1]
    
    if (inputValue != "") {
        let newP = document.createElement('input');
        newP.readOnly = true;
        newP.value = inputValue;
        newP.name = inputName;
        document.querySelector('#shipping').appendChild(newP);
    }
})

const method = document.getElementById("payment")

if (method) {
    paymethod.forEach( (v) => {
        let inputName = v.split("=")[0];
        let inputValue = v.split("=")[1]
        
        let newP = document.createElement('input');
        newP.readOnly = true;
        newP.value = inputValue;
        newP.name = inputName;
        document.querySelector('#payment').appendChild(newP);
    })
}

