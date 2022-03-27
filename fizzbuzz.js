function fizzBuzz(){
    const number = document.getElementsByClassName("number-value")[0].value;

    const numberDivThree = parseInt(number) / 3;
    const numberDivFive = parseInt(number) / 5;

        //Verificar se é um número
        if(isNaN(number) === false){
             //Verificar divisão por 3
            let divThree = numberDivThree % 1 === 0? document.getElementsByClassName("result")[0].innerHTML = "Fizz" : false;
            //Verificar divisão por 5
            let divFive = numberDivFive % 1 === 0? document.getElementsByClassName("result")[0].innerHTML = "Buzz" : false;
            //Verificar divisão por 3 e por 5
            let divFiveThree = numberDivThree % 1 === 0 && numberDivFive % 1 === 0? document.getElementsByClassName("result")[0].innerHTML = "FizzBuzz" : false;
            //Verificar se a divisão é float em 3 e 5
            let none = numberDivThree % 1 !== 0 && numberDivFive % 1 !== 0? document.getElementsByClassName("result")[0].innerHTML = "Entrada" : false;
        }else{
            document.getElementsByClassName("result")[0].innerHTML = "Não é um número";
        }  
}