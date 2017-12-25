socket = io.connect('http://localhost:3000', { forceNew: true });

socket.on('messages', function (data) {
    render(data);
});

function render(data) {
    var html = data.map(function (message, index) {
        return (`
            <div class="message">
                <div id="header">
                    <strong>${message.nickname}</strong> says:
                </div>
                <div id="content">
                    <p>${message.text}</p>
                </div>
                <div id="time">
                    <small>${message.time}</small>
                </div>
            </div>
        `);
    }).join(' ');

    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e) {
    if (document.getElementById('texto').value != ''
        && document.getElementById('nickname').value != '') {
        var message = {
            text: document.getElementById('texto').value,
            nickname: document.getElementById('nickname').value
        }
        document.getElementById('nickname').style.display = 'none';
        document.getElementById('texto').value = '';
        socket.emit('add-message', message);
    }
    return false;
}
