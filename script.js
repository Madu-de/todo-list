let number = 0;

function addTodo() {

    if (eingabe.value.length <= 25 && eingabe.value !== "") {
            let todo = eingabe.value;
            eingabe.value = "";

            $("#todos")[0].innerHTML += `
            
            <li class="mdl-list__item" id="todo` + number + `">
                <span class="mdl-list__item-primary-content">
                    ` + todo + `
                </span>
                <span class="mdl-list__item-secondary-action">
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                        <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" onclick="deleteTodo(` + number + `);" />
                    </label>
                </span>
            </li>
            `;

            number++;
    } else {

        alert("Entweder ist kein Todo eingegeben worden oder es ist zu lang.");

    }

}


function deleteTodo(param) {

    setTimeout(function() {

        $("#todo" + param)[0].remove();

    }, 100);

}