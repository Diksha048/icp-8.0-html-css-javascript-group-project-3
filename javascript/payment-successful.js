function getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('india', options);
}

document.getElementById('current-date').textContent = getCurrentDate();



function orderNumber() {
    const min = 1;
    const max = 1000000;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("order-number").innerHTML = `<b>Order Number:</b> ${randomNumber}`;
}

window.onload = function() {
    orderNumber();
};