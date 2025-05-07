(async function OpenWindow() {
    // This works
    //await nw.Window.open('https://google.com');

    // This crashes
    await nw.Window.open('https://cloudflare.bot-check.ovh/interactive.html');
})();