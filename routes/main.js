// The main.js file 
// CommonJS module
module.exports = function(app) {
	/**
	 * Purpose | The initial landing page, includes links to other pages.
	 */
	app.get("/index.html",function(req, res){
		res.render("index.html")
	});

	/**
	 * Purpose | Tells the user about the brand
	 */
	app.get("/index.html#about", function(req, res) {
		res.render("index.html#about")
	});

	/**
	 * Purpose | Allows the users to add devices
	 * Inputs  | User inputted data via form
	 * Outputs | Data submitted to database via query
	 */
	app.get("/add.html", function(req, res) {
		res.render("add.html")
	});

	app.post("/add.html", function (req,res) {
		// saving data in database
		let sqlquery = `INSERT INTO devices (name, device_type, is_on,
			temperature, speed, is_open, brightness, colour, movement_pattern,
			volume, languages) VALUES (?,?,?,?,?,?,?,?,?,?,?)` //execute sql query
		
		// Setting null to the values of the ranges that have an initial value
		if (req.body.device_type == "cooling and heating systems") {
			req.body.brightness = null;
			req.body.volume = null;
		}
		
		else if (req.body.device_type == "curtains and blinds") {
			req.body.temp = null;
			req.body.speed = null;
			req.body.brightness = null;
			req.body.volume = null;
		}

		else if (req.body.device_type == "lighting") {
			req.body.temp = null;
			req.body.speed = null;
			req.body.volume = null;
		}

		else if (req.body.device_type == "audio-visual systems") {
			req.body.temp = null;
		}

		else if (req.body.device_type == "kitchen appliances") {
			req.body.speed = null;
			req.body.brightness = null;
			req.body.volume = null;
		}

		let newrecord = [req.body.device_name, req.body.device_type, req.body.switch,
			req.body.temp, req.body.speed, req.body.open_close, req.body.brightness,
			req.body.colour, req.body.movement_pattern, req.body.volume, req.body.language];
		

		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				// Allows the user to view the updated list
				// query database to get all the devices
				let sqlquery = "SELECT * FROM devices";
				// execute sql query
				db.query(sqlquery, (err, result) => {
					if (err) {
						// res.redirect("/");
						res.render("error.html");
					}
					res.render("list.html", {availableDevices: result});
				});

			}
		});
	});

	/**
	 * Purpose | Allows the users to delete devices
	 * Inputs  | Device data from database
	 * Outputs | User chosen device, delete query sent to database
	 */
	app.get("/delete.html", function(req, res) {
		// res.render("delete.html")
		// query database to get all the devices
		let sqlquery = "SELECT * FROM devices";
		// execute sql query
		db.query(sqlquery, (err, result) => {
			if (err) {
				// res.redirect("/");
				res.render("error.html");
			}
			res.render("delete.html", {availableDevices: result});
		});
	});

	app.post("/delete.html", function(req, res) {
		// removing data from the database
		let sqlquery = `DELETE FROM devices WHERE name = ?;`; //execute sql query
		let newrecord = [req.body.delete];

		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				// query database to get all the devices
				let sqlquery = "SELECT * FROM devices";
				// execute sql query
				db.query(sqlquery, (err, result) => {
					if (err) {
						// res.redirect("/");
						res.render("error.html");
					}
					res.render("list.html", {availableDevices: result});
				});
			}
		});
	});

	/**
	 * Purpose | Allows the users to view device statuses
	 * Inputs  | Device data from database
	 * Outputs | User selected device data
	 */
	app.get("/status.html", function(req, res) {
		// query database to get all the devices
		let sqlquery = "SELECT * FROM devices";
		// execute sql query
		db.query(sqlquery, (err, result) => {
			if (err) {
				// res.redirect("/");
				res.render("error.html");
			}
			res.render("status.html", {availableDevices: result});
		});
	});

	app.post("/status.html", function(req, res) {
		// query database to get selected device
		let sqlquery = "SELECT * FROM devices WHERE name = ?";
		let newrecord = [req.body.status];

		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				res.render("view_status.html", {availableDevices: result});
			}
		});
	});

	/**
	 * Purpose | Allows the users to control device stats, part A
	 * Inputs  | Device data from database
	 * Outputs | User selected device data
	 */
	app.get("/control.html", function(req, res) {
		// res.render("control.html")
		// query database to get all the devices
		let sqlquery = "SELECT * FROM devices";
		// execute sql query
		db.query(sqlquery, (err, result) => {
			if (err) {
				// res.redirect("/");
				res.render("error.html");
			}
			res.render("control.html", {availableDevices: result});
		});
	});

	app.post("/control.html", function(req, res) {
		// query database to get selected device
		let sqlquery = "SELECT * FROM devices WHERE name = ?";
		let newrecord = [req.body.control];

		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				res.render("control_device.html", {availableDevices: result});
			}
		});
	});

	/**
	 * Purpose | Allows the users to control device stats, part B
	 * Inputs  | User selected device data
	 * Outputs | User updated device data
	 */
	app.post("/control_device.html", function (req,res) {
		// saving data in database
		let sqlquery = `UPDATE devices SET name = ?, device_type = ?,
		 is_on = ?, temperature = ?, speed = ?,
		  is_open = ?, brightness = ?, colour = ?,
		   movement_pattern = ?, volume = ?,
		    languages = ? WHERE name = ?` //execute sql query

		// Setting null to the values of the ranges that have an initial value
		if (req.body.device_type == "cooling and heating systems") {
			req.body.open_close = null;
			req.body.brightness = null;
			req.body.colour = null;
			req.body.movement_pattern = null;
			req.body.volume = null;
			req.body.language = null;
		}
		
		else if (req.body.device_type == "curtains and blinds") {
			req.body.switch = null;
			req.body.temp = null;
			req.body.speed = null;
			req.body.brightness = null;
			req.body.colour = null;
			req.body.movement_pattern = null;
			req.body.volume = null;
			req.body.language = null;
		}

		else if (req.body.device_type == "lighting") {
			req.body.temp = null;
			req.body.speed = null;
			req.body.open_close = null;
			req.body.volume = null;
			req.body.language = null;
		}

		else if (req.body.device_type == "audio-visual systems") {
			req.body.temp = null;
			req.body.open_close = null;
			req.body.colour = null;
			req.body.movement_pattern = null;
		}

		else if (req.body.device_type == "kitchen appliances") {
			req.body.speed = null;
			req.body.open_close = null;
			req.body.brightness = null;
			req.body.colour = null;
			req.body.movement_pattern = null;
			req.body.volume = null;
			req.body.language = null;
		}

		let newrecord = [req.body.device_name, req.body.device_type, req.body.switch,
			req.body.temp, req.body.speed, req.body.open_close, req.body.brightness,
			req.body.colour, req.body.movement_pattern, req.body.volume, req.body.language, req.body.device_name];
		

		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				res.render("successful.html");
			}
		});
	});

	/**
	 * Purpose | Allows the users to view the list of devices
	 * Inputs  | Device data from database
	 * Outputs | All device data
	 */
	app.get("/list.html", function(req, res) {
		// query database to get all the devices
		let sqlquery = "SELECT * FROM devices";
		// execute sql query
		db.query(sqlquery, (err, result) => {
			if (err) {
				// res.redirect("/");
				res.render("error.html");
			}
			res.render("list.html", {availableDevices: result});
		});
	});

	/**
	 * Purpose | Allows the users to sign up
	 * Inputs  | User inputs via form
	 * Outputs | User data added to database
	 */
	app.get("/sign_up.html", function(req, res) {
		res.render("sign_up.html")
	});

	app.post("/sign_up.html", function (req,res) {
		// saving data in database
		let sqlquery = `INSERT INTO users (fname, lname, email) VALUES (?,?,?)` //execute sql query
		let newrecord = [req.body.first, req.body.last, req.body.email];
		
		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				res.render("successful_sign_up.html");
			}
		});
	});

	/**
	 * Purpose | Allows the users to contact PluggedIn
	 * Inputs  | User inputs via form
	 * Outputs | User data added to database
	 */
	app.get("/contact.html", function(req, res) {
		res.render("contact.html")
	});

	app.post("/contact.html", function (req,res) {
		// saving data in database
		let sqlquery = `INSERT INTO contacted (fname, lname, msg, email) VALUES (?,?,?, ?)` //execute sql query
		let newrecord = [req.body.first, req.body.last, req.body.msg, req.body.email];
		
		db.query(sqlquery, newrecord, (err, result) => {
			if (err) {
				res.render("error.html");
				return console.error(err.message);
			}
			else {
				res.render("successful_contacted.html");
			}
		});
	});

	/**
	 * Purpose | Setting root page
	 */
	app.get("", function(req, res) {
		res.render("index.html");
	});

	/**
	 * Purpose | Redirecting incorrect routes to error page
	 */
	app.get("*.html", function(req, res) {
		res.render("error.html");
	});
}