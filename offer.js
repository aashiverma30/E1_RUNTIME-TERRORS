document.getElementById('rideForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const time = document.getElementById('time').value;
    const price = document.getElementById('price').value;

    console.log('Name:', name);
    console.log('Source:', source);
    console.log('Destination:', destination);
    console.log('Time of Travel:', time);
    console.log('Price:', price);

    alert('Form submitted successfully!');
});
