

const toggle = document.querySelector('#toggle');
const checkbox = document.querySelector('#checkbox');

toggle.addEventListener("click", () => {
    console.log("clicked");
    console.log(checkbox.ischecked);
    if (checkbox.checked) {
        console.log("checkbox is now unchecked");
        checkbox.checked = false;
    } else {
        console.log("checkbox now checked");
        checkbox.checked = true;
    }
    
});

