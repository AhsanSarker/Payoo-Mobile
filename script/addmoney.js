// button ka dhorta hoba
document
  .getElementById("btnadd-money") // button ta jate use kora jai (add button )
  .addEventListener("click", function (event) {
    //event use korce jata reload hoia refresh na hoi
    event.preventDefault();

    const amount = document.getElementById("amount").value; // amount ar value ta ka add korlam.
    // console.log(amount);
    // console.log(typeof amount);    // string type
    const convertAmount = parseInt(amount); //type take convert korlam

    const Pin = document.getElementById("pin").value; //pin take convert korbo
    const convertpin = parseInt(Pin);

    const mainbalance = document.getElementById("main-balance").innerText; //aita input fild na tai value na dia innertext
    //   console.log(typeof mainbalance)   // string type aita
    const convertmainbalance = parseFloat(mainbalance);

    // if (convertpin === 1234) {
    //   // console.log('ok add kora jaba')
    //   const sum = convertmainbalance + convertAmount;
    //   //    console.log(sum);
    //   const mainbalance = (document.getElementById("main-balance").innerText =
    //     sum); //sum taka add korlam
    // } else {
    //   // console.log('wrong pin')
    //   alert("Wrong pin"); // alert korba jodi pin number vul hoi
    // }

    //
    const AccountNumber = document.getElementById("account-number").value;

    if (AccountNumber.length === 11) {
      if (convertpin === 1234) {
        console.log("ok add kora jaba");
        const sum = convertmainbalance + convertAmount;
        console.log(sum);
        const mainbalance = (document.getElementById("main-balance").innerText =
          sum); //sum taka add korlam
      } else {
        // console.log('pin thik nai')
        alert("pin thik nai");
      }
    } else {
      // console.log('need valid account number')
      alert("need valid account number");
    }
  });
