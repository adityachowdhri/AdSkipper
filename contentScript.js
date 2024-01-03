(() => {
    let youtubeLeftControls, youtubePlayer, counter;

    const loadButton = () => {
        const skipBtnExists = document.getElementsByClassName("bookmark-btn")[0];
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
        if (!skipBtnExists.offsetParent){
            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubeLeftControls.appendChild(skipBtnExists);   
        }
        interval = setTimeout(loadButton, 500);
    }

    const onSkip = () => {
        youtubePlayer.currentTime = 43200;
        let skipButton = document.getElementsByClassName('ytp-ad-skip-button-modern')[0]
        skipButton.click();
        loadButton();


        
    }
    // const removeButton = () => {
    //     const adPreviewContainer = document.querySelector('.ytp-ad-preview-container');
    //     const skipBtn = document.getElementsByClassName("bookmark-btn")[0];
    //     if (!adPreviewContainer){
    //         skipBtn.remove();
    //         clearInterval(interval);
    //     }


    // }

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
        if (type === "VIDEO") {
            setTimeout(loadButton, 300);
        }

      });
    setTimeout(loadButton, 300);
      



})();
