import wixData from 'wix-data';
import {local} from "wix-storage"
import wixLocation from 'wix-location';

$w.onReady(function () {
	console.log("Hello world!");

  let toQuery = local.getItem("gtkey");
  let ddateQuery = local.getItem("ddatekey");
  let rdateQuery = local.getItem("rdatekey");

  console.log(toQuery);
  console.log(ddateQuery);
  console.log(rdateQuery);

  $w("#dynamicDataset").setFilter( wixData.filter()
  .eq("address",toQuery)
  .eq("From",ddateQuery)
  .eq("To",rdateQuery)
  );
  console.log("Filtered data")
});


export function table1_rowSelect(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
  let rowData = event.rowData;
  console.log(rowData)
  
  local.setItem("hotelID", rowData["_id"]);
  local.setItem("hotelName", rowData["title"]);
  local.setItem("price", rowData["price"]);
  local.setItem("payfrom", rowData["address"]);
  local.setItem("payfromdate", rowData["From"]);
  local.setItem("paytodate", rowData["To"]);

  wixLocation.to("/payment")
}
