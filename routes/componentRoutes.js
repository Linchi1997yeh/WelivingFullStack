const dbsearch = require('./DBsearch');
module.exports= (app)=>{
    var Event = require('../models/eventSchema');
    var Contract =  require('../models/contractSchema');
    var House = require('../models/houseSchema');
    var Room = require('../models/roomSchema');
    // get all the events
    app.get('/data/events',async (req,res,next)=>{
        const docs = await dbsearch.reqGetAll('event');
        console.log('hello')
        console.log(docs);
        res.send(docs);
    })
    // get all users
    app.get('/data/users',async (req,res,next)=>{
        const docs = await dbsearch.reqGetAll('user');
        console.log('hello')
        console.log(docs);
        res.send(docs);
    })
    // get all contracts
    app.get('/data/contracts',async (req,res,next)=>{
        const docs = await dbsearch.reqGetAll('contract');
        console.log('hello')
        console.log(docs);
        res.send(docs);
        // Contract.find({},(err,docs)=>{
        //     if (err) throw err;
        //     console.log(docs);
        //     res.send(docs);
        // })
    })
    // get all houses
    app.get('/data/houses',async (req,res,next)=>{
        const docs = await dbsearch.reqGetAll('house');
        console.log('hello')
        console.log(docs);
        res.send(docs);
        // House.find({},(err,docs)=>{
        //     if (err) throw err;
        //     console.log(docs);
        //     res.send(docs);
        // })
    })
    // get all rooms
    app.get('/data/rooms',async(req,res,next)=>{
        const docs = await dbsearch.reqGetAll('room');
        console.log('hello')
        console.log(docs);
        res.send(docs);
        // Room.find({},(err,docs)=>{
        //     if (err) throw err;
        //     console.log(docs);
        //     res.status(200).send(docs);
        // })
    })

}