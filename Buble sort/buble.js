    function Swap(arr,first,second){
        var total = arr[first]
        arr[first]=arr[second]
        arr[second] = total
    }
    function bubble(arr){
        var len= arr.length , 
        i,j,stop;

        for ( i=0; i<len; i++){
            for( j=0 , stop=len-i; j<stop ; j++){
                if(arr[j]>arr[j+1]){
                    Swap(arr,j,j+1)
                }
            }
        }
        return arr;
    }
    console.log(bubble([9,1,2,5,8,4,3,5,7]))
