$(document).ready(function() {
    $(".parallax").parallax();
    $(".modal").modal();
    $(".dropdown-trigger").dropdown();
    $("select").formSelect();
    $(".collapsible").collapsible();
    $(".sidenav").sidenav();

$(document).on("click", "button.delete", deleteShirt);
$(document).on("click", "button.pants-delete", deletePants);
$(document).on("click", "button.dresses-delete", deleteDress);
$(document).on("click", "button.shoes-delete", deleteShoes);

function deleteShirt() {
    var shirtId = $(this).data("id")
    console.log(shirtId)
    $.ajax("/api/shirt/" + shirtId, {
        type: "DELETE",
        data: shirtId
    }).then(
        function() {
            location.reload();
        }
    )
}
function deletePants() {
    var pantsId = $(this).data("id")
    console.log(pantsId)
    $.ajax("/api/pants/" + pantsId, {
        type: "DELETE",
        data: pantsId
    }).then(
        function() {
            location.reload();
        }
    )
}
function deleteDress() {
    var dressId = $(this).data("id")
    console.log(dressId)
    $.ajax("/api/dress/" + dressId, {
        type: "DELETE",
        data: dressId
    }).then(
        function() {
            location.reload();
        }
    )
}
function deleteShoes() {
    var shoesId = $(this).data("id")
    console.log(shoesId)
    $.ajax("/api/shoes/" + shoesId, {
        type: "DELETE",
        data: shoesId
    }).then(
        function() {
            location.reload();
        }
    )
}

$(document).on("click", "button.shirt-edit", editShirts);
$(document).on("click", "button.pants-edit", editPants);
$(document).on("click", "button.dresses-edit", editDresses);
$(document).on("click", "button.shoes-edit", editShoes);

var priceChange = null
$("#update-submit").on("click", function(event){
    event.preventDefault();
    priceChange =  $("#change-price").val();
    //console.log(priceChange)
})
function editShirts() {
    var changeShirtId = $(this).data("id")
    $("#modal2").modal("open")
    var updateShirtPrice = {
        price: priceChange
    };
    $.ajax("/api/shirt/" + changeShirtId, {
        type: "PUT",
        data: updateShirtPrice,
    })
    // .then(
    //     function() {
    //         location.reload();
    //     }
    // )
    console.log("new price:" + priceChange)
}
function editPants() {
    console.log("edit pants")
}
function editDresses() {
    console.log("edit dress")
}
function editShoes() {
    console.log("edit shoes")
}

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
            <img class="activator" src="https://placekitten.com/200/300">
            <a class="btn-floating halfway-fab waves-effect waves-light yellow darken-2"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="card-content">
            <span class="card-title activator">Shirt</span>
            <p>Price: $${shirtArr[i].price}</p>
            <p>Condition: ${shirtArr[i].condition}</p>
            <p>Size: ${shirtArr[i].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${shirtArr[i].suitedFor}</p>
            <p>Type: ${shirtArr[i].type}</p>
            <button type="button" value="submit" class="shirt-edit waves-effect waves-light btn yellow darken-2" data-id=${shirtArr[i].id}> Edit </button>
            
            <button type="button" value="submit" class="delete waves-effect waves-light btn yellow darken-2" data-id=${shirtArr[i].id}> Delete </button>
            </div>
            </div>`)
       // console.log(shirtArr[i].id)
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
            <p>Price: $${pantsArr[k].price}</p>
            <p>Condition: ${pantsArr[k].condition}</p>
            <p>Size: ${pantsArr[k].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${pantsArr[k].suitedFor}</p>
            <p>Type: ${pantsArr[k].type}</p>
            <button type="button" value="submit" class="pants-edit waves-effect waves-light btn yellow darken-2"> Edit </button>
            
            <button type="button" value="submit" class="pants-delete waves-effect waves-light btn yellow darken-2" data-id=${pantsArr[k].id}> Delete </button>
            </div>
            </div>`)
        //console.log(pantsArr[k].color)
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
            <span class="card-title activator">Dress</span>
            <p>Price: $${dressesArr[m].price}</p>
            <p>Condition: ${dressesArr[m].condition}</p>
            <p>Size: ${dressesArr[m].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${dressesArr[m].suitedFor}</p>
            <p>Type: ${dressesArr[m].type}</p>
            <button type="button" value="submit" class="dresses-edit waves-effect waves-light btn yellow darken-2" > Edit </button>
            
            <button type="button" value="submit" class="dresses-delete waves-effect waves-light btn yellow darken-2" data-id=${dressesArr[m].id}> Delete </button>
            </div>
            </div>`)
        //console.log(dressesArr[m].color)
       // console.log(dressesArr[m].id)
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
            <p>Price: $${shoesArr[j].price}</p>
            <p>Condition: ${shoesArr[j].condition}</p>
            <p>Size: ${shoesArr[j].size}</p>
            </div>

            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
            <p>Suited For: ${shoesArr[j].suitedFor}</p>
            <p>Type: ${shoesArr[j].type}</p>
            <button type="button" value="submit" class="shoes-edit waves-effect waves-light btn yellow darken-2" > Edit </button>
            
            <button type="button" value="submit" class="shoes-delete waves-effect waves-light btn yellow darken-2" data-id=${shoesArr[j].id}> Delete </button>
            </div>
            </div>`)
        //console.log(shoesArr[j].color)
        shoesReturned.append(shoesCard)
    }
    $("#shoes-result").html(shoesReturned);
   });
});
