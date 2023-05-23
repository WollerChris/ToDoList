
function addItem() {
    var el = document.createElement('li')
    var val = document.getElementById("listAdd").value;
    el.innerHTML = val;
    el.className = 'list-group-item';
    document.getElementById('list').append(el);
    event.preventDefault()
}


// Creating a function to remove item from list
function removeItem() {
    // Declaring a variable to get select element
    var a = document.getElementById("list");
    var text = document.getElementById("listAdd");
    var item = document.getElementById(text.value);
    a.removeChild(item);
}