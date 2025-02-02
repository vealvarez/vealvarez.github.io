document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('incrementScoreForm');
    const resultContainer = document.getElementById('resultContainer');
    const incrementScoreResult = document.getElementById('incrementScoreResult');
    const riskAssessment = document.getElementById('riskAssessment');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateIncrementScore();
    });

    function calculateIncrementScore() {
        const previousHospitalization = document.getElementById('previousHospitalization').value;
        const recentAntibioticUse = document.getElementById('recentAntibioticUse').value;
        const mechanicalVentilation = document.getElementById('mechanicalVentilation').value;
        const urinaryCatheter = document.getElementById('urinaryCatheter').value;
        const previousKpcColonization = document.getElementById('previousKpcColonization').value;

        let score = 0;

        // Scoring criteria for non-immunosuppressed patients
        if (previousHospitalization === 'yes') score += 1;
        if (recentAntibioticUse === 'yes') score += 1;
        if (mechanicalVentilation === 'yes') score += 1;
        if (urinaryCatheter === 'yes') score += 1;
        if (previousKpcColonization === 'yes') score += 1;

        // Display results
        incrementScoreResult.textContent = score;
        resultContainer.classList.remove('hidden');

        // Risk assessment
        if (score <= 1) {
            riskAssessment.textContent = 'Low Risk for KPC Colonization';
            riskAssessment.style.color = 'green';
        } else if (score > 1 && score <= 3) {
            riskAssessment.textContent = 'Moderate Risk for KPC Colonization';
            riskAssessment.style.color = 'orange';
        } else {
            riskAssessment.textContent = 'High Risk for KPC Colonization';
            riskAssessment.style.color = 'red';
        }
    }
});