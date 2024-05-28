document.querySelector('button').addEventListener('click', () => {
    const grades = document.querySelector('input').value;
    const gradeArray = grades.split(',');
    console.log(gradeArray);
    const cleanGrades = gradeArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
});

function clickHandler() {
    // when the button in our html is clicked
    // get the grades entered into the input
    const grades = getGrades("#grades");
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, "#output");
}