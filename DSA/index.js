let arr = [10 ,20,30,40,50,60,70]
let i=0,j=arr.length-1
while(i<=j){
    let temp;
    temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp ;
    j--;
    i++;
}
console.log(arr);
