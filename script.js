document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const appointmentForm = document.getElementById('appointmentForm');
    const loginDiv = document.getElementById('login');
    const appointmentsDiv = document.getElementById('appointments');
    const appointmentList = document.getElementById('appointmentList');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        fetch('http://127.0.0.1:5000/login/', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                loginDiv.style.display = 'none';
                appointmentsDiv.style.display = 'block';
            } else {
                console.log(data);
                alert('Invalid credentials');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const job = document.getElementById('job').value;
        const datetime = document.getElementById('datetime').value;

        // Simulate creating an appointment (replace with actual API call)
        const appointment = document.createElement('div');
        appointment.textContent = `${job} at ${new Date(datetime).toLocaleString()}`;
        appointmentList.appendChild(appointment);

        // Clear form
        appointmentForm.reset();
    });
});
