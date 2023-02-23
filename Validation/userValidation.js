const yup =require('yup');
const userSchema = yup.object
({
name: yup.string().required(),
pwd: yup.string().min(4).max(8).required(),});


module.exports = userSchema;
