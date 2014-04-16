function sort(arr) {
	if(arr.length == 1) {
		return arr;
	}
	var middle = 0;
	if(arr.length % 2 == 1) {
		middle = (arr.length+1) / 2;
	} else {
		middle = arr.length / 2;
	}
	var la = [];
	var ra = [];
	copyLeftArray(middle, la, arr);
	copyRightArray(middle, ra, arr);
	la = sort(la);
	ra = sort(ra);
	return mergeSort(la, ra);
}

function mergeSort(la, ra) {
	console.log("la:"+la);
	console.log("ra:" + ra);
	var result = [];
	var i=0,j=0,k=0;
	while(i<la.length) {
		if(la[i] > ra[j]) {
			result[k] = ra[j];
			j++;
			k++;
		} else {
			result[k] = la[i];
			k++;
			i++;
		}
	}
	// for(i=0;i<la.length;i++) {
		
	// }
	if(i < la.length) {
		for(;i<la.length;i++) {
			result[k] = la[i];
		}
	}

	if(j < ra.length) {
		for(;j<ra.length;j++) {
			result[k] = ra[j];
			k++;
		}
	}
	console.log("-------"+result);
	return result;
}


function copyLeftArray(middle, la, arr) {
	for(var i=0;i<middle; i++) {
		la[i] = arr[i];
	}
}

function copyRightArray(middle, ra, arr) {
	for(var i=0;i<arr.length - middle;i++) {
		ra[i] = arr[i+middle];
	}
}

//sort(1,2,3,4,5);