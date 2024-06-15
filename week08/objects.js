

const student = {
    firstName: 'Jim',
    lastName: 'Halpert',
    iNumber: '123-45-6789',
    age: 20,
    img: 'https://www.usmagazine.com/wp-content/uploads/2020/02/John-Krasinski-The-Office-reunion.jpg?crop=0px%2C0px%2C1621px%2C917px&resize=1600%2C900&quality=86&strip=all',
};

const student2 = {
    firstName: 'Pam',
    lastName: 'Halpert',
    iNumber: '987-65-4321',
    age: 30,
    img: 'https://preview.redd.it/7x6txsjbi5h91.jpg?auto=webp&s=b8699527d5798eb7badec9135893f1e4983d493b',
};

const student3 = {
    firstName: 'Dwight',
    lastName: 'Schrute',
    iNumber: '555-55-5555',
    age: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4DS-Il6KdMxRBl-6rDYhh9JSKf5o0XPcJg&s'
};

const students = [student, student2, student3];

students.forEach((student) => {
    const article = document.createElement('article');

    const firstName = document.createElement('p');
    firstName.textContent = student.firstName;
    
    const lastName = document.createElement('p');
    lastName.textContent = student.lastName;
    
    const iNumber = document.createElement('p');
    iNumber.textContent = student.iNumber;
    
    const age = document.createElement('p');
    age.textContent = student.age;

    const img = document.createElement('img');
    img.setAttribute('src', student.img);
    
    article.append(firstName, lastName, iNumber, age, img);
    document.querySelector('section').append(article);
});

