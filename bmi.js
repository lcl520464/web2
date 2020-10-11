var mMass = 54,mHeight = 180;//1.变量存储Mark和John的体重以及身高
var jMass = 51,jHeight = 172;
var mBMI = mMass / (mHeight * mHeight);//2. 计算二人的BMI
var jBMI = jMass / (jHeight * jHeight);
console.log("mark的BMI: " + mBMI, "john的BMI: " + jBMI + ". ");
var high = (jBMI > mBMI) ? true : false;//3.布尔变量包含Mark的BMI是否比John更高,三元运算符
console.log(high);
console.log("Mark的BMI是否比John更高？"+String(high));//4.字符串