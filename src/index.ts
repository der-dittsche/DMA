class User {
  /*  one way to use it
  private readonly id: boolean;
  email: string;
  name: string;
  city: string = ""; */

  protected _courseCount = 1;

  constructor(
    private id: number,
    public email: string,
    public name: string,
    public city: string
  ) {}
  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }
  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
