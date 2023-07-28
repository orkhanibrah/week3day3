


// // // // for (let i=0; i<=2; i++){
// // // //     console.log('Loop ' + i);
// // // // } 
// // // // i only exists in scope of this for loop

// // // // const arr = [1,3,5];
// // // // for(let i=0; i<arr.length; i++){
// // // //     console.log(arr[i]);
// // // // }

// // // for (let i=0; i<16; i++){
// // //     if(i%2===0){
// // //         console.log(i + " is even");
// // //     } else {
// // //         console.log(i + " is odd");
// // //     }
// // // }

// // const person = {name:'or', age:28};
// // for (let x in person) {
// //     console.log(x);
// //     console.log(person[x]);
// // }

// // const alpha = ['a', 'b', 'c'];
// // for (let i of alpha) {
// //     console.log(i);
// // }

// // const alpha2 = [3, 5, 8];
// // for (let i of alpha2) {
// //     console.log(i);
// // }

// // let x = 0;
// // while (x < 4){
// //     console.log(x);
// //     x++;
// // }

// // let pname = prompt('Name?');
// // while (pname !== 'orkhan'){
// //     pname = prompt('Try again');
// // }
// // alert('Welcome ' + pname);

// let i = 0;
// do{
//     console.log(i);
//     i++;
// } while (i<10);

// let pname;
// do {
//     pname = prompt('Name');
//     console.log(pname);
    
// } while (pname !== 'orkhan')

let names = ['john', 'sarah', 23, 'Rudolf', 34];

for(i of names){
    if(typeof(i) !== 'string'){
        continue;
    } else {
        if(i[0] !== i[0].toUpperCase()){
          
            console.log(i[0].toUpperCase() + i.slice(1));
        }
        
    }
}


// for(i of names){
//     if(typeof(i) !== 'string'){
//         break;
//     } else {
//         console.log(i);
//     }

// }