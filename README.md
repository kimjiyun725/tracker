# Profisee Technical Exercise
This technical exercise uses React.js, Flask, and Python sqlite3.

## Create the database and insert sample data
link: https://github.com/kimjiyun725/tracker-db
1. Move into the `bespoked_api` directory:
* `cd ./bespoked_api`

2. Create the sqlite3 database:
* `python3.9 table_utils.py`

3. Populate the database:
* `python3.9 sample.py`

## Run the venv:
1. Create Virtualenv if it does not exists:

* `python3.9 -m venv venv`

2. Activate the Virtualenv:

* `source venv/bin/activate`
3. Install dependencies:

* `pip install -r requirements.txt`
4. Run it:

* `export FLASK_APP=main`
* `flask run`

## Launch up the local React.js App
1. Move into the `bespoked-sales-tracker` directory:
* `cd ./bespoked-sales-tracker`

3. Run it:
* `npm start`
