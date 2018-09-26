

module.exports = (express,axios) => {
  let Router = express.Router();

  Router.get('/', (req, res, next) => {
      res.render('index', { title: 'Registration' });
    });

  Router.get('/test', (req, res, next) => {
      res.render('index', { title: 'Registration test works' });
    });

  Router.post('/new', (req, res, next) => {
    axios.post('http://nucleus-0.herokuapp.com/care-center/Registration?action=new',{
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password
        }).then((r) => res.send(r.data))
        .catch((err) => res.send(err.response.data))
    });

  Router.post('/getInfo', (req, res, next) => {
    axios.post('http://nucleus-0.herokuapp.com/care-center/Registration?action=getInfo',{
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password
        }).then((r) => res.send(r.data))
        .catch((err) => res.send(err.response.data))
    });

  return Router
}
