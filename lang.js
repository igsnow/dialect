$(function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**";
    document.getElementsByTagName('head')[0].appendChild(script);

    let value = sessionStorage.getItem("language");
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            if (value === "1") {
                try {
                    Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    function onProgress(value) {
    }

    function onError(error) {
    }

    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }

    function onRestoreOriginal() {
    }
});

function translate() {
    let value = sessionStorage.getItem("language");
    if (value === "1") {
        sessionStorage.setItem("language", "0");
    } else {
        sessionStorage.setItem("language", "1");
    }
    window.location.reload();
}