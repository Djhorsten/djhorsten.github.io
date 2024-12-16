document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const interests = document.getElementById('interests').value.split(',').map(interest => interest.trim());

    // Here you would typically send the data to a server to find matches
    // For this example, we'll just display the interests back to the user

    const matchesDiv = document.getElementById('matches');
    matchesDiv.innerHTML = `<h2>Matches for ${name}</h2>`;
    matchesDiv.innerHTML += `<p>Your interests: ${interests.join(', ')}</p>`;

    // Example of hardcoded matches (in a real application, this would come from a database)
    const exampleMatches = [
        { name: 'Alice', interests: ['music', 'travel', 'food'] },
        { name: 'Bob', interests: ['sports', 'music', 'movies'] },
        { name: 'Charlie', interests: ['travel', 'photography', 'food'] }
    ];

    exampleMatches.forEach(match => {
        const commonInterests = interests.filter(interest => match.interests.includes(interest));
        if (commonInterests.length > 0) {
            matchesDiv.innerHTML += `<p>${match.name} (Common Interests: ${commonInterests.join(', ')})</p>`;
        }
    });
});