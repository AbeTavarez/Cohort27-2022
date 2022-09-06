const cohort27 = {
    id:'se-27-2022',
    students: [],
    addStudent: function (name) {
        this.students.push(name) // points to the object cohort27
    }
}

const cohort13 = {
    id:'se-13-2022',
    students: [],
    addStudent: function (name) {
        this.students.push(name) // points to the object cohort13
    }
}

cohort27.addStudent('Mike')
cohort13.addStudent('Anna')
console.log(cohort27);
console.log(cohort13);

function myFunc(){
    console.log(this); // global object
}

// myFunc()