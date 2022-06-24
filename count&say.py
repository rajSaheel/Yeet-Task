class Solution:
    def countAndSay(self, n: int) -> str:
        def recursiveStr(string,x):
            currStr=""
            count=1
            if x==n:
                return string
            for index in range(len(string)):
                char=string[index]
                if(index==(len(string)-1)):
                    currStr=currStr+str(count)+char
                elif(char!=string[index+1]):
                    currStr=currStr+str(count)+char
                    count=1
                else:
                    count+=1
            return recursiveStr(currStr,x+1)
        return recursiveStr("1",1)
