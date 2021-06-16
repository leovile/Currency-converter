//global constants
const api = {
  key: '5f9cc9dcf6212493484c',
  baseUrl: 'https://free.currconv.com'
}



const currencyFrom = document.getElementById('currency-from');
const currencyTo1 = document.getElementById('currency-to1');
const currencyTo2 = document.getElementById('currency-to2');
const currencyTo3 = document.getElementById('currency-to3');
const currencyTo4 = document.getElementById('currency-to4');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');
const result4 = document.querySelector('#result4');



const currencyAmount = document.querySelector('#currency-input');
currencyAmount.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    fetchData1(currencyAmount.value);
    fetchData2(currencyAmount.value);
    fetchData3(currencyAmount.value);
    fetchData4(currencyAmount.value);
    console.log(currencyAmount.value);
  }
}

function fetchData1(conversion) {
  fetch(`${api.baseUrl}/api/v7/convert?q=${currencyFrom.value}_${currencyTo1.value}&compact=ultra&apiKey=${api.key}`)
    .then(response => {
      return response.json();
    }).then(displayResult1);
}

function fetchData2() {
  fetch(`${api.baseUrl}/api/v7/convert?q=${currencyFrom.value}_${currencyTo2.value}&compact=ultra&apiKey=${api.key}`)
    .then(response => {
      return response.json();
    }).then(displayResult2);
}

function fetchData3() {
  fetch(`${api.baseUrl}/api/v7/convert?q=${currencyFrom.value}_${currencyTo3.value}&compact=ultra&apiKey=${api.key}`)
    .then(response => {
      return response.json();
    }).then(displayResult3);
}

function fetchData4() {
  fetch(`${api.baseUrl}/api/v7/convert?q=${currencyFrom.value}_${currencyTo4.value}&compact=ultra&apiKey=${api.key}`)
    .then(response => {
      return response.json();
    }).then(displayResult4);
}

function displayResult1 (data) {
  result1.innerText = `${(Object.values(data)*currencyAmount.value).toFixed(2)}`
  document.getElementById("flag1").src = `https://www.countryflags.io/${currencyTo1.value.slice(0, -1)}/flat/64.png`;
}

function displayResult2 (data2) {
  result2.innerText = `${(Object.values(data2)*currencyAmount.value).toFixed(2)}`
  document.getElementById("flag2").src = `https://www.countryflags.io/${currencyTo2.value.slice(0, -1)}/flat/64.png`;
}

function displayResult3 (data3) {
  result3.innerText = `${(Object.values(data3)*currencyAmount.value).toFixed(2)}`
  document.getElementById("flag3").src = `https://www.countryflags.io/${currencyTo3.value.slice(0, -1)}/flat/64.png`;
}

function displayResult4 (data4) {
  result4.innerText = `${(Object.values(data4)*currencyAmount.value).toFixed(2)}`
  document.getElementById("flag4").src = `https://www.countryflags.io/${currencyTo4.value.slice(0, -1)}/flat/64.png`;
}
