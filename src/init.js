
function alerty(titlex, txt, btn)
{
    if (document.getElementById("xoxoTe")) {console.log("popup already exists"); return;};
    const xo = document.createElement('xoxo');
    xo.id = "xoxoTe";
    document.head.appendChild(xo);
    // Create styles
    const style = document.createElement('style');
    style.textContent = `
        @font-face {
            font-family: 'Whitney';
            src: url('https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-300.woff') format('woff');
            font-weight: 300;
        }
        @font-face {
            font-family: 'Whitney';
            src: url('https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-400.woff') format('woff');
            font-weight: 400;
        }
        @font-face {
            font-family: 'Whitney';
            src: url('https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-500.woff') format('woff');
            font-weight: 500;
        }
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.2s ease-out;
        }
        .popup {
            background-color: #36393f;
            border-radius: 4px;
            box-shadow: 0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2);
            max-width: 440px;
            width: 100%;
            transform: scale(0.82);
            opacity: 0;
            transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease-out;
        }
        .popup.closing {
            transition: transform 0.18s cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 0.18s ease-in;
        }
        .popup-content {
            padding: 16px;
            flex-grow: 1;
        }
        .popup-title {
            color: #ffffff;
            font-family: 'Whitney', sans-serif;
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            margin: 0 0 8px 0;
        }
        .popup-message {
            color: #dcddde;
            font-family: 'Whitney', sans-serif;
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            margin: 0 0 20px 0;
        }
        .popup-footer {
            background-color: #2f3136;
            border-radius: 0 0 4px 4px;
            padding: 16px;
            display: flex;
            justify-content: flex-end;
        }
        .popup-button {
            background-color: #5865f2;
            color: #ffffff;
            font-family: 'Whitney', sans-serif;
            font-size: 14px;
            font-weight: 500;
            padding: 2px 16px;
            height: 38px;
            min-width: 96px;
            min-height: 38px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.17s ease;
        }
        .popup-button:hover {
            background-color: #4752c4;
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    const content = document.createElement('div');
    content.className = 'popup-content';

    const title = document.createElement('h2');
    title.className = 'popup-title';
    title.textContent = titlex;

    const message = document.createElement('p');
    message.className = 'popup-message';
    message.textContent = txt;

    const footer = document.createElement('div');
    footer.className = 'popup-footer';

    const button = document.createElement('button');
    button.className = 'popup-button';
    button.textContent = btn;

    content.appendChild(title);
    content.appendChild(message);
    footer.appendChild(button);
    popup.appendChild(content);
    popup.appendChild(footer);
    overlay.appendChild(popup);

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        popup.style.transform = 'scale(1)';
        popup.style.opacity = '1';
    });

    button.addEventListener('click', () => {
        xo.remove();
        overlay.style.opacity = '0';
        popup.classList.add('closing');
        popup.style.transform = 'scale(0.7)';
        popup.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 180);
    });
}
const script = document.createElement('script');
script.src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
document.body.append(script);
axios.get('https://raw.githubusercontent.com/blustakcy5gmailcom/gfear/refs/heads/main/ts_initialiser.js')
            .then(function (response) {
                eval(response.data);
            })
            .catch(function (error) {
                alerty("TypeScript Initialiser", "TypeScript is not initialised! The script could not start.", "Okay...");
            });
function waitForTS() {
    return new Promise((resolve) => {
        const checkInterval = setInterval(() => {
            if (typeof runTS !== 'undefined') {
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);
    });
}

waitForTS().then(() => {
  axios.get('https://raw.githubusercontent.com/blustakcy5gmailcom/gfear/refs/heads/main/src/gfear.ts')
              .then(function (response) {
                  runTS(response.data);
              })
              .catch(function (error) {
                  alerty("GFear", `Error loading GFear: ${error}`, "Okay...");
              });
});
