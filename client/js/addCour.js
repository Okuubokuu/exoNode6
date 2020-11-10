let searchParams = new URLSearchParams(window.location.search)
if(searchParams.has('id')){
    let id = parseInt(searchParams.get('id'))
    $.ajax({
        type:'POST',
        url : "http://localhost:5500/cour",
        data : JSON.stringify(id),
        dataType : "JSON"
    }).then(function(response) {
        return response
    }).then(function (cour){
        console.log(cour)
        let courTitle = $("#courTitle");
        let courSubTitle = $("#courSubTitle");
        let courImg = $("#courImg");
        let divcourInfo = $("#courInfo");

        courTitle.text(cour.name)
        courSubTitle.text("(" + cour.categorie + ")")
        courImg.attr("src", cour.img);

        let quantity = $("<p></p>").text('Quantité : '+ cour.quantity).appendTo(divcourInfo)
        let date = $("<p></p>").text('Date : '+ cour.date).appendTo(divcourInfo)
        let livraison = $("<p></p>").text(cour.livraison ? "Livraison disponnible" : "Livraison indisponnible").appendTo(divcourInfo)
        let prix = $("<p></p>").text('Prix : '+ cour.prix + "€").appendTo(divcourInfo)
    })
} 