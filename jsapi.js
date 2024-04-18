// console.debug("js linked");
// sr1.innerText = "5";
let invoicCounter = 0;
const day = new Date().toLocaleString("en-US", { day: "2-digit" });
const month = new Date().toLocaleString("en-US", { month: "2-digit" });
const year = new Date().getFullYear();

let itemTable = document.getElementById("itemTable");

let mainCounter = 1;

document.getElementById("invoicDateInp").value = `${year}-${month}-${day}`;
document.getElementById("dateOfSupplyInp").value = `${year}-${month}-${day}`;

document.getElementById('addBtn').addEventListener('click', 
    function(event) {
   
        // Handle the form data
        // event.preventDefault();
});


let tableItems = [];

let invoiceNoInpVal;
let invoicDateInpVal;
let reverselChargeInpVal;
let stateInpVal;
let transportModeInpVal;
let lrNoInpVal;
let dateOfSupplyInpVal;
let placeOfSupplyInpVal;
let billtoPartyNameInpVal;
let billtoPartyAddressInpVal;
let billtoPartyGstInpVal;
let billtoPartyStateInpVal;
let billtoPartyCodeInpVal;
let shiptoPartyNameInpVal;
let shiptoPartyAddressInpVal;
let shiptoPartyGstInpVal;
let shiptoPartyStateInpVal;
let shiptoPartyCodeInpVal;
let amountbeforeTaxVal;
let sgstVal;
let cgstVal;
let igstVal;
let totalTaxAmountVal;
let totalTaxafterAmountVal;

function submitClicked(){
    const invoiceNoInp = document.getElementById('invoiceNoInp')
    const invoicDateInp = document.getElementById('invoicDateInp');
    const reverselChargeInp = document.getElementById('reverselChargeInp');
    const stateInp = document.getElementById('stateInp');
    const transportModeInp = document.getElementById('transportModeInp');
    const lrNoInp = document.getElementById('lrNoInp');
    const dateOfSupplyInp = document.getElementById('dateOfSupplyInp');
    const placeOfSupplyInp = document.getElementById('placeOfSupplyInp');
    const billtoPartyNameInp = document.getElementById('billtoPartyNameInp');
    const billtoPartyAddressInp = document.getElementById('billtoPartyAddressInp');
    const billtoPartyGstInp = document.getElementById('billtoPartyGstInp');
    const billtoPartyStateInp = document.getElementById('billtoPartyStateInp');
    const billtoPartyCodeInp = document.getElementById('billtoPartyCodeInp');
    const shiptoPartyNameInp = document.getElementById('shiptoPartyNameInp');
    const shiptoPartyAddressInp = document.getElementById('shiptoPartyAddressInp');
    const shiptoPartyGstInp = document.getElementById('shiptoPartyGstInp');
    const shiptoPartyStateInp = document.getElementById('shiptoPartyStateInp');
    const shiptoPartyCodeInp = document.getElementById('shiptoPartyCodeInp');
    const amountbeforeTax  = document.getElementById('amountbeforeTax');
    const sgst = document.getElementById('sgst');
    const cgst = document.getElementById('cgst');
    const igst = document.getElementById('igst');
    const totalTaxAmount = document.getElementById('totalTaxAmount');
    const totalTaxafterAmount = document.getElementById('totalTaxafterAmount');

    invoiceNoInpVal = invoiceNoInp.value;
    invoicDateInpVal = invoicDateInp.value;
    reverselChargeInpVal = reverselChargeInp.value;
    stateInpVal = stateInp.value;
    transportModeInpVal = transportModeInp.value;
    lrNoInpVal = lrNoInp.value;
    dateOfSupplyInpVal = dateOfSupplyInp.value;
    placeOfSupplyInpVal = placeOfSupplyInp.value;
    billtoPartyNameInpVal = billtoPartyNameInp.value;
    billtoPartyAddressInpVal = billtoPartyAddressInp.value;
    billtoPartyGstInpVal = billtoPartyGstInp.value;
    billtoPartyStateInpVal = billtoPartyStateInp.value;
    billtoPartyCodeInpVal = billtoPartyCodeInp.value;
    shiptoPartyNameInpVal = shiptoPartyNameInp.value;
    shiptoPartyAddressInpVal = shiptoPartyAddressInp.value;
    shiptoPartyGstInpVal = shiptoPartyGstInp.value;
    shiptoPartyStateInpVal = shiptoPartyStateInp.value;
    shiptoPartyCodeInpVal = shiptoPartyCodeInp.value;
    amountbeforeTaxVal = amountbeforeTax.innerText;
    sgstVal = sgst.innerText;
    cgstVal = cgst.innerText;
    igstVal = igst.innerText;
    totalTaxAmountVal = totalTaxAmount.innerText;
    totalTaxafterAmountVal = totalTaxafterAmount.innerText;

    let cnt = 0;
    for (let row of itemTable.rows) 
    {
        if(cnt == 0) {
            cnt++;
            continue;
        }
        let s = row.cells[6].innerText;
        const item = [
            row.cells[1].childNodes[1].childNodes[1].innerText,            
            row.cells[1].childNodes[1].childNodes[3].innerText,
            row.cells[2].innerText,
            row.cells[3].innerText,
            row.cells[4].innerText,
            row.cells[5].innerText,
            row.cells[6].innerText]
        tableItems.push(item);
    }

    const myObject = {
        invoiceNoInp : invoiceNoInpVal,
        invoicDateInp : invoicDateInpVal,
        reverselChargeInp : reverselChargeInpVal,
        stateInp : stateInpVal,
        transportModeInp : transportModeInpVal,
        lrNoInp : lrNoInpVal,
        dateOfSupplyInp : dateOfSupplyInpVal,
        placeOfSupplyInp : placeOfSupplyInpVal,
        billtoPartyNameInp : billtoPartyNameInpVal,
        billtoPartyAddressInp : billtoPartyAddressInpVal,
        billtoPartyGstInp : billtoPartyGstInpVal,
        billtoPartyStateInp : billtoPartyStateInpVal,
        billtoPartyCodeInp : billtoPartyCodeInpVal,
        shiptoPartyNameInp : shiptoPartyNameInpVal,
        shiptoPartyAddressInp : shiptoPartyAddressInpVal,
        shiptoPartyGstInp : shiptoPartyGstInpVal,
        shiptoPartyStateInp : shiptoPartyStateInpVal,
        shiptoPartyCodeInp : shiptoPartyCodeInpVal,
        amountbeforeTax : amountbeforeTaxVal,
        sgst : sgstVal,
        cgst : cgstVal,
        igst : igstVal,
        totalTaxAmount : totalTaxAmountVal,
        totalTaxafterAmount : totalTaxafterAmountVal,
        tableData : tableItems,
    };

    const myObjectString = JSON.stringify(myObject);
    localStorage.setItem('objectGreeting', myObjectString);
    // setTimeout(() => {
        // window.location.replace(`https://google.com`);
    //   });
}

