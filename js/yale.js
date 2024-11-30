/* tydi.js » Yale™ Library - Yet Another Laravel Elevator © 2024 ∞ AO™ • @osawereao • www.osawere.com ∞ Apache License */

function oFormLogout(formID = "logoutForm") {
	let formElem = document.getElementById(formID);
	if (formElem) {
		return formElem.submit();
	}
}
