const chats = [
  {
    id: 'sukirat_pratap',
    name: 'Sukirat Pratap',
    avatar: 'https://ui-avatars.com/api/?name=Sukirat+Pratap&background=847e78&color=2A3D45',
    lastMessage: 'Hey! Are you available to visit the flat tomorrow?'
  },
  {
    id: 'nikita',
    name: 'Nikita',
    avatar: 'https://ui-avatars.com/api/?name=Nikita&background=847e78&color=2A3D45',
    lastMessage: 'I sent you the documents.'
  },
  {
    id: 'deepti_choudhary',
    name: 'Deepti Choudhary',
    avatar: 'https://ui-avatars.com/api/?name=Deepti+Choudhary&background=847e78&color=2A3D45',
    lastMessage: 'Looking forward to meeting you!'
  }
];

const chatListEl = document.getElementById('chat-list');

function openChat(id) {
  window.location.href = `chat.html?user=${encodeURIComponent(id)}`;
}

function populateChatList() {
  chats.forEach(chat => {
    const li = document.createElement('li');
    li.addEventListener('click', () => openChat(chat.id));

    const avatar = document.createElement('div');
    avatar.className = 'profile-pic';
    avatar.style.backgroundImage = `url('${chat.avatar}')`;

    const info = document.createElement('div');
    info.className = 'chat-info';

    const name = document.createElement('div');
    name.className = 'chat-name';
    name.textContent = chat.name;

    const lastMsg = document.createElement('div');
    lastMsg.className = 'last-message';
    lastMsg.textContent = chat.lastMessage;

    info.appendChild(name);
    info.appendChild(lastMsg);

    li.appendChild(avatar);
    li.appendChild(info);

    chatListEl.appendChild(li);
  });
}

populateChatList();
