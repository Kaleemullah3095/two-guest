var guests = ["IMRAN ALI", "BABAR ALI", "IMTIAZ ALI", "IRFAN ALI"];
console.log("Sorry, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
console.log();
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
console.log();
guests.pop();
guests.pop();
console.log("Remaining guests list:", guests);
