const express = require('express')
const PythonShell = require('python-shell').PythonShell

const router = express.Router();

router.get('/', (req,res) => {
    res.json({ success: "Hello Chatbot API" });
});

router.post('/', (req, res) => {
    const query = req.body.query;

    var options = {
        mode: 'text',
        //   pythonPath: 'path/to/python',
        pythonOptions: ['-u'],
        scriptPath: './scripts/',
        args: [ `"${query}"` ]
    };

    PythonShell.run('main.py', options, (err, results) => {
        if(err) {
            res.status(500).send({
                error: err.stack,
            });
            return
        }
        
        res.status(200).send({ message: results[results.length - 1]});
    });    
})


module.exports = router;