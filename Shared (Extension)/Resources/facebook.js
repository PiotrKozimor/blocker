function removeMain() {
    document.querySelectorAll('div[role="main"], div[role="complementary"], a[aria-label="Facebook"]').forEach((item) => {
        item.style.display = 'none';
    });
}

browser.runtime.onMessage.addListener((message) => {
//    console.log(message);
    removeMain();
});

//removeMain();
