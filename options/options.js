document.addEventListener('DOMContentLoaded', async () => {
    const contextMenus = document.querySelector('#contextmenu-permission');
    const onAllow = () => {
        contextMenus.classList.add("disabled");
        contextMenus.textContent = 'Context Menus Allowed';
    };
    if (await chrome.permissions.contains({
        permissions: ['contextMenus']
    })) {
        onAllow();
    } else {
        contextMenus.addEventListener('click', () => {
            chrome.permissions.request({
                permissions: ['contextMenus']
            }).then(onAllow);
        });
    }
});