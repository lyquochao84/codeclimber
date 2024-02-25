const db = require('../../db');

class SolutionController {
    // [GET] Get the solution
    display(req, res) {
        db.query('SELECT * FROM problems', (error, result) => {
            if (error) {
                console.log(error);
                res.status(500).send("Error retrieving solution details from the database");
            }
            else {
                res.json(result);
            }
        })  
    }

    // [POST] Save the solution
    save (req, res) {
        console.log('hi');
    }
};

module.exports = new SolutionController();
