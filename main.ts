let guests: string[] = ["IMRAN ALI", "BABAR ALI", "IMTIAZ ALI", "IRFAN ALI"];

console.log("Sorry, I can only invite two people for dinner.");
 
while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);}

    }
    

console.log();

for (const guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

console.log();

guests.pop();
guests.pop();

console.log("Remaining guests list:", guests);
