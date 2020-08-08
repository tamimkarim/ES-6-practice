const ages =[12, 34, 13, 89, 43];
const ages2 =[51,56,32,12,70];
const allages = ages.concat(ages2);
const allAges2 = [...ages, ...ages2,5];
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 470;

const maximum = Math.max(business, minister, sochib);
console.log(maximum);