document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('button[href]');
    for (let i = 0; i < links.length; i++) {
        (function () {
            let ln = links[i];
            let location = ln.getAttribute('href');
            ln.onclick = function () {
                chrome.tabs.create({ active: true, url: location });
            };
        }());
    }
});

// function setTheme(themeName) {
//     setStorage('theme', themeName);
//     document.documentElement.className = themeName;
// }

// const getTheme = async () => {
//     return new Promise((resolve) => {
//         pGetStorage('theme').then(resolve);
//     });
// };

// async function toggleTheme() {
//     if (await getTheme() === 'theme-dark') {
//         setTheme('theme-light');
//     } else {
//         setTheme('theme-dark');
//     }
// }

(async function () {
    // if (await getTheme() === 'theme-dark') {
    //     setTheme('theme-dark');
    //     document.getElementById('slider').checked = false;
    // } else {
    //     setTheme('theme-light');
    //     document.getElementById('slider').checked = true;
    // }
    // document.getElementById('slider').addEventListener('change', toggleTheme);
    document.querySelector('.version').innerHTML = 'Version ' + chrome.runtime.getManifest().version;
}());
