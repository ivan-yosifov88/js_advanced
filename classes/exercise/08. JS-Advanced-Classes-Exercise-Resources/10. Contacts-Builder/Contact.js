class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false; 
    }
    get online(){
        return this._online
    }
    set online(value) {
        if (this.titleDivElement){
            if (!value){
                this.titleDivElement.classList.remove('online');
            }else{
                this.titleDivElement.classList.add('online')
            }
        }
        this._online = value
    }
    render(id) {
        const divParentElement = document.getElementById(`${id}`);
        const articleDivElement = document.createElement('article');

        this.titleDivElement = document.createElement('div');
        this.titleDivElement.classList.add('title');
        this.titleDivElement.textContent = `${this.firstName} ${this.lastName}`;
        if (this.online) {
            this.titleDivElement.classList.add("online");
        }

    
        const infoDivElement = document.createElement('div');
        infoDivElement.classList.add('info');
        infoDivElement.style.display = "none"
       

        const phoneSpanElement = document.createElement('span');
        phoneSpanElement.textContent = '\u260E' + this.phone;
        const emailSpanElement = document.createElement('span');
        emailSpanElement.textContent = '\u2709' + this.email;

        const infoButton = document.createElement('button');
        infoButton.textContent = "\u2139"
        infoButton.addEventListener('click', () => {
            if (infoDivElement.style.display == "none"){
                infoDivElement.style.display = "block";
            }else{
                infoDivElement.style.display = 'none'
            }
        })  
        this.titleDivElement.appendChild(infoButton);
        
        infoDivElement.appendChild(phoneSpanElement);
        infoDivElement.appendChild(emailSpanElement);
        
        articleDivElement.appendChild(this.titleDivElement);
        articleDivElement.appendChild(infoDivElement);

        divParentElement.appendChild(articleDivElement);
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);