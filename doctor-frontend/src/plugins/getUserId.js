import jwt from 'jsonwebtoken';
// import feathers
export default (token) =>{
  const {userId} = jwt.decode(token);
  return userId;
}
