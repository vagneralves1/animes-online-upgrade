var menu = document.getElementById('menu_oculto')
var check = 0  

function clicou_menu(){
    if (check == 0){
        menu.style.display = 'block'
        check = 1
        document.getElementById('icon').src = 'imagens/close_white_36dp.svg'
    }else{
        check = 0
        menu.style.display = 'none'
        document.getElementById('icon').src = 'imagens/menu_white_36dp.svg'
    }
}