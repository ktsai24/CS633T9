// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {local} from 'wix-storage'

local.setItem("ForH", "F")

$w.onReady(function () {
	console.log("Hello world!");
});

/**
 *	Adds an event handler that fires when a visitor submits a Wix Form and it is successfully received by the server.
 */
export function multiStepForm1_wixFormSubmitted(fields) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	console.log(fields)
	console.log(fields.fields[2].fieldValue)
	let leavingFromQuery = fields.fields[0].fieldValue;
	let goingToQuery = fields.fields[1].fieldValue;
	let departingDate =JSON.stringify(fields.fields[2].fieldValue);
	let returningDate = JSON.stringify(fields.fields[3].fieldValue);
	
	let departingDate2 = departingDate.substring(1,11)
	let returningDate2 = returningDate.substring(1,11)

	local.setItem("lfqkey", leavingFromQuery);
	local.setItem("gtkey", goingToQuery);
	local.setItem("ddatekey", departingDate2);
	local.setItem("rdatekey", returningDate2);


	console.log("Form Submitted")
	console.log("Flight from " + leavingFromQuery + " going to " + goingToQuery + " on " + departingDate + " and retuning on " + returningDate )
}
