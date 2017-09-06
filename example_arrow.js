/*var names = ["junwen","bob","tim", 'kate','james'];

names.forEach(function(name){
	console.log('foreach', name);
});

names.forEach((name) => {
	console.log('errowfunc', name);

});

names.forEach((name) => console.log('simpleerror', name));

/*var returnme = (name) => name + '!';
console.log(returnme('junwen'));

var person = {
	name:'joy',
	greet: function(){
		names.forEach((name) => {
			console.log(this.name + ' Says hi to ' + name);
		});
	}

};

person.greet();*/


function add(a, b){
	return a+b;
}

//addstatement
var addstatement = (a, b) => {
	return a+b;
}
console.log(addstatement(5,6));
console.log(addstatement(3,65));

//addexpression
var addexpression = (a,b) => a+b;

console.log(addexpression(5,111));

console.log(add(1,3));
console.log(add(9,5));