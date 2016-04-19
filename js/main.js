function generateFTPURL() {
    var text = 'ftp://'
    if ($('#username').val()) {
        text += encodeURIComponent($('#username').val()) + ':'
        text += encodeURIComponent($('#password').val()) + '@'
    }
    text += $('#domain').val()
    if ($('#filename').val()) {
        text += '/' + $('#filename').val().replace('\\', '/').replace(/^\/+/, '')
    }
    $('#ftp_url').val(text).focus().select()
    return false
}

$(document).ready(function() {
    $('#alert_nojs').addClass('hide');
    $('#main')
        .removeClass('hide')
        .on('submit', 'form', generateFTPURL)
});
