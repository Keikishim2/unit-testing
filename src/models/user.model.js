const Mysql                 = require('mysql');
const executeQuery  		= require('../config/database.js');

class UserModel {

	async getUsers(params) {
		let result = false;
		try{
			let get_user_query  = Mysql.format(`SELECT * FROM users WHERE email='abc@village88.com';`, [params.email]);
			let get_user_result = await executeQuery(get_user_query);
			if(get_user_result){
				result = true;
			}
		}catch(err){
			console.log(err);
		};
		return result;
	}

	async createUsers(params){
		let result = false;
		try{
			let create_user_query  = Mysql.format(`INSERT INTO users(name,email,password) VALUES(?,?,?);`, [params.name, params.email, params.password]);
			let create_user_result = await executeQuery(create_user_query);
			if(create_user_result){
				result = true;
			}
		}catch(err){
			console.log(err);
		};
		return result;
	}
}

module.exports = UserModel;