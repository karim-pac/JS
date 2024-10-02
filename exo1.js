const student = {
    firstName: "Marie",
    age: 20,
    course:[],
}

student.age=21
student.grade= "A"
student.course.push("Maths","Physic","Chemistry")

const Physic= student.course.indexOf("Physic")
const newtab = student.course.slice(0, 2);

console.log(student)
console.log("L'index de Physic " + Physic)
console.log("Les deux premiers éléments de course sont " + newtab + " donc le nouveau tableau ci-dessous : ")
console.log(newtab)


// Fichier de KARIM ABBASSI