(() => {
    let youtubeLeftControls, youtubePlayer;

    const loadButton = () => {
        const skipBtnExists = document.getElementsByClassName("bookmark-btn")[0];

        const adPreviewContainer = document.querySelector('.ytp-ad-preview-container');

        if (!skipBtnExists){
            const skipBtn = document.createElement("img");
            skipBtn.src = chrome.runtime.getURL("assets/skip.png");
            skipBtn.addEventListener("click", onSkip);
            skipBtn.className = "ytp-button " + "bookmark-btn";
            skipBtn.title = "Skip Ad";
            
            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName('video-stream')[0];
            
            youtubeLeftControls.appendChild(skipBtn);
        }

    }

    const onSkip = () => {
        youtubePlayer.currentTime = 300;
    }

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
        if (type === "VIDEO") {
          loadButton();
        }

      });

      loadButton();



})();