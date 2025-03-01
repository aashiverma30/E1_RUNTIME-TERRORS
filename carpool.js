document.addEventListener('DOMContentLoaded', function() {
    const giveRideButton = document.querySelector('button:contains("Give a Ride")');
    const offerRideButton = document.querySelector('button:contains("Offer a Ride")');

    giveRideButton.addEventListener('click', function() {
        alert('Give a Ride button clicked!');
    });

    offerRideButton.addEventListener('click', function() {
        alert('Offer a Ride button clicked!');
    });
    });