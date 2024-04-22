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
    const buyPickaxeIronButton = document.getElementById('buyPickaxeIron');
    const buyPickaxeDiamondButton = document.getElementById('buyPickaxeDiamond');
    const buyPickaxeNetheriteButton = document.getElementById('buyPickaxeNetherite');
    const buyBonusButton = document.getElementById('buyMineur');
    const buyTorche = document.getElementById('BuyTorche');

    clickButton.addEventListener('click', handleClick);
    buyElementButton.addEventListener('click', buyMine);
    buyPickaxeIronButton.addEventListener('click', buyPickaxeIron);
    buyPickaxeDiamondButton.addEventListener('click', buyPickaxeDiamond);
    buyPickaxeNetheriteButton.addEventListener('click', buyPickaxeNetherite);
    buyBonusButton.addEventListener('click', buyMineur);
    buyTorche.addEventListener('click',BuyTorche);

    function handleClick() {
        points += clickValue;
        updatePointsDisplay();
    }

    function buyMine() {
        if (points >= 10) {
            points -= 10;
            clickValue += 2;
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function buyPickaxeIron() {
        if (points >= 50) {
            points -= 50;
            clickValue += 5;
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function buyPickaxeDiamond() {
        if (points >= 100) {
            points -= 100;
            clickValue += 10;
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function buyPickaxeNetherite() {
        if (points >= 500) {
            points -= 500;
            clickValue += 50;
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function autoClick() {
        points += autoValue;
        updatePointsDisplay();
    }

    function buyMineur() {
        if (points >= 1000) {
            points -= 1000;
            autoValue += 2;
            if (!autoInterval) {
                autoInterval = setInterval(autoClick, 1000);
            }
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function buyTorche() {
        if (points >= 1500) {
            points -= 1500;
            autoValue += 4;
            if (!autoInterval) {
                autoInterval = setInterval(autoClick, 1000);
            }
            updatePointsDisplay();
        } else {
            alert('Pas assez de points!');
        }
    }

    function updatePointsDisplay() {
        document.getElementById('points').innerText = points;
        localStorage.setItem('points', points);
    }
});
