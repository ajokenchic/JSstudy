let arrayB = [ {
    name: `a수박`,
    name1: 'a',
    price: 10000

}, {
    name: `c포도`,
    name1: 'c',
	price: 2000
}, {
    name: `b사과`,
    name1: 'b',
	price: 1000
}, {
    name: `d딸기`,
    name1: 'd',
	price: 1500
} ];

arrayB.sort((a,b)=>{
    if (a.name < b.name)		return 1;
	else if (a.name > b.name)	return -1;
	else					return 0;
    //return a.price-b.;//앞뒤의 순서는 오름차순 내림차순, price는 기준.
})
console.log(arrayB)