class account{
    account(a){
        console.log(`${a} new account created`);
        this.name=a;
        this.balance=0;
  }
  setName(n){
   this.name=n;
  }
  getname(){
    return this.name;
  }
  
  getbalance(){
    return this.balance;
  }
  desposit(p){
    this.balance+=p
  }
  withdraw(p){
    this.balance-=p
  }
  getinfo(){
    console.log("name :"+this.getname())
    console.log("balance :"+this.getbalance())
  }
};

let HBLaccount1=new account;
console.log(HBLaccount1.account("kashish"))
let HBLaccount2=new account;
console.log(HBLaccount2.account("Ayesha"))
