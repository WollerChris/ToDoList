const complete= " :Completed " + Date();

function addItem() {
    var el = document.createElement('li')
    var val = document.getElementById("listAdd").value;
    el.innerHTML = val;
    el.className = 'list-group-item';
    document.getElementById('list').append(el);
    el.addEventListener('click', done);


    event.preventDefault()


}

function removeItem() {
    var val = document.getElementById("listAdd").value;
    el.innerHTML = val;
    document.getElementById('list').remove(el);
    event.preventDefault();
}



function done() {
    this.className = "done";
    this.removeEventListener('click',done);
 

    var el = document.createElement('li')
    var val = document.getElementsByClassName("done").value;
    el.innerHTML = val;
    el.className = 'list-group-item';
    document.getElementById('archive').append(el);

    this.append(complete);

  }
  
  // Initialize all listener for current undone tasks
function init() {
    var undoneItems = document.getElementsByClassName('tasks');
    for(var i = 0; i < undoneItems.length; i++){
      undoneItems[i].addEventListener('click', done);  
    }
  }

  

