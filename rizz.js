//RIZZ CALCULATOR V1

class Person{
    constructor(weight, height, femaleFriends){
        this.femaleFriends = femaleFriends;
        this.rizz = 0;
        this.weight = weight * 0.453592;
        this.height = (parseInt((height[0] * 12)) + parseInt((height.split("'"))[1])) * 0.0254; this.heightInches = (parseInt((height[0] * 12)) + parseInt((height.split("'"))[1]));
        this.BMI = this.weight/(this.height * this.height);
    }
    calculateRizz(){
        this.femaleFriends >= 20 ? this.rizz -= 1 : this.rizz += (this.femaleFriends/2)
        this.heightInches < 84 ? this.rizz += ((this.heightInches-60) / 2) : this.rizz -= 10;
        this.BMI >= 18.5 && this.BMI <= 24.9 ? this.rizz += 5 : this.rizz -= 1;
        this.heightInches >= 72 ? this.rizz += 10 : this.rizz -= 1;
        return `Your rizz is ${this.rizz}, estimated max is 36`
    }
}

//The constructor function takes in weight(in pounds), height(ft'in") and amount of female friends. It needs weight so it can calculate BMI and factor in physical health. 
const john = new Person(146.2, "5'11", 6);
console.log(john.calculateRizz());
//Code Written by SirAbe
