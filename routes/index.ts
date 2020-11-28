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
router.get('/parallax', function (req, res, next) {
  res.render('parallax.html');
});
router.get('/parallax_v2', function (req, res, next) {
  res.render('parallax_v2.html');
});

export default router;
