'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////

// const getCountryData=function(country){
// const request=new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();
// console.log(request.responseText);


// request.addEventListener('load',function(){
// let [data]=JSON.parse(this.responseText);
// console.log(data);

// const html=`
//  <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>

// `
// countriesContainer.insertAdjacentHTML('beforeend',html);
// countriesContainer.style.opacity=1;
// })
// }
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
             <img class="country__img" src="${data.flag}" />
             <div class="country__data">
               <h3 class="country__name">${data.name}</h3>
               <h4 class="country__region">${data.region}</h4>
               <p class="country__row"><span>👫</span>${data.population}</p>
               <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
               <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
             </div>
           </article>
      `
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighborn = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     console.log(request.responseText);


//     request.addEventListener('load', function () {
//         let [data] = JSON.parse(this.responseText);
//         console.log(data);

//         /////render country 1
//         renderCountry(data);

//         //get neighborn country 2
//         const [neighborn] = data.borders;
//         if (!neighborn) return;

//         //agex call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/name/${neighborn}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const [data2]=JSON.parse(this.responseText);
//                console.log(data2);
//                renderCountry(data2,'neighbour')

//         })

//     })
// }
// getCountryAndNeighborn('australia');
// getCountryAndNeighborn('usa');



// /////////////////////////////////////////
// setTimeout(()=>{
//     console.log("1");
//     setTimeout(()=>{
//         console.log("2");
//         setTimeout(()=>{
//             console.log("3");

//         },1000)
//     },1000)
// },1000)





// const request=fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);


const getJson = function (url, errorMsg = "something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  })
}

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v2/name/${country}`, 'Country not fount ')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error("no neighbour found");

//       //country 2
//       return getJson(`https://restcountries.com/v2/name/${neighbour}`,'country not found')
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🚨🚨🚨`);
//       renderError(`Something went wrong 🚨🚨🚨 ${err} `);

//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;

//     })

// }

// getCountryData('portugal');

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');






// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position=>console.log(position),
//     //   err=>console.error(err)
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// }



//simple promises
// console.log("Test 1");
// setTimeout(()=>console.log("0 sec timer"),0);
// Promise.resolve("resolve promise").then((res)=>console.log(res)
// )
// Promise.resolve('promise resolve 2').then((res)=>{
//   for(let i=0;i<1000000000;i++){}
//   console.log(res);

// })
// console.log("end");



// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log("lottery draw is happining");
//   setTimeout(()=>{
//     if (Math.random() > 0.5) {
//       resolve("you collect all money");
//     }
//     else {
//       reject(new Error("you lost your money"));
//     }

//   },2000)

// })

// lotteryPromise.then(res=>console.log(res)
// ).catch(err=>{
//   console.log(err)
//   })



// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   })
// }
// wait(1).then(() => {
//   console.log("1 sec timmer completed..")
//   return wait(2)
// }).then(() => {
//    console.log("2 sec timmer");
//   return wait(3)
// }).then(() => console.log("3 sec timmer")
// )


// Promise.resolve("abc").then((res)=>console.log(res))
// Promise.reject("xyz").catch(err=>console.error(err));



//////////////////////////////////////
//async-await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}


  // const whereAmI = async function () {
  //   const pos = await getPosition();
  //   const { latitude: lat, longitude: lng } = pos.coords;

  //   //reverse geocoding
  //   const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
  //   const dataGeo = await resGeo.json();
  //   console.log(dataGeo);

  //   //Country data
  //   const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);

  //   const data = await res.json();
  //   console.log(data);
  //   renderCountry(data[0]);

  // }
  // console.log('1 will get the location');

  // let city=whereAmI();
  // console.log(city);

  // whereAmI().then(city=>console.log(`2: ${city}`)
  // ).catch(err=>console.log(`2: ${err.message}`)
  // ).finally(()=>console.log('3 finished getting location..')
  // )

  // (async function(){
  //   try{
  //     const city=await whereAmI();
  //     console.log(`2: ${city}`);

  //   }catch(err){
  //     console.log(`2: ${err.message}`)
  //   }
  //   console.log('finished getting location..')
  // })();


  // const get3Countrys=async function(c1,c2,c3){
  //   try{
  //     // const [data1]=await getJson(`https://restcountries.com/v2/name/${c1}`)

  //     // const [data2]=await getJson(`https://restcountries.com/v2/name/${c2}`)

  //     // const [data3]=await getJson(`https://restcountries.com/v2/name/${c3}`)

  //     // console.log([data1.capital,data2.capital,data3.capital,])


  //     const data=await Promise.all([
  //       getJson(`https://restcountries.com/v2/name/${c1}`),

  //       getJson(`https://restcountries.com/v2/name/${c2}`),

  //       getJson(`https://restcountries.com/v2/name/${c3}`)

  //     ])
  //     console.log(data.map(d=>d[0].capital));

  //   }catch(err){
  //     console.error(err);
  //   }
  // }
  // get3Countrys('portugal','canada','tanzania');


// try{
//   const x=10;
//   x=12;
// }catch(err){
//   console.error(err);
// }

  ///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v2/name/italy`),
    getJson(`https://restcountries.com/v2/name/egypt`),
    getJson(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.com/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
