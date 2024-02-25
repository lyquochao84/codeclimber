const db = require("../../db");

class SolutionController {
  // [GET] Get the solution
  display(req, res) {
    db.query("SELECT * FROM problems", (error, result) => {
      if (error) {
        console.log(error);
        res
          .status(500)
          .send("Error retrieving solution details from the database");
      } 
      else {
        res.json(result);
      }
    });
  }

  // [POST] Save the solution
  save(req, res) {
    const {
      number,
      name,
      prompt,
      timeComplexity,
      spaceComplexity,
      code,
      explanation,
      topic,
      difficulty,
      progress,
      relatedLinks,
    } = req.body.form;
    const query = `
            INSERT INTO problems (problem_number, problem_name, problem_prompt, time_complexity, space_complexity, code, explanation, topic, progress, difficulty, related_link)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            
            `;
    // execute query
    db.query(
      query,
      [
        number,
        name,
        prompt,
        timeComplexity,
        spaceComplexity,
        code,
        explanation,
        JSON.stringify(topic),
        difficulty,
        progress,
        relatedLinks,
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).send("Error saving data to the database");
        }
        res.json({ message: "Data Saved" });
      }
    );
  }

  // [DELETE] Delete the solution
  delete(res, req) {
    const { id } = req.params;

    const query = "DELETE FROM problems WHERE id = ?";

    db.query(query, [id], (error, result) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send("Error deleting solution from the database");
      }
      if (result.affectedRows === 0) {
        return res.status(404).send("Solution not found");
      }
      res.send("Solution deleted successfully");
    });
  }

  // [UPDATE] updater
  update(res, req) {
    const { id } = req.params;
    const {
      number,
      name,
      description,
      timeComplexity,
      spaceComplexity,
      code,
      explanation,
      topic,
      difficulty,
      progress,
      relatedLinks,
    } = req.body;

    // data request
    const query = `
            UPDATE problems
            SET number = ?, name = ?, description = ?, timeComplexity = ?, spaceComplexity = ?, code = ?, explanation = ?, topic = ?, difficulty = ?, progress = ?, relatedLinks = ?
            WHERE id = ?
        `;

    db.query(
      query,
      [
        number,
        name,
        description,
        timeComplexity,
        spaceComplexity,
        code,
        explanation,
        JSON.stringify(topic),
        difficulty,
        progress,
        relatedLinks,
        id,
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .send("Error updating solution in the database");
        }
        if (result.affectedRows === 0) {
          return res.status(404).send("Solution not found");
        }
        res.send("Solution updated successfully");
      }
    );
  }
}

module.exports = new SolutionController();
