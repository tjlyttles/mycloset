$(document).ready(function() {
    $(".parallax").parallax();
    $(".modal").modal();
    $(".dropdown-trigger").dropdown();
    $("select").formSelect();
    $(".collapsible").collapsible();
    $(".sidenav").sidenav();
    $(".delete").on("click", function(){
        console.log("yo")
        })
  $.ajax({ url: "/api/allitems", method: "GET" }).then(function(res) {
    console.log(res);
    var shirtArr = res.shirts;
    var shoesArr = res.shoes;
    var dressesArr = res.dresses;
    var pantsArr = res.pants;

    var shirtsReturned = $("<div>")
    for (let i = 0; i < shirtArr.length; i++) {
        var shirtCard = $(`
            <div class="card">
            <div class="card-image">
            <img class="activator" src=${shirtArr[i].imgLink}>
            <a class="btn-floating halfway-fab waves-effect waves-light yellow darken-2"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="card-content">
            <span class="card-title activator">Shirt</span>
            <p>Price: ${shirtArr[i].price}</p>
            <p>Condition: ${shirtArr[i].condition}</p>
            <p>Size: ${shirtArr[i].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${shirtArr[i].suitedFor}</p>
            <p>Type: ${shirtArr[i].type}</p>
            <button class="shirt-edit waves-effect waves-light btn yellow darken-2" type="button"> Edit </button>
            
            <button class="delete waves-effect waves-light btn yellow darken-2" type="button" value="submit"> Delete </button>
            </div>
            </div>`)
        console.log(shirtArr[i].color)
        shirtsReturned.append(shirtCard)
    }
    $("#search-result").html(shirtsReturned);

    var pantsReturned = $("<div>")
    for (let k = 0; k < pantsArr.length; k++) {
        var pantsCard = $(`
            <div class="card">
            <div class="card-image">
            <img class="activator" src="https://placekitten.com/200/300">
            <a class="btn-floating halfway-fab waves-effect waves-light yellow darken-2"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="card-content">
            <span class="card-title activator">Pants</span>
            <p>Price: ${pantsArr[k].price}</p>
            <p>Condition: ${pantsArr[k].condition}</p>
            <p>Size: ${pantsArr[k].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${pantsArr[k].suitedFor}</p>
            <p>Type: ${pantsArr[k].type}</p>
            <button class="pants-edit waves-effect waves-light btn yellow darken-2"> Edit </button>
            
            <button class="pants-delete waves-effect waves-light btn yellow darken-2"> Delete </button>
            </div>
            </div>`)
        console.log(pantsArr[k].color)
        pantsReturned.append(pantsCard)
    }
    $("#pants-result").html(pantsReturned);

    var dressesReturned = $("<div>")
    for (let m = 0; m < dressesArr.length; m++) {
        var dressesCard = $(`
            <div class="card">
            <div class="card-image">
            <img class="activator" src="https://placekitten.com/200/300">
            <a class="btn-floating halfway-fab waves-effect waves-light yellow darken-2"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="card-content">
            <span class="card-title activator">Dresse</span>
            <p>Price: ${dressesArr[m].price}</p>
            <p>Condition: ${dressesArr[m].condition}</p>
            <p>Size: ${dressesArr[m].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${dressesArr[m].suitedFor}</p>
            <p>Type: ${dressesArr[m].type}</p>
            <button class="dresses-edit waves-effect waves-light btn yellow darken-2"> Edit </button>
            
            <button class="dresses-delete waves-effect waves-light btn yellow darken-2"> Delete </button>
            </div>
            </div>`)
        console.log(dressesArr[m].color)
        dressesReturned.append(dressesCard)
    }
    $("#dresses-result").html(dressesReturned);

    var shoesReturned = $("<div>")
    for (let j = 0; j < shoesArr.length; j++) {
        var shoesCard = $(`
            <div class="card">
            <div class="card-image">
            <img class="activator" src="https://placekitten.com/200/300">
            <a class="btn-floating halfway-fab waves-effect waves-light yellow darken-2"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="card-content">
            <span class="card-title activator">Shoe</span>
            <p>Price: ${shoesArr[j].price}</p>
            <p>Condition: ${shoesArr[j].condition}</p>
            <p>Size: ${shoesArr[j].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${shoesArr[j].suitedFor}</p>
            <p>Type: ${shoesArr[j].type}</p>
            <button class="shoes-edit waves-effect waves-light btn yellow darken-2"> Edit </button>
            
            <button class="shoes-delete waves-effect waves-light btn yellow darken-2"> Delete </button>
            </div>
            </div>`)
        console.log(shoesArr[j].color)
        shoesReturned.append(shoesCard)
    }
    $("#shoes-result").html(shoesReturned);
   });
   
});


