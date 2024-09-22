document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const ageField = document.getElementById('age');
    const descriptionField = document.getElementById('description');
    const periodField = document.getElementById('historicalPeriod');
    const researchMethodField = document.getElementById('researchMethod');
    const historicalInterestField = document.getElementById('historicalInterest');
    const historicalResearchField = document.getElementById('historicalResearch');
    const favoriteHistoricalFigureField = document.getElementById('favoriteHistoricalFigure');
    const historicalArtifactField = document.getElementById('historicalArtifact');
    const historicalWorkField = document.getElementById('historicalWork');

    // Clear previous alerts
    clearAlert('nameAlert');
    clearAlert('emailAlert');
    clearAlert('ageAlert');
    clearAlert('descriptionAlert');
    clearAlert('periodAlert');
    clearAlert('researchMethodAlert');
    clearAlert('interestAlert');
    clearAlert('researchAlert');
    clearAlert('figureAlert');
    clearAlert('artifactAlert');
    clearAlert('workAlert');

    // Validate Name (letters only)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(nameField.value.trim())) {
        showAlert('nameAlert', 'Name must contain only letters.');
        isValid = false;
    }

    // Validate Email (simple validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        showAlert('emailAlert', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Age (18-100)
    if (ageField.value < 18 || ageField.value > 100) {
        showAlert('ageAlert', 'Age must be between 18 and 100.');
        isValid = false;
    }

    // Validate Description (min 20 characters)
    if (descriptionField.value.trim().length < 20) {
        showAlert('descriptionAlert', 'Description must be at least 20 characters long.');
        isValid = false;
    }

    // Validate Favorite Historical Period (must be selected)
    if (periodField.value === "") {
        showAlert('periodAlert', 'Please select a historical period.');
        isValid = false;
    }

    // Validate Research Method (must be selected)
    if (researchMethodField.value === "") {
        showAlert('researchMethodAlert', 'Please select a research method.');
        isValid = false;
    }

    // Validate Specific Area of Interest (max 100 characters)
    if (historicalInterestField.value.trim().length > 100) {
        showAlert('interestAlert', 'Area of interest must be within 100 characters.');
        isValid = false;
    }

    // Validate Previous Work Related to History (max 100 characters)
    if (historicalWorkField.value.trim().length > 100) {
        showAlert('workAlert', 'Previous work must be within 100 characters.');
        isValid = false;
    }

    // Validate Conducted Formal Historical Research (must be selected)
    if (historicalResearchField.value === "") {
        showAlert('researchAlert', 'Please select if you have conducted formal research.');
        isValid = false;
    }

    // Validate Favorite Historical Figure (letters only, max 50 characters)
    if (!nameRegex.test(favoriteHistoricalFigureField.value.trim()) || favoriteHistoricalFigureField.value.trim().length > 50) {
        showAlert('figureAlert', 'Please enter a valid historical figure (letters only, max 50 characters).');
        isValid = false;
    }

    // Validate Favorite Historical Artifact (max 50 characters)
    if (historicalArtifactField.value.trim().length > 50) {
        showAlert('artifactAlert', 'Favorite artifact must be within 50 characters.');
        isValid = false;
    }

    // If the form is valid, redirect to the history blog
    if (isValid) {
        window.location.href = "https://www.thehistoryblog.com/";
    }
});

// Function to show alert messages
function showAlert(id, message) {
    const alertElement = document.getElementById(id);
    alertElement.textContent = message;
    alertElement.style.display = 'block';
}

// Function to clear alert messages
function clearAlert(id) {
    const alertElement = document.getElementById(id);
    alertElement.textContent = '';
    alertElement.style.display = 'none';
}
