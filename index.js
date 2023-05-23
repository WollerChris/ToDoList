const complete= " :Completed " + Date();

function addItem() {
    var el = document.createElement('li')
    var val = document.getElementById("listAdd").value;
    el.innerHTML = val;
    el.className = 'list-group-item';
    document.getElementById('list').append(el);
    el.addEventListener('click', done);
    event.preventDefault();


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
    this.append(complete);

  }
  
function init() {
    var undoneItems = document.getElementsByClassName('tasks');
    for(var i = 0; i < undoneItems.length; i++){
      undoneItems[i].addEventListener('click', done);  
    }
  }

  list.addEventListener('click', function(e){
    if(e.target != this){
      archive.appendChild(e.target.cloneNode(true));
      e.target.remove()
    }
  })
  
  archive.addEventListener('click', function(e){
    if(e.target != this){
      list.appendChild(e.target.cloneNode(true));
      e.target.remove()
    }
  })
