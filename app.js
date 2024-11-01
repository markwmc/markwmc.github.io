const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connectedto database ' + db.name);
        }
    });

    const queryDatabase = () => {
        db.serialize(() => {
            db.all('SELECT * FROM contactForm', [], (err, rows) => {
                if (err) {
                    console.error(err.message);
                } else {
                    rows.forEach((row) => {
                        console.log(row);
                    });
                }
            });
        });

    };

    queryDatabase();

    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Closed Connection')
        }
    })