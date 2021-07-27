$(function(){
    //点击"去注册账号"链接
    $("#link_reg").on("click",function(){
        $(".login-box").hide()
        $(".reg-box").show()
    })

    //点击"去登录"链接
    $("#link_login").on("click",function(){
        $(".reg-box").hide()
        $(".login-box").show()
    })

    //表单验证
    var form=layui.form
    form.verify({
        'pwd':[/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'], 
        repwd:function(repassword){
            var password=$(".reg-box [name=password]").val()
            if(repassword!=password){
                return "两次密码不一致！"
            }

        }
    })

    $("#form_reg").on("submit",function(e){
        e.preventDefault(); 
        var uname=$("#form_reg [name=username]").val()
        var pwd=$("#form_reg [name=password]").val()
        console.log(uname)
        console.log(pwd)
        $.post('http://www.liulongbin.top:3006/api/getbooks',{username:uname,password:pwd},function(res){
                if (res.status!=0) {
                    return console.log(res.message);
                }
                console.log("注册成功");
            }
            
        )
    })



    
})