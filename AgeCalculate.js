function calculateAge(){
    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    if (!dobInput) {
        resultDiv.innerHTML = '<p>Please Enter Your Date Of Birth.</p>';
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    resultDiv.innerHTML = `<p>Your age is: ${age} years</p>`;
}
