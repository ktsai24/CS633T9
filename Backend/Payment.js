import wixLocation from 'wix-location';
import {local} from "wix-storage"

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

export function button61_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	local.setItem("firstName", $w("#input1").value)
	local.setItem("lastName", $w("#input2").value)
	local.setItem("email", $w("#input3").value)
	local.setItem("street", $w("#input4").value)
	local.setItem("city", $w("#input5").value)
	local.setItem("state", $w("#input6").value)
	local.setItem("zip", $w("#input8").value)
	local.setItem("country", $w("#input7").value)
	local.setItem("CCN", $w("#input9").value)
	local.setItem("CCV", $w("#input10").value)


	let ForH = local.getItem("ForH")
	wixLocation.to("/blank-6")


}
