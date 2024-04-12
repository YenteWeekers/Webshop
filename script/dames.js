// var coll = document.getElementsByClassName("collapsible");
// var i;
//
// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("open");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight){
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    var content = coll[i].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px"; // Set initial maxHeight
    coll[i].addEventListener("click", function() {
        this.classList.toggle("open");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}



filter([],[],[], []);

/*function loadAll() {
  var x, i;
  x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "show");
  }
}*/

function check(){
    var checkPink = document.getElementById('pink').checked;
    var checkBaige = document.getElementById('baige').checked;
    var checkBlack = document.getElementById('black').checked;
    var checkWhite = document.getElementById('white').checked;
    var checkYellow = document.getElementById('yellow').checked;
    var checkBlue = document.getElementById('blue').checked;
    var checkGreen = document.getElementById('green').checked;
    var checkGray = document.getElementById('gray').checked;
    var checkRed = document.getElementById('red').checked;
    var checkOrange = document.getElementById('orange').checked;

    let activeFilters = [];
    if (checkPink) {
        activeFilters.push('pink');
    }
    if (checkBaige) {
        activeFilters.push('baige');
    }
    if (checkBlack) {
        activeFilters.push('black');
    }
    if (checkWhite) {
        activeFilters.push('white');
    }
    if (checkYellow) {
        activeFilters.push('yellow');
    }
    if (checkBlue) {
        activeFilters.push('blue');
    }
    if (checkGreen) {
        activeFilters.push('green');
    }
    if (checkGray) {
        activeFilters.push('gray');
    }
    if (checkRed) {
        activeFilters.push('red');
    }
    if (checkOrange) {
        activeFilters.push('orange');
    }

    var bottoms = document.getElementById('bottoms').checked;
    var dress = document.getElementById('dress').checked;
    var truien = document.getElementById('truien').checked;
    var tops = document.getElementById('tops').checked;
    var jasjes = document.getElementById('jasjes').checked;
    var sport = document.getElementById('sport').checked;
    var bikini = document.getElementById('bikini').checked;
    var hoodie = document.getElementById('hoodie').checked;
    var nachtwear = document.getElementById('nachtwear').checked;
    var lingerie = document.getElementById('lingerie').checked;

    let thirdFilters = [];
    if (bottoms) {
        thirdFilters.push('bottoms');
    }
    if (dress) {
        thirdFilters.push('dress');
    }
    if (truien) {
        thirdFilters.push('truien');
    }
    if (tops) {
        thirdFilters.push('tops');
    }
    if (jasjes) {
        thirdFilters.push('jasjes');
    }
    if (sport) {
        thirdFilters.push('sport');
    }
    if (bikini) {
        thirdFilters.push('bikini');
    }
    if (hoodie) {
        thirdFilters.push('hoodie');
    }
    if (nachtwear) {
        thirdFilters.push('nachtwear');
    }
    if (lingerie) {
        thirdFilters.push('lingerie');
    }

    var lang = document.getElementById('lang').checked;
    var kort = document.getElementById('kort').checked;

    let lengteFilter = [];
    if (lang) {
        lengteFilter.push('lang');
    }
    if (kort) {
        lengteFilter.push('kort');
    }

    //console.log(activeFilters);

    // get a list of the secondary level filters
    var vrouw = document.getElementById('vrouw').checked;
    var man = document.getElementById('man').checked;
    let secondaryFilters = [];
    if (vrouw) {
        secondaryFilters.push('vrouw');
    }
    if (man) {
        secondaryFilters.push('man');
    }

    //console.log(secondaryFilters);

    if (activeFilters.length == 0 && secondaryFilters.length == 0 && thirdFilters.length == 0 && lengteFilter.length == 0) {
        // load all
        filter(activeFilters, secondaryFilters ,thirdFilters, lengteFilter);
    } else {
        filter(activeFilters, secondaryFilters, thirdFilters, lengteFilter);
    }

}

// Function to sort objects
function filter (primaryFilters, secondaryFilters, thirdFilters, lengteFilter) {
    var x, i;
    x = document.getElementsByClassName("vrouw");
    document.getElementById("no-results").style.display = "none";

    if (primaryFilters.length == 0) {
        primaryFilters.push("");
    }

    for (i = 0; i < x.length; i++) {
        let matchesFilter = false;
        w3RemoveClass(x[i], "show");
        //console.log(x[i].className);
        for (var p in primaryFilters) {
            //console.log(primaryFilters[p]);
            if (secondaryFilters.length > 0 ) {
                for (var s in secondaryFilters) {
                    //console.log(secondaryFilters[s]);
                    if (x[i].className.indexOf(primaryFilters[p]) > -1 && x[i].className.indexOf(secondaryFilters[s]) > -1) matchesFilter=true;
                }
            } else if (thirdFilters.length > 0 ) {
                for (var t in thirdFilters) {
                    //console.log(secondaryFilters[s]);
                    if (x[i].className.indexOf(primaryFilters[p]) > -1 && x[i].className.indexOf(thirdFilters[t]) > -1) matchesFilter=true;
                }
            } else if (lengteFilter.length > 0 ) {
            for (var l in lengteFilter) {
                //console.log(secondaryFilters[s]);
                if (x[i].className.indexOf(primaryFilters[p]) > -1 && x[i].className.indexOf(lengteFilter[l]) > -1) matchesFilter=true;
            }
        } else {
            if (x[i].className.indexOf(primaryFilters[p]) > -1) matchesFilter=true;
        }

        }


        if (matchesFilter) {
            w3AddClass(x[i], "show");
            //console.log("Filter added to box #" + i);
        }


    }
    checkForNoMatches();


}


// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function checkForNoMatches() {
    var x = document.getElementsByClassName("show");
    console.log(x.length);
    if (x.length == 0) {
        document.getElementById("no-results").style.display = "block";
    }
}
