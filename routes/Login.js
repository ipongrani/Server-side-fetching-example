

module.exports = (express,axios) => {
  let Router = express.Router();

  Router.get('/', (req, res, next) => {
      res.render('index', { title: 'Login' });
    });

  Router.get('/test', (req, res, next) => {
      res.render('index', { title: 'Login test works' });
    });

  Router.post('/authenticate', (req, res, next) => {
    axios.post('http://care-center-bck-layer1.herokuapp.com/care-center/Login?action=auth',{
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password
        }).then((r) => res.send(r.data))
        .catch((err) => res.send(err.response.data))
    });


  return Router
}