function test(){
    const invoiceNoInp = document.getElementById('invoiceNoInp')
    const invoicDateInp = document.getElementById('invoicDateInp');
    const reverselChargeInp = document.getElementById('reverselChargeInp');
    const stateInp = document.getElementById('stateInp');
    const transportModeInp = document.getElementById('transportModeInp');
    const lrNoInp = document.getElementById('lrNoInp');
    const dateOfSupplyInp = document.getElementById('dateOfSupplyInp');
    const placeOfSupplyInp = document.getElementById('placeOfSupplyInp');
    const billtoPartyNameInp = document.getElementById('billtoPartyNameInp');
    const billtoPartyAddressInp = document.getElementById('billtoPartyAddressInp');
    const billtoPartyGstInp = document.getElementById('billtoPartyGstInp');
    const billtoPartyStateInp = document.getElementById('billtoPartyStateInp');
    const billtoPartyCodeInp = document.getElementById('billtoPartyCodeInp');
    const shiptoPartyNameInp = document.getElementById('shiptoPartyNameInp');
    const shiptoPartyAddressInp = document.getElementById('shiptoPartyAddressInp');
    const shiptoPartyGstInp = document.getElementById('shiptoPartyGstInp');
    const shiptoPartyStateInp = document.getElementById('shiptoPartyStateInp');
    const shiptoPartyCodeInp = document.getElementById('shiptoPartyCodeInp');

    invoiceNoInp.value = "invoiceNoInp";
    reverselChargeInp.value = "reverselChargeInp";
    stateInp.value = "stateInp";
    transportModeInp.value = "transportModeInp";
    lrNoInp.value = "lrNoInp";
    dateOfSupplyInp.value = "2024-04-18";
    placeOfSupplyInp.value = "placeOfSupplyInp";
    billtoPartyNameInp.value = "billtoPartyNameInp";
    billtoPartyAddressInp.value = "billtoPartyAddressInp";
    billtoPartyGstInp.value = "billtoPartyGstInp";
    billtoPartyStateInp.value = "billtoPartyStateInp";
    billtoPartyCodeInp.value = "billtoPartyCodeInp";
    shiptoPartyNameInp.value = "shiptoPartyNameInp";
    shiptoPartyAddressInp.value = "shiptoPartyAddressInp";
    shiptoPartyGstInp.value = "shiptoPartyGstInp";
    shiptoPartyStateInp.value = "shiptoPartyStateInp";
    shiptoPartyCodeInp.value = "shiptoPartyCode";

    let pr1_1 = document.getElementById("pr1_1");
    let pr1_2 = document.getElementById("pr1_2");
    let hsn = document.getElementById("hsn1"); 
    let uom = document.getElementById("uom1"); 
    let qty = document.getElementById("qty1"); 
    let rate = document.getElementById("rate1"); 

    pr1_1.value = "PR1"
    pr1_2.value = "PR1_2"
    hsn.value = 1234
    uom.value = "KGS"
    qty.value = 12
    rate.value = 10

};

