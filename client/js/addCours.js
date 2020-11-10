$(document).ready(function(){
    $('.datepicker').datepicker();
});

let form = $('form');

$.get("http://localhost:5500/cours")
    .then(function(response) {
        return response
    })
$("#message-confirmation").hide()
$("#message-error").hide()

form.on("submit", function(e){
    e.preventDefault();
    let cour = {
         name : $("#cour_name").val(),
         img : $("#img_url").val(),
         date : $("#date").val(),
         dispo :$("#dispo").is(":checked"),
    }
    
    let isValid = true;
    $.each(cour, function(k,v){
        if(v === ""){
            alert(k + " is empty");
            isValid = false;
        }
        console.log(v)
    })

    if(isValid){
        $.ajax({
            type:"POST",
            url : "http://localhost:5500/addCour",
            data : JSON.stringify(cour),
            dataType : "json"
        })
        form.get(0).reset();
        $("#message-confirmation").show()
        $("#message-error").hide()
    } else {
        $("#message-confirmation").hide()
        $("#message-error").show()
    }
})
