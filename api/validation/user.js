const { body,validationResult } = require('express-validator')

const userValidation = ()=>{
    return [
        body("firstName").isString().isLength({min:4,max:30}),
        body("lastName").isString().isLength({min:4,max:30}),
        body("email").isEmail().isLength({min:11,max:56}),
        body("mobile").isMobilePhone().isLength({min:10,max:10}),
        body("profession").isString().isLength({min:4,max:30}),
        body("address").isString().isLength({min:4,max:56}),
    ]
}

const schemaValidation = (req,res,next)=>{
  let errors = validationResult(req)
  if(errors.isEmpty()){
    return next()
  }

  const schemaError = []

  errors.array().map((err)=>schemaError.push({[err.param]:err.msg}))
  res.status(422).json({
      errors:schemaError
  })
}

module.exports = {userValidation,schemaValidation}