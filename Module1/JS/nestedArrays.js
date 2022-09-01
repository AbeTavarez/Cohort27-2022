// ===== Multidimensional Array
const data = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
];

// for(let i = 0; i < data.length; i++){
//     console.log(data[i]);
// }

for (let i = 0; i < data.length; i++){
    //console.log(data[i]); // log each nested array
    
    for(let j = 0; j < data[i].length; j++){
       // console.log(data[i][j]); // each item in the nested array
    }
}


// const data1 = [ 
//     ['X', '', 'O'], 
//     ['', 'X', ''], 
//     ['', '', 'X'] 
// ];

// console.table(data)



const studentsData = [ ['Jack', 24], ['Sara', 23], ['Peter', 24] ];

for (let outter = 0; outter < studentsData.length; outter++){
    // console.log(studentsData[outter]);

    for(let inner = 0; inner < studentsData[outter].length; inner++){
        // console.log(studentsData[outter][inner]);
    }
}


// ===== using forEach
studentsData.forEach((arr, idx) =>{
    console.log(arr);

    arr.forEach((item) => {
        console.log(item);
    })
})