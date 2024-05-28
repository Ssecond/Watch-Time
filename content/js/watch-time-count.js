const COUNT_BUTTON_ID = 'start-button';
const RESULT_CONTAINER_ID = 'result';
const MAX_SPEEDUP = 2;
const SPEED_STEP = 0.5;

document.addEventListener('DOMContentLoaded', function () {
    let myButton = document.getElementById(COUNT_BUTTON_ID);
    myButton.addEventListener('click', runCounting);
});

function secondsToString(seconds) {
    let message = '';
    message += (seconds).toFixed(2) + ' секунд.<br/>';
    message += (seconds / 60).toFixed(2) + ' минут.<br/>';
    message += (seconds / 3600).toFixed(2) + ' часов.<br/>';
    message += (seconds / 3600 / 24).toFixed(2) + ' суток.<br/>';
    return message;
}
function countWatchTime(resultContainer) {
    let timeElements = document.getElementsByClassName('badge-shape-wiz__text');
    let summ = 0;
    for (let i = 0; i < timeElements.length; i++) {
        let times = timeElements[i].innerHTML.split(':');
        if (times.length == 3) {
            summ += Number(times[0]) * 3600 + Number(times[1]) * 60 + Number(times[2]);
        }
        else if (times.length == 2) {
            summ += Number(times[0]) * 60 + Number(times[1]);
        }
        else {
            console.log('--------------------');
            console.log('Попалось что-то не то.');
            console.log(timeElements[i].innerHTML);
            console.log('--------------------');
        }
    }
    return { timeInSeconds: summ, videosCount: timeElements.length };
}

function runCounting() {
    const resultOut = document.getElementById(RESULT_CONTAINER_ID);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: countWatchTime,
            args: [resultOut]
        }, (result) => {
            const summ = result[0].result.timeInSeconds;
            const videosCount = result[0].result.videosCount;
            resultOut.innerHTML = '';

            const videoCounterField = document.createElement('h3');
            videoCounterField.textContent = `Видео: ${videosCount}`;
            resultOut.appendChild(videoCounterField);

            for (let speed = 1; speed <= MAX_SPEEDUP; speed += SPEED_STEP) {
                const speedTitle = document.createElement('h4');
                speedTitle.textContent = `В скорости x${speed}`

                const timesContainer = document.createElement('div');
                timesContainer.innerHTML = secondsToString(summ / speed);

                resultOut.appendChild(speedTitle);
                resultOut.appendChild(timesContainer);
            }
        });
    });

}