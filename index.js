document.addEventListener('DOMContentLoaded', () => {
    let selectedNumber = null;

    function handleSpan (event) {
        const value = event.target.textContent;
        selectedNumber=value;
        console.log(` ${selectedNumber}`);
    }

    function handleSubmit() {
        if (selectedNumber) {
            localStorage.setItem('selectedNumber',selectedNumber);
            window.location.href= 'thankyou.html';
        }
        else {
            alert("Please give us a rating ");
        }
    }

    document.addEventListener("click", (event) => {
        if(event.target.tagName==="SPAN") {
            handleSpan(event);
        }
    });

    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', handleSubmit);
     


})
