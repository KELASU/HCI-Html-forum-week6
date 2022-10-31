
const menuButtons = document.querySelectorAll('.menu-button');
const foodItems = document.querySelectorAll('.food-item');

let activeButton = "Appetizer";

showFoodMenu(activeButton);

menuButtons.forEach((button) => {
    button.addEventListener('click',()=>{
        resetActiveButton();
        showFoodMenu(button.id);
        button.classList.add('active-button')
    });
});

function resetActiveButton(){
    menuButtons.forEach((button) =>{
        button.classList.remove('active-button')
    });
}

function showFoodMenu(newMenuButton){
    activeButton = newMenuButton;
    foodItems.forEach((item)=>{
        if(item.classList.contains(activeButton)){
            item.style.display = "grid"
        } else {
            item.style.display = "none"
        }
    });
}