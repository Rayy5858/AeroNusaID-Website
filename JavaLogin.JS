function initAeroNusaApp() {

  const cityKalimantanData = {
    banjarmasin: {
      temp: '31°C',
      desc: '<i class="fa-solid fa-smog"></i> Berawan & Udara Kabur',
      aqi: '152',
      aqiStatus: 'Tidak Sehat',
      aqiClass: 'unhealthy',
      pm: 'PM2.5: 61.4 µg/m³',
      humidity: '78%',
      wind: '9 km/jam (Tenggara)',
      timezone: 'WITA',
      news: [
        {
          type: 'haze',
          tag: 'BMKG Kalsel',
          tagClass: 'warning',
          time: '1 Jam yang lalu',
          title: 'Pantauan Kabut Asap Tipis Pagi Hari di Wilayah Banjarmasin & Banjarbaru',
          snippet: 'Masyarakat dianjurkan menggunakan masker saat beraktivitas di luar ruangan pada pagi hari...'
        },
        {
          type: 'rain',
          tag: 'Prakiraan Cuaca',
          tagClass: 'info',
          time: '3 Jam yang lalu',
          title: 'Potensi Hujan Lokal Berdurasi Singkat Disertai Angin Kencang Sore Ini',
          snippet: 'Suhu udara berkisar antara 24°C hingga 33°C dengan kelembapan rata-rata tinggi...'
        },
        {
          type: 'eco',
          tag: 'Inisiatif Hijau',
          tagClass: 'eco',
          time: '1 Hari yang lalu',
          title: 'Program Penanaman 1.000 Pohon Penghijauan Kota untuk Menjaga Kualitas Oksigen',
          snippet: 'Langkah kolaboratif pemda dan relawan lingkungan dalam meningkatkan kadar O2 bersih...'
        }
      ]
    },
    ikn: {
      temp: '29°C',
      desc: '<i class="fa-solid fa-cloud-sun"></i> Cerah Berawan Sehat',
      aqi: '35',
      aqiStatus: 'Baik',
      aqiClass: 'good',
      pm: 'PM2.5: 8.4 µg/m³',
      humidity: '82%',
      wind: '12 km/jam (Timur)',
      timezone: 'WITA',
      news: [
        {
          type: 'eco',
          tag: 'OIKN Env',
          tagClass: 'eco',
          time: '30 Mnt yang lalu',
          title: 'Kualitas Udara Kawasan Inti IKN Terjaga Kategori Sangat Baik',
          snippet: 'Hasil pemantauan sensor otomatis menunjukkan kadar emisi sangat rendah berkat vegetasi hutan kota...'
        },
        {
          type: 'rain',
          tag: 'BMKG Kaltim',
          tagClass: 'info',
          time: '2 Jam yang lalu',
          title: 'Prakiraan Cuaca Sepaku & Nusantara: Cerah Berawan Sepanjang Hari',
          snippet: 'Suhu stabil di angka 28-30°C sangat kondusif untuk aktivitas luar ruangan...'
        }
      ]
    },
    samarinda: {
      temp: '32°C',
      desc: '<i class="fa-solid fa-sun"></i> Cerah Menyengat',
      aqi: '78',
      aqiStatus: 'Sedang',
      aqiClass: 'moderate',
      pm: 'PM2.5: 25.2 µg/m³',
      humidity: '72%',
      wind: '10 km/jam (Utara)',
      timezone: 'WITA',
      news: [
        {
          type: 'haze',
          tag: 'DLH Samarinda',
          tagClass: 'warning',
          time: '2 Jam yang lalu',
          title: 'Indeks Standar Pencemar Udara (ISPU) Tepian Mahakam Berada di Level Sedang',
          snippet: 'Aktivitas lalu lintas padat memicu kenaikan tipis partikulat PM2.5 di area perkotaan...'
        },
        {
          type: 'eco',
          tag: 'Kaltim Hijau',
          tagClass: 'eco',
          time: '5 Jam yang lalu',
          title: 'Penambahan RTH Pinggir Sungai Mahakam Mampu Serap Emisi Gas Buang',
          snippet: 'Kawasan hijau baru meningkatkan pasokan O2 alami untuk warga sekitar...'
        }
      ]
    },
    palangkaraya: {
      temp: '30°C',
      desc: '<i class="fa-solid fa-smog"></i> Berawan Kabut Asap',
      aqi: '135',
      aqiStatus: 'Tidak Sehat',
      aqiClass: 'unhealthy',
      pm: 'PM2.5: 49.8 µg/m³',
      humidity: '84%',
      wind: '7 km/jam (Tenggara)',
      timezone: 'WIB',
      news: [
        {
          type: 'haze',
          tag: 'BMKG Kalteng',
          tagClass: 'warning',
          time: '1 Jam yang lalu',
          title: 'Peringatan Dini Penurunan Kualitas Udara Pagi Hari di Kota Palangka Raya',
          snippet: 'Partikel asap tipis terdeteksi dari lahan gambut luar kota, warga diminta waspada...'
        },
        {
          type: 'rain',
          tag: 'BPBD Kalteng',
          tagClass: 'info',
          time: '4 Jam yang lalu',
          title: 'Operasi Hujan Buatan (TMC) Disiapkannya Guna Membasahi Gambut Kalteng',
          snippet: 'Langkah pencegahan dini untuk meminimalisir potensi titik panas lokal...'
        }
      ]
    },
    pontianak: {
      temp: '30°C',
      desc: '<i class="fa-solid fa-cloud-showers-heavy"></i> Hujan Ringan Khatulistiwa',
      aqi: '42',
      aqiStatus: 'Baik',
      aqiClass: 'good',
      pm: 'PM2.5: 11.2 µg/m³',
      humidity: '88%',
      wind: '11 km/jam (Barat Daya)',
      timezone: 'WIB',
      news: [
        {
          type: 'rain',
          tag: 'BMKG Kalbar',
          tagClass: 'info',
          time: '2 Jam yang lalu',
          title: 'Hujan Mengikis Polutan, Udara Kota Pontianak Segar Pagi Ini',
          snippet: 'Hujan berdurasi sedang di wilayah Kapuas berhasil menurunkan kadar PM2.5 ke batas sangat aman...'
        }
      ]
    },
    balikpapan: {
      temp: '31°C',
      desc: '<i class="fa-solid fa-cloud-sun"></i> Cerah Berawan Pesisir',
      aqi: '55',
      aqiStatus: 'Sedang',
      aqiClass: 'moderate',
      pm: 'PM2.5: 14.8 µg/m³',
      humidity: '75%',
      wind: '15 km/jam (Timur Laut)',
      timezone: 'WITA',
      news: [
        {
          type: 'eco',
          tag: 'Pesisir Kaltim',
          tagClass: 'eco',
          time: '3 Jam yang lalu',
          title: 'Angin Laut Kaltim Bantu Sirkulasi Udara Bersih di Balikpapan',
          snippet: 'Kualitas udara pesisir kota minyak terpantau segar dan nyaman untuk olahraga...'
        }
      ]
    }
  };

  let currentCityKey = 'banjarmasin';

  const citySelect = document.getElementById('citySelect');
  const tempVal = document.getElementById('tempVal');
  const weatherDesc = document.getElementById('weatherDesc');
  const aqiVal = document.getElementById('aqiVal');
  const aqiStatus = document.getElementById('aqiStatus');
  const aqiBadge = document.getElementById('aqiBadge');
  const pmVal = document.getElementById('pmVal');
  const humidityVal = document.getElementById('humidityVal');
  const windVal = document.getElementById('windVal');
  const newsFeed = document.getElementById('newsFeed');
  const newsCount = document.getElementById('newsCount');
  const clockTimeEl = document.getElementById('clockTime');
  const toast = document.getElementById('toast');

  // Update Jam Alam Live Real-time
  function updateNatureClock() {
    const now = new Date();
    const tz = cityKalimantanData[currentCityKey]?.timezone || 'WITA';
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (clockTimeEl) {
      clockTimeEl.textContent = `${hours}:${minutes}:${seconds} ${tz}`;
    }
  }

  setInterval(updateNatureClock, 1000);

  // Update Telemetri & Feed Berita Kota
  function updateKalimantanDashboard(key) {
    currentCityKey = key;
    const data = cityKalimantanData[key];
    if (!data) return;

    tempVal.textContent = data.temp;
    weatherDesc.innerHTML = data.desc;
    aqiVal.textContent = data.aqi;
    aqiStatus.textContent = data.aqiStatus;
    pmVal.textContent = data.pm;
    humidityVal.textContent = data.humidity;
    windVal.textContent = data.wind;

    aqiBadge.className = `aqi-badge ${data.aqiClass}`;
    newsCount.textContent = `${data.news.length} Berita`;

    newsFeed.innerHTML = '';
    data.news.forEach(item => {
      const article = document.createElement('article');
      article.className = 'news-item';
      let iconClass = item.type === 'rain' ? 'fa-cloud-sun-rain' : (item.type === 'eco' ? 'fa-seedling' : 'fa-smog');

      article.innerHTML = `
        <div class="news-icon-wrapper ${item.type}">
          <i class="fa-solid ${iconClass}"></i>
        </div>
        <div class="news-content">
          <div class="news-meta">
            <span class="news-tag ${item.tagClass}">${item.tag}</span>
            <span class="news-time">${item.time}</span>
          </div>
          <h4 class="news-title">${item.title}</h4>
          <p class="news-snippet">${item.snippet}</p>
        </div>
      `;
      newsFeed.appendChild(article);
    });

    updateNatureClock();
  }

  if (citySelect) {
    citySelect.addEventListener('change', (e) => {
      updateKalimantanDashboard(e.target.value);
      showToast(`Memuat data telemetri ${citySelect.options[citySelect.selectedIndex].text}`);
    });
  }

  updateKalimantanDashboard('banjarmasin');

  // Canvas Animasi Angin & Dedaunan
  const canvas = document.getElementById('natureCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const leaves = [];
    const windLines = [];
    const leafColors = ['#10b981', '#34d399', '#059669', '#f59e0b', '#84cc16'];

    class Leaf {
      constructor() { this.reset(true); }

      reset(isIntro = false) {
        this.x = isIntro ? Math.random() * canvas.width : -30;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 8;
        this.speedX = Math.random() * 2.5 + 2.0;
        this.speedY = Math.random() * 1.2 - 0.6;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.05;
        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
        this.opacity = Math.random() * 0.6 + 0.4;
        this.swayAngle = Math.random() * Math.PI;
      }

      update() {
        this.swayAngle += 0.025;
        this.x += this.speedX + Math.cos(this.swayAngle) * 0.8;
        this.y += this.speedY + Math.sin(this.swayAngle) * 0.5;
        this.rotation += this.rotSpeed;

        if (this.x > canvas.width + 30) this.reset(false);
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size / 2, this.size / 2, 0, this.size);
        ctx.bezierCurveTo(-this.size / 2, this.size / 2, -this.size / 2, -this.size / 2, 0, -this.size);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255,255,255,0.45)';
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(0, -this.size + 2);
        ctx.lineTo(0, this.size - 2);
        ctx.stroke();

        ctx.restore();
      }
    }

    class WindLine {
      constructor() { this.reset(); }

      reset() {
        this.x = -200;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 160 + 100;
        this.speed = Math.random() * 4.0 + 3.0;
        this.opacity = Math.random() * 0.3 + 0.12;
        this.thickness = Math.random() * 1.8 + 0.6;
      }

      update() {
        this.x += this.speed;
        if (this.x - this.length > canvas.width) this.reset();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = this.thickness;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.quadraticCurveTo(this.x + this.length / 2, this.y + Math.sin(this.x * 0.008) * 15, this.x + this.length, this.y);
        ctx.stroke();
        ctx.restore();
      }
    }

    for (let i = 0; i < 36; i++) leaves.push(new Leaf());
    for (let i = 0; i < 10; i++) windLines.push(new WindLine());

    function animateNature() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      windLines.forEach(l => { l.update(); l.draw(); });
      leaves.forEach(l => { l.update(); l.draw(); });
      requestAnimationFrame(animateNature);
    }
    animateNature();
  }

  // Interaksi Form & Password Toggle
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegisterBtn = document.getElementById('showRegisterBtn');
  const showLoginBtn = document.getElementById('showLoginBtn');
  const forgotPassBtn = document.getElementById('forgotPassBtn');
  const logoWrapper = document.getElementById('logoWrapper');

  const toggleLoginPass = document.getElementById('toggleLoginPass');
  const loginPassword = document.getElementById('loginPassword');
  const toggleRegPass = document.getElementById('toggleRegPass');
  const regPassword = document.getElementById('regPassword');

  function setupPasswordToggle(button, input) {
    if (!button || !input) return;
    button.addEventListener('click', () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      button.querySelector('i').className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
    });
  }

  setupPasswordToggle(toggleLoginPass, loginPassword);
  setupPasswordToggle(toggleRegPass, regPassword);

  if (showRegisterBtn) {
    showRegisterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.remove('active');
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
      registerForm.classList.add('active');
    });
  }

  if (showLoginBtn) {
    showLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.classList.remove('active');
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      loginForm.classList.add('active');
    });
  }

  if (logoWrapper) {
    logoWrapper.addEventListener('click', () => {
      const tree = logoWrapper.querySelector('.logo-tree');
      const clouds = logoWrapper.querySelector('.logo-clouds');
      const o2 = logoWrapper.querySelector('.logo-o2');

      tree.style.animation = 'none';
      clouds.style.animation = 'none';
      o2.style.animation = 'none';

      void logoWrapper.offsetWidth;

      tree.style.animation = 'growTree 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
      clouds.style.animation = 'floatCloudDown 1s ease-out 0.4s forwards';
      o2.style.animation = 'popO2Side 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards';

      showToast('🌳 Ekosistem Pohon Beringin Kalimantan Diperbarui!');
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(`Selamat datang kembali, ${document.getElementById('loginUsername').value}!`);
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(`Pendaftaran berhasil! Akun ${document.getElementById('regName').value} siap digunakan.`);
    });
  }

  if (forgotPassBtn) {
    forgotPassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Tautan pemulihan kata sandi telah dikirim.');
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3500);
  }

}

// Proteksi Pemanggilan Agar Langsung Aktif di Berbagai Lingkungan Browser
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAeroNusaApp);
} else {
  initAeroNusaApp();
}