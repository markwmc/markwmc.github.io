import express from "express";
import Database from 'better-sqlite3';

const app = express();
const db = new Database('database.db', { verbose: console.log});

db.pragma('journal_mode = WAL');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("HEllo, World!");
});

app.post("/formHandler", (req, res) => {
  const formData = req.body;
  console.log("form data received: ", formData);
  res.json({ message: "form data received", data: formData });

  const stmt = db.prepare(`INSERT INTO contacts (fname, lname, email, comments) VALUES (?, ?, ?, ?)`)
  const info = stmt.run(formData.fname, formData.lname, formData.email, formData.message)
  res.json({message: 'form data received', data:formData, id: info.lastInsertRowid })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
