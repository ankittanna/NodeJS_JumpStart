$(function(){
    
    $('.block-list').on('click', 'label[data-block]', function(event){
     if(!confirm('Are you sure?'))
     {
         return false;
     }
        
        var target = $(event.currentTarget);
        
        $.ajax({
            type: 'DELETE',
            url: '/blocks/'+target.data('block')
        }).done(function(){
            target.parents('li').remove();
        });
    });
    
    $.get('/blocks', appdendToList);
    
    function appdendToList(blocks){
        var list = [];
        for(var i in blocks)
        {
            block = blocks[i];
            content = '<a href="#">'+block+'</a>'+'<label data-block="'+i+'">Delete'+i+'<label>';
            list.push($('<li>', {html: content}));
        }
        $('.block-list').append(list);
    }
    
    $('form').on('submit', function(event){
        event.preventDefault();
        var form = $(this);
        var blockData = form.serialize();
        
        $.ajax({
            type: 'POST',
            url: '/blocks',
            data: blockData,
        }).done(function(blockName){
            appdendToList([blockName]);
            form.trigger('reset');
        });
    });
});