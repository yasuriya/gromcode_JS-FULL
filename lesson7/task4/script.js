const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => `Good job, ${name}`);

const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
getMessagesForBestStudents(allStudTest1, retakeStudTest1);

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike', 'Vitalii Portnikov'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];

console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2));
