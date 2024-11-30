function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
  
    if (!dob) {
      result.textContent = "Please enter your date of birth.";
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    // Adjust for negative days
    if (days < 0) {
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of the previous month
      days += previousMonth.getDate();
      months--;
    }
  
    // Adjust for negative months
    if (months < 0) {
      months += 12;
      years--;
    }
  
    result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  