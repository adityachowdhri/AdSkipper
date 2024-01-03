import { getCurrentTab } from "./currentTab.js";



document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getCurrentTab();
  const queryParameters = activeTab.url.split("?")[1];
  const urlParameters = new URLSearchParams(queryParameters);

  const currentVideo = urlParameters.get("v");
  
  if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = '<div class="title">Get Skipping</div>';
  } else {
    const container = document.getElementsByClassName("container")[0];

    container.innerHTML = '<div class="title">This is not a YouTube Ad!</div>';
  }
});
