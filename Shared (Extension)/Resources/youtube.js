function noPrimary() {
    console.log("noPrimary");
    document.querySelectorAll('div[id="primary"]').forEach((item) => {
        item.style.display = 'none';
    });
}

function restorePrimary() {
    console.log("restorePrimary");
    document.querySelectorAll('div[id="primary"]').forEach((item) => {
        item.style.display = 'block';
    });
}

function removeSearchBox() {
    console.log("searchBox");
    document.querySelectorAll('[role=search]').forEach((item) => {
        item.style.display = 'none';
    });
}

function noSecondary() {
    console.log("secondary");
    document.querySelectorAll('div[id="secondary"]').forEach((item) => {
        item.style.display = 'none';
    });
}

browser.runtime.onMessage.addListener((message) => {
    switch (message.message) {
        case "primary":
            noPrimary();
            removeSearchBox();
            break;
        case "secondary":
            noSecondary();
            restorePrimary();
            removeSearchBox();
            break;
    }
});

noSecondary();
