import { useState } from "react"

function MultiStep() {
    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ['step 1', 'step 2', 'step 3', 'step 4', 'step 5',
            'step 6', 'step 7', 'step 8', 'step 9'];
    }
    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const steps = getSteps();

    function getStepsContent(stepIndex) {
        switch (stepIndex) {
            case 0:
        }
    }
    return (
        <h1>oi</h1>
    );
}

export default MultiStep