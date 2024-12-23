const convertButton = document.querySelector(".convertButton");
const currencySelectTo = document.querySelector(".currency-Select-to");

const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Exibe o valor em Reais
const currencyValueConverted = document.querySelector(".currency-value"); // Exibe o valor convertido

const currencyImgReal = document.querySelector(".currency-box img"); // Imagem do Real que **não deve ser alterada**
const currencyImgConverted = document.querySelectorAll(".currency-box")[1].querySelector("img"); // Imagem da moeda convertida (a que vai mudar)

function convertValue() {
    // Obtém o valor digitado e converte para número, garantindo que a vírgula seja tratada corretamente
    const inputcurrencyvalue = parseFloat(document.querySelector(".input-currency").value.replace(',', '.'));

    // Verifica se o valor é numérico e maior que 0
    if (isNaN(inputcurrencyvalue) || inputcurrencyvalue <= 0) {
        alert("Por favor, insira um valor válido para conversão.");
        return;
    }

    // Taxas de câmbio
    const dolarToday = 5.47;
    const euroToday = 6.02;
    const libraToday = 7.08;
    const bitcoinToday = 32653.297;

    let convertedValue = 0;

    // Real para outras moedas
    if (currencySelectTo.value == "dolar") {
        convertedValue = inputcurrencyvalue / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    if (currencySelectTo.value == "euro") {
        convertedValue = inputcurrencyvalue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }

    if (currencySelectTo.value == "libra") {
        convertedValue = inputcurrencyvalue / libraToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue);
    }

    if (currencySelectTo.value == "bitcoin") {
        convertedValue = inputcurrencyvalue / bitcoinToday;
        // Formata para 8 casas decimais e adiciona o símbolo de Bitcoin
        currencyValueConverted.innerHTML = `${convertedValue.toFixed(8)} ₿`;
    }

    // Exibe o valor em Reais
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");

    // Apenas altera a imagem da moeda convertida, não a imagem do Real
    if (currencySelectTo.value == "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImgConverted.src = "./Assets/Dólar.jpeg"; // Imagem para o Dólar
    }

    if (currencySelectTo.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImgConverted.src = "./Assets/Euro.jpeg"; // Imagem para o Euro
    }

    if (currencySelectTo.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImgConverted.src = "./Assets/Libra.jpeg"; // Imagem para Libra Esterlina
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImgConverted.src = "./Assets/Bitcoin.jpeg"; // Imagem para Bitcoin
    }

    // Chamando a função de conversão após a troca da moeda
    convertValue();
}

// Apenas chama a função de conversão ao clicar no botão
convertButton.addEventListener("click", convertValue);

// Chama a função changeCurrency quando o valor da moeda de destino for alterado
currencySelectTo.addEventListener("change", changeCurrency);
