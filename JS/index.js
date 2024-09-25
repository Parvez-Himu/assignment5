
const donateButton = document.getElementById('donate-button');
const historyButton = document.getElementById('history-button');

donateButton.addEventListener('click', function () {
    showTab('donate-tab')
    donateButton.classList.add('bg-primary');
    donateButton.classList.remove('border-gray-300');
    historyButton.classList.remove('bg-primary');
    historyButton.classList.add('border-gray-300');
})
historyButton.addEventListener('click', function () {
    showTab('history-tab')
    historyButton.classList.add('bg-primary');
    historyButton.classList.remove('border-gray-300');
    donateButton.classList.remove('bg-primary');
    donateButton.classList.add('bg-gray-200', 'border-gray-300');

})


// Common Function 1 
function handleDonationValueById(id) {
    const donationValue = document.getElementById(id).value;
    const donationNumber = Number(donationValue);
    return donationNumber
}

// Common Function 2 
function handleDonationAmountById(id) {
    const totalDonationAmount = document.getElementById(id).innerText;
    const totalDonationNumber = Number(totalDonationAmount);
    return totalDonationNumber
}


// Home and blog Button

// home button dynamic
const homeButtons = document.querySelectorAll(".home-button");
for (const homeButton of homeButtons) {
    homeButton.addEventListener('click', function () {
        window.location.href = './index.html';
    })
}

//blog button dynamic 
const blogButtons = document.querySelectorAll(".blog-button");
for (const blogButton of blogButtons) {
    blogButton.addEventListener('click', function () {
        window.open('./blogs.html', '_blank');  //new tab open
    })
}

//Noakhali section
document.getElementById('donate-now-btn1').addEventListener('click', function () {
    const donationAmount = handleDonationValueById('donation-amount1');
    const totalDonation = handleDonationAmountById('accountBalance');
    if (donationAmount < 0 || isNaN(donationAmount) || donationAmount > totalDonation || !donationAmount) {
        return alert('Invalid Donation Amount')
    }
    const currentDonation = handleDonationAmountById('donation-bdt1');
    const currentAmount = currentDonation + donationAmount;
    const newAmount = totalDonation - donationAmount;
    document.getElementById('donation-bdt1').innerText = currentAmount;
    document.getElementById('accountBalance').innerText = newAmount
    my_modal_1.showModal()

    document.getElementById('history-tab').innerHTML += `
        <div class="border p-5 rounded-lg mb-3">
            <p class="mb-2 font-medium">
                ${donationAmount} Taka ${document.getElementById('donation-heading1').innerText}
            </p>
            <p class="text-gray-600">${new Date()}</p>
        </div>
    `
})

// Feni section
document.getElementById('donate-now-btn2').addEventListener('click', function () {
    const donationAmount = handleDonationValueById('donation-amount2');
    const totalDonation = handleDonationAmountById('accountBalance');
    if (donationAmount < 0 || isNaN(donationAmount) || donationAmount > totalDonation || !donationAmount) {
        return alert('Invalid Donation Amount')
    }
    const currentDonation = handleDonationAmountById('donation-bdt2');
    const currentAmount = currentDonation + donationAmount;
    const newAmount = totalDonation - donationAmount;
    document.getElementById('donation-bdt2').innerText = currentAmount;
    document.getElementById('accountBalance').innerText = newAmount
    my_modal_1.showModal()

    document.getElementById('history-tab').innerHTML += `
        <div class="border p-5 rounded-lg mb-3">
            <p class="mb-2 font-medium">
                ${donationAmount} Taka ${document.getElementById('donation-heading2').innerText}
            </p>
            <p class="text-gray-600">${new Date()}</p>
        </div>
    `
})

// Quota moment
document.getElementById('donate-now-btn3').addEventListener('click', function () {
    const donationAmount = handleDonationValueById('donation-amount3');
    const totalDonation = handleDonationAmountById('accountBalance');
    if (donationAmount < 0 || isNaN(donationAmount) || donationAmount > totalDonation || !donationAmount) {
        return alert('Invalid Donation Amount')
    }
    const currentDonation = handleDonationAmountById('donation-bdt3');
    const currentAmount = currentDonation + donationAmount;
    const newAmount = totalDonation - donationAmount;
    document.getElementById('donation-bdt3').innerText = currentAmount;
    document.getElementById('accountBalance').innerText = newAmount
    my_modal_1.showModal()

    document.getElementById('history-tab').innerHTML += `
        <div class="border p-5 rounded-lg mb-3">
            <p class="mb-2 font-medium">
                ${donationAmount} Taka ${document.getElementById('donation-heading3').innerText}
            </p>
            <p class="text-gray-600">${new Date()}</p>
        </div>
    `
})