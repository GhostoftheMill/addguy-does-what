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
//Having trouble setting time key for local storage.
//Tried just setting code outside function but didn't work.
function storeInfo () {
    $('.saveBtn').on('click', () => {
        let time = $(this).parent().attr('id');
        //console.log($(this).siblings('.hour').attr('id'));
        let content = $(this).siblings('.description').val();
        //console.log($('.saveBtn').siblings('.description').val());
        localStorage.setItem(time, content);
        console.log(time, content);

      });
}

storeInfo();
//Get the info
//When I refresh the page the saved events persist
$("#A .description").val(localStorage.getItem("A"));
$("#B .description").val(localStorage.getItem("B"));
$("#C .description").val(localStorage.getItem("C"));
$("#D .description").val(localStorage.getItem("D"));
$("#E .description").val(localStorage.getItem("E"));
$("#F .description").val(localStorage.getItem("F"));
$("#G .description").val(localStorage.getItem("G"));
$("#H .description").val(localStorage.getItem("H"));
$("#I .description").val(localStorage.getItem("I"));

});