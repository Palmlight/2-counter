// Set initial count = 0; 

let count = 0; 

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn"); 

btns.forEach(i => 
    i.addEventListener('click', (e) => {

        // Where what is a variable showing the type of button clicked, decrease, increase, etc
        const what = e.currentTarget.classList;
        
        if (what.contains("decrease")) {
            count--
        }
        else if (what.contains("reset")){
            count = 0;
        } 
        else if (what.contains("increase")) {
            count++
        }

        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "#222";

        }


        value.textContent = count;


    })

);
