const express = require('express');
const app = express();
const router = require('./routers/index');
const Role = require('./models/role');
const User = require('./models/users');
const cookieParser = require('cookie-parser');

const ApplyLoanRouter = require('./routers/ApplyLoan');
const cors = require('cors');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
require('./db/conn');
app.use(router);
app.use(ApplyLoanRouter);

app.get('/', (req, res) => {
  res.send('Hello server');
});

app.listen(5000, () => {
  console.log('server is Listen at port no. 5000');
});
