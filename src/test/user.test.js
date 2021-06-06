const chai                  = require('chai');
const expect                = chai.expect;
const UserModel             = require('../models/user.model');

describe("User Model", function(){
    describe("createUser", function(){
        it("Given a valid input, it should return true if we successfully create a new user", async function(){
            let userModel   = new UserModel();
            let params      = {"name": "Kei Kishimoto", "email": "kei@village88.com", "password": "password123"};
    
            let result = await userModel.createUsers(params);
    
            expect(result).to.equal(true);
        });
        it("Given an invalid input, it should return false if we create a new user", async function(){
            let userModel   = new UserModel();
            let params      = {"name": 01234, "email": 123, "password": "password123"};
    
            let result = await userModel.createUsers(params);
    
            expect(result).to.equal(true);
        });

        it("Given an empty input, it should return false if we create a new user", async function(){
            let userModel   = new UserModel();
            let params      = {"name": "", "email": "", "": ""};
    
            let result = await userModel.createUsers(params);
    
            expect(result).to.equal(true);
        });
    })

    describe("getUser", function(){
        it("Select data from db using email", async function(){
            let userModel   = new UserModel();
            let params      = {"email": "jrosales@village88.com"};
    
            let result = await userModel.getUsers(params);
    
            expect(result).to.equal(true);
        });

        it("Select an invalid email data", async function(){
            let userModel   = new UserModel();
            let params      = {"email": "asdasdasd"};
    
            let result = await userModel.getUsers(params);
    
            expect(result).to.equal(true);
        });

        it("Select an empty email", async function(){
            let userModel   = new UserModel();
            let params      = {"email": ""};
    
            let result = await userModel.getUsers(params);
    
            expect(result).to.equal(true);
        });
    })
});