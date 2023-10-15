document.getElementById('getDataButton').addEventListener('click', async function() {
    try {
        const response = await fetch('http://localhost:3000/hi');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('responseData').textContent = data.message;
    } catch (error) {
        console.error('Error:', error);
    }
});
