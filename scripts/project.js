document.addEventListener('DOMContentLoaded', () => {

    function fetchAndDisplayQuote() {
        var category = 'inspirational';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': 'fkZIzS5hEi01J7bYRsHiDA==yUycZwm6EDpvpn9x' },
            contentType: 'application/json',
            success: function(result) {
                // Check if the result contains quotes
                if (result && result.length > 0) {
                    // Extract the first quote
                    const quote = result[0].quote;
                    const author = result[0].author;

                    // Display the quote in the HTML section
                    const quoteElement = document.getElementById('quote');
                    const authorElement = document.getElementById('author');

                    quoteElement.textContent = `"` + quote + `"\n`;
                    authorElement.textContent = `Author: ${author}`;
                } else {
                    console.error('No quotes found in the response.');
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
    const refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', fetchAndDisplayQuote);

    fetchAndDisplayQuote();

});
