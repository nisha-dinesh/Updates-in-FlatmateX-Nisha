function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const userId = getQueryParam('user') || 'default';

const users = {
  sukirat_pratap: {
    name: 'Sukirat Pratap',
    avatar: 'https://ui-avatars.com/api/?name=Sukirat+Pratap&background=847e78&color=2A3D45'
  },
  nikita: {
    name: 'Nikita',
    avatar: 'https://ui-avatars.com/api/?name=Nikita&background=847e78&color=2A3D45'
  },
  deepti_choudhary: {
    name: 'Deepti Choudhary',
    avatar: 'https://ui-avatars.com/api/?name=Deepti+Choudhary&background=847e78&color=2A3D45'
  },
  default: {
    name: 'Flatmate Chat',
    avatar: 'https://ui-avatars.com/api/?name=Flatmate&background=847e78&color=2A3D45'
  }
};

const user = users[userId] || users.default;

document.querySelector('.chat-title').textContent = user.name;
const profilePic = document.querySelector('.profile-pic');
profilePic.style.backgroundImage = `url('${user.avatar}')`;

document.querySelector('.back-btn').addEventListener('click', () => {
  window.location.href = 'chatList.html';
});
