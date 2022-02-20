#include<iostream>
using namespace std;

int main()
{
    for(int i=0;i<100;i++)
    {
        cout<<i+1<<" ";

    }
    cout<<endl;
    int first=1,last=100;
    while(first<=50)
{
    cout<<first<<","<<last<<",";
  
    first=first+1;
    last=last-1;
}
return 0;
}