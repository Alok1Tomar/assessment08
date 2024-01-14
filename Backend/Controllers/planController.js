// controllers/planController.js
const Plan = require('../Models/Plan');

// Get all plans
const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (error) {
    console.error('Error fetching plans:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new plan
const createPlan = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newPlan = new Plan({
      name,
      price,
      description,
    });

    await newPlan.save();

    res.status(201).json({ message: 'Plan created successfully', plan: newPlan });
  } catch (error) {
    console.error('Error creating plan:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a plan
const updatePlan = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  try {
    const updatedPlan = await Plan.findByIdAndUpdate(
      id,
      { name, price, description },
      { new: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    res.json({ message: 'Plan updated successfully', plan: updatedPlan });
  } catch (error) {
    console.error('Error updating plan:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a plan
const deletePlan = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlan = await Plan.findByIdAndDelete(id);

    if (!deletedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    res.json({ message: 'Plan deleted successfully', plan: deletedPlan });
  } catch (error) {
    console.error('Error deleting plan:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPlans,
  createPlan,
  updatePlan,
  deletePlan,
};
