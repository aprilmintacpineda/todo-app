# Hello World
A simple todo app powered by:
- laravel @5.3.26
- react & react-dom @15.4.1
- react-redux @4.4.6
- redux @3.6.0
- axios @0.15.3

# See it in action
- Make sure you have composer installed and can run `composer` command in the command line
- Make sure you have NPM installed and can run `npm` command in the command line.
- Make sure you have PHP installed and can run `php` command on the command line.
- Make sure you have installed gulp globally and can run `gulp` command on the command line.

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
Make sure you build the app first by running this command

```
gulp --production
```

### Fourth
Build the database by running the following commands one at a time

```
// create a database.sqlite file on the database folder
touch database/database.sqlite
// migrate all tables and seed them
php artisan migrate --seed
```

### Fifth
Rename `.env.example` to `.env`

### Sixth
To get the application up and running, run this command and go the your browser and go to `localhost:8000`

```
php artisan serve
```

# Developer
- April Mintac Pineda

### Report
If you found bugs, report it at `amp.bugreports@gmail.com`