// Best-effort word list for the "Sensitive words filter" toggle: profanity,
// sexually explicit terms, hard-drug references, and graphic violence/
// self-harm terms to exclude from generated pairs when the filter is on.
// Not exhaustive — the English list was checked against what's actually in
// data/words-data.js; the other languages are a smaller starting curation
// of common, unambiguous terms and may need extending over time.
const SENSITIVE_WORDS = {
  en: [
    "ass", "asses", "asshole", "assholes", "bastard", "bastards", "bitch", "bitches",
    "cunt", "cunts", "dick", "dicks", "fuck", "fucked", "fucker", "fuckers", "fucking",
    "piss", "pissed", "pissing", "prick", "pricks", "pussy", "shit", "shithead",
    "shits", "shitting", "shitty", "slut", "sluts", "twat", "twats", "whore", "whores",
    "cum", "erotic", "eroticism", "horny", "incest", "masturbate", "masturbating",
    "masturbation", "molest", "molester", "naked", "nude", "orgasm", "orgy", "penis",
    "porn", "pornographic", "pornography", "prostitute", "prostitution", "sex",
    "sexed", "sexual", "sexy", "vagina",
    "cocaine", "heroin", "meth", "junkie", "stoner", "crackhead", "pothead",
    "murder", "murdered", "murderer", "rape", "raped", "rapist", "slaughter",
    "slaughterhouse", "suicidal", "suicide", "torture", "torturer",
    "goddamn", "bullshit", "motherfucker", "motherfuckers", "wanker", "wankers",
    "bollocks", "douche", "douchebag", "skank", "smut", "blowjob", "handjob",
    "threesome", "bdsm", "genitals", "testicle", "testicles", "clit",
    "nipple", "nipples", "boob", "boobs", "titty", "titties", "stripper", "strippers",
  ],
  nl: [
    "kut", "kutwijf", "klote", "hoer", "hoeren", "lul", "lullen", "klootzak",
    "klootzakken", "kanker", "tering", "godverdomme", "neuken", "neuk", "geneukt",
    "kloten", "slet", "sletten", "pedofiel", "verkrachting", "verkracht",
    "masturberen", "orgasme", "porno", "cocaïne", "heroïne",
    "klerezooi", "kutzooi", "reet", "stoned",
    "nikker", "nikkers", "flikker", "flikkers", "mongool", "mongolen",
    "kutmarokkaan", "kutmarokkanen",
  ],
  de: [
    "scheiße", "scheisse", "arsch", "arschloch", "hure", "huren", "fotze", "ficken",
    "gefickt", "wichser", "hurensohn", "schlampe", "nutte", "pisser", "votze",
    "pädophil", "vergewaltigung", "masturbieren", "orgasmus", "pornografie", "kokain",
    "scheißkerl", "wichsen", "titten", "muschi", "schwanzlutscher",
  ],
  fr: [
    "merde", "putain", "connard", "connasse", "salope", "pute", "enculé", "enculée",
    "couille", "couilles", "cul", "baise", "violeur", "viol", "pédophile", "masturber",
    "orgasme", "pornographie", "cocaïne",
    "bordel", "branler", "bâtard", "nichons", "chatte",
  ],
  es: [
    "mierda", "puta", "puto", "cabrón", "cabrona", "gilipollas", "joder", "coño",
    "pendejo", "verga", "polla", "chingar", "zorra", "violador", "violación",
    "pedófilo", "masturbar", "orgasmo", "pornografía", "cocaína",
    "cojones", "follar", "tetas", "bastardo", "hijueputa",
  ],
  it: [
    "merda", "cazzo", "stronzo", "stronza", "puttana", "troia", "vaffanculo", "fica",
    "minchia", "coglione", "coglioni", "scopare", "stupratore", "stupro", "pedofilo",
    "masturbare", "orgasmo", "pornografia", "cocaina",
    "figa", "tette", "bastardo", "sborra", "cazzone",
  ],
};
