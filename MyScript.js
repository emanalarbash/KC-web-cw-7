function BMI(weight=70,height=1.7){
 let result = weight / ( height * height );
 return result ;
 
}

console.log(BMI(70, 1.7));

function Status(bmi) {
    if(bmi< 18.5) {
        return  "لديك نقص في الوزن" ;   

    } else if (bmi >= 18.5 && bmi < 25) {
        return "وزنك صحي" ;
} else {   
      return  "لديك زيادة في الوزن";
    }
}
function calculate() {

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

let bmi = BMI (weight,height);

let desc = Status(bmi);

let div = document.getElementById("result")

div.innerText = bmi + " == " + desc;


}

//function BMI(p1, p2=7)
console.log(BMI());
console.log(BMI());
console.log(BMI());
console.log(BMI());
console.log(BMI());