// db.js
const { Pool } = require('pg'); // Assuming PostgreSQL is used, adjust if using a different database

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use your database connection string
});

const addItem = async (item) => {
    const { name, quantity } = item;
    const query = 'INSERT INTO items(name, quantity) VALUES($1, $2) RETURNING *';
    const values = [name, quantity];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const getItems = async () => {
    const query = 'SELECT * FROM items';
    const res = await pool.query(query);
    return res.rows;
};

const removeItem = async (id) => {
    const query = 'DELETE FROM items WHERE id = $1 RETURNING *';
    const values = [id];
    const res = await pool.query(query, values);
    return res.rows[0];
};

module.exports = {
    addItem,
    getItems,
    removeItem,
};