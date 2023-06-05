//Bien
var fullName =  'Vu Duy Anh';
var age = 26;

// alert(fullName);
// alert(age);

// console.log(fullName);
// confirm('Invalidate your name');
// prompt('Invalid');

// setTimeout(function(){
//     alert('Message');
// } , 1000)

// setInterval(function(){
//     console.log('Message' + Math.random());
// }, 1000)

// 1-toString / 2-Join / 3-Pop / 4-Push / 5-Shift / 6-Unshift / 7-Splice 
// 8-Concat / 9-Slice
function writeLog(){
    var myString = '';
    for (var param of arguments){
        myString = myString + `${param} - `;
    }
    console.log(myString);
}
writeLog('Log1','Log2','Log3');

//Declare function
function showMessage(){

}
//Expression function
var showMessage2 = function(){

}

setTimeout(function autoLogin(){

});

var myObject = {
    myFunction: function testName(){

    }
}

//Object in Javascript
var emailKey = 'email';

var myInfo = {
    name: 'Son Dang',
    age: 20,
    address: 'Ha Noi, VN',
    [emailKey]: 'tumotdenchin@mail',
    getName: function(){   
        return this.name;
    }
};
// myInfo['my-email'] = 'duyanhvu@gmail.com'
console.log(myInfo.name);
console.log(myInfo['address']);
console.log(myInfo);

//Function --> phuong thuc /method
//Others --> thuoc tinh /properties
console.log(myInfo.getName());

 // Object constructor
 function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Duy','Anh','Avatar');
var user = new User('Ngoc','Anh','Avatar');

author.title = 'Hehehe';
user.comment = 'Oh yeah!!!';

console.log(author.getName());
console.log(user.getName());

//Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);

//Switch-case
// var date = 2;
// switch(date){
//     case 2:
//         console.log('Today is Monday');
//         break;
//     case 3:
//         console.log('Today is Tuesday');
//         break;
//     case 4:
//         console.log('Today is Wennesday');
//         break;
//     case 5:
//         console.log('Today is Thursday');    
//         break;        
// }

//Toan tu 3 ngoi
// var course = {
//     name: 'Java',
//     coin: 250
// }
// if (course.coin > 0){
//     console.log(`${course.coin} Coins`);
// }
// else{
//     console.log('Free');
// }
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
// console.log(result);
var languages = [
    'Java',
    'PHP',
    'Ruby'
];
var myInfo = {
    name: 'DuyAnh',
    age: 18
}
// For-in
for(var key in languages){
    console.log(languages[key]);
}
// For-of
for(var value of Object.values(myInfo)){
    console.log(value);
}
// Break & Continue in Loop
for(var i=0; i<10; i++){
    console.log(i);
    if(i>=5){
        break;
    }
}
for(var i=0; i<10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i);
}
//Nested Loop
var myArray = [
    [1,2],
    [3,4],
    [5,6]
];
for (var i=0; i<myArray.length; i++){
    for (var j=0; j<myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
// Array methods:
// forEach()/every()/some()/find()/filter()/map()/reduce()
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 250
    },
    {
        id: 3,
        name: 'PHP',
        coin: 0
    },
    {
        id: 4,
        name: 'Java',
        coin: 0
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 500
    }
];

courses.forEach(function(course,index){
    console.log(index,course);
});
//---------------------------------
var isFree = courses.every(function(course,index){
    console.log(index);
    return course.coin === 0;
});
console.log(isFree);
//---------------------------------
var isFree = courses.some(function(course,index){
    return course.coin === 0;
});
console.log(isFree);
//---------------------------------
var course = courses.find(function(course,index){
    return course.name === 'Ruby';
});
console.log(course);
//---------------------------------
var listCourse = courses.filter(function(course,index){
    return course.name === 'Ruby';
});
console.log(listCourse);
//---------------------------------
function courseHandler(course,index){
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    }
};
var newCourses = courses.map(courseHandler);
console.log(newCourses);
//---------------------------------

var totalCoin = courses.reduce(function coinHandler(total, course){
    return total + course.coin;
},0); // gia tri khoi tao = 0
console.log(totalCoin);

//Math.Pi()/round()/abs()/ceil()/floor()/random()/min()/max()