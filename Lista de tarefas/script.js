
const lista = document.getElementById('list_container');
function criar() {

    var texto = document.getElementById('input_text').value


    let now = new Date();
    var list = document.getElementById('list_container');
    var newDiv = document.createElement('div');

    list.appendChild(newDiv);
    newDiv.id = now.getMilliseconds() + 1;
    let id_novo = newDiv.id;
    newDiv.className = "div_style"
    newDiv.innerHTML = `<p>${texto}</p><button onclick='get_id(this)'>🗑️</button>`;
    document.getElementById('input_text').value = "";

    return id_novo;
}

function get_id(c) {

    c.parentNode.remove();
}
