class Employee {
	#salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName =  firstName,
    this.lastName = lastName,
    this.profession = profession,
    this.salary = salary
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if(typeof value !== "string") {
      throw new Error("Имя должно быть строкой");
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if(typeof value !== "string") {
      throw new Error("Фамилия должна быть строкой");
    }
    this._lastName = value
  }

  get profession() {
    return this._profession
  }

  set profession(value) {
    if(typeof value !== "string") {
      throw new Error("Название профессии должно быть строкой");
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary
  }

  set salary(value) {
    if(typeof value !== "number" || value <= 0) {
      throw new Error("Число не может быть меньше нуля");
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Company {
	#employees
	constructor(title, phone, address) {
		this.title = title,
		this.phone = phone,
		this.address = address,
		this.#employees = []
	}

	get title() {
		return this._title
	}

	set title(value) {
		if(typeof value !== "string") {
			throw new Error("Заголовок должен быть строкой");
		}
		this._title = value;
	}

	get phone() {
		return this._phone
	}

	set phone(value) {
		if(typeof value !== "string") {
			throw new Error("Номер телефона должен быть строкой");
		}
		this._phone = value;
	}

	get address() {
		return this._address
	}

	set address(value) {
		if(typeof value !== "string") {
			throw new Error("Адрес должен быть строкой");
		}
		this._address = value;
	}

	addEmployee(employee) {
		if(!(employee instanceof Employee)) {
			throw new Error("Должен быть экземпляром Employee");
		}
		this.#employees.push(employee);
	}

	getEmployees() {
		return this.#employees
	}

	getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
