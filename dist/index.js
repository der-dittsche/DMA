"use strict";
class User {
    constructor(id, email, name, city) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.city = city;
        /*  one way to use it
        private readonly id: boolean;
        email: string;
        name: string;
        city: string = ""; */
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Couse count shouldn't 0");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
