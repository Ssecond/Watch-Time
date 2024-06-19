<p align="center">
  <img src="https://github.com/Ssecond/Watch-Time/blob/main/icons/default.png?raw=true" width="64" height="64"/>
</p>

<h1 align="center">Watch-Time</h1>

*Watch-Time is a Chromium based web browser extension that counts the time it takes to watch a YouTube playlist.*

### Supported by
*All Chromium based such as **Google Chrome, Microsoft Edge, Yandex** etc.*

***Mozilla Firefox** are not supported yet.*

### Installation Instructions
1. Download this repo as a [zip file from GitHub](https://github.com/Ssecond/Watch-Time/archive/refs/heads/main.zip).
1. Unzip the file and you should have a folder named `Watch-Time`.
1. In the browser go to the extensions page (`chrome://extensions` (for Microsoft Edge you might need to go to `edge://extensions` but the link before should work fine)).
1. Enable Developer Mode.
1. Drag the `Watch-Time` folder anywhere on the page to import it (do not delete the folder afterwards).

**Notes**
* Every time you open Chrome it may warn you about running extensions in developer mode, just click "&#10005;" to keep the extension enabled.

### How to use
1. Open a Youtube playlist.
1. Scroll down to the bottom until you reach the last video*.
1. Open the extension tab.
1. Click Count.

\* - If not done, the extension might give you invalid time since it only counts the videos you have loaded on the page.

### Settings
There are two things that can be changed, and they can be found at the top of `content\js\watch-time-count.js`:
```js
const MAX_SPEEDUP = 2;
const SPEED_STEP = 0.5;
```
So by default it counts 3 time periods as if you were watching at speed: 1x, 1.5x, 2x.