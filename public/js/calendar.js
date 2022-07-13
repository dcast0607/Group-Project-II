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


document.addEventListener("DOMContentLoaded", startCalendarHandler)
