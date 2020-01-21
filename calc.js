var express =require('express');

var app =express();

app.get('/calc',function(req,res){
calc={
    a:req.query.a,
    b:req.query.b
};
console.log('calc value is given')
})


app.put('/calc_update',function(req,res)
{
    calc={
        a:req.query.a,
        b:req.query.b
    };
    console.log('calc value is updated')
})

app.delete('/delete',function(req,res)
{
    calc.a=0;
    calc.b=0;
    console.log('value deleted successfully')
})
app.get('/add',function(req,res){
var a=Number(calc.a);
var b=Number(calc.b);
var c=a+b;
    
    add={'the addition of a and b' : c
    };
    console.log("addition completed")
    console.log(c);
    res.end(JSON.stringify(add))
})

app.get('/sub',function(req,res){
    var a=Number(calc.a);
    var b=Number(calc.b);
    var c=a-b;
        
        sub={'the subtraction of a and b' : c
        };
        console.log("subtraction completed")
        console.log(c);
        res.end(JSON.stringify(sub))
    })
    app.get('/mul',function(req,res){
        var a=Number(calc.a);
        var b=Number(calc.b);
        var c=a*b;
            
            mul={'the multiplication of a and b' : c
            };
            console.log("multiplication completed")
            console.log(c);
            res.end(JSON.stringify(mul))
        })

        app.get('/div',function(req,res){
            var a=Number(calc.a);
            var b=Number(calc.b);
            if (b==0)
            {
                res.send("b is zero, kindly change the value of b")
            }
            else{
                var c=a/b;
                div={
                    error:false,
                    status:200,
                    message:'Division successfully completed',
                    value : c
            };
            console.log("division completed")
            console.log(c);
            res.send(div)
            }
            })
var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log('app listening port 3000')
})