
const button = document.querySelector('.btn');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const enterDay = parseInt(document.querySelector('.enterDay').value);
    const enterMonth = parseInt(document.querySelector('.enterMonth').value);
    const enterYear = parseInt(document.querySelector('.enterYear').value);
    const date = new Date();
    // Clear previous error messages
    document.querySelector(".dayErrorMessage").innerHTML = "";
    document.querySelector(".monthErrorMessage").innerHTML = "";
    document.querySelector(".yearErrorMessage").innerHTML = "";

    if (isNaN(enterDay) || enterDay === '') {
        document.querySelector(".dayErrorMessage").innerHTML = "Must be date between 1 to 31";
        document.querySelector(".dayErrorMessage").style.borderColor = "red";
        return; // Exit the function if the day is invalid
    }
    if (isNaN(enterMonth) || enterMonth === '') {
        document.querySelector(".monthErrorMessage").innerHTML = "Must be month between 1 to 12";
        return; // Exit the function if the month is invalid
    }
    if (isNaN(enterYear) || enterYear === '') {
        document.querySelector(".yearErrorMessage").innerHTML = "Must be in the past";
        return; // Exit the function if the year is invalid
    }

    let currentDate = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();

    let month = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(enterDay > currentDate){
        currentDate += month[currentMonth - 2];
        currentMonth -= 1;
    }
    if(enterMonth > currentMonth){
        currentMonth += 12;
        currentYear -= 1;
    }

    const dateResult = Math.abs(currentDate - enterDay);
    const monthResult = currentMonth -enterMonth;
    const yearResult = currentYear - enterYear;

    document.querySelector(".year-input").innerHTML = `${yearResult}`;
    document.querySelector(".month-input").innerHTML = `${monthResult}`;
    document.querySelector(".day-input").innerHTML = `${dateResult}`;
    console.log(`day ${dateResult}, month ${monthResult}, year ${yearResult}`);

});








