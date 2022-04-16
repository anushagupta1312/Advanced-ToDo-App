let addbtn = document.querySelector('.add-btn')
let modal = document.querySelector('.modal-cont')
let addFlag = false

addbtn.addEventListener("click", function (e) {
    //Display a modal
    addFlag = !addFlag
    if(addFlag){
        modal.style.display = 'flex'
    }
    else{
        modal.style.display = 'none'
    }


    //add the card
})