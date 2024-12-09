const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-Select")

function convertValue() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Real Brasileiro
    const currencyValueConverted = document.querySelector (".currency-value") // Dolar americano
    
    console.log (currencySelect.value)
    const dolarToday = 5.47
    const euroToday = 6.02
    const libraToday = 7.08
    const bitcoinToday = 32653.297

    

    

    if (currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US",{
            style: "currency",
            currency: "USD"
    }).format(inputcurrencyvalue / dolarToday)
        
} 

    if (currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / euroToday)

    }

    if (currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libraToday)
    }

    if (currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US",{
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputcurrencyvalue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR",{
        style: "currency",
        currency: "BRL"
}).format(inputcurrencyvalue)
   
} 
   

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./Assets/Dólar.jpeg"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.jpeg"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./Assets/Libra.jpeg" 
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/Bitcoin.jpeg"
    }

    convertValue()

    
}

    currencySelect.addEventListener ("change", changeCurrency)
    convertButton.addEventListener("click", convertValue)
   


    