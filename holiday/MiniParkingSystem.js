const prompt = require("prompt-sync")();

let parkingSlot = new Array(20).fill(0);

while (true){
    console.log("Welcome to Mini Parking System.\n");
    console.log("1. Park car automatically")
    console.log("2. Choose a slot to park your car");
    console.log("3. Remove your car from the slot");
    console.log("4. Display parking status");
    console.log("0. Exit the app\n");

    let choice = parseInt(prompt("Choose an option: "));

    if (choice == 0){
        console.log("Exiting app...");
        break;
    }

    switch (choice){
        case 1:
            let index;
            for (index = 0; index < parkingSlot.length; index++){
                if (parkingSlot[index] == 0){
                    parkingSlot[index] = 1;
                    console.log("Your car is parked at slot " + (index + 1));
                    break;
                }
            }

            if (index == parkingSlot.length){
                System.out.println("Parking lot is full");
            }
            console.log();
            break;

        case 2:
            let slotChoice = parseInt(prompt("Enter a slot to park from (1-20): "));

            if (slotChoice < 1 || slotChoice > 20){
                console.log("Invalid choice");
            } 
            else if (parkingSlot[slotChoice - 1] == 1){
                console.log("Slot already occupied");
            } 
            else {
                parkingSlot[slotChoice - 1] = 1;
                console.log("Your car is parked at slot " + slotChoice + "\n");
            }
            break;

        case 3:
            let removeSlotNumber = parseInt(prompt("Enter the slot number to remove your car: "));

            if (removeSlotNumber < 1 || removeSlotNumber > 20){
                console.log("Invalid choice");
            } 
            else if (parkingSlot[removeSlotNumber - 1] == 0){
                console.log("Slot already empty");
            } 
            else {
                parkingSlot[removeSlotNumber - 1] = 0;
                console.log("Your car is removed from slot " + removeSlotNumber + "\n");
            }
            break;

        case 4:
            console.log("\nParking status:");
            for (let count = 0; count < parkingSlot.length; count++) {
                let status = "";
                if (parkingSlot[count] == 0) {
                    status = "Empty";
                } 
                else {
                    status = "Occupied";
                }
                console.log("Slot " + (count + 1) + ": " + status);
            }
            console.log();
            break;

        default:
            console.log("Invalid choice, choose an option from the listed options\n");
            break;
    }
}
