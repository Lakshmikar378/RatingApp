//select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll('.stars i');
//console.log(stars);
//loop through the "stars" NodeList
stars.forEach((star, index1) => {
    //Add a event listener that runs a function when the "click" event is triggered 
    star.addEventListener('click', () => {
        // console.log(index1);
        //loop through the "stars" Nodelist again
        stars.forEach((star, index2) => {
            // console.log(index2);
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    });
});
