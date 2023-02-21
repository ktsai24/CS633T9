// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

/**
 *	Adds an event handler that fires when a visitor submits a Wix Form and it is successfully received by the server.
 */
export function wixForms1_wixFormSubmitted(fields) {
	let name = fields.fields[4].fieldValue
	let email = fields.fields[3].fieldValue
	let phone = fields.fields[2].fieldValue
	let address = fields.fields[1].fieldValue
	let subject = fields.fields[0].fieldValue
	let message = fields.fields[5].fieldValue

	let toInsert = {
		"name": name,
		"email": email,
		"phone": phone,
		"address": address,
		"subject": subject,
		"message": message
	}

	wixData.insert("contact11", toInsert)
}
