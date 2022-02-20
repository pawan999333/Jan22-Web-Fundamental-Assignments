#include<iostream>
using namespace std;

int main()
{
    int sum=0;
    int i=12;
    int avg;
    while(i<=15)
    {
        sum=sum+i;
       i++;
    }
    avg=(sum/4);
    cout<<avg;

return 0;

}