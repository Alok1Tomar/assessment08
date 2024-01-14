// routes/planRoutes.js
const express = require('express');
const router = express.Router();
const planController = require('../Controllers/planController');


router.get('/plans', planController.getAllPlans);
router.post('/create-plan', planController.createPlan);
router.put('/update-plan/:id', planController.updatePlan);
router.delete('/delete-plan/:id', planController.deletePlan);


module.exports = router;
