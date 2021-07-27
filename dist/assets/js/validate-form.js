/**
 * Проверяет значение инпута на пустоту: возращает значение, если пустое возращает false
 * @param {string} inputSelector 
 * @returns {mixed}
 */
function notEmptyInput( inputSelector ){
    let val = ($(inputSelector).val()).trim();
    if ( val.length > 0 ) return val;
    return false;
}
/**
 * В случае успешной валидации возвращает значения поля, иначе false;
 * @param {string} inputSelector 
 * @param {number} minLength 
 * @returns {mixed}
 */
function validateLengthInput(inputSelector, minLength = 3){
    let val = ($(inputSelector).val()).trim();
    if ( val.length >= minLength) return val;
    return false;
}

//Добавляет css класс символизирующий ошибку
function setInputErrorColor(inputSelector){
    $(inputSelector).addClass('err-input');
}
/**
 * Функция выводит сообщения об ошибке добавляя класс input
 * 
 * @param {string} inputSelector - селектор проверяемого поля
 * @param {string} message - сообщение об ошибке
 * @param {Number} animationTime - время анимации
 *  
 */
function showErrorMsg(inputSelector, message, animationTime = 400){
    setInputErrorColor(inputSelector);
    let errSelector = inputSelector + '-' + 'err';
    $(errSelector).html(message);
    $(errSelector).show(animationTime);
    $(inputSelector).on('focus', function(){
        hideErrorOnFocus(inputSelector, errSelector, animationTime)
    });
}

/**
 * Функция скрывает сообщение об ошибке
 * @param {string} inputSelector  - селектор проверяемого поля
 * @param {string} errMsgSelector - селектор текстового блока с сообщением об ошибке
 * @param {Number} animationTime - время анимации
 */
function hideErrorOnFocus(inputSelector, errMsgSelector, animationTime = 10){
    $(inputSelector).removeClass('err-input') ;
    $(errMsgSelector).hide(animationTime);
    $(errMsgSelector).html('');
}