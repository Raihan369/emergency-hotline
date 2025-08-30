// State 
let hearts = 0;
let coins = 100;       
let copies = 0;

//  Data 
const services = [
  { id: 1, icon: "🛡️", name: "জাতীয় জরুরি সেবা", en: "National Emergency Number", number: "999", category: "All" },
  { id: 2, icon: "👮",  name: "পুলিশ হেল্পলাইন",   en: "Police Helpline Number",   number: "999", category: "Police" },
  { id: 3, icon: "🚒",  name: "ফায়ার সার্ভিস",     en: "Fire Service Number",      number: "999", category: "Fire" },
  { id: 4, icon: "🚑",  name: "অ্যাম্বুলেন্স",     en: "Ambulance Service",        number: "1994-999999", category: "Health" },
  { id: 5, icon: "👶",  name: "নারী ও শিশু সহায়তা", en: "Women & Child Helpline",  number: "109", category: "Help" },
  { id: 6, icon: "🏛️", name: "দুর্নীতি দমন",       en: "Anti-Corruption Helpline", number: "106", category: "Govt." },
  { id: 7, icon: "⚡",  name: "বিদ্যুৎ হেল্পলাইন",  en: "Electricity Helpline",     number: "16216", category: "Electricity" },
  { id: 8, icon: "🤝", name: "BRAC হেল্পলাইন",     en: "Brac Helpline",            number: "16445", category: "NGO" },
  { id: 9, icon: "🚆",  name: "রেলওয়ে হেল্পলাইন",  en: "Bangladesh Railway",       number: "163", category: "Travel" },
];

//  DOM refs 
const cardsContainer = document.getElementById("cardsContainer");
const heartsCountEl  = document.getElementById("heartsCount");
const coinsCountEl   = document.getElementById("coinsCount");
const copyCountEl    = document.getElementById("copyCount");
const historyList    = document.getElementById("historyList");
const clearBtn       = document.getElementById("clearHistoryBtn");

