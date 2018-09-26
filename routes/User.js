

module.exports = (express,axios) => {

  let Router = express.Router();

  Router.get('/', (req, res, next) => {
      res.render('index', { title: 'Login' });
    });

  Router.get('/test', (req, res, next) => {
      res.render('index', { title: 'Login test works' });
    });


  Router.post('/:id/info', (req, res, next) => {

    axios({
         method: 'post',
         url: `http://nucleus-0.herokuapp.com/care-center/${req.params.id}?action=getInfo`,
         data: {
           name: req.body.name,
           address: req.body.address,
           email: req.body.email,
           password: req.body.password
         },
         headers: {
          'Authorization': req.headers.authorization
         },
    }).then((r) => res.send(r.data))
    .catch((err) => res.send(err.response.data))

  })


  return Router
}
