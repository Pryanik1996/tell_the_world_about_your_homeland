const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const connect = require('./src/db/connect');
const sessions = require('express-session') // Для чтения сессии 
const MongoStore = require('connect-mongo'); // Пакет, необходимый для хранения сессий в базе данных 

const registerRouter = require('./src/routes/registerRouter')
const loginRouter = require('./src/routes/loginRouter')
const adminRouter = require('./src/routes/adminRouter')

const PORT = 3000;
const server = express();

connect();

const secretKey = require('crypto').randomBytes(64).toString('hex');
const sessionParser = sessions({
  name: server.get('cookieName'),
  secret: secretKey,
  resave: false, // Не сохранять сессию, если мы ее не изменим
  saveUninitialized: false, // не сохранять пустую сессию
  // store: new FileStore({ // выбираем в качестве хранилища файловую систему
  //   secret: secretKey,
  // }),
  store: MongoStore.create({ // выбираем в качестве хранилища mongoDB
    mongoUrl: 'mongodb://localhost:27017/competition',
  }),
  cookie: { // настройки, необходимые для корректного работы cookie
    httpOnly: true, // не разрещаем модифицировать данную cookie через javascript
    maxAge: 100000000, // устанавливаем время жизни cookie
  },
});
server.use(sessionParser);


server.set('cookieName', 'userCookie') // Устанавливаем в настройках сервера специальную переменную
server.set('view engine', 'hbs')
server.set('views', path.join(process.env.PWD, 'src', 'views'))
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));
server.use(morgan('dev'));
server.use(express.static(path.join(process.env.PWD, 'public')));
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.use((req, res, next) => {
  res.locals.name = req.session.name;
  next();
})


server.use('/register', registerRouter)
server.use('/admin', adminRouter)
server.use('/login', loginRouter);
server.get('/', (req, res) => {
  res.render('index')
})






server.listen(PORT, () => {
  console.log('server READY~');
});
