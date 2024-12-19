// Sample user data (in a real application, this would be stored in a database)
const users = [
    { name: "Alice", age: 18, interests: ["music", "travel"], phone: "+31612345678" },
    { name: "Bob", age: 19, interests: ["sports", "gardening"], phone: "+31623456789" },
    { name: "Charlie", age: 22, interests: ["writing", "acting"], phone: "+31634567890" },
    { name: "David", age: 19, interests: ["photography", "maths"], phone: "+31645678901" },
    { name: "Eve", age: 20, interests: ["music", "sports"], phone: "+31656789012" },
    { name: "Johan", age: 21, interests: ["biology", "acting", "sports"], phone: "+31667890123" },
    { name: "Gabriel", age: 18, interests: ["geography", "history", "music", "gaming"], phone: "+31678901234" },
    { name: "Falicia", age: 19, interests: ["travel", "geography", "art", "writing"], phone: "+31689012345" },
    { name: "Sanny", age: 17, interests: ["gaming", "music", "art", "travel"], phone: "+3169012345678" },
    { name: "Ami", age: 16, interests: ["reading", "art", "gaming", "writing", "music"], phone: "+3160123456789" },
    { name: "Maud", age: 16, interests: ["music", "sports", "art", "gaming"], phone: "+3169643369329" },
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