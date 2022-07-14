 const startCalendarHandler = async () => {
    const userId = window.localStorage.getItem('userId');
    const response = await fetch('/api/events/user_data', {
        method: 'POST',
        body: JSON.stringify({ userId }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (response) {
        if (response.ok) {
            console.log("Retrieved events data");
            return response.json();
        } else {
            alert(response.message);
        }
        //TODO: Need to add info to populate data onto page. 
    }).then(data => console.log(data));
 };


const addEventHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#eventTitle').value.trim();
    const eventColor ='red';
    const detail = document.querySelector('#eventDetails').value.trim();
    const eventDate = document.querySelector('#eventDate').value.trim();

    const userId = window.localStorage.getItem('userId');

    if (title && detail && eventColor && eventDate && userId){
        const response = await fetch('/api/events/add_event', {
            method: 'POST',
            body: JSON.stringify({ title, detail, eventColor, eventDate, userId }),
            headers: { 'Content-Type': 'application/json' },    
    })
    .then(function (response) {
        if (response.ok) {
            console.log("Event Added Successfully");
        } else {
            alert("Failed to add event, please try again.")
        }
    })
    .then(function () {

        document.location.replace('/calendar');

    });   
    } else {
        alert("Please make sure you fill out all the details.");
    }
};

document
.addEventListener("DOMContentLoaded", startCalendarHandler);
document
.querySelector('.addEvent-form')
.addEventListener('submit', addEventHandler);