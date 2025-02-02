# KPC Risk Score Calculators

## Overview
This mobile application provides multiple score calculators to assess the risk of Carbapenem-Resistant Klebsiella Pneumoniae (CR-KP) infection based on different patient characteristics and scenarios.

## Calculators

### 1. Gianella Score Calculator
#### Purpose
Assesses the risk of CR-KP infection for patients.

#### Scoring Criteria
- Age ≥ 65: 2 points
- Recent Hospitalization: 2 points
- Antibiotic Use in Last 3 Months: 2 points
- Previous CR-KP Colonization: 3 points
- ≥ 3 Chronic Conditions: 1 point

#### Risk Categories
- 0-2 points: Low Risk
- 3-5 points: Moderate Risk
- > 5 points: High Risk

### 2. Miller Score Calculator
#### Purpose
Used when KPC colonization is unknown.

#### Scoring Criteria
- Previous Hospitalization in Last 12 Months: 1 point
- Recent Antibiotic Use: 1 point
- Presence of Central Venous Catheter: 1 point
- Patient Location in ICU: 1 point

#### Risk Categories
- 0-1 points: Low Risk
- 2-3 points: Moderate Risk
- > 3 points: High Risk

### 3. Rocas Score Calculator
#### Purpose
Used for immunosuppressed patients colonized by KPC.

#### Scoring Criteria
- Solid Organ Transplant: 1 point
- Hematologic Malignancy: 1 point
- Chemotherapy in Last 3 Months: 1 point
- Corticosteroid Use: 1 point
- Previous KPC Colonization: 1 point

#### Risk Categories
- 0-1 points: Low Risk
- 2-3 points: Moderate Risk
- > 3 points: High Risk

### 4. Increment Score Calculator
#### Purpose
Used for non-immunosuppressed patients colonized by KPC.

#### Scoring Criteria
- Previous Hospitalization: 1 point
- Recent Antibiotic Use: 1 point
- Mechanical Ventilation: 1 point
- Urinary Catheter: 1 point
- Previous KPC Colonization: 1 point

#### Risk Categories
- 0-1 points: Low Risk
- 2-3 points: Moderate Risk
- > 3 points: High Risk

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

## How to Use
1. Select the appropriate calculator based on patient characteristics
2. Input patient information
3. Submit the form to calculate the risk score
4. View the risk assessment

## Disclaimer
These calculators are meant to assist healthcare professionals in risk assessment and should not replace clinical judgment.