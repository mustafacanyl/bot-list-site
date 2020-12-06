$('#voteBtn').click(function (e) { 
 var data = {bot_id: $('#botID').val(), vote: "true"};
        $.ajax({
            type: "POST",
            url: "/app/posts/vote",
            data: data,
            beforeSubmit: function () { spinner('voteBtn'); },
            success: function (result) {
                var response = $.parseJSON(result);
                if (response.status == true) {
                    $('#voteBtn').html(`<i class="fa fa-check"></i> Thanks for voting.`);
                    $('#voteBtn').attr('disabled','disabled');
                    $('#voteBtn').removeAttr('onclick');
                    notify(response.message,'success');
                    setTimeout(function () { window.location.href = "/bot/" + $('#botID').val(); },4000);
                } else {
                    notify(response.message, 'error');
                    $('#voteBtn').html('<i class="fa fa-chevron-up"></i> Vote');
                }
            }
        });
});