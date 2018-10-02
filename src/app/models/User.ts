export class User {
    private _email:string;
    private _password:string;
    constructor(_email?:string, _password?:string){
    this._email = _email;
    this._password= _password;
    }
    get email(): string {
    return this._email;
    }
    set email(value: string) {
    console.log('SET EMAIL', value);
    this._email = value;
    }
    get password(): string {
    return this._password;
    }
    set password(value: string) {
    console.log('SET PASSWORD', value);
    this._password = value;
    }
  }
  