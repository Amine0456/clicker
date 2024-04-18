document.addEventListener('DOMContentLoaded', function () {
    let points = 0;
    let clickValue = 1;
    let autoValue = 0;
    let autoInterval;
    let coalLevel = 1;
    let copperLevel = 1;
    let ironLevel = 1;

    if (localStorage.getItem('points')) {
        points = parseInt(localStorage.getItem('points'));
        updatePointsDisplay();
    }

    const clickButton = document.getElementById('clickButton');
    const buyElementButton = document.getElementById('buyMine');
    const buyBonusButton = document.getElementById('buyMineur');

    const coalCard = document.querySelector('.coal-card');
    const copperCard = document.querySelector('.copper-card');
    const ironCard = document.querySelector('.iron-card');


    coalCard.addEventListener('click', () => handleCardClick(1, coalLevel));
    copperCard.addEventListener('click', () => handleCardClick(2, copperLevel));
    ironCard.addEventListener('click', () => handleCardClick(3, ironLevel));

    clickButton.addEventListener('click', handleClick);
    buyElementButton.addEventListener('click', buyMine);
    buyBonusButton.addEventListener('click', buyMineur);

    function handleCardClick(value, level) {
        const pointsToAdd = value * level; 
        points += pointsToAdd;
        updatePointsDisplay();
    }

    function handleClick() {
        points += clickValue;
        updatePointsDisplay();
    }

    function buyMine() {
        if (points >= 10) {
            points -= 10;
            clickValue += 1;
            coalLevel += 1;
            updatePointsDisplay();
            showParticleOnBuy();
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

    function handleMineAction() {
        points += clickValue;
        updatePointsDisplay();
    }

    clickButton.addEventListener('click', handleMineAction);
});
