const router = require("express").Router()
const {getUserDetails, getUserRepositories} = require('../controllers/controller')

router.get('/:username', getUserDetails);
router.get('/repositories/:username/:page',getUserRepositories); 

module.exports = router;