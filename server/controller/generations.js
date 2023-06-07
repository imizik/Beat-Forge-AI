const {getGenerations} = require('../model');

module.exports = {
    generations: async (req, res) => {  
        try {
            const results = await getGenerations(req.body);
            console.log(results);
            res.status(200).send(results);
        } catch (error) {
            res.status(404).send('Not Found');
        }
    }
};