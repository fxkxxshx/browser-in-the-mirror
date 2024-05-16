chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    })
})

chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.id) return

    const prevState = await chrome.action.getBadgeText({ tabId: tab.id })
    const nextState = prevState === "ON" ? "OFF" : "ON"

    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    })

    const css = "body { transform: scaleX(-1) !important; }";

    if (nextState === "ON") {
        await chrome.scripting.insertCSS({
            css: css,
            target: { tabId: tab.id },
        })
    } else if (nextState === "OFF") {
        await chrome.scripting.removeCSS({
            css: css,
            target: { tabId: tab.id },
        })
    }
})
