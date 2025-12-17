function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;

  if (u === 'admin' && p === '12345678') {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('storePage').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}

function logout() {
  document.getElementById('storePage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
}

function openModal(title, desc, img) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('modalImg').src = img;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
