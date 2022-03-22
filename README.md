# SQL Transactions

Lecture starter code - server code only.

## Setup

Create database `bank` and run database.sql file.

```
npm install
npm start
```



A - Atomicity - transactions must be fully complete, or completely undone, ALL OR NOTHING.
C - Consistency - no breaking db constraints.
I - Isolation - transaction data is unavailable outside its transaction until its committed, or rolled back.
D - Duraility - database transactions are available even if the database fails.