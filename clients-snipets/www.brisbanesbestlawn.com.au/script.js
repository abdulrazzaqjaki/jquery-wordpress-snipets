jQuery(document).ready(function($){


    $('form#2021compsignup select').on('change', function(){

        let _this_select = $(this);
        let _other_select = $('form#2021compsignup select').not(_this_select);
        let _this_val = _this_select.val();
        let _prev_selected = _this_select.attr('data-pre_action');

        $.each(_other_select, function(){

            if(_this_val != ''){
                if(_this_val == $(this).val()){
                    $(this).val('');
                }
                $(this).find('option[value="'+_this_val+'"]').hide();
            }

            if(_prev_selected != ''){
                $(this).find('option[value="'+_prev_selected+'"]').show();
            }

        });

        _this_select.attr('data-pre_action', _this_val);

    });

});