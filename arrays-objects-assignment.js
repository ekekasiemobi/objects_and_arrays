const students = [
    {id: 1, name: "Kassie", age: 27, grades:[75, 80, 100]}, 
    {id: 2, name: "Chisom", age: 25, grades:[65, 40, 19]},
    {id: 3, name: "Ugochi", age: 23, grades:[57, 75, 94]},
    {id: 4, name: "Ifunaya", age: 21, grades:[25, 72, 80]}
]
 
function calculateAverage(grades){
  const average = grades.reduce((sum, x) => sum + x, 0)/ grades.length
  return Number(average.toFixed(2))
}

const studentsWithAverage = students.map(student => {
  return{
  ...student, average: calculateAverage(student.grades)}
})

console.log(studentsWithAverage)

