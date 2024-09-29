const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");


// get date

const dataEl = new Date();
// console.log(dataEl);

monthEl.innerText = dataEl.toLocaleString("en",{
    month:"long"
});

dayEl.innerText = dataEl.toLocaleString("en",{
    weekday:"long"
})

dataEl.innerText = dataEl.getDate();
yearEl.innerText = dataEl.getFullYear();