
class Robots {
    constructor(id, name, username, email, image){
      this.robotId = id
      this.robotName = name,
      this.robotUsername = username,
      this.robotEmail = email,
      this.robotImage = image
    }
  
    create(){
      let robotArea = document.querySelector("#container");
      let robotDiv = document.createElement("div");
      robotDiv.setAttribute("class", "robot-div");
      robotDiv.setAttribute("id", `${this.robotId}`);
      robotDiv.setAttribute("value", `${this.robotUsername}`);
      robotArea.appendChild(robotDiv);
  
      robotDiv.addEventListener("click", (e)=>{openModal(e, this.robotUsername)})
  
      let robotImgDiv = document.createElement("div");
      robotImgDiv.setAttribute("class", "robot-div-img");
      robotDiv.appendChild(robotImgDiv);
  
      let textAreaDiv = document.createElement("div")
      textAreaDiv.setAttribute("class", "text-area-div")
      robotDiv.appendChild(textAreaDiv)
  
      let robotNameDiv = document.createElement("div");
      robotNameDiv.setAttribute("class", "robot-name");
      textAreaDiv.appendChild(robotNameDiv);
  
      let robotDescriptionDiv = document.createElement("div");
      robotDescriptionDiv.setAttribute("class", "robot-description");
      textAreaDiv.appendChild(robotDescriptionDiv);
  
      let robotImg = document.createElement("img");
      robotImg.setAttribute("class", "robot-img");
      let imgUrl = `${this.robotImage}`
      robotImg.src= imgUrl
      robotImgDiv.appendChild(robotImg);
  
      let robotName = document.createElement("p");
      robotName.textContent = this.robotName;
      robotNameDiv.appendChild(robotName);
  
      let robotEmail = document.createElement("p");
      robotEmail.textContent = this.robotEmail;
      robotDescriptionDiv.appendChild(robotEmail);
    }
  }
  
  const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
  ];
  
  robots.forEach(({id, name, username, email, image}) => {
    let newRobot = new Robots(id,name,username,email,image)
    newRobot.create()
  })
  
  function createNavBar(){
    let navbar = document.querySelector(".navbar")
  
    let webName = document.createElement("div")
    webName.setAttribute("id", "logo")
    webName.textContent = "Robot Search"
    navbar.appendChild(webName)
  
    let form = document.createElement("form")
    form.setAttribute("id", "search-form")
    form.setAttribute("class", "search")
    navbar.appendChild(form)
  
    let inputText = document.createElement("input")
    inputText.setAttribute("id", "input-text")
    inputText.placeholder ="Search for your robot"
    form.appendChild(inputText)
    inputText.addEventListener("keyup", search)
  
    let emptyDiv = document.createElement("div")
    emptyDiv.setAttribute("class","empty-div")
    navbar.appendChild(emptyDiv)
  }
  
  createNavBar()
  
  
  function search(e){
    e.preventDefault()
    let input = e.target.value
    console.log(input)
    input=input.toLowerCase();
    let allRobots = document.getElementsByClassName('robot-div');
    for (i = 0; i < allRobots.length; i++) { 
        if (!allRobots[i].innerHTML.toLowerCase().includes(input)) {
            allRobots[i].style.display="none";
        }
        else {
            allRobots[i].style.display="flex";                 
        }
    }
  }
  
  function createModal(){
   
    let modal = document.querySelector("#modal")
    modal.innerHTML = 
    `<div id="myModal" class="modal" style="display:none">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>`
    
    let myModal = document.querySelector("#myModal")
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      myModal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        myModal.style.display = "none";
      }
    }
  }
  
  createModal()
  
  function openModal(e, username){
    e.preventDefault()
    // let robot = e.getAttribute("value")
    console.log(username)
    let modal = document.querySelector("#myModal")
    let text = modal.querySelector("p")
    text.innerHTML =  username
    
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }