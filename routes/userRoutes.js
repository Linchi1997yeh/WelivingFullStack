//User route
module.exports = (app,passport)=>{
    var User = require('../models/userSchema');
    var Event = require('../models/eventSchema');
    app.post('/member/register',(req,res,next)=>{
        // console.log('register');
        passport.authenticate('local-signup',(err,user,info)=>{
            // console.log('in passauth')
            if (err) return next(err);
            if (!user){
                // registration failed user already taken
                // console.log('user taken or invalid password');
                res.send('User already taken');
            }else{
                //registration complete
                res.send('register Success');
            }
        })(req, res, next);
    });
    //return all members in users schema
    app.get('/member/all',(req,res,next)=>{
        User.find({},(err,docs)=>{
            if (err) throw err;
            console.log('request all')
            res.send(docs);
        });
    });
    // return all notifications
    app.get('/member/notification',(req,res,next)=>{
        Event.find({},(err,docs)=>{
            if (err) throw err;
            console.log('reques all events');
            res.send(docs);
        });
    });
    app.post('/member/login',(req,res,next)=>{
        console.log('at login auth');
        passport.authenticate('local-login',(err,user,info)=>{
            console.log('in login-auth')
            if (err) return next(err);
            if (!user){
                // registration failed user already taken
                console.log('user not found or invalid password');
                res.send('user not found or invalid password');
            }else{
                //registration complete
                var package = {
                    'valid': true,
                    'msg':'login-success',
                    'redirect': '/profile'
                }
                res.send(package);
            }
        })(req, res, next);
    })

    //for later redirect to when logged in check with middleware isLoggedIn
    app.get('/member/check',isLoggedIn,(req,res)=>{
        var package = {
            'valid': true,
            'msg':'login-success',
            'redirect': '/profile'
        };
        res.send(package);
    })
}

    function isLoggedIn(req,res,next){
        console.log('************afterthis')
        console.log(req.user);
        if(req.isAuthenticated()){
            console.log('logged in')
            return next();
        }else{
            var package = {
                // 'valid': true,
                'msg':'Please Login First',
                'redirect': '/login'
            }
            console.log('not logged')
            res.send(package);
        }
    }