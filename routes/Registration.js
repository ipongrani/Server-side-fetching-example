

module.exports = (express,axios) => {
  let Router = express.Router();


  Router.get('/', (req, res, next) => {
      res.render('index', { title: 'Registration' });
    });


  Router.get('/test', (req, res, next) => {
      res.render('index', { title: 'Registration test works' });
    });


  Router.post('/newAccount', (req, res, next) => {

    axios({
         method: 'post',
         url: `http://nucleus-0.herokuapp.com/care-center/Registration?action=new`,
         data: {
           name: req.body.name,
           address: req.body.address,
           email: req.body.email,
           password: req.body.password
         }
    }).then((r) => res.send(r.data))
    .catch((err) => res.send(err.response.data))

  });


  return Router
}
