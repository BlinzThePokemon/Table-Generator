var num = 0;
var start = 1;

function gen() {
        num = document.getElementById("inputField").value
        start = 1;  // reset start to 1 when generating new multiples
        displayMultiples();
}

function displayMultiples() {
        for (var i = 1; i <= 10; i++) {
            var multiplier = start + i - 1;
            document.getElementById("div" + i).textContent = num + " * " + multiplier + " = " + (num * multiplier);
        }
}

function next() {
        start += 10;
        displayMultiples();
}

function prev() {
        if (start > 10) {
            start -= 10;
        }
        displayMultiples();
}