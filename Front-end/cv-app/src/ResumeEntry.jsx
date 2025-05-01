// Resume form

// Components -
// First Name, Last Name,
// email id
// phone number
// Most recent work experience
// Highest education
// 5 prominent skills

// Submit button
//

function handleEmailChange(event) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value) && event.target.value !== "") {
        document.getElementById("emailError").textContent = "Invalid email";
    } else {
        document.getElementById("emailError").textContent = "";
    }
}

function handlePhoneNumberChange(event) {
    // Don't allow anything but numbers
    const phoneNumberRegex = /^[0-9]+$/;
    if (!phoneNumberRegex.test(event.target.value) && event.target.value !== "") {
        document.getElementById("phoneNumberError").textContent = "Invalid phone number";
    } else {
        document.getElementById("phoneNumberError").textContent = "";
    }
}

function ResumeEntry() {
    return (
        <div>
            <h1>Resume Entry</h1>
            <form className="resume-form">
                <div className="name-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" />
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" onChange={handleEmailChange}/>
                    <p id="emailError" style={{ color: "red" }}></p>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" onChange={handlePhoneNumberChange}/>
                    <p id="phoneNumberError" style={{ color: "red" }}></p>
                </div>
                <div className="work-group">
                    <label htmlFor="workExperience">Work Experience: </label>
                    <input type="text" id="workExperience" name="workExperience" />
                    <label>Start Date (MM/YYYY): </label>
                    <input type="text" id="startDate" name="startDate" />
                    <label>End Date (MM/YYYY): </label>
                    <input type="text" id="endDate" name="endDate" />
                </div>
                <div className="education-group">
                    <label htmlFor="education">Education: </label>
                    <input type="text" id="education" name="education" />
                    <label>Start Date (MM/YYYY): </label>
                    <input type="text" id="startDate" name="startDate" />
                    <label>End Date (MM/YYYY): </label>
                    <input type="text" id="endDate" name="endDate" />
                </div>
                <div>
                    <label htmlFor="skills">Skills: </label>
                    <input type="text" id="skills" name="skills" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ResumeEntry;