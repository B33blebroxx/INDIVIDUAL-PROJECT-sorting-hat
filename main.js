const students = [
  {
    id: 1,
    name: 'Harry Potter',
    house: 'Gryffindor',
    isExpelled: false,
    houseImg: 'https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg'
  },
  {
    id: 2,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    isExpelled: false,
    houseImg: 'https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg'
  },
  {
    id: 3,
    name:  'Ron Weasley',
    house: 'Gryffindor',
    isExpelled: false,
    houseImg: 'https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg' 
  },
  {
    id: 4,
    name: 'Draco Malfoy',
    house: 'Slytherin',
    isExpelled: false,
    houseImg: 'https://logos-world.net/wp-content/uploads/2022/02/Slytherin-Symbol-700x394.png'
  },
  {
    id: 5,
    name: 'Vincent Crabbe',
    house: 'Slytherin',
    isExpelled: false,
    houseImg: 'https://logos-world.net/wp-content/uploads/2022/02/Slytherin-Symbol-700x394.png'
  },
  {
    id: 6,
    name: 'Gregory Goyle',
    house: 'Slytherin',
    isExpelled: false,
    houseImg:'https://logos-world.net/wp-content/uploads/2022/02/Slytherin-Symbol-700x394.png'
  },
  {
    id: 7,
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
    isExpelled: false,
    houseImg: 'https://www.seekpng.com/png/detail/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png'
  },
  {
    id:8,
    name: 'Cho Chang',
    house: 'Ravenclaw',
    isExpelled: false,
    houseImg: 'https://www.seekpng.com/png/detail/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png'
  },
  {
    id: 9,
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    isExpelled: false,
    houseImg: 'https://simg.nicepng.com/png/small/43-439104_hufflepuff-crest-harry-potter-banner-harry-potter-hufflepuff.png'
  },
  {
    id: 10,
    name: 'Ernie Macmillan',
    house: 'Hufflepuff',
    isExpelled: false,
    houseImg: 'https://simg.nicepng.com/png/small/43-439104_hufflepuff-crest-harry-potter-banner-harry-potter-hufflepuff.png'
  }
  ]

  //Stored variables for DOM manipulation
  const app = document.querySelector('#app')
  const form = document.querySelector('form')
  const houseBtns = document.querySelector('#btn-row')
  const formBtn = document.querySelector('#form-btn')
  const expelBtn = document.querySelector('#expel-btn')
  const sortBtn = document.querySelector('#sort-btn')
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

  //Renders HTML to selected div id
  const renderToDom = (divId, html) => {
    const targetedDiv = document.querySelector(divId)
    targetedDiv.innerHTML = html
  }
   
  //Renders sorting hat card to DOM
  function sortingHat() {
  let domString = ''

  domString += `<div class="card">
    <div class="card-header">
      Greetings!
    </div>
    <div class="card-body">
      <h5 class="card-title">Welcome To Hogwarts School of Witchcraft and Wizardry! </h5>
      <p class="card-text">I am the Sorting Hat! Please press the button to start the sorting process!</p>
      <a href="#" id="form-btn" class="btn btn-primary">Start the Sorting! </a>
    </div>
  </div>`

  renderToDom("#app", domString)
}

//Function to make sorting form appear
  function sortingForm() {
  domString = ''

  domString += `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Name </label>
  <input type="text" class="form-control" id="name" placeholder="Harry Potter"><button type="submit" id="sort-btn" class="btn btn-primary"> Sort! </button>
  </form>
</div>`

  renderToDom('form', domString)
}

// Function to render student cards to the DOM
function studentsOnDom(array) {
  let domString = ''
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.houseImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" id='expel-btn' class="btn btn-primary">Expel</a>
    </div>
  </div>`
  }

  renderToDom('#card-container', domString)
}


//Filter Students function
function filterByHouse(house) {
  const filteredStudents = students.filter((student) => student.house === house)
  renderToDom("#card-container", filteredStudents)
}

//Assigns random house to student
const sortStudent = () => {
   e.preventDefault();

  const randomize = Math.floor(Math.random() * houses.length)

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector('#name').value,
    house: students[randomize].house,
    isExpelled: false,
    houseImg: ''
  }
 
  students.push(newStudentObj)
  // studentsOnDom(students)
  console.log(students)

}

//Assigns house image depending on random house selection
// const houseImg = (e) => {
//   if (random)
// }



//Event Listeners
function eventListeners() {
  
  app.addEventListener('click', (e) => {
    if (e.target.id === 'form-btn') {
      sortingForm()
    }
  })
  
  houseBtns.addEventListener('click', (e) => {
    if (e.target.id === 'gryff-btn') {
      const gryffHouse = students.filter((student) => student.house === 'Gryffindor')
      studentsOnDom(gryffHouse)
    }
    if (e.target.id === 'raven-btn') {
      const ravenHouse = students.filter((student) => student.house === 'Ravenclaw')
      studentsOnDom(ravenHouse)
    }
    if (e.target.id === 'slyth-btn') {
      const slythStudents = students.filter((student) => student.house === 'Slytherin')
      studentsOnDom(slythStudents)
    }
    if (e.target.id === 'huff-btn') {
      const huffStudents = students.filter((student) => student.house === 'Hufflepuff')
      studentsOnDom(huffStudents) 
    }
    if (e.target.id === 'death-btn') {
      const deathEaters = students.filter((student) => student.isExpelled === true)
      studentsOnDom(deathEaters)
    }
  })

  form.addEventListener('submit', (e) => {
  
      e.preventDefault();

      const randomize = Math.floor(Math.random() * houses.length)
    
      const newStudentObj = {
        id: students.length + 1,
        name: document.querySelector('#name').value,
        house: students[randomize].house,
        isExpelled: false,
        houseImg: ''
      }
     
      students.push(newStudentObj)
      studentsOnDom(students)
      form.reset
    
    }
  )
  
}

//List of apps to start upon initialization
startApp = () => {
  sortingHat()
  studentsOnDom(students)
  eventListeners()
  
  }
  
  startApp()
 
  
