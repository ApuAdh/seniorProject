const birthDate = new Date(2008, 2, 29);

function calculateAge() {
    const now = new Date();
    const diffMs = now - birthDate;
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.2425);
    document.getElementById('age-display').textContent =
        `${years.toFixed(9)}`;
}

calculateAge();
setInterval(calculateAge, 16);