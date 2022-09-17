console.log("Hi there! I\'m a javaScript❤");
let languageName = 'javaScript';
console.log(`This is ${getName()} file! \n`)

function getName() {
    return "javaScript retorno"
}
getName.anyAttr = 'any value'
console.log(getName.anyAttr);


const number = getName()
console.log('The const number have the type', typeof getName())

const names = ["Ichigo Kurosaki","Didi Mocó", "Bruce Wayne"]

const print = (name) => console.log(name);

const printFancy = function (name, index, List){
    console.log('${index + 1}/${List.length}', name);
};

print('caio');

names
.sort()
.map(printFancy => '${name}')
.forEach(printFancy)


