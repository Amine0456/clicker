document.addEventListener('DOMContentLoaded', function() {
    let points = 0;
    let clickValue = 1;
    let autoValue = 0;
    let autoInterval;

    if (localStorage.getItem('points')) {
        points = parseInt(localStorage.getItem('points'));
        updatePointsDisplay();
    }

    const clickButton = document.getElementById('clickButton');
    const buyElementButton = document.getElementById('buyMine');
    const buyBonusButton = document.getElementById('buyMineur');

    clickButton.addEventListener('click', handleClick);
    buyElementButton.addEventListener('click', buyMine);
    buyBonusButton.addEventListener('click', buyMineur);

    function handleClick() {
        points += clickValue;
        updatePointsDisplay();
    }

    function buyMine() {
        if (points >= 10) {
            points -= 10;
            clickValue += 1;
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function buyMineur() {
        if (points >= 20) {
            points -= 20;
            autoValue += 2;
            if (!autoInterval) {
                autoInterval = setInterval(autoClick, 1000);
            }
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function autoClick() {
        points += autoValue;
        updatePointsDisplay();
    }

    function updatePointsDisplay() {
        document.getElementById('points').innerText = points;
        localStorage.setItem('points', points);
    }
});
