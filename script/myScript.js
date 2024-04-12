let stockofshoes = 15;
let stockofshoes2 = 15;
let stockofshoes3 = 15;
let shoeincart= 0;
let shoeincart2= 0;
let shoeincart3= 0;
let price = 0;
let price2 = 0;
let price3 = 0;
let totaal =0;
let cart = document.querySelector('.cart');
let itemnum = 0;
// const items = Array.from(reset.children);

function myFunction() {
    document.getElementById("frm1").submit();

}
function submit(){
document.getElementById("input").style.display;
document.getElementsByName('fname').inner
}

    function total() {
        totaal = price + price2 + price3;
        document.getElementById("totaal").innerText = "totaal:" + totaal + ",-";
    }

    function plus() {
        if (stockofshoes > 1) {

            stockofshoes = stockofshoes - 1;
            shoeincart = shoeincart + 1;
            price = price + 15;
            if (shoeincart > 0) {
                itemnum = itemnum + 1;
                document.getElementById("itembag").style.display = "block";
                document.getElementById("num").innerText = itemnum;
                document.getElementById("cartcon").style.display = "block";
                document.getElementById('cartcon').innerText = shoeincart + ' x in cart'
                document.getElementById("price").style.display = "block";
                document.getElementById('price').innerText = price + ",-";
            }
            document.getElementById("item1").innerText = stockofshoes;
            document.getElementById('dis1').style.display = "grid";
        } else {
            document.getElementById("item1").innerText = "out of stock";
            document.getElementById('plus1').style.display = "none";
            stockofshoes = 0;
        }

        total()
    }

    function minus() {
        if (stockofshoes < 15) {
            itemnum = itemnum - 1;
            stockofshoes = stockofshoes + 1;
            shoeincart = shoeincart - 1;
            price = price - 15;
            document.getElementById('cartcon').innerText = shoeincart + ' x in cart'
            document.getElementById('price').innerText = price
            document.getElementById("num").innerText = itemnum;
            if (shoeincart <= 0) {
                // document.getElementById("num").innerText = itemnum;
                // document.getElementById("itembag").style.display ="none";
                document.getElementById("cartcon").style.display = "none";
                document.getElementById("price").style.display = "none";
            }
            document.getElementById("item1").innerText = stockofshoes;
            document.getElementById('dis1').style.display = "none";
        } else {
            document.getElementById("item1").innerText = "15";
        }
        if (itemnum <= 0) {
            document.getElementById("itembag").style.display = "none";
        }
        total()
    }


    function plu() {
        if (stockofshoes2 > 1) {
            itemnum = itemnum + 1;
            stockofshoes2 = stockofshoes2 - 1;
            shoeincart2 = shoeincart2 + 1;
            price2 = price2 + 15;
            if (shoeincart2 > 0) {
                document.getElementById("itembag").style.display = "block";
                document.getElementById("num").innerText = itemnum;
                document.getElementById("shoe2").style.display = "block";
                document.getElementById('shoe2').innerText = shoeincart2 + ' x in cart'
                document.getElementById("price2").style.display = "block";
                document.getElementById('price2').innerText = price2 + ",-";
            }
            document.getElementById("item2").innerText = stockofshoes2;
            document.getElementById('dis2').style.display = "grid";
        } else {
            document.getElementById("item2").innerText = "out of stock";
            document.getElementById('plus2').style.display = "none";
            stockofshoes2 = 0;
        }
        total()
    }

    function min() {
        if (stockofshoes2 < 15) {
            itemnum = itemnum - 1;
            stockofshoes2 = stockofshoes2 + 1;
            shoeincart2 = shoeincart2 - 1;
            price2 = price2 - 15;
            document.getElementById('shoe2').innerText = shoeincart2 + ' x in cart'
            document.getElementById('price2').innerText = price2
            document.getElementById("num").innerText = itemnum;
            if (shoeincart2 <= 0) {
                document.getElementById("shoe2").style.display = "none";
                document.getElementById("price2").style.display = "none";
            }
            document.getElementById("item2").innerText = stockofshoes2;
            document.getElementById('dis2').style.display = "none";
        } else {
            document.getElementById("item2").innerText = "15";
        }
        if (itemnum <= 0) {
            document.getElementById("itembag").style.display = "none";
        }
        total()
    }


    function pluss() {
        if (stockofshoes3 > 1) {
            itemnum = itemnum + 1;
            stockofshoes3 = stockofshoes3 - 1;
            shoeincart3 = shoeincart3 + 1;
            price3 = price3 + 15;
            if (shoeincart3 > 0) {
                document.getElementById("itembag").style.display = "block";
                document.getElementById("num").innerText = itemnum;
                document.getElementById("shoe3").style.display = "block";
                document.getElementById('shoe3').innerText = shoeincart3 + ' x in cart'
                document.getElementById("price3").style.display = "block";
                document.getElementById('price3').innerText = price3 + ",-";
            }
            document.getElementById("item3").innerText = stockofshoes3;
            document.getElementById('dis3').style.display = "grid";
        } else {
            document.getElementById("item3").innerText = "out of stock";
            stockofshoes3 = 0;
            document.getElementById('plus3').style.display = "none";
        }
        total()
    }

    function minn() {
        if (stockofshoes3 < 15) {
            itemnum = itemnum - 1;
            stockofshoes3 = stockofshoes3 + 1;
            shoeincart3 = shoeincart3 - 1;
            price3 = price3 - 15;
            document.getElementById('shoe3').innerText = shoeincart3 + ' x in cart'
            document.getElementById('price3').innerText = price3
            document.getElementById("num").innerText = itemnum;
            if (shoeincart3 <= 0) {
                document.getElementById("shoe3").style.display = "none";
                document.getElementById("price3").style.display = "none";
            }
            document.getElementById("item3").innerText = stockofshoes3;
            document.getElementById('dis3').style.display = "none";

        } else {
            document.getElementById("item3").innerText = "15";
        }
        if (itemnum <= 0) {
            document.getElementById("itembag").style.display = "none";
        }
        total()
    }


    function buy() {

        resetModal();
        totaal = 0;
        document.getElementById("totaal").innerText = "totaal: " + totaal;

    }


    let popupbutton = document.getElementById("popupbutton")
    let close = document.getElementById("close")
    let modal = document.getElementById("modal");

    popupbutton.onclick = openmodal;
    close.onclick = closemodal;

    function openmodal() {
        close.style.display = "block";
        backdrop.style.display = "block";
        modal.style.display = "block";
    }

    function closemodal() {
        backdrop.style.display = "none";
        close.style.display = "none";
        modal.style.display = "none";
    }

    function resetModal() {
        // Reset the values and visibility of modal content inside alldis div
        shoeincart = 0;
        shoeincart2 = 0;
        shoeincart3 = 0;
        price = 0;
        price2 = 0;
        price3 = 0;
        itemnum = 0;


        document.getElementById('cartcon').style.display = 'none';
        document.getElementById('shoe2').style.display = 'none';
        document.getElementById('shoe3').style.display = 'none';
        document.getElementById('price').style.display = 'none';
        document.getElementById('price2').style.display = 'none';
        document.getElementById('price3').style.display = 'none';
        document.getElementById('itembag').style.display = 'none';

        // Clear the content inside the alldis div
        document.getElementById("dis1").style.display = 'none';
        document.getElementById("dis2").style.display = 'none';
        document.getElementById("dis3").style.display = 'none';
    }







