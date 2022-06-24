function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    
    let index1:number=0;
    let index2:number=0;
    let arr:number[]=[];
    
    while(index1<nums1.length&&index2<nums2.length){
        if(nums1[index1]<nums2[index2]){
            arr.push(nums1[index1]);
            index1++;
        }
        else{
            arr.push(nums2[index2]);
            index2++;
        }
    }
    if(index1<nums1.length){
        arr = arr.concat(nums1.slice(index1));
    }
    else{
        arr=arr.concat(nums2.slice(index2));
    }

    const len:number=arr.length;
    
    if(len%2==0){
        return ((arr[(len/2)-1]+arr[len/2])/2);
    }else{
        return arr[((len-1)/2)];
    }
};
