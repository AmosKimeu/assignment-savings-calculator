                //making changes to the html body
                function onLoadBuildDivTblHeader(){
                   // document.getElementById('myDiv').innerHTML = "<h3>My Savings</h3>";
                    document.getElementById('myDiv').innerHTML = "";
                    document.getElementById('myDiv').innerHTML = "<table id=\"myTbl\"><tr><th>Month</th><th>Interest</th><th>Balance </th></tr><tbody></tbody></table>";
                }

                //calculate savings
                function calculate(){
                    
                    var myPrincipal =  parseFloat(document.getElementById('txtPrincipal').value);
                    var myRate =  parseFloat(document.getElementById('txtRate').value);
                    var myYears =  parseFloat(document.getElementById('txtYear').value) * 12;
                    var newAmount = 0.0;
                    var newInterest = 0.0;
                    //alert(myPrincipal + " "+ myRate +" " +myYears);
                    
                    onLoadBuildDivTblHeader();

                    for (var i = 1; i <= myYears; i++){
                        newAmount = myPrincipal * (1 + ((myRate/100)/12));
                        newInterest = newAmount - myPrincipal;
                        myPrincipal =  newAmount;

                        //console.log("current month: " + i + " " + newInterest.toFixed(2) + " " + myPrincipal.toFixed(2)); 
                        updateHtmlTable(i,newInterest,myPrincipal);
                    }
                }
                
                //making changes to the html body
                function updateHtmlTable(curMonth,curInterest,curSaving){
                    // Find a <table> element with id="myTbl":
                    var table = document.getElementById("myTbl");

                    // Create an empty <tr> element: Use CURRENT MONTH counter as row counter
                    var row = table.insertRow(curMonth);

                    // Insert new cells (<td> elements) at the 1st, 2nd and 3rd positions of the "new" <tr> element:
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    // Add some text to the new cells:
                    cell1.innerHTML = curMonth;
                    cell2.innerHTML = curInterest.toFixed(2);
                    cell3.innerHTML = curSaving.toFixed(2);

                }

                //reset input
                function reset(){
                    document.getElementById('txtPrincipal').value = "";
                    document.getElementById('txtRate').value = "";
                    document.getElementById('txtYear').value = "";
                
                    onLoadBuildDivTblHeader();
                }