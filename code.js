show = function () {
    jQuery('#history').show();
}

hide = function () {
    jQuery('#history').hide();
}

add = function () { 
    console.log("add function was called");
    result = parseInt(jQuery('#operand_1').val()) + parseInt(jQuery('#operand_2').val());

    text = jQuery('#operand_1').val() + " + " + jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').html(result);

    result = "<span id ='addStyle'>" + result + "<span>";
    old_div_content = jQuery('#history').html();
    new_div_content = old_div_content + result + '<br>';
    jQuery('#history').html(new_div_content);
}

subtract = function () {
    result = parseInt(jQuery('#operand_1').val()) - parseInt(jQuery('#operand_2').val());

    text = jQuery('#operand_1').val() + " - " + jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').html(result);

    result = "<span id ='subtractStyle'>" + result + "<span>";
    old_div_content = jQuery('#history').html();
    new_div_content = old_div_content + result + '<br>';
    jQuery('#history').html(new_div_content);
}

multiply = function () {
    result = parseInt(jQuery('#operand_1').val()) * parseInt(jQuery('#operand_2').val());

    text = jQuery('#operand_1').val() + " * " + jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').html(result);

    result = "<span id ='multiplyStyle'>" + result + "<span>";
    old_div_content = jQuery('#history').html();
    new_div_content = old_div_content + result + '<br>';
    jQuery('#history').html(new_div_content);
}

divide = function () {
    result = parseInt(jQuery('#operand_1').val()) / parseInt(jQuery('#operand_2').val());

    text = jQuery('#operand_1').val() + " / " + jQuery('#operand_2').val() + " = "
    result = text + result;
    jQuery('#result').html(result);

    result = "<span id ='divideStyle'>" + result + "<span>";
    old_div_content = jQuery('#history').html();
    new_div_content = old_div_content + result + '<br>';
    jQuery('#history').html(new_div_content);
}

increase_font = function () {
    x = jQuery('#history').css("font-size");
    x = parseInt(x)
    x = x + 10
    jQuery('#history').css("font-size", x);
}

decrease_font = function () {
    x = jQuery('#history').css("font-size");
    x = parseInt(x)
    x = x - 10
    jQuery('#history').css("font-size", x);
}

setup = function () {
    console.log("setup function was called");
    jQuery('#add_button').click(add);
    jQuery('#subtract_button').click(subtract);
    jQuery('#multiply_button').click(multiply);
    jQuery('#divide_button').click(divide);
    jQuery('#show_button').click(show);
    jQuery('#hide_button').click(hide);
    jQuery('#increase_font_button').click(increase_font);
    jQuery('#decrease_font_button').click(decrease_font);
}

jQuery(document).ready(setup);