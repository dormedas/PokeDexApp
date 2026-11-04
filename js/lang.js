//import data from '/locales/en.js';
//console.log(data);

const language = '/locales/es.js';

let data = await import(language);
//console.log(data);

function retranslate() {
    for (var key in data.default) {
        var i18nTags = [...document.querySelectorAll(`[i18n="${key}"]`)];
        //console.log(i18nTags);
        if (i18nTags.length == 0)
            continue;
        for (var tag of i18nTags) {
            //console.log(tag);
            tag.innerText = data.default[key];
        }
    }
}

window.retranslate = retranslate;

retranslate();