$(document).ready(function(){
    // $('p.para1').css('color','red');
    $('p.para1').css({color:'red',background:'#ccc'});
    // $('p.para2').addClass('myClass');
    // $('p.para2').removeClass('myClass');
    $('#btn1').click(function(){
        $('p.para2').toggleClass('myClass');
    });

    //$('#myDiv').text('Hello World');
    $('#myDiv').html('<h3>Hello World</h3>'); //with html, you can add tags(i.e., <h3>)
    //alert($('#myDiv').text());//getting values is possible

    //$('ul').append('<li>Append List Item</li>'); //appends list inside ul
    //$('ul').prepend('<li>Prepend List Item</li>');

    $('.para1').appendTo('.para2'); // para1 is appended to para2
    $('.para1').prependTo('.para2'); // para1 is prepended to para2

    //$('ul').before('<h4>Hello</h4>'); // puts 'Hello' before ul
    //$('ul').after('<h4>World</h4>'); 
    //$('ul').empty(); //takes all the inner elements out, <ul></ul> stays
    //$('ul').detach(); //detaches inner elements as well as <ul></ul> from DOM

    $('a').attr('target','_blank'); // attribute target="blank" opens the link in another tab
    //alert($('a').attr('href')) //getting the attribute is possible
    $('a').removeAttr('target'); //removes target attribute

    //$('p').wrap('<h1>'); //each paragraph tag is wrapped with <h1>
    $('p').wrapAll('<h1>'); //all paragraph tags are wrapped with <h1>

    $('#newItem').keyup(function(e){
        var code = e.which;
        if(code == 13){
            e.preventDefault();
            $('ul').append('<li>'+e.target.value+'</li>');
        }
    });

    var myArr = ['Brad','Kelley','Nate','Juan'];
    $.each(myArr, function(i, val){
        //console.log(i, val);
        $('#users').append('<li>'+val+'</li>');
    });

    var newArr = $('ul#list li').toArray(); //turns list items into array
    //console.log(newArr);
    $.each(newArr, function(i, val){
        console.log(val.innerHTML);
    });
});