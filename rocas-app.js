document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rocasScoreForm');
    const resultContainer = document.getElementById('resultContainer');
    const rocasScoreResult = document.getElementById('rocasScoreResult');
    const riskAssessment = document.getElementById('riskAssessment');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateRocasScore();
    });

    function calculateRocasScore() {
        const solidOrganTransplant = document.getElementById('solidOrganTransplant').value;
        const hematologicMalignancy = document.getElementById('hematologicMalignancy').value;
        const recentChemotherapy = document.getElementById('recentChemotherapy').value;
        const corticosteroidUse = document.getElementById('corticosteroidUse').value;
        const previousKpcColonization = document.getElementById('previousKpcColonization').value;

        let score = 0;

        // Scoring criteria for immunosuppressed patients
        if (solidOrganTransplant === 'yes') score += 1;
        if (hematologicMalignancy === 'yes') score += 1;
        if (recentChemotherapy === 'yes') score += 1;
        if (corticosteroidUse === 'yes') score += 1;
        if (previousKpcColonization === 'yes') score += 1;

        // Display results
        rocasScoreResult.textContent = score;
        resultContainer.classList.remove('hidden');

        // Risk assessment
        if (score <= 1) {
            riskAssessment.textContent = 'Riesgo bajo de infección por KPC';
            riskAssessment.style.color = 'green';
            riskAssessment.style.fontSize = '20px';
        } else if (score > 1 && score <= 3) {
            riskAssessment.textContent = 'Riesgo moderado de infección por KPC';
            riskAssessment.style.color = 'orange';
            riskAssessment.style.fontSize = '20px';
        } else {
            riskAssessment.textContent = 'Riesgo alto de infección por KPC';
            riskAssessment.style.color = 'red';
            riskAssessment.style.fontSize = '20px';
        }
    }
});