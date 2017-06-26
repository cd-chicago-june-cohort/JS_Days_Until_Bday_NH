function bdayCntDwn(){

for(var days = 60; days > 0; days--) {
    if(days <= 60 && days > 30) {
        console.log("It's " + days + " days until my Bday. I'm soooo young.");
    }
    else
    {
        if(days <=30 && days >5) {
            console.log("It's " + days + " days until my Bday. Let's plan a fiesta!");
        }
        else
        {
            if(days <= 5 && days > 1) {
                console.log("ONLY " + days + " days until my Bday. Count it down, baby.");
            }
            else
            {
                console.log("It's My Bday! BOOOOOM!");
            }
        }
    }
}
}    

bdayCntDwn();   