const button = document.querySelector('button');
const list = document.querySelector('ul');
const selection = document.querySelector('#selection');
//console.log(list.classList);


// display and hide list & change button text accordingly

function toggle() {

    list.classList.toggle("d-none");

    if (list.classList.contains("d-none")) {
        button.textContent = 'Show destinations';
        selection.classList.add("d-none");
    } else {
        button.textContent = 'Hide destinations';

    }
};


button.addEventListener('click', toggle);


// display the selected city 


console.log(selection);


Array.from(list.children).forEach((city) => {

    city.addEventListener('mouseenter', () => {
        city.classList.toggle("bg-primary");
        //city.classList.add("bg-primary");
        selection.classList.remove("d-none");
        selection.textContent = `You selected ${city.textContent}`;
    });

    city.addEventListener('mouseout', () => {
        city.classList.remove("bg-primary");
        selection.classList.add("d-none");
    })

});


