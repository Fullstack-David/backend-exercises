export const createUserValidationSchema = {
    firstName: {
        isLength: {
            Option: {
                min: 2, 
                max:20
            },
            errorMessage: "firstName must be at least 2 characters long and no more than 20 characters."
        },
        notEmpty: {
            errorMessage: "firstName can not be empty."
        },
        isString: {
            errorMessage: "firstName must be a string."
        }
    },

    lastName: {
        isLength: {
            Option: {
                min: 2, 
                max:20
            },
            errorMessage: "lastName must be at least 2 characters long and no more than 20 characters."
        },
        notEmpty: {
            errorMessage: "lastName can not be empty."
        },
        isString: {
            errorMessage: "lastName must be a string."
        }
        
    },

    nickName: {
        isLength: {
            Option: {
                min: 1, 
                max:20
            },
            errorMessage: "nickName must be at least 1 characters long and no more than 20 characters."
        },
        notEmpty: {
            errorMessage: "nickName can not be empty."
        },
        isString: {
            errorMessage: "nickName must be a string."
        }
        
    }
}