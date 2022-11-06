
window.onload = click;

function click(){
    document.getElementsByClassName("btn")[0].addEventListener('click', displayAlert);
}

function displayAlert(event){

    fetch("http://localhost/info2180-lab4/superheroes.php")
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
}