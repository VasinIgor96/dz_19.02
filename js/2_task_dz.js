let student = {
    subjects: [],
  
    addSubject: function(subject) {
      if (this.subjects.includes(subject)) {
        console.log(`Ви вже вивчаєте предмет ${subject}.`);
      } else {
        this.subjects.push(subject);
        console.log(`Предмет ${subject} додано.`);
      }
    },
  
    removeSubject: function(subject) {
      if (this.subjects.includes(subject)) {
        const index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
        console.log(`Предмет ${subject} видалено.`);
      } else {
        console.log(`Ви не вивчаєте предмет ${subject}.`);
      }
    }
  };
  
  student.addSubject('Математика');
  student.addSubject('Історія');
  student.addSubject('Математика');
  console.log(student.subjects);
  student.removeSubject('Історія');
  console.log(student.subjects);
  student.removeSubject('Англійська');
  