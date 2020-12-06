$('#updateProfile').click(function (e) { 
 var data = {update: "true"};
        $.ajax({
            type: "POST",
            url: "/app/posts/update_profile",
            data: data,
            beforeSubmit: function () { spinner('voteBtn'); },
            success: function (result) {
                var response = $.parseJSON(result);
                if (response.status == true) {
                    notify(response.message,'success');
                    setTimeout(function () { window.location.reload(); },4000);
                } else {
                    notify(response.message, 'error');
                }
            }
        });
});