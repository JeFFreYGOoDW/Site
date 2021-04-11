$(document).ready(function (){
    openModal();//вызываем нашу функцию
});

//функция modal
function openModal() {
    //Открываем модалку при клике на кнопку Cвязаться с нами
    $(".blockbutton").click(function () {
        $(".modal").show();//показывает див модалки 
    });
    
    //закрывает модалку при клике на кнопку Закрыть
    $(".close").click(function () {
        $(".modal").hide(300);//скрывает див модалки 
    });
	
    
    //действия при нажатии на кнопку Отправить
    $(".send").click(function () {
        //Считываем данные с полей формы
        var name = $("input.name:text").val(); 
        var phone = $("input.phone:text").val();
				
        //если они не пустые
        if(name !=="" && phone !=="")
		{
            var text = "Ваше имя: " +name + "\n" +"Ваш телефон: "+phone;//строка с значениями из формы
            alert("Данные отправлены\n"+text);//выводим информацию о том что данные отправлены.
            $(".modal").hide(300);//закрываем модалку
        } 
		else
		{
            alert("Заполните необходимые поля.");//если поля формы пустые, то вывод сообщения.
        }
        
    });
	
           $(document).mouseup(function (e) {
           var popup = $('.modal');
           if (e.target!=popup[0]&&popup.has(e.target).length ===0) {
	       $(".modal").hide();
	
	}
});

// запрет ввода чисел в поле ввода имени.
$('.name').keypress(function(key) 
{ if (key.charCode < 65) return false; 

});

// запрет ввода символов в поле ввода номера телефона.
$('.phone').keypress(function(key)
 
{ if(key.charCode < 48 || key.charCode > 57) return false; 

});








	
}
