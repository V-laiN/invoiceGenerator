
const myObjectString2 = localStorage.getItem('objectGreeting');
const myObject2 = JSON.parse(myObjectString2);
const taxamount = myObject2.totalTaxAmount;
const amountbeforeTax = myObject2.amountbeforeTax;

const invoiceNoInp = document.getElementById('invoiceNo')
const invoicDateInp = document.getElementById('invoiceDate');
const reverselChargeInp = document.getElementById('reverseCharge');
const stateInp = document.getElementById('state');
const transportModeInp = document.getElementById('transportMode');
const lrNoInp = document.getElementById('lrNo');
const dateOfSupplyInp = document.getElementById('dateofSupply');
const placeOfSupplyInp = document.getElementById('placeofSupply');
const billtoPartyNameInp = document.getElementById('billtoPartyName');
const billtoPartyAddressInp = document.getElementById('billtoPartyAdd');
const billtoPartyGstInp = document.getElementById('billtoPartyGst');
const billtoPartyStateInp = document.getElementById('billtoPartyState');
const billtoPartyCodeInp = document.getElementById('billtoPartyCode');
const shiptoPartyNameInp = document.getElementById('shiptoPartyName');
const shiptoPartyAddressInp = document.getElementById('shiptoPartyAdd');
const shiptoPartyGstInp = document.getElementById('shiptoPartyGst');
const shiptoPartyStateInp = document.getElementById('shiptoPartyState');
const shiptoPartyCodeInp = document.getElementById('shiptoPartyCode');
const amountinWord = document.getElementById('amountinWord');

const totalAmountbeforTax = document.getElementById('totalAmountbeforTax');
const addSgst = document.getElementById('addSgst');
const addCgst = document.getElementById('addCgst');
const addIgst = document.getElementById('addIgst');
const totalTaxAmount = document.getElementById('totalTaxAmount');
const totalTaxafterAmount = document.getElementById('totalTaxafterAmount');
const gstonReverseCharge = document.getElementById('gstonReverseCharge');

invoiceNoInp.innerText = myObject2.invoiceNoInp;
invoicDateInp.innerText = myObject2.invoicDateInp.split("-").reverse().join("-");;
reverselChargeInp.innerText = myObject2.reverselChargeInp.toUpperCase();
stateInp.innerText = myObject2.stateInp.toUpperCase();
transportModeInp.innerText = myObject2.transportModeInp;
lrNoInp.innerText = myObject2.lrNoInp;
dateOfSupplyInp.innerText = myObject2.dateOfSupplyInp.split("-").reverse().join("-");;
placeOfSupplyInp.innerText = myObject2.placeOfSupplyInp.toUpperCase();
billtoPartyNameInp.innerText = myObject2.billtoPartyNameInp.toUpperCase();
billtoPartyAddressInp.innerText = myObject2.billtoPartyAddressInp.toUpperCase();
billtoPartyGstInp.innerText = myObject2.billtoPartyGstInp.toUpperCase();
billtoPartyStateInp.innerText = myObject2.billtoPartyStateInp.toUpperCase();
billtoPartyCodeInp.innerText = myObject2.billtoPartyCodeInp;
shiptoPartyNameInp.innerText = myObject2.shiptoPartyNameInp.toUpperCase();
shiptoPartyAddressInp.innerText = myObject2.shiptoPartyAddressInp.toUpperCase();
shiptoPartyGstInp.innerText = myObject2.shiptoPartyGstInp.toUpperCase();
shiptoPartyStateInp.innerText = myObject2.shiptoPartyStateInp.toUpperCase();
shiptoPartyCodeInp.innerText = myObject2.shiptoPartyCodeInp;



var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = 'Rupees ';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}
// amountinWord.innerText = str;
amountinWord.innerText = inWords(parseInt(myObject2.totalTaxafterAmount));

totalAmountbeforTax.innerText = myObject2.amountbeforeTax
addSgst.innerText = myObject2.sgst
addCgst.innerText = myObject2.cgst
addIgst.innerText = myObject2.igst
totalTaxAmount.innerText = myObject2.totalTaxAmount
totalTaxafterAmount.innerText = myObject2.totalTaxafterAmount
gstonReverseCharge.innerText = "-";

const tableItems = myObject2.tableData;

let i = 0;

for(i=0;i<tableItems.length;i++){
    const sr = document.getElementById(`sr${i+1}`);
    // const pr_1 = document.getElementById(`pr1_1`);
    const pr_1 = document.getElementById(`pr${i+1}_1`);
    const pr_2 = document.getElementById(`pr${i+1}_2`);
    const hsn = document.getElementById(`hsn${i+1}`);
    const uom = document.getElementById(`uom${i+1}`);
    const qty = document.getElementById(`qty${i+1}`);
    const rate = document.getElementById(`rate${i+1}`);
    const taxbleValue = document.getElementById(`taxableVal${i+1}`);

    sr.innerText = i+1;
    pr_1.innerText = tableItems[i][0];
    pr_2.innerText = tableItems[i][1];
    hsn.innerText = tableItems[i][2];
    uom.innerText = tableItems[i][3];
    qty.innerText = tableItems[i][4];
    rate.innerText = tableItems[i][5];
    taxbleValue.innerText = tableItems[i][6];
}

while(i<6){
    const sr = document.getElementById(`sr${i+1}`);
    // const pr_1 = document.getElementById(`pr1_1`);
    const pr_1 = document.getElementById(`pr${i+1}_1`);
    const pr_2 = document.getElementById(`pr${i+1}_2`);
    const hsn = document.getElementById(`hsn${i+1}`);
    const uom = document.getElementById(`uom${i+1}`);
    const qty = document.getElementById(`qty${i+1}`);
    const rate = document.getElementById(`rate${i+1}`);
    const taxbleValue = document.getElementById(`taxableVal${i+1}`);

    sr.innerText = "";
    pr_1.innerText = "";
    pr_2.innerText = "";
    hsn.innerText = "";
    uom.innerText = "";
    qty.innerText = "";
    rate.innerText = "";
    taxbleValue.innerText = "";
    i++;
}

window.print();