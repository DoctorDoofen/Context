class PartyPlanner{
	constructor(guestlist){
		this.guestList = [];
	}

	addToGuestList(name){
		this.guestList.push(name);
	}

	throwParty(){
		if(this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		}
		else {
		// 	for(let guest of this.guestList) {
				for(let i = 0; i < this.guestList.length; i++){
				return `Welcome to the party` + " " + this.guestList[i]// + " and " + this.guestList[i+1]
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
