// Question 1: Create Student Objects
// creates object of students with array of grades
const students = [
    {id: 1, name: "Kassie", age: 27, grades:[75, 80, 100]}, 
    {id: 2, name: "Chisom", age: 25, grades:[65, 40, 19]},
    {id: 3, name: "Ugochi", age: 23, grades:[57, 75, 94]},
    {id: 4, name: "Ifunaya", age: 21, grades:[25, 72, 80]},
    {id: 5, name: "Chidumebi", age: 19, grades:[35, 45, 61]}
]
 
// QUESTION 2: Calculate Averages
// function that claculates the average grades
function calculateAverage(grades){
  const average = grades.reduce((sum, x) => sum + x, 0)/ grades.length
  return Number(average.toFixed(2))
}

// constant that addes tha average grade to the student object and returns the object
const studentsWithAverage = students.map(student => {
  return{
  ...student, average: calculateAverage(student.grades)}
})

// shows the output
console.log(studentsWithAverage)

// QUESTION 3: Filter Passing Students
// the get getPassingStudents function

function getPassingStudents(students){
  return students.filter(student =>student.average >= 60
  )
}

const passing = getPassingStudents(studentsWithAverage)
console.log(passing)

// QUESTION 4: Calculate Class Average
function calculateClassAverage(students){
  const averageClass = students.reduce((sum, x) => sum + x.average, 0 )/students.length
  return Number(averageClass.toFixed(2))
}

const classAvg = calculateClassAverage(studentsWithAverage)
console.log(classAvg)