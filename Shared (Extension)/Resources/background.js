browser.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
      console.log(tab);
      if (tab.status == "complete") {
          if (tab.url == "https://www.facebook.com/") {
              browser.tabs.sendMessage( tabId, {
                  message: 'block',
              });
          } else if (tab.url == "https://www.youtube.com/") {
              console.log('primary');
              browser.tabs.sendMessage( tabId, {
                  message: 'primary',
              });
          } else if (tab.url.includes("https://www.youtube.com/")) {
              console.log('secondary');
              browser.tabs.sendMessage( tabId, {
                  message: 'secondary',
              });
          }
      }
  }
);
