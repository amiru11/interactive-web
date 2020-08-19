import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.html');
});
router.get('/carousel', function (req, res, next) {
  res.render('carousel.html');
});
router.get('/modal', function (req, res, next) {
  res.render('modal.html');
});

export default router;
