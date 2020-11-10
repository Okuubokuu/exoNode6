const productContainer = $("#productContainer");

$.get("http/localhost:5500/products")
    .then(function(response){
        return response
    })

    .then(function(data){
        const articles = [];
        const products = data;

        products.forEach(products => {
            if(articles.indexOf(products.article) === -1){
                articles.push(products.article);
            }
        });

        articles.forEach(article => {
            let divArticle = $("<article></article>");
            let titreArticle = $("<h3></h2>").text(article).appendTo(divArticle);

            productContainer.append(titreArticle);
        });

        products.forEach(product => {
            let divArticle = $("#"+product.article.replaceAll(" ", ""));
            let cardDiv = $("<div></div>").addClass("card").appendTo(divArticle);
            let cardImgDiv = $("<div></div>").addClass("cardImgDiv").appendTo(cardDiv);
            let cardImg = $("<img>").attr("src", product.img).appendTo(cardImgDiv);
            let cardTitle = $("<span></span>").addClass("cardTitle");
            let cardContent = $("<div></div>").addClass("cardContent").appendTo(cardDiv);
            let quantityText = $("<p></p>").text("Quantité : " + product.quantity).appendTo(cardContent);
            let dateText = $("<p></p>").text("Date : " + product.date).appendTo(cardContent);
            let livraisonText = $("<p></p>").text(product.livraison ? "Livraison disponnible" : "Livraison indisponnible").appendTo(cardContent);
            let priceText = $("<p></p>").text("Prix : " + product.price + "€").appendTo(cardContent);
        });
    });