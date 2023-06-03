(function() {
    'use strict';

    function createButton() {
        const button = document.createElement('button');
        button.innerText = 'Plugins';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '9999';
        button.addEventListener('click', () => {
            const settingsButton = document.querySelector('[aria-label="User Settings"]');
            if (settingsButton) {
                settingsButton.click();
                setTimeout(() => {
                    const betterDiscordButton = document.querySelector('[aria-label="BetterDiscord"]');
                    if (betterDiscordButton) {
                        betterDiscordButton.click();
                        setTimeout(() => {
                            const pluginsButton = document.querySelector('[aria-label="Plugins"]');
                            if (pluginsButton) {
                                pluginsButton.click();
                            }
                        }, 500);
                    }
                }, 500);
            }
        });
        document.body.appendChild(button);
    }

    // Wait for Discord to fully load before adding the button
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
