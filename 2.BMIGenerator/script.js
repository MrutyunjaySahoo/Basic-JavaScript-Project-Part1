const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height == "" || isNaN(height) || height <= 0)
    {
        results.innerHTML = `${height}, Please enter a valid height`;
    }
    else if(weight == "" || isNaN(weight) || weight <= 0)
    {
        results.innerHTML = `${weight}, Please enter a valid weight`;
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // toFixed(2) to limit the decimal places to 2
        let status = "";
        if(bmi < 18.6)
        {
            status = "Underweight";
        }
        else if(bmi >= 18.6 && bmi <= 24.9)
        {
            status = "Normal weight";
        }
        else
        {
            status = "Overweight";
        }
        results.innerHTML = `Your BMI is ${bmi} and you are classified as ${status}`;
    }
});