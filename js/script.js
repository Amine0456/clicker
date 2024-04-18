document.addEventListener('DOMContentLoaded', function () {
    let points = 0;
    let clickValue = 1;
    let autoValue = 0;
    let clicksInLastMinute = 0;
    let clicksPerMinute = 0;
    let autoInterval;
    let minuteTimer;

    if (localStorage.getItem('points')) {
        points = parseInt(localStorage.getItem('points'));
        updatePointsDisplay();
    }

    const clickButton = document.getElementById('clickButton');
    const buyElementButton = document.getElementById('buyMine');
    const buyBonusButton = document.getElementById('buyMineur');
    const buyMine2Button = document.getElementById('buyMine2');
    const buyMine3Button = document.getElementById('buyMine3');
    const buyMine4Button = document.getElementById('buyMine4');
    const buyMine5Button = document.getElementById('buyMine5');
    const buyMine6Button = document.getElementById('buyMine6');
    const buyMine7Button = document.getElementById('buyMine7');
    const clickButtonImage = clickButton.querySelector('img');


    clickButton.addEventListener('click', handleClick);
    buyElementButton.addEventListener('click', buyMine);
    buyBonusButton.addEventListener('click', buyMineur);
    buyMine2Button.addEventListener('click', buyMine2);
    buyMine3Button.addEventListener('click', buyMine3);
    buyMine4Button.addEventListener('click', buyMine4);
    buyMine5Button.addEventListener('click', buyMine5);
    buyMine6Button.addEventListener('click', buyMine6);
    buyMine7Button.addEventListener('click', buyMine7);

    function handleClick() {
        points += clickValue;
        clicksInLastMinute++;
        updatePointsDisplay();
        updateClicksPerMinuteDisplay();
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
    function buyMine2() {
        if (points >= 20) {
            points -= 20;
            clickValue += 2;
            updatePointsDisplay();
            console.log("Nouvelle valeur de clickValue :", clickValue);
        } else {
            alert('Pas assez de points!');
        }
    }
    
    function buyMine3() {
        if (points >= 30) {
            points -= 30;
            clickValue += 3;
            updatePointsDisplay();
            console.log("Nouvelle valeur de clickValue :", clickValue);
        } else {
            alert('Pas assez de points!');
        }
    }
    
    function buyMine4() {
        if (points >= 40) {
            points -= 40;
            clickValue += 4;
            updatePointsDisplay();
            console.log("Nouvelle valeur de clickValue :", clickValue);
        } else {
            alert('Pas assez de points!');
        }
    }
    function buyMine5() {
        if (points >= 40) {
            points -= 40;
            clickValue += 5;
            updatePointsDisplay();
            console.log("Nouvelle valeur de clickValue :", clickValue);
        } else {
            alert('Pas assez de points!');
        }
    }
    function buyMine6() {
        if (points >= 40) {
            points -= 40;
            clickValue += 6;
            updatePointsDisplay();
            console.log("Nouvelle valeur de clickValue :", clickValue);
        } else {
            alert('Pas assez de points!');
        }
    }   
     function buyMine4() {
        if (points >= 40) {
            points -= 40;
            clickValue += 7;
            updatePointsDisplay();
            console.log("Nouvelle valeur de clickValue :", clickValue);
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

    function updateClicksPerMinuteDisplay() {
        document.getElementById('clicksPerMinute').innerText = clicksPerMinute;
    }

    function resetClicksInLastMinute() {
        clicksPerMinute = clicksInLastMinute;
        clicksInLastMinute = 0;
        updateClicksPerMinuteDisplay();
    }
    clickButton.addEventListener('mousedown', function() {
        clickButtonImage.src = 'Assets/Pioche_en_diamant (1).webp';
    });

    clickButton.addEventListener('mouseup', function() {
        clickButtonImage.src = 'Assets/Pioche_en_diamant.webp';
    });

    minuteTimer = setInterval(resetClicksInLastMinute, 60000);

    updateClicksPerMinuteDisplay();
});
