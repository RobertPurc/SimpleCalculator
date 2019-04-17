     //storing previous value
     let prevVal = "";
     //storing new updated value
     let newVal = "";
     //storing value to entry on window ~ input
     let resultVal = "";
     //storing previous math operator 
     let mathOperator = "";
     //storing clicked value 
     let decimalClicked = false;
     //holding value that we want to store in memory 
     let valMemStored = "";


     function numButPress(num) {
         //checking clicked number
         if (resultVal) {
             //starting a new number
             newVal = num;
             // reset to create a new result
             resultVal = "";

         } else {
             //blocking use multiple decimals
             if (num === '.') {
                 if (decimalClicked != true) {
                     newVal += num;
                     decimalClicked = true;
                 }
             } else {
                 newVal += num;
             }
         }
         //update value on screen 
         document.getElementById("entry").value = newVal;
     }

     function mathButPress(operator) {

         // Check if there was a previous calculation
         // by seeing if resultVal has a value

         // If result doesn't have a value then store
         // the current val as a previous for the next 
         // calculation
         if (!resultVal) {
             //prew value becomeing a new value 
             prevVal = newVal;

         } else {

             //and this new value i current result 
             prevVal = resultVal;
         }

         //reset 
         newVal = "";
         decimalClicked = false;
         mathOperator = operator;
         resultVal = "";
         document.getElementById("entry").value = "";
     }

     function equalButPress(num) {

         //reset decimal clicked
         decimalClicked = false;

         //convert string numbers to floats
         prevVal = parseFloat(prevVal);
         newVal = parseFloat(newVal);
         //do calculations based on stored operator
         switch (mathOperator) {
             case "+":
                 resultVal = prevVal + newVal;
                 break;

             case "-":
                 resultVal = prevVal - newVal;
                 break;

             case "*":
                 resultVal = prevVal * newVal;
                 break;
             case "/":
                 resultVal = prevVal / newVal;
                 break;
                 //if equals is pressed without any operator leave it as is
             default:
                 resultVal = newVal;
         }
         // Store the current value as the previous so that 
         // I can except to next value in the calculation
         prevVal = resultVal;
         //display calculations
         document.getElementById("entry").value = resultVal;
     }
// Clear everything except memory
     function clearButPress() {
         prevVal = "";
         newVal = "";
         resultVal = "";
         mathOperator = "";
         decimalClicked = false;
         document.getElementById("entry").value = 0;
     }
// Store the current value in the entry window
     function copyButPress(num) {
         valMemStored = document.getElementById("entry").value;
     }
// If a value has been stored paste it in the entry
// window and assign it as the newVal
     function pasteButPress(num) {
         if (valMemStored) {
             document.getElementById("entry").value = valMemStored;
             newVal = valMemStored;
         }
     }