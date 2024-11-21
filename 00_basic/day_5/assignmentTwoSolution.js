const gradesManagement = {
  students: {},

  addStudent: function (studentName) {
    if (!this.students[studentName]) {
      this.students[studentName] = {};
      return `Student "${studentName}" added successfully.`;
    } else {
      return `Student "${studentName}" already exists.`;
    }
  },

  addStudentGrade: function (studentName, subject, grade) {
    if (!this.students[studentName]) {
      return `Student "${studentName}" not found.`;
    }
    if (!this.students[studentName][subject]) {
      this.students[studentName][subject] = [];
    }
    this.students[studentName][subject].push(grade);
    return `Grade ${grade} added for "${subject}" to "${studentName}".`;
  },

  getAverageGrade: function (studentName) {
    if (!this.students[studentName]) {
      return `Student "${studentName}" not found.`;
    }
    const subjects = this.students[studentName];
    let totalGrades = 0;
    let totalSubjects = 0;

    for (const grades of Object.values(subjects)) {
      for (const grade of grades) {
        totalGrades += grade;
      }
      totalSubjects += grades.length;
    }

    return totalSubjects > 0
      ? `Average grade for "${studentName}" is ${(
          totalGrades / totalSubjects
        ).toFixed(2)}.`
      : `No grades available for "${studentName}".`;
  },

  getHighestGrade: function (studentName) {
    if (!this.students[studentName]) {
      return `Student "${studentName}" not found.`;
    }
    const subjects = this.students[studentName];
    let highestGrade = -Infinity;

    for (const grades of Object.values(subjects)) {
      for (const grade of grades) {
        if (grade > highestGrade) {
          highestGrade = grade;
        }
      }
    }

    return highestGrade !== -Infinity
      ? `Highest grade for "${studentName}" is ${highestGrade}.`
      : `No grades available for "${studentName}".`;
  },
};

console.log(gradesManagement.addStudent("John"));
console.log(gradesManagement.addStudent("Jane"));
console.log(gradesManagement.addStudent("John"));

console.log(gradesManagement.addStudentGrade("John", "Math", 85));
console.log(gradesManagement.addStudentGrade("John", "Science", 90));
console.log(gradesManagement.addStudentGrade("Jane", "Math", 78));

console.log(gradesManagement.getAverageGrade("John"));
console.log(gradesManagement.getHighestGrade("John"));

console.log(gradesManagement.getAverageGrade("Jane"));
console.log(gradesManagement.getHighestGrade("Jane"));

console.log(gradesManagement.getAverageGrade("Doe"));
console.log(gradesManagement.getHighestGrade("Doe"));
