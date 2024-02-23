let word = document.querySelector('#word')
let meanDiv=document.querySelector("#meanDiv")
let dict=document.querySelector('#dic')
let meaning=document.createElement('h1')
meanDiv.append(meaning)
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
let countryselect=document.createElement('select')
dict.append(countryselect)
country_list.map((d)=>{
let countryoption=document.createElement('option')
countryoption.innerHTML=d
countryoption.setAttribute("vallue",d)
countryselect.append(countryoption)
})
let check=async()=>{
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    let countryData={
        "Afghanistan": [
          "ps",
          "uz",
          "tk"
        ],
        "Albania": [
          "sq"
        ],
        "Algeria": [
          "ar"
        ],
        "Andorra": [
          "ca"
        ],
        "Angola": [
          "pt"
        ],
        "Antigua and Barbuda": [
          "en"
        ],
        "Argentina": [
          "es"
        ],
        "Armenia": [
          "hy"
        ],
        "Australia": [
          "en"
        ],
        "Austria": [
          "de"
        ],
        "Azerbaijan": [
          "az"
        ],
        "Bahamas": [
          "en"
        ],
        "Bahrain": [
          "ar"
        ],
        "Bangladesh": [
          "bn"
        ],
        "Barbados": [
          "en"
        ],
        "Belarus": [
          "be",
          "ru"
        ],
        "Belgium": [
          "nl",
          "fr",
          "de"
        ],
        "Belize": [
          "en"
        ],
        "Benin": [
          "fr"
        ],
        "Bhutan": [
          "dz"
        ],
        "Bolivia": [
          "es"
        ],
        "Bosnia and Herzegovina": [
          "bs",
          "hr",
          "sr"
        ],
        "Botswana": [
          "en"
        ],
        "Brazil": [
          "pt"
        ],
        "Brunei": [
          "ms"
        ],
        "Bulgaria": [
          "bg"
        ],
        "Burkina Faso": [
          "fr"
        ],
        "Burundi": [
          "fr"
        ],
        "Cabo Verde": [
          "pt"
        ],
        "Cambodia": [
          "km"
        ],
        "Cameroon": [
          "fr",
          "en"
        ],
        "Canada": [
          "en",
          "fr"
        ],
        "Central African Republic": [
          "fr"
        ],
        "Chad": [
          "fr",
          "ar"
        ],
        "Chile": [
          "es"
        ],
        "China": [
          "zh"
        ],
        "Colombia": [
          "es"
        ],
        "Comoros": [
          "ar",
          "fr"
        ],
        "Congo (Congo-Brazzaville)": [
          "fr"
        ],
        "Costa Rica": [
          "es"
        ],
        "Croatia": [
          "hr"
        ],
        "Cuba": [
          "es"
        ],
        "Cyprus": [
          "el",
          "tr"
        ],
        "Czechia (Czech Republic)": [
          "cs"
        ],
        "Democratic Republic of the Congo": [
          "fr"
        ],
        "Denmark": [
          "da"
        ],
        "Djibouti": [
          "fr",
          "ar"
        ],
        "Dominica": [
          "en"
        ],
        "Dominican Republic": [
          "es"
        ],
        "Ecuador": [
          "es"
        ],
        "Egypt": [
          "ar"
        ],
        "El Salvador": [
          "es"
        ],
        "Equatorial Guinea": [
          "es",
          "fr"
        ],
        "Eritrea": [
          "ti",
          "ar",
          "en"
        ],
        "Estonia": [
          "et"
        ],
        "Eswatini": [
          "en",
          "ss"
        ],
        "Ethiopia": [
          "am",
          "en",
          "om"
        ],
        "Fiji": [
          "en",
          "fj"
        ],
        "Finland": [
          "fi",
          "sv"
        ],
        "France": [
          "fr"
        ],
        "Gabon": [
          "fr"
        ],
        "Gambia": [
          "en"
        ],
        "Georgia": [
          "ka"
        ],
        "Germany": [
          "de"
        ],
        "Ghana": [
          "en"
        ],
        "Greece": [
          "el"
        ],
        "Grenada": [
          "en"
        ],
        "Guatemala": [
          "es"
        ],
        "Guinea": [
          "fr"
        ],
        "Guinea-Bissau": [
          "pt"
        ],
        "Guyana": [
          "en"
        ],
        "Haiti": [
          "fr",
          "ht"
        ],
        "Holy See": [
          "it",
          "la",
          "fr"
        ],
        "Honduras": [
          "es"
        ],
        "Hungary": [
          "hu"
        ],
        "Iceland": [
          "is"
        ],
        "India": [
          "hi",
          "en"
        ],
        "Indonesia": [
          "id"
        ],
        "Iran": [
          "fa"
        ],
        "Iraq": [
          "ar",
          "ku"
        ],
        "Ireland": [
          "ga",
          "en"
        ],
        "Israel": [
          "he",
          "ar"
        ],
        "Italy": [
          "it"
        ],
        "Jamaica": [
          "en"
        ],
        "Japan": [
          "ja"
        ],
        "Jordan": [
          "ar"
        ],
        "Kazakhstan": [
          "kk",
          "ru"
        ],
        "Kenya": [
          "en",
          "sw"
        ],
        "Kiribati": [
          "en"
        ],
        "Kuwait": [
          "ar"
        ],
        "Kyrgyzstan": [
          "ky",
          "ru"
        ],
        "Laos": [
          "lo"
        ],
        "Latvia": [
          "lv"
        ],
        "Lebanon": [
          "ar",
          "fr"
        ],
        "Lesotho": [
          "en",
          "st"
        ],
        "Liberia": [
          "en"
        ],
        "Libya": [
          "ar"
        ],
        "Liechtenstein": [
          "de"
        ],
        "Lithuania": [
          "lt"
        ],
        "Luxembourg": [
          "lb",
          "de",
          "fr"
        ],
        "Madagascar": [
          "mg",
          "fr"
        ],
        "Malawi": [
          "en",
          "ny"
        ],
        "Malaysia": [
          "ms"
        ],
        "Maldives": [
          "dv"
        ],
        "Mali": [
          "fr"
        ],
        "Malta": [
          "mt",
          "en"
        ],
        "Marshall Islands": [
          "mh",
          "en"
        ],
        "Mauritania": [
          "ar",
          "fr"
        ],
        "Mauritius": [
          "en"
        ],
        "Mexico": [
          "es"
        ],
        "Micronesia": [
          "en"
        ],
        "Moldova": [
          "ro",
          "ru"
        ],
        "Monaco": [
          "fr"
        ],
        "Mongolia": [
          "mn"
        ],
        "Montenegro": [
          "sr",
          "hu",
          "bs",
          "sq",
          "hr",
          "rom"
        ],
        "Morocco": [
          "ar",
          "fr"
        ],
        "Mozambique": [
          "pt"
        ],
        "Myanmar (formerly Burma)": [
          "my"
        ],
        "Namibia": [
          "en",
          "af"
        ],
        "Nauru": [
          "na"
        ],
        "Nepal": [
          "ne"
        ],
        "Netherlands": [
          "nl"
        ],
        "New Zealand": [
          "en",
          "mi"
        ],
        "Nicaragua": [
          "es"
        ],
        "Niger": [
          "fr"
        ],
        "Nigeria": [
          "en"
        ],
        "North Korea": [
          "ko"
        ],
        "North Macedonia": [
          "mk"
        ],
        "Norway": [
          "no"
        ],
        "Oman": [
          "ar"
        ],
        "Pakistan": [
          "ur",
          "en"
        ],
        "Palau": [
          "en"
        ],
        "Palestine State": [
          "ar"
        ],
        "Panama": [
          "es"
        ],
        "Papua New Guinea": [
          "en",
          "ho"
        ],
        "Paraguay": [
          "es",
          "gn"
        ],
        "Peru": [
          "es"
        ],
        "Philippines": [
          "tl",
          "en"
        ],
        "Poland": [
          "pl"
        ],
        "Portugal": [
          "pt"
        ],
        "Qatar": [
          "ar"
        ],
        "Romania": [
          "ro"
        ],
        "Russia": [
          "ru"
        ],
        "Rwanda": [
          "rw",
          "en",
          "fr"
        ],
        "Saint Kitts and Nevis": [
          "en"
        ],
        "Saint Lucia": [
          "en"
        ],
        "Saint Vincent and the Grenadines": [
          "en"
        ],
        "Samoa": [
          "sm",
          "en"
        ],
        "San Marino": [
          "it"
        ],
        "Sao Tome and Principe": [
          "pt"
        ],
        "Saudi Arabia": [
          "ar"
        ],
        "Senegal": [
          "fr"
        ],
        "Serbia": [
          "sr"
        ],
        "Seychelles": [
          "fr",
          "en"
        ],
        "Sierra Leone": [
          "en"
        ],
        "Singapore": [
          "ms",
          "ta",
          "en"
        ],
        "Slovakia": [
          "sk"
        ],
        "Slovenia": [
          "sl"
        ],
        "Solomon Islands": [
          "en"
        ],
        "Somalia": [
          "so",
          "ar"
        ],
        "South Africa": [
          "zu",
          "xh",
          "af",
          "en",
          "tn",
          "st",
          "ts",
          "ss",
          "ve",
          "nr"
        ],
        "South Korea": [
          "ko"
        ],
        "South Sudan": [
          "en",
          "ar"
        ],
        "Spain": [
          "es"
        ],
        "Sri Lanka": [
          "si",
          "ta"
        ],
        "Sudan": [
          "ar",
          "en"
        ],
        "Suriname": [
          "nl"
        ],
        "Sweden": [
          "sv"
        ],
        "Switzerland": [
          "de",
          "fr",
          "it"
        ],
        "Syria": [
          "ar"
        ],
        "Tajikistan": [
          "tg",
          "ru"
        ],
        "Tanzania": [
          "sw",
          "en"
        ],
        "Thailand": [
          "th"
        ],
        "Timor-Leste": [
          "pt",
          "tet"
        ],
        "Togo": [
          "fr"
        ],
        "Tonga": [
          "to",
          "en"
        ],
        "Trinidad and Tobago": [
          "en"
        ],
        "Tunisia": [
          "ar",
          "fr"
        ],
        "Turkey": [
          "tr"
        ],
        "Turkmenistan": [
          "tk",
          "ru"
        ],
        "Tuvalu": [
          "tv",
          "en"
        ],
        "Uganda": [
          "en",
          "sw"
        ],
        "Ukraine": [
          "uk"
        ],
        "United Arab Emirates": [
          "ar"
        ],
        "United Kingdom": [
          "en"
        ],
        "United States of America": [
          "en"
        ],
        "Uruguay": [
          "es"
        ],
        "Uzbekistan": [
          "uz",
          "ru"
        ],
        "Vanuatu": [
          "bi",
          "en",
          "fr"
        ],
        "Venezuela": [
          "es"
        ],
        "Vietnam": [
          "vi"
        ],
        "Yemen": [
          "ar"
        ],
        "Zambia": [
          "en"
        ],
        "Zimbabwe": [
          "en",
          "sn"
        ]
      };
      let Code;
      for(key in countryData){
        if(countryselect.value===key){
            Code=countryData[key][0]
            break;
        }
      }
console.log(Code)
    const options = {
        method: 'POST',
        headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '18eb7b1b5cmshde40c2990db421ep1f38f4jsndc0720be4a79',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
        q: word.value,
		target: Code,
		source: 'en'
	})
};

try {
    const response = await fetch(url, options);
	const result = await response.json();
    result.data.translations.map((m)=>{
        // meaning is h1 that we created in 4 line
        meaning.innerHTML=m.translatedText
    })
	console.log(result);
} catch (error) {
    console.error(error);
}
}

// let search = async() => {
//     try {
//         let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word.value
//         let response =await fetch(url)
//         let mean=await response.json()
//         console.log(mean)
//         mean[0].meanings.map((m)=>{
//             let parts=document.createElement('h3')
//             parts.innerHTML="<b><i>Parts of speech: </b></i>"+m.partOfSpeech
//             meanDiv.append(parts)
//             let anto=document.createElement('p')
//             anto.innerHTML="<b><i>antonyms: </b></i>"+m.antonyms
//             meanDiv.append(anto)
//             m.definitions.map((d)=>{
//             let def=document.createElement('p')
//             def.innerHTML="<b><i>def: </b></i>"+d.definition
//             meanDiv.append(def)
//             })
//         })
//     } catch (error) {
//       console.log(error.message)
//     }
// }