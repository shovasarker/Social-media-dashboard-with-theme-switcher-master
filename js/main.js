
const container = document.querySelector('.container');

const toggle = document.querySelector('#toggle');
const checkbox = document.querySelector('#checkbox');

toggle.addEventListener("click", () => {
    console.log("clicked");
    console.log(checkbox.ischecked);
    if (checkbox.checked) {
        console.log("checkbox is now unchecked");
        checkbox.checked = false;
        if (container.classList.contains("light-theme")) {
            container.classList.remove("light-theme");
        }
    } else {
        console.log("checkbox now checked");
        checkbox.checked = true;
        if (!container.classList.contains("light-theme")) {
            container.classList.add("light-theme");
        }
    }
    
});

