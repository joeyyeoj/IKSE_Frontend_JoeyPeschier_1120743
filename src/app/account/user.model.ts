export class User {
  public name: string;
  public email: string;
  private _token: string;
  private _tokenExpirationDate: Date
  public admin: boolean;

  constructor(name: string, email: string, _token: string, _tokenExpirationDate: Date, admin: boolean){
    this.name = name;
    this.email = email;
    this._token = _token;
    this._tokenExpirationDate = _tokenExpirationDate;
    this.admin = admin;
  }

  get token(){
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
      return null;
    }
    return this._token;
  }
}

