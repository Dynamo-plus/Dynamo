const boxes = document.querySelectorAll('.animate-box');

console.log(boxes);

//Scroll event listener
//Check position of each boxes with function
    //Find the triggerpoint by checking the window inner height /5 * 4
    //Find the top of each box
        //Hint getBoundingClientRect().top
        //if the box top is less than the trigger bottom then show else do otherwise
    //Note remember to call the function 

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes(){
    const triggerPoint = window.innerHeight / 5 * 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}