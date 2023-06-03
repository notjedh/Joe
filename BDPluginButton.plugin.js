/**
 * @name         BDPluginButton
 * @description  Adds a simple button that leads straight to the BetterDiscord plugins settings page
 * @version      1.0.0
 * @author       NotJedH
 * @source       https://raw.githubusercontent.com/notjedh/myBDRepo/main/BDPluginButton.plugin.js
 */

(() => {
    const buttonId = 'bd-plugin-button';

    function createButton() {
        const settingsButton = document.querySelector('[aria-label="User Settings"]');
        if (!settingsButton) return;

        const pluginsButton = document.createElement('button');
        pluginsButton.id = buttonId;
        pluginsButton.innerText = 'BD';
        pluginsButton.classList.add('bd-button');
        pluginsButton.addEventListener('click', () => {
            BdApi.showPlugins();
        });

        const settingsGroup = settingsButton.parentElement;
        if (!settingsGroup) return;

        settingsGroup.appendChild(pluginsButton);
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
