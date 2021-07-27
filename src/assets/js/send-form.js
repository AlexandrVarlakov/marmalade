$('#btn-send').on('click', function(e){
    e.preventDefault();

    let p_name, p_email, p_msg;
    errors = false;

    if ( notEmptyInput( '#p_name' ) !== false ) {
        p_name = notEmptyInput( '#p_name' );
    } else {
        showErrorMsg('#p_name', 'Поле не может быть пустым');
        errors = true;
    }

    if ( notEmptyInput( '#p_email' ) !== false ) {
        p_email = notEmptyInput( '#p_email' );
    } else {
        showErrorMsg('#p_email', 'Поле не может быть пустым');
        errors = true;
    }

    p_msg = $('#p_msg').val();

    
    if (errors === false){
        $.ajax({
            url: '',
            type: 'POST',
            data: { name: p_name, email: p_email, msg: p_msg}
        }).done(function(data){
                                   
            
        }).fail(function(){
                $('.global-err').html('Ошибка отпраки данных. Повторите попытку позже или обратитесь в тех. поддержку.');
                $('.global-err').show(500);
        });
    }
    

})

