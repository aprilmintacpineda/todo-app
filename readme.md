# Hello World
A simple todo app powered by:
- laravel @5.3.26
- react & react-dom @15.4.1
- react-redux @4.4.6
- redux @3.6.0
- axios @0.15.3

# See it in action
- Make sure you have composer installed and can run `composer` command in the command line
- Make sure you have NPM install and can run `npm` command in the command line.
- Make sure you have PHP and can run `php` command on the command line.

### First
Clone the repository by runnning the following command

```
git clone https://github.com/four-eyes-04-04/todo-app
```

then cd on the directory

### Second
Install dependencies by running the following commands one at a time

```
composer install
npm install
```

### Third
Build the database by running the following commands

```
// create a database.sqlite file on the database folder
touch database/database.sqlite
// migrate all tables and seed them
php artisan migrate --seed
```

### Get it running
Run this command and go the your browser and go to `localhost:8000`

```
php artisan serve
```

# Developer
- April Mintac Pineda

### Report
If you found bugs, report it at `amp.bugreports@gmail.com`.