document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('millerScoreForm');
    const resultContainer = document.getElementById('resultContainer');
    const millerScoreResult = document.getElementById('millerScoreResult');
    const riskAssessment = document.getElementById('riskAssessment');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateMillerScore();
    });

    function calculateMillerScore() {
        const previousHospitalization = document.getElementById('previousHospitalization').value;
        const recentAntibioticUse = document.getElementById('recentAntibioticUse').value;
        const centralVenousCatheter = document.getElementById('centralVenousCatheter').value;
        const patientLocation = document.getElementById('patientLocation').value;

        let score = 0;

        // Previous Hospitalization
        if (previousHospitalization === 'yes') score += 1;

        // Recent Antibiotic Use
        if (recentAntibioticUse === 'yes') score += 1;

        // Central Venous Catheter
        if (centralVenousCatheter === 'yes') score += 1;

        // Patient Location
        if (patientLocation === 'icu') score += 1;

        // Display results
        millerScoreResult.textContent = score;
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