// Basic Calculator using Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject('Error: Cannot divide by zero.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Error: Invalid operation.');
        }
    });
}

// Custom Iterator for Squaring Numbers
function* squareIterator(numbers) {
    for (let num of numbers) {
        yield num * num;
    }
}

// Prime Number Generator
function* primeGenerator(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Event Listeners
document.getElementById('calculate').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    calculator(num1, num2, operation)
        .then(result => {
            document.getElementById('result').innerText = `Result: ${result}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = error;
        });
});

document.getElementById('square').addEventListener('click', () => {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const iterator = squareIterator(numbers);
    const squares = Array.from(iterator);

    document.getElementById('squaredResult').innerText = `Squares: ${squares.join(', ')}`;
});

document.getElementById('generatePrimes').addEventListener('click', () => {
    const limit = parseInt(document.getElementById('limit').value);
    const generator = primeGenerator(limit);
    const primes = Array.from(generator);

    document.getElementById('primeResult').innerText = `Prime Numbers: ${primes.join(', ')}`;
});