// test();

function updateAmount(){
    let totalAmount  = 0;
    let sgst = 0;
    let cgst = 0;
    let igst = 0;
    let totalTaxAmount = 0;
    let totalAmountAfterTax = 0;
    mainCounter=0;
    for (let row of itemTable.rows) 
    {
        let s = row.cells[6].innerText;
        let val = parseFloat(s) || 0;
        totalAmount += val
        if(mainCounter != 0){
            row.cells[0].innerText = mainCounter;
        }
        mainCounter++;
    }
    sgst = totalAmount * 0.09;
    cgst = sgst;
    igst = totalAmount * 0.18;
    totalTaxAmount = sgst + cgst + igst;
    totalAmountAfterTax = totalAmount + totalTaxAmount;

    let grandTotal = document.getElementById("amountbeforeTax");
    grandTotal.innerText = totalAmount.toFixed(2);

    let sgstContainer = document.getElementById("sgst")
    sgstContainer.innerText = sgst.toFixed(2);

    let cgstContainer = document.getElementById("cgst")
    cgstContainer.innerText = cgst.toFixed(2);

    let igstContainer = document.getElementById("igst")
    igstContainer.innerText = igst.toFixed(2);

    let totalTaxAmountContainer = document.getElementById("totalTaxAmount")
    totalTaxAmountContainer.innerText = totalTaxAmount.toFixed(2);
    
    let totalTaxafterAmountContainer = document.getElementById("totalTaxafterAmount")
    totalTaxafterAmountContainer.innerText = totalAmountAfterTax.toFixed(2);

}


function addInvoiceItem(e){
    invoicCounter++;

    let pr1_1 = document.getElementById("pr1_1");
    let pr1_2 = document.getElementById("pr1_2");
    let hsn = document.getElementById("hsn1"); 
    let uom = document.getElementById("uom1"); 
    let qty = document.getElementById("qty1"); 
    let rate = document.getElementById("rate1"); 

    // let taxbleValue = document.getElementById("taxbleValue1");



    
    let pr1_1Value = pr1_1.value;
    let pr1_2Value = pr1_2.value;
    let hsnValue = hsn.value;
    let uomValue = uom.value;
    let qtyValue = qty.value;
    let rateValue = rate.value;
    let taxbleValue = qtyValue * rateValue;
    

    let rt = 1;

    // $("#uom1").focus(function(){
    //     alert('Please fill out this field');
    // });

    if( pr1_1.value == ""){
        rt = 0;
    }
    
    if( hsn.value == ""){
        rt = 0;
        
    }
    
    if( uom.value == ""){
        rt = 0;
    }
    if( qty.value == ""){
        rt = 0;
        
    }
    if( rate.value == ""){
        rt = 0;
    }

    if(rt == 0){
        return;
    }

    const newItemRow = `
    <tr class="align-center" id=itemRow${invoicCounter}>
        <td class="width_5"> ${mainCounter} </td>
            <td>
                <div class="flex-col align-center">
                    <label class="width_30"> ${pr1_1Value} </label>
                    <label class="width_30"> ${pr1_2Value} </label>
                </div>        
            </td>
            <td class="width_10"> ${hsnValue} </td>
            <td class="width_10"> ${uomValue} </td>
            <td class="width_10"> ${qtyValue} </td>
            <td class="width_10"> ${rateValue} </td>
            <td class="width_15"> ${taxbleValue.toFixed(2)} </td>
            <td class="width_10"> <button class="display-inline-block width_5" style="margin: 0 1%;" id="removeBtn"   onclick="removeItems(${invoicCounter})"> Remove </button> </td>
        </tr>
    `;
    mainCounter++;

    $("#itemTable").append(newItemRow);
    updateAmount();

    pr1_1.value = "";
    pr1_2.value = "";
    hsn.value = "";
    uom.value = "";
    qty.value = "";
    rate.value = "";
}

function removeItems(itemId){
    $(`#itemRow${itemId}`).remove();
    updateAmount();
}
