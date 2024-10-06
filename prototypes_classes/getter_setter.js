function user(email,id){
    this._email=email;
    this._id=id;

    Object.defineProperty(this,'email',{
        set: function(email){
            this._email=email;
        },
        get: function(){
            return `${this._email.toUpperCase()}`;
        }
    })

    Object.defineProperty(this,'id',{
        set: function(id){
            this._id=id;
        },
        get: function(){
            return `${this._id}`;
        }
    })
}
const user1=new user("anjali@gmail.com",1)
console.log(user1.email);
console.log(user1.id);