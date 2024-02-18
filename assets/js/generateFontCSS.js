const fs = require('fs');

const list = [
  "Noto_Sans/static/NotoSans_ExtraCondensed-Thin.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-ExtraLight.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-Light.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-Regular.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-Medium.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-SemiBold.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-Bold.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-ExtraBold.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-Black.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Thin.ttf",
  "Noto_Sans/static/NotoSans_Condensed-ExtraLight.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Light.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Regular.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Medium.ttf",
  "Noto_Sans/static/NotoSans_Condensed-SemiBold.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Bold.ttf",
  "Noto_Sans/static/NotoSans_Condensed-ExtraBold.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Black.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Thin.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-ExtraLight.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Light.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Regular.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Medium.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-SemiBold.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Bold.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-ExtraBold.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Black.ttf",
  "Noto_Sans/static/NotoSans-Thin.ttf",
  "Noto_Sans/static/NotoSans-ExtraLight.ttf",
  "Noto_Sans/static/NotoSans-Light.ttf",
  "Noto_Sans/static/NotoSans-Regular.ttf",
  "Noto_Sans/static/NotoSans-Medium.ttf",
  "Noto_Sans/static/NotoSans-SemiBold.ttf",
  "Noto_Sans/static/NotoSans-Bold.ttf",
  "Noto_Sans/static/NotoSans-ExtraBold.ttf",
  "Noto_Sans/static/NotoSans-Black.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-ThinItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-ExtraLightItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-LightItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-Italic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-MediumItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-SemiBoldItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-BoldItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-ExtraBoldItalic.ttf",
  "Noto_Sans/static/NotoSans_ExtraCondensed-BlackItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-ThinItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-ExtraLightItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-LightItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-Italic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-MediumItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-SemiBoldItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-BoldItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-ExtraBoldItalic.ttf",
  "Noto_Sans/static/NotoSans_Condensed-BlackItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-ThinItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-ExtraLightItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-LightItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-Italic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-MediumItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-SemiBoldItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-BoldItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-ExtraBoldItalic.ttf",
  "Noto_Sans/static/NotoSans_SemiCondensed-BlackItalic.ttf",
  "Noto_Sans/static/NotoSans-ThinItalic.ttf",
  "Noto_Sans/static/NotoSans-ExtraLightItalic.ttf",
  "Noto_Sans/static/NotoSans-LightItalic.ttf",
  "Noto_Sans/static/NotoSans-Italic.ttf",
  "Noto_Sans/static/NotoSans-MediumItalic.ttf",
  "Noto_Sans/static/NotoSans-SemiBoldItalic.ttf",
  "Noto_Sans/static/NotoSans-BoldItalic.ttf",
  "Noto_Sans/static/NotoSans-ExtraBoldItalic.ttf",
  "Noto_Sans/static/NotoSans-BlackItalic.ttf",
];

const mapping = {
    "Thin" : 100,
    "ExtraLight" : 200,
    "Light" : 300,
    "Regular" : 400,
    "Medium" : 500,
    "SemiBold" : 600,
    "Bold" : 700,
    "ExtraBold" : 800,
    "Black" : 900,
}

function getFontWeight(str) {
    const matches = str.match(/(Thin|ExtraLight|Light|Regular|Medium|SemiBold|Bold|ExtraBold|Black)(?:Italic)?$/);
    
    if (matches && matches[1] in mapping) {
        return mapping[matches[1]];
    } else {
        return null;
    }
}

const filePath = '../css/NotoSans.css';

let text = '';

for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const fontName = element.replace(/Noto_Sans\/static\/NotoSans|\.ttf/g, '').slice(1);;
    const generated = `
    @font-face {
        font-family: "NotoSans${fontName}";
        src: url("../fonts/${element}") format("truetype");
        font-weight: ${getFontWeight(fontName)};
    }
    `;

    text += generated;
}

fs.writeFileSync(filePath, text, 'utf-8');

console.log('DONE');