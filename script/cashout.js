document
  .getElementById("btncashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const Pin = document.getElementById("cashoutpin").value;
    const convertpin = parseInt(Pin);

    const amount = document.getElementById("cashoutamount").value;
    const convertAmount = parseFloat(amount);

    const mainbalance = document.getElementById("main-balance").innerText;
    const convertmainbalance = parseFloat(mainbalance);

    if(convertpin===1234){
        // console.log('ok add kora jaba')
       const sub=convertmainbalance-convertAmount;
    //    console.log(sum);
   document.getElementById('main-balance').innerText = sub; //sum taka add korlam
    }
    else{
        // console.log('wrong pin')
        alert('Wrong pin')    // alert korba jodi pin number vul hoi
    }

  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    