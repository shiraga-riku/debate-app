$(function(){
  function buildHTML(comment){
    var html = `<div class="comment" data-message-id="${comment.id}">
                  <p>
                    ${comment.nickname}
                    ${comment.text}
                  </p>
                </div>
                `
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(comment){
      var html = buildHTML(comment);
      if (comment.text == ""){
        $('.form__submit').prop('disabled', false);
        alert('error');
        return false;
      } 
      else {
        $('.comments').append(html);
        $('.textbox').val('');
        $('.form__submit').prop('disabled', false);
      }
    })
    .fail(function(){
      alert('error');
    })
  });
});