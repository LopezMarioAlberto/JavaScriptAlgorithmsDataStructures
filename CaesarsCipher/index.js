function shifted(str) {
    let step = 13 % str.length;
    return str.slice(13, str.length) + str.slice(0, 13)
    }

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let keys = shifted(alphabet);
  let encrypted = "";
  for (var j = 0; j < str.length; j++){
    if ((/^[A-Z]$/i).test(str[j])){
      encrypted += keys[alphabet.indexOf(str[j])];
    } else {
      encrypted += str[j];
    }
  }
  return encrypted;
}

rot13("SERR PBQR PNZC");
// should decode to FREE CODE CAMP
rot13("SERR CVMMN!");
// should decode to FREE PIZZA!
rot13("SERR YBIR?");
// should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
// should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.