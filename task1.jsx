import React, { useState } from 'react';
import './task1.css';

function CalculateAge() {
    const [age, setAge] = useState(null);

    const calculateAge = (dateOfBirth) => {
        // Convert the date of birth string to a Date object
        const dob = new Date(dateOfBirth);
        const now = new Date();

        // Calculate the difference in years
        let ageInYears = now.getFullYear() - dob.getFullYear();

        // Check if the current date has passed the birthday for this year
        if (now.getMonth() < dob.getMonth() ||
            (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
            ageInYears--;
        }

        // Calculate the difference in months
        let ageInMonths = now.getMonth() - dob.getMonth();
        if (ageInMonths < 0 || (ageInMonths === 0 && now.getDate() < dob.getDate())) {
            ageInMonths += 12;
        }

        // Calculate the difference in days
        let ageInDays = now.getDate() - dob.getDate();
        if (ageInDays < 0) {
            const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            ageInDays += daysInLastMonth;
            ageInMonths--;
        }

        return { years: ageInYears, months: ageInMonths, days: ageInDays };
    };

    const handleClick = () => {
        const dobInput = document.getElementById("dob").value;
        const calculatedAge = calculateAge(dobInput);
        setAge(calculatedAge);
    };

    return (
        <>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />
            <button onClick={handleClick}>Calculate Age</button>
            <p>Your age is: {age && `${age.years} years, ${age.months} months, and ${age.days} days`}</p>

           
        </>
    );
}

export default CalculateAge;
