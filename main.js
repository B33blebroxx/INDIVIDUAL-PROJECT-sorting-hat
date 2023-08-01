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

  const app = document.querySelector('#app')
  const form = document.querySelector('#form-container')
  const buttons = document.querySelector('#btn-row')
  
  const renderToDom = (divId, html) => {
    const targetedDiv = document.querySelector(divId)
    targetedDiv.innerHTML = html
  }
   
  function sortingHat() {
  let domString = ''

  domString += `<div class="card">
    <div class="card-header">
      Greetings!
    </div>
    <div class="card-body">
      <h5 class="card-title">Welcome To Hogwarts School of Witchcraft and Wizardry! </h5>
      <p class="card-text">I am the Sorting Hat! Please press the button to start the sorting process!</p>
      <a href="#" id="formBtn" class="btn btn-primary">Start the Sorting! </a>
    </div>
  </div>`

  renderToDom("#app", domString)
}

  function sortingForm() {
  domString = ''

  domString += `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Name </label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Harry Potter"><button type="submit" id="submitBtn class="btn btn-primary"> Sort! </button>
  </form>
</div>`

  renderToDom('#form-container', domString)
}

function studentsOnDom(array) {
  let domString = ''
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.houseImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`
  }

  renderToDom('#card-container', domString)
}

studentsOnDom(students)

function filterByHouse(house) {
  const filteredStudents = students.filter((student) => student.house === house)
  renderToDom("#card-container", filteredStudents)
}
 
//Event Listeners
function eventListeners() {

  app.addEventListener('click', (e) => {
    if (e.target.id === 'formBtn') {
      sortingForm()
    }
  })

  buttons.addEventListener('click', (e) => {
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

}
  
//List of apps to start upon initialization
  startApp = () => {
    sortingHat()
    eventListeners()

  }
  
  startApp()
 
  
