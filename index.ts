import express from 'express';
import path from 'path';
import ejs from 'ejs';

import indexRouter from './routes';

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;
const port = process.env.PORT || 4000;

app.set('port', port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(app.get('port'), () => console.log(`${port} Listening On`));
