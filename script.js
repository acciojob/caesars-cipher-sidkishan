function caeserCipher(str){
	var ans="";
	for(var ch in str){
		if(String.charCodeAt(ch) >= 65 && String.charCodeAt(ch) <= 90){
			var x = String.charCodeAt(ch);
			x += 13;
			x %= 65;
			ans += String.fromCharCode(x);
		}
		else{
			ans += str[ch];
		}
	}
	return ans;
}