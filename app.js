document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gianellaScoreForm');
    const resultContainer = document.getElementById('resultContainer');
    const gianellaScoreResult = document.getElementById('gianellaScoreResult');
    const riskAssessment = document.getElementById('riskAssessment');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateGianellaScore();
    });

    function calculateGianellaScore() {
        const age = parseInt(document.getElementById('age').value);
        const recentHospitalization = document.getElementById('recentHospitalization').value;
        const antibioticUse = document.getElementById('antibioticUse').value;
        const crKpColonization = document.getElementById('crKpColonization').value;
        const chronicConditions = parseInt(document.getElementById('chronicConditions').value);

        let score = 0;

        // Age scoring
        if (age >= 65) score += 2;

        // Recent hospitalization
        if (recentHospitalization === 'yes') score += 2;

        // Antibiotic use
        if (antibioticUse === 'yes') score += 2;

        // Previous CR-KP colonization
        if (crKpColonization === 'yes') score += 3;

        // Chronic conditions
        if (chronicConditions >= 3) score += 1;

        // Display results
        gianellaScoreResult.textContent = score;
        resultContainer.classList.remove('hidden');

        // Risk assessment
        if (score <= 2) {
            riskAssessment.textContent = 'Riesgo bajo de infección por KPC';
            riskAssessment.style.color = 'green';
        } else if (score > 2 && score <= 5) {
            riskAssessment.textContent = 'Riesgo moderado de infección por KPC';
            riskAssessment.style.color = 'orange';
        } else {
            riskAssessment.textContent = 'Riesgo alto de infección por KPC';
            riskAssessment.style.color = 'red';
        }
    }
});