document.getElementById("cashout").style.display = "none";
document.getElementById("transcationhistory").style.display = "none";


document.getElementById("add-moneybox").addEventListener("click", function () {

  handtoggle("addmoney", "block");
  handtoggle("cashout", "none");
  handtoggle("transcationhistory","none" ) 


  // document.getElementById('cashout').style.display="none";
  // document.getElementById('addmoney').style.display="block";
});
document.getElementById("cash-outbox").addEventListener("click", function () {

    handtoggle("addmoney", "none");
    handtoggle("cashout", "block");
    handtoggle("transcationhistory","none" ) 

  
    // document.getElementById('cashout').style.display="block";
    // document.getElementById('addmoney').style.display="none";
  });
  

