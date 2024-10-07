class Person {
    constructor(name, email, mobile) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    printDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}`;
    }
}

class Student extends Person {
    constructor(name, email, mobile, rollNo) {
        super(name, email, mobile);
        if (rollNo === 0) {
            throw new Error("Roll No cannot be zero");
        }
        this.rollNo = rollNo;
    }

    printDetails() {
        return `${super.printDetails()}, Roll No: ${this.rollNo}`;
    }
}

function validateForm(data) {
    const { name, email, mobile, message, size, rollNo } = data;

    if (mobile.length !== 9 || isNaN(mobile)) {
        alert("Mobile number must be 9 digits.");
        return false;
    }

    if (rollNo <= 0) {
        alert("Roll No must be a positive number.");
        return false;
    }

    return true;
}

// Process the order
function processOrder(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;
    const size = document.getElementById('size').value;
    const rollNo = parseInt(document.getElementById('rollNo').value);

    // Validate the form inputs
    const formData = { name, email, mobile, message, size, rollNo };
    if (!validateForm(formData)) {
        return;
    }

    try {
        // Create Student object
        const student = new Student(name, email, mobile, rollNo);
        
        // Generate receipt
        const receiptDetails = document.getElementById('receiptDetails');
        const receipt = document.getElementById('receipt');
        const currentDate = new Date();
        receiptDetails.innerHTML = `
            <strong>Order Confirmed!</strong><br>
            ${student.printDetails()}<br>
            Message: ${message}<br>
            T-Shirt Size: ${size}<br>
            Date: ${currentDate.toLocaleDateString()}
        `;
        receipt.classList.remove('hidden'); // Show receipt
    } catch (error) {
        alert(error.message); 
    }
}
