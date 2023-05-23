
function addItem() {
    var el = document.createElement('li')
    var val = document.getElementById("listAdd").value;
    el.innerHTML = val;
    el.className = 'list-group-item';
    document.getElementById('list').append(el);
    event.preventDefault()
}

function removeItem() {
    var a = document.getElementById("list");
    var val = document.getElementById("listAdd");
    var item = document.getElementById(val.value);
    a.removeChild(item);
}