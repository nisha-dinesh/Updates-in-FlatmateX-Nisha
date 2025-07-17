const chatForm = document.getElementById('chat-form');
const messagesList = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const emojiBtn = document.getElementById('emoji-btn');
const emojiPicker = document.getElementById('emoji-picker');

const emojis = [
  "😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇",
  "🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚",
  "😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥳",
  "😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖",
  "😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯",
];

// Populate emoji picker
function populateEmojiPicker() {
  emojis.forEach(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    span.addEventListener('click', () => {
      messageInput.value += emoji;
      messageInput.focus();
      hideEmojiPicker();
    });
    emojiPicker.appendChild(span);
  });
}

function toggleEmojiPicker() {
  emojiPicker.classList.toggle('hidden');
}

function hideEmojiPicker() {
  emojiPicker.classList.add('hidden');
}

emojiBtn.addEventListener('click', () => {
  toggleEmojiPicker();
});

document.addEventListener('click', (e) => {
  if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
    hideEmojiPicker();
  }
});

chatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message, true);
    messageInput.value = '';
    hideEmojiPicker();

    // Simulate reply from other user after 1.2s
    setTimeout(() => {
      addMessage("Got your message! Let's discuss the flat details.", false);
    }, 1200);
  }
});

function addMessage(text, isSelf) {
  const li = document.createElement('li');
  li.classList.add(isSelf ? 'self' : 'other');

  const messageText = document.createElement('span');
  messageText.classList.add('message-text');
  messageText.textContent = text;

  const timeSpan = document.createElement('span');
  timeSpan.classList.add('time');
  const now = new Date();
  timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  li.appendChild(messageText);
  li.appendChild(timeSpan);

  if (isSelf) {
    const tickSpan = document.createElement('span');
    tickSpan.classList.add('tick');
    tickSpan.innerHTML = `
      <svg width="16" height="15" viewBox="0 0 16 15" fill="#92a58c" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.01 3.316l-.478-.372a.365.365 0 00-.51.063L8.666 9.88a.32.32 0 01-.484.032l-.358-.325a.32.32 0 01-.484.032l-.378.48a.418.418 0 00.036.54l1.32 1.267a.32.32 0 00.484-.034l6.272-8.048a.366.366 0 00-.064-.512zm-4.1 0l-.478-.372a.365.365 0 00-.51.063L4.566 9.88a.32.32 0 01-.484.032L1.892 7.77a.366.366 0 00-.516.005l-.423.433a.364.364 0 00.006.514l3.255 3.185a.32.32 0 00.484-.033l6.272-8.048a.365.365 0 00-.063-.51z"/>
      </svg>
    `;
    li.appendChild(tickSpan);
  }

  messagesList.appendChild(li);
  messagesList.scrollTop = messagesList.scrollHeight;
}

// Initialize emoji picker on page load
populateEmojiPicker();
