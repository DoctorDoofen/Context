class PartyPlanner{
	constructor(guestlist){
		this.guestlist = [];
	}

	addToGuestList(name){
		this.guestlist.push(name);
	}

	throwParty(){
		if(this.guestlist.length === 0) {
			return "Gotta add people to the guest list"
		}
		else {
			for(let guest of this.guestlist) {
				return `Welcome to the party ${guest}`
			}

		}

	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
