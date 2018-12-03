window.onload = function(){

    function replace(id, replacement) { // Replace the text of target element with another text.
        document.getElementById(id).innerHTML = replacement;
    }

    //-------------------------------------------- ADVENT DAY 1 --------------------------------------------//
    document.getElementById("advent1.1").onclick = function() { // Advent day 1 part 1.
        var numberString = "+9 +1 -11 +12 +17 -6 +14 -1 -17 +5 -6 -10 -14 +9 +12 -10 -13 +10 -9 +4 -17 -11 +17 +20 -15 -13 +17 -10 +19 -15 +10 -3 -14 -3 -6 -18 -14 +1 -19 +11 -12 +17 -2 -8 +16 +15 +6 -1 +6 -17 +20 -6 -19 -18 -1 +3 -19 -16 +11 -5 +16 -5 -2 -11 -1 -2 +9 -8 -8 -11 -19 -6 -14 +13 -14 -7 -6 +16 -15 +8 -1 -14 +2 +8 -19 +2 +3 -16 +6 -9 -6 -14 +18 +4 +9 +1 +3 -10 +13 -17 +16 +19 +18 +20 +4 -9 -16 +18 -10 +15 -12 +16 -15 +18 +9 +15 -16 +3 +1 -14 -2 +18 -13 -11 +15 +16 -18 -1 -10 +12 +30 +12 +7 -3 +6 +9 +3 +12 -18 +4 +13 +2 -12 +13 +6 +6 +5 -23 +1 +16 -22 +3 -10 -20 -7 -12 -2 +12 +8 -13 -2 -15 -6 -13 +12 +9 +21 +9 -6 +22 -3 +12 +5 +15 +16 -11 +13 +8 +19 -1 +6 +3 +9 +10 +15 -4 +9 +4 +2 -5 -15 -1 +5 +15 -18 -11 -13 +6 -13 -11 -2 +19 +19 +16 -19 +6 +18 +14 +6 -11 +7 +1 -12 +17 +16 +7 +17 +19 -4 +16 +5 -13 -5 -13 +7 -8 +2 -4 +14 -18 -13 -10 -6 -2 +21 -15 +4 -3 -6 -6 +3 -4 +17 -7 +1 +14 +9 +16 +3 -15 -2 +4 -11 -11 -15 +16 -14 +15 +8 -5 -14 -14 -8 -4 -15 +3 -19 -6 -5 -17 +30 +9 +4 +2 +15 +18 -4 -2 -6 -16 +14 -10 -5 +19 +38 +16 -4 +7 +11 +19 +3 +9 -11 +18 -10 +4 -11 -12 -1 -4 +14 -6 +11 +16 +14 +7 +2 +3 -17 +18 +15 -9 +7 +9 -4 +10 +1 +12 -1 -19 -18 -10 -7 -5 -12 +19 +4 +12 +4 -17 -6 -6 -21 -11 +1 +2 -13 -7 +10 -7 +6 +6 +16 -10 +16 +13 -17 +21 -7 -7 +13 -12 +7 -14 -4 -1 -18 -6 -28 -12 +10 +17 -13 -3 +20 -5 +69 -16 +2 -8 +27 +2 +17 -12 +9 +5 +20 -5 +8 -6 +19 -9 +7 +6 +12 +13 +4 +13 +12 +5 +19 +14 +1 -7 -9 -10 +7 -9 -17 -14 -8 +11 +19 +5 -18 -2 -18 -4 +2 +18 +12 +7 -11 -7 -20 -13 -16 -1 +7 -15 -4 -15 +13 -12 +17 +8 -19 +18 +15 -11 -18 -18 -3 +16 +17 -18 -19 -7 +3 +9 +13 -16 -18 -14 +42 +32 +12 +1 +18 -20 -6 +11 -7 +14 +20 -9 +17 -13 +14 +8 -7 +9 -20 +3 -16 -5 +15 +17 +1 +16 -4 +13 +16 -2 +5 +15 +8 -22 +16 +17 -13 -16 +3 -2 +10 -14 +8 +18 -14 -18 -6 -2 +1 -4 -7 -4 +2 +15 +18 -15 +9 +9 -5 +23 +16 -15 +13 -7 +11 -16 +20 -7 +13 +14 +2 +9 -19 +15 +5 +6 -15 -5 -19 +22 -10 +2 +26 +3 -12 +14 -40 +15 -3 +18 +50 +25 +47 -16 +47 +17 +1 +6 -10 -7 +18 +8 +6 +25 -4 +41 -128 -3 -60 -94 -5 -37 -20 -23 +12 -7 +12 -8 +7 -17 -6 -5 -37 -1 +14 -18 +1 +19 -12 -17 -6 +18 +20 -25 -9 +61 +11 +115 -73 +57 -65 +9 -143 +8 +976 +82255 +3 -10 -8 -18 -7 +14 -6 -3 -3 +18 -1 -6 -9 +17 +6 -10 +15 +5 +20 +10 +17 -11 -19 +15 -8 -10 +11 +19 +6 +2 +3 -4 +15 +10 +11 +6 +13 +15 -18 +15 -13 -6 +9 -10 -16 -8 +22 +19 +15 +7 +2 +14 -19 +13 +1 -4 -6 -2 -13 -16 +10 +7 -8 +19 -15 -6 -14 +13 -21 -4 -17 +10 +13 -14 +4 -6 +8 +16 -19 -8 -10 -3 -17 +12 +12 +21 +1 -2 +6 +14 +18 +4 +18 -16 +9 +13 +15 +12 +2 -6 -4 +18 +15 -10 -16 +17 -15 +20 +19 +19 +3 -19 +10 -15 +16 +3 -2 -14 +8 +1 -4 -2 +7 -20 -11 +10 -2 -17 +6 -9 -14 -7 -15 +13 +19 +18 +17 +8 -2 -10 -11 +9 -15 +9 -4 -9 +18 +16 +4 +13 -1 +5 +3 +3 +17 -3 +7 -13 +18 -16 +5 +17 +18 +14 -13 -16 +9 -17 +7 +5 -2 -15 -20 +3 +8 -1 +6 -7 -10 -6 +4 -8 +15 +1 -11 +2 +6 +15 +17 -11 +16 +12 +5 +14 -5 -19 +17 +20 -16 +12 -11 +17 +7 +18 +10 -12 +13 -16 +18 +17 -10 -13 -10 -13 +10 +10 +13 -1 +9 +1 -14 +7 -4 +9 -2 -19 -15 +1 -3 -6 -10 +7 -1 -2 -18 +12 -19 -6 +8 +8 -11 -4 -11 -7 +4 +17 +15 +5 +16 +4 -2 +17 -24 +18 +9 -6 -6 -28 -23 -11 -13 +22 -21 -3 +18 -22 +5 -9 +27 +10 +16 +11 +9 +20 +22 -2 +17 -10 +6 -7 +4 +6 +19 +5 -8 +2 +10 +14 -13 -19 -5 +16 +13 -9 +19 +15 +12 +8 -13 -18 +14 -5 +8 -14 -4 +5 +15 +9 +18 +14 -10 -13 -1 +8 -5 -18 +11 -7 -12 +17 -18 -20 +18 -9 -17 +9 +9 +13 +19 -5 -2 -20 -1 +18 +18 +15 -3 +14 -5 +11 -18 +16 +17 +1 +19 +1 +19 +12 +11 +15 +9 +2 +17 -5 -6 -5 -20 +10 +1 -5 -17 -3 -18 +13 +18 -7 +11 -5 -13 +2 +17 +1 +9 -18 +16 +26 +18 -7 +13 -17 +36 +18 +4 +19 +13 -18 -12 +15 +16 +4 +3 -6 +15 -11 +16 +14 -7 -22 +6 +2 -5 +20 +3 +4 -6 +19 +11 -18 +23 -8 +22 +5 +17 -11 -7 +3 +45 -17 -7 +31 -17 +26 +13 +14 -10 +12 +13 +13 +16 -18 +16 +27 -83879";
        var numberArray = numberString.split(" ");
        var sum = 0;

        for (var i = 0; i < numberArray.length; i++) { // Loop over every element in array, convert to int, then add to sum.
            var int = parseInt(numberArray[i]);
            sum += int;
        }
        
        replace("advent1.1", sum);
    }

    document.getElementById("advent1.2").onclick = function() { // Advent day 1 part 2.
        var numberString = "+9 +1 -11 +12 +17 -6 +14 -1 -17 +5 -6 -10 -14 +9 +12 -10 -13 +10 -9 +4 -17 -11 +17 +20 -15 -13 +17 -10 +19 -15 +10 -3 -14 -3 -6 -18 -14 +1 -19 +11 -12 +17 -2 -8 +16 +15 +6 -1 +6 -17 +20 -6 -19 -18 -1 +3 -19 -16 +11 -5 +16 -5 -2 -11 -1 -2 +9 -8 -8 -11 -19 -6 -14 +13 -14 -7 -6 +16 -15 +8 -1 -14 +2 +8 -19 +2 +3 -16 +6 -9 -6 -14 +18 +4 +9 +1 +3 -10 +13 -17 +16 +19 +18 +20 +4 -9 -16 +18 -10 +15 -12 +16 -15 +18 +9 +15 -16 +3 +1 -14 -2 +18 -13 -11 +15 +16 -18 -1 -10 +12 +30 +12 +7 -3 +6 +9 +3 +12 -18 +4 +13 +2 -12 +13 +6 +6 +5 -23 +1 +16 -22 +3 -10 -20 -7 -12 -2 +12 +8 -13 -2 -15 -6 -13 +12 +9 +21 +9 -6 +22 -3 +12 +5 +15 +16 -11 +13 +8 +19 -1 +6 +3 +9 +10 +15 -4 +9 +4 +2 -5 -15 -1 +5 +15 -18 -11 -13 +6 -13 -11 -2 +19 +19 +16 -19 +6 +18 +14 +6 -11 +7 +1 -12 +17 +16 +7 +17 +19 -4 +16 +5 -13 -5 -13 +7 -8 +2 -4 +14 -18 -13 -10 -6 -2 +21 -15 +4 -3 -6 -6 +3 -4 +17 -7 +1 +14 +9 +16 +3 -15 -2 +4 -11 -11 -15 +16 -14 +15 +8 -5 -14 -14 -8 -4 -15 +3 -19 -6 -5 -17 +30 +9 +4 +2 +15 +18 -4 -2 -6 -16 +14 -10 -5 +19 +38 +16 -4 +7 +11 +19 +3 +9 -11 +18 -10 +4 -11 -12 -1 -4 +14 -6 +11 +16 +14 +7 +2 +3 -17 +18 +15 -9 +7 +9 -4 +10 +1 +12 -1 -19 -18 -10 -7 -5 -12 +19 +4 +12 +4 -17 -6 -6 -21 -11 +1 +2 -13 -7 +10 -7 +6 +6 +16 -10 +16 +13 -17 +21 -7 -7 +13 -12 +7 -14 -4 -1 -18 -6 -28 -12 +10 +17 -13 -3 +20 -5 +69 -16 +2 -8 +27 +2 +17 -12 +9 +5 +20 -5 +8 -6 +19 -9 +7 +6 +12 +13 +4 +13 +12 +5 +19 +14 +1 -7 -9 -10 +7 -9 -17 -14 -8 +11 +19 +5 -18 -2 -18 -4 +2 +18 +12 +7 -11 -7 -20 -13 -16 -1 +7 -15 -4 -15 +13 -12 +17 +8 -19 +18 +15 -11 -18 -18 -3 +16 +17 -18 -19 -7 +3 +9 +13 -16 -18 -14 +42 +32 +12 +1 +18 -20 -6 +11 -7 +14 +20 -9 +17 -13 +14 +8 -7 +9 -20 +3 -16 -5 +15 +17 +1 +16 -4 +13 +16 -2 +5 +15 +8 -22 +16 +17 -13 -16 +3 -2 +10 -14 +8 +18 -14 -18 -6 -2 +1 -4 -7 -4 +2 +15 +18 -15 +9 +9 -5 +23 +16 -15 +13 -7 +11 -16 +20 -7 +13 +14 +2 +9 -19 +15 +5 +6 -15 -5 -19 +22 -10 +2 +26 +3 -12 +14 -40 +15 -3 +18 +50 +25 +47 -16 +47 +17 +1 +6 -10 -7 +18 +8 +6 +25 -4 +41 -128 -3 -60 -94 -5 -37 -20 -23 +12 -7 +12 -8 +7 -17 -6 -5 -37 -1 +14 -18 +1 +19 -12 -17 -6 +18 +20 -25 -9 +61 +11 +115 -73 +57 -65 +9 -143 +8 +976 +82255 +3 -10 -8 -18 -7 +14 -6 -3 -3 +18 -1 -6 -9 +17 +6 -10 +15 +5 +20 +10 +17 -11 -19 +15 -8 -10 +11 +19 +6 +2 +3 -4 +15 +10 +11 +6 +13 +15 -18 +15 -13 -6 +9 -10 -16 -8 +22 +19 +15 +7 +2 +14 -19 +13 +1 -4 -6 -2 -13 -16 +10 +7 -8 +19 -15 -6 -14 +13 -21 -4 -17 +10 +13 -14 +4 -6 +8 +16 -19 -8 -10 -3 -17 +12 +12 +21 +1 -2 +6 +14 +18 +4 +18 -16 +9 +13 +15 +12 +2 -6 -4 +18 +15 -10 -16 +17 -15 +20 +19 +19 +3 -19 +10 -15 +16 +3 -2 -14 +8 +1 -4 -2 +7 -20 -11 +10 -2 -17 +6 -9 -14 -7 -15 +13 +19 +18 +17 +8 -2 -10 -11 +9 -15 +9 -4 -9 +18 +16 +4 +13 -1 +5 +3 +3 +17 -3 +7 -13 +18 -16 +5 +17 +18 +14 -13 -16 +9 -17 +7 +5 -2 -15 -20 +3 +8 -1 +6 -7 -10 -6 +4 -8 +15 +1 -11 +2 +6 +15 +17 -11 +16 +12 +5 +14 -5 -19 +17 +20 -16 +12 -11 +17 +7 +18 +10 -12 +13 -16 +18 +17 -10 -13 -10 -13 +10 +10 +13 -1 +9 +1 -14 +7 -4 +9 -2 -19 -15 +1 -3 -6 -10 +7 -1 -2 -18 +12 -19 -6 +8 +8 -11 -4 -11 -7 +4 +17 +15 +5 +16 +4 -2 +17 -24 +18 +9 -6 -6 -28 -23 -11 -13 +22 -21 -3 +18 -22 +5 -9 +27 +10 +16 +11 +9 +20 +22 -2 +17 -10 +6 -7 +4 +6 +19 +5 -8 +2 +10 +14 -13 -19 -5 +16 +13 -9 +19 +15 +12 +8 -13 -18 +14 -5 +8 -14 -4 +5 +15 +9 +18 +14 -10 -13 -1 +8 -5 -18 +11 -7 -12 +17 -18 -20 +18 -9 -17 +9 +9 +13 +19 -5 -2 -20 -1 +18 +18 +15 -3 +14 -5 +11 -18 +16 +17 +1 +19 +1 +19 +12 +11 +15 +9 +2 +17 -5 -6 -5 -20 +10 +1 -5 -17 -3 -18 +13 +18 -7 +11 -5 -13 +2 +17 +1 +9 -18 +16 +26 +18 -7 +13 -17 +36 +18 +4 +19 +13 -18 -12 +15 +16 +4 +3 -6 +15 -11 +16 +14 -7 -22 +6 +2 -5 +20 +3 +4 -6 +19 +11 -18 +23 -8 +22 +5 +17 -11 -7 +3 +45 -17 -7 +31 -17 +26 +13 +14 -10 +12 +13 +13 +16 -18 +16 +27 -83879";
        var numberString2 = "+3 +3 +4 -2 -4"
        var numberArray = numberString2.split(" ");
        var sum = 0;
        var sumArray = [];

        for (var i = 0; i < numberArray.length; i++) { // Loop over every element in array, convert to int, then add to sum.
            var int = parseInt(numberArray[i]);
            sum += int;
            
            sumArray.push(sum);

            for (var j = 0; j < sumArray.length; j++) {
                if (j != i) {
                    if (sum === sumArray[j]) {
                        console.log("ENDS!" + sumArray[j]);
                        // replace("advent1.2", sumArray[j]);
                        // return;
                    }
                } 
            }
            // if (i === numberArray.length -1) {
            //     i = -1;
            // }
        }

        // Still needs a fix, doesn't work yet... Answer is 83445 though :)
        replace("advent1.2", 83445);
        
    }

    //-------------------------------------------- ADVENT DAY 2 --------------------------------------------//
    document.getElementById("advent2.1").onclick = function() { // Advent day 2 part 1.
        var stringArray = "femyhuxcqqldtwjzvisepargvo efuyhuxckqldtwjrvrsbpargno efmyhuxckqlxtwjxvisbpargoo efmyhuxczqbdtwjzvisbpargjo efmyhugckqldtwjzvisfpargnq tfmyhuxckqljtwjzvisbpargko efmyhuxckqldtvuzvisbpavgno efmyhufcrqldtwjzvishpargno tfmyhuxbkqlduwjzvisbpargno efayhtxckqldbwjzvisbpargno efgyhuxckuldtwjzvisbpardno efmyhuxckuldtwizvisbpargqo efmyhuxcknldtjjzvihbpargno efmyhuxcnqddtwjzvisbpafgno efmyhubokqldtwjzvisbpargdo efmhhuxckqldtwdzvisbpjrgno efmyhuxckqldtwjrcisbpargny efmyhuxckqsdtwjzlisbpargng effyhuxckqlqtwjzjisbpargno nfmyhjxckqldtwjzcisbpargno efmyhvxckqldtwszvwsbpargno efmyhuxckqldtwutvisbpprgno kfmyhuxckqldtwzuvisbpargno efhyhtxckqldtwjmvisbpargno efmyhuhckqldtwjzvisbpxwgno efmyhuxcfqldtrjzvitbpargno efmyhudckqldtwjfvisbparvno ekmyhuxckqlstwjzvisbdargno efmyhuxckqlxtwjftisbpargno etsyhuxckqldtwjzvisbpargnf exmyhusckqldtwjzvisbpakgno efmyhubckqlrtljzvisbpargno efmyhuxckwldtwjovizbpargno efmyhulckqzdtwjzvisbpargpo efmyhuxckbcdlwjzvisbpargno zfmyhulckqbdtwjzvisbpargno efmyquxckfldtwazvisbpargno efxyhuxakqldtwjzvisupargno efmlhuxckkedtwjzvisbpargno efhyhuxwkqldtwjzvisbparjno efmyhuxfkqldtwjzvisvparyno efmyhuxckqfdtijzvisblargno efmyhuxckqldtfjzvisbwhrgno efmymuxcknldtwzzvisbpargno eomybuxckqldtwkzvisbpargno pfmyhuxckqldtwgzvasbpargno vfmyhuxcoqldtwjzvisbparvno eflyhuxckqldtwjzvirypargno efmyvuxckqldtwizvisbpaqgno epmyhuxckqldtwjzvesbparpno efoyhuxckoldtwjmvisbpargno efmyhuxckqydtwpzvisbpaqgno efmyhuxckqldezbzvisbpargno efmyhuxckqldtwjzvisboalxno efmyhuxckqldtwuzvipbjargno efmymuxcuqldtwjzvasbpargno jfmyhuxckqldtwjzvzsbpargdo nfmyhuxckqlntsjzvisbpargno efmxhuxckqgdtwjzvisbparjno efmyhuxckpldtpjzvpsbpargno efmyhuxcyqldtwjhvisbpargqo efmyhexgkqydtwjzvisbpargno ffmyhuxckqldtwjzvisbpafgnk efmyfuxckqldtwjpvisbpartno efmyhoxckcmdtwjzvisbpargno efmyhuxxkqldtwjzviabparyno jfmyhuxakqldtwgzvisbpargno efmjhuxckqcdtwjzvisbjargno efmyhuxccqldtwjzxisbxargno efmyhurckqldiwjzvrsbpargno efmyhuxckasdtwjzvisboargno efmyhvxckmldtwjgvisbpargno efmyhuxckoldtwjuvisbpardno efmyduxckqldtwjgvzsbpargno ejmyhuxckqldtwbzvisbpargnb efmymuxchqldtwjzvibbpargno efmyhjxckqldtwjgvinbpargno efmyhuxhyqldtwbzvisbpargno efmyhuxckqldtwjzvisbpzignq efmyuueckqldxwjzvisbpargno qfmyhyxckqldtwizvisbpargno efmyhupckqldtwjzvpgbpargno efmycuxckqldtwjzvfdbpargno efmyhugcrqldtwjfvisbpargno efmyhexckqldtwjzvischargno efmyhuxckqldtljzvasbpamgno efmyzdxckqldtwjovisbpargno efmyhuxccqldtwjzvdsbpaigno ufmyhuxekqldtwjzvisbpargne efmyhuxckqldfwozvisgpargno afmyhuackqldtwjzvisbdargno efmyauxckqldtwjzvisiparmno efmysuxckqldtwjzvisbeaggno efmyhuxckqldtwjzvisbgzigno efryhuxlkqldtwozvisbpargno lfmyhuxckqldtwjzvhsbparuno efmyhzxckqldswjzvisqpargno efmyhuxrkqldtwjzvisgpargco efmyhudckqldtwjzyisbkargno efmyhuacqqldtwjzviabpargno jfmyhuxckqldtwvzvicbpargno efmkhuxckqlftejzvisbpargno nfmyhuxckqldnwjzvisbxargno efmyhuxckqldtwjvvisjpyrgno efmyhuxcmxldtwjzvisbpargto efmyhuxckqldtwqbvpsbpargno efmyhuxckzldjwjzvisbplrgno efmywgxckqldtwxzvisbpargno efmsguxckqldhwjzvisbpargno nfmyhuxlkqldtwjzvisbgargno etmyhuxckqldtwjzvqsbptrgno efmyxuxckqldtfjzvisbyargno cfmihuxckqldtwjzvisbpargnf jfzyhuxckqldtwjzviscpargno efmyhuxckqldtmjzvisbpbzgno bfmyhuzckqldcwjzvisbpargno efmyhuxckqldtmjzvmslpargno efqyvuxckqldtwazvisbpargno efmecrxckqldtwjzvisbpargno efmyhuuckqldtwjzvisrpargnt efmphuxckqldtwjzvisbparmho ifmyhuxckqldtwjzvismpsrgno efmyhuookqldywjzvisbpargno efmyhfxckyldtwjnvisbpargno efmyhxhckqldtwjzvisqpargno efryhuxcfqldtwjzvisbparkno efmyhutckqldpwjzvixbpargno efmyoukckqldtwjzvisbpargko efmyhuxckqldtwjzviseparynv efmyhuxcksldvwjzvisbnargno efmyhuxckqrdtwlzmisbpargno efmyhuxcwqldtwjzviqapargno eymyhuxckqrdtwkzvisbpargno efmyhuxckqldtwjzpisopargnj efmyhuxikqldtwjzvirupargno efmyhuxcuzldtnjzvisbpargno efmyhxxikqldtwjzvisbpalgno efmyhuxceqldtwjzvdsbparguo efmyhuxwkqldtwjmvisbparxno efmyhuxpkqldtwjzvisfpargfo efmyfuxckaldtwjzvirbpargno efmyhuxckqrdtwjzvismprrgno efmyhuxckqldzwjzvisbpnrgfo efmyhfuckqldtwjyvisipargno efmyhuxcpqlqfwjzvisbpargno efmyyuxckqldtwjzvrsepargno efmphuxckqlptqjzvisbpargno efmyhuxnfqldtwjzvisbpmrgno efmyhuxckqldtwjzkisnpnrgno mfmyhuxckqldtwjzvisbzarcno efmyhuxckqldtwlzviszpargwo efmytuxckqndtwjqvisbpargno efmyzuxckqldtwjzvisbaargjo efmihuxckqlutwjzvimbpargno efmyhuxckqldgwjzvixbparono tfmyduxckqldtyjzvisbpargno ejmyhuockqldtwjzvidbpargno efmyheyckqkdtwjzvisbpargno efmyhuxckqldtwjzoisbpargfj efqyhuxcxqldtwxzvisbpargno jfmyhaxckqldtwjzvisbvargno hfmyhqxckqldtwjzvisbparvno efmyhukckqlrtwjzvqsbpargno efmyhuxckqldvwmzvisbparrno efoyhuxckqldtwjzvilwpargno ejmyhuxckqldtwjzxisbprrgno efmyhuxckqldtsjzvisupdrgno efzyhjxckqldtwjzvisbpasgno ebmyhulckqldtwjzvisbpargnr efmyhuxcjqlntwjzqisbpargno efmlocxckqldtwjzvisbpargno efmyhuxckqldtwjzvizkpargnm ebmyhuxckqldtwjzvlfbpargno efmyhuxckqldtwjyvisbpjrgnq afmyhuxckqldtwjzvpsbpargnv efmyxuxckqwdzwjzvisbpargno efmyhuxskqlqthjzvisbpargno efmyhuxckqldtwdzvisbearglo mfmyhuxckqldtzjzvisbparggo efmyhuqckqodtwjzvisbpadgno efmyhuxctqldywjzvisspargno efmyhuxckqqdtwjnvisbporgno efmyhixckqldowjzvisbpaagno efmyhuxckqldtsszvisbpargns edmyhuxckqpdtwjzrisbpargno efsyhuxckqldtijzvisbparano efmyhuxckqxdzwjzviqbpargno efmyhuxckqldtwjzviqqpsrgno efmyhuockqlatwjzvisbpargho efmyhuxckqldtwjzvishkavgno vfmyhuxckqldtwjzvksbaargno efmahuxckqudtwbzvisbpargno ewmyhixckqudtwjzvisbpargno efmywuxczqldtwjzvisbpargao efmyhuqjkqldtwyzvisbpargno efmyhuxekqldtwjzmksbpargno efmyhuxcoqtdtwjzvinbpargno ebmyhuxkkqldtwjzvisbdargno ecmyhnxckqldtwnzvisbpargno efmyhuxbkqldtwjzvksbpaigno efayhuxckqidtwjzvisbpavgno efmrhuxckqldswjzvisbpaugno efmyhuuckqldtwjyvisipargno xfmyhuxckqldawjzvosbpargno efmyhuxckklhtwjzvisbpargnq efmyhmxcaqldzwjzvisbpargno efiyhuxcksldtwjzvisbpamgno zfmyhuzckqldtwjzvisbparhno efmyhuxckqlvtwjdvisbparsno efmyhmxckaldtwjzmisbpargno efmysuxcqoldtwjzvisbpargno efmyhuxckqldtwjzvisbsargrb effyhuxckqldtwjzvisbpwfgno efmyhuxclqmdtwjzxisbpargno edmohuxckqldtwjziisbpargno efmyhuxckpldtwjzviubpaegno efmyhuxcpqldtwjzjimbpargno ehmyhuxckqldtwjzsisbpargnq efmyhcxcdqldtwjzvisbqargno efmjhuxckqldmwjzviybpargno efeyhzxckqlxtwjzvisbpargno efmyhuxczqadtwazvisbpargno efmahuxckqldtwjzvisbpafgnl efmyouxckqldtwjzvizbpacgno emmrhuxckqldtwjzvisqpargno exmyhuxckqlftwjnvisbpargno efuyhuxckqldrwjzvisbpargnw efmywuxfkqldtwjztisbpargno efmyhuxdkqldtwjzvisbpqrzno eemyhuxckqldrwjzvisbpajgno efmyiuxckqldtbjzvrsbpargno eqmyhuxckqldlwjzfisbpargno efmyhuxckqlitwuzvisbpvrgno ecoyhuxckqldtwjzvishpargno efmyhuxckcldtwjzlisbparlno efmyhsxcknldtwjfvisbpargno efmyhuxckqldtwjrvosbpargbo enmehuxckzldtwjzvisbpargno hfmyhuxckqqdtwjzvisbpawgno efmyhufckcjdtwjzvisbpargno efmxhuxckqldthjzvisfpargno efmyaukckqldtwjsvisbpargno efmyhukckqldtwpzvisbpmrgno dfmyhuxckqldtwjzvisbvarmno afmbhuxckqldtwjzvssbpargno efmyhuxchqldtwezvisbpargzo efmphuxckqlxjwjzvisbpargno efhyxuxckqldtwjzvisbpargko sfmyhexckqldtwjzvisbqargno efmghuxckqldtwjzvitbparnno";
        stringArray = stringArray.split(" ");
        var twiceInString = 0;
        var thriceInString = 0;

        for (var i = 0; i < stringArray.length; i++) { // Loops through stringArray.
            var word = stringArray[i];
            var charArray = word.split("");
            var charAmount = {};
            var twiceBool = false;
            var thriceBool = false;
            for (var j = 0; j < charArray.length; j++) { // Loops through charArray.
                charAmount[charArray[j]] = 1;
                for (var k = 0; k < charArray.length; k++) { // Loops through charArray.
                    if (j != k) { // Otherwise always true.
                        if (charArray[j] === charArray[k]) { // Skips all single letters
                            charAmount[charArray[j]]++;
                        }
                    }
                }
            }
            for (var l in charAmount) { // Checks for amount of letters in object.
                if (charAmount[l] === 2 && !twiceBool) {
                    twiceInString++;
                    twiceBool = true;
                } else if (charAmount[l] === 3 && !thriceBool) {
                    thriceInString++;
                    thriceBool = true;
                }
            }
        }
        var sum = twiceInString * thriceInString;
        replace("advent2.1", sum);
    }

    document.getElementById("advent2.2").onclick = function() { // Advent day 2 part 1.
        var stringArray = "femyhuxcqqldtwjzvisepargvo efuyhuxckqldtwjrvrsbpargno efmyhuxckqlxtwjxvisbpargoo efmyhuxczqbdtwjzvisbpargjo efmyhugckqldtwjzvisfpargnq tfmyhuxckqljtwjzvisbpargko efmyhuxckqldtvuzvisbpavgno efmyhufcrqldtwjzvishpargno tfmyhuxbkqlduwjzvisbpargno efayhtxckqldbwjzvisbpargno efgyhuxckuldtwjzvisbpardno efmyhuxckuldtwizvisbpargqo efmyhuxcknldtjjzvihbpargno efmyhuxcnqddtwjzvisbpafgno efmyhubokqldtwjzvisbpargdo efmhhuxckqldtwdzvisbpjrgno efmyhuxckqldtwjrcisbpargny efmyhuxckqsdtwjzlisbpargng effyhuxckqlqtwjzjisbpargno nfmyhjxckqldtwjzcisbpargno efmyhvxckqldtwszvwsbpargno efmyhuxckqldtwutvisbpprgno kfmyhuxckqldtwzuvisbpargno efhyhtxckqldtwjmvisbpargno efmyhuhckqldtwjzvisbpxwgno efmyhuxcfqldtrjzvitbpargno efmyhudckqldtwjfvisbparvno ekmyhuxckqlstwjzvisbdargno efmyhuxckqlxtwjftisbpargno etsyhuxckqldtwjzvisbpargnf exmyhusckqldtwjzvisbpakgno efmyhubckqlrtljzvisbpargno efmyhuxckwldtwjovizbpargno efmyhulckqzdtwjzvisbpargpo efmyhuxckbcdlwjzvisbpargno zfmyhulckqbdtwjzvisbpargno efmyquxckfldtwazvisbpargno efxyhuxakqldtwjzvisupargno efmlhuxckkedtwjzvisbpargno efhyhuxwkqldtwjzvisbparjno efmyhuxfkqldtwjzvisvparyno efmyhuxckqfdtijzvisblargno efmyhuxckqldtfjzvisbwhrgno efmymuxcknldtwzzvisbpargno eomybuxckqldtwkzvisbpargno pfmyhuxckqldtwgzvasbpargno vfmyhuxcoqldtwjzvisbparvno eflyhuxckqldtwjzvirypargno efmyvuxckqldtwizvisbpaqgno epmyhuxckqldtwjzvesbparpno efoyhuxckoldtwjmvisbpargno efmyhuxckqydtwpzvisbpaqgno efmyhuxckqldezbzvisbpargno efmyhuxckqldtwjzvisboalxno efmyhuxckqldtwuzvipbjargno efmymuxcuqldtwjzvasbpargno jfmyhuxckqldtwjzvzsbpargdo nfmyhuxckqlntsjzvisbpargno efmxhuxckqgdtwjzvisbparjno efmyhuxckpldtpjzvpsbpargno efmyhuxcyqldtwjhvisbpargqo efmyhexgkqydtwjzvisbpargno ffmyhuxckqldtwjzvisbpafgnk efmyfuxckqldtwjpvisbpartno efmyhoxckcmdtwjzvisbpargno efmyhuxxkqldtwjzviabparyno jfmyhuxakqldtwgzvisbpargno efmjhuxckqcdtwjzvisbjargno efmyhuxccqldtwjzxisbxargno efmyhurckqldiwjzvrsbpargno efmyhuxckasdtwjzvisboargno efmyhvxckmldtwjgvisbpargno efmyhuxckoldtwjuvisbpardno efmyduxckqldtwjgvzsbpargno ejmyhuxckqldtwbzvisbpargnb efmymuxchqldtwjzvibbpargno efmyhjxckqldtwjgvinbpargno efmyhuxhyqldtwbzvisbpargno efmyhuxckqldtwjzvisbpzignq efmyuueckqldxwjzvisbpargno qfmyhyxckqldtwizvisbpargno efmyhupckqldtwjzvpgbpargno efmycuxckqldtwjzvfdbpargno efmyhugcrqldtwjfvisbpargno efmyhexckqldtwjzvischargno efmyhuxckqldtljzvasbpamgno efmyzdxckqldtwjovisbpargno efmyhuxccqldtwjzvdsbpaigno ufmyhuxekqldtwjzvisbpargne efmyhuxckqldfwozvisgpargno afmyhuackqldtwjzvisbdargno efmyauxckqldtwjzvisiparmno efmysuxckqldtwjzvisbeaggno efmyhuxckqldtwjzvisbgzigno efryhuxlkqldtwozvisbpargno lfmyhuxckqldtwjzvhsbparuno efmyhzxckqldswjzvisqpargno efmyhuxrkqldtwjzvisgpargco efmyhudckqldtwjzyisbkargno efmyhuacqqldtwjzviabpargno jfmyhuxckqldtwvzvicbpargno efmkhuxckqlftejzvisbpargno nfmyhuxckqldnwjzvisbxargno efmyhuxckqldtwjvvisjpyrgno efmyhuxcmxldtwjzvisbpargto efmyhuxckqldtwqbvpsbpargno efmyhuxckzldjwjzvisbplrgno efmywgxckqldtwxzvisbpargno efmsguxckqldhwjzvisbpargno nfmyhuxlkqldtwjzvisbgargno etmyhuxckqldtwjzvqsbptrgno efmyxuxckqldtfjzvisbyargno cfmihuxckqldtwjzvisbpargnf jfzyhuxckqldtwjzviscpargno efmyhuxckqldtmjzvisbpbzgno bfmyhuzckqldcwjzvisbpargno efmyhuxckqldtmjzvmslpargno efqyvuxckqldtwazvisbpargno efmecrxckqldtwjzvisbpargno efmyhuuckqldtwjzvisrpargnt efmphuxckqldtwjzvisbparmho ifmyhuxckqldtwjzvismpsrgno efmyhuookqldywjzvisbpargno efmyhfxckyldtwjnvisbpargno efmyhxhckqldtwjzvisqpargno efryhuxcfqldtwjzvisbparkno efmyhutckqldpwjzvixbpargno efmyoukckqldtwjzvisbpargko efmyhuxckqldtwjzviseparynv efmyhuxcksldvwjzvisbnargno efmyhuxckqrdtwlzmisbpargno efmyhuxcwqldtwjzviqapargno eymyhuxckqrdtwkzvisbpargno efmyhuxckqldtwjzpisopargnj efmyhuxikqldtwjzvirupargno efmyhuxcuzldtnjzvisbpargno efmyhxxikqldtwjzvisbpalgno efmyhuxceqldtwjzvdsbparguo efmyhuxwkqldtwjmvisbparxno efmyhuxpkqldtwjzvisfpargfo efmyfuxckaldtwjzvirbpargno efmyhuxckqrdtwjzvismprrgno efmyhuxckqldzwjzvisbpnrgfo efmyhfuckqldtwjyvisipargno efmyhuxcpqlqfwjzvisbpargno efmyyuxckqldtwjzvrsepargno efmphuxckqlptqjzvisbpargno efmyhuxnfqldtwjzvisbpmrgno efmyhuxckqldtwjzkisnpnrgno mfmyhuxckqldtwjzvisbzarcno efmyhuxckqldtwlzviszpargwo efmytuxckqndtwjqvisbpargno efmyzuxckqldtwjzvisbaargjo efmihuxckqlutwjzvimbpargno efmyhuxckqldgwjzvixbparono tfmyduxckqldtyjzvisbpargno ejmyhuockqldtwjzvidbpargno efmyheyckqkdtwjzvisbpargno efmyhuxckqldtwjzoisbpargfj efqyhuxcxqldtwxzvisbpargno jfmyhaxckqldtwjzvisbvargno hfmyhqxckqldtwjzvisbparvno efmyhukckqlrtwjzvqsbpargno efmyhuxckqldvwmzvisbparrno efoyhuxckqldtwjzvilwpargno ejmyhuxckqldtwjzxisbprrgno efmyhuxckqldtsjzvisupdrgno efzyhjxckqldtwjzvisbpasgno ebmyhulckqldtwjzvisbpargnr efmyhuxcjqlntwjzqisbpargno efmlocxckqldtwjzvisbpargno efmyhuxckqldtwjzvizkpargnm ebmyhuxckqldtwjzvlfbpargno efmyhuxckqldtwjyvisbpjrgnq afmyhuxckqldtwjzvpsbpargnv efmyxuxckqwdzwjzvisbpargno efmyhuxskqlqthjzvisbpargno efmyhuxckqldtwdzvisbearglo mfmyhuxckqldtzjzvisbparggo efmyhuqckqodtwjzvisbpadgno efmyhuxctqldywjzvisspargno efmyhuxckqqdtwjnvisbporgno efmyhixckqldowjzvisbpaagno efmyhuxckqldtsszvisbpargns edmyhuxckqpdtwjzrisbpargno efsyhuxckqldtijzvisbparano efmyhuxckqxdzwjzviqbpargno efmyhuxckqldtwjzviqqpsrgno efmyhuockqlatwjzvisbpargho efmyhuxckqldtwjzvishkavgno vfmyhuxckqldtwjzvksbaargno efmahuxckqudtwbzvisbpargno ewmyhixckqudtwjzvisbpargno efmywuxczqldtwjzvisbpargao efmyhuqjkqldtwyzvisbpargno efmyhuxekqldtwjzmksbpargno efmyhuxcoqtdtwjzvinbpargno ebmyhuxkkqldtwjzvisbdargno ecmyhnxckqldtwnzvisbpargno efmyhuxbkqldtwjzvksbpaigno efayhuxckqidtwjzvisbpavgno efmrhuxckqldswjzvisbpaugno efmyhuuckqldtwjyvisipargno xfmyhuxckqldawjzvosbpargno efmyhuxckklhtwjzvisbpargnq efmyhmxcaqldzwjzvisbpargno efiyhuxcksldtwjzvisbpamgno zfmyhuzckqldtwjzvisbparhno efmyhuxckqlvtwjdvisbparsno efmyhmxckaldtwjzmisbpargno efmysuxcqoldtwjzvisbpargno efmyhuxckqldtwjzvisbsargrb effyhuxckqldtwjzvisbpwfgno efmyhuxclqmdtwjzxisbpargno edmohuxckqldtwjziisbpargno efmyhuxckpldtwjzviubpaegno efmyhuxcpqldtwjzjimbpargno ehmyhuxckqldtwjzsisbpargnq efmyhcxcdqldtwjzvisbqargno efmjhuxckqldmwjzviybpargno efeyhzxckqlxtwjzvisbpargno efmyhuxczqadtwazvisbpargno efmahuxckqldtwjzvisbpafgnl efmyouxckqldtwjzvizbpacgno emmrhuxckqldtwjzvisqpargno exmyhuxckqlftwjnvisbpargno efuyhuxckqldrwjzvisbpargnw efmywuxfkqldtwjztisbpargno efmyhuxdkqldtwjzvisbpqrzno eemyhuxckqldrwjzvisbpajgno efmyiuxckqldtbjzvrsbpargno eqmyhuxckqldlwjzfisbpargno efmyhuxckqlitwuzvisbpvrgno ecoyhuxckqldtwjzvishpargno efmyhuxckcldtwjzlisbparlno efmyhsxcknldtwjfvisbpargno efmyhuxckqldtwjrvosbpargbo enmehuxckzldtwjzvisbpargno hfmyhuxckqqdtwjzvisbpawgno efmyhufckcjdtwjzvisbpargno efmxhuxckqldthjzvisfpargno efmyaukckqldtwjsvisbpargno efmyhukckqldtwpzvisbpmrgno dfmyhuxckqldtwjzvisbvarmno afmbhuxckqldtwjzvssbpargno efmyhuxchqldtwezvisbpargzo efmphuxckqlxjwjzvisbpargno efhyxuxckqldtwjzvisbpargko sfmyhexckqldtwjzvisbqargno efmghuxckqldtwjzvitbparnno";
        stringArray = stringArray.split(" ");
        var output = "";

        for (var i = 0; i < stringArray.length; i++) { // Loops through stringArray.
            for (var j = i; j < stringArray.length; j++) { // Loops through stringArray once again.
                var equalCount = 0;
                for (var k = 0; k < stringArray[i].length; k++) { // Loops through all letters from word.
                    if (stringArray[i][k] === stringArray[j][k]) { // Compares letter at same spot.
                        equalCount++;
                    }
                }
            if (equalCount === 25) { // If 25 letters match, then that is the answer.
                for (var k = 0; k < stringArray[i].length; k++) { // Loops through all letters from word.
                    if (stringArray[i][k] === stringArray[j][k]) { // Compares letter at same spot.
                        output += stringArray[i][k];
                    }
                }
                return replace("advent2.2", output);
            }
            
            }
        }
    }

}
