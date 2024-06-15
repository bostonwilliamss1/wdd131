import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    document.getElementById('add').addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    document.querySelector('form').addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();
        const total = totalFees();
        const adultName = document.querySelector('#adult_name').value;
        const summaryMessage = successTemplate({
            name: adultName,
            count: participantCount,
            total: total
        });
        document.querySelector('form').classList.add('hide');
        const summary = document.getElementById('summary');
        summary.innerHTML = summaryMessage;
        summary.classList.remove('hide');
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        const total = feeElements.reduce((sum, element) => sum + parseFloat(element.value || 0), 0);
        return total;
    }
});
