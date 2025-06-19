// Music Player Application
document.addEventListener('DOMContentLoaded', function() {
  // Sample music data
  const songs = [
    {
      id: 's1',
      title: 'STFU',
      artist: 'AP Dhillon',
      album: 'OKAY STFU',
      duration: 203,
      artwork: 'https://c.saavncdn.com/378/OKAY-STFU-Punjabi-2025-20250502063450-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/378/8cee3668b7d5ae40e5371e7568d7c7cd_160.mp4',
      lyrics: "No Lyrics available for this track."
    },
    {
      id: 's2',
      title: 'Brown Munde',
      artist: 'AP Dhillon, Gurinder Gill, Gminxr',
      album: 'Brown Munde',
      duration: 238,
      artwork: 'https://c.saavncdn.com/238/Brown-Munde-Punjabi-2020-20200918-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/238/8a5b1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Brown munde brown munde, brown munde brown munde"
    },
    {
      id: 's3',
      title: 'Excuses',
      artist: 'AP Dhillon, Gurinder Gill, Intense',
      album: 'Excuses',
      duration: 196,
      artwork: 'https://c.saavncdn.com/596/Excuses-English-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/9b6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "You keep on making excuses, I keep on falling for you"
    },
    {
      id: 's4',
      title: 'Majhail',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Majhail',
      duration: 215,
      artwork: 'https://c.saavncdn.com/391/Majhail-Punjabi-2021-20210205163704-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/391/7c6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Majhail ve tu majhail, tu kinna sohni lagdi"
    },
    {
      id: 's5',
      title: 'Insane',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Insane',
      duration: 207,
      artwork: 'https://c.saavncdn.com/596/Insane-English-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/6d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "I'm going insane, I'm going insane"
    },
    {
      id: 's6',
      title: '295',
      artist: 'Sidhu Moosewala',
      album: 'Moosetape',
      duration: 243,
      artwork: 'https://c.saavncdn.com/596/295-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/5d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "295 likh ke lawa te gaddi ch 295"
    },
    {
      id: 's7',
      title: 'So High',
      artist: 'Sidhu Moosewala',
      album: 'PBX 1',
      duration: 227,
      artwork: 'https://c.saavncdn.com/596/So-High-Punjabi-2018-20180921050454-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/4d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "So high, so high, so high"
    },
    {
      id: 's8',
      title: 'The Last Ride',
      artist: 'Sidhu Moosewala',
      album: 'Moosetape',
      duration: 256,
      artwork: 'https://c.saavncdn.com/596/The-Last-Ride-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/3d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "This is the last ride, last ride"
    },
    {
      id: 's9',
      title: 'Daku',
      artist: 'Shubh',
      album: 'Still Rollin',
      duration: 221,
      artwork: 'https://c.saavncdn.com/596/Daku-Punjabi-2022-20220214050454-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/2d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Daku banke aaya, daku banke aaya"
    },
    {
      id: 's10',
      title: 'Cheques',
      artist: 'Shubh',
      album: 'Still Rollin',
      duration: 234,
      artwork: 'https://c.saavncdn.com/596/Cheques-Punjabi-2022-20220214050454-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/1d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Cheques bhar de, cheques bhar de"
    },
    {
      id: 's11',
      title: 'No Love',
      artist: 'Shubh',
      album: 'Still Rollin',
      duration: 198,
      artwork: 'https://c.saavncdn.com/596/No-Love-Punjabi-2022-20220214050454-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/0d6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "No love, no love, no love"
    },
    {
      id: 's12',
      title: 'Tere Te',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Not by Chance',
      duration: 212,
      artwork: 'https://c.saavncdn.com/596/Tere-Te-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/fc6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Tere te, tere te, tere te"
    },
    {
      id: 's13',
      title: 'Desires',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Not by Chance',
      duration: 224,
      artwork: 'https://c.saavncdn.com/596/Desires-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/ec6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Desires, desires, desires"
    },
    {
      id: 's14',
      title: 'Faraar',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Not by Chance',
      duration: 231,
      artwork: 'https://c.saavncdn.com/596/Faraar-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/dc6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Faraar, faraar, faraar"
    },
    {
      id: 's15',
      title: 'Summer High',
      artist: 'AP Dhillon',
      album: 'Hidden Gems',
      duration: 219,
      artwork: 'https://c.saavncdn.com/596/Summer-High-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/cc6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Summer high, summer high, summer high"
    },
    {
      id: 's16',
      title: 'Droptop',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Hidden Gems',
      duration: 205,
      artwork: 'https://c.saavncdn.com/596/Droptop-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/bc6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Droptop, droptop, droptop"
    },
    {
      id: 's17',
      title: 'Faizal',
      artist: 'Navaan Sandhu',
      album: 'Faizal',
      duration: 228,
      artwork: 'https://c.saavncdn.com/596/Faizal-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/ac6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Faizal, Faizal, Faizal"
    },
    {
      id: 's18',
      title: '52 Bars',
      artist: 'Karan Aujla',
      album: 'B.T.F.U',
      duration: 237,
      artwork: 'https://c.saavncdn.com/596/52-Bars-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/9c6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "52 bars, 52 bars, 52 bars"
    },
    {
      id: 's19',
      title: 'Baller',
      artist: 'Shubh',
      album: 'Still Rollin',
      duration: 221,
      artwork: 'https://c.saavncdn.com/596/Baller-Punjabi-2022-20220214050454-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/8c6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "Baller, baller, baller"
    },
    {
      id: 's20',
      title: 'OG',
      artist: 'Prem Dhillon',
      album: 'OG',
      duration: 214,
      artwork: 'https://c.saavncdn.com/596/OG-Punjabi-2021-20210423035758-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/596/7c6a1e8e9c5e5a5f5e5d5c5b5a595857_160.mp4',
      lyrics: "OG, OG, OG"
    }
];

  // User library data
  const userLibrary = {
    likedSongs: new Set(),
    recentlyPlayed: []
  };

  // Player state
  let currentSongIndex = -1;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;

  // DOM elements
  const audioElement = document.getElementById('audioElement');
  const songListElement = document.getElementById('songList');
  const queueListElement = document.getElementById('queueList');
  const lyricsContainer = document.getElementById('lyricsContainer');
  const nowPlayingArtwork = document.querySelector('.now-playing-artwork img');
  const nowPlayingTitle = document.querySelector('.now-playing-title');
  const nowPlayingArtist = document.querySelector('.now-playing-artist');
  const playerArtwork = document.querySelector('.player-artwork img');
  const playerSongTitle = document.querySelector('.player-song-title');
  const playerSongArtist = document.querySelector('.player-song-artist');
  const playPauseButton = document.getElementById('btnPlayPause');
  const prevButton = document.getElementById('btnPrev');
  const nextButton = document.getElementById('btnNext');
  const shuffleButton = document.getElementById('btnShuffle');
  const repeatButton = document.getElementById('btnRepeat');
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.getElementById('progressFill');
  const currentTimeElement = document.querySelector('.current-time');
  const durationTimeElement = document.querySelector('.duration-time');
  const volumeButton = document.getElementById('volumeButton');
  const volumeSlider = document.getElementById('volumeSlider');
  const sortSelect = document.getElementById('sortSelect');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const likeButton = document.querySelector('.player-info .like-button');

  // Helper functions
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Render songs list
  function renderSongList(songsArray) {
    songListElement.innerHTML = '';
    
    songsArray.forEach((song, index) => {
      const row = document.createElement('tr');
      row.dataset.index = index;
      if (index === currentSongIndex) {
        row.classList.add('active');
      }
      
      row.innerHTML = `
        <td>${index + 1}</td>
        <td class="song-title">${song.title}</td>
        <td>${song.artist}</td>
        <td>${song.album}</td>
        <td class="duration">${formatTime(song.duration)}</td>
        <td>
          <button class="like-button ${userLibrary.likedSongs.has(song.id) ? 'liked' : ''}">
            <span class="material-icons">${userLibrary.likedSongs.has(song.id) ? 'favorite' : 'favorite_border'}</span>
          </button>
        </td>
      `;
      
      row.addEventListener('click', () => playTrack(index));
      
      // Add like button event listener
      const likeBtn = row.querySelector('.like-button');
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLikeSong(song.id, likeBtn);
      });
      
      songListElement.appendChild(row);
    });
  }

  // Toggle like song
  function toggleLikeSong(songId, button) {
    if (userLibrary.likedSongs.has(songId)) {
      userLibrary.likedSongs.delete(songId);
      button.classList.remove('liked');
      button.querySelector('.material-icons').textContent = 'favorite_border';
    } else {
      userLibrary.likedSongs.add(songId);
      button.classList.add('liked', 'animate');
      button.querySelector('.material-icons').textContent = 'favorite';
      setTimeout(() => button.classList.remove('animate'), 400);
    }
    
    // Update player like button if this is the current song
    if (currentSongIndex >= 0 && songs[currentSongIndex].id === songId) {
      const isLiked = userLibrary.likedSongs.has(songId);
      likeButton.querySelector('.material-icons').textContent = isLiked ? 'favorite' : 'favorite_border';
      likeButton.classList.toggle('liked', isLiked);
    }
  }

  // Render queue
  function renderQueue() {
    queueListElement.innerHTML = '';
    
    if (currentSongIndex >= 0) {
      const queue = [...songs];
      queue.splice(currentSongIndex, 1);
      
      queue.forEach((song, index) => {
        const queueIndex = index >= currentSongIndex ? index + 1 : index;
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.dataset.index = queueIndex;
        li.addEventListener('click', () => playTrack(queueIndex));
        queueListElement.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Queue is empty';
      queueListElement.appendChild(li);
    }
  }

  // Play track
  function playTrack(index) {
    if (index < 0 || index >= songs.length) return;
    
    currentSongIndex = index;
    const song = songs[index];
    
    // Update audio element
    audioElement.src = song.audioUrl;
    audioElement.currentTime = 0;
    
    // Update player info
    updatePlayerInfo(song);
    
    // Play the audio
    audioElement.play();
    isPlaying = true;
    updatePlayPauseButton();
    
    // Highlight current song in list
    highlightCurrentSong();
    
    // Update queue
    renderQueue();
    
    // Add to recently played
    addToRecentlyPlayed(song.id);
  }

  // Update player info
  function updatePlayerInfo(song) {
    nowPlayingArtwork.src = song.artwork;
    nowPlayingArtwork.alt = `${song.album} cover`;
    nowPlayingTitle.textContent = song.title;
    nowPlayingArtist.textContent = song.artist;
    
    playerArtwork.src = song.artwork;
    playerArtwork.alt = `${song.album} cover`;
    playerSongTitle.textContent = song.title;
    playerSongArtist.textContent = song.artist;
    
    // Update like button
    const isLiked = userLibrary.likedSongs.has(song.id);
    likeButton.querySelector('.material-icons').textContent = isLiked ? 'favorite' : 'favorite_border';
    likeButton.classList.toggle('liked', isLiked);
    
    // Update lyrics
    lyricsContainer.textContent = song.lyrics || 'No lyrics available for this track.';
    
    // Update duration time
    durationTimeElement.textContent = formatTime(song.duration);
  }

  // Highlight current song
  function highlightCurrentSong() {
    const rows = document.querySelectorAll('#songList tr');
    rows.forEach(row => row.classList.remove('active'));
    
    if (currentSongIndex >= 0) {
      rows[currentSongIndex].classList.add('active');
    }
  }

  // Update play/pause button
  function updatePlayPauseButton() {
    const icon = playPauseButton.querySelector('.material-icons');
    icon.textContent = isPlaying ? 'pause' : 'play_arrow';
  }

  // Add to recently played
  function addToRecentlyPlayed(songId) {
    // Remove if already exists
    userLibrary.recentlyPlayed = userLibrary.recentlyPlayed.filter(id => id !== songId);
    
    // Add to beginning
    userLibrary.recentlyPlayed.unshift(songId);
    
    // Keep only the last 10
    if (userLibrary.recentlyPlayed.length > 10) {
      userLibrary.recentlyPlayed.pop();
    }
  }

  // Toggle play/pause
  function togglePlayPause() {
    if (isPlaying) {
      audioElement.pause();
    } else {
      if (currentSongIndex < 0) {
        playTrack(0);
      } else {
        audioElement.play();
      }
    }
    isPlaying = !isPlaying;
    updatePlayPauseButton();
  }

  // Play next track
  function playNextTrack() {
    if (isShuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * songs.length);
      } while (randomIndex === currentSongIndex && songs.length > 1);
      playTrack(randomIndex);
    } else {
      let nextIndex = currentSongIndex + 1;
      if (nextIndex >= songs.length) {
        if (isRepeat) {
          nextIndex = 0;
        } else {
          audioElement.pause();
          isPlaying = false;
          updatePlayPauseButton();
          return;
        }
      }
      playTrack(nextIndex);
    }
  }

  // Play previous track
  function playPrevTrack() {
    let prevIndex = currentSongIndex - 1;
    if (prevIndex < 0) {
      if (isRepeat) {
        prevIndex = songs.length - 1;
      } else {
        prevIndex = 0;
      }
    }
    playTrack(prevIndex);
  }

  // Toggle shuffle
  function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleButton.classList.toggle('active', isShuffle);
  }

  // Toggle repeat
  function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatButton.classList.toggle('active', isRepeat);
  }

  // Update progress bar
  function updateProgressBar() {
    if (audioElement.duration) {
      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      progressFill.style.width = `${progress}%`;
      currentTimeElement.textContent = formatTime(audioElement.currentTime);
    }
  }

  // Seek in audio
  function seekAudio(e) {
    const rect = progressBar.getBoundingClientRect();
    const seekPosition = (e.clientX - rect.left) / rect.width;
    audioElement.currentTime = seekPosition * audioElement.duration;
  }

  // Toggle mute
  function toggleMute() {
    if (audioElement.volume === 0) {
      audioElement.volume = volumeSlider.value / 100;
      volumeButton.querySelector('.material-icons').textContent = 'volume_up';
    } else {
      audioElement.volume = 0;
      volumeButton.querySelector('.material-icons').textContent = 'volume_off';
    }
  }

  // Update volume
  function updateVolume() {
    audioElement.volume = volumeSlider.value / 100;
    
    // Update volume icon
    const volumeIcon = volumeButton.querySelector('.material-icons');
    if (audioElement.volume === 0) {
      volumeIcon.textContent = 'volume_off';
    } else if (audioElement.volume < 0.5) {
      volumeIcon.textContent = 'volume_down';
    } else {
      volumeIcon.textContent = 'volume_up';
    }
  }

  // Sort songs
  function sortSongs(songsArray, method) {
    const sorted = [...songsArray];
    
    switch (method) {
      case 'az':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'za':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'newest':
        // Assuming newer songs have higher IDs for demo purposes
        sorted.sort((a, b) => parseInt(b.id.slice(1)) - parseInt(a.id.slice(1)));
        break;
      case 'oldest':
        sorted.sort((a, b) => parseInt(a.id.slice(1)) - parseInt(b.id.slice(1)));
        break;
    }
    
    return sorted;
  }

  // Event listeners
  playPauseButton.addEventListener('click', togglePlayPause);
  prevButton.addEventListener('click', playPrevTrack);
  nextButton.addEventListener('click', playNextTrack);
  shuffleButton.addEventListener('click', toggleShuffle);
  repeatButton.addEventListener('click', toggleRepeat);
  likeButton.addEventListener('click', () => {
    if (currentSongIndex >= 0) {
      const songId = songs[currentSongIndex].id;
      toggleLikeSong(songId, likeButton);
    }
  });

  progressBar.addEventListener('click', seekAudio);
  
  audioElement.addEventListener('timeupdate', updateProgressBar);
  audioElement.addEventListener('ended', playNextTrack);
  
  volumeButton.addEventListener('click', toggleMute);
  volumeSlider.addEventListener('input', updateVolume);
  
  sortSelect.addEventListener('change', () => {
    const sortedSongs = sortSongs(songs, sortSelect.value);
    renderSongList(sortedSongs);
  });

  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Initialize
  renderSongList(songs);
  renderQueue();
});

       