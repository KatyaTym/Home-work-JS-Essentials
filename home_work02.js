//Task 1
function printTimeout(str, n) {
    setTimeout(function() {
        console.log(str);
    }, n * 1000);
}

//Task 2
function sumAll(n) {
    if (n <= 1) {
        return 1;
    }
    return n + sumAll(n - 1);
}

//Task 3
function bombTimer(str, time) {
    var interval = setInterval(function() {
        if (time <= 0) {
            console.log(str);
            clearInterval(interval);
        } else {
            console.log(time);
            --time;
        }
    }, 1000);
}


//Task 4
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Task 5
function bombTimer2(str, time) {
    setTimeout(function() {
        if (time <= 0) {
            console.log(str);
        } else {
            console.log(time);
            bombTimer2(str, time - 1);
        }
    }, 1000);
}

//Task 6
function filterNumbers(arr, maxNumber) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < maxNumber) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

//Task 7
function minMax(arr) {
    if (arr.length > 0) {
        var max = arr[0];
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        console.log('max:', max, 'min:', min);
    }
}