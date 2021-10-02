function attachEventsListeners() {
    const inputDistance = document.querySelector("#inputDistance");
    const convertedDistance = document.querySelector('#outputDistance');

    const inputSelectedMetric = document.querySelector('#inputUnits');

    const outputSelectedMetric = document.querySelector('#outputUnits')

    const buttonConvert = document.querySelector('#convert');
    buttonConvert.addEventListener('click', onClick);

    const metricTable = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144, 
        ft: 0.3048,
        in: 0.0254
    }

    function onClick(event) {
        let inputMetric = inputSelectedMetric.value;
        let outputMetric = outputSelectedMetric.value;
        let inputValue = inputDistance.value * metricTable[inputMetric];
        let convertedValue = inputValue / metricTable[outputMetric];
        convertedDistance.value = convertedValue
    }
}