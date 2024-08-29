import bcrypt from "bcrypt"

const  generatePasswordHash=(password)=> {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt)
    return hash;
}

export default generatePasswordHash;
