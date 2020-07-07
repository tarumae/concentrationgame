//1. Generate a random number to signify the cat picture
//2. The same cat picture has to be placed in two different card slots. Those slots need to be removed from the list of available slots.
//3. When player clicks on a cat picture, it needs to keep it open and compare the next clicked picture to the first one. If they match, hide them from the DOM.
//4. 

let catPictures = [1, 2, 3, 4, 5, 6, 7, 8];
let availableSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let clickedOnCat = false;
let listOfCats = [];

let firstCat = undefined;
let secondCat = undefined;
let counter = 0;

$(document).ready(function () {
   
    catPictures.forEach(function (cat) {
        let catImage = "images/cat" + cat + ".jpg";
        let randomSlots = availableSlots.sort(function () { return 0.5 - Math.random() });

        let slot1 = randomSlots.pop([0]);
        let slot2 = randomSlots.pop([0]);

        $("." + slot1).children(":first").attr("src", catImage);
        $("." + slot2).children(":first").attr("src", catImage);
        
    });
});


$(".card").click(function () {
    
    if (clickedOnCat === false) {
        
        firstCat = $(this);
        listOfCats.push(firstCat.children(":first").attr("src"));
        clickedOnCat = true;
        $(this).children(":first").removeClass("hidden");

    } else {
        
        secondCat = $(this);
        listOfCats.push(secondCat.children(":first").attr("src"));
        $(this).children(":first").removeClass("hidden");
        
        setTimeout(() => {
            if (listOfCats[0] === listOfCats[1]) {
                firstCat.unbind("click");
                secondCat.unbind("click");
                listOfCats = [];
                clickedOnCat = false;
                firstCat = undefined;
                secondCat = undefined;
                counter++
                $("span").html(counter);
            } else {
                firstCat.children(":first").addClass("hidden");
                secondCat.children(":first").addClass("hidden");
                listOfCats = [];
                clickedOnCat = false;
                firstCat = undefined;
                secondCat = undefined;
                counter++
                $("span").html(counter);
            }
        }, 300);
    }
});