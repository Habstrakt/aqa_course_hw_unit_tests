class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== "string") {
      throw new Error("Имя должно быть строкой");
    }

    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error("Имя должно содержать от 2 до 50 латинских букв");
    }

    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== "string") {
      throw new Error("Фамилия должна быть строкой  ");
    }
  
    if (!/^[A-Za-z]{1,50}$/.test(value)) {
      throw new Error("Фамилия должна содержать от 2 до 50 латинских букв.");
    }
  
    this._lastName = value;
  }
  

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== "string") {
      throw new Error("Профессия должна быть строкой");
    }

    if (!/^[A-Za-z ]+$/.test(value.trim())) {
      throw new Error('Profession must contain only Latin letters and spaces');
    }

    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

    set salary(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Зарплата должна быть валидным числом");
    }

    if (value <= 0 || value >= 10000) {
      throw new Error("Зарплата должна быть больше 0 и меньше 10000");
    }

    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("Заголовок должен быть строкой");
    }
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof value !== "string") {
      throw new Error("Телефон должен быть строкой");
    }
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== "string") {
      throw new Error("Адрес должен быть строкой");
    }
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Должен быть экземпляром Employee");
    }

    this.#employees.push(employee);
    console.log(`Employee ${employee.firstName} ${employee.lastName} added to ${this.title}`);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);

    if (!employee) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден`);
    }

    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(emp => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Сотрудник ${firstName} не найден.`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => sum + employee.salary, 0);
  }
  
}

export { Employee, Company };