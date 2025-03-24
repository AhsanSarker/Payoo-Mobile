document.getElementById('cash-out').style.display="none";

document.getElementById('addM').addEventListener('click',function(){
    document.getElementById('cash-out').style.display="none";
    document.getElementById('add-money').style.display="block";
})
document.getElementById('cashO').addEventListener('click',function(){
    document.getElementById('cash-out').style.display="block";
    document.getElementById('add-money').style.display="none";
})
