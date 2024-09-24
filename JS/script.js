const donateBtn = document.getElementById('donate-btn');
const historyBtn = document.getElementById('history-btn');

donateBtn.addEventListener('click', function () {
    showTab('donate-tab')
    donateBtn.classList.add('bg-primary');
    donateBtn.classList.remove('border-gray-300');
    historyBtn.classList.remove('bg-primary');
    historyBtn.classList.add('border-gray-300');
})
historyBtn.addEventListener('click', function () {
    showTab('history-tab')
    historyBtn.classList.add('bg-primary');
    historyBtn.classList.remove('border-gray-300');
    donateBtn.classList.remove('bg-primary');
    donateBtn.classList.add('bg-gray-200', 'border-gray-300');

})



