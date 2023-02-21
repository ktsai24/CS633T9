import {local} from "wix-storage"
import wixData from 'wix-data';

let flightID = local.getItem("flightID") 
let airline =  local.getItem("airline")
let price =  local.getItem("price")
let fromLoc =  local.getItem("payfrom")
let toLoc =  local.getItem("payto")
let fromDate =  local.getItem("payfromdate")
let toDate =  local.getItem("paytodate")
let ForH = local.getItem("ForH")

let hotelID =  local.getItem("hotelID")
let hotelName =  local.getItem("hotelName")

let firstname = local.getItem("firstName")
let lastname = local.getItem("lastName")
let CCN = local.getItem("CCN")
let CCV = local.getItem("CCV")

$w.onReady(function () {
		if(ForH === "F"){
			let paymentString = "Congratulations! Your order is now booked!\nFlight ID: " + flightID + "\nAirline: " + airline + "\nPrice: $" + price + "\nFrom: " + fromLoc + "\nTo: " + toLoc + "\nDeparture Date: " + fromDate + "\nReturning Date: " + toDate;
			$w("#Section1RegularLongtext1").text = paymentString;
			let toInsert = {
				"itemId": flightID,
				"company": airline,
				"price": price,
				"firstname": firstname,
				"lastname": lastname,
				"ccn": CCN,
				"ccv": CCV
			}
			wixData.insert("ConfirmedPayments", toInsert)
	}
	else{
		let paymentString = "Congratulations! Your order is now booked!\nItem ID: " + hotelID + "\nHotel: " + hotelName + "\nPrice: $" + price + "\nLocation: " + fromLoc + "\nCheck-in Date: " + fromDate + "\nCheck-out Date: " + toDate;
		$w("#Section1RegularLongtext1").text = paymentString;
		let toInsert = {
				"itemId": hotelID,
				"company": hotelName,
				"price": price,
				"firstname": firstname,
				"lastname": lastname,
				"ccn": CCN,
				"ccv": CCV
		}
			wixData.insert("ConfirmedPayments", toInsert)
	}
	

});
