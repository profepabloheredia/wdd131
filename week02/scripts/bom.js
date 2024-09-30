
document.button.addEventListener('click', function() {
    // Code to execute when the element is clicked
    if (input.value.trim() == ''){input.focus();}
    else{
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector("#list");

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent= '❌';
        li.append(deleteButton);
        list.append(li);
    }
  });
  deleteButton.addEventListener('click', function() {
    // Code to execute when the element is clicked
    list.removeChild(li);
    input.focus();
    }
  );
  input.value='cassa';
  input.focus();