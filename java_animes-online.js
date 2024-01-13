var menu = document.getElementById('topicos')
var check = 0

function clicou_menu(){
    if (check == 0){
        menu.style.display = 'block'
        check = 1
    }else{
        check = 0
        menu.style.display = 'none'
    }
}