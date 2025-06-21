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
      lyrics: ""
    },
    {
      id: 's2',
      title: 'Take Notes',
      artist: 'Sidhu Moosewala',
      album: 'Moose Print',
      duration: 216,
      artwork: 'https://c.saavncdn.com/785/Moose-Print-Punjabi-2025-20250617155138-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/785/beb3e4afda0d02ea47c127ccd16f1290_160.mp4',
      lyrics: ""
    },
    {
      id: 's3',
      title: 'Excuses',
      artist: 'AP Dhillon, Gurinder Gill, Intense',
      album: 'Excuses',
      duration: 177,
      artwork: 'https://c.saavncdn.com/890/Excuses-English-2021-20210930112054-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/890/a18aabc4681dc6c334d5d29b67e84a0f_160.mp4',
      lyrics: ""
    },
    {
      id: 's4',
      title: 'Majhail',
      artist: 'AP Dhillon, Gurinder Gill',
      album: 'Majhail',
      duration: 175,
      artwork: 'https://c.saavncdn.com/648/Majhail-English-2020-20200627205840-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/648/af3596462f299185b71032500b843377_160.mp4',
      lyrics: ""
    },
    {
      id: 's5',
      title: 'Rail',
      artist: 'Sumit Parta',
      album: 'singe-track',
      duration: 126,
      artwork: 'https://c.saavncdn.com/734/Rail-Haryanvi-2025-20250513163335-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/734/91e30d07914ec39080d11d6fd249f027_160.mp4',
      lyrics: ""
    },
    {
      id: 's6',
      title: '295',
      artist: 'Sidhu Moosewala',
      album: 'Moosetape',
      duration: 270,
      artwork: 'https://c.saavncdn.com/609/Moosetape-Punjabi-2021-20220427043323-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/609/c90b3b6aa1baeb5d763d475c5d50376c_160.mp4',
      lyrics: ""
    },
    {
      id: 's7',
      title: 'So High',
      artist: 'Sidhu Moosewala',
      album: 'PBX 1',
      duration: 233,
      artwork: 'https://c.saavncdn.com/544/So-High-Punjabi-2017-20220811172517-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/544/fa128b5b00df068d78bc50bf19bf137f_160.mp4',
      lyrics: ""
    },
    {
      id: 's8',
      title: 'The Last Ride',
      artist: 'Sidhu Moosewala',
      album: 'Moosetape',
      duration: 256,
      artwork: 'https://c.saavncdn.com/582/The-Last-Ride-Punjabi-2022-20220517061646-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/582/66fbc0a08cf9051e4faad09c541e49ce_160.mp4',
      lyrics: ""
    },
    {
      id: 's9',
      title: 'Supreme',
      artist: 'Shubh',
      album: 'Single-track',
      duration: 178,
      artwork: 'https://c.saavncdn.com/158/Supreme-Punjabi-2025-20250415072807-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/158/41ac188e91d72922be080dd7ca0f1c6c_160.mp4',
      lyrics: ""
    },
    {
      id: 's10',
      title: 'Dior',
      artist: 'Shubh',
      album: 'Still Rollin',
      duration: 149,
      artwork: 'https://c.saavncdn.com/704/Still-Rollin-Punjabi-2023-20230512121542-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/704/e6e17e95adcde7038c33cf704b1ab611_160.mp4',
      lyrics: ""
    },
    {
      id: 's11',
      title: 'Young G.O.A.T',
      artist: 'Cheema y',
      album: 'Young G.O.A.T',
      duration: 225,
      artwork: 'https://c.saavncdn.com/237/Young-G-O-A-T-Punjabi-2025-20250225150727-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/237/8b9556d16f2b266fdd262d627c009251_160.mp4',
      lyrics: ""
    },
    {
      id: 's12',
      title: 'Russian Bandana',
      artist: 'Dhanda Nyoliwala',
      album: 'Single-track',
      duration: 197,
      artwork: 'https://c.saavncdn.com/404/Russian-Bandana-Hindi-2024-20240910053147-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/404/f3bf126e1401649443598e6fa575cb7c_160.mp4',
      lyrics: ""
    },
    {
      id: 's13',
      title: 'Knife Brows',
      artist: 'Dhanda Nyoliwala',
      album: 'Not by Chance',
      duration: 224,
      artwork: 'https://c.saavncdn.com/511/DNW-Vol-1-Hindi-2024-20241017154112-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/511/e7d19d1cd37e58cb9f6bfe08e66e1973_160.mp4',
      lyrics: ""
    },
    {
      id: 's14',
      title: 'Unstoppable',
      artist: 'Dhanda Nyoliwala',
      album: 'single-track',
      duration: 199,
      artwork: 'https://c.saavncdn.com/685/Unstoppable-Hindi-2024-20240321161042-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/685/10ab095871edf5db7de13af2644b23cd_160.mp4',
      lyrics: ""
    },
    {
      id: 's15',
      title: 'Old Money',
      artist: 'AP Dhillon',
      album: 'single-track',
      duration: 127,
      artwork: 'https://c.saavncdn.com/939/Old-Money-Punjabi-2024-20240809063655-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/939/a749b617dec1c3c77e61b4a1083b2436_160.mp4',
      lyrics: ""
    },
    {
      id: 's16',
      title: 'Drippy',
      artist: 'Sidhu Moosewala, AR Paisley',
      album: 'single-track',
      duration: 195,
      artwork: 'https://c.saavncdn.com/457/Drippy-Punjabi-2024-20240202095601-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/457/742fb2c3e599534656d0392c54250827_160.mp4',
      lyrics: ""
    },
    {
      id: 's17',
      title: 'The Jatts',
      artist: 'Varinder Brar',
      album: 'Single-track',
      duration: 161,
      artwork: 'https://c.saavncdn.com/516/The-Jatts-Punjabi-2024-20240115164201-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/516/c4af8905eba82241fb070b71b21be493_160.mp4',
      lyrics: ""
    },
    {
      id: 's18',
      title: '52 Bars',
      artist: 'Karan Aujla',
      album: 'Four You',
      duration: 237,
      artwork: 'https://c.saavncdn.com/552/Four-You-Punjabi-2023-20230130150304-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/552/b8f53cb2202fa88a770aba7b67e84535_160.mp4',
      lyrics: ""
    },
    {
      id: 's19',
      title: 'Roots',
      artist: 'Bintu Pabra',
      album: 'Single-track',
      duration: 263,
      artwork: 'https://c.saavncdn.com/925/Roots-Haryanvi-2022-20240321064835-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/925/97dc28640c4c0659f994384ca15bbaa9_160.mp4',
      lyrics: ""
    },
    {
      id: 's20',
      title: 'Arbi Ghode',
      artist: 'Masoom Sharma',
      album: 'Single-track',
      duration: 200,
      artwork: 'https://c.saavncdn.com/508/Arbi-Ghode-Unknown-2024-20240616133051-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/508/387d8c8c9944736e17f7d36fb5891df2_160.mp4',
      lyrics: ""
    },
    {
      id: 's21',
      title: 'Ramayan ka Saar',
      artist: 'Masoom Sharma',
      album: 'single-track',
      duration: 187,
      artwork: 'https://c.saavncdn.com/931/Ramayan-Ka-Saar-Haryanvi-2025-20250521141230-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/931/dc85bc9570ef9035de6f4c65d2480428_160.mp4',
      lyrics: ""
    },
    {
      id: 's22',
      title: 'Never Fold',
      artist: 'Sidhu Moosewala, Sunny Malton',
      album: 'No Name',
      duration: 183,
      artwork: 'https://c.saavncdn.com/448/No-Name-Punjabi-2022-20220425032043-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/448/ebf5f8053c69b5c5ee27905f31fc9fbf_160.mp4',
      lyrics: ""
    },
    {
      id: 's23',
      title: 'Celebrity killer',
      artist: 'Sidhu Moosewala, Tion Wayne',
      album: 'Moosetape',
      duration: 203,
      artwork: 'https://c.saavncdn.com/609/Moosetape-Punjabi-2021-20220427043323-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/609/58c7d32635c6e47e221b908515018df6_160.mp4',
      lyrics: ""
    },
    {
      id: 's24',
      title: 'Courtside',
      artist: 'Karan Aujla',
      album: 'single-track',
      duration: 168,
      artwork: 'https://c.saavncdn.com/907/Courtside-Punjabi-2025-20250506120316-500x500.jpg',
      audioUrl: 'https://aac.saavncdn.com/907/7de4a84c4db2b9be2eed8be41b3ab49b_160.mp4',
      lyrics: ""
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


  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    mobileMenuToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== mobileMenuToggle) {
      mobileMenu.classList.remove('show');
      mobileMenuToggle.classList.remove('active');
    }
  });

  // Helper functions
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  let currentPlaylist = [...songs]; // Use this for all playback and rendering

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
        <td class="song-artwork-cell">
          <img src="${song.artwork}" alt="${song.title} artwork" class="song-artwork-img" />
        </td>
        <td style="width:100%;">
          <div class="mobile-song-meta">
            <span class="song-title">${song.title}</span>
            <span class="mobile-song-artist">${song.artist}</span>
            <span class="mobile-song-album">${song.album}</span>
          </div>
        </td>
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
      const queue = [...currentPlaylist];
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
    if (index < 0 || index >= currentPlaylist.length) return;
    
    currentSongIndex = index;
    const song = currentPlaylist[index];
    
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

    // Update lyrics (support \n for new lines)
    lyricsContainer.innerHTML = (song.lyrics && song.lyrics.trim())
      ? song.lyrics.replace(/\n/g, '\n')
      : 'No lyrics available for this track.';

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
        randomIndex = Math.floor(Math.random() * currentPlaylist.length);
      } while (randomIndex === currentSongIndex && currentPlaylist.length > 1);
      playTrack(randomIndex);
    } else {
      let nextIndex = currentSongIndex + 1;
      if (nextIndex >= currentPlaylist.length) {
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
        prevIndex = currentPlaylist.length - 1;
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
  // search songs
  function searchSongs(query) {
    const lowerQuery = query.toLowerCase();
    return songs.filter(song => 
      song.title.toLowerCase().includes(lowerQuery) ||
      song.artist.toLowerCase().includes(lowerQuery) ||
      song.album.toLowerCase().includes(lowerQuery)
    );
  }
  // Search functionality
  const searchInput = document.querySelector('.searchInput'); // <-- changed from getElementById
searchInput.addEventListener('input', function() {
  const query = searchInput.value.trim();
  if (query) {
    currentPlaylist = searchSongs(query);
  } else {
    currentPlaylist = [...songs];
  }
  currentSongIndex = -1;
  renderSongList(currentPlaylist);
  renderQueue();
});



  // Event listeners
  playPauseButton.addEventListener('click', togglePlayPause);
  prevButton.addEventListener('click', playPrevTrack);
  nextButton.addEventListener('click', playNextTrack);
  shuffleButton.addEventListener('click', toggleShuffle);
  repeatButton.addEventListener('click', toggleRepeat);
  likeButton.addEventListener('click', () => {
    if (currentSongIndex >= 0) {
      const songId = currentPlaylist[currentSongIndex].id;
      toggleLikeSong(songId, likeButton);
    }
  });
  

  progressBar.addEventListener('click', seekAudio);
  
  audioElement.addEventListener('timeupdate', updateProgressBar);
  audioElement.addEventListener('ended', playNextTrack);
  
  volumeButton.addEventListener('click', toggleMute);
  volumeSlider.addEventListener('input', updateVolume);
  
  sortSelect.addEventListener('change', () => {
    currentPlaylist = sortSongs([...songs], sortSelect.value);
    currentSongIndex = -1;
    renderSongList(currentPlaylist);
    renderQueue();
  });

  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Initialize
  currentPlaylist = [...songs];
  renderSongList(currentPlaylist);
  renderQueue();
});

