function strStr(haystack: string, needle: string): number {
    let index:number = 0;
    while(index<haystack.length){
        if(needle[0]==haystack[index]){
            if (needle===haystack.substr(index,needle.length)){
                return index;
            }
            else{
                index++;
            }
        }
        else{
            index++;
        }
    }
    return -1;
};
