const {getGenerations} = require('../model');

module.exports = {
    generations: async (req, res) => {  
        try {
            console.log(req)
            const results = await getGenerations();
            console.log(results);
            res.status(200).send(results);
        } catch (error) {
            res.status(404).send('Not Found');
        }
    }
};