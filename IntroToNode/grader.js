function average(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(Math.ceil(sum/arr.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores);