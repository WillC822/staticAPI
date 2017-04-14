module.exports = (express) => {
    const router = express.Router();

    router.post('/status', (req, res) => {
        console.log('route hit');
        res.json({
            healthy: true,
        })
    });


    //Routes
    router.use('/api/', require('../models/route')(express))


    return router;
}