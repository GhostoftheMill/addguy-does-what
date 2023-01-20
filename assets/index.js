//Psuedo coding
//JavaScript to do

//Creates variable for current date & time in my preferred format, sorry Brits
//Creates variable to select HTML element to insert into
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
let insertDate = document.getElementById('currentDay');

//Inserts current date into HTML
insertDate.innerHTML = date;

//Each time block is color-coded to indicate whether it is in the past, present, or future (already in CSS)

//When I click on a time block, I can enter an event

//When I click the save button the text is saved in local storage

//When I refresh the page the saved events persist

