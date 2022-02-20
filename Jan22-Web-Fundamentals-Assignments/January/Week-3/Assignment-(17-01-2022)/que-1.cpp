#include<iostream>
using namespace std;

int main()
{
    int n,last_3digits;
    cout<<"Enter the number"<<endl;
    cin>>n;
    last_3digits=n%1000;
    cout<<last_3digits<<endl;
    return 0;
}