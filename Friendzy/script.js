// Sample user data (in a real application, this would be stored in a database)
const users = [
    { name: "Alice", age: 18, interests: ["music", "travel"], phone: "123-456-7890" },
    { name: "Bob", age: 19, interests: ["sports", "music"], phone: "234-567-8901" },
    { name: "Charlie", age: 22, interests: ["reading", "travel"], phone: "345-678-9012" },
    { name: "David", age: 21, interests: ["sports", "reading"], phone: "456-789-0123" },
    { name: "Eve", age: 20, interests: ["music", "sports"], phone: "567-890-1234" }
];

function findMatches() {
    const nameInput = document.getElementById('name').value;
    const userAge = parseInt(document.getElementById('age').value);
    const minAge = parseInt(document.getElementById('min-age').value);
    const maxAge = parseInt(document.getElementById('max-age').value);

    const selectedInterests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(checkbox => checkbox.value);

    // Validate interest selection
    if (selectedInterests.length < 2) {
        alert("Please Select At Least 2 Interests.");
        return;
    }
    if (selectedInterests.length > 5) {
        alert("Please Don't Select More Than 5 Interests.");
        return;
    }

    const matches = users.filter(user =>
        user.interests.some(interest => selectedInterests.includes(interest)) &&
        user.age >= minAge && user.age <= maxAge
    );

    displayMatches(matches, nameInput);
}

function displayMatches(matches, userName) {
    const matchesDiv = document.getElementById('matches');
    matchesDiv.innerHTML = ''; // Clear previous matches

    if (matches.length === 0) {
        matchesDiv.innerHTML = '<p>No matches found.</p>';
        return;
    }

    matches.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <strong>${user.name}</strong> (Age: ${user.age}, Interests: ${user.interests.join(', ')})<br>
            <button onclick="exchangeNumbers('${user.phone}')">Exchange Numbers</button>
        `;
        matchesDiv.appendChild(userDiv);
    });
}

function exchangeNumbers(phone) {
    alert(`Their phone number is: ${phone}`);
}