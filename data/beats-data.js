// Royalty-free instrumental beats bundled with the app for the "Local Beats"
// player (see updateLocalPlayer* in js/app.js). Each file is trimmed to a
// bar-aligned loop region (tempo-detected, picked by cross-correlating the
// seam against candidate loop lengths) well before any outro fade, with the
// loop point crossfaded against the audio that naturally follows it. The
// player decodes these once into a Web Audio AudioBuffer and loops that
// buffer directly rather than using <audio loop> — MP3's block-based
// decoding reintroduces a small discontinuity at the file boundary on every
// repeat of a looped <audio> element, so looping the decoded buffer instead
// is what actually makes the repeat sample-accurate.
const LOCAL_BEATS = [
  { title: "C.B.P.D", genre: "Trap", file: "beats/cbpd-trap.mp3" },
  { title: "Praise the Lord", genre: "Trap", file: "beats/praise-the-lord-trap.mp3" },
  { title: "G Eazy NBA Type", genre: "Trap", file: "beats/g-eazy-nba-type-trap.mp3" },
  { title: "Waka Floka Type", genre: "Hard Trap", file: "beats/waka-floka-type-trap.mp3" },
  { title: "OVO", genre: "Dark Trap", file: "beats/ovo-dark-trap.mp3" },
  { title: "Head Bang", genre: "Aggressive", file: "beats/head-bang-trap.mp3" },
  { title: "Party", genre: "Upbeat / Club", file: "beats/party-trap.mp3" },
  { title: "Like a Loop Machine", genre: "Hip-Hop", file: "beats/like-a-loop-machine-hiphop.mp3" },
  { title: "Protesting Robot", genre: "Grime", file: "beats/protesting-robot-grime.mp3" },
  { title: "Sleepy Cat", genre: "Lo-Fi", file: "beats/sleepy-cat-lofi.mp3" },
];
