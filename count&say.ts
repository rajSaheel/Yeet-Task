function countAndSay(n: number): string {
    function recursive(x:number,str:string):string{
        let currStr:string="";
        let count:number=1;
        if(x==n){
            return str;
        }
        for(let index:number=0;index<str.length;index++){
            let char:string=str[index];
            if(index==(str.length-1)){
                currStr+=count+char;
            }
            else if(char!==str[index+1]){
                currStr+=count+char;
                count=1;
            }
            else{
                count++;
            }
        }
        return recursive(x+1,currStr)
    }
    return recursive(1,"1")
};
