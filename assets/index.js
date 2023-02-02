//Psuedo coding
//JavaScript to do

//Creates variable for current date & time in my preferred format, sorry Brits
//Creates variable to select HTML element to insert into
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
let insertDate = document.getElementById('currentDay');

//Inserts current date into HTML
insertDate.innerHTML = date;


//Do I need this?
$(document).ready(() => {

});
//Each time block is color-coded to indicate whether it is in the past, present, or future (already in CSS)
//if currentTime > time then .past
//if currentTime = time then .present
//if currentTime < time then .future
//function to change color of textarea based on time
//Want to compare first object to each id object
function timeBlockColors () {
    let currentTime = moment().hour();
    $('textarea').each(function () {
        let time = parseInt($(this).attr('id'));
        console.log($(this));
        if (currentTime > time) {
            $(this).addClass('past');
        } else if (currentTime === time) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
}

timeBlockColors();

//When I click the save button the text is saved in local storage
function storeInfo () {
    let saveBtn = $('.saveBtn');
    saveBtn.on('click', () => {
        let time = $(this).siblings('.hour').val();
        let content = $(this).siblings('.description').val();
      })
}
storeInfo();
localStorage.getItem(time, content);




//When I refresh the page the saved events persist
