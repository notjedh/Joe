/**
 * @name         BDPluginButton
 * @description  Adds a simple button that leads straight to the BetterDiscord plugins settings page
 * @version      1.0.0
 * @author       NotJedH
 * @source       https://raw.githubusercontent.com/notjedh/myBDRepo/main/BDPluginButton.plugin.js
 */
// ==UserScript==
// @name         BDPluginButton
// @description  Adds a simple button that leads straight to the BetterDiscord plugins settings page
// @version      1.0.0
// @author       NotJedH
// @source       https://raw.githubusercontent.com/notjedh/myBDRepo/main/BDPluginButton.plugin.js
// ==/UserScript==

(() => {
    function createButton() {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.bottom = '20px';
        buttonContainer.style.right = '20px';
        buttonContainer.style.zIndex = '9999';

        const button = document.createElement('button');
        button.innerText = 'BD';
        button.style.fontFamily = 'discord';
        button.style.fontSize = '14px';
        button.style.width = '25px';
        button.style.height = '25px';
        button.style.borderRadius = '50%';
        button.style.backgroundColor = '#7289da';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';

        button.addEventListener('click', () => {
            const settingsButton = document.querySelector('[aria-label="User Settings"]');
            if (settingsButton) {
                settingsButton.click();
                const observer = new MutationObserver(() => {
                    const betterDiscordButton = document.querySelector('[aria-label="BetterDiscord"]');
                    if (betterDiscordButton) {
                        betterDiscordButton.click();
                        observer.disconnect();
                    }
                });
                observer.observe(document.body, { childList: true, subtree: true });
            }
        });

        buttonContainer.appendChild(button);

        const appMount = document.querySelector('#app-mount');
        if (appMount) {
            appMount.appendChild(buttonContainer);
        }
    }

    function waitForDiscord() {
        const settingsButton = document.querySelector('[aria-label="User Settings"]');
        if (settingsButton) {
            createButton();
        } else {
            setTimeout(waitForDiscord, 1000);
        }
    }

    waitForDiscord();
})();

