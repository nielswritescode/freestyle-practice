// word -> part-of-speech tags ("noun"|"verb"|"adjective"|"adverb"),
// sourced from Datamuse's md=p metadata (itself derived from WordNet) via
// scripts/backfill-pos-tags.py. English only -- Datamuse's index and POS
// metadata don't cover the other built-in languages. Most words carry more
// than one tag (most words have more than one sense/usage); tags are kept
// in Datamuse's order, empirically most-common-sense first. Words with no
// entry here got no confident tag back and are omitted rather than guessed.
const POS_DATA = {
  "aardvark": [
    "noun"
  ],
  "aback": [
    "adverb",
    "noun"
  ],
  "abalone": [
    "noun"
  ],
  "abandon": [
    "verb",
    "noun"
  ],
  "abandoned": [
    "adjective"
  ],
  "abash": [
    "verb"
  ],
  "abattoir": [
    "noun"
  ],
  "abided": [
    "verb"
  ],
  "abides": [
    "verb"
  ],
  "abilities": [
    "noun"
  ],
  "ability": [
    "noun"
  ],
  "ablaze": [
    "adverb",
    "adjective"
  ],
  "abloom": [
    "adjective",
    "adverb"
  ],
  "ablution": [
    "noun"
  ],
  "abode": [
    "noun",
    "verb"
  ],
  "aborts": [
    "verb",
    "noun"
  ],
  "abound": [
    "verb"
  ],
  "abounds": [
    "verb"
  ],
  "about": [
    "adverb",
    "adjective",
    "verb"
  ],
  "above": [
    "adverb",
    "adjective",
    "noun"
  ],
  "abridge": [
    "verb",
    "noun"
  ],
  "abs": [
    "noun",
    "adjective"
  ],
  "abscess": [
    "noun",
    "verb"
  ],
  "abscond": [
    "verb"
  ],
  "absence": [
    "noun"
  ],
  "absent": [
    "adjective",
    "noun",
    "verb"
  ],
  "absolute": [
    "adjective",
    "noun"
  ],
  "absolution": [
    "noun"
  ],
  "absolved": [
    "adjective"
  ],
  "abstract": [
    "adjective",
    "noun",
    "verb"
  ],
  "abstraction": [
    "noun"
  ],
  "abstruse": [
    "adjective"
  ],
  "absurd": [
    "adjective",
    "noun"
  ],
  "abused": [
    "adjective"
  ],
  "abusing": [
    "verb",
    "adjective"
  ],
  "abut": [
    "verb"
  ],
  "abuzz": [
    "adjective"
  ],
  "abyssinia": [
    "noun",
    "adjective"
  ],
  "abyssinian": [
    "adjective",
    "noun"
  ],
  "academe": [
    "noun"
  ],
  "academic": [
    "adjective",
    "noun"
  ],
  "academy": [
    "noun"
  ],
  "accede": [
    "verb"
  ],
  "accedes": [
    "verb"
  ],
  "accelerate": [
    "verb",
    "adjective"
  ],
  "accelerating": [
    "noun"
  ],
  "acceleration": [
    "noun"
  ],
  "accelerator": [
    "noun"
  ],
  "accent": [
    "noun",
    "verb"
  ],
  "accept": [
    "verb",
    "noun",
    "adjective"
  ],
  "accepted": [
    "adjective"
  ],
  "accessed": [
    "verb"
  ],
  "accessibility": [
    "noun"
  ],
  "accession": [
    "noun",
    "verb"
  ],
  "acclaim": [
    "noun",
    "verb"
  ],
  "accommodate": [
    "verb",
    "adjective"
  ],
  "accomplish": [
    "verb"
  ],
  "accord": [
    "noun",
    "verb"
  ],
  "account": [
    "noun",
    "verb"
  ],
  "accountant": [
    "noun",
    "adjective"
  ],
  "accra": [
    "noun"
  ],
  "accrual": [
    "noun"
  ],
  "accruing": [
    "noun"
  ],
  "accumulate": [
    "verb",
    "adjective"
  ],
  "accuse": [
    "verb",
    "noun"
  ],
  "accused": [
    "noun",
    "adjective"
  ],
  "accusing": [
    "noun",
    "adjective"
  ],
  "acetic": [
    "adjective"
  ],
  "achaean": [
    "adjective",
    "noun"
  ],
  "ache": [
    "noun",
    "verb"
  ],
  "aches": [
    "noun",
    "verb"
  ],
  "achieve": [
    "verb"
  ],
  "achieving": [
    "noun"
  ],
  "aching": [
    "adjective",
    "noun"
  ],
  "acknowledge": [
    "verb"
  ],
  "acquiescing": [
    "verb"
  ],
  "acquire": [
    "verb"
  ],
  "acquisition": [
    "noun"
  ],
  "acquit": [
    "verb"
  ],
  "acquits": [
    "verb"
  ],
  "acquitting": [
    "verb"
  ],
  "acrimony": [
    "noun"
  ],
  "acrobat": [
    "noun",
    "verb"
  ],
  "acrobatic": [
    "adjective"
  ],
  "across": [
    "adverb",
    "noun"
  ],
  "acting": [
    "noun",
    "adjective"
  ],
  "activism": [
    "noun"
  ],
  "activity": [
    "noun"
  ],
  "actor": [
    "noun"
  ],
  "actual": [
    "adjective",
    "noun"
  ],
  "acumen": [
    "noun"
  ],
  "acute": [
    "adjective",
    "noun",
    "verb"
  ],
  "acutely": [
    "adverb"
  ],
  "ad": [
    "noun",
    "adverb",
    "adjective"
  ],
  "adapt": [
    "verb",
    "adjective"
  ],
  "add": [
    "verb",
    "noun"
  ],
  "addendum": [
    "noun"
  ],
  "addition": [
    "noun"
  ],
  "additional": [
    "adjective",
    "noun"
  ],
  "address": [
    "noun",
    "verb"
  ],
  "addressed": [
    "adjective"
  ],
  "adenoid": [
    "adjective",
    "noun"
  ],
  "adhere": [
    "verb"
  ],
  "adhered": [
    "verb"
  ],
  "adheres": [
    "verb"
  ],
  "adhering": [
    "verb"
  ],
  "adipose": [
    "noun",
    "adjective"
  ],
  "adjective": [
    "noun",
    "adjective",
    "verb"
  ],
  "adjoin": [
    "verb"
  ],
  "adjourn": [
    "verb"
  ],
  "adjourned": [
    "adjective"
  ],
  "adjudge": [
    "verb"
  ],
  "adjust": [
    "verb"
  ],
  "administer": [
    "verb"
  ],
  "administration": [
    "noun"
  ],
  "administrator": [
    "noun"
  ],
  "admirable": [
    "adjective"
  ],
  "admission": [
    "noun"
  ],
  "admit": [
    "verb"
  ],
  "admits": [
    "verb"
  ],
  "admitting": [
    "noun"
  ],
  "adopt": [
    "verb",
    "noun"
  ],
  "adore": [
    "verb"
  ],
  "adored": [
    "adjective"
  ],
  "adorn": [
    "verb",
    "noun",
    "adjective"
  ],
  "adriatic": [
    "noun",
    "adjective"
  ],
  "adult": [
    "noun",
    "adjective",
    "verb"
  ],
  "adulthood": [
    "noun"
  ],
  "advancer": [
    "noun"
  ],
  "advantage": [
    "noun",
    "verb"
  ],
  "advantageous": [
    "adjective"
  ],
  "advent": [
    "noun",
    "verb"
  ],
  "adventure": [
    "noun",
    "verb"
  ],
  "adventurer": [
    "noun"
  ],
  "adversary": [
    "noun"
  ],
  "advertiser": [
    "noun"
  ],
  "advisability": [
    "noun"
  ],
  "advise": [
    "verb",
    "noun"
  ],
  "advocate": [
    "noun",
    "verb"
  ],
  "aerodrome": [
    "noun"
  ],
  "aerosol": [
    "noun",
    "verb"
  ],
  "aerospace": [
    "noun",
    "adjective"
  ],
  "aesop": [
    "noun"
  ],
  "aesthetic": [
    "adjective",
    "noun"
  ],
  "afar": [
    "adverb",
    "noun"
  ],
  "affair": [
    "noun"
  ],
  "affect": [
    "verb",
    "noun"
  ],
  "affective": [
    "adjective"
  ],
  "afflict": [
    "verb"
  ],
  "affordable": [
    "adjective"
  ],
  "affront": [
    "noun",
    "verb"
  ],
  "afghan": [
    "adjective",
    "noun"
  ],
  "afghanistan": [
    "noun"
  ],
  "afield": [
    "adverb"
  ],
  "afire": [
    "adverb",
    "adjective"
  ],
  "aflame": [
    "adjective"
  ],
  "afloat": [
    "adverb",
    "adjective"
  ],
  "aflutter": [
    "adjective"
  ],
  "afrikaans": [
    "noun",
    "adjective"
  ],
  "after": [
    "adverb",
    "adjective",
    "noun"
  ],
  "afternoon": [
    "noun",
    "adverb"
  ],
  "aftershock": [
    "noun"
  ],
  "aftershocks": [
    "noun"
  ],
  "aftertaste": [
    "noun"
  ],
  "afterthought": [
    "noun",
    "verb"
  ],
  "again": [
    "adverb"
  ],
  "agamemnon": [
    "noun"
  ],
  "agape": [
    "noun",
    "adjective",
    "adverb"
  ],
  "agency": [
    "noun"
  ],
  "aggrieve": [
    "verb"
  ],
  "aghast": [
    "adjective"
  ],
  "agleam": [
    "adjective"
  ],
  "agog": [
    "adverb",
    "adjective"
  ],
  "agonize": [
    "verb"
  ],
  "agony": [
    "noun"
  ],
  "agree": [
    "verb"
  ],
  "agreed": [
    "adjective"
  ],
  "agreement": [
    "noun"
  ],
  "agrees": [
    "verb"
  ],
  "aground": [
    "adverb",
    "adjective"
  ],
  "ahab": [
    "noun"
  ],
  "aide": [
    "noun"
  ],
  "ailerons": [
    "noun"
  ],
  "airborne": [
    "adjective",
    "noun"
  ],
  "aired": [
    "adjective"
  ],
  "airfoil": [
    "noun"
  ],
  "airframe": [
    "noun"
  ],
  "airing": [
    "noun"
  ],
  "airlift": [
    "noun",
    "verb"
  ],
  "airline": [
    "noun"
  ],
  "airliner": [
    "noun"
  ],
  "airmen": [
    "noun"
  ],
  "airplane": [
    "noun",
    "verb"
  ],
  "airport": [
    "noun"
  ],
  "airship": [
    "noun",
    "verb"
  ],
  "airships": [
    "noun"
  ],
  "airspace": [
    "noun"
  ],
  "airspeed": [
    "noun"
  ],
  "airstrip": [
    "noun"
  ],
  "airstrips": [
    "noun"
  ],
  "airways": [
    "noun"
  ],
  "aisles": [
    "noun"
  ],
  "aix": [
    "noun"
  ],
  "ajar": [
    "adverb",
    "adjective",
    "verb",
    "noun"
  ],
  "ajax": [
    "noun"
  ],
  "al": [
    "noun"
  ],
  "alabaman": [
    "noun",
    "adjective"
  ],
  "alabaster": [
    "noun",
    "adjective"
  ],
  "alarm": [
    "noun",
    "verb"
  ],
  "albatross": [
    "noun"
  ],
  "album": [
    "noun"
  ],
  "albumin": [
    "noun"
  ],
  "alcoholism": [
    "noun"
  ],
  "ale": [
    "noun"
  ],
  "alehouse": [
    "noun"
  ],
  "alert": [
    "adjective",
    "noun",
    "verb"
  ],
  "aleutian": [
    "noun",
    "adjective"
  ],
  "alewife": [
    "noun"
  ],
  "algiers": [
    "noun"
  ],
  "alibi": [
    "noun",
    "verb"
  ],
  "alien": [
    "adjective",
    "noun",
    "verb"
  ],
  "align": [
    "verb"
  ],
  "aligned": [
    "adjective"
  ],
  "alive": [
    "adjective"
  ],
  "aliyah": [
    "noun",
    "verb"
  ],
  "alkaloid": [
    "noun",
    "adjective"
  ],
  "allaying": [
    "noun"
  ],
  "allegorical": [
    "adjective"
  ],
  "allegory": [
    "noun",
    "verb"
  ],
  "alleyway": [
    "noun"
  ],
  "alliance": [
    "noun",
    "verb"
  ],
  "allied": [
    "adjective"
  ],
  "alligator": [
    "noun",
    "verb"
  ],
  "allocate": [
    "verb",
    "adjective",
    "noun"
  ],
  "allograph": [
    "noun"
  ],
  "allot": [
    "verb",
    "adverb",
    "noun"
  ],
  "allotrope": [
    "noun"
  ],
  "allow": [
    "verb"
  ],
  "allowed": [
    "adjective"
  ],
  "alloy": [
    "noun",
    "verb"
  ],
  "alloys": [
    "noun"
  ],
  "allspice": [
    "noun"
  ],
  "allure": [
    "noun",
    "verb"
  ],
  "alluring": [
    "adjective",
    "noun"
  ],
  "allusion": [
    "noun"
  ],
  "almanac": [
    "noun"
  ],
  "almond": [
    "noun",
    "adjective"
  ],
  "along": [
    "adverb"
  ],
  "alongside": [
    "adverb"
  ],
  "aloud": [
    "adverb",
    "adjective"
  ],
  "alphabet": [
    "noun",
    "verb"
  ],
  "alphabetic": [
    "adjective",
    "noun"
  ],
  "alphabetical": [
    "adjective",
    "noun"
  ],
  "alphanumeric": [
    "adjective",
    "noun"
  ],
  "alpine": [
    "adjective",
    "noun"
  ],
  "already": [
    "adverb"
  ],
  "altarpiece": [
    "noun"
  ],
  "alternative": [
    "adjective",
    "noun"
  ],
  "alternator": [
    "noun"
  ],
  "altimeter": [
    "noun"
  ],
  "altitude": [
    "noun"
  ],
  "altruism": [
    "noun"
  ],
  "altruistic": [
    "adjective"
  ],
  "always": [
    "adverb"
  ],
  "amass": [
    "verb",
    "noun"
  ],
  "amassed": [
    "adjective"
  ],
  "amaze": [
    "verb",
    "noun"
  ],
  "amazon": [
    "noun",
    "verb"
  ],
  "ambassadorial": [
    "adjective"
  ],
  "amber": [
    "noun",
    "adjective",
    "verb"
  ],
  "ambience": [
    "noun"
  ],
  "ambiguity": [
    "noun"
  ],
  "ambiguous": [
    "adjective"
  ],
  "ambition": [
    "noun",
    "verb"
  ],
  "ambitious": [
    "adjective"
  ],
  "ambivalent": [
    "adjective"
  ],
  "amble": [
    "verb",
    "noun"
  ],
  "ambulance": [
    "noun",
    "verb"
  ],
  "ambulatory": [
    "adjective",
    "noun"
  ],
  "amends": [
    "noun"
  ],
  "americana": [
    "noun"
  ],
  "americans": [
    "adjective",
    "noun"
  ],
  "amex": [
    "noun"
  ],
  "amides": [
    "noun"
  ],
  "amigos": [
    "noun"
  ],
  "amiss": [
    "adverb",
    "adjective",
    "noun"
  ],
  "ammeter": [
    "noun"
  ],
  "ammonia": [
    "noun"
  ],
  "ammunition": [
    "noun",
    "verb"
  ],
  "amok": [
    "adverb",
    "noun",
    "verb"
  ],
  "ampere": [
    "noun"
  ],
  "amperes": [
    "noun"
  ],
  "amphetamines": [
    "noun"
  ],
  "amphibian": [
    "adjective",
    "noun"
  ],
  "ample": [
    "adjective"
  ],
  "amplifier": [
    "noun"
  ],
  "amplitude": [
    "noun"
  ],
  "amuck": [
    "adverb",
    "noun"
  ],
  "amuse": [
    "verb"
  ],
  "amused": [
    "adjective"
  ],
  "amusing": [
    "adjective"
  ],
  "amyloid": [
    "noun",
    "adjective"
  ],
  "anachronistic": [
    "adjective"
  ],
  "anaerobe": [
    "noun"
  ],
  "anaesthetic": [
    "noun",
    "adjective"
  ],
  "anagram": [
    "noun",
    "verb"
  ],
  "anaheim": [
    "noun"
  ],
  "analog": [
    "noun",
    "adjective"
  ],
  "analogue": [
    "noun",
    "adjective"
  ],
  "analytic": [
    "adjective"
  ],
  "analyticity": [
    "noun"
  ],
  "analyze": [
    "verb"
  ],
  "analyzer": [
    "noun"
  ],
  "anaplastic": [
    "adjective"
  ],
  "anarchist": [
    "noun",
    "adjective"
  ],
  "anatomy": [
    "noun"
  ],
  "ancestor": [
    "noun",
    "verb"
  ],
  "anchor": [
    "noun",
    "verb"
  ],
  "anchorman": [
    "noun"
  ],
  "anchormen": [
    "noun"
  ],
  "ancient": [
    "adjective",
    "noun"
  ],
  "andalusian": [
    "adjective",
    "noun"
  ],
  "android": [
    "noun",
    "adjective"
  ],
  "anecdote": [
    "noun",
    "verb"
  ],
  "anesthesiology": [
    "noun"
  ],
  "anesthetic": [
    "noun",
    "adjective"
  ],
  "aneurysm": [
    "noun"
  ],
  "angel": [
    "noun",
    "verb"
  ],
  "angelfish": [
    "noun"
  ],
  "anger": [
    "noun",
    "verb"
  ],
  "angiogram": [
    "noun"
  ],
  "anglophile": [
    "noun",
    "adjective"
  ],
  "angry": [
    "adjective",
    "verb"
  ],
  "anguilla": [
    "noun"
  ],
  "animal": [
    "noun",
    "adjective"
  ],
  "animals": [
    "noun",
    "adjective"
  ],
  "aniseed": [
    "noun"
  ],
  "ankle": [
    "noun",
    "verb"
  ],
  "anklet": [
    "noun"
  ],
  "anneal": [
    "noun",
    "verb"
  ],
  "annealing": [
    "noun"
  ],
  "annex": [
    "noun",
    "verb"
  ],
  "anniversary": [
    "noun"
  ],
  "announce": [
    "verb"
  ],
  "announcer": [
    "noun"
  ],
  "annoy": [
    "verb",
    "noun"
  ],
  "anonymous": [
    "adjective",
    "noun"
  ],
  "answer": [
    "noun",
    "verb"
  ],
  "answers": [
    "noun",
    "verb"
  ],
  "ant": [
    "noun",
    "verb"
  ],
  "antagonist": [
    "noun"
  ],
  "antagonistic": [
    "adjective"
  ],
  "anteater": [
    "noun"
  ],
  "antelope": [
    "noun"
  ],
  "antennae": [
    "noun"
  ],
  "anterior": [
    "adjective"
  ],
  "anthem": [
    "noun",
    "verb"
  ],
  "anthill": [
    "noun"
  ],
  "anthologist": [
    "noun"
  ],
  "anthology": [
    "noun"
  ],
  "anthropologist": [
    "noun"
  ],
  "anthropology": [
    "noun"
  ],
  "antiaircraft": [
    "adjective",
    "noun"
  ],
  "antibody": [
    "noun"
  ],
  "anticancer": [
    "adjective"
  ],
  "anticipate": [
    "verb"
  ],
  "anticipatory": [
    "adjective"
  ],
  "antimony": [
    "noun"
  ],
  "antiphons": [
    "noun"
  ],
  "antique": [
    "adjective",
    "noun",
    "verb"
  ],
  "antiques": [
    "noun",
    "adverb"
  ],
  "antitank": [
    "adjective"
  ],
  "antitrust": [
    "adjective"
  ],
  "anxiety": [
    "noun"
  ],
  "anyplace": [
    "adverb"
  ],
  "anyways": [
    "adverb"
  ],
  "anywhere": [
    "adverb",
    "noun"
  ],
  "apace": [
    "adverb"
  ],
  "apart": [
    "adverb",
    "adjective"
  ],
  "apartment": [
    "noun"
  ],
  "apathetic": [
    "adjective"
  ],
  "apelike": [
    "adjective"
  ],
  "aperitif": [
    "noun"
  ],
  "apex": [
    "noun"
  ],
  "apiece": [
    "adverb"
  ],
  "aplomb": [
    "noun"
  ],
  "apocalypse": [
    "noun",
    "verb"
  ],
  "apocalyptic": [
    "adjective",
    "noun"
  ],
  "apologetic": [
    "adjective",
    "noun"
  ],
  "apologies": [
    "noun"
  ],
  "apologise": [
    "verb"
  ],
  "apologize": [
    "verb"
  ],
  "apology": [
    "noun"
  ],
  "apotheosis": [
    "noun"
  ],
  "appalled": [
    "adjective"
  ],
  "appalling": [
    "adjective"
  ],
  "appalls": [
    "verb"
  ],
  "apparently": [
    "adverb"
  ],
  "appeal": [
    "noun",
    "verb"
  ],
  "appealed": [
    "verb"
  ],
  "appeals": [
    "noun",
    "verb"
  ],
  "appear": [
    "verb"
  ],
  "appeared": [
    "verb"
  ],
  "appears": [
    "verb"
  ],
  "appease": [
    "verb"
  ],
  "append": [
    "verb",
    "noun"
  ],
  "appetite": [
    "noun"
  ],
  "appetizer": [
    "noun"
  ],
  "applaud": [
    "verb",
    "noun"
  ],
  "apple": [
    "noun",
    "verb"
  ],
  "applesauce": [
    "noun"
  ],
  "application": [
    "noun"
  ],
  "applied": [
    "adjective"
  ],
  "applies": [
    "verb"
  ],
  "apply": [
    "verb",
    "adjective"
  ],
  "applying": [
    "noun"
  ],
  "appraising": [
    "noun"
  ],
  "appreciate": [
    "verb"
  ],
  "apprehend": [
    "verb"
  ],
  "apprehension": [
    "noun"
  ],
  "apprehensive": [
    "adjective",
    "noun"
  ],
  "apprentice": [
    "noun",
    "verb"
  ],
  "apprenticeship": [
    "noun"
  ],
  "apprenticeships": [
    "noun"
  ],
  "approve": [
    "verb"
  ],
  "approved": [
    "adjective"
  ],
  "approving": [
    "adjective"
  ],
  "apricot": [
    "noun",
    "adjective"
  ],
  "apron": [
    "noun",
    "verb"
  ],
  "aptitude": [
    "noun"
  ],
  "aquarium": [
    "noun"
  ],
  "aqueduct": [
    "noun"
  ],
  "arawak": [
    "noun",
    "adjective"
  ],
  "arbitrate": [
    "verb"
  ],
  "arbor": [
    "noun"
  ],
  "arboreal": [
    "adjective",
    "noun"
  ],
  "arcade": [
    "noun",
    "verb"
  ],
  "arcana": [
    "noun"
  ],
  "archaeologist": [
    "noun"
  ],
  "archaeology": [
    "noun"
  ],
  "archeological": [
    "adjective"
  ],
  "archeology": [
    "noun"
  ],
  "archery": [
    "noun"
  ],
  "archetype": [
    "noun",
    "verb"
  ],
  "archipelago": [
    "noun",
    "verb"
  ],
  "architect": [
    "noun",
    "verb"
  ],
  "architecture": [
    "noun"
  ],
  "architrave": [
    "noun"
  ],
  "archway": [
    "noun"
  ],
  "arctic": [
    "noun",
    "adjective"
  ],
  "arena": [
    "noun"
  ],
  "argentine": [
    "adjective",
    "noun"
  ],
  "argentines": [
    "adjective",
    "noun"
  ],
  "argon": [
    "noun"
  ],
  "argonaut": [
    "noun"
  ],
  "argue": [
    "verb",
    "noun"
  ],
  "argument": [
    "noun",
    "verb"
  ],
  "argyll": [
    "noun"
  ],
  "arise": [
    "verb",
    "noun"
  ],
  "aristocrat": [
    "noun"
  ],
  "aristocratic": [
    "adjective"
  ],
  "arithmetic": [
    "noun",
    "adjective"
  ],
  "arkansas": [
    "noun"
  ],
  "armbands": [
    "noun"
  ],
  "armchair": [
    "noun",
    "adjective",
    "verb"
  ],
  "armed": [
    "adjective"
  ],
  "armilla": [
    "noun"
  ],
  "armor": [
    "noun",
    "verb"
  ],
  "armpit": [
    "noun"
  ],
  "armpits": [
    "noun"
  ],
  "army": [
    "noun"
  ],
  "aromatic": [
    "adjective",
    "noun"
  ],
  "arose": [
    "verb"
  ],
  "around": [
    "adverb",
    "adjective"
  ],
  "arrange": [
    "verb",
    "noun"
  ],
  "arranged": [
    "adjective"
  ],
  "arraying": [
    "noun"
  ],
  "arrears": [
    "noun"
  ],
  "arrest": [
    "noun",
    "verb"
  ],
  "arrested": [
    "adjective"
  ],
  "arrival": [
    "noun"
  ],
  "arrive": [
    "verb"
  ],
  "arrived": [
    "verb"
  ],
  "arrow": [
    "noun",
    "verb"
  ],
  "arsehole": [
    "noun"
  ],
  "arteriosclerosis": [
    "noun"
  ],
  "artery": [
    "noun"
  ],
  "arthropod": [
    "noun"
  ],
  "artichoke": [
    "noun"
  ],
  "articular": [
    "adjective"
  ],
  "articulate": [
    "verb",
    "adjective",
    "noun"
  ],
  "artifact": [
    "noun"
  ],
  "artist": [
    "noun",
    "adjective"
  ],
  "artwork": [
    "noun"
  ],
  "artworks": [
    "noun"
  ],
  "asbestosis": [
    "noun"
  ],
  "ascend": [
    "verb"
  ],
  "ascends": [
    "verb"
  ],
  "ascension": [
    "noun"
  ],
  "ascent": [
    "noun"
  ],
  "ascertain": [
    "verb"
  ],
  "ascetic": [
    "adjective",
    "noun"
  ],
  "ascot": [
    "noun"
  ],
  "asea": [
    "adjective",
    "adverb"
  ],
  "asgard": [
    "noun"
  ],
  "ash": [
    "noun",
    "verb",
    "adverb"
  ],
  "ashamed": [
    "adjective"
  ],
  "ashore": [
    "adverb"
  ],
  "asiatic": [
    "adjective",
    "noun"
  ],
  "aside": [
    "adverb",
    "noun",
    "adjective"
  ],
  "asides": [
    "noun"
  ],
  "askance": [
    "adverb",
    "adjective",
    "verb"
  ],
  "aspartame": [
    "noun"
  ],
  "aspect": [
    "noun",
    "verb"
  ],
  "assailing": [
    "verb"
  ],
  "assam": [
    "noun"
  ],
  "assayer": [
    "noun"
  ],
  "assemble": [
    "verb"
  ],
  "assemblyman": [
    "noun"
  ],
  "assemblywoman": [
    "noun"
  ],
  "assent": [
    "noun",
    "verb"
  ],
  "assert": [
    "verb",
    "noun"
  ],
  "assertive": [
    "adjective"
  ],
  "assess": [
    "verb"
  ],
  "assessing": [
    "noun"
  ],
  "asset": [
    "noun"
  ],
  "assets": [
    "noun"
  ],
  "asshole": [
    "noun"
  ],
  "assign": [
    "verb",
    "noun"
  ],
  "assigned": [
    "adjective"
  ],
  "assignment": [
    "noun"
  ],
  "assimilate": [
    "verb",
    "adjective",
    "noun"
  ],
  "assist": [
    "verb",
    "noun"
  ],
  "assistant": [
    "noun",
    "adjective"
  ],
  "association": [
    "noun"
  ],
  "assort": [
    "verb"
  ],
  "assuage": [
    "verb"
  ],
  "assume": [
    "verb"
  ],
  "assure": [
    "verb"
  ],
  "assures": [
    "verb"
  ],
  "assuring": [
    "adjective"
  ],
  "aster": [
    "noun"
  ],
  "asteroid": [
    "noun"
  ],
  "asthmatic": [
    "adjective",
    "noun"
  ],
  "astonish": [
    "verb"
  ],
  "astound": [
    "verb",
    "adjective"
  ],
  "astounds": [
    "verb"
  ],
  "astrodome": [
    "noun"
  ],
  "astrolabe": [
    "noun"
  ],
  "astrologer": [
    "noun"
  ],
  "astrological": [
    "adjective"
  ],
  "astrology": [
    "noun"
  ],
  "astronaut": [
    "noun"
  ],
  "astronomer": [
    "noun"
  ],
  "astronomy": [
    "noun"
  ],
  "astute": [
    "adjective"
  ],
  "astutely": [
    "adverb"
  ],
  "asunder": [
    "adverb"
  ],
  "asylum": [
    "noun",
    "verb"
  ],
  "asymptomatic": [
    "adjective",
    "noun"
  ],
  "ate": [
    "noun"
  ],
  "atheistic": [
    "adjective"
  ],
  "athlete": [
    "noun"
  ],
  "athwart": [
    "adverb"
  ],
  "atlantic": [
    "noun",
    "adjective"
  ],
  "atlas": [
    "noun"
  ],
  "atmosphere": [
    "noun"
  ],
  "atoll": [
    "noun"
  ],
  "atom": [
    "noun"
  ],
  "atomizer": [
    "noun"
  ],
  "atone": [
    "verb"
  ],
  "atop": [
    "adverb"
  ],
  "atrophy": [
    "noun",
    "verb"
  ],
  "attach": [
    "verb"
  ],
  "attack": [
    "noun",
    "verb",
    "adjective"
  ],
  "attain": [
    "verb"
  ],
  "attar": [
    "noun"
  ],
  "attempt": [
    "noun",
    "verb"
  ],
  "attend": [
    "verb"
  ],
  "attends": [
    "verb"
  ],
  "attention": [
    "noun"
  ],
  "attentive": [
    "adjective"
  ],
  "attic": [
    "noun",
    "adjective"
  ],
  "attire": [
    "noun",
    "verb"
  ],
  "attitude": [
    "noun",
    "verb"
  ],
  "attorney": [
    "noun",
    "verb"
  ],
  "attribute": [
    "noun",
    "verb"
  ],
  "attribution": [
    "noun"
  ],
  "attune": [
    "verb"
  ],
  "auctioneer": [
    "noun",
    "verb"
  ],
  "auctioneers": [
    "noun"
  ],
  "audacious": [
    "adjective"
  ],
  "audacity": [
    "noun"
  ],
  "audience": [
    "noun"
  ],
  "audiotape": [
    "noun",
    "verb"
  ],
  "audition": [
    "noun",
    "verb"
  ],
  "auditorium": [
    "noun"
  ],
  "auditory": [
    "adjective",
    "noun"
  ],
  "aught": [
    "noun",
    "verb",
    "adverb"
  ],
  "augment": [
    "verb",
    "noun"
  ],
  "augmented": [
    "adjective"
  ],
  "augmenting": [
    "verb"
  ],
  "aunt": [
    "noun"
  ],
  "auspicious": [
    "adjective"
  ],
  "austere": [
    "adjective"
  ],
  "authenticity": [
    "noun"
  ],
  "authority": [
    "noun"
  ],
  "authorize": [
    "verb"
  ],
  "autism": [
    "noun"
  ],
  "autobiography": [
    "noun"
  ],
  "autoclave": [
    "noun",
    "verb",
    "adjective"
  ],
  "autocrat": [
    "noun"
  ],
  "autocratic": [
    "adjective"
  ],
  "autograph": [
    "noun",
    "verb",
    "adjective"
  ],
  "autographed": [
    "adjective"
  ],
  "autographs": [
    "noun"
  ],
  "automaton": [
    "noun"
  ],
  "automobile": [
    "noun",
    "adjective",
    "verb"
  ],
  "automobiles": [
    "noun"
  ],
  "autonomous": [
    "adjective"
  ],
  "autonomy": [
    "noun"
  ],
  "autumn": [
    "noun",
    "verb"
  ],
  "avail": [
    "noun",
    "verb",
    "adjective"
  ],
  "available": [
    "adjective"
  ],
  "avalanche": [
    "noun",
    "verb"
  ],
  "avatar": [
    "noun"
  ],
  "avenue": [
    "noun"
  ],
  "avenues": [
    "noun"
  ],
  "averse": [
    "verb",
    "adjective"
  ],
  "avert": [
    "verb"
  ],
  "avionic": [
    "adjective"
  ],
  "avocado": [
    "noun",
    "adjective"
  ],
  "avoid": [
    "verb"
  ],
  "avow": [
    "verb",
    "noun"
  ],
  "avowed": [
    "adjective"
  ],
  "awake": [
    "adjective",
    "verb"
  ],
  "aware": [
    "adjective",
    "verb"
  ],
  "awed": [
    "adjective"
  ],
  "awestruck": [
    "adjective"
  ],
  "awoke": [
    "verb"
  ],
  "awol": [
    "noun",
    "adjective"
  ],
  "axiom": [
    "noun"
  ],
  "axons": [
    "noun"
  ],
  "ayrshire": [
    "noun"
  ],
  "azides": [
    "noun"
  ],
  "aztec": [
    "adjective",
    "noun"
  ],
  "aztecs": [
    "adjective",
    "noun"
  ],
  "babies": [
    "noun"
  ],
  "baboon": [
    "noun"
  ],
  "baby": [
    "noun",
    "adjective",
    "verb"
  ],
  "babylon": [
    "noun"
  ],
  "babysitting": [
    "noun"
  ],
  "baccarat": [
    "noun"
  ],
  "backache": [
    "noun"
  ],
  "backaches": [
    "noun"
  ],
  "backbiting": [
    "noun",
    "adjective"
  ],
  "backboard": [
    "noun",
    "verb"
  ],
  "backbreaking": [
    "adjective"
  ],
  "backdrop": [
    "noun",
    "verb"
  ],
  "backed": [
    "adjective"
  ],
  "backfield": [
    "noun"
  ],
  "backfire": [
    "verb",
    "noun"
  ],
  "backgrounds": [
    "noun"
  ],
  "backhand": [
    "noun",
    "verb",
    "adjective"
  ],
  "backlash": [
    "noun",
    "verb"
  ],
  "backlog": [
    "noun",
    "verb"
  ],
  "backpack": [
    "noun",
    "verb"
  ],
  "backpacker": [
    "noun"
  ],
  "backpacking": [
    "noun"
  ],
  "backpacks": [
    "noun"
  ],
  "backsaws": [
    "noun",
    "verb"
  ],
  "backseat": [
    "noun",
    "verb"
  ],
  "backsides": [
    "noun"
  ],
  "backslap": [
    "verb"
  ],
  "backstop": [
    "noun",
    "verb"
  ],
  "backstroke": [
    "noun",
    "verb"
  ],
  "backtracked": [
    "verb"
  ],
  "backtracking": [
    "noun"
  ],
  "backwash": [
    "noun",
    "verb"
  ],
  "bacon": [
    "noun"
  ],
  "bacteria": [
    "noun"
  ],
  "bacterium": [
    "noun"
  ],
  "bad": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "badge": [
    "noun",
    "verb"
  ],
  "badger": [
    "noun",
    "verb"
  ],
  "badlands": [
    "noun"
  ],
  "badly": [
    "adverb",
    "adjective"
  ],
  "badminton": [
    "noun"
  ],
  "bag": [
    "noun",
    "verb"
  ],
  "baggage": [
    "noun"
  ],
  "bags": [
    "noun",
    "verb"
  ],
  "baguette": [
    "noun"
  ],
  "baht": [
    "noun",
    "adverb"
  ],
  "bailiwick": [
    "noun"
  ],
  "bake": [
    "noun",
    "verb"
  ],
  "bakersfield": [
    "noun"
  ],
  "bakery": [
    "noun"
  ],
  "baking": [
    "noun",
    "adjective"
  ],
  "balance": [
    "noun",
    "verb"
  ],
  "balcony": [
    "noun"
  ],
  "balderdash": [
    "noun",
    "verb"
  ],
  "baling": [
    "noun"
  ],
  "balked": [
    "verb"
  ],
  "balking": [
    "noun",
    "adjective"
  ],
  "ball": [
    "noun",
    "verb"
  ],
  "ballade": [
    "noun"
  ],
  "balled": [
    "adjective"
  ],
  "ballerina": [
    "noun"
  ],
  "ballgame": [
    "noun"
  ],
  "balloon": [
    "noun",
    "verb"
  ],
  "ballpark": [
    "noun",
    "adjective",
    "verb"
  ],
  "ballroom": [
    "noun",
    "verb"
  ],
  "bam": [
    "noun",
    "verb"
  ],
  "banal": [
    "adjective"
  ],
  "banality": [
    "noun"
  ],
  "banana": [
    "noun",
    "adjective"
  ],
  "band": [
    "noun",
    "verb"
  ],
  "bandana": [
    "noun"
  ],
  "banding": [
    "noun"
  ],
  "bands": [
    "noun"
  ],
  "bandstand": [
    "noun"
  ],
  "bangkok": [
    "noun"
  ],
  "banish": [
    "verb"
  ],
  "bank": [
    "noun",
    "verb"
  ],
  "bankbook": [
    "noun"
  ],
  "banker": [
    "noun"
  ],
  "banknote": [
    "noun"
  ],
  "bankroll": [
    "noun",
    "verb"
  ],
  "bankrolled": [
    "verb"
  ],
  "banned": [
    "adjective"
  ],
  "banner": [
    "noun",
    "adjective",
    "verb"
  ],
  "banyan": [
    "noun"
  ],
  "bar": [
    "noun",
    "verb",
    "adjective"
  ],
  "barbarism": [
    "noun"
  ],
  "barbecue": [
    "noun",
    "verb"
  ],
  "barbecued": [
    "adjective"
  ],
  "barbecues": [
    "noun"
  ],
  "barbecuing": [
    "noun"
  ],
  "barber": [
    "noun",
    "verb"
  ],
  "barbershop": [
    "noun",
    "verb"
  ],
  "bard": [
    "noun",
    "verb"
  ],
  "bare": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "bared": [
    "adjective"
  ],
  "barely": [
    "adverb"
  ],
  "baring": [
    "noun"
  ],
  "barking": [
    "noun",
    "adjective"
  ],
  "barn": [
    "noun",
    "verb"
  ],
  "barnstorm": [
    "verb",
    "noun"
  ],
  "barnyard": [
    "noun",
    "adjective"
  ],
  "barometer": [
    "noun"
  ],
  "baroque": [
    "adjective",
    "noun"
  ],
  "barred": [
    "adjective"
  ],
  "barrel": [
    "noun",
    "verb"
  ],
  "barricade": [
    "noun",
    "verb"
  ],
  "barroom": [
    "noun"
  ],
  "basalt": [
    "noun"
  ],
  "base": [
    "noun",
    "verb",
    "adjective"
  ],
  "baseball": [
    "noun"
  ],
  "baseballs": [
    "noun"
  ],
  "basement": [
    "noun"
  ],
  "basically": [
    "adverb"
  ],
  "basked": [
    "verb"
  ],
  "basket": [
    "noun",
    "verb"
  ],
  "basketball": [
    "noun",
    "verb"
  ],
  "basketballs": [
    "noun"
  ],
  "basking": [
    "noun"
  ],
  "basophilia": [
    "noun"
  ],
  "bassoon": [
    "noun",
    "verb"
  ],
  "bastards": [
    "noun"
  ],
  "baste": [
    "noun",
    "verb"
  ],
  "bat": [
    "noun",
    "verb"
  ],
  "batch": [
    "noun",
    "verb",
    "adjective"
  ],
  "bathroom": [
    "noun",
    "verb"
  ],
  "batik": [
    "noun",
    "verb"
  ],
  "batons": [
    "noun"
  ],
  "battalion": [
    "noun",
    "verb"
  ],
  "batter": [
    "noun",
    "verb"
  ],
  "battery": [
    "noun"
  ],
  "battle": [
    "noun",
    "verb",
    "adjective"
  ],
  "battlefield": [
    "noun"
  ],
  "battlefront": [
    "noun"
  ],
  "battleground": [
    "noun"
  ],
  "battlegrounds": [
    "noun"
  ],
  "battleship": [
    "noun"
  ],
  "battleships": [
    "noun"
  ],
  "baud": [
    "noun"
  ],
  "bawd": [
    "noun",
    "verb",
    "adjective"
  ],
  "bawl": [
    "verb",
    "noun"
  ],
  "bawled": [
    "verb"
  ],
  "bawls": [
    "verb",
    "noun"
  ],
  "bay": [
    "noun",
    "adjective",
    "verb"
  ],
  "baying": [
    "noun"
  ],
  "bayonet": [
    "noun",
    "verb"
  ],
  "bayonets": [
    "noun"
  ],
  "bazaar": [
    "noun"
  ],
  "beach": [
    "noun",
    "verb"
  ],
  "beacon": [
    "noun",
    "verb"
  ],
  "bead": [
    "noun",
    "verb"
  ],
  "beads": [
    "noun"
  ],
  "beadwork": [
    "noun"
  ],
  "beak": [
    "noun",
    "verb"
  ],
  "beaklike": [
    "adjective"
  ],
  "beaks": [
    "noun"
  ],
  "beaming": [
    "adjective",
    "noun"
  ],
  "bean": [
    "noun",
    "verb"
  ],
  "beanie": [
    "noun"
  ],
  "bear": [
    "verb",
    "noun",
    "adjective"
  ],
  "bearable": [
    "adjective"
  ],
  "beast": [
    "noun",
    "verb",
    "adjective"
  ],
  "beating": [
    "noun"
  ],
  "beautiful": [
    "adjective",
    "noun"
  ],
  "beauty": [
    "noun",
    "adjective",
    "verb"
  ],
  "beaver": [
    "noun",
    "verb"
  ],
  "bebop": [
    "noun",
    "verb"
  ],
  "becalm": [
    "verb"
  ],
  "beckoned": [
    "verb"
  ],
  "becomes": [
    "verb"
  ],
  "becoming": [
    "adjective",
    "noun"
  ],
  "bed": [
    "noun",
    "verb"
  ],
  "bedeck": [
    "verb"
  ],
  "bedfellow": [
    "noun"
  ],
  "bedizen": [
    "verb"
  ],
  "bedpan": [
    "noun"
  ],
  "bedrock": [
    "noun",
    "verb"
  ],
  "bedroom": [
    "noun"
  ],
  "bedstraw": [
    "noun"
  ],
  "bedtime": [
    "noun"
  ],
  "bee": [
    "noun",
    "verb"
  ],
  "beechwood": [
    "noun"
  ],
  "beefeater": [
    "noun"
  ],
  "beehive": [
    "noun",
    "verb"
  ],
  "beekeeper": [
    "noun"
  ],
  "beep": [
    "noun",
    "verb"
  ],
  "beeping": [
    "noun"
  ],
  "beeps": [
    "noun",
    "verb"
  ],
  "beer": [
    "noun",
    "verb"
  ],
  "beet": [
    "noun",
    "verb"
  ],
  "beetle": [
    "noun",
    "verb",
    "adjective"
  ],
  "befall": [
    "verb",
    "noun"
  ],
  "befalls": [
    "verb"
  ],
  "befell": [
    "verb"
  ],
  "befit": [
    "verb"
  ],
  "befits": [
    "verb",
    "noun"
  ],
  "befitting": [
    "adjective"
  ],
  "beforehand": [
    "adverb",
    "adjective"
  ],
  "befriend": [
    "verb"
  ],
  "befriends": [
    "verb"
  ],
  "begat": [
    "verb",
    "noun"
  ],
  "beget": [
    "verb"
  ],
  "begets": [
    "verb"
  ],
  "begetting": [
    "noun"
  ],
  "begin": [
    "verb",
    "noun"
  ],
  "beginner": [
    "noun"
  ],
  "beginning": [
    "noun",
    "adjective"
  ],
  "begins": [
    "verb"
  ],
  "begot": [
    "verb"
  ],
  "beguile": [
    "verb"
  ],
  "behaved": [
    "adjective"
  ],
  "behavior": [
    "noun"
  ],
  "behead": [
    "verb"
  ],
  "behold": [
    "verb"
  ],
  "beirut": [
    "noun"
  ],
  "belabor": [
    "verb"
  ],
  "beleaguer": [
    "verb"
  ],
  "belief": [
    "noun"
  ],
  "believability": [
    "noun"
  ],
  "believe": [
    "verb"
  ],
  "believing": [
    "noun"
  ],
  "bellboy": [
    "noun"
  ],
  "bellhop": [
    "noun",
    "verb"
  ],
  "bellicose": [
    "adjective"
  ],
  "bellyache": [
    "noun",
    "verb"
  ],
  "bellyaching": [
    "noun"
  ],
  "belongs": [
    "verb"
  ],
  "beloved": [
    "adjective",
    "noun"
  ],
  "below": [
    "adverb",
    "noun"
  ],
  "belt": [
    "noun",
    "verb"
  ],
  "belvedere": [
    "noun",
    "verb"
  ],
  "bemused": [
    "adjective"
  ],
  "benchmark": [
    "noun",
    "verb"
  ],
  "bend": [
    "noun",
    "verb"
  ],
  "bends": [
    "noun"
  ],
  "benediction": [
    "noun"
  ],
  "beneficent": [
    "adjective"
  ],
  "bengali": [
    "noun",
    "adjective"
  ],
  "benighting": [
    "noun"
  ],
  "benign": [
    "adjective"
  ],
  "bent": [
    "adjective",
    "noun"
  ],
  "bereave": [
    "verb"
  ],
  "berserk": [
    "noun",
    "adjective",
    "verb"
  ],
  "beset": [
    "verb"
  ],
  "besetting": [
    "adjective",
    "noun"
  ],
  "bespeak": [
    "verb",
    "noun"
  ],
  "bespeaks": [
    "verb"
  ],
  "bespoke": [
    "adjective"
  ],
  "best": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "bestowed": [
    "adjective"
  ],
  "bestowing": [
    "verb"
  ],
  "bet": [
    "verb",
    "noun"
  ],
  "betrayal": [
    "noun"
  ],
  "betrayed": [
    "adjective"
  ],
  "betraying": [
    "adjective",
    "noun"
  ],
  "betrays": [
    "verb"
  ],
  "bets": [
    "noun"
  ],
  "better": [
    "adjective",
    "verb",
    "noun"
  ],
  "bettor": [
    "noun"
  ],
  "between": [
    "noun"
  ],
  "bevel": [
    "noun",
    "adjective",
    "verb"
  ],
  "beverage": [
    "noun"
  ],
  "beware": [
    "verb"
  ],
  "bewitch": [
    "verb"
  ],
  "beyond": [
    "adverb",
    "noun"
  ],
  "bhutan": [
    "noun"
  ],
  "bias": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "bicycle": [
    "noun",
    "verb"
  ],
  "bidden": [
    "verb",
    "noun"
  ],
  "bids": [
    "noun"
  ],
  "biedermeier": [
    "noun"
  ],
  "big": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "biggest": [
    "adjective"
  ],
  "bighearted": [
    "adjective"
  ],
  "bighorn": [
    "noun"
  ],
  "bigwig": [
    "noun"
  ],
  "bike": [
    "noun",
    "verb"
  ],
  "bill": [
    "noun",
    "verb"
  ],
  "billboard": [
    "noun",
    "verb"
  ],
  "billed": [
    "adjective"
  ],
  "billfold": [
    "noun"
  ],
  "billy": [
    "noun"
  ],
  "bin": [
    "noun",
    "verb"
  ],
  "bind": [
    "noun",
    "verb"
  ],
  "binoculars": [
    "noun"
  ],
  "bioengineering": [
    "noun"
  ],
  "biographer": [
    "noun"
  ],
  "biography": [
    "noun",
    "verb"
  ],
  "biology": [
    "noun"
  ],
  "biome": [
    "noun"
  ],
  "biospheres": [
    "noun"
  ],
  "biostatistics": [
    "noun"
  ],
  "biotech": [
    "noun"
  ],
  "biotechnology": [
    "noun"
  ],
  "biotechs": [
    "noun"
  ],
  "bird": [
    "noun",
    "verb",
    "adjective"
  ],
  "birds": [
    "noun",
    "verb",
    "adjective"
  ],
  "birdseed": [
    "noun"
  ],
  "birle": [
    "verb"
  ],
  "birth": [
    "noun",
    "verb",
    "adjective"
  ],
  "birthday": [
    "noun",
    "verb"
  ],
  "birthdays": [
    "noun"
  ],
  "birthmark": [
    "noun"
  ],
  "birthplace": [
    "noun"
  ],
  "biscuit": [
    "noun",
    "verb"
  ],
  "bisexuality": [
    "noun"
  ],
  "bismarck": [
    "noun"
  ],
  "bison": [
    "noun"
  ],
  "bit": [
    "noun",
    "verb",
    "adjective"
  ],
  "bite": [
    "noun",
    "verb"
  ],
  "biting": [
    "adjective",
    "noun"
  ],
  "bits": [
    "noun"
  ],
  "bitten": [
    "adjective"
  ],
  "bittersweet": [
    "adjective",
    "noun"
  ],
  "bitumen": [
    "noun",
    "verb"
  ],
  "bizarre": [
    "adjective",
    "noun"
  ],
  "blab": [
    "verb",
    "noun"
  ],
  "black": [
    "adjective",
    "noun",
    "verb"
  ],
  "blackberry": [
    "noun",
    "verb"
  ],
  "blackboard": [
    "noun",
    "verb"
  ],
  "blacked": [
    "adjective"
  ],
  "blackjack": [
    "noun",
    "verb"
  ],
  "blacklist": [
    "noun",
    "verb"
  ],
  "blackmail": [
    "noun",
    "verb"
  ],
  "blackout": [
    "noun",
    "verb"
  ],
  "blacksmith": [
    "noun",
    "verb"
  ],
  "blacktop": [
    "noun",
    "verb"
  ],
  "blade": [
    "noun",
    "verb"
  ],
  "blame": [
    "verb",
    "noun",
    "adjective"
  ],
  "blanket": [
    "noun",
    "adjective",
    "verb"
  ],
  "blared": [
    "verb"
  ],
  "blast": [
    "noun",
    "verb"
  ],
  "blastoff": [
    "noun"
  ],
  "blather": [
    "noun",
    "verb"
  ],
  "blaze": [
    "noun",
    "verb"
  ],
  "bleary": [
    "adjective"
  ],
  "bled": [
    "noun"
  ],
  "bleed": [
    "verb",
    "noun"
  ],
  "bleeding": [
    "noun",
    "adjective",
    "adverb"
  ],
  "bleeds": [
    "verb",
    "noun"
  ],
  "bleep": [
    "noun",
    "verb"
  ],
  "blend": [
    "noun",
    "verb"
  ],
  "blender": [
    "noun",
    "verb"
  ],
  "blends": [
    "noun",
    "verb"
  ],
  "blenheim": [
    "noun"
  ],
  "blessed": [
    "adjective",
    "noun"
  ],
  "blew": [
    "noun",
    "adjective"
  ],
  "blind": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "blindfold": [
    "noun",
    "adverb",
    "adjective",
    "verb"
  ],
  "blink": [
    "verb",
    "noun"
  ],
  "blinking": [
    "noun",
    "adjective"
  ],
  "blip": [
    "noun",
    "verb"
  ],
  "blips": [
    "noun"
  ],
  "bliss": [
    "noun"
  ],
  "blizzard": [
    "noun",
    "verb"
  ],
  "bloat": [
    "noun",
    "verb",
    "adjective"
  ],
  "blob": [
    "noun",
    "verb"
  ],
  "bloc": [
    "noun"
  ],
  "block": [
    "noun",
    "verb"
  ],
  "blockade": [
    "noun",
    "verb"
  ],
  "blockhead": [
    "noun",
    "verb"
  ],
  "blockhouse": [
    "noun"
  ],
  "blocs": [
    "noun"
  ],
  "blond": [
    "adjective",
    "noun",
    "verb"
  ],
  "bloodletting": [
    "noun"
  ],
  "bloodline": [
    "noun"
  ],
  "bloodshed": [
    "noun"
  ],
  "bloodstream": [
    "noun"
  ],
  "bloodsucking": [
    "adjective",
    "noun"
  ],
  "blossom": [
    "noun",
    "verb"
  ],
  "blot": [
    "noun",
    "verb"
  ],
  "blotter": [
    "noun"
  ],
  "blouse": [
    "noun",
    "verb"
  ],
  "blow": [
    "noun",
    "verb",
    "adjective"
  ],
  "blowgun": [
    "noun"
  ],
  "blowguns": [
    "noun"
  ],
  "blowhard": [
    "noun"
  ],
  "blowhole": [
    "noun",
    "verb"
  ],
  "blown": [
    "adjective"
  ],
  "blowout": [
    "noun"
  ],
  "blowpipe": [
    "noun",
    "verb"
  ],
  "blows": [
    "noun",
    "verb"
  ],
  "blowup": [
    "noun"
  ],
  "blue": [
    "adjective",
    "noun",
    "verb"
  ],
  "bluebell": [
    "noun"
  ],
  "blueberry": [
    "noun",
    "adjective",
    "verb"
  ],
  "bluebird": [
    "noun",
    "adjective"
  ],
  "bluebirds": [
    "noun"
  ],
  "bluegrass": [
    "noun"
  ],
  "blueing": [
    "noun"
  ],
  "bluing": [
    "noun"
  ],
  "blunder": [
    "noun",
    "verb"
  ],
  "blur": [
    "noun",
    "verb",
    "adjective"
  ],
  "blurred": [
    "adjective"
  ],
  "blurs": [
    "verb",
    "noun"
  ],
  "blurt": [
    "verb",
    "noun"
  ],
  "blush": [
    "noun",
    "verb"
  ],
  "boar": [
    "noun"
  ],
  "boardinghouse": [
    "noun"
  ],
  "boardroom": [
    "noun"
  ],
  "boat": [
    "noun",
    "verb"
  ],
  "boathouse": [
    "noun"
  ],
  "boatload": [
    "noun"
  ],
  "boatyard": [
    "noun"
  ],
  "bobcat": [
    "noun"
  ],
  "bodies": [
    "noun"
  ],
  "bog": [
    "noun",
    "adjective",
    "verb"
  ],
  "bogeyman": [
    "noun"
  ],
  "bogeymen": [
    "noun"
  ],
  "bogota": [
    "noun"
  ],
  "boil": [
    "noun",
    "verb"
  ],
  "bold": [
    "adjective",
    "verb",
    "noun"
  ],
  "bolero": [
    "noun",
    "verb"
  ],
  "bolshevik": [
    "noun"
  ],
  "bolsheviks": [
    "noun"
  ],
  "bolshevist": [
    "noun"
  ],
  "bolt": [
    "noun",
    "verb",
    "adverb"
  ],
  "bombardiers": [
    "noun"
  ],
  "bombshell": [
    "noun"
  ],
  "bond": [
    "noun",
    "verb",
    "adjective"
  ],
  "bondholder": [
    "noun"
  ],
  "bone": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "bonfire": [
    "noun",
    "verb"
  ],
  "bonus": [
    "noun",
    "verb"
  ],
  "bony": [
    "adjective",
    "noun"
  ],
  "boo": [
    "noun",
    "verb"
  ],
  "booed": [
    "verb"
  ],
  "book": [
    "noun",
    "verb"
  ],
  "bookcase": [
    "noun"
  ],
  "booked": [
    "adjective"
  ],
  "bookend": [
    "noun",
    "verb"
  ],
  "bookends": [
    "noun"
  ],
  "booking": [
    "noun"
  ],
  "bookmobile": [
    "noun"
  ],
  "bookmobiles": [
    "noun"
  ],
  "bookshelf": [
    "noun"
  ],
  "bookshop": [
    "noun"
  ],
  "bookstore": [
    "noun"
  ],
  "boolean": [
    "noun",
    "adjective"
  ],
  "boomerang": [
    "noun",
    "verb"
  ],
  "boondocks": [
    "noun",
    "verb"
  ],
  "boors": [
    "noun"
  ],
  "boot": [
    "noun",
    "verb"
  ],
  "bootstrap": [
    "noun",
    "verb"
  ],
  "bootstraps": [
    "noun",
    "verb"
  ],
  "boozing": [
    "noun"
  ],
  "bop": [
    "noun",
    "verb"
  ],
  "bopeep": [
    "noun",
    "verb"
  ],
  "borax": [
    "noun",
    "verb"
  ],
  "border": [
    "noun",
    "verb"
  ],
  "borderline": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "bore": [
    "verb",
    "noun"
  ],
  "bored": [
    "adjective"
  ],
  "boredom": [
    "noun"
  ],
  "born": [
    "verb",
    "adjective",
    "noun"
  ],
  "borrow": [
    "verb",
    "noun"
  ],
  "botanic": [
    "noun",
    "adjective"
  ],
  "botswana": [
    "noun"
  ],
  "bottle": [
    "noun",
    "verb"
  ],
  "bottleneck": [
    "noun",
    "verb"
  ],
  "bottlenecks": [
    "noun"
  ],
  "boulevard": [
    "noun"
  ],
  "bounce": [
    "noun",
    "verb"
  ],
  "bound": [
    "verb",
    "adjective",
    "noun"
  ],
  "boundary": [
    "noun"
  ],
  "bouquet": [
    "noun"
  ],
  "bourse": [
    "noun"
  ],
  "boutique": [
    "noun"
  ],
  "boutiques": [
    "noun"
  ],
  "bow": [
    "noun",
    "verb"
  ],
  "bowing": [
    "noun"
  ],
  "bowl": [
    "noun",
    "verb"
  ],
  "bowled": [
    "adjective"
  ],
  "bowse": [
    "noun",
    "verb"
  ],
  "box": [
    "noun",
    "verb"
  ],
  "boxcar": [
    "noun",
    "verb",
    "adjective"
  ],
  "boxing": [
    "noun"
  ],
  "boxwood": [
    "noun"
  ],
  "boycott": [
    "noun",
    "verb"
  ],
  "boyfriend": [
    "noun",
    "verb"
  ],
  "boyfriends": [
    "noun"
  ],
  "boyhood": [
    "noun"
  ],
  "bra": [
    "noun"
  ],
  "braced": [
    "adjective"
  ],
  "bracelet": [
    "noun",
    "verb"
  ],
  "brachia": [
    "noun"
  ],
  "brachiopod": [
    "noun"
  ],
  "bracket": [
    "noun",
    "verb"
  ],
  "braid": [
    "noun",
    "verb",
    "adjective"
  ],
  "braille": [
    "noun",
    "adjective",
    "verb"
  ],
  "brain": [
    "noun",
    "verb"
  ],
  "brainchild": [
    "noun",
    "verb"
  ],
  "brainpower": [
    "noun"
  ],
  "brains": [
    "noun"
  ],
  "brainstorm": [
    "noun",
    "verb"
  ],
  "brake": [
    "noun",
    "verb"
  ],
  "brakes": [
    "noun"
  ],
  "braking": [
    "noun"
  ],
  "bramble": [
    "noun",
    "verb"
  ],
  "branch": [
    "noun",
    "verb"
  ],
  "brass": [
    "noun",
    "adjective",
    "verb"
  ],
  "brat": [
    "noun",
    "verb",
    "adjective"
  ],
  "brave": [
    "adjective",
    "verb",
    "noun"
  ],
  "braved": [
    "verb"
  ],
  "brawl": [
    "noun",
    "verb"
  ],
  "brawling": [
    "noun",
    "adjective"
  ],
  "brawls": [
    "noun"
  ],
  "breach": [
    "noun",
    "verb"
  ],
  "bread": [
    "noun",
    "verb"
  ],
  "breadbox": [
    "noun"
  ],
  "breading": [
    "noun"
  ],
  "break": [
    "verb",
    "noun"
  ],
  "breakdown": [
    "noun"
  ],
  "breakfast": [
    "noun",
    "verb"
  ],
  "breaking": [
    "noun"
  ],
  "breakneck": [
    "noun",
    "adjective",
    "adverb"
  ],
  "breakout": [
    "noun",
    "adjective"
  ],
  "breaks": [
    "noun",
    "verb"
  ],
  "breakthroughs": [
    "noun"
  ],
  "breakwater": [
    "noun"
  ],
  "breast": [
    "noun",
    "verb"
  ],
  "breathe": [
    "verb"
  ],
  "breather": [
    "noun"
  ],
  "breathing": [
    "noun"
  ],
  "breathtaking": [
    "adjective"
  ],
  "bred": [
    "noun"
  ],
  "breeds": [
    "noun",
    "verb"
  ],
  "breezy": [
    "adjective",
    "noun"
  ],
  "brew": [
    "noun",
    "verb"
  ],
  "brewed": [
    "verb",
    "adjective"
  ],
  "brews": [
    "noun",
    "verb"
  ],
  "brickyard": [
    "noun"
  ],
  "bride": [
    "noun",
    "verb"
  ],
  "brides": [
    "noun"
  ],
  "bridesmaid": [
    "noun",
    "verb"
  ],
  "bridge": [
    "noun",
    "verb"
  ],
  "bridgeport": [
    "noun"
  ],
  "brief": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "briefcase": [
    "noun"
  ],
  "brigade": [
    "noun",
    "verb"
  ],
  "brigadier": [
    "noun"
  ],
  "bright": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "bring": [
    "verb"
  ],
  "bringing": [
    "noun"
  ],
  "brings": [
    "verb"
  ],
  "bristle": [
    "noun",
    "verb"
  ],
  "british": [
    "adjective",
    "noun"
  ],
  "briton": [
    "noun"
  ],
  "brittle": [
    "adjective",
    "noun",
    "verb"
  ],
  "broadcast": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "broadcaster": [
    "noun"
  ],
  "broaden": [
    "verb",
    "noun"
  ],
  "broadsided": [
    "verb"
  ],
  "broccoli": [
    "noun"
  ],
  "brochure": [
    "noun"
  ],
  "brochures": [
    "noun"
  ],
  "broil": [
    "noun",
    "verb"
  ],
  "broke": [
    "verb",
    "adjective",
    "noun"
  ],
  "broken": [
    "adjective",
    "noun"
  ],
  "brolly": [
    "noun"
  ],
  "bromides": [
    "noun"
  ],
  "bronchoscope": [
    "noun"
  ],
  "bronze": [
    "noun",
    "adjective",
    "verb"
  ],
  "brooch": [
    "noun",
    "verb"
  ],
  "brood": [
    "noun",
    "verb",
    "adjective"
  ],
  "broom": [
    "noun",
    "verb"
  ],
  "broomstick": [
    "noun",
    "verb"
  ],
  "broomsticks": [
    "noun"
  ],
  "broth": [
    "noun"
  ],
  "brother": [
    "noun",
    "verb"
  ],
  "brotherhood": [
    "noun"
  ],
  "brouhaha": [
    "noun"
  ],
  "brown": [
    "noun",
    "adjective",
    "verb"
  ],
  "browned": [
    "adjective"
  ],
  "bruise": [
    "noun",
    "verb"
  ],
  "bruised": [
    "adjective"
  ],
  "bruising": [
    "noun",
    "adjective"
  ],
  "brunettes": [
    "noun"
  ],
  "brush": [
    "noun",
    "verb"
  ],
  "brushwork": [
    "noun"
  ],
  "brute": [
    "noun",
    "adjective",
    "verb"
  ],
  "bubble": [
    "noun",
    "verb"
  ],
  "bubonic": [
    "adjective"
  ],
  "buck": [
    "noun",
    "verb"
  ],
  "bucked": [
    "verb"
  ],
  "bucket": [
    "noun",
    "verb"
  ],
  "bucking": [
    "noun"
  ],
  "buckshot": [
    "noun"
  ],
  "buckskin": [
    "noun",
    "adjective"
  ],
  "buckthorn": [
    "noun"
  ],
  "buckwheat": [
    "noun"
  ],
  "budapest": [
    "noun"
  ],
  "budget": [
    "noun",
    "verb",
    "adjective"
  ],
  "buffalo": [
    "noun",
    "verb"
  ],
  "buffeting": [
    "noun"
  ],
  "buffoon": [
    "noun",
    "verb"
  ],
  "build": [
    "verb",
    "noun"
  ],
  "builder": [
    "noun"
  ],
  "building": [
    "noun"
  ],
  "buildup": [
    "noun"
  ],
  "bulb": [
    "noun",
    "verb"
  ],
  "bulkhead": [
    "noun"
  ],
  "bull": [
    "noun",
    "adjective",
    "verb"
  ],
  "bulldozed": [
    "verb"
  ],
  "bullet": [
    "noun",
    "verb"
  ],
  "bullfighting": [
    "noun"
  ],
  "bullfrog": [
    "noun"
  ],
  "bullhorn": [
    "noun"
  ],
  "bullpen": [
    "noun"
  ],
  "bullshit": [
    "noun",
    "adjective",
    "verb"
  ],
  "bullshitting": [
    "verb",
    "noun"
  ],
  "bumble": [
    "noun",
    "verb"
  ],
  "bump": [
    "noun",
    "verb"
  ],
  "bums": [
    "noun"
  ],
  "bun": [
    "noun",
    "verb"
  ],
  "bung": [
    "noun",
    "verb",
    "adjective"
  ],
  "bunker": [
    "noun",
    "verb"
  ],
  "bunny": [
    "noun",
    "adjective"
  ],
  "buns": [
    "noun",
    "adjective"
  ],
  "buoy": [
    "noun",
    "verb"
  ],
  "burden": [
    "noun",
    "verb"
  ],
  "bureaucracy": [
    "noun"
  ],
  "bureaucrat": [
    "noun"
  ],
  "bureaucratic": [
    "adjective"
  ],
  "burger": [
    "noun"
  ],
  "burgomaster": [
    "noun"
  ],
  "buried": [
    "adjective"
  ],
  "burlap": [
    "noun",
    "verb"
  ],
  "burmese": [
    "adjective",
    "noun"
  ],
  "burn": [
    "verb",
    "noun"
  ],
  "burned": [
    "adjective"
  ],
  "burning": [
    "noun",
    "adjective"
  ],
  "burnup": [
    "noun"
  ],
  "burrito": [
    "noun",
    "verb"
  ],
  "burst": [
    "verb",
    "noun"
  ],
  "bus": [
    "noun",
    "verb"
  ],
  "busboy": [
    "noun"
  ],
  "busboys": [
    "noun"
  ],
  "bused": [
    "verb"
  ],
  "bush": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "bushwhacked": [
    "verb"
  ],
  "bushwhacking": [
    "noun"
  ],
  "business": [
    "noun",
    "adjective"
  ],
  "businesslike": [
    "adjective"
  ],
  "businessman": [
    "noun"
  ],
  "businessmen": [
    "noun"
  ],
  "businesswoman": [
    "noun"
  ],
  "busload": [
    "noun"
  ],
  "bussed": [
    "adjective"
  ],
  "bustle": [
    "noun",
    "verb"
  ],
  "butter": [
    "noun",
    "verb"
  ],
  "buttercup": [
    "noun"
  ],
  "butterflies": [
    "noun"
  ],
  "butterfly": [
    "noun",
    "verb"
  ],
  "button": [
    "noun",
    "verb"
  ],
  "buttonhole": [
    "noun",
    "verb"
  ],
  "buttress": [
    "noun",
    "verb"
  ],
  "buy": [
    "verb",
    "noun"
  ],
  "buyer": [
    "noun"
  ],
  "buying": [
    "noun"
  ],
  "buyout": [
    "noun"
  ],
  "buzz": [
    "noun",
    "verb"
  ],
  "bygone": [
    "adjective",
    "noun"
  ],
  "bylaw": [
    "noun"
  ],
  "bylaws": [
    "noun"
  ],
  "bypass": [
    "noun",
    "verb"
  ],
  "bypassed": [
    "verb"
  ],
  "byword": [
    "noun"
  ],
  "ca": [
    "noun"
  ],
  "cab": [
    "noun",
    "verb"
  ],
  "cabbage": [
    "noun",
    "verb"
  ],
  "cabernets": [
    "noun"
  ],
  "cabin": [
    "noun",
    "verb"
  ],
  "cabinet": [
    "noun"
  ],
  "cable": [
    "noun",
    "verb"
  ],
  "cablegram": [
    "noun",
    "verb"
  ],
  "caboose": [
    "noun"
  ],
  "cache": [
    "noun",
    "verb"
  ],
  "cacique": [
    "noun"
  ],
  "cackle": [
    "noun",
    "verb"
  ],
  "cacophony": [
    "noun"
  ],
  "cactus": [
    "noun",
    "adjective"
  ],
  "cad": [
    "noun"
  ],
  "caddie": [
    "noun",
    "verb"
  ],
  "cadets": [
    "noun"
  ],
  "caesareans": [
    "noun"
  ],
  "cafe": [
    "noun"
  ],
  "cafes": [
    "noun"
  ],
  "cafeteria": [
    "noun"
  ],
  "caffeine": [
    "noun"
  ],
  "cajole": [
    "verb",
    "noun"
  ],
  "cajoled": [
    "verb"
  ],
  "cake": [
    "noun",
    "verb"
  ],
  "cakes": [
    "noun"
  ],
  "calculate": [
    "verb"
  ],
  "calculating": [
    "adjective"
  ],
  "calculator": [
    "noun"
  ],
  "calendar": [
    "noun",
    "verb"
  ],
  "calf": [
    "noun"
  ],
  "calibrated": [
    "adjective"
  ],
  "california": [
    "noun"
  ],
  "call": [
    "verb",
    "noun"
  ],
  "callback": [
    "noun"
  ],
  "calm": [
    "adjective",
    "verb",
    "noun"
  ],
  "calving": [
    "noun"
  ],
  "camber": [
    "noun",
    "verb"
  ],
  "camelot": [
    "noun"
  ],
  "camera": [
    "noun"
  ],
  "cameraman": [
    "noun"
  ],
  "cameras": [
    "noun"
  ],
  "cameroon": [
    "noun"
  ],
  "camomile": [
    "noun"
  ],
  "camp": [
    "noun",
    "verb",
    "adjective"
  ],
  "campaign": [
    "noun",
    "verb"
  ],
  "campfire": [
    "noun"
  ],
  "campground": [
    "noun"
  ],
  "campgrounds": [
    "noun"
  ],
  "camping": [
    "noun"
  ],
  "camshaft": [
    "noun"
  ],
  "can": [
    "noun",
    "verb"
  ],
  "canberra": [
    "noun"
  ],
  "cancan": [
    "noun",
    "verb"
  ],
  "cancer": [
    "noun",
    "adjective"
  ],
  "candle": [
    "noun",
    "verb"
  ],
  "candlestick": [
    "noun",
    "verb"
  ],
  "candlesticks": [
    "noun"
  ],
  "canine": [
    "noun",
    "adjective"
  ],
  "canned": [
    "adjective"
  ],
  "cannelloni": [
    "noun"
  ],
  "cannibalism": [
    "noun"
  ],
  "cannonball": [
    "noun",
    "verb"
  ],
  "canoe": [
    "noun",
    "verb"
  ],
  "canoeing": [
    "noun"
  ],
  "canoes": [
    "noun"
  ],
  "canopy": [
    "noun",
    "verb"
  ],
  "cantaloupe": [
    "noun"
  ],
  "cantata": [
    "noun"
  ],
  "canteen": [
    "noun"
  ],
  "canteens": [
    "noun"
  ],
  "cantonese": [
    "noun",
    "adjective"
  ],
  "canvas": [
    "noun",
    "verb"
  ],
  "canyon": [
    "noun",
    "verb"
  ],
  "cap": [
    "noun",
    "verb"
  ],
  "capable": [
    "adjective"
  ],
  "capacious": [
    "adjective"
  ],
  "capacity": [
    "noun",
    "adjective"
  ],
  "cape": [
    "noun",
    "verb"
  ],
  "capital": [
    "noun",
    "adjective"
  ],
  "capitalistic": [
    "adjective"
  ],
  "capitulate": [
    "verb",
    "adjective",
    "noun"
  ],
  "capricious": [
    "adjective"
  ],
  "capsule": [
    "noun",
    "verb"
  ],
  "captain": [
    "noun",
    "verb"
  ],
  "caption": [
    "noun",
    "verb"
  ],
  "capture": [
    "verb",
    "noun"
  ],
  "caput": [
    "noun"
  ],
  "car": [
    "noun"
  ],
  "carafe": [
    "noun"
  ],
  "caravan": [
    "noun",
    "verb"
  ],
  "carbon": [
    "noun",
    "verb"
  ],
  "carboy": [
    "noun",
    "verb"
  ],
  "carburetor": [
    "noun"
  ],
  "cardboard": [
    "noun",
    "adjective"
  ],
  "cardiac": [
    "adjective",
    "noun"
  ],
  "cardinal": [
    "noun",
    "adjective"
  ],
  "cardiology": [
    "noun"
  ],
  "cardoon": [
    "noun"
  ],
  "cards": [
    "noun"
  ],
  "care": [
    "noun",
    "verb"
  ],
  "careens": [
    "verb"
  ],
  "career": [
    "noun",
    "adjective",
    "verb"
  ],
  "careering": [
    "noun"
  ],
  "careers": [
    "noun"
  ],
  "careful": [
    "adjective"
  ],
  "carefully": [
    "adverb"
  ],
  "careless": [
    "adjective"
  ],
  "cares": [
    "verb",
    "noun"
  ],
  "caress": [
    "noun",
    "verb"
  ],
  "caressing": [
    "noun"
  ],
  "cargo": [
    "noun",
    "verb"
  ],
  "carload": [
    "noun"
  ],
  "carnival": [
    "noun",
    "verb"
  ],
  "carnivore": [
    "noun"
  ],
  "carousel": [
    "noun",
    "verb"
  ],
  "carpenter": [
    "noun",
    "verb"
  ],
  "carpet": [
    "noun",
    "verb"
  ],
  "carport": [
    "noun"
  ],
  "carports": [
    "noun"
  ],
  "carried": [
    "verb"
  ],
  "carrot": [
    "noun",
    "verb"
  ],
  "carry": [
    "verb",
    "noun"
  ],
  "carrying": [
    "noun"
  ],
  "cars": [
    "noun"
  ],
  "carsick": [
    "adjective"
  ],
  "cart": [
    "noun",
    "verb"
  ],
  "carted": [
    "verb"
  ],
  "cartel": [
    "noun"
  ],
  "carting": [
    "noun"
  ],
  "cartographer": [
    "noun"
  ],
  "cartoon": [
    "noun",
    "verb"
  ],
  "cartwheel": [
    "noun",
    "verb"
  ],
  "cartwheels": [
    "noun"
  ],
  "case": [
    "noun",
    "adjective",
    "verb"
  ],
  "cases": [
    "noun"
  ],
  "casework": [
    "noun"
  ],
  "cash": [
    "noun",
    "verb",
    "adjective"
  ],
  "cashew": [
    "noun"
  ],
  "cashews": [
    "noun"
  ],
  "cashier": [
    "noun",
    "verb"
  ],
  "cashiered": [
    "verb"
  ],
  "cashiers": [
    "noun"
  ],
  "casserole": [
    "noun",
    "verb"
  ],
  "cassettes": [
    "noun"
  ],
  "cassiopeia": [
    "noun"
  ],
  "cast": [
    "verb",
    "noun",
    "adjective"
  ],
  "castaway": [
    "noun",
    "adjective"
  ],
  "caste": [
    "noun"
  ],
  "castle": [
    "noun",
    "verb"
  ],
  "cat": [
    "noun",
    "verb",
    "adjective"
  ],
  "cataclysm": [
    "noun"
  ],
  "catacomb": [
    "noun"
  ],
  "catalyst": [
    "noun"
  ],
  "catamount": [
    "noun"
  ],
  "catastrophe": [
    "noun"
  ],
  "catbird": [
    "noun"
  ],
  "catcalls": [
    "noun"
  ],
  "catch": [
    "verb",
    "noun"
  ],
  "catcher": [
    "noun"
  ],
  "catchers": [
    "noun"
  ],
  "catechism": [
    "noun"
  ],
  "categorical": [
    "adjective",
    "noun"
  ],
  "categorize": [
    "verb"
  ],
  "category": [
    "noun"
  ],
  "cathedral": [
    "noun",
    "adjective"
  ],
  "cathode": [
    "noun"
  ],
  "catholicism": [
    "noun"
  ],
  "cation": [
    "noun"
  ],
  "catnap": [
    "noun",
    "verb"
  ],
  "catwalk": [
    "noun"
  ],
  "cauliflower": [
    "noun",
    "verb"
  ],
  "caulking": [
    "noun"
  ],
  "caused": [
    "verb"
  ],
  "caution": [
    "noun",
    "verb"
  ],
  "cautious": [
    "adjective"
  ],
  "cavaliers": [
    "noun"
  ],
  "cave": [
    "noun",
    "verb"
  ],
  "caveat": [
    "noun",
    "verb"
  ],
  "caved": [
    "verb"
  ],
  "caveman": [
    "noun"
  ],
  "caviar": [
    "noun"
  ],
  "cavort": [
    "verb"
  ],
  "caw": [
    "noun",
    "verb"
  ],
  "cayenne": [
    "noun"
  ],
  "ceased": [
    "verb"
  ],
  "cede": [
    "verb"
  ],
  "ceded": [
    "verb"
  ],
  "cedes": [
    "verb",
    "noun"
  ],
  "ceiling": [
    "noun"
  ],
  "celebrate": [
    "verb"
  ],
  "celebration": [
    "noun"
  ],
  "celebratory": [
    "adjective"
  ],
  "celerity": [
    "noun"
  ],
  "cell": [
    "noun",
    "verb"
  ],
  "celluloid": [
    "noun"
  ],
  "cement": [
    "noun",
    "verb"
  ],
  "cemented": [
    "adverb"
  ],
  "cementing": [
    "noun"
  ],
  "cemetery": [
    "noun"
  ],
  "censorship": [
    "noun"
  ],
  "census": [
    "noun",
    "verb"
  ],
  "cent": [
    "noun"
  ],
  "centaur": [
    "noun"
  ],
  "centavos": [
    "noun"
  ],
  "centerfold": [
    "noun"
  ],
  "centerpiece": [
    "noun"
  ],
  "centime": [
    "noun"
  ],
  "centimes": [
    "noun"
  ],
  "centimeter": [
    "noun"
  ],
  "centimetre": [
    "noun"
  ],
  "centipede": [
    "noun"
  ],
  "central": [
    "adjective",
    "noun"
  ],
  "centrality": [
    "noun"
  ],
  "century": [
    "noun"
  ],
  "cephalopod": [
    "noun"
  ],
  "ceremony": [
    "noun"
  ],
  "cert": [
    "noun",
    "adjective"
  ],
  "certificate": [
    "noun",
    "verb"
  ],
  "cesspool": [
    "noun"
  ],
  "ceylon": [
    "noun"
  ],
  "chaff": [
    "noun",
    "verb"
  ],
  "chagrin": [
    "noun",
    "verb",
    "adjective"
  ],
  "chain": [
    "noun",
    "verb"
  ],
  "chair": [
    "noun",
    "verb"
  ],
  "chaired": [
    "verb"
  ],
  "chairing": [
    "verb"
  ],
  "chairwoman": [
    "noun"
  ],
  "chalcedony": [
    "noun"
  ],
  "chalet": [
    "noun"
  ],
  "chalk": [
    "noun",
    "verb"
  ],
  "chalked": [
    "adjective"
  ],
  "chalking": [
    "noun"
  ],
  "challenge": [
    "noun",
    "verb"
  ],
  "chameleon": [
    "noun",
    "adjective"
  ],
  "chamomile": [
    "noun"
  ],
  "champ": [
    "noun",
    "verb"
  ],
  "championship": [
    "noun"
  ],
  "championships": [
    "noun"
  ],
  "chances": [
    "noun"
  ],
  "chandelier": [
    "noun"
  ],
  "changeover": [
    "noun"
  ],
  "changes": [
    "noun"
  ],
  "changing": [
    "noun"
  ],
  "channel": [
    "noun",
    "verb"
  ],
  "chant": [
    "noun",
    "verb"
  ],
  "chaos": [
    "noun"
  ],
  "chaparral": [
    "noun"
  ],
  "chapel": [
    "noun",
    "adjective",
    "verb"
  ],
  "chaperone": [
    "noun",
    "verb"
  ],
  "chapter": [
    "noun",
    "verb"
  ],
  "character": [
    "noun",
    "verb"
  ],
  "charade": [
    "noun",
    "verb"
  ],
  "charcoal": [
    "noun",
    "adjective",
    "verb"
  ],
  "charges": [
    "noun"
  ],
  "charitable": [
    "adjective"
  ],
  "charity": [
    "noun"
  ],
  "charm": [
    "noun",
    "verb"
  ],
  "charred": [
    "adjective"
  ],
  "chart": [
    "noun",
    "verb"
  ],
  "charterhouse": [
    "noun"
  ],
  "charting": [
    "noun"
  ],
  "chase": [
    "noun",
    "verb"
  ],
  "chasm": [
    "noun"
  ],
  "chaste": [
    "adjective"
  ],
  "chat": [
    "noun",
    "verb"
  ],
  "chatter": [
    "noun",
    "verb"
  ],
  "chattering": [
    "noun",
    "adjective"
  ],
  "chauffeur": [
    "noun",
    "verb"
  ],
  "chauffeured": [
    "adjective"
  ],
  "chauffeurs": [
    "noun"
  ],
  "chauvinistic": [
    "adjective"
  ],
  "chaw": [
    "noun",
    "verb"
  ],
  "cheap": [
    "adjective",
    "verb",
    "adverb",
    "noun"
  ],
  "cheat": [
    "verb",
    "noun"
  ],
  "cheating": [
    "noun",
    "adjective"
  ],
  "check": [
    "verb",
    "noun",
    "adjective"
  ],
  "checkbook": [
    "noun"
  ],
  "checkbooks": [
    "noun"
  ],
  "checked": [
    "adjective"
  ],
  "checking": [
    "noun"
  ],
  "checklist": [
    "noun",
    "verb"
  ],
  "checkout": [
    "noun"
  ],
  "checks": [
    "noun",
    "verb"
  ],
  "cheek": [
    "noun",
    "verb"
  ],
  "cheer": [
    "noun",
    "verb"
  ],
  "cheered": [
    "verb"
  ],
  "cheerful": [
    "adjective"
  ],
  "cheese": [
    "noun",
    "verb"
  ],
  "cheesecake": [
    "noun"
  ],
  "chef": [
    "noun",
    "verb"
  ],
  "chemical": [
    "noun",
    "adjective"
  ],
  "chemistry": [
    "noun"
  ],
  "cheques": [
    "noun"
  ],
  "cherish": [
    "verb",
    "noun"
  ],
  "cherry": [
    "noun",
    "adjective",
    "verb"
  ],
  "chert": [
    "noun"
  ],
  "chessboard": [
    "noun"
  ],
  "chest": [
    "noun",
    "verb"
  ],
  "chew": [
    "verb",
    "noun"
  ],
  "chewed": [
    "adjective"
  ],
  "chewer": [
    "noun"
  ],
  "chews": [
    "verb",
    "noun"
  ],
  "cheyenne": [
    "noun"
  ],
  "chic": [
    "adjective",
    "noun"
  ],
  "chicago": [
    "noun"
  ],
  "chickasaw": [
    "noun"
  ],
  "chickasaws": [
    "noun"
  ],
  "chicken": [
    "noun",
    "adjective",
    "verb"
  ],
  "chided": [
    "verb"
  ],
  "chides": [
    "verb"
  ],
  "chief": [
    "noun",
    "adjective",
    "verb"
  ],
  "chiffon": [
    "noun"
  ],
  "child": [
    "noun",
    "verb"
  ],
  "childbearing": [
    "noun",
    "adjective"
  ],
  "childbirth": [
    "noun"
  ],
  "childlike": [
    "adjective"
  ],
  "chill": [
    "noun",
    "adjective",
    "verb"
  ],
  "chiller": [
    "noun"
  ],
  "chilling": [
    "adjective",
    "noun"
  ],
  "chime": [
    "noun",
    "verb"
  ],
  "chin": [
    "noun",
    "verb"
  ],
  "chink": [
    "noun",
    "verb",
    "adjective"
  ],
  "chinks": [
    "noun"
  ],
  "chinook": [
    "noun"
  ],
  "chinooks": [
    "noun"
  ],
  "chip": [
    "noun",
    "verb"
  ],
  "chipped": [
    "adjective"
  ],
  "chippewa": [
    "noun"
  ],
  "chit": [
    "noun",
    "verb"
  ],
  "chitchat": [
    "noun",
    "verb"
  ],
  "chits": [
    "noun"
  ],
  "chloroplast": [
    "noun"
  ],
  "chocolate": [
    "noun",
    "adjective",
    "verb"
  ],
  "choice": [
    "noun",
    "adjective"
  ],
  "choir": [
    "noun",
    "verb"
  ],
  "cholesterol": [
    "noun"
  ],
  "choose": [
    "verb",
    "noun"
  ],
  "choosing": [
    "noun"
  ],
  "chop": [
    "verb",
    "noun"
  ],
  "chopped": [
    "adjective"
  ],
  "chopstick": [
    "noun",
    "verb"
  ],
  "chopsticks": [
    "noun"
  ],
  "chorale": [
    "noun"
  ],
  "chord": [
    "noun",
    "verb"
  ],
  "chore": [
    "noun",
    "verb"
  ],
  "choreograph": [
    "verb"
  ],
  "choreographed": [
    "adjective"
  ],
  "choreographer": [
    "noun"
  ],
  "choreography": [
    "noun"
  ],
  "chorus": [
    "noun",
    "verb"
  ],
  "chose": [
    "noun"
  ],
  "chosen": [
    "adjective",
    "noun"
  ],
  "christen": [
    "noun",
    "verb",
    "adjective"
  ],
  "chromosome": [
    "noun"
  ],
  "chronicle": [
    "noun",
    "verb"
  ],
  "chronological": [
    "adjective"
  ],
  "chronology": [
    "noun"
  ],
  "chrysalis": [
    "noun",
    "verb"
  ],
  "chucking": [
    "noun"
  ],
  "chuckle": [
    "noun",
    "verb",
    "adjective"
  ],
  "chuckling": [
    "noun"
  ],
  "chums": [
    "noun"
  ],
  "church": [
    "noun",
    "verb"
  ],
  "churchgoing": [
    "noun",
    "adjective"
  ],
  "churchyard": [
    "noun"
  ],
  "churn": [
    "noun",
    "verb"
  ],
  "churned": [
    "verb"
  ],
  "churning": [
    "noun"
  ],
  "chutzpah": [
    "noun"
  ],
  "cigar": [
    "noun"
  ],
  "cigarette": [
    "noun",
    "verb"
  ],
  "cigarettes": [
    "noun",
    "verb"
  ],
  "cinema": [
    "noun"
  ],
  "cinematic": [
    "adjective",
    "noun"
  ],
  "circle": [
    "noun",
    "verb"
  ],
  "circuit": [
    "noun",
    "verb"
  ],
  "circular": [
    "adjective",
    "noun",
    "verb"
  ],
  "circulatory": [
    "adjective",
    "noun"
  ],
  "circumscribe": [
    "verb"
  ],
  "circumspect": [
    "adjective"
  ],
  "circumspection": [
    "noun"
  ],
  "circumstances": [
    "noun",
    "verb"
  ],
  "circumstantial": [
    "adjective",
    "noun"
  ],
  "circumvent": [
    "verb"
  ],
  "circumvented": [
    "verb"
  ],
  "circumventing": [
    "verb"
  ],
  "circus": [
    "noun",
    "verb"
  ],
  "cirque": [
    "noun"
  ],
  "citadel": [
    "noun"
  ],
  "citing": [
    "noun"
  ],
  "citizen": [
    "noun"
  ],
  "citizenship": [
    "noun"
  ],
  "city": [
    "noun"
  ],
  "civilian": [
    "adjective",
    "noun"
  ],
  "civilization": [
    "noun"
  ],
  "clad": [
    "verb",
    "adjective"
  ],
  "clam": [
    "noun",
    "adjective",
    "verb"
  ],
  "clampdown": [
    "noun"
  ],
  "clan": [
    "noun"
  ],
  "clang": [
    "noun",
    "verb"
  ],
  "clank": [
    "noun",
    "verb"
  ],
  "clap": [
    "noun",
    "verb"
  ],
  "claps": [
    "noun",
    "verb"
  ],
  "clarify": [
    "verb"
  ],
  "clarifying": [
    "adjective",
    "noun"
  ],
  "clarinet": [
    "noun"
  ],
  "clarity": [
    "noun"
  ],
  "clash": [
    "noun",
    "verb"
  ],
  "class": [
    "noun",
    "adjective",
    "verb"
  ],
  "classed": [
    "verb"
  ],
  "classified": [
    "adjective",
    "noun"
  ],
  "classroom": [
    "noun"
  ],
  "clatter": [
    "noun",
    "verb"
  ],
  "claw": [
    "noun",
    "verb"
  ],
  "clay": [
    "noun",
    "verb"
  ],
  "clean": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "cleaning": [
    "noun"
  ],
  "cleans": [
    "verb"
  ],
  "clear": [
    "adjective",
    "adverb",
    "verb",
    "noun"
  ],
  "cleared": [
    "adjective"
  ],
  "clearly": [
    "adverb"
  ],
  "clears": [
    "noun"
  ],
  "cleave": [
    "verb",
    "noun"
  ],
  "clench": [
    "verb",
    "noun"
  ],
  "clerk": [
    "noun",
    "verb"
  ],
  "clerks": [
    "noun",
    "verb"
  ],
  "clever": [
    "adjective",
    "noun"
  ],
  "cleverer": [
    "adjective"
  ],
  "clientele": [
    "noun"
  ],
  "clients": [
    "noun"
  ],
  "cliff": [
    "noun"
  ],
  "climate": [
    "noun",
    "verb"
  ],
  "climatic": [
    "adjective"
  ],
  "climatologist": [
    "noun"
  ],
  "climax": [
    "noun",
    "verb"
  ],
  "climb": [
    "verb",
    "noun"
  ],
  "climbing": [
    "noun",
    "adjective"
  ],
  "cling": [
    "verb",
    "noun"
  ],
  "clings": [
    "verb",
    "noun"
  ],
  "clinic": [
    "noun"
  ],
  "clip": [
    "noun",
    "verb"
  ],
  "clipboard": [
    "noun",
    "verb"
  ],
  "clipped": [
    "adjective"
  ],
  "clipper": [
    "noun",
    "verb"
  ],
  "clique": [
    "noun",
    "verb"
  ],
  "cliques": [
    "noun"
  ],
  "cloak": [
    "noun",
    "verb"
  ],
  "cloakroom": [
    "noun"
  ],
  "clock": [
    "noun",
    "verb"
  ],
  "clocks": [
    "noun"
  ],
  "clockwork": [
    "noun",
    "adjective"
  ],
  "clone": [
    "noun",
    "verb"
  ],
  "close": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "closedown": [
    "noun"
  ],
  "closer": [
    "adverb",
    "noun"
  ],
  "closes": [
    "verb"
  ],
  "closeup": [
    "noun"
  ],
  "closing": [
    "noun",
    "adjective"
  ],
  "clot": [
    "noun",
    "verb"
  ],
  "clotheshorse": [
    "noun"
  ],
  "cloud": [
    "noun",
    "verb"
  ],
  "cloudburst": [
    "noun"
  ],
  "cloudy": [
    "adjective"
  ],
  "clout": [
    "noun",
    "verb"
  ],
  "cloverleaf": [
    "noun",
    "adjective",
    "verb"
  ],
  "clown": [
    "noun",
    "verb"
  ],
  "cloy": [
    "verb",
    "noun"
  ],
  "clubhouse": [
    "noun"
  ],
  "clucking": [
    "noun",
    "adjective"
  ],
  "clue": [
    "noun",
    "verb"
  ],
  "clump": [
    "noun",
    "verb"
  ],
  "clung": [
    "adjective"
  ],
  "clunk": [
    "noun",
    "verb"
  ],
  "clutch": [
    "noun",
    "verb",
    "adjective"
  ],
  "coach": [
    "noun",
    "verb",
    "adverb"
  ],
  "coal": [
    "noun",
    "verb",
    "adjective"
  ],
  "coalescing": [
    "noun"
  ],
  "coalition": [
    "noun"
  ],
  "coast": [
    "noun",
    "verb"
  ],
  "coastline": [
    "noun"
  ],
  "coat": [
    "noun",
    "verb"
  ],
  "cob": [
    "noun",
    "verb"
  ],
  "cocaine": [
    "noun",
    "verb"
  ],
  "cock": [
    "noun",
    "verb"
  ],
  "cockpit": [
    "noun"
  ],
  "cockpits": [
    "noun"
  ],
  "cocktail": [
    "noun",
    "verb",
    "adjective"
  ],
  "coconut": [
    "noun"
  ],
  "cocoon": [
    "noun",
    "verb"
  ],
  "coeducational": [
    "adjective"
  ],
  "coerce": [
    "verb"
  ],
  "coexist": [
    "verb"
  ],
  "coffee": [
    "noun",
    "verb",
    "adjective"
  ],
  "coffeehouse": [
    "noun",
    "verb"
  ],
  "coffin": [
    "noun",
    "verb"
  ],
  "cog": [
    "noun",
    "verb"
  ],
  "cognac": [
    "noun"
  ],
  "cohered": [
    "verb"
  ],
  "coheres": [
    "verb"
  ],
  "cohesion": [
    "noun"
  ],
  "coil": [
    "noun",
    "verb"
  ],
  "coiling": [
    "noun"
  ],
  "coin": [
    "noun",
    "verb"
  ],
  "coincidence": [
    "noun"
  ],
  "coincidental": [
    "adjective"
  ],
  "coincides": [
    "verb"
  ],
  "cold": [
    "adjective",
    "noun",
    "adverb"
  ],
  "coleslaw": [
    "noun"
  ],
  "collaborate": [
    "verb"
  ],
  "collaborator": [
    "noun"
  ],
  "collapse": [
    "noun",
    "verb"
  ],
  "collar": [
    "noun",
    "verb"
  ],
  "collarbone": [
    "noun"
  ],
  "collect": [
    "verb",
    "adjective",
    "adverb",
    "noun"
  ],
  "college": [
    "noun"
  ],
  "collide": [
    "verb"
  ],
  "collided": [
    "verb"
  ],
  "collides": [
    "verb"
  ],
  "collision": [
    "noun"
  ],
  "colloquy": [
    "noun",
    "verb"
  ],
  "cologne": [
    "noun",
    "verb"
  ],
  "colonialism": [
    "noun"
  ],
  "colonizer": [
    "noun"
  ],
  "colonnade": [
    "noun"
  ],
  "colony": [
    "noun",
    "verb"
  ],
  "color": [
    "noun",
    "adjective",
    "verb"
  ],
  "colorfast": [
    "adjective"
  ],
  "colouring": [
    "noun",
    "adjective"
  ],
  "coltsfoot": [
    "noun"
  ],
  "columnist": [
    "noun"
  ],
  "comb": [
    "noun",
    "verb"
  ],
  "combination": [
    "noun"
  ],
  "combine": [
    "verb",
    "noun"
  ],
  "combined": [
    "adjective",
    "noun"
  ],
  "combust": [
    "noun",
    "verb",
    "adjective"
  ],
  "comeback": [
    "noun",
    "verb"
  ],
  "comebacks": [
    "noun"
  ],
  "comedienne": [
    "noun"
  ],
  "comedown": [
    "noun"
  ],
  "comedy": [
    "noun"
  ],
  "comet": [
    "noun"
  ],
  "comfort": [
    "noun",
    "verb"
  ],
  "comfortable": [
    "adjective",
    "noun"
  ],
  "comforter": [
    "noun"
  ],
  "comma": [
    "noun",
    "verb"
  ],
  "command": [
    "noun",
    "verb"
  ],
  "commandeer": [
    "verb"
  ],
  "commandeered": [
    "verb"
  ],
  "commander": [
    "noun"
  ],
  "commandos": [
    "noun"
  ],
  "commands": [
    "noun",
    "verb"
  ],
  "commemorate": [
    "verb",
    "adjective"
  ],
  "commemoration": [
    "noun"
  ],
  "commence": [
    "verb"
  ],
  "commenced": [
    "verb"
  ],
  "commend": [
    "verb",
    "noun"
  ],
  "commends": [
    "verb"
  ],
  "comment": [
    "noun",
    "verb"
  ],
  "commentary": [
    "noun"
  ],
  "commentator": [
    "noun"
  ],
  "commingle": [
    "verb"
  ],
  "commissar": [
    "noun"
  ],
  "commission": [
    "noun",
    "verb"
  ],
  "commit": [
    "verb",
    "noun"
  ],
  "commits": [
    "verb"
  ],
  "committed": [
    "adjective"
  ],
  "committing": [
    "noun"
  ],
  "commode": [
    "noun"
  ],
  "commonality": [
    "noun"
  ],
  "commonplace": [
    "adjective",
    "noun",
    "verb"
  ],
  "commonsense": [
    "noun",
    "adjective"
  ],
  "communicate": [
    "verb",
    "adjective"
  ],
  "communicating": [
    "adjective"
  ],
  "communication": [
    "noun"
  ],
  "communicator": [
    "noun"
  ],
  "community": [
    "noun"
  ],
  "commute": [
    "noun",
    "verb"
  ],
  "companies": [
    "noun"
  ],
  "companion": [
    "noun",
    "verb"
  ],
  "companionship": [
    "noun"
  ],
  "company": [
    "noun",
    "verb"
  ],
  "compare": [
    "verb",
    "noun"
  ],
  "compartmental": [
    "adjective"
  ],
  "compass": [
    "noun",
    "verb",
    "adverb"
  ],
  "compel": [
    "verb"
  ],
  "compensate": [
    "verb"
  ],
  "compensated": [
    "adjective"
  ],
  "compete": [
    "verb"
  ],
  "competing": [
    "adjective"
  ],
  "competition": [
    "noun"
  ],
  "competitive": [
    "adjective"
  ],
  "compile": [
    "verb",
    "noun"
  ],
  "compiles": [
    "verb"
  ],
  "complain": [
    "verb"
  ],
  "complemented": [
    "adjective"
  ],
  "complementing": [
    "verb"
  ],
  "complete": [
    "adjective",
    "verb",
    "noun"
  ],
  "completing": [
    "adjective"
  ],
  "complex": [
    "adjective",
    "noun",
    "verb"
  ],
  "complexion": [
    "noun",
    "verb"
  ],
  "complicate": [
    "verb",
    "adjective"
  ],
  "complicity": [
    "noun"
  ],
  "compliment": [
    "noun",
    "verb"
  ],
  "complying": [
    "adjective"
  ],
  "comport": [
    "verb",
    "noun"
  ],
  "compose": [
    "verb"
  ],
  "composition": [
    "noun"
  ],
  "compound": [
    "noun",
    "adjective",
    "verb"
  ],
  "comprehend": [
    "verb"
  ],
  "comprehends": [
    "verb"
  ],
  "comprehension": [
    "noun"
  ],
  "comprehensive": [
    "adjective",
    "noun"
  ],
  "compress": [
    "verb",
    "noun"
  ],
  "compressed": [
    "adjective"
  ],
  "compressing": [
    "noun"
  ],
  "compression": [
    "noun"
  ],
  "compromise": [
    "noun",
    "verb"
  ],
  "compromiser": [
    "noun"
  ],
  "computational": [
    "adjective"
  ],
  "compute": [
    "verb",
    "noun"
  ],
  "computer": [
    "noun",
    "verb"
  ],
  "con": [
    "noun",
    "verb",
    "adjective"
  ],
  "concave": [
    "adjective",
    "noun",
    "verb"
  ],
  "conceal": [
    "verb"
  ],
  "conceals": [
    "verb"
  ],
  "concede": [
    "verb"
  ],
  "concedes": [
    "verb"
  ],
  "conceit": [
    "noun",
    "verb"
  ],
  "conceive": [
    "verb"
  ],
  "conceiving": [
    "noun"
  ],
  "concentrating": [
    "verb"
  ],
  "concerned": [
    "adjective"
  ],
  "concert": [
    "noun",
    "verb"
  ],
  "concertina": [
    "noun",
    "verb"
  ],
  "concession": [
    "noun",
    "verb"
  ],
  "concise": [
    "adjective",
    "verb"
  ],
  "conclave": [
    "noun",
    "verb"
  ],
  "conclude": [
    "verb"
  ],
  "concord": [
    "noun",
    "verb"
  ],
  "concourse": [
    "noun"
  ],
  "concrete": [
    "adjective",
    "noun",
    "verb"
  ],
  "concretely": [
    "adverb"
  ],
  "concubine": [
    "noun"
  ],
  "concur": [
    "verb"
  ],
  "concurred": [
    "verb"
  ],
  "concurs": [
    "verb"
  ],
  "condemn": [
    "verb"
  ],
  "condense": [
    "verb",
    "adjective"
  ],
  "condensed": [
    "adjective"
  ],
  "condescend": [
    "verb"
  ],
  "condescension": [
    "noun"
  ],
  "condition": [
    "noun",
    "verb"
  ],
  "conditionality": [
    "noun"
  ],
  "condone": [
    "verb"
  ],
  "condor": [
    "noun"
  ],
  "conduct": [
    "noun",
    "verb"
  ],
  "coneflower": [
    "noun"
  ],
  "confection": [
    "noun",
    "verb"
  ],
  "conference": [
    "noun",
    "verb"
  ],
  "conferred": [
    "adjective"
  ],
  "confers": [
    "verb"
  ],
  "confess": [
    "verb"
  ],
  "confessed": [
    "adjective"
  ],
  "confession": [
    "noun"
  ],
  "confidante": [
    "noun"
  ],
  "confidants": [
    "noun"
  ],
  "confided": [
    "verb"
  ],
  "confidence": [
    "noun"
  ],
  "confident": [
    "adjective",
    "noun"
  ],
  "confidential": [
    "adjective"
  ],
  "confides": [
    "verb"
  ],
  "confine": [
    "verb",
    "noun"
  ],
  "confined": [
    "adjective"
  ],
  "confirm": [
    "verb",
    "adverb"
  ],
  "conflict": [
    "noun",
    "verb"
  ],
  "conform": [
    "verb"
  ],
  "confound": [
    "verb",
    "noun"
  ],
  "confounds": [
    "verb",
    "noun"
  ],
  "confront": [
    "verb"
  ],
  "confrontational": [
    "adjective"
  ],
  "confucian": [
    "adjective",
    "noun"
  ],
  "confuse": [
    "verb",
    "adjective"
  ],
  "confused": [
    "adjective"
  ],
  "confusing": [
    "adjective"
  ],
  "confusion": [
    "noun"
  ],
  "congeal": [
    "verb"
  ],
  "congealed": [
    "adjective"
  ],
  "congeniality": [
    "noun"
  ],
  "congestion": [
    "noun"
  ],
  "congratulate": [
    "verb"
  ],
  "congratulations": [
    "noun"
  ],
  "congratulatory": [
    "adjective"
  ],
  "congregational": [
    "adjective"
  ],
  "congresswoman": [
    "noun"
  ],
  "congruent": [
    "adjective"
  ],
  "conic": [
    "adjective",
    "noun"
  ],
  "conjoin": [
    "verb",
    "noun"
  ],
  "connect": [
    "verb",
    "noun"
  ],
  "connected": [
    "adjective"
  ],
  "connecter": [
    "noun"
  ],
  "connection": [
    "noun"
  ],
  "connective": [
    "adjective",
    "noun"
  ],
  "connector": [
    "noun"
  ],
  "connexion": [
    "noun"
  ],
  "connive": [
    "verb"
  ],
  "connoisseur": [
    "noun"
  ],
  "connoisseurs": [
    "noun"
  ],
  "connotational": [
    "adjective"
  ],
  "conscientious": [
    "adjective"
  ],
  "conscript": [
    "noun",
    "adjective",
    "verb"
  ],
  "consent": [
    "noun",
    "verb"
  ],
  "consequence": [
    "noun",
    "verb"
  ],
  "consequential": [
    "adjective"
  ],
  "consider": [
    "verb"
  ],
  "considered": [
    "adjective"
  ],
  "consigned": [
    "verb"
  ],
  "consist": [
    "verb",
    "noun"
  ],
  "consoled": [
    "verb"
  ],
  "consolidate": [
    "verb",
    "adjective"
  ],
  "consolidated": [
    "adjective"
  ],
  "consort": [
    "noun",
    "verb",
    "adjective"
  ],
  "consortium": [
    "noun"
  ],
  "conspicuous": [
    "adjective"
  ],
  "conspire": [
    "verb"
  ],
  "constant": [
    "adjective",
    "noun"
  ],
  "constellation": [
    "noun"
  ],
  "constipated": [
    "adjective"
  ],
  "constitute": [
    "verb",
    "noun"
  ],
  "constitutional": [
    "adjective",
    "noun"
  ],
  "constrain": [
    "verb"
  ],
  "constrict": [
    "verb"
  ],
  "constriction": [
    "noun"
  ],
  "construct": [
    "verb",
    "noun"
  ],
  "construed": [
    "verb"
  ],
  "consume": [
    "verb"
  ],
  "consumerism": [
    "noun"
  ],
  "consummated": [
    "adjective"
  ],
  "contagious": [
    "adjective"
  ],
  "contain": [
    "verb"
  ],
  "contemn": [
    "verb"
  ],
  "contemplate": [
    "verb"
  ],
  "contemplating": [
    "verb"
  ],
  "contemporary": [
    "adjective",
    "noun"
  ],
  "contend": [
    "verb"
  ],
  "contends": [
    "verb"
  ],
  "contention": [
    "noun"
  ],
  "contentious": [
    "adjective"
  ],
  "contest": [
    "noun",
    "verb"
  ],
  "contextual": [
    "adjective"
  ],
  "continent": [
    "noun",
    "adjective"
  ],
  "continue": [
    "verb",
    "noun"
  ],
  "continues": [
    "verb"
  ],
  "continuous": [
    "adjective"
  ],
  "contort": [
    "verb"
  ],
  "contorts": [
    "verb"
  ],
  "contour": [
    "noun",
    "verb"
  ],
  "contours": [
    "noun"
  ],
  "contraband": [
    "adjective",
    "noun",
    "verb"
  ],
  "contrabassoon": [
    "noun"
  ],
  "contract": [
    "noun",
    "verb",
    "adjective"
  ],
  "contradict": [
    "verb"
  ],
  "contrast": [
    "noun",
    "verb"
  ],
  "contribute": [
    "verb"
  ],
  "contrive": [
    "verb"
  ],
  "control": [
    "noun",
    "verb"
  ],
  "controlled": [
    "adjective"
  ],
  "convection": [
    "noun"
  ],
  "convenes": [
    "verb"
  ],
  "convenient": [
    "adjective"
  ],
  "convention": [
    "noun"
  ],
  "conventional": [
    "adjective",
    "noun"
  ],
  "conventioneers": [
    "noun"
  ],
  "converge": [
    "verb"
  ],
  "conversation": [
    "noun",
    "verb"
  ],
  "conversational": [
    "adjective"
  ],
  "conversed": [
    "verb"
  ],
  "convert": [
    "verb",
    "noun"
  ],
  "converter": [
    "noun"
  ],
  "convex": [
    "noun",
    "adjective",
    "verb"
  ],
  "convey": [
    "verb"
  ],
  "conveyer": [
    "noun"
  ],
  "conveying": [
    "noun"
  ],
  "conveyor": [
    "noun"
  ],
  "convinced": [
    "adjective"
  ],
  "convoke": [
    "verb"
  ],
  "convolution": [
    "noun"
  ],
  "convoy": [
    "noun",
    "verb"
  ],
  "cook": [
    "noun",
    "verb"
  ],
  "cookbook": [
    "noun"
  ],
  "cookbooks": [
    "noun"
  ],
  "cooked": [
    "adjective"
  ],
  "cookie": [
    "noun",
    "verb"
  ],
  "cooking": [
    "noun",
    "adjective"
  ],
  "cookout": [
    "noun"
  ],
  "cool": [
    "adjective",
    "verb",
    "noun"
  ],
  "cooperate": [
    "verb"
  ],
  "cooperated": [
    "verb"
  ],
  "cooperating": [
    "verb"
  ],
  "cooperation": [
    "noun"
  ],
  "coordinate": [
    "verb",
    "noun",
    "adjective"
  ],
  "coordinator": [
    "noun"
  ],
  "coos": [
    "noun",
    "verb"
  ],
  "coot": [
    "noun"
  ],
  "cop": [
    "noun",
    "verb"
  ],
  "copped": [
    "adjective"
  ],
  "copper": [
    "noun",
    "adjective",
    "verb"
  ],
  "cops": [
    "noun"
  ],
  "copycat": [
    "adjective",
    "noun",
    "verb"
  ],
  "copywriter": [
    "noun"
  ],
  "corduroy": [
    "noun",
    "adjective",
    "verb"
  ],
  "core": [
    "noun",
    "adjective",
    "verb"
  ],
  "coriander": [
    "noun"
  ],
  "corm": [
    "noun"
  ],
  "corn": [
    "noun",
    "verb"
  ],
  "cornbread": [
    "noun"
  ],
  "corncob": [
    "noun",
    "verb"
  ],
  "corneal": [
    "adjective"
  ],
  "corner": [
    "noun",
    "verb"
  ],
  "cornerstone": [
    "noun"
  ],
  "cornflower": [
    "noun",
    "adjective"
  ],
  "cornflowers": [
    "noun"
  ],
  "cornmeal": [
    "noun"
  ],
  "cornstalk": [
    "noun"
  ],
  "coronets": [
    "noun"
  ],
  "corporation": [
    "noun"
  ],
  "corps": [
    "noun"
  ],
  "correct": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "correction": [
    "noun"
  ],
  "corrective": [
    "adjective",
    "noun"
  ],
  "correlated": [
    "adjective"
  ],
  "correspond": [
    "verb"
  ],
  "corroborate": [
    "verb",
    "adjective"
  ],
  "corrode": [
    "verb"
  ],
  "corticosteroid": [
    "noun"
  ],
  "corvette": [
    "noun"
  ],
  "corvettes": [
    "noun"
  ],
  "cosmetic": [
    "adjective",
    "noun"
  ],
  "cosmetology": [
    "noun"
  ],
  "cosmonaut": [
    "noun"
  ],
  "cost": [
    "noun",
    "verb"
  ],
  "costly": [
    "adjective"
  ],
  "costume": [
    "noun",
    "verb"
  ],
  "cot": [
    "noun"
  ],
  "cottage": [
    "noun",
    "verb"
  ],
  "cotton": [
    "noun",
    "adjective",
    "verb"
  ],
  "cottonwood": [
    "noun"
  ],
  "couch": [
    "noun",
    "verb"
  ],
  "cough": [
    "noun",
    "verb"
  ],
  "councilmen": [
    "noun"
  ],
  "councilwoman": [
    "noun"
  ],
  "councilwomen": [
    "noun"
  ],
  "counselor": [
    "noun"
  ],
  "count": [
    "noun",
    "verb",
    "adjective"
  ],
  "countdown": [
    "noun",
    "verb"
  ],
  "counteract": [
    "verb",
    "noun"
  ],
  "counterattack": [
    "noun",
    "verb"
  ],
  "counterattacking": [
    "verb",
    "noun"
  ],
  "countercharge": [
    "noun",
    "verb"
  ],
  "counterclaim": [
    "noun",
    "verb"
  ],
  "counterfeit": [
    "adjective",
    "noun",
    "verb"
  ],
  "counterfeited": [
    "verb",
    "adjective"
  ],
  "counterfeiting": [
    "noun"
  ],
  "counterfeits": [
    "noun",
    "verb"
  ],
  "counteroffer": [
    "noun",
    "verb"
  ],
  "counterpart": [
    "noun",
    "verb"
  ],
  "counterproductive": [
    "adjective"
  ],
  "counterrevolution": [
    "noun"
  ],
  "counterstrike": [
    "noun",
    "verb"
  ],
  "countervailing": [
    "adjective"
  ],
  "counting": [
    "noun"
  ],
  "country": [
    "noun",
    "adjective"
  ],
  "countryfolk": [
    "noun"
  ],
  "countryside": [
    "noun"
  ],
  "county": [
    "noun",
    "adjective"
  ],
  "coupon": [
    "noun",
    "verb"
  ],
  "courage": [
    "noun",
    "verb"
  ],
  "courageous": [
    "adjective"
  ],
  "course": [
    "noun",
    "verb",
    "adverb"
  ],
  "court": [
    "noun",
    "verb"
  ],
  "courthouse": [
    "noun"
  ],
  "courtroom": [
    "noun"
  ],
  "courtship": [
    "noun"
  ],
  "courtyard": [
    "noun"
  ],
  "cousin": [
    "noun",
    "verb"
  ],
  "coveralls": [
    "noun"
  ],
  "covered": [
    "adjective"
  ],
  "covet": [
    "verb"
  ],
  "cow": [
    "noun",
    "verb"
  ],
  "cowbell": [
    "noun"
  ],
  "cowed": [
    "adjective"
  ],
  "cowgirls": [
    "noun",
    "verb"
  ],
  "crab": [
    "noun",
    "verb"
  ],
  "crack": [
    "noun",
    "verb",
    "adjective"
  ],
  "crackdown": [
    "noun"
  ],
  "cracker": [
    "noun"
  ],
  "crackpot": [
    "adjective",
    "noun"
  ],
  "craftsmanship": [
    "noun"
  ],
  "crag": [
    "noun"
  ],
  "crammer": [
    "noun"
  ],
  "cranks": [
    "noun"
  ],
  "crankshaft": [
    "noun",
    "verb"
  ],
  "crappy": [
    "adjective"
  ],
  "craps": [
    "noun"
  ],
  "crate": [
    "noun",
    "verb"
  ],
  "crater": [
    "noun",
    "verb"
  ],
  "crave": [
    "verb",
    "noun"
  ],
  "craved": [
    "adjective"
  ],
  "crawl": [
    "verb",
    "noun"
  ],
  "crawled": [
    "verb"
  ],
  "crawling": [
    "noun"
  ],
  "crawls": [
    "verb"
  ],
  "crayon": [
    "noun",
    "verb"
  ],
  "craze": [
    "noun",
    "verb"
  ],
  "crazy": [
    "adjective",
    "adverb",
    "noun"
  ],
  "creak": [
    "noun",
    "verb"
  ],
  "creaking": [
    "noun"
  ],
  "cream": [
    "noun",
    "verb",
    "adjective"
  ],
  "creams": [
    "noun"
  ],
  "crease": [
    "noun",
    "verb"
  ],
  "create": [
    "verb",
    "adjective"
  ],
  "creation": [
    "noun"
  ],
  "creator": [
    "noun"
  ],
  "creche": [
    "noun"
  ],
  "credential": [
    "noun",
    "adjective",
    "verb"
  ],
  "credit": [
    "noun",
    "verb"
  ],
  "creed": [
    "noun",
    "verb"
  ],
  "creeds": [
    "noun"
  ],
  "creek": [
    "noun",
    "adjective"
  ],
  "creep": [
    "noun",
    "verb"
  ],
  "creosote": [
    "noun",
    "verb"
  ],
  "crest": [
    "noun",
    "verb"
  ],
  "crevasse": [
    "noun",
    "verb"
  ],
  "crew": [
    "noun",
    "verb"
  ],
  "crewman": [
    "noun"
  ],
  "cricket": [
    "noun",
    "verb"
  ],
  "cried": [
    "verb"
  ],
  "cries": [
    "noun",
    "verb"
  ],
  "crime": [
    "noun",
    "verb"
  ],
  "crimea": [
    "noun"
  ],
  "criminal": [
    "adjective",
    "noun"
  ],
  "criminology": [
    "noun"
  ],
  "crimson": [
    "adjective",
    "noun",
    "verb"
  ],
  "cringe": [
    "verb",
    "noun",
    "adjective"
  ],
  "crisper": [
    "noun"
  ],
  "crisscross": [
    "verb",
    "adjective",
    "noun",
    "adverb"
  ],
  "criteria": [
    "noun"
  ],
  "criterion": [
    "noun"
  ],
  "critic": [
    "noun",
    "verb"
  ],
  "criticality": [
    "noun"
  ],
  "criticize": [
    "verb"
  ],
  "critique": [
    "noun",
    "verb"
  ],
  "critiques": [
    "noun"
  ],
  "critiquing": [
    "verb",
    "noun"
  ],
  "croat": [
    "noun",
    "adjective"
  ],
  "crocheting": [
    "noun"
  ],
  "crocodile": [
    "noun",
    "verb"
  ],
  "crocodiles": [
    "noun",
    "verb"
  ],
  "crocodilian": [
    "adjective",
    "noun"
  ],
  "croissants": [
    "noun"
  ],
  "crony": [
    "noun"
  ],
  "crop": [
    "noun",
    "verb"
  ],
  "cropped": [
    "adjective"
  ],
  "crosse": [
    "noun"
  ],
  "crossover": [
    "noun",
    "adjective"
  ],
  "crosspiece": [
    "noun"
  ],
  "crossroad": [
    "noun"
  ],
  "crosstalk": [
    "noun",
    "verb"
  ],
  "crosstown": [
    "adjective"
  ],
  "crosswalk": [
    "noun",
    "verb"
  ],
  "crosswalks": [
    "noun"
  ],
  "crossword": [
    "noun"
  ],
  "crosswords": [
    "noun"
  ],
  "crouch": [
    "noun",
    "verb"
  ],
  "croup": [
    "noun",
    "verb"
  ],
  "crow": [
    "noun",
    "verb",
    "adjective"
  ],
  "crowbar": [
    "noun",
    "verb"
  ],
  "crowd": [
    "noun",
    "verb"
  ],
  "crowed": [
    "verb"
  ],
  "crowing": [
    "noun"
  ],
  "crown": [
    "noun",
    "adjective",
    "verb"
  ],
  "crowned": [
    "adjective"
  ],
  "crows": [
    "noun"
  ],
  "crucifix": [
    "noun"
  ],
  "crude": [
    "adjective",
    "noun"
  ],
  "cruel": [
    "adjective",
    "adverb",
    "verb",
    "noun"
  ],
  "cruised": [
    "verb"
  ],
  "cruising": [
    "noun"
  ],
  "crumble": [
    "verb",
    "noun"
  ],
  "crumbs": [
    "noun"
  ],
  "crusade": [
    "noun",
    "verb"
  ],
  "crush": [
    "verb",
    "noun"
  ],
  "crustaceous": [
    "adjective"
  ],
  "crutch": [
    "noun",
    "verb"
  ],
  "cry": [
    "noun",
    "verb"
  ],
  "cryptic": [
    "adjective",
    "noun"
  ],
  "crystal": [
    "adjective",
    "noun"
  ],
  "crystallography": [
    "noun"
  ],
  "cubbyhole": [
    "noun",
    "verb"
  ],
  "cucumber": [
    "noun"
  ],
  "cuddle": [
    "verb",
    "noun"
  ],
  "cues": [
    "noun"
  ],
  "cufflink": [
    "noun"
  ],
  "cuisine": [
    "noun"
  ],
  "cuisines": [
    "noun"
  ],
  "culinary": [
    "adjective"
  ],
  "culpability": [
    "noun"
  ],
  "culture": [
    "noun",
    "verb"
  ],
  "cum": [
    "noun",
    "adjective",
    "verb"
  ],
  "cumin": [
    "noun"
  ],
  "cuneiform": [
    "noun",
    "adjective"
  ],
  "cunt": [
    "noun",
    "verb",
    "adjective"
  ],
  "cup": [
    "noun",
    "verb"
  ],
  "cupboard": [
    "noun",
    "verb"
  ],
  "cupcake": [
    "noun",
    "verb"
  ],
  "cupcakes": [
    "noun"
  ],
  "cur": [
    "noun"
  ],
  "curacao": [
    "noun"
  ],
  "curator": [
    "noun"
  ],
  "curatorial": [
    "adjective"
  ],
  "curb": [
    "noun",
    "verb"
  ],
  "curds": [
    "noun"
  ],
  "cures": [
    "noun",
    "verb"
  ],
  "curing": [
    "noun"
  ],
  "curiosity": [
    "noun"
  ],
  "curious": [
    "adjective"
  ],
  "curl": [
    "noun",
    "verb"
  ],
  "currency": [
    "noun"
  ],
  "current": [
    "adjective",
    "noun"
  ],
  "curricula": [
    "noun"
  ],
  "curricular": [
    "adjective"
  ],
  "curriculum": [
    "noun"
  ],
  "curried": [
    "adjective"
  ],
  "curse": [
    "noun",
    "verb"
  ],
  "curtailing": [
    "noun"
  ],
  "curtain": [
    "noun",
    "verb"
  ],
  "curve": [
    "noun",
    "verb",
    "adjective"
  ],
  "cushion": [
    "noun",
    "verb"
  ],
  "cushitic": [
    "adjective",
    "noun"
  ],
  "cussed": [
    "adjective",
    "adverb"
  ],
  "custody": [
    "noun"
  ],
  "custom": [
    "noun",
    "adjective",
    "verb"
  ],
  "customary": [
    "adjective",
    "noun"
  ],
  "customer": [
    "noun"
  ],
  "customers": [
    "noun"
  ],
  "cutbacks": [
    "noun"
  ],
  "cute": [
    "adjective"
  ],
  "cutoff": [
    "noun",
    "adjective"
  ],
  "cutout": [
    "noun"
  ],
  "cutthroat": [
    "adjective",
    "noun"
  ],
  "cuttlefish": [
    "noun"
  ],
  "cutworm": [
    "noun"
  ],
  "cyclades": [
    "noun"
  ],
  "cyclamen": [
    "noun"
  ],
  "cycling": [
    "noun",
    "adjective"
  ],
  "cyclone": [
    "noun",
    "verb"
  ],
  "cyclopean": [
    "adjective"
  ],
  "cyclostome": [
    "noun"
  ],
  "cymbal": [
    "noun"
  ],
  "cynical": [
    "adjective"
  ],
  "cynicism": [
    "noun"
  ],
  "cynosure": [
    "noun"
  ],
  "cyst": [
    "noun"
  ],
  "cystic": [
    "adjective"
  ],
  "cytherea": [
    "noun"
  ],
  "czechs": [
    "noun",
    "adjective"
  ],
  "dab": [
    "noun",
    "verb",
    "adverb",
    "adjective"
  ],
  "dad": [
    "noun",
    "verb"
  ],
  "daffodil": [
    "noun",
    "adjective"
  ],
  "dag": [
    "noun",
    "verb"
  ],
  "dah": [
    "noun"
  ],
  "daikon": [
    "noun"
  ],
  "dairy": [
    "noun",
    "adjective"
  ],
  "daisy": [
    "noun"
  ],
  "dal": [
    "noun"
  ],
  "daleth": [
    "noun"
  ],
  "dali": [
    "noun"
  ],
  "dam": [
    "noun",
    "verb",
    "adjective"
  ],
  "damage": [
    "noun",
    "verb"
  ],
  "damp": [
    "adjective",
    "verb",
    "noun"
  ],
  "dance": [
    "noun",
    "verb"
  ],
  "dancer": [
    "noun"
  ],
  "dancing": [
    "noun"
  ],
  "danger": [
    "noun",
    "verb"
  ],
  "dank": [
    "adjective",
    "noun",
    "verb"
  ],
  "dare": [
    "verb",
    "noun"
  ],
  "daring": [
    "adjective",
    "noun"
  ],
  "darjeeling": [
    "noun"
  ],
  "dark": [
    "adjective",
    "noun",
    "verb"
  ],
  "darkness": [
    "noun"
  ],
  "darkroom": [
    "noun"
  ],
  "dart": [
    "noun",
    "verb"
  ],
  "darted": [
    "verb"
  ],
  "dash": [
    "noun",
    "verb"
  ],
  "dashboard": [
    "noun",
    "verb"
  ],
  "dat": [
    "noun",
    "adverb"
  ],
  "data": [
    "noun"
  ],
  "database": [
    "noun",
    "verb"
  ],
  "date": [
    "noun",
    "verb"
  ],
  "daughter": [
    "noun"
  ],
  "daunted": [
    "adjective"
  ],
  "dawdle": [
    "verb",
    "noun"
  ],
  "dawn": [
    "noun",
    "verb"
  ],
  "day": [
    "noun",
    "verb"
  ],
  "daybreak": [
    "noun"
  ],
  "daydream": [
    "noun",
    "verb"
  ],
  "daydreaming": [
    "noun"
  ],
  "daydreams": [
    "noun"
  ],
  "daylight": [
    "noun",
    "verb"
  ],
  "daytime": [
    "adjective",
    "noun"
  ],
  "daytimes": [
    "adverb"
  ],
  "daze": [
    "noun",
    "verb"
  ],
  "dead": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "deadbeat": [
    "adjective",
    "noun"
  ],
  "deadline": [
    "noun",
    "verb"
  ],
  "deadlock": [
    "noun",
    "verb"
  ],
  "deadwood": [
    "noun"
  ],
  "dealership": [
    "noun"
  ],
  "dealerships": [
    "noun"
  ],
  "dealfish": [
    "noun"
  ],
  "deals": [
    "noun",
    "verb",
    "adjective"
  ],
  "dear": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "deathbed": [
    "noun"
  ],
  "debase": [
    "verb"
  ],
  "debased": [
    "adjective"
  ],
  "debasing": [
    "noun"
  ],
  "debate": [
    "noun",
    "verb"
  ],
  "debating": [
    "noun"
  ],
  "debited": [
    "verb"
  ],
  "debt": [
    "noun"
  ],
  "debts": [
    "noun"
  ],
  "debug": [
    "noun",
    "verb"
  ],
  "debunk": [
    "verb",
    "noun"
  ],
  "debut": [
    "noun",
    "verb"
  ],
  "debutantes": [
    "noun"
  ],
  "debuting": [
    "verb"
  ],
  "decade": [
    "noun"
  ],
  "decathlon": [
    "noun"
  ],
  "decaying": [
    "noun"
  ],
  "decease": [
    "noun",
    "verb"
  ],
  "deceased": [
    "adjective",
    "noun"
  ],
  "deceit": [
    "noun"
  ],
  "deceive": [
    "verb"
  ],
  "deceiving": [
    "noun"
  ],
  "deception": [
    "noun"
  ],
  "decide": [
    "verb"
  ],
  "decides": [
    "verb"
  ],
  "deciliter": [
    "noun"
  ],
  "decision": [
    "noun",
    "verb"
  ],
  "deck": [
    "noun",
    "verb"
  ],
  "decked": [
    "adjective"
  ],
  "decks": [
    "noun"
  ],
  "declaim": [
    "verb"
  ],
  "declaration": [
    "noun"
  ],
  "declare": [
    "verb"
  ],
  "declension": [
    "noun"
  ],
  "decline": [
    "noun",
    "verb"
  ],
  "declined": [
    "adjective"
  ],
  "decode": [
    "verb",
    "noun"
  ],
  "decomposed": [
    "adjective"
  ],
  "decompress": [
    "verb"
  ],
  "decompression": [
    "noun"
  ],
  "decorating": [
    "noun"
  ],
  "decorator": [
    "noun"
  ],
  "decouple": [
    "verb"
  ],
  "decoy": [
    "noun",
    "verb"
  ],
  "decrease": [
    "noun",
    "verb"
  ],
  "decreased": [
    "adjective"
  ],
  "decreed": [
    "adjective"
  ],
  "dedicate": [
    "verb",
    "noun",
    "adjective"
  ],
  "deduce": [
    "verb"
  ],
  "deduct": [
    "verb"
  ],
  "deep": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "deeply": [
    "adverb"
  ],
  "deer": [
    "noun"
  ],
  "deerskin": [
    "noun"
  ],
  "deface": [
    "verb"
  ],
  "defaced": [
    "adjective"
  ],
  "defacing": [
    "noun"
  ],
  "defame": [
    "verb",
    "noun",
    "adjective"
  ],
  "defeat": [
    "noun",
    "verb"
  ],
  "defeating": [
    "verb",
    "adjective",
    "noun"
  ],
  "defection": [
    "noun"
  ],
  "defector": [
    "noun"
  ],
  "defend": [
    "verb"
  ],
  "defender": [
    "noun"
  ],
  "defends": [
    "verb"
  ],
  "defer": [
    "verb"
  ],
  "deferred": [
    "adjective",
    "noun"
  ],
  "defers": [
    "verb"
  ],
  "defibrillator": [
    "noun"
  ],
  "deficient": [
    "adjective",
    "noun"
  ],
  "define": [
    "verb",
    "noun"
  ],
  "defined": [
    "adjective"
  ],
  "definition": [
    "noun"
  ],
  "deflect": [
    "verb"
  ],
  "deflection": [
    "noun"
  ],
  "deflector": [
    "noun"
  ],
  "deform": [
    "verb",
    "adjective"
  ],
  "defraud": [
    "verb"
  ],
  "defuse": [
    "verb"
  ],
  "defused": [
    "verb"
  ],
  "defusing": [
    "noun"
  ],
  "defying": [
    "adjective"
  ],
  "degree": [
    "noun"
  ],
  "degrees": [
    "noun"
  ],
  "delay": [
    "noun",
    "verb"
  ],
  "delayed": [
    "adjective"
  ],
  "delaying": [
    "noun"
  ],
  "delays": [
    "noun",
    "verb"
  ],
  "delegated": [
    "verb"
  ],
  "delete": [
    "verb",
    "noun"
  ],
  "deleting": [
    "verb"
  ],
  "delicate": [
    "adjective",
    "noun"
  ],
  "delicious": [
    "adjective"
  ],
  "delight": [
    "noun",
    "verb"
  ],
  "delightful": [
    "adjective"
  ],
  "delighting": [
    "verb"
  ],
  "delirious": [
    "adjective"
  ],
  "delist": [
    "verb"
  ],
  "deliver": [
    "verb",
    "adjective"
  ],
  "delivery": [
    "noun"
  ],
  "demagogue": [
    "noun",
    "verb"
  ],
  "demand": [
    "noun",
    "verb"
  ],
  "demands": [
    "noun",
    "verb"
  ],
  "demeans": [
    "verb",
    "noun"
  ],
  "democracy": [
    "noun"
  ],
  "democrat": [
    "noun",
    "adjective"
  ],
  "demography": [
    "noun"
  ],
  "demolish": [
    "verb"
  ],
  "demolition": [
    "noun"
  ],
  "demon": [
    "noun"
  ],
  "demonstrate": [
    "verb"
  ],
  "demonstrating": [
    "verb"
  ],
  "demoralize": [
    "verb"
  ],
  "demote": [
    "verb"
  ],
  "demur": [
    "noun",
    "verb"
  ],
  "demure": [
    "adjective",
    "verb"
  ],
  "demurred": [
    "verb"
  ],
  "demurs": [
    "verb",
    "noun"
  ],
  "den": [
    "noun",
    "verb",
    "adverb"
  ],
  "denied": [
    "verb"
  ],
  "denim": [
    "noun"
  ],
  "denominational": [
    "adjective"
  ],
  "denote": [
    "verb"
  ],
  "denounce": [
    "verb"
  ],
  "densitometer": [
    "noun"
  ],
  "density": [
    "noun"
  ],
  "dent": [
    "noun",
    "verb"
  ],
  "dental": [
    "adjective",
    "noun"
  ],
  "denting": [
    "verb",
    "noun"
  ],
  "denture": [
    "noun"
  ],
  "denying": [
    "noun"
  ],
  "depardieu": [
    "noun"
  ],
  "depart": [
    "verb",
    "noun"
  ],
  "departed": [
    "adjective",
    "noun"
  ],
  "departing": [
    "adjective",
    "noun"
  ],
  "depend": [
    "verb"
  ],
  "dependability": [
    "noun"
  ],
  "dependable": [
    "adjective",
    "noun"
  ],
  "depends": [
    "verb"
  ],
  "depict": [
    "verb",
    "adjective"
  ],
  "depleting": [
    "noun"
  ],
  "deploy": [
    "verb",
    "noun"
  ],
  "deploys": [
    "verb"
  ],
  "deport": [
    "verb"
  ],
  "deposition": [
    "noun"
  ],
  "depository": [
    "noun"
  ],
  "deprave": [
    "verb"
  ],
  "depraved": [
    "adjective"
  ],
  "depress": [
    "verb"
  ],
  "depressed": [
    "adjective"
  ],
  "deprive": [
    "verb"
  ],
  "derail": [
    "verb",
    "noun"
  ],
  "derailing": [
    "noun"
  ],
  "derange": [
    "verb"
  ],
  "deranged": [
    "adjective"
  ],
  "derelict": [
    "adjective",
    "noun",
    "verb"
  ],
  "derided": [
    "adjective"
  ],
  "derides": [
    "verb"
  ],
  "derision": [
    "noun"
  ],
  "derive": [
    "verb"
  ],
  "dermatological": [
    "adjective",
    "noun"
  ],
  "dermatology": [
    "noun"
  ],
  "derogatory": [
    "adjective",
    "noun"
  ],
  "des": [
    "noun"
  ],
  "descartes": [
    "noun"
  ],
  "descend": [
    "verb",
    "noun"
  ],
  "descendant": [
    "noun",
    "adjective"
  ],
  "descends": [
    "verb"
  ],
  "descent": [
    "noun"
  ],
  "describe": [
    "verb"
  ],
  "descriptor": [
    "noun"
  ],
  "descriptors": [
    "noun"
  ],
  "desert": [
    "noun",
    "verb",
    "adjective"
  ],
  "design": [
    "noun",
    "verb"
  ],
  "designate": [
    "verb",
    "adjective"
  ],
  "designer": [
    "noun",
    "adjective"
  ],
  "desirability": [
    "noun"
  ],
  "desire": [
    "noun",
    "verb"
  ],
  "desist": [
    "verb"
  ],
  "desk": [
    "noun",
    "verb"
  ],
  "desktop": [
    "noun",
    "adjective"
  ],
  "despair": [
    "noun",
    "verb"
  ],
  "despaired": [
    "verb"
  ],
  "despairing": [
    "noun",
    "adjective"
  ],
  "desperate": [
    "adjective",
    "noun",
    "adverb"
  ],
  "despise": [
    "verb"
  ],
  "despite": [
    "noun",
    "verb"
  ],
  "dessert": [
    "noun"
  ],
  "destination": [
    "noun"
  ],
  "destiny": [
    "noun"
  ],
  "destitute": [
    "adjective",
    "verb"
  ],
  "destitution": [
    "noun"
  ],
  "destroy": [
    "verb"
  ],
  "destruct": [
    "verb"
  ],
  "detach": [
    "verb"
  ],
  "detail": [
    "noun",
    "verb"
  ],
  "detailing": [
    "noun"
  ],
  "details": [
    "noun"
  ],
  "detain": [
    "verb"
  ],
  "detect": [
    "verb",
    "adjective"
  ],
  "detection": [
    "noun"
  ],
  "detective": [
    "noun",
    "adjective"
  ],
  "detente": [
    "noun"
  ],
  "detention": [
    "noun"
  ],
  "deteriorate": [
    "verb"
  ],
  "determine": [
    "verb"
  ],
  "determined": [
    "adjective"
  ],
  "deterred": [
    "verb"
  ],
  "detest": [
    "verb"
  ],
  "detonated": [
    "verb"
  ],
  "detonator": [
    "noun"
  ],
  "detour": [
    "noun",
    "verb"
  ],
  "detours": [
    "noun"
  ],
  "detract": [
    "verb"
  ],
  "detrimental": [
    "adjective",
    "noun"
  ],
  "deuce": [
    "noun"
  ],
  "deuterons": [
    "noun"
  ],
  "devastate": [
    "verb"
  ],
  "develop": [
    "verb"
  ],
  "developmental": [
    "adjective",
    "noun"
  ],
  "devise": [
    "verb",
    "noun"
  ],
  "devolution": [
    "noun"
  ],
  "devolved": [
    "verb",
    "adjective"
  ],
  "devote": [
    "verb",
    "adjective"
  ],
  "devoted": [
    "adjective"
  ],
  "devour": [
    "verb"
  ],
  "devours": [
    "verb"
  ],
  "devout": [
    "adjective",
    "noun"
  ],
  "dew": [
    "noun",
    "verb"
  ],
  "dewy": [
    "adjective"
  ],
  "dhole": [
    "noun"
  ],
  "dia": [
    "noun"
  ],
  "diabetic": [
    "adjective",
    "noun"
  ],
  "diabolical": [
    "adjective"
  ],
  "diadem": [
    "noun",
    "verb"
  ],
  "diagnosis": [
    "noun",
    "verb"
  ],
  "diagram": [
    "noun",
    "verb"
  ],
  "dial": [
    "noun",
    "verb"
  ],
  "dialect": [
    "noun"
  ],
  "dialogue": [
    "noun",
    "verb"
  ],
  "diamagnetic": [
    "adjective",
    "noun"
  ],
  "diamond": [
    "noun",
    "adjective",
    "verb"
  ],
  "diaphragm": [
    "noun",
    "verb"
  ],
  "diarrhoea": [
    "noun"
  ],
  "diary": [
    "noun",
    "verb",
    "adjective"
  ],
  "diatomic": [
    "adjective",
    "noun"
  ],
  "diatonic": [
    "adjective"
  ],
  "dice": [
    "noun",
    "verb"
  ],
  "dictator": [
    "noun"
  ],
  "dictatorship": [
    "noun"
  ],
  "dictatorships": [
    "noun"
  ],
  "dictionary": [
    "noun",
    "verb"
  ],
  "die": [
    "verb",
    "noun",
    "adverb"
  ],
  "diehard": [
    "adjective",
    "noun"
  ],
  "dietetic": [
    "adjective"
  ],
  "difference": [
    "noun",
    "verb"
  ],
  "differentiate": [
    "verb",
    "noun"
  ],
  "difficult": [
    "adjective",
    "verb"
  ],
  "diffraction": [
    "noun"
  ],
  "diffuse": [
    "adjective",
    "verb"
  ],
  "diffused": [
    "adjective"
  ],
  "diffusing": [
    "adjective"
  ],
  "diffusion": [
    "noun"
  ],
  "dig": [
    "verb",
    "noun"
  ],
  "digest": [
    "noun",
    "verb"
  ],
  "digester": [
    "noun"
  ],
  "digestion": [
    "noun"
  ],
  "digressing": [
    "verb"
  ],
  "digression": [
    "noun"
  ],
  "dillydally": [
    "verb"
  ],
  "dilute": [
    "adjective",
    "verb",
    "noun"
  ],
  "dilution": [
    "noun"
  ],
  "dime": [
    "noun",
    "verb"
  ],
  "dimension": [
    "noun",
    "verb"
  ],
  "dimensionality": [
    "noun"
  ],
  "dimer": [
    "noun"
  ],
  "diminish": [
    "verb"
  ],
  "diminished": [
    "adjective"
  ],
  "diminution": [
    "noun"
  ],
  "dinar": [
    "noun"
  ],
  "dine": [
    "verb",
    "noun"
  ],
  "dined": [
    "verb"
  ],
  "diner": [
    "noun"
  ],
  "dink": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "dinner": [
    "noun",
    "verb"
  ],
  "dinnertime": [
    "noun"
  ],
  "dinosaur": [
    "noun"
  ],
  "dint": [
    "noun",
    "verb"
  ],
  "dip": [
    "noun",
    "verb"
  ],
  "diphthong": [
    "noun"
  ],
  "diploma": [
    "noun"
  ],
  "diplomacy": [
    "noun"
  ],
  "diplomat": [
    "noun"
  ],
  "dipped": [
    "adjective"
  ],
  "dips": [
    "noun"
  ],
  "dipstick": [
    "noun",
    "verb"
  ],
  "direct": [
    "adjective",
    "adverb",
    "verb"
  ],
  "directional": [
    "adjective",
    "noun"
  ],
  "directly": [
    "adverb"
  ],
  "director": [
    "noun"
  ],
  "directorships": [
    "noun"
  ],
  "dirt": [
    "noun",
    "verb"
  ],
  "dirty": [
    "adjective",
    "verb",
    "adverb",
    "noun"
  ],
  "disabuse": [
    "verb"
  ],
  "disabused": [
    "verb"
  ],
  "disaffection": [
    "noun"
  ],
  "disagree": [
    "verb"
  ],
  "disagreed": [
    "verb"
  ],
  "disallow": [
    "verb"
  ],
  "disallowed": [
    "adjective"
  ],
  "disappear": [
    "verb"
  ],
  "disappeared": [
    "noun",
    "adjective"
  ],
  "disappears": [
    "verb"
  ],
  "disappoint": [
    "verb"
  ],
  "disappointed": [
    "adjective"
  ],
  "disapprove": [
    "verb"
  ],
  "disapproved": [
    "adjective"
  ],
  "disapproving": [
    "adjective"
  ],
  "disassemble": [
    "verb"
  ],
  "disaster": [
    "noun"
  ],
  "disavow": [
    "verb"
  ],
  "disavowed": [
    "adjective"
  ],
  "disband": [
    "verb"
  ],
  "disbanding": [
    "noun"
  ],
  "disbelieve": [
    "verb"
  ],
  "disbelieving": [
    "adjective"
  ],
  "disburse": [
    "verb"
  ],
  "disbursed": [
    "verb"
  ],
  "discard": [
    "verb",
    "noun"
  ],
  "discern": [
    "verb"
  ],
  "discerned": [
    "verb"
  ],
  "discharge": [
    "noun",
    "verb"
  ],
  "disciplinary": [
    "adjective",
    "noun"
  ],
  "disclaim": [
    "verb"
  ],
  "disclose": [
    "verb",
    "noun"
  ],
  "disconcert": [
    "verb",
    "noun"
  ],
  "disconnect": [
    "verb",
    "noun"
  ],
  "disconnection": [
    "noun"
  ],
  "disconsolate": [
    "adjective",
    "noun"
  ],
  "discontent": [
    "noun",
    "adjective",
    "verb"
  ],
  "discontented": [
    "adjective"
  ],
  "discotheque": [
    "noun"
  ],
  "discotheques": [
    "noun"
  ],
  "discourage": [
    "verb",
    "noun"
  ],
  "discovered": [
    "adjective"
  ],
  "discovery": [
    "noun"
  ],
  "discreet": [
    "adjective"
  ],
  "discreetly": [
    "adverb"
  ],
  "discrete": [
    "adjective"
  ],
  "discriminate": [
    "verb",
    "adjective"
  ],
  "discriminatory": [
    "adjective"
  ],
  "discuss": [
    "verb"
  ],
  "discussion": [
    "noun"
  ],
  "disdain": [
    "noun",
    "verb"
  ],
  "disease": [
    "noun",
    "verb"
  ],
  "disembark": [
    "verb"
  ],
  "disembody": [
    "verb"
  ],
  "disengage": [
    "verb",
    "noun"
  ],
  "disfavor": [
    "noun",
    "verb"
  ],
  "disgrace": [
    "noun",
    "verb"
  ],
  "disgraced": [
    "adjective"
  ],
  "disguise": [
    "noun",
    "verb"
  ],
  "disgusting": [
    "adjective"
  ],
  "dish": [
    "noun",
    "verb"
  ],
  "dishonest": [
    "adjective"
  ],
  "dishwasher": [
    "noun"
  ],
  "disinfect": [
    "verb"
  ],
  "disinfection": [
    "noun"
  ],
  "disintegrate": [
    "verb"
  ],
  "disjoint": [
    "adjective",
    "verb"
  ],
  "diskettes": [
    "noun"
  ],
  "dislike": [
    "noun",
    "verb"
  ],
  "disloyal": [
    "adjective"
  ],
  "dismaying": [
    "adjective",
    "noun"
  ],
  "dismissing": [
    "adjective"
  ],
  "disneyland": [
    "noun"
  ],
  "disobeyed": [
    "verb"
  ],
  "disobeying": [
    "verb"
  ],
  "disorder": [
    "noun",
    "verb"
  ],
  "disorient": [
    "verb"
  ],
  "disorienting": [
    "adjective"
  ],
  "disown": [
    "verb"
  ],
  "disparage": [
    "verb",
    "noun"
  ],
  "disparity": [
    "noun"
  ],
  "dispel": [
    "verb",
    "noun"
  ],
  "dispelling": [
    "verb"
  ],
  "dispense": [
    "verb",
    "noun"
  ],
  "dispensed": [
    "adjective"
  ],
  "disperse": [
    "verb",
    "adjective"
  ],
  "displace": [
    "verb"
  ],
  "displaced": [
    "verb",
    "adjective"
  ],
  "displacing": [
    "verb"
  ],
  "displayed": [
    "adjective"
  ],
  "displaying": [
    "noun"
  ],
  "displays": [
    "verb",
    "noun"
  ],
  "dispose": [
    "verb",
    "noun"
  ],
  "disposition": [
    "noun",
    "verb"
  ],
  "disproportionate": [
    "adjective",
    "verb"
  ],
  "disproved": [
    "verb"
  ],
  "dispute": [
    "noun",
    "verb"
  ],
  "disregard": [
    "noun",
    "verb"
  ],
  "disrespect": [
    "noun",
    "verb"
  ],
  "dissect": [
    "verb"
  ],
  "dissection": [
    "noun"
  ],
  "disseminated": [
    "adjective"
  ],
  "dissension": [
    "noun"
  ],
  "dissent": [
    "noun",
    "verb"
  ],
  "dissented": [
    "verb"
  ],
  "dissenting": [
    "adjective"
  ],
  "dissolution": [
    "noun"
  ],
  "dissolved": [
    "adjective"
  ],
  "dissonance": [
    "noun"
  ],
  "dissymmetry": [
    "noun"
  ],
  "distance": [
    "noun",
    "verb"
  ],
  "distant": [
    "adjective"
  ],
  "distaste": [
    "noun",
    "verb"
  ],
  "distend": [
    "verb"
  ],
  "distil": [
    "verb"
  ],
  "distill": [
    "verb"
  ],
  "distilled": [
    "adjective"
  ],
  "distiller": [
    "noun"
  ],
  "distilling": [
    "noun"
  ],
  "distinguish": [
    "verb"
  ],
  "distort": [
    "verb",
    "adjective"
  ],
  "distorts": [
    "verb"
  ],
  "distract": [
    "verb",
    "adjective"
  ],
  "distracted": [
    "adjective"
  ],
  "distress": [
    "noun",
    "verb"
  ],
  "distressed": [
    "adjective"
  ],
  "distribute": [
    "verb"
  ],
  "district": [
    "noun",
    "verb",
    "adjective"
  ],
  "distrust": [
    "noun",
    "verb"
  ],
  "disuse": [
    "noun",
    "verb"
  ],
  "dithyramb": [
    "noun"
  ],
  "diuretic": [
    "adjective",
    "noun"
  ],
  "diurnal": [
    "adjective",
    "noun"
  ],
  "dive": [
    "noun",
    "verb"
  ],
  "diverge": [
    "verb",
    "noun"
  ],
  "diversify": [
    "verb"
  ],
  "divide": [
    "verb",
    "noun"
  ],
  "divided": [
    "adjective"
  ],
  "dividend": [
    "noun",
    "verb"
  ],
  "dividends": [
    "noun"
  ],
  "divider": [
    "noun"
  ],
  "divides": [
    "verb"
  ],
  "diving": [
    "noun",
    "adjective"
  ],
  "division": [
    "noun"
  ],
  "divisor": [
    "noun"
  ],
  "dizzy": [
    "adjective",
    "noun",
    "verb"
  ],
  "doc": [
    "noun"
  ],
  "dock": [
    "noun",
    "verb"
  ],
  "dockyard": [
    "noun"
  ],
  "docs": [
    "noun"
  ],
  "doctor": [
    "noun",
    "verb"
  ],
  "doctors": [
    "noun",
    "verb"
  ],
  "document": [
    "noun",
    "verb"
  ],
  "doff": [
    "verb",
    "noun"
  ],
  "dog": [
    "noun",
    "verb",
    "adjective"
  ],
  "dogfish": [
    "noun"
  ],
  "doghouse": [
    "noun"
  ],
  "doglike": [
    "adjective",
    "adverb"
  ],
  "dogmatic": [
    "adjective",
    "noun"
  ],
  "dogs": [
    "noun"
  ],
  "dogwood": [
    "noun"
  ],
  "dol": [
    "noun"
  ],
  "doll": [
    "noun",
    "verb"
  ],
  "dollars": [
    "noun"
  ],
  "dollhouse": [
    "noun"
  ],
  "dolphin": [
    "noun"
  ],
  "domain": [
    "noun"
  ],
  "domesticated": [
    "adjective"
  ],
  "dominated": [
    "adjective"
  ],
  "domineering": [
    "adjective",
    "noun"
  ],
  "dominoes": [
    "noun"
  ],
  "donate": [
    "verb",
    "noun"
  ],
  "donating": [
    "verb"
  ],
  "done": [
    "verb",
    "adjective",
    "noun"
  ],
  "donkey": [
    "noun"
  ],
  "donned": [
    "verb"
  ],
  "dons": [
    "noun"
  ],
  "donut": [
    "noun"
  ],
  "doodad": [
    "noun"
  ],
  "doodle": [
    "noun",
    "verb"
  ],
  "door": [
    "noun",
    "verb"
  ],
  "doorbell": [
    "noun",
    "verb"
  ],
  "doorkeeper": [
    "noun"
  ],
  "doorknob": [
    "noun"
  ],
  "doorman": [
    "noun"
  ],
  "doormat": [
    "noun"
  ],
  "doornail": [
    "noun"
  ],
  "doors": [
    "noun"
  ],
  "dopamine": [
    "noun"
  ],
  "dope": [
    "noun",
    "verb",
    "adjective"
  ],
  "dorm": [
    "noun",
    "verb"
  ],
  "dormitory": [
    "noun"
  ],
  "dormouse": [
    "noun"
  ],
  "dot": [
    "noun",
    "verb"
  ],
  "dote": [
    "verb",
    "noun"
  ],
  "double": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "doublespeak": [
    "noun"
  ],
  "doublethink": [
    "noun",
    "verb"
  ],
  "doubt": [
    "noun",
    "verb"
  ],
  "dough": [
    "noun",
    "verb"
  ],
  "doughboy": [
    "noun"
  ],
  "doughnut": [
    "noun",
    "verb"
  ],
  "dour": [
    "adjective",
    "noun"
  ],
  "dove": [
    "noun"
  ],
  "dovecote": [
    "noun"
  ],
  "down": [
    "adverb",
    "adjective",
    "verb",
    "noun"
  ],
  "downbeat": [
    "noun",
    "adjective"
  ],
  "downcast": [
    "adjective",
    "verb",
    "noun"
  ],
  "downdraft": [
    "noun"
  ],
  "downed": [
    "adjective"
  ],
  "downfall": [
    "noun",
    "verb"
  ],
  "downhill": [
    "adverb",
    "noun",
    "adjective",
    "verb"
  ],
  "downplaying": [
    "noun"
  ],
  "downpour": [
    "noun",
    "verb"
  ],
  "downstage": [
    "noun",
    "adverb",
    "adjective",
    "verb"
  ],
  "downstairs": [
    "noun",
    "adverb",
    "adjective"
  ],
  "downstream": [
    "adjective",
    "adverb",
    "verb"
  ],
  "downswing": [
    "noun"
  ],
  "downtime": [
    "noun"
  ],
  "downtown": [
    "noun",
    "adjective",
    "adverb"
  ],
  "downturn": [
    "noun",
    "verb"
  ],
  "doyenne": [
    "noun"
  ],
  "doze": [
    "verb",
    "noun"
  ],
  "dozen": [
    "noun"
  ],
  "drab": [
    "adjective",
    "noun",
    "verb"
  ],
  "dragnet": [
    "noun",
    "verb"
  ],
  "dragnets": [
    "noun"
  ],
  "dragon": [
    "noun"
  ],
  "dragonfly": [
    "noun"
  ],
  "drain": [
    "noun",
    "verb"
  ],
  "dram": [
    "noun",
    "verb"
  ],
  "drama": [
    "noun"
  ],
  "drape": [
    "noun",
    "verb"
  ],
  "draught": [
    "noun",
    "adjective",
    "verb"
  ],
  "draw": [
    "verb",
    "noun"
  ],
  "drawback": [
    "noun"
  ],
  "drawbacks": [
    "noun"
  ],
  "drawer": [
    "noun"
  ],
  "drawled": [
    "verb"
  ],
  "drawls": [
    "noun"
  ],
  "dread": [
    "noun",
    "verb",
    "adjective"
  ],
  "dreadnought": [
    "noun"
  ],
  "dream": [
    "noun",
    "verb",
    "adjective"
  ],
  "dreaming": [
    "noun"
  ],
  "dreamland": [
    "noun"
  ],
  "dreamlike": [
    "adjective"
  ],
  "dreams": [
    "noun",
    "verb",
    "adjective"
  ],
  "dressed": [
    "adjective"
  ],
  "dresser": [
    "noun"
  ],
  "dressing": [
    "noun"
  ],
  "dressmaking": [
    "noun"
  ],
  "drew": [
    "noun"
  ],
  "dried": [
    "adjective"
  ],
  "drift": [
    "noun",
    "verb"
  ],
  "driftwood": [
    "noun"
  ],
  "drill": [
    "noun",
    "verb"
  ],
  "drink": [
    "noun",
    "verb"
  ],
  "drinking": [
    "noun",
    "adjective"
  ],
  "drinks": [
    "noun"
  ],
  "drip": [
    "noun",
    "verb"
  ],
  "dripped": [
    "verb"
  ],
  "drips": [
    "verb",
    "noun"
  ],
  "drive": [
    "noun",
    "verb"
  ],
  "driven": [
    "adjective"
  ],
  "driver": [
    "noun"
  ],
  "driveway": [
    "noun"
  ],
  "drizzle": [
    "noun",
    "verb"
  ],
  "droll": [
    "adjective",
    "noun",
    "verb"
  ],
  "drool": [
    "noun",
    "verb"
  ],
  "droop": [
    "verb",
    "noun",
    "adjective"
  ],
  "drop": [
    "noun",
    "verb"
  ],
  "dropout": [
    "noun"
  ],
  "dropped": [
    "adjective"
  ],
  "drought": [
    "noun"
  ],
  "drover": [
    "noun"
  ],
  "drown": [
    "verb",
    "noun"
  ],
  "drub": [
    "verb",
    "noun"
  ],
  "drugs": [
    "noun",
    "verb"
  ],
  "drugstore": [
    "noun"
  ],
  "drum": [
    "noun",
    "verb"
  ],
  "drumbeat": [
    "noun"
  ],
  "drumming": [
    "noun"
  ],
  "drums": [
    "noun",
    "verb"
  ],
  "drupe": [
    "noun"
  ],
  "druthers": [
    "noun"
  ],
  "dry": [
    "adjective",
    "noun",
    "verb"
  ],
  "drying": [
    "noun"
  ],
  "drywall": [
    "noun",
    "verb"
  ],
  "duality": [
    "noun"
  ],
  "duck": [
    "noun",
    "verb"
  ],
  "ducky": [
    "noun",
    "adjective"
  ],
  "due": [
    "adjective",
    "noun",
    "adverb"
  ],
  "duets": [
    "noun"
  ],
  "duffel": [
    "noun"
  ],
  "dugout": [
    "noun"
  ],
  "dumbbell": [
    "noun"
  ],
  "dumbstruck": [
    "adjective"
  ],
  "dump": [
    "noun",
    "verb"
  ],
  "dune": [
    "noun"
  ],
  "dunned": [
    "verb"
  ],
  "duns": [
    "noun"
  ],
  "dupe": [
    "noun",
    "verb"
  ],
  "duplex": [
    "noun",
    "adjective",
    "verb"
  ],
  "duplicate": [
    "adjective",
    "verb",
    "noun"
  ],
  "duplicity": [
    "noun"
  ],
  "durability": [
    "noun"
  ],
  "duration": [
    "noun"
  ],
  "dusk": [
    "noun",
    "adjective",
    "verb"
  ],
  "dwell": [
    "verb",
    "noun"
  ],
  "dyad": [
    "noun"
  ],
  "dyeing": [
    "noun"
  ],
  "dyestuff": [
    "noun"
  ],
  "dying": [
    "adjective",
    "noun"
  ],
  "dynamite": [
    "noun",
    "verb"
  ],
  "dynasty": [
    "noun"
  ],
  "dyspnea": [
    "noun"
  ],
  "dystopia": [
    "noun"
  ],
  "eager": [
    "adjective",
    "verb",
    "noun"
  ],
  "eagle": [
    "noun",
    "verb"
  ],
  "ear": [
    "noun",
    "verb"
  ],
  "eared": [
    "adjective"
  ],
  "earl": [
    "noun"
  ],
  "earlier": [
    "adverb",
    "adjective"
  ],
  "early": [
    "adjective",
    "adverb",
    "noun"
  ],
  "earmark": [
    "verb",
    "noun"
  ],
  "earmuff": [
    "noun"
  ],
  "earn": [
    "verb",
    "noun"
  ],
  "earned": [
    "adjective"
  ],
  "earning": [
    "verb"
  ],
  "earplug": [
    "noun",
    "verb"
  ],
  "earring": [
    "noun"
  ],
  "ears": [
    "noun"
  ],
  "earshot": [
    "noun"
  ],
  "earthbound": [
    "adjective"
  ],
  "earthquake": [
    "noun",
    "verb"
  ],
  "earthquakes": [
    "noun"
  ],
  "earthshaking": [
    "adjective"
  ],
  "earthwork": [
    "noun"
  ],
  "earwax": [
    "noun"
  ],
  "ease": [
    "noun",
    "verb"
  ],
  "easel": [
    "noun"
  ],
  "easier": [
    "adverb"
  ],
  "easily": [
    "adverb"
  ],
  "eastbound": [
    "adjective",
    "adverb"
  ],
  "easy": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "easygoing": [
    "adjective"
  ],
  "eat": [
    "verb",
    "noun"
  ],
  "eaten": [
    "adjective"
  ],
  "eating": [
    "noun",
    "adjective"
  ],
  "eavesdrop": [
    "verb",
    "noun"
  ],
  "echelon": [
    "noun",
    "adjective",
    "verb"
  ],
  "echelons": [
    "noun"
  ],
  "echinacea": [
    "noun"
  ],
  "eclipse": [
    "noun",
    "verb"
  ],
  "ecology": [
    "noun"
  ],
  "economic": [
    "adjective"
  ],
  "economics": [
    "noun"
  ],
  "economy": [
    "noun",
    "adjective",
    "adverb"
  ],
  "ecosystem": [
    "noun"
  ],
  "ed": [
    "noun"
  ],
  "edelweiss": [
    "noun"
  ],
  "edit": [
    "noun",
    "verb"
  ],
  "edition": [
    "noun"
  ],
  "editor": [
    "noun"
  ],
  "editorial": [
    "noun",
    "adjective"
  ],
  "educate": [
    "verb",
    "adjective"
  ],
  "education": [
    "noun"
  ],
  "educational": [
    "adjective",
    "noun"
  ],
  "eel": [
    "noun",
    "verb"
  ],
  "eelgrass": [
    "noun"
  ],
  "eels": [
    "noun"
  ],
  "effacing": [
    "adjective",
    "verb",
    "noun"
  ],
  "effect": [
    "noun",
    "verb"
  ],
  "effector": [
    "noun"
  ],
  "efficient": [
    "adjective",
    "noun"
  ],
  "effort": [
    "noun",
    "verb"
  ],
  "egg": [
    "noun",
    "verb"
  ],
  "eggcup": [
    "noun"
  ],
  "egghead": [
    "noun"
  ],
  "eggs": [
    "noun",
    "verb"
  ],
  "eggshell": [
    "noun",
    "adjective"
  ],
  "egregious": [
    "adjective"
  ],
  "egyptology": [
    "noun"
  ],
  "eighteen": [
    "noun"
  ],
  "eighteens": [
    "noun"
  ],
  "eject": [
    "verb",
    "noun"
  ],
  "ejection": [
    "noun"
  ],
  "ela": [
    "noun"
  ],
  "elaborate": [
    "adjective",
    "verb"
  ],
  "elapse": [
    "verb"
  ],
  "elated": [
    "adjective"
  ],
  "elbow": [
    "noun",
    "verb"
  ],
  "elbowing": [
    "noun"
  ],
  "elbows": [
    "noun"
  ],
  "elder": [
    "noun",
    "verb"
  ],
  "elect": [
    "verb",
    "noun",
    "adjective"
  ],
  "electioneering": [
    "noun"
  ],
  "electioneers": [
    "noun"
  ],
  "elective": [
    "adjective",
    "noun"
  ],
  "elector": [
    "noun"
  ],
  "electrician": [
    "noun"
  ],
  "electricity": [
    "noun"
  ],
  "electrifying": [
    "adjective"
  ],
  "electrocardiogram": [
    "noun"
  ],
  "electrocute": [
    "verb"
  ],
  "electrocution": [
    "noun"
  ],
  "electron": [
    "noun"
  ],
  "electronic": [
    "adjective",
    "noun"
  ],
  "electroshock": [
    "noun",
    "verb"
  ],
  "electrostatic": [
    "adjective"
  ],
  "elegance": [
    "noun"
  ],
  "elegant": [
    "adjective",
    "noun"
  ],
  "element": [
    "noun",
    "verb"
  ],
  "elemental": [
    "adjective",
    "noun"
  ],
  "elephant": [
    "noun"
  ],
  "elevator": [
    "noun",
    "verb"
  ],
  "eleven": [
    "noun"
  ],
  "elf": [
    "noun",
    "verb"
  ],
  "eligibility": [
    "noun"
  ],
  "eliminate": [
    "verb"
  ],
  "eliminating": [
    "verb"
  ],
  "elite": [
    "noun",
    "adjective"
  ],
  "elk": [
    "noun"
  ],
  "ellipse": [
    "noun",
    "verb"
  ],
  "elmwood": [
    "noun"
  ],
  "elocution": [
    "noun"
  ],
  "elope": [
    "verb"
  ],
  "eloquence": [
    "noun"
  ],
  "elsewhere": [
    "adverb",
    "noun"
  ],
  "elude": [
    "verb"
  ],
  "email": [
    "noun",
    "verb"
  ],
  "embalm": [
    "verb"
  ],
  "embark": [
    "verb"
  ],
  "embarrassing": [
    "adjective",
    "noun"
  ],
  "embassy": [
    "noun"
  ],
  "ember": [
    "noun",
    "adjective"
  ],
  "emblem": [
    "noun",
    "verb"
  ],
  "emblematic": [
    "adjective"
  ],
  "embody": [
    "verb"
  ],
  "embolism": [
    "noun"
  ],
  "emboss": [
    "noun",
    "verb"
  ],
  "embrace": [
    "verb",
    "noun"
  ],
  "embroil": [
    "verb",
    "noun"
  ],
  "embryonic": [
    "adjective"
  ],
  "embryos": [
    "noun"
  ],
  "emerald": [
    "noun",
    "adjective",
    "verb"
  ],
  "emerge": [
    "verb",
    "noun"
  ],
  "emergency": [
    "noun"
  ],
  "emetic": [
    "noun",
    "adjective"
  ],
  "eminent": [
    "adjective"
  ],
  "emir": [
    "noun"
  ],
  "emit": [
    "verb"
  ],
  "emits": [
    "verb"
  ],
  "emitting": [
    "adjective"
  ],
  "emotion": [
    "noun"
  ],
  "emotional": [
    "adjective",
    "noun"
  ],
  "empathetic": [
    "adjective"
  ],
  "emphasize": [
    "verb"
  ],
  "emphatic": [
    "adjective",
    "noun"
  ],
  "empire": [
    "noun",
    "adjective"
  ],
  "employ": [
    "verb",
    "noun"
  ],
  "emporia": [
    "noun"
  ],
  "empower": [
    "verb"
  ],
  "empowers": [
    "verb"
  ],
  "empty": [
    "adjective",
    "verb",
    "noun"
  ],
  "ems": [
    "noun"
  ],
  "emulsifier": [
    "noun"
  ],
  "enable": [
    "verb"
  ],
  "enact": [
    "verb"
  ],
  "enamor": [
    "verb"
  ],
  "encamp": [
    "verb"
  ],
  "encase": [
    "verb"
  ],
  "encased": [
    "adjective"
  ],
  "enchant": [
    "verb",
    "noun"
  ],
  "enclave": [
    "noun",
    "verb"
  ],
  "encode": [
    "verb",
    "noun"
  ],
  "encore": [
    "noun",
    "verb"
  ],
  "encourage": [
    "verb"
  ],
  "encrust": [
    "verb"
  ],
  "encrypt": [
    "verb"
  ],
  "encyclopedia": [
    "noun"
  ],
  "end": [
    "noun",
    "verb"
  ],
  "endear": [
    "verb"
  ],
  "endeavor": [
    "noun",
    "verb"
  ],
  "endeavour": [
    "noun",
    "verb"
  ],
  "ended": [
    "adjective"
  ],
  "endocrinology": [
    "noun"
  ],
  "endoscope": [
    "noun"
  ],
  "endosperm": [
    "noun"
  ],
  "endpoint": [
    "noun",
    "verb"
  ],
  "endure": [
    "verb"
  ],
  "endures": [
    "verb"
  ],
  "enduring": [
    "adjective",
    "noun"
  ],
  "enemies": [
    "noun"
  ],
  "enemy": [
    "noun",
    "verb"
  ],
  "energetic": [
    "adjective",
    "noun"
  ],
  "energizer": [
    "noun"
  ],
  "energy": [
    "noun"
  ],
  "enfold": [
    "verb"
  ],
  "engaged": [
    "adjective"
  ],
  "engender": [
    "verb"
  ],
  "engine": [
    "noun",
    "verb"
  ],
  "engineer": [
    "noun",
    "verb"
  ],
  "engineers": [
    "noun",
    "verb"
  ],
  "englishwoman": [
    "noun"
  ],
  "engrave": [
    "verb"
  ],
  "engraved": [
    "adjective"
  ],
  "engross": [
    "verb"
  ],
  "engrossed": [
    "adjective"
  ],
  "enigma": [
    "noun"
  ],
  "enigmatic": [
    "adjective"
  ],
  "enjoy": [
    "verb"
  ],
  "enlarge": [
    "verb"
  ],
  "enlist": [
    "verb",
    "noun"
  ],
  "enmesh": [
    "verb"
  ],
  "ennui": [
    "noun",
    "verb"
  ],
  "enquire": [
    "verb"
  ],
  "enrage": [
    "verb"
  ],
  "enrich": [
    "verb"
  ],
  "enroll": [
    "verb"
  ],
  "enrolled": [
    "adjective"
  ],
  "enrollment": [
    "noun"
  ],
  "enshrined": [
    "verb"
  ],
  "enshroud": [
    "verb"
  ],
  "enslave": [
    "verb"
  ],
  "enslaved": [
    "adjective"
  ],
  "ensnared": [
    "verb"
  ],
  "ensued": [
    "verb"
  ],
  "ensures": [
    "verb"
  ],
  "ensuring": [
    "verb"
  ],
  "entail": [
    "verb",
    "noun"
  ],
  "entailing": [
    "verb"
  ],
  "enter": [
    "verb",
    "noun"
  ],
  "enterprise": [
    "noun",
    "verb"
  ],
  "entertain": [
    "verb",
    "noun"
  ],
  "enthralled": [
    "adjective"
  ],
  "enthused": [
    "adjective"
  ],
  "enthusiast": [
    "noun"
  ],
  "entice": [
    "verb"
  ],
  "entirely": [
    "adverb"
  ],
  "entomb": [
    "verb"
  ],
  "entomology": [
    "noun"
  ],
  "entrap": [
    "verb"
  ],
  "entrapped": [
    "verb",
    "adjective"
  ],
  "entreating": [
    "noun"
  ],
  "entree": [
    "noun"
  ],
  "entrees": [
    "noun"
  ],
  "entrepreneur": [
    "noun"
  ],
  "entwined": [
    "adjective"
  ],
  "envelope": [
    "noun",
    "verb"
  ],
  "envision": [
    "verb"
  ],
  "envy": [
    "noun",
    "verb"
  ],
  "enzyme": [
    "noun"
  ],
  "ephemeral": [
    "adjective",
    "noun"
  ],
  "epic": [
    "noun",
    "adjective"
  ],
  "epicure": [
    "noun"
  ],
  "epicurean": [
    "adjective",
    "noun"
  ],
  "epicures": [
    "noun"
  ],
  "epidemic": [
    "noun",
    "adjective"
  ],
  "epidemiological": [
    "adjective"
  ],
  "epidemiologist": [
    "noun"
  ],
  "epidemiology": [
    "noun"
  ],
  "epigram": [
    "noun"
  ],
  "epilogue": [
    "noun",
    "verb"
  ],
  "epiphany": [
    "noun"
  ],
  "episteme": [
    "noun"
  ],
  "epitaph": [
    "noun",
    "verb"
  ],
  "epitaphs": [
    "noun"
  ],
  "epithets": [
    "noun"
  ],
  "epitome": [
    "noun"
  ],
  "epsilon": [
    "noun"
  ],
  "equality": [
    "noun"
  ],
  "equalizer": [
    "noun"
  ],
  "equator": [
    "noun"
  ],
  "equinox": [
    "noun"
  ],
  "equipment": [
    "noun"
  ],
  "equips": [
    "verb"
  ],
  "equivalent": [
    "adjective",
    "noun",
    "verb"
  ],
  "erase": [
    "verb",
    "noun"
  ],
  "eraser": [
    "noun"
  ],
  "erect": [
    "adjective",
    "verb"
  ],
  "erection": [
    "noun"
  ],
  "eritrean": [
    "adjective",
    "noun"
  ],
  "erode": [
    "verb",
    "noun"
  ],
  "eroticism": [
    "noun"
  ],
  "erred": [
    "verb"
  ],
  "erring": [
    "noun"
  ],
  "erroneous": [
    "adjective"
  ],
  "ers": [
    "noun"
  ],
  "erstwhile": [
    "adjective",
    "adverb"
  ],
  "eruption": [
    "noun"
  ],
  "es": [
    "noun",
    "verb"
  ],
  "escalade": [
    "noun",
    "verb"
  ],
  "escalator": [
    "noun",
    "verb"
  ],
  "escape": [
    "verb",
    "noun"
  ],
  "escaped": [
    "adjective"
  ],
  "eschatological": [
    "adjective"
  ],
  "eschewing": [
    "verb"
  ],
  "esoteric": [
    "adjective",
    "noun"
  ],
  "especial": [
    "adjective"
  ],
  "esplanade": [
    "noun"
  ],
  "esquire": [
    "noun",
    "verb"
  ],
  "essays": [
    "noun"
  ],
  "essence": [
    "noun"
  ],
  "essential": [
    "adjective",
    "noun"
  ],
  "est": [
    "noun",
    "adjective"
  ],
  "establish": [
    "verb"
  ],
  "estate": [
    "noun",
    "adjective",
    "verb"
  ],
  "esteem": [
    "noun",
    "verb"
  ],
  "esthetic": [
    "adjective"
  ],
  "estimate": [
    "noun",
    "verb",
    "adjective"
  ],
  "estrange": [
    "verb"
  ],
  "estranged": [
    "adjective"
  ],
  "ethanol": [
    "noun"
  ],
  "etymology": [
    "noun"
  ],
  "euphemism": [
    "noun"
  ],
  "euphoria": [
    "noun"
  ],
  "euros": [
    "noun"
  ],
  "evade": [
    "verb"
  ],
  "evaluate": [
    "verb"
  ],
  "evaluated": [
    "verb"
  ],
  "evaporated": [
    "adjective"
  ],
  "evening": [
    "noun"
  ],
  "event": [
    "noun",
    "verb"
  ],
  "events": [
    "noun"
  ],
  "eventually": [
    "adverb"
  ],
  "ever": [
    "adverb",
    "adjective"
  ],
  "evergreens": [
    "noun"
  ],
  "everyday": [
    "adjective",
    "noun",
    "adverb"
  ],
  "everyplace": [
    "adverb"
  ],
  "everywhere": [
    "adverb",
    "noun"
  ],
  "evict": [
    "verb"
  ],
  "evidence": [
    "noun",
    "verb"
  ],
  "evident": [
    "adjective"
  ],
  "evil": [
    "noun",
    "adjective",
    "adverb"
  ],
  "evildoer": [
    "noun"
  ],
  "evoke": [
    "verb"
  ],
  "evolution": [
    "noun"
  ],
  "evolutionary": [
    "adjective"
  ],
  "evolved": [
    "adjective"
  ],
  "ex": [
    "noun",
    "adjective",
    "verb"
  ],
  "exacerbated": [
    "verb"
  ],
  "exaction": [
    "noun"
  ],
  "exaggerate": [
    "verb",
    "adjective"
  ],
  "exaggerated": [
    "adjective"
  ],
  "exaggerating": [
    "adjective"
  ],
  "exalt": [
    "verb"
  ],
  "exam": [
    "noun",
    "verb"
  ],
  "examine": [
    "verb",
    "noun"
  ],
  "example": [
    "noun",
    "verb"
  ],
  "excavation": [
    "noun"
  ],
  "exceed": [
    "verb"
  ],
  "exceeded": [
    "verb"
  ],
  "exceeds": [
    "verb"
  ],
  "excel": [
    "noun",
    "verb"
  ],
  "excellent": [
    "adjective",
    "adverb"
  ],
  "excelling": [
    "verb"
  ],
  "exceptional": [
    "adjective",
    "noun"
  ],
  "excess": [
    "noun",
    "adjective",
    "verb"
  ],
  "exchange": [
    "noun",
    "verb"
  ],
  "exchanged": [
    "adjective"
  ],
  "excise": [
    "noun",
    "verb"
  ],
  "excision": [
    "noun"
  ],
  "excited": [
    "adjective"
  ],
  "exciting": [
    "adjective",
    "noun"
  ],
  "exclaim": [
    "verb",
    "noun"
  ],
  "exclude": [
    "verb"
  ],
  "excommunicated": [
    "verb"
  ],
  "exculpatory": [
    "adjective"
  ],
  "excuse": [
    "noun",
    "verb"
  ],
  "excusing": [
    "noun"
  ],
  "exec": [
    "noun",
    "verb"
  ],
  "execs": [
    "noun"
  ],
  "execute": [
    "verb"
  ],
  "exemplify": [
    "verb"
  ],
  "exercise": [
    "noun",
    "verb"
  ],
  "exerciser": [
    "noun"
  ],
  "exert": [
    "verb"
  ],
  "exhale": [
    "verb",
    "noun"
  ],
  "exhibition": [
    "noun",
    "verb"
  ],
  "exhort": [
    "verb"
  ],
  "exhorts": [
    "verb"
  ],
  "exhume": [
    "verb"
  ],
  "exile": [
    "noun",
    "verb"
  ],
  "exiles": [
    "noun"
  ],
  "existential": [
    "adjective",
    "noun"
  ],
  "exit": [
    "noun",
    "verb"
  ],
  "exorcism": [
    "noun"
  ],
  "expand": [
    "verb"
  ],
  "expands": [
    "verb"
  ],
  "expanse": [
    "noun"
  ],
  "expect": [
    "verb"
  ],
  "expected": [
    "adjective"
  ],
  "expecting": [
    "adjective",
    "noun"
  ],
  "expedition": [
    "noun",
    "verb"
  ],
  "expeditious": [
    "adjective"
  ],
  "expel": [
    "verb"
  ],
  "expend": [
    "verb"
  ],
  "expense": [
    "noun",
    "verb"
  ],
  "expensive": [
    "adjective"
  ],
  "experience": [
    "noun",
    "verb"
  ],
  "experiential": [
    "adjective"
  ],
  "experiment": [
    "noun",
    "verb"
  ],
  "expert": [
    "noun",
    "adjective",
    "verb"
  ],
  "expertise": [
    "noun",
    "verb"
  ],
  "explain": [
    "verb"
  ],
  "explanation": [
    "noun"
  ],
  "exploratory": [
    "adjective",
    "noun"
  ],
  "explore": [
    "verb",
    "noun"
  ],
  "explored": [
    "adjective"
  ],
  "explorer": [
    "noun"
  ],
  "explosion": [
    "noun"
  ],
  "exponential": [
    "adjective",
    "noun"
  ],
  "expose": [
    "verb"
  ],
  "expound": [
    "verb"
  ],
  "expounds": [
    "verb"
  ],
  "express": [
    "verb",
    "noun",
    "adjective",
    "adverb"
  ],
  "expressed": [
    "adjective"
  ],
  "expression": [
    "noun"
  ],
  "exquisite": [
    "adjective",
    "noun"
  ],
  "extend": [
    "verb",
    "noun"
  ],
  "extends": [
    "verb"
  ],
  "extension": [
    "noun"
  ],
  "extent": [
    "noun",
    "adjective"
  ],
  "exterior": [
    "noun",
    "adjective"
  ],
  "exterminator": [
    "noun"
  ],
  "extinction": [
    "noun"
  ],
  "extol": [
    "verb"
  ],
  "extort": [
    "verb",
    "adjective"
  ],
  "extorts": [
    "verb"
  ],
  "extra": [
    "adjective",
    "adverb",
    "noun"
  ],
  "extract": [
    "verb",
    "noun"
  ],
  "extraditing": [
    "verb",
    "noun"
  ],
  "extradition": [
    "noun"
  ],
  "extraneous": [
    "adjective"
  ],
  "extraordinary": [
    "adjective",
    "noun"
  ],
  "extrapolate": [
    "verb"
  ],
  "extraterritorial": [
    "adjective"
  ],
  "extravagant": [
    "adjective"
  ],
  "extremely": [
    "adverb"
  ],
  "extremes": [
    "noun"
  ],
  "extrovert": [
    "noun",
    "adjective",
    "verb"
  ],
  "extrusion": [
    "noun"
  ],
  "exult": [
    "verb"
  ],
  "eye": [
    "noun",
    "verb"
  ],
  "eyeball": [
    "noun",
    "verb"
  ],
  "eyeballs": [
    "noun"
  ],
  "eyebrow": [
    "noun",
    "verb"
  ],
  "eyeglass": [
    "noun"
  ],
  "eyeing": [
    "verb"
  ],
  "eyelash": [
    "noun"
  ],
  "eyelid": [
    "noun"
  ],
  "eyelids": [
    "noun"
  ],
  "eyelike": [
    "adjective"
  ],
  "eyeliner": [
    "noun"
  ],
  "eyepiece": [
    "noun"
  ],
  "eyesight": [
    "noun"
  ],
  "fable": [
    "noun",
    "verb"
  ],
  "fabric": [
    "noun",
    "verb"
  ],
  "fabricate": [
    "verb"
  ],
  "fabricated": [
    "adjective"
  ],
  "facade": [
    "noun"
  ],
  "face": [
    "noun",
    "verb"
  ],
  "facelift": [
    "noun",
    "verb"
  ],
  "faces": [
    "noun"
  ],
  "facilitate": [
    "verb"
  ],
  "factitious": [
    "adjective"
  ],
  "factory": [
    "noun",
    "adjective"
  ],
  "facts": [
    "noun"
  ],
  "fad": [
    "noun"
  ],
  "fade": [
    "verb",
    "noun",
    "adjective"
  ],
  "fail": [
    "verb",
    "noun",
    "adjective"
  ],
  "failed": [
    "adjective"
  ],
  "failure": [
    "noun"
  ],
  "faint": [
    "adjective",
    "verb",
    "noun"
  ],
  "fainthearted": [
    "adjective"
  ],
  "fair": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "fairground": [
    "noun"
  ],
  "fairgrounds": [
    "noun"
  ],
  "fairness": [
    "noun"
  ],
  "fairy": [
    "adjective",
    "noun"
  ],
  "faith": [
    "noun",
    "adverb"
  ],
  "faithful": [
    "adjective",
    "noun"
  ],
  "faithfulness": [
    "noun"
  ],
  "fake": [
    "adjective",
    "noun",
    "verb"
  ],
  "fakes": [
    "noun",
    "verb"
  ],
  "faking": [
    "noun"
  ],
  "falcon": [
    "noun",
    "verb"
  ],
  "fall": [
    "verb",
    "noun"
  ],
  "fallacious": [
    "adjective"
  ],
  "fallibility": [
    "noun"
  ],
  "falloff": [
    "noun"
  ],
  "fallout": [
    "noun"
  ],
  "false": [
    "adjective",
    "verb",
    "adverb",
    "noun"
  ],
  "falsehood": [
    "noun"
  ],
  "falsifying": [
    "noun"
  ],
  "falter": [
    "verb",
    "noun"
  ],
  "fame": [
    "noun",
    "verb"
  ],
  "familiar": [
    "adjective",
    "noun"
  ],
  "family": [
    "noun",
    "adjective"
  ],
  "famine": [
    "noun"
  ],
  "famous": [
    "adjective",
    "verb"
  ],
  "fan": [
    "noun",
    "verb"
  ],
  "fancy": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "fanlike": [
    "adjective"
  ],
  "fantasize": [
    "verb"
  ],
  "far": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "fared": [
    "verb"
  ],
  "farewell": [
    "noun",
    "verb",
    "adjective"
  ],
  "farm": [
    "noun",
    "verb"
  ],
  "farmer": [
    "noun"
  ],
  "farmhands": [
    "noun"
  ],
  "farming": [
    "noun",
    "adjective"
  ],
  "farmland": [
    "noun"
  ],
  "farmlands": [
    "noun"
  ],
  "farmyard": [
    "noun"
  ],
  "farrowing": [
    "noun",
    "adjective"
  ],
  "fart": [
    "noun",
    "verb"
  ],
  "farting": [
    "noun"
  ],
  "fascinated": [
    "adjective"
  ],
  "fascism": [
    "noun"
  ],
  "fashion": [
    "noun",
    "verb"
  ],
  "fast": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "fastball": [
    "noun",
    "verb"
  ],
  "fastballs": [
    "noun"
  ],
  "fastest": [
    "adverb"
  ],
  "fat": [
    "adjective",
    "noun",
    "verb"
  ],
  "fatalistic": [
    "adjective"
  ],
  "fate": [
    "noun",
    "verb"
  ],
  "father": [
    "noun",
    "verb"
  ],
  "fatherhood": [
    "noun"
  ],
  "fatherland": [
    "noun"
  ],
  "faucet": [
    "noun"
  ],
  "favor": [
    "noun",
    "verb"
  ],
  "favoritism": [
    "noun"
  ],
  "fbi": [
    "noun"
  ],
  "fear": [
    "noun",
    "verb",
    "adjective"
  ],
  "feared": [
    "adjective"
  ],
  "feat": [
    "noun",
    "verb",
    "adjective"
  ],
  "featherbedding": [
    "noun"
  ],
  "february": [
    "noun"
  ],
  "feces": [
    "noun"
  ],
  "fed": [
    "verb",
    "noun"
  ],
  "federal": [
    "adjective",
    "noun"
  ],
  "feed": [
    "noun",
    "verb"
  ],
  "feedback": [
    "noun",
    "verb"
  ],
  "feeds": [
    "verb"
  ],
  "feelings": [
    "noun",
    "adjective"
  ],
  "felicity": [
    "noun"
  ],
  "fellas": [
    "noun"
  ],
  "fellowship": [
    "noun",
    "verb"
  ],
  "fellowships": [
    "noun"
  ],
  "female": [
    "adjective",
    "noun"
  ],
  "feminism": [
    "noun"
  ],
  "fen": [
    "noun"
  ],
  "fence": [
    "noun",
    "verb"
  ],
  "fenced": [
    "adjective"
  ],
  "fencing": [
    "noun"
  ],
  "fend": [
    "verb",
    "noun"
  ],
  "fends": [
    "verb",
    "noun"
  ],
  "fenugreek": [
    "noun"
  ],
  "ferment": [
    "noun",
    "verb"
  ],
  "fermenting": [
    "noun"
  ],
  "fernlike": [
    "adjective"
  ],
  "ferried": [
    "verb"
  ],
  "ferromagnetic": [
    "adjective"
  ],
  "ferryboat": [
    "noun"
  ],
  "festival": [
    "noun",
    "adjective"
  ],
  "festoon": [
    "noun",
    "verb"
  ],
  "feud": [
    "noun",
    "verb"
  ],
  "fever": [
    "noun",
    "verb"
  ],
  "few": [
    "noun"
  ],
  "fez": [
    "noun"
  ],
  "fiberglass": [
    "noun",
    "verb"
  ],
  "fictitious": [
    "adjective"
  ],
  "fief": [
    "noun"
  ],
  "field": [
    "noun",
    "verb"
  ],
  "fieldwork": [
    "noun"
  ],
  "fifteen": [
    "noun"
  ],
  "fifteens": [
    "noun"
  ],
  "fig": [
    "noun",
    "verb"
  ],
  "fight": [
    "verb",
    "noun"
  ],
  "figure": [
    "noun",
    "verb"
  ],
  "figured": [
    "adjective"
  ],
  "figurines": [
    "noun"
  ],
  "file": [
    "noun",
    "verb"
  ],
  "filename": [
    "noun"
  ],
  "fill": [
    "verb",
    "noun"
  ],
  "filling": [
    "noun",
    "adjective"
  ],
  "filly": [
    "noun"
  ],
  "films": [
    "noun"
  ],
  "fin": [
    "noun",
    "verb"
  ],
  "final": [
    "adjective",
    "noun",
    "verb"
  ],
  "finale": [
    "noun"
  ],
  "finality": [
    "noun"
  ],
  "finalize": [
    "verb"
  ],
  "finals": [
    "noun"
  ],
  "financier": [
    "noun",
    "verb"
  ],
  "financiers": [
    "noun"
  ],
  "find": [
    "verb",
    "noun"
  ],
  "finding": [
    "noun"
  ],
  "finds": [
    "verb"
  ],
  "fine": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "fined": [
    "adjective"
  ],
  "finesse": [
    "noun",
    "verb"
  ],
  "finger": [
    "noun",
    "verb"
  ],
  "fingernail": [
    "noun"
  ],
  "fingers": [
    "noun"
  ],
  "finish": [
    "verb",
    "noun"
  ],
  "fir": [
    "noun",
    "adjective"
  ],
  "fire": [
    "noun",
    "adjective",
    "verb"
  ],
  "fireball": [
    "noun",
    "adjective",
    "verb"
  ],
  "fireballs": [
    "noun"
  ],
  "firebird": [
    "noun"
  ],
  "firebirds": [
    "noun"
  ],
  "firebomb": [
    "noun",
    "verb"
  ],
  "firebrands": [
    "noun"
  ],
  "firebrick": [
    "noun"
  ],
  "firebug": [
    "noun"
  ],
  "firedamp": [
    "noun"
  ],
  "firefighter": [
    "noun"
  ],
  "firefly": [
    "noun"
  ],
  "firehouse": [
    "noun"
  ],
  "fireplace": [
    "noun"
  ],
  "firepower": [
    "noun"
  ],
  "firestorm": [
    "noun"
  ],
  "firewood": [
    "noun"
  ],
  "firework": [
    "noun"
  ],
  "fireworks": [
    "noun"
  ],
  "firs": [
    "noun"
  ],
  "first": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "firstborn": [
    "noun",
    "adjective"
  ],
  "firsthand": [
    "adverb",
    "adjective"
  ],
  "fisc": [
    "noun"
  ],
  "fish": [
    "noun",
    "verb"
  ],
  "fishbowl": [
    "noun"
  ],
  "fishing": [
    "noun"
  ],
  "fission": [
    "noun",
    "verb"
  ],
  "fit": [
    "verb",
    "noun",
    "adjective"
  ],
  "fits": [
    "verb",
    "noun",
    "adjective"
  ],
  "five": [
    "noun"
  ],
  "fix": [
    "verb",
    "noun"
  ],
  "fixed": [
    "adjective"
  ],
  "fixture": [
    "noun",
    "verb"
  ],
  "fjord": [
    "noun"
  ],
  "flab": [
    "noun"
  ],
  "flabbergast": [
    "verb",
    "noun"
  ],
  "flag": [
    "noun",
    "verb"
  ],
  "flagella": [
    "noun"
  ],
  "flagpole": [
    "noun",
    "verb"
  ],
  "flagship": [
    "noun",
    "verb"
  ],
  "flagstaff": [
    "noun"
  ],
  "flagstaffs": [
    "noun"
  ],
  "flail": [
    "noun",
    "verb"
  ],
  "flailing": [
    "noun",
    "adjective"
  ],
  "flak": [
    "noun"
  ],
  "flake": [
    "noun",
    "verb"
  ],
  "flaking": [
    "noun",
    "adjective"
  ],
  "flame": [
    "noun",
    "adjective",
    "verb"
  ],
  "flammability": [
    "noun"
  ],
  "flan": [
    "noun",
    "verb"
  ],
  "flanks": [
    "noun"
  ],
  "flannel": [
    "noun",
    "adjective",
    "verb"
  ],
  "flap": [
    "noun",
    "verb"
  ],
  "flapjacks": [
    "noun"
  ],
  "flapped": [
    "adjective"
  ],
  "flaps": [
    "noun"
  ],
  "flare": [
    "noun",
    "verb"
  ],
  "flared": [
    "adjective"
  ],
  "flaring": [
    "noun",
    "adjective"
  ],
  "flashback": [
    "noun",
    "verb"
  ],
  "flashbacks": [
    "noun"
  ],
  "flashlight": [
    "noun",
    "verb"
  ],
  "flat": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "flatfish": [
    "noun"
  ],
  "flaunted": [
    "verb"
  ],
  "flaw": [
    "noun",
    "verb"
  ],
  "fleas": [
    "noun",
    "verb"
  ],
  "fleck": [
    "noun",
    "verb"
  ],
  "flecks": [
    "noun"
  ],
  "flee": [
    "verb"
  ],
  "fleece": [
    "noun",
    "verb"
  ],
  "fleeced": [
    "adjective"
  ],
  "flew": [
    "noun",
    "adjective"
  ],
  "flex": [
    "verb",
    "noun"
  ],
  "flexed": [
    "adjective"
  ],
  "flexion": [
    "noun"
  ],
  "flicks": [
    "noun",
    "verb"
  ],
  "flier": [
    "noun",
    "verb"
  ],
  "flight": [
    "noun",
    "verb",
    "adjective"
  ],
  "flimflam": [
    "noun",
    "verb"
  ],
  "flinch": [
    "verb",
    "noun"
  ],
  "flings": [
    "verb",
    "noun"
  ],
  "flintlock": [
    "noun"
  ],
  "flintlocks": [
    "noun"
  ],
  "flip": [
    "noun",
    "adjective",
    "verb"
  ],
  "flips": [
    "verb",
    "noun"
  ],
  "flirtatious": [
    "adjective"
  ],
  "flit": [
    "verb",
    "noun",
    "adjective"
  ],
  "flitting": [
    "adjective",
    "noun"
  ],
  "float": [
    "noun",
    "verb"
  ],
  "flock": [
    "noun",
    "verb"
  ],
  "flocks": [
    "noun"
  ],
  "flood": [
    "noun",
    "verb"
  ],
  "floor": [
    "noun",
    "verb"
  ],
  "floorboard": [
    "noun",
    "verb"
  ],
  "floored": [
    "adjective"
  ],
  "flop": [
    "noun",
    "verb",
    "adverb"
  ],
  "flopped": [
    "verb"
  ],
  "floppy": [
    "noun",
    "adjective"
  ],
  "flotilla": [
    "noun"
  ],
  "flours": [
    "noun"
  ],
  "flow": [
    "noun",
    "verb"
  ],
  "flowchart": [
    "noun"
  ],
  "flowed": [
    "verb"
  ],
  "flower": [
    "noun",
    "verb"
  ],
  "flowerpot": [
    "noun"
  ],
  "flown": [
    "adjective"
  ],
  "flows": [
    "verb",
    "noun"
  ],
  "flu": [
    "noun"
  ],
  "flume": [
    "noun",
    "verb"
  ],
  "flung": [
    "verb",
    "adjective"
  ],
  "flunk": [
    "verb"
  ],
  "fluor": [
    "noun"
  ],
  "fluorides": [
    "noun"
  ],
  "flurried": [
    "adjective"
  ],
  "flute": [
    "noun",
    "verb"
  ],
  "fly": [
    "verb",
    "noun",
    "adjective"
  ],
  "flyer": [
    "noun",
    "verb"
  ],
  "flying": [
    "noun",
    "adjective"
  ],
  "flytrap": [
    "noun"
  ],
  "flywheel": [
    "noun"
  ],
  "foal": [
    "noun",
    "verb"
  ],
  "focus": [
    "noun",
    "verb"
  ],
  "focused": [
    "adjective"
  ],
  "foe": [
    "noun",
    "adjective"
  ],
  "foes": [
    "noun"
  ],
  "fog": [
    "noun",
    "verb",
    "adjective"
  ],
  "foggy": [
    "adjective"
  ],
  "foil": [
    "noun",
    "verb"
  ],
  "fold": [
    "noun",
    "verb"
  ],
  "folder": [
    "noun"
  ],
  "folklore": [
    "noun"
  ],
  "follow": [
    "verb",
    "noun"
  ],
  "followed": [
    "verb"
  ],
  "following": [
    "adjective",
    "noun"
  ],
  "followup": [
    "noun"
  ],
  "folly": [
    "noun",
    "verb"
  ],
  "fonts": [
    "noun"
  ],
  "foodstuff": [
    "noun"
  ],
  "foolish": [
    "adjective"
  ],
  "foot": [
    "noun",
    "verb"
  ],
  "football": [
    "noun",
    "verb"
  ],
  "footballs": [
    "noun"
  ],
  "foothill": [
    "noun"
  ],
  "foothold": [
    "noun"
  ],
  "footloose": [
    "adjective"
  ],
  "footnote": [
    "noun",
    "verb"
  ],
  "footnoted": [
    "adjective"
  ],
  "footpath": [
    "noun"
  ],
  "footstep": [
    "noun"
  ],
  "footwork": [
    "noun"
  ],
  "forbad": [
    "verb"
  ],
  "forbade": [
    "verb"
  ],
  "forbid": [
    "verb"
  ],
  "forbidden": [
    "adjective"
  ],
  "forbidding": [
    "adjective",
    "noun"
  ],
  "forbids": [
    "verb"
  ],
  "force": [
    "noun",
    "verb"
  ],
  "forced": [
    "adjective"
  ],
  "forces": [
    "noun"
  ],
  "forecast": [
    "noun",
    "verb"
  ],
  "forecaster": [
    "noun"
  ],
  "foreclosed": [
    "verb"
  ],
  "forefoot": [
    "noun",
    "verb"
  ],
  "forefront": [
    "noun",
    "verb"
  ],
  "foregoing": [
    "adjective"
  ],
  "foregone": [
    "adjective"
  ],
  "foreground": [
    "noun",
    "verb"
  ],
  "forehands": [
    "noun"
  ],
  "forehead": [
    "noun"
  ],
  "foreign": [
    "adjective",
    "noun"
  ],
  "forelimb": [
    "noun"
  ],
  "foresaw": [
    "verb"
  ],
  "foreseeing": [
    "noun"
  ],
  "foresight": [
    "noun"
  ],
  "foreskin": [
    "noun",
    "verb"
  ],
  "forest": [
    "noun",
    "verb"
  ],
  "forestalls": [
    "verb"
  ],
  "foretaste": [
    "noun",
    "verb"
  ],
  "foretell": [
    "verb"
  ],
  "foretelling": [
    "noun"
  ],
  "forethought": [
    "noun",
    "adjective"
  ],
  "foretold": [
    "adjective"
  ],
  "forever": [
    "adverb",
    "adjective",
    "noun"
  ],
  "forewarn": [
    "verb"
  ],
  "forewing": [
    "noun"
  ],
  "forewings": [
    "noun"
  ],
  "foreword": [
    "noun"
  ],
  "forget": [
    "verb",
    "noun"
  ],
  "forgetful": [
    "adjective"
  ],
  "forgets": [
    "verb"
  ],
  "forgive": [
    "verb"
  ],
  "forgiveness": [
    "noun"
  ],
  "forgives": [
    "verb"
  ],
  "forgiving": [
    "noun",
    "adjective"
  ],
  "forgo": [
    "verb"
  ],
  "forgoing": [
    "noun"
  ],
  "fork": [
    "noun",
    "verb"
  ],
  "forlorn": [
    "adjective",
    "noun"
  ],
  "form": [
    "noun",
    "verb"
  ],
  "formal": [
    "adjective",
    "noun"
  ],
  "formality": [
    "noun"
  ],
  "format": [
    "noun",
    "verb"
  ],
  "formidable": [
    "adjective"
  ],
  "formulate": [
    "verb"
  ],
  "formulated": [
    "adjective"
  ],
  "forsake": [
    "verb"
  ],
  "forsaking": [
    "noun"
  ],
  "forsook": [
    "verb"
  ],
  "forsworn": [
    "adjective"
  ],
  "forthcoming": [
    "adjective",
    "noun"
  ],
  "fortify": [
    "verb"
  ],
  "fortitude": [
    "noun"
  ],
  "fortnight": [
    "noun"
  ],
  "fortress": [
    "noun",
    "verb"
  ],
  "fortune": [
    "noun",
    "verb"
  ],
  "forum": [
    "noun"
  ],
  "fossil": [
    "noun"
  ],
  "found": [
    "verb",
    "noun"
  ],
  "foundation": [
    "noun"
  ],
  "fount": [
    "noun",
    "verb"
  ],
  "fountain": [
    "noun",
    "verb"
  ],
  "fourteen": [
    "adjective",
    "noun"
  ],
  "fourteens": [
    "noun"
  ],
  "fourth": [
    "adjective",
    "noun",
    "verb"
  ],
  "fox": [
    "noun",
    "verb"
  ],
  "foxhole": [
    "noun",
    "verb"
  ],
  "fracture": [
    "noun",
    "verb"
  ],
  "fragment": [
    "noun",
    "verb"
  ],
  "frail": [
    "adjective",
    "noun",
    "verb"
  ],
  "frame": [
    "noun",
    "verb"
  ],
  "framework": [
    "noun"
  ],
  "frameworks": [
    "noun"
  ],
  "franchise": [
    "noun",
    "verb"
  ],
  "francophile": [
    "adjective",
    "noun"
  ],
  "francs": [
    "noun"
  ],
  "frankincense": [
    "noun"
  ],
  "frap": [
    "noun",
    "verb"
  ],
  "fratricides": [
    "noun"
  ],
  "frau": [
    "noun"
  ],
  "fraud": [
    "noun",
    "verb"
  ],
  "fraught": [
    "verb",
    "noun",
    "adjective"
  ],
  "fraying": [
    "noun"
  ],
  "freaking": [
    "noun",
    "adjective",
    "adverb"
  ],
  "freaks": [
    "noun",
    "verb",
    "adjective"
  ],
  "free": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "freedom": [
    "noun"
  ],
  "freehold": [
    "adjective",
    "noun",
    "verb"
  ],
  "freeholder": [
    "noun"
  ],
  "freestanding": [
    "adjective"
  ],
  "freestyle": [
    "noun",
    "verb"
  ],
  "freewheeling": [
    "adjective"
  ],
  "freeze": [
    "noun",
    "verb"
  ],
  "freezer": [
    "noun"
  ],
  "freight": [
    "noun",
    "verb",
    "adjective"
  ],
  "freighter": [
    "adverb"
  ],
  "frenetic": [
    "adjective",
    "noun"
  ],
  "frequency": [
    "noun"
  ],
  "fresco": [
    "noun",
    "verb"
  ],
  "fresh": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "freshly": [
    "adverb"
  ],
  "fret": [
    "verb",
    "noun"
  ],
  "frets": [
    "noun",
    "verb"
  ],
  "friction": [
    "noun"
  ],
  "friend": [
    "noun",
    "verb"
  ],
  "friendship": [
    "noun"
  ],
  "fright": [
    "noun",
    "adjective",
    "verb"
  ],
  "frighten": [
    "verb"
  ],
  "frightful": [
    "adjective",
    "adverb"
  ],
  "frill": [
    "noun",
    "verb"
  ],
  "frilly": [
    "adjective"
  ],
  "frizz": [
    "noun",
    "verb"
  ],
  "frocks": [
    "noun"
  ],
  "frog": [
    "noun",
    "verb"
  ],
  "frogmouth": [
    "noun"
  ],
  "frontier": [
    "noun",
    "verb"
  ],
  "frontiers": [
    "noun"
  ],
  "frost": [
    "noun",
    "verb"
  ],
  "frostbitten": [
    "adjective"
  ],
  "frown": [
    "noun",
    "verb"
  ],
  "frowned": [
    "verb"
  ],
  "froze": [
    "verb"
  ],
  "frozen": [
    "adjective"
  ],
  "frugality": [
    "noun"
  ],
  "fruit": [
    "noun",
    "verb"
  ],
  "fruitcake": [
    "noun"
  ],
  "fruitcakes": [
    "noun"
  ],
  "frustrate": [
    "verb",
    "adjective"
  ],
  "fry": [
    "noun",
    "verb"
  ],
  "frying": [
    "noun"
  ],
  "fugard": [
    "noun"
  ],
  "fulfil": [
    "verb"
  ],
  "fulfill": [
    "verb"
  ],
  "fulfilling": [
    "adjective",
    "noun"
  ],
  "full": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "fully": [
    "adverb",
    "verb"
  ],
  "fumble": [
    "verb",
    "noun"
  ],
  "fume": [
    "noun",
    "verb"
  ],
  "fun": [
    "noun",
    "adjective",
    "verb"
  ],
  "functional": [
    "adjective",
    "noun"
  ],
  "functionality": [
    "noun"
  ],
  "funeral": [
    "noun",
    "adjective"
  ],
  "fungicides": [
    "noun"
  ],
  "funnel": [
    "noun",
    "verb"
  ],
  "funny": [
    "adjective",
    "noun",
    "adverb"
  ],
  "funs": [
    "noun"
  ],
  "furniture": [
    "noun"
  ],
  "further": [
    "adjective",
    "adverb",
    "verb"
  ],
  "furthermore": [
    "adverb"
  ],
  "fury": [
    "noun"
  ],
  "fused": [
    "adjective"
  ],
  "fusing": [
    "noun"
  ],
  "fussed": [
    "adjective"
  ],
  "fustian": [
    "adjective",
    "noun"
  ],
  "futon": [
    "noun"
  ],
  "future": [
    "noun",
    "adjective"
  ],
  "fuzz": [
    "noun",
    "verb"
  ],
  "ga": [
    "noun"
  ],
  "gabardines": [
    "noun"
  ],
  "gad": [
    "noun",
    "verb"
  ],
  "gaea": [
    "noun"
  ],
  "gaffe": [
    "noun"
  ],
  "gaffes": [
    "noun"
  ],
  "gaga": [
    "noun",
    "adjective"
  ],
  "gain": [
    "verb",
    "noun",
    "adjective",
    "adverb"
  ],
  "galahad": [
    "noun"
  ],
  "galatea": [
    "noun"
  ],
  "galax": [
    "noun"
  ],
  "galaxy": [
    "noun",
    "verb"
  ],
  "galena": [
    "noun"
  ],
  "galilean": [
    "adjective",
    "noun"
  ],
  "galleria": [
    "noun"
  ],
  "gallery": [
    "noun",
    "verb"
  ],
  "galling": [
    "adjective",
    "noun"
  ],
  "galls": [
    "noun"
  ],
  "galosh": [
    "noun",
    "verb"
  ],
  "galoshes": [
    "noun",
    "verb"
  ],
  "galvanic": [
    "adjective"
  ],
  "gamble": [
    "noun",
    "verb"
  ],
  "game": [
    "noun",
    "adjective",
    "verb"
  ],
  "gamecock": [
    "noun"
  ],
  "gamekeeper": [
    "noun"
  ],
  "gamp": [
    "noun"
  ],
  "gangplank": [
    "noun"
  ],
  "ganymede": [
    "noun"
  ],
  "gap": [
    "noun",
    "verb"
  ],
  "gape": [
    "verb",
    "noun"
  ],
  "gar": [
    "noun",
    "verb"
  ],
  "garage": [
    "noun",
    "verb"
  ],
  "garbage": [
    "noun",
    "adjective",
    "verb"
  ],
  "garden": [
    "noun",
    "verb",
    "adjective"
  ],
  "garlic": [
    "noun",
    "verb"
  ],
  "garnish": [
    "noun",
    "verb"
  ],
  "gasoline": [
    "noun",
    "adjective"
  ],
  "gasolines": [
    "noun"
  ],
  "gasp": [
    "noun",
    "verb",
    "adjective"
  ],
  "gasping": [
    "noun",
    "adjective"
  ],
  "gasps": [
    "noun",
    "verb"
  ],
  "gassed": [
    "adjective"
  ],
  "gastroscope": [
    "noun"
  ],
  "gat": [
    "noun",
    "verb"
  ],
  "gate": [
    "noun",
    "verb"
  ],
  "gator": [
    "noun"
  ],
  "gauntlet": [
    "noun"
  ],
  "gave": [
    "verb"
  ],
  "gawk": [
    "verb",
    "noun"
  ],
  "gawking": [
    "verb",
    "noun"
  ],
  "gay": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "gays": [
    "noun"
  ],
  "gaze": [
    "noun",
    "verb"
  ],
  "gazelle": [
    "noun"
  ],
  "gazette": [
    "noun",
    "verb"
  ],
  "gazing": [
    "noun"
  ],
  "gear": [
    "noun",
    "verb",
    "adjective"
  ],
  "gearbox": [
    "noun"
  ],
  "geared": [
    "adjective"
  ],
  "gears": [
    "noun",
    "verb",
    "adjective"
  ],
  "gecko": [
    "noun",
    "verb"
  ],
  "geeing": [
    "verb",
    "noun"
  ],
  "geek": [
    "noun",
    "verb"
  ],
  "geeks": [
    "noun"
  ],
  "gees": [
    "noun"
  ],
  "gel": [
    "noun",
    "verb"
  ],
  "gem": [
    "noun",
    "verb"
  ],
  "gen": [
    "noun",
    "verb"
  ],
  "genealogy": [
    "noun"
  ],
  "general": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "generality": [
    "noun"
  ],
  "generate": [
    "verb",
    "adjective"
  ],
  "generated": [
    "verb"
  ],
  "generating": [
    "verb",
    "noun"
  ],
  "generation": [
    "noun"
  ],
  "generational": [
    "adjective"
  ],
  "generator": [
    "noun"
  ],
  "generosity": [
    "noun"
  ],
  "generous": [
    "adjective"
  ],
  "genes": [
    "noun",
    "verb"
  ],
  "genetic": [
    "adjective"
  ],
  "geniality": [
    "noun"
  ],
  "genocides": [
    "noun"
  ],
  "genotype": [
    "noun",
    "verb"
  ],
  "genteel": [
    "adjective"
  ],
  "gentian": [
    "noun"
  ],
  "gentiles": [
    "noun"
  ],
  "gentility": [
    "noun"
  ],
  "gentle": [
    "adjective",
    "verb",
    "noun"
  ],
  "gentlewoman": [
    "noun"
  ],
  "gentlewomen": [
    "noun"
  ],
  "gentry": [
    "noun"
  ],
  "geodetic": [
    "adjective"
  ],
  "geographer": [
    "noun"
  ],
  "geography": [
    "noun"
  ],
  "geology": [
    "noun"
  ],
  "germ": [
    "noun",
    "verb"
  ],
  "gerontologist": [
    "noun"
  ],
  "gerrymander": [
    "noun",
    "verb"
  ],
  "gesture": [
    "noun",
    "verb"
  ],
  "ghana": [
    "noun"
  ],
  "ghanaian": [
    "adjective",
    "noun"
  ],
  "ghost": [
    "noun",
    "adjective",
    "verb"
  ],
  "ghostlike": [
    "adjective"
  ],
  "ghoul": [
    "noun"
  ],
  "giant": [
    "adjective",
    "noun"
  ],
  "gibe": [
    "noun",
    "verb"
  ],
  "gift": [
    "noun",
    "verb"
  ],
  "gigantic": [
    "adjective"
  ],
  "giggle": [
    "noun",
    "verb"
  ],
  "gild": [
    "noun",
    "verb"
  ],
  "gingerbread": [
    "noun",
    "verb"
  ],
  "giraffes": [
    "noun"
  ],
  "gird": [
    "verb",
    "noun"
  ],
  "girds": [
    "verb",
    "noun"
  ],
  "girl": [
    "noun",
    "verb"
  ],
  "girlfriend": [
    "noun",
    "verb"
  ],
  "girlfriends": [
    "noun",
    "verb"
  ],
  "girlhood": [
    "noun"
  ],
  "girth": [
    "noun",
    "verb"
  ],
  "git": [
    "verb",
    "noun"
  ],
  "gitana": [
    "noun"
  ],
  "give": [
    "verb",
    "noun"
  ],
  "gives": [
    "verb"
  ],
  "giving": [
    "verb",
    "adjective",
    "noun"
  ],
  "glace": [
    "adjective"
  ],
  "glacier": [
    "noun"
  ],
  "glad": [
    "adjective",
    "verb",
    "noun"
  ],
  "gladiator": [
    "noun",
    "verb"
  ],
  "glamor": [
    "noun",
    "verb"
  ],
  "glance": [
    "noun",
    "verb"
  ],
  "gland": [
    "noun"
  ],
  "glands": [
    "noun"
  ],
  "glare": [
    "noun",
    "verb",
    "adjective"
  ],
  "glared": [
    "verb"
  ],
  "glaring": [
    "adjective",
    "noun"
  ],
  "glass": [
    "noun",
    "verb"
  ],
  "glassblower": [
    "noun"
  ],
  "glassed": [
    "adjective"
  ],
  "glasses": [
    "noun"
  ],
  "glazing": [
    "noun"
  ],
  "gleam": [
    "noun",
    "verb"
  ],
  "gleaming": [
    "adjective",
    "noun"
  ],
  "gleams": [
    "noun",
    "verb"
  ],
  "glee": [
    "noun",
    "verb"
  ],
  "glide": [
    "noun",
    "verb"
  ],
  "glided": [
    "verb"
  ],
  "glides": [
    "verb",
    "noun"
  ],
  "glint": [
    "noun",
    "verb",
    "adjective"
  ],
  "glisten": [
    "verb",
    "noun"
  ],
  "gloam": [
    "noun",
    "verb"
  ],
  "gloat": [
    "verb",
    "noun"
  ],
  "glob": [
    "noun",
    "verb"
  ],
  "global": [
    "adjective",
    "noun",
    "adverb"
  ],
  "globe": [
    "noun",
    "verb"
  ],
  "glockenspiel": [
    "noun"
  ],
  "gloom": [
    "noun",
    "verb"
  ],
  "gloomy": [
    "adjective",
    "noun"
  ],
  "glop": [
    "noun",
    "verb"
  ],
  "glove": [
    "noun",
    "verb"
  ],
  "gloved": [
    "adjective"
  ],
  "glow": [
    "noun",
    "verb"
  ],
  "glowed": [
    "verb"
  ],
  "glower": [
    "noun",
    "verb"
  ],
  "glows": [
    "verb",
    "noun"
  ],
  "glue": [
    "noun",
    "verb"
  ],
  "glued": [
    "adjective"
  ],
  "glum": [
    "adjective",
    "noun",
    "verb"
  ],
  "glummer": [
    "noun",
    "adjective"
  ],
  "glut": [
    "noun",
    "verb"
  ],
  "glutton": [
    "noun",
    "adjective",
    "verb"
  ],
  "glycerol": [
    "noun"
  ],
  "gnarling": [
    "noun"
  ],
  "gnarly": [
    "adjective"
  ],
  "gnash": [
    "verb",
    "noun"
  ],
  "gnat": [
    "noun"
  ],
  "gnaw": [
    "verb",
    "noun"
  ],
  "gnawed": [
    "adjective"
  ],
  "gnaws": [
    "verb"
  ],
  "gneiss": [
    "noun"
  ],
  "go": [
    "verb",
    "noun",
    "adjective"
  ],
  "goal": [
    "noun",
    "verb"
  ],
  "goalkeeper": [
    "noun"
  ],
  "goalpost": [
    "noun"
  ],
  "goat": [
    "noun",
    "verb"
  ],
  "gobbledygook": [
    "noun"
  ],
  "goddam": [
    "noun"
  ],
  "godmothers": [
    "noun"
  ],
  "gods": [
    "noun"
  ],
  "godsend": [
    "noun"
  ],
  "godsends": [
    "noun"
  ],
  "goggles": [
    "noun"
  ],
  "gold": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "goldenrod": [
    "noun",
    "adjective"
  ],
  "goldsmith": [
    "noun"
  ],
  "golf": [
    "noun",
    "verb"
  ],
  "gond": [
    "noun"
  ],
  "gondoliers": [
    "noun"
  ],
  "goniometer": [
    "noun"
  ],
  "gonorrhea": [
    "noun"
  ],
  "good": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "gook": [
    "noun"
  ],
  "goop": [
    "noun",
    "verb"
  ],
  "goosefish": [
    "noun"
  ],
  "goosefoot": [
    "noun"
  ],
  "gorge": [
    "noun",
    "verb",
    "adjective"
  ],
  "gorgeous": [
    "adjective"
  ],
  "gorilla": [
    "noun"
  ],
  "goshawk": [
    "noun"
  ],
  "got": [
    "verb",
    "noun"
  ],
  "gouache": [
    "noun",
    "verb"
  ],
  "gout": [
    "noun",
    "verb"
  ],
  "government": [
    "noun"
  ],
  "governmental": [
    "adjective"
  ],
  "governor": [
    "noun"
  ],
  "gown": [
    "noun",
    "verb"
  ],
  "grab": [
    "verb",
    "noun"
  ],
  "grace": [
    "noun",
    "verb"
  ],
  "graced": [
    "verb"
  ],
  "gracing": [
    "noun"
  ],
  "grade": [
    "noun",
    "verb"
  ],
  "gradual": [
    "adjective",
    "noun"
  ],
  "graduate": [
    "noun",
    "adjective",
    "verb"
  ],
  "graduating": [
    "verb"
  ],
  "graduation": [
    "noun"
  ],
  "grail": [
    "noun"
  ],
  "grammar": [
    "noun",
    "verb"
  ],
  "grammatical": [
    "adjective"
  ],
  "grand": [
    "noun",
    "adjective"
  ],
  "grandad": [
    "noun"
  ],
  "grandchildren": [
    "noun"
  ],
  "granddad": [
    "noun"
  ],
  "granddaddy": [
    "noun"
  ],
  "grandfather": [
    "noun",
    "verb"
  ],
  "grandma": [
    "noun",
    "verb"
  ],
  "grandmas": [
    "noun"
  ],
  "grandmother": [
    "noun"
  ],
  "grandmothers": [
    "noun"
  ],
  "grandpa": [
    "noun"
  ],
  "grandparents": [
    "noun"
  ],
  "grandpas": [
    "noun"
  ],
  "grands": [
    "noun"
  ],
  "grandson": [
    "noun"
  ],
  "grandsons": [
    "noun"
  ],
  "grant": [
    "noun",
    "verb"
  ],
  "grape": [
    "noun",
    "adjective",
    "verb"
  ],
  "grapefruit": [
    "noun"
  ],
  "graphs": [
    "noun"
  ],
  "grapple": [
    "verb",
    "noun"
  ],
  "grasp": [
    "verb",
    "noun"
  ],
  "grass": [
    "noun",
    "verb"
  ],
  "grassed": [
    "adjective"
  ],
  "grasshopper": [
    "noun",
    "verb"
  ],
  "grassland": [
    "noun"
  ],
  "grasslands": [
    "noun"
  ],
  "grateful": [
    "adjective"
  ],
  "gratifying": [
    "adjective"
  ],
  "gratitude": [
    "noun"
  ],
  "grave": [
    "adjective",
    "noun",
    "verb"
  ],
  "gravel": [
    "noun",
    "verb"
  ],
  "gravimeter": [
    "noun"
  ],
  "gravity": [
    "noun"
  ],
  "gravy": [
    "noun",
    "verb"
  ],
  "gray": [
    "adjective",
    "noun",
    "verb"
  ],
  "graying": [
    "verb",
    "noun"
  ],
  "graze": [
    "verb",
    "noun"
  ],
  "grazing": [
    "noun"
  ],
  "grease": [
    "noun",
    "verb"
  ],
  "greased": [
    "adjective"
  ],
  "greater": [
    "adjective"
  ],
  "greave": [
    "noun",
    "verb"
  ],
  "greece": [
    "noun"
  ],
  "greed": [
    "noun",
    "verb"
  ],
  "greedy": [
    "adjective"
  ],
  "greeks": [
    "noun"
  ],
  "green": [
    "adjective",
    "noun",
    "verb"
  ],
  "greenbacks": [
    "noun"
  ],
  "greenbelt": [
    "noun"
  ],
  "greens": [
    "noun"
  ],
  "greeting": [
    "noun"
  ],
  "gregarious": [
    "adjective"
  ],
  "grenade": [
    "noun",
    "verb"
  ],
  "grew": [
    "verb",
    "noun"
  ],
  "greyhound": [
    "noun",
    "verb"
  ],
  "greylag": [
    "noun"
  ],
  "gridlock": [
    "noun",
    "verb"
  ],
  "grids": [
    "noun"
  ],
  "grief": [
    "noun",
    "verb"
  ],
  "grieve": [
    "verb",
    "noun"
  ],
  "griever": [
    "noun"
  ],
  "grieving": [
    "noun",
    "adjective"
  ],
  "griffin": [
    "noun"
  ],
  "grill": [
    "noun",
    "verb",
    "adjective"
  ],
  "grille": [
    "noun"
  ],
  "grilling": [
    "noun"
  ],
  "grin": [
    "noun",
    "verb"
  ],
  "grind": [
    "verb",
    "noun"
  ],
  "grinder": [
    "noun"
  ],
  "grip": [
    "noun",
    "verb"
  ],
  "gripped": [
    "adjective"
  ],
  "grips": [
    "verb",
    "noun"
  ],
  "grits": [
    "noun"
  ],
  "gritting": [
    "noun"
  ],
  "groan": [
    "noun",
    "verb"
  ],
  "groaning": [
    "noun",
    "adjective"
  ],
  "groans": [
    "noun",
    "verb"
  ],
  "groovy": [
    "adjective",
    "noun"
  ],
  "grope": [
    "verb",
    "noun"
  ],
  "grosbeak": [
    "noun"
  ],
  "grosbeaks": [
    "noun"
  ],
  "grossed": [
    "verb"
  ],
  "ground": [
    "noun",
    "verb",
    "adjective"
  ],
  "groundnut": [
    "noun"
  ],
  "groundwork": [
    "noun"
  ],
  "grouse": [
    "noun",
    "verb",
    "adjective"
  ],
  "grove": [
    "noun",
    "verb"
  ],
  "grow": [
    "verb",
    "noun"
  ],
  "growing": [
    "noun"
  ],
  "growling": [
    "adjective",
    "noun"
  ],
  "grown": [
    "adjective"
  ],
  "grownup": [
    "adjective",
    "noun"
  ],
  "grows": [
    "verb"
  ],
  "growth": [
    "noun"
  ],
  "gruff": [
    "adjective",
    "verb",
    "noun"
  ],
  "grumble": [
    "verb",
    "noun"
  ],
  "grump": [
    "noun",
    "verb"
  ],
  "grunt": [
    "noun",
    "verb"
  ],
  "grunts": [
    "noun"
  ],
  "guam": [
    "noun"
  ],
  "guarantee": [
    "noun",
    "verb"
  ],
  "guaranteed": [
    "adjective"
  ],
  "guarantees": [
    "noun",
    "verb"
  ],
  "guard": [
    "noun",
    "verb"
  ],
  "guards": [
    "noun"
  ],
  "guardsman": [
    "noun"
  ],
  "guck": [
    "noun"
  ],
  "guess": [
    "verb",
    "noun"
  ],
  "guessed": [
    "verb"
  ],
  "guesser": [
    "noun"
  ],
  "guesswork": [
    "noun"
  ],
  "guest": [
    "noun",
    "verb"
  ],
  "guesthouse": [
    "noun"
  ],
  "guests": [
    "noun"
  ],
  "guff": [
    "noun",
    "verb"
  ],
  "guffaw": [
    "noun",
    "verb"
  ],
  "guffaws": [
    "noun"
  ],
  "guiana": [
    "noun"
  ],
  "guide": [
    "noun",
    "verb"
  ],
  "guidebook": [
    "noun"
  ],
  "guidebooks": [
    "noun"
  ],
  "guidepost": [
    "noun"
  ],
  "guides": [
    "noun",
    "verb"
  ],
  "guild": [
    "noun"
  ],
  "guillotine": [
    "noun",
    "verb"
  ],
  "guilt": [
    "noun",
    "verb",
    "adjective"
  ],
  "guilty": [
    "adjective",
    "noun"
  ],
  "guitar": [
    "noun",
    "verb"
  ],
  "gullibility": [
    "noun"
  ],
  "gulp": [
    "noun",
    "verb"
  ],
  "gun": [
    "noun",
    "verb"
  ],
  "gunboat": [
    "noun"
  ],
  "gunfire": [
    "noun"
  ],
  "gunmen": [
    "noun"
  ],
  "guns": [
    "noun"
  ],
  "gunshot": [
    "noun"
  ],
  "gunsmith": [
    "noun"
  ],
  "guyana": [
    "noun"
  ],
  "gymnasium": [
    "noun"
  ],
  "gymnastics": [
    "noun"
  ],
  "gynecological": [
    "adjective"
  ],
  "gynecology": [
    "noun"
  ],
  "gypped": [
    "verb"
  ],
  "gyroscope": [
    "noun"
  ],
  "habitat": [
    "noun"
  ],
  "hacked": [
    "verb"
  ],
  "hacks": [
    "noun",
    "verb"
  ],
  "hacksaw": [
    "noun",
    "verb"
  ],
  "had": [
    "verb"
  ],
  "hades": [
    "noun"
  ],
  "hadron": [
    "noun"
  ],
  "hagiography": [
    "noun"
  ],
  "hail": [
    "noun",
    "verb",
    "adjective"
  ],
  "hailstorm": [
    "noun"
  ],
  "hair": [
    "noun",
    "verb"
  ],
  "hairdressing": [
    "noun"
  ],
  "haired": [
    "adjective"
  ],
  "hairline": [
    "noun",
    "adjective"
  ],
  "hairstyle": [
    "noun"
  ],
  "hairy": [
    "adjective"
  ],
  "half": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "halfhearted": [
    "adjective"
  ],
  "halftime": [
    "noun",
    "adjective",
    "adverb"
  ],
  "halftimes": [
    "noun"
  ],
  "hall": [
    "noun"
  ],
  "halloween": [
    "noun"
  ],
  "hallucinatory": [
    "adjective"
  ],
  "hallway": [
    "noun"
  ],
  "hallways": [
    "noun"
  ],
  "halve": [
    "verb"
  ],
  "halving": [
    "noun"
  ],
  "ham": [
    "noun",
    "verb",
    "adverb"
  ],
  "hamitic": [
    "adjective",
    "noun"
  ],
  "hamlet": [
    "noun"
  ],
  "hammer": [
    "noun",
    "verb"
  ],
  "hammock": [
    "noun",
    "verb"
  ],
  "hamstring": [
    "noun",
    "verb"
  ],
  "hamstrings": [
    "noun"
  ],
  "hand": [
    "noun",
    "verb"
  ],
  "handbag": [
    "noun",
    "verb"
  ],
  "handball": [
    "noun",
    "verb"
  ],
  "handballs": [
    "noun"
  ],
  "handbook": [
    "noun"
  ],
  "handbooks": [
    "noun"
  ],
  "handcraft": [
    "noun",
    "verb"
  ],
  "handgun": [
    "noun"
  ],
  "handguns": [
    "noun"
  ],
  "handicap": [
    "noun",
    "verb"
  ],
  "handicaps": [
    "noun"
  ],
  "handicraft": [
    "noun"
  ],
  "handiwork": [
    "noun"
  ],
  "handle": [
    "verb",
    "noun"
  ],
  "handlebar": [
    "noun"
  ],
  "handloom": [
    "noun"
  ],
  "handout": [
    "noun",
    "adjective"
  ],
  "handsaw": [
    "noun"
  ],
  "handsaws": [
    "noun"
  ],
  "handset": [
    "noun",
    "verb"
  ],
  "handsets": [
    "noun"
  ],
  "handshake": [
    "noun",
    "verb"
  ],
  "handshakes": [
    "noun"
  ],
  "handshaking": [
    "noun"
  ],
  "handsome": [
    "adjective",
    "verb"
  ],
  "handstands": [
    "noun"
  ],
  "handwriting": [
    "noun"
  ],
  "handyman": [
    "noun",
    "verb"
  ],
  "handymen": [
    "noun"
  ],
  "hanging": [
    "noun",
    "adjective"
  ],
  "hangout": [
    "noun"
  ],
  "hangover": [
    "noun"
  ],
  "hap": [
    "noun",
    "verb"
  ],
  "happen": [
    "verb",
    "adverb"
  ],
  "happenstance": [
    "noun"
  ],
  "happiness": [
    "noun"
  ],
  "happy": [
    "adjective",
    "verb",
    "noun"
  ],
  "harangue": [
    "noun",
    "verb"
  ],
  "harass": [
    "verb",
    "noun"
  ],
  "harassed": [
    "adjective"
  ],
  "harbor": [
    "noun",
    "verb"
  ],
  "hard": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "hardball": [
    "noun",
    "adjective",
    "verb"
  ],
  "harden": [
    "verb",
    "noun"
  ],
  "hardly": [
    "adverb"
  ],
  "hardware": [
    "noun"
  ],
  "hardwood": [
    "noun",
    "adjective"
  ],
  "hardworking": [
    "adjective"
  ],
  "harm": [
    "noun",
    "verb"
  ],
  "harmonic": [
    "noun",
    "adjective"
  ],
  "harmony": [
    "noun"
  ],
  "harp": [
    "noun",
    "verb"
  ],
  "harpoon": [
    "noun",
    "verb"
  ],
  "harpsichord": [
    "noun"
  ],
  "harried": [
    "adjective"
  ],
  "harsh": [
    "adjective",
    "verb",
    "noun"
  ],
  "harvest": [
    "noun",
    "verb"
  ],
  "hasid": [
    "noun"
  ],
  "hassle": [
    "noun",
    "verb",
    "adjective"
  ],
  "hat": [
    "noun",
    "verb"
  ],
  "hatch": [
    "noun",
    "verb"
  ],
  "hate": [
    "verb",
    "noun"
  ],
  "hater": [
    "noun"
  ],
  "hates": [
    "verb"
  ],
  "haul": [
    "verb",
    "noun"
  ],
  "hauled": [
    "verb"
  ],
  "hauling": [
    "noun"
  ],
  "hauls": [
    "noun",
    "verb"
  ],
  "haunted": [
    "adjective"
  ],
  "havelock": [
    "noun"
  ],
  "haven": [
    "noun",
    "verb"
  ],
  "hawaii": [
    "noun"
  ],
  "hawk": [
    "noun",
    "verb"
  ],
  "hawked": [
    "adjective"
  ],
  "hay": [
    "noun",
    "verb"
  ],
  "hayfield": [
    "noun"
  ],
  "haying": [
    "noun"
  ],
  "haystack": [
    "noun"
  ],
  "haystacks": [
    "noun"
  ],
  "haze": [
    "noun",
    "verb"
  ],
  "hazelnut": [
    "noun"
  ],
  "hazing": [
    "noun"
  ],
  "hazy": [
    "adjective",
    "noun"
  ],
  "head": [
    "noun",
    "adjective",
    "verb"
  ],
  "headache": [
    "noun"
  ],
  "headaches": [
    "noun"
  ],
  "headband": [
    "noun"
  ],
  "headbands": [
    "noun"
  ],
  "headboard": [
    "noun"
  ],
  "headdress": [
    "noun"
  ],
  "headed": [
    "adjective"
  ],
  "headfirst": [
    "adverb",
    "adjective"
  ],
  "headline": [
    "noun",
    "verb"
  ],
  "headliner": [
    "noun"
  ],
  "headlong": [
    "verb",
    "adjective",
    "adverb"
  ],
  "headphone": [
    "noun"
  ],
  "headroom": [
    "noun"
  ],
  "headset": [
    "noun"
  ],
  "headsets": [
    "noun"
  ],
  "headstone": [
    "noun"
  ],
  "headstrong": [
    "adjective"
  ],
  "headwater": [
    "noun"
  ],
  "heal": [
    "verb",
    "noun"
  ],
  "heals": [
    "verb",
    "noun"
  ],
  "hear": [
    "verb"
  ],
  "heard": [
    "adjective",
    "noun"
  ],
  "heart": [
    "noun",
    "verb"
  ],
  "heartache": [
    "noun"
  ],
  "heartbeat": [
    "noun"
  ],
  "heartbreak": [
    "noun"
  ],
  "heartbreaking": [
    "adjective",
    "noun"
  ],
  "heartbreaks": [
    "noun"
  ],
  "heartburn": [
    "noun"
  ],
  "heartland": [
    "noun"
  ],
  "hearts": [
    "noun"
  ],
  "heartthrob": [
    "noun"
  ],
  "heat": [
    "noun",
    "verb"
  ],
  "heating": [
    "noun",
    "adjective"
  ],
  "heaven": [
    "noun",
    "verb"
  ],
  "heavily": [
    "adverb"
  ],
  "heaving": [
    "noun",
    "adjective"
  ],
  "heavy": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "hectare": [
    "noun"
  ],
  "hectograph": [
    "noun",
    "verb"
  ],
  "hedge": [
    "noun",
    "verb"
  ],
  "hedgehog": [
    "noun",
    "verb"
  ],
  "hedonic": [
    "adjective"
  ],
  "hedonistic": [
    "adjective"
  ],
  "heed": [
    "verb",
    "noun"
  ],
  "heeded": [
    "verb"
  ],
  "heeds": [
    "verb"
  ],
  "heel": [
    "noun",
    "verb"
  ],
  "heeled": [
    "adjective"
  ],
  "heeling": [
    "noun"
  ],
  "heels": [
    "noun"
  ],
  "heir": [
    "noun",
    "verb"
  ],
  "heirloom": [
    "noun"
  ],
  "helicons": [
    "noun"
  ],
  "helicopter": [
    "noun",
    "verb"
  ],
  "helios": [
    "noun"
  ],
  "heliotrope": [
    "noun",
    "adjective"
  ],
  "helium": [
    "noun"
  ],
  "hellenistic": [
    "adjective"
  ],
  "helmet": [
    "noun",
    "verb"
  ],
  "helmsman": [
    "noun"
  ],
  "helped": [
    "verb"
  ],
  "helping": [
    "noun"
  ],
  "helps": [
    "noun"
  ],
  "hematology": [
    "noun"
  ],
  "hemisphere": [
    "noun"
  ],
  "hemlock": [
    "noun"
  ],
  "hemorrhoid": [
    "noun"
  ],
  "hen": [
    "noun",
    "verb",
    "adverb"
  ],
  "henhouse": [
    "noun"
  ],
  "hepatic": [
    "adjective",
    "noun"
  ],
  "herb": [
    "noun"
  ],
  "herbaceous": [
    "adjective"
  ],
  "herbicides": [
    "noun"
  ],
  "herbivore": [
    "noun"
  ],
  "herd": [
    "noun",
    "verb"
  ],
  "herds": [
    "noun"
  ],
  "here": [
    "adverb",
    "noun",
    "adjective"
  ],
  "hereby": [
    "adverb"
  ],
  "hereditary": [
    "adjective",
    "noun"
  ],
  "herein": [
    "adverb"
  ],
  "heritage": [
    "noun"
  ],
  "herm": [
    "noun",
    "adjective"
  ],
  "hero": [
    "noun",
    "verb"
  ],
  "heroism": [
    "noun"
  ],
  "hesitant": [
    "adjective"
  ],
  "hesitate": [
    "verb"
  ],
  "heterocercal": [
    "adjective"
  ],
  "heterogeneous": [
    "adjective"
  ],
  "heterosexuality": [
    "noun"
  ],
  "heterosis": [
    "noun"
  ],
  "heuristic": [
    "adjective",
    "noun"
  ],
  "hewer": [
    "noun"
  ],
  "hewing": [
    "noun"
  ],
  "hewn": [
    "adjective"
  ],
  "hex": [
    "noun",
    "verb"
  ],
  "hibernation": [
    "noun"
  ],
  "hidden": [
    "adjective",
    "noun"
  ],
  "hide": [
    "verb",
    "noun"
  ],
  "hideout": [
    "noun"
  ],
  "hiding": [
    "noun"
  ],
  "hieroglyph": [
    "noun",
    "verb"
  ],
  "high": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "highboy": [
    "noun"
  ],
  "highbrow": [
    "adjective",
    "noun"
  ],
  "higher": [
    "verb",
    "noun"
  ],
  "highflier": [
    "noun"
  ],
  "highlight": [
    "verb",
    "noun"
  ],
  "highlighting": [
    "noun",
    "adjective"
  ],
  "highly": [
    "adverb"
  ],
  "highness": [
    "noun"
  ],
  "highschool": [
    "noun"
  ],
  "highway": [
    "noun",
    "verb"
  ],
  "highways": [
    "noun"
  ],
  "hijack": [
    "verb",
    "noun"
  ],
  "hijacked": [
    "adjective"
  ],
  "hiking": [
    "noun"
  ],
  "hilarious": [
    "adjective"
  ],
  "hilarity": [
    "noun"
  ],
  "hill": [
    "noun",
    "verb"
  ],
  "hillsides": [
    "noun"
  ],
  "hilltop": [
    "noun"
  ],
  "hilly": [
    "adjective"
  ],
  "himalaya": [
    "noun"
  ],
  "hindus": [
    "noun",
    "adjective"
  ],
  "hindustan": [
    "noun"
  ],
  "hinge": [
    "noun",
    "verb"
  ],
  "hinterlands": [
    "noun"
  ],
  "hip": [
    "noun",
    "verb",
    "adjective"
  ],
  "hippocratic": [
    "adjective"
  ],
  "hippodrome": [
    "noun",
    "verb"
  ],
  "hissed": [
    "verb"
  ],
  "hissing": [
    "noun",
    "adjective"
  ],
  "histogram": [
    "noun",
    "verb"
  ],
  "histology": [
    "noun"
  ],
  "historical": [
    "adjective",
    "noun"
  ],
  "historiography": [
    "noun"
  ],
  "history": [
    "noun",
    "verb"
  ],
  "histrionic": [
    "adjective"
  ],
  "hit": [
    "verb",
    "noun",
    "adjective"
  ],
  "hitchhike": [
    "verb",
    "noun"
  ],
  "hitler": [
    "noun"
  ],
  "hits": [
    "noun"
  ],
  "hitting": [
    "noun"
  ],
  "hive": [
    "noun",
    "verb"
  ],
  "hoarse": [
    "adjective",
    "verb",
    "noun"
  ],
  "hob": [
    "noun",
    "verb"
  ],
  "hobnob": [
    "verb",
    "noun",
    "adjective",
    "adverb"
  ],
  "hockey": [
    "noun"
  ],
  "hoe": [
    "noun",
    "verb"
  ],
  "hoeing": [
    "noun"
  ],
  "hog": [
    "noun",
    "verb"
  ],
  "hold": [
    "verb",
    "noun",
    "adjective"
  ],
  "holdfast": [
    "noun"
  ],
  "holdover": [
    "noun"
  ],
  "holdup": [
    "noun"
  ],
  "hole": [
    "noun",
    "verb",
    "adjective"
  ],
  "holed": [
    "adjective"
  ],
  "holiday": [
    "noun",
    "verb"
  ],
  "holidays": [
    "noun",
    "adverb"
  ],
  "holistic": [
    "adjective"
  ],
  "hollow": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "hollyhock": [
    "noun"
  ],
  "hollyhocks": [
    "noun"
  ],
  "hologram": [
    "noun"
  ],
  "holy": [
    "noun",
    "adjective"
  ],
  "homebound": [
    "adjective",
    "adverb"
  ],
  "homecoming": [
    "noun"
  ],
  "homeland": [
    "noun"
  ],
  "homelands": [
    "noun"
  ],
  "homelike": [
    "adjective"
  ],
  "homemade": [
    "adjective"
  ],
  "homemaking": [
    "noun"
  ],
  "homeric": [
    "adjective"
  ],
  "homesick": [
    "adjective"
  ],
  "homespun": [
    "noun",
    "adjective"
  ],
  "homestead": [
    "noun",
    "verb"
  ],
  "hometown": [
    "noun"
  ],
  "homework": [
    "noun"
  ],
  "homicide": [
    "noun"
  ],
  "homicides": [
    "noun"
  ],
  "homiletic": [
    "adjective"
  ],
  "homogeneous": [
    "adjective"
  ],
  "homophone": [
    "noun"
  ],
  "honest": [
    "adjective",
    "adverb",
    "verb"
  ],
  "honestly": [
    "adverb"
  ],
  "honesty": [
    "noun"
  ],
  "honey": [
    "noun",
    "adjective",
    "verb"
  ],
  "honeycomb": [
    "noun",
    "verb"
  ],
  "honeymoon": [
    "noun",
    "verb"
  ],
  "honeysuckles": [
    "noun"
  ],
  "honor": [
    "noun",
    "verb"
  ],
  "honorary": [
    "adjective",
    "noun"
  ],
  "hood": [
    "noun",
    "verb",
    "adjective"
  ],
  "hoodwink": [
    "verb",
    "noun"
  ],
  "hook": [
    "noun",
    "verb"
  ],
  "hooked": [
    "adjective"
  ],
  "hooking": [
    "noun"
  ],
  "hookup": [
    "noun"
  ],
  "hoopla": [
    "noun"
  ],
  "hoot": [
    "noun",
    "verb"
  ],
  "hop": [
    "noun",
    "verb"
  ],
  "hope": [
    "noun",
    "verb"
  ],
  "hopeful": [
    "adjective",
    "noun"
  ],
  "hoping": [
    "adjective"
  ],
  "hopped": [
    "adjective"
  ],
  "horizon": [
    "noun"
  ],
  "hormone": [
    "noun",
    "verb"
  ],
  "horn": [
    "noun",
    "verb"
  ],
  "hornblende": [
    "noun"
  ],
  "horoscope": [
    "noun"
  ],
  "horrible": [
    "adjective",
    "noun"
  ],
  "horrifying": [
    "adjective"
  ],
  "horse": [
    "noun",
    "verb"
  ],
  "horseback": [
    "noun",
    "adverb"
  ],
  "horseflesh": [
    "noun",
    "adjective"
  ],
  "horses": [
    "noun"
  ],
  "horseshit": [
    "noun"
  ],
  "horseshoes": [
    "noun"
  ],
  "hose": [
    "noun",
    "verb"
  ],
  "hosed": [
    "adjective"
  ],
  "hospital": [
    "noun",
    "adjective"
  ],
  "hostage": [
    "noun",
    "verb"
  ],
  "hostel": [
    "noun",
    "verb"
  ],
  "hot": [
    "adjective",
    "adverb",
    "verb",
    "noun"
  ],
  "hotcakes": [
    "noun"
  ],
  "hotel": [
    "noun"
  ],
  "hothouse": [
    "noun",
    "verb"
  ],
  "hotpot": [
    "noun"
  ],
  "hotshot": [
    "noun",
    "adjective",
    "verb"
  ],
  "hound": [
    "noun",
    "verb"
  ],
  "hounds": [
    "noun"
  ],
  "hourglass": [
    "noun",
    "verb"
  ],
  "hourlong": [
    "adjective"
  ],
  "house": [
    "noun",
    "verb"
  ],
  "houseboat": [
    "noun"
  ],
  "household": [
    "noun",
    "adjective"
  ],
  "houses": [
    "noun"
  ],
  "housework": [
    "noun"
  ],
  "hover": [
    "verb",
    "noun"
  ],
  "hovercraft": [
    "noun"
  ],
  "hubcap": [
    "noun"
  ],
  "hubcaps": [
    "noun"
  ],
  "huddle": [
    "noun",
    "verb",
    "adjective"
  ],
  "hues": [
    "noun"
  ],
  "hug": [
    "noun",
    "verb"
  ],
  "humane": [
    "adjective"
  ],
  "humanistic": [
    "adjective"
  ],
  "humankind": [
    "noun"
  ],
  "humanoid": [
    "adjective",
    "noun"
  ],
  "humans": [
    "adjective",
    "noun",
    "verb"
  ],
  "humbug": [
    "noun",
    "verb"
  ],
  "humdrum": [
    "adjective",
    "noun"
  ],
  "humidifier": [
    "noun"
  ],
  "humidity": [
    "noun"
  ],
  "humming": [
    "noun",
    "adjective"
  ],
  "hummingbird": [
    "noun"
  ],
  "hummingbirds": [
    "noun"
  ],
  "hums": [
    "noun"
  ],
  "hunchback": [
    "noun"
  ],
  "hundred": [
    "noun"
  ],
  "hundreds": [
    "noun"
  ],
  "hung": [
    "adjective",
    "noun"
  ],
  "hunting": [
    "noun"
  ],
  "hurdle": [
    "noun",
    "verb"
  ],
  "hurl": [
    "verb",
    "noun"
  ],
  "hurled": [
    "verb"
  ],
  "hurrah": [
    "noun",
    "verb"
  ],
  "hurricane": [
    "noun",
    "verb"
  ],
  "hurried": [
    "adjective"
  ],
  "hurt": [
    "verb",
    "noun",
    "adjective"
  ],
  "hurting": [
    "noun"
  ],
  "hurts": [
    "verb",
    "noun",
    "adjective"
  ],
  "husband": [
    "noun",
    "verb"
  ],
  "hustle": [
    "noun",
    "verb"
  ],
  "hydrated": [
    "adjective"
  ],
  "hydrocephalic": [
    "adjective",
    "noun"
  ],
  "hydrofoil": [
    "noun",
    "verb"
  ],
  "hydrogen": [
    "noun"
  ],
  "hydrographic": [
    "adjective"
  ],
  "hydroponic": [
    "adjective"
  ],
  "hyena": [
    "noun"
  ],
  "hygiene": [
    "noun"
  ],
  "hymn": [
    "noun",
    "verb"
  ],
  "hypertension": [
    "noun"
  ],
  "hypertonic": [
    "adjective"
  ],
  "hypnotism": [
    "noun"
  ],
  "hypocrite": [
    "noun"
  ],
  "hypocrites": [
    "noun"
  ],
  "hypotension": [
    "noun"
  ],
  "hypothesis": [
    "noun"
  ],
  "hypothetical": [
    "adjective",
    "noun"
  ],
  "hypothetically": [
    "adverb"
  ],
  "hysteria": [
    "noun"
  ],
  "ice": [
    "noun",
    "verb",
    "adjective"
  ],
  "iceberg": [
    "noun"
  ],
  "icebox": [
    "noun",
    "adjective"
  ],
  "iconoclast": [
    "noun"
  ],
  "iconoclastic": [
    "adjective"
  ],
  "ideal": [
    "adjective",
    "noun"
  ],
  "ideals": [
    "noun"
  ],
  "ideas": [
    "noun"
  ],
  "identifier": [
    "noun"
  ],
  "identify": [
    "verb"
  ],
  "identifying": [
    "noun",
    "adjective"
  ],
  "identities": [
    "noun"
  ],
  "identity": [
    "noun"
  ],
  "ideologist": [
    "noun"
  ],
  "idiom": [
    "noun"
  ],
  "idiosyncratic": [
    "adjective"
  ],
  "idle": [
    "adjective",
    "verb",
    "noun"
  ],
  "ids": [
    "noun"
  ],
  "igniting": [
    "verb"
  ],
  "ignition": [
    "noun"
  ],
  "ignorance": [
    "noun"
  ],
  "ignore": [
    "verb"
  ],
  "ignored": [
    "adjective"
  ],
  "iguana": [
    "noun"
  ],
  "il": [
    "noun"
  ],
  "illegality": [
    "noun"
  ],
  "illegitimate": [
    "adjective",
    "noun",
    "verb"
  ],
  "illinois": [
    "noun"
  ],
  "illness": [
    "noun"
  ],
  "illuminate": [
    "verb",
    "adjective",
    "noun"
  ],
  "illuminated": [
    "adjective"
  ],
  "illustrate": [
    "verb"
  ],
  "illustrated": [
    "adjective",
    "noun"
  ],
  "illustration": [
    "noun"
  ],
  "image": [
    "noun",
    "verb"
  ],
  "imaginary": [
    "adjective",
    "noun"
  ],
  "imagination": [
    "noun"
  ],
  "imaginative": [
    "adjective"
  ],
  "imagine": [
    "verb",
    "noun"
  ],
  "imbued": [
    "verb"
  ],
  "imitate": [
    "verb"
  ],
  "immaculate": [
    "adjective"
  ],
  "immature": [
    "adjective",
    "noun"
  ],
  "immediate": [
    "adjective"
  ],
  "immediately": [
    "adverb"
  ],
  "immerse": [
    "verb",
    "adjective"
  ],
  "immigrant": [
    "adjective",
    "noun"
  ],
  "imminent": [
    "adjective"
  ],
  "immobility": [
    "noun"
  ],
  "immune": [
    "adjective",
    "noun",
    "verb"
  ],
  "immunological": [
    "adjective",
    "noun"
  ],
  "immunologist": [
    "noun"
  ],
  "impairing": [
    "noun"
  ],
  "impale": [
    "verb"
  ],
  "impaling": [
    "noun"
  ],
  "impart": [
    "verb"
  ],
  "imparted": [
    "verb"
  ],
  "impartiality": [
    "noun"
  ],
  "imparting": [
    "noun"
  ],
  "impasse": [
    "noun"
  ],
  "impatient": [
    "adjective"
  ],
  "impeach": [
    "verb"
  ],
  "impede": [
    "verb"
  ],
  "impedes": [
    "verb"
  ],
  "imperfection": [
    "noun"
  ],
  "imperialism": [
    "noun"
  ],
  "imperialistic": [
    "adjective"
  ],
  "imperious": [
    "adjective"
  ],
  "impersonating": [
    "verb"
  ],
  "implement": [
    "verb",
    "noun"
  ],
  "implode": [
    "verb"
  ],
  "implying": [
    "noun"
  ],
  "impolitic": [
    "adjective"
  ],
  "import": [
    "noun",
    "verb"
  ],
  "important": [
    "adjective"
  ],
  "impose": [
    "verb",
    "noun"
  ],
  "impound": [
    "verb",
    "noun"
  ],
  "impounds": [
    "verb",
    "noun"
  ],
  "imprecise": [
    "adjective"
  ],
  "impregnated": [
    "adjective"
  ],
  "impress": [
    "verb",
    "noun"
  ],
  "impressed": [
    "adjective"
  ],
  "impressing": [
    "verb"
  ],
  "impression": [
    "noun",
    "verb"
  ],
  "impressionistic": [
    "adjective"
  ],
  "impressive": [
    "adjective"
  ],
  "imprimatur": [
    "noun"
  ],
  "improved": [
    "adjective"
  ],
  "improving": [
    "adjective"
  ],
  "impugn": [
    "verb"
  ],
  "impure": [
    "adjective",
    "verb"
  ],
  "inaction": [
    "noun"
  ],
  "inadvertently": [
    "adverb"
  ],
  "inarticulate": [
    "adjective",
    "noun"
  ],
  "inborn": [
    "adjective"
  ],
  "inbound": [
    "adjective",
    "noun",
    "verb"
  ],
  "inbred": [
    "adjective",
    "noun"
  ],
  "inc": [
    "noun",
    "adjective",
    "verb"
  ],
  "incase": [
    "verb"
  ],
  "incensed": [
    "adjective"
  ],
  "incest": [
    "noun",
    "verb"
  ],
  "incident": [
    "noun",
    "adjective"
  ],
  "incidental": [
    "adjective",
    "noun"
  ],
  "incinerator": [
    "noun"
  ],
  "incisor": [
    "noun"
  ],
  "inciting": [
    "verb"
  ],
  "incivility": [
    "noun"
  ],
  "inclined": [
    "adjective"
  ],
  "include": [
    "verb",
    "noun"
  ],
  "including": [
    "verb"
  ],
  "income": [
    "noun"
  ],
  "incomes": [
    "noun"
  ],
  "incoming": [
    "adjective",
    "noun"
  ],
  "incommunicado": [
    "adjective",
    "adverb"
  ],
  "incomparable": [
    "adjective",
    "noun"
  ],
  "incompatibility": [
    "noun"
  ],
  "incomplete": [
    "adjective",
    "noun"
  ],
  "inconceivable": [
    "adjective"
  ],
  "inconsequential": [
    "adjective",
    "noun"
  ],
  "inconspicuous": [
    "adjective"
  ],
  "incontrovertible": [
    "adjective"
  ],
  "incorporate": [
    "verb",
    "adjective"
  ],
  "incorrect": [
    "adjective",
    "noun"
  ],
  "increase": [
    "noun",
    "verb"
  ],
  "increased": [
    "adjective"
  ],
  "incredible": [
    "adjective"
  ],
  "incredulous": [
    "adjective"
  ],
  "incremental": [
    "adjective"
  ],
  "incriminating": [
    "adjective"
  ],
  "incrust": [
    "verb"
  ],
  "incubator": [
    "noun"
  ],
  "incur": [
    "verb"
  ],
  "incurred": [
    "verb"
  ],
  "incurs": [
    "verb"
  ],
  "indefinitely": [
    "adverb"
  ],
  "indent": [
    "noun",
    "verb"
  ],
  "independent": [
    "adjective",
    "noun"
  ],
  "indeterminate": [
    "adjective",
    "noun"
  ],
  "india": [
    "noun"
  ],
  "indian": [
    "adjective",
    "noun"
  ],
  "indicating": [
    "verb"
  ],
  "indicator": [
    "noun"
  ],
  "indicting": [
    "verb"
  ],
  "indifferent": [
    "adjective",
    "noun",
    "adverb"
  ],
  "indigestion": [
    "noun"
  ],
  "indirect": [
    "adjective",
    "noun",
    "verb"
  ],
  "indiscreet": [
    "adjective"
  ],
  "indiscretion": [
    "noun"
  ],
  "indispensable": [
    "adjective",
    "noun"
  ],
  "indisputable": [
    "adjective"
  ],
  "indistinct": [
    "adjective"
  ],
  "individualistic": [
    "adjective"
  ],
  "induce": [
    "verb"
  ],
  "induct": [
    "verb"
  ],
  "industry": [
    "noun"
  ],
  "inebriated": [
    "adjective"
  ],
  "ineffective": [
    "adjective"
  ],
  "inelastic": [
    "adjective"
  ],
  "inert": [
    "adjective",
    "noun",
    "verb"
  ],
  "inevitability": [
    "noun"
  ],
  "inevitable": [
    "adjective",
    "noun"
  ],
  "inexact": [
    "adjective"
  ],
  "inexcusable": [
    "adjective"
  ],
  "inexplicable": [
    "adjective",
    "noun"
  ],
  "infallibility": [
    "noun"
  ],
  "infanticides": [
    "noun"
  ],
  "infect": [
    "verb",
    "adjective"
  ],
  "infection": [
    "noun"
  ],
  "infective": [
    "adjective",
    "noun"
  ],
  "infer": [
    "verb"
  ],
  "inferential": [
    "adjective"
  ],
  "inferior": [
    "adjective",
    "noun"
  ],
  "inferno": [
    "noun"
  ],
  "inferred": [
    "verb"
  ],
  "infers": [
    "verb"
  ],
  "infidel": [
    "noun",
    "adjective"
  ],
  "infiltrate": [
    "noun",
    "verb"
  ],
  "inflame": [
    "verb"
  ],
  "inflammatory": [
    "adjective",
    "noun"
  ],
  "inflection": [
    "noun"
  ],
  "inflexibility": [
    "noun"
  ],
  "infliction": [
    "noun"
  ],
  "influential": [
    "adjective",
    "noun"
  ],
  "inform": [
    "verb",
    "adjective"
  ],
  "informality": [
    "noun"
  ],
  "information": [
    "noun"
  ],
  "informational": [
    "adjective"
  ],
  "infraction": [
    "noun"
  ],
  "infrared": [
    "adjective",
    "noun"
  ],
  "infused": [
    "verb"
  ],
  "infusing": [
    "verb"
  ],
  "ingestion": [
    "noun"
  ],
  "inglenook": [
    "noun"
  ],
  "ingredient": [
    "noun"
  ],
  "inhale": [
    "verb",
    "noun"
  ],
  "inhuman": [
    "adjective"
  ],
  "inimitable": [
    "adjective"
  ],
  "initiate": [
    "verb",
    "noun",
    "adjective"
  ],
  "initiated": [
    "verb"
  ],
  "inject": [
    "verb"
  ],
  "injector": [
    "noun"
  ],
  "injudicious": [
    "adjective"
  ],
  "injustice": [
    "noun"
  ],
  "inkwell": [
    "noun"
  ],
  "inland": [
    "noun",
    "adverb",
    "adjective"
  ],
  "inlet": [
    "noun",
    "verb"
  ],
  "inlets": [
    "noun"
  ],
  "inn": [
    "noun",
    "verb"
  ],
  "innermost": [
    "noun"
  ],
  "innovate": [
    "verb"
  ],
  "inopportune": [
    "adjective"
  ],
  "inquest": [
    "noun"
  ],
  "inquiry": [
    "noun"
  ],
  "inquisition": [
    "noun",
    "verb"
  ],
  "inquisitive": [
    "adjective"
  ],
  "insane": [
    "adjective"
  ],
  "inscribe": [
    "verb"
  ],
  "insect": [
    "noun"
  ],
  "insecticides": [
    "noun"
  ],
  "insecure": [
    "adjective"
  ],
  "insert": [
    "verb",
    "noun"
  ],
  "insides": [
    "noun"
  ],
  "insight": [
    "noun"
  ],
  "insignia": [
    "noun"
  ],
  "insignificant": [
    "adjective",
    "noun"
  ],
  "insist": [
    "verb"
  ],
  "insomnia": [
    "noun"
  ],
  "inspect": [
    "verb"
  ],
  "inspiration": [
    "noun"
  ],
  "inspirational": [
    "adjective",
    "noun"
  ],
  "inspire": [
    "verb"
  ],
  "install": [
    "verb",
    "noun"
  ],
  "installed": [
    "verb"
  ],
  "installing": [
    "noun"
  ],
  "installs": [
    "verb",
    "noun"
  ],
  "instance": [
    "noun",
    "verb"
  ],
  "instant": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "instantaneous": [
    "adjective"
  ],
  "instill": [
    "verb"
  ],
  "instilled": [
    "verb"
  ],
  "instilling": [
    "noun"
  ],
  "instinct": [
    "noun",
    "adjective"
  ],
  "institute": [
    "noun",
    "verb",
    "adjective"
  ],
  "institutional": [
    "adjective",
    "noun"
  ],
  "instruct": [
    "verb",
    "adjective",
    "noun"
  ],
  "instrument": [
    "noun",
    "verb"
  ],
  "instrumentality": [
    "noun"
  ],
  "insulated": [
    "adjective"
  ],
  "insurance": [
    "noun"
  ],
  "insure": [
    "verb"
  ],
  "insures": [
    "verb"
  ],
  "insuring": [
    "verb"
  ],
  "insurmountable": [
    "adjective"
  ],
  "insurrection": [
    "noun"
  ],
  "intake": [
    "noun",
    "verb"
  ],
  "integrate": [
    "verb",
    "adjective"
  ],
  "integrated": [
    "adjective"
  ],
  "integrity": [
    "noun"
  ],
  "intellect": [
    "noun"
  ],
  "intelligence": [
    "noun"
  ],
  "intend": [
    "verb"
  ],
  "intends": [
    "verb"
  ],
  "intensifying": [
    "noun"
  ],
  "intent": [
    "noun",
    "adjective"
  ],
  "intention": [
    "noun",
    "verb"
  ],
  "intentional": [
    "adjective",
    "noun"
  ],
  "inter": [
    "verb",
    "noun"
  ],
  "interact": [
    "verb",
    "noun"
  ],
  "intercede": [
    "verb"
  ],
  "intercession": [
    "noun"
  ],
  "interconnection": [
    "noun"
  ],
  "intercontinental": [
    "adjective"
  ],
  "interdict": [
    "noun",
    "verb"
  ],
  "interdiction": [
    "noun"
  ],
  "interest": [
    "noun",
    "verb"
  ],
  "interested": [
    "adjective"
  ],
  "interface": [
    "noun",
    "verb"
  ],
  "interfere": [
    "verb"
  ],
  "interfered": [
    "verb"
  ],
  "interferes": [
    "verb"
  ],
  "interior": [
    "noun",
    "adjective"
  ],
  "interject": [
    "verb"
  ],
  "interjection": [
    "noun"
  ],
  "interlace": [
    "noun",
    "verb"
  ],
  "interlaced": [
    "adjective"
  ],
  "interleaf": [
    "noun",
    "verb"
  ],
  "interleave": [
    "noun",
    "verb"
  ],
  "interleaved": [
    "adjective",
    "verb"
  ],
  "interleaving": [
    "noun"
  ],
  "interlink": [
    "noun",
    "verb"
  ],
  "interlock": [
    "noun",
    "verb"
  ],
  "interlude": [
    "noun",
    "verb"
  ],
  "intermarriage": [
    "noun"
  ],
  "intermingle": [
    "verb"
  ],
  "intermix": [
    "verb",
    "noun"
  ],
  "international": [
    "adjective",
    "noun"
  ],
  "internationale": [
    "noun"
  ],
  "interned": [
    "verb"
  ],
  "internet": [
    "noun",
    "verb"
  ],
  "internship": [
    "noun"
  ],
  "internships": [
    "noun"
  ],
  "interpol": [
    "noun"
  ],
  "interred": [
    "adjective"
  ],
  "interrogating": [
    "noun"
  ],
  "interrupt": [
    "verb",
    "noun"
  ],
  "interscholastic": [
    "adjective"
  ],
  "intersect": [
    "verb"
  ],
  "intersection": [
    "noun"
  ],
  "intersperse": [
    "verb"
  ],
  "interspersed": [
    "adjective"
  ],
  "intertidal": [
    "adjective",
    "noun"
  ],
  "intertwined": [
    "adjective"
  ],
  "intervene": [
    "verb"
  ],
  "intervenes": [
    "verb",
    "noun"
  ],
  "intervention": [
    "noun"
  ],
  "interview": [
    "noun",
    "verb"
  ],
  "interviewed": [
    "verb"
  ],
  "interweave": [
    "verb"
  ],
  "interweaving": [
    "noun"
  ],
  "intimidate": [
    "verb"
  ],
  "intimidating": [
    "adjective"
  ],
  "intolerant": [
    "adjective",
    "noun"
  ],
  "intoxicating": [
    "adjective"
  ],
  "introspection": [
    "noun"
  ],
  "introspective": [
    "adjective"
  ],
  "introvert": [
    "noun",
    "verb",
    "adjective"
  ],
  "intrude": [
    "verb"
  ],
  "intuition": [
    "noun"
  ],
  "inure": [
    "verb"
  ],
  "invade": [
    "verb"
  ],
  "invalidated": [
    "adjective"
  ],
  "invective": [
    "noun",
    "adjective"
  ],
  "invent": [
    "verb"
  ],
  "invention": [
    "noun"
  ],
  "inventory": [
    "noun",
    "verb"
  ],
  "inverse": [
    "noun",
    "adjective",
    "verb"
  ],
  "invert": [
    "verb",
    "noun",
    "adjective"
  ],
  "invest": [
    "verb",
    "noun"
  ],
  "investigate": [
    "verb"
  ],
  "investigation": [
    "noun"
  ],
  "investigator": [
    "noun"
  ],
  "invincibility": [
    "noun"
  ],
  "invitation": [
    "noun"
  ],
  "invitational": [
    "noun",
    "adjective"
  ],
  "invite": [
    "verb",
    "noun"
  ],
  "inviting": [
    "adjective",
    "noun"
  ],
  "invoke": [
    "verb"
  ],
  "involuntarily": [
    "adverb"
  ],
  "invulnerability": [
    "noun"
  ],
  "iodine": [
    "noun",
    "verb"
  ],
  "ionic": [
    "adjective",
    "noun"
  ],
  "iran": [
    "noun"
  ],
  "iraq": [
    "noun"
  ],
  "ire": [
    "noun",
    "verb"
  ],
  "irk": [
    "noun",
    "verb"
  ],
  "irked": [
    "adjective"
  ],
  "irks": [
    "verb",
    "noun"
  ],
  "iron": [
    "noun",
    "adjective",
    "verb"
  ],
  "ironclad": [
    "noun",
    "adjective"
  ],
  "ironic": [
    "adjective"
  ],
  "ironsides": [
    "noun"
  ],
  "ironwood": [
    "noun"
  ],
  "irony": [
    "noun",
    "adjective"
  ],
  "iroquois": [
    "noun"
  ],
  "irrationality": [
    "noun"
  ],
  "irreconcilable": [
    "adjective",
    "noun"
  ],
  "irrefutable": [
    "adjective"
  ],
  "irregularity": [
    "noun"
  ],
  "irreplaceable": [
    "adjective"
  ],
  "irrespective": [
    "adjective"
  ],
  "irresponsible": [
    "adjective",
    "noun"
  ],
  "irreversible": [
    "adjective"
  ],
  "irritate": [
    "verb"
  ],
  "irritated": [
    "adjective"
  ],
  "irritating": [
    "adjective"
  ],
  "irs": [
    "noun"
  ],
  "ischemia": [
    "noun"
  ],
  "island": [
    "noun",
    "verb"
  ],
  "isotonic": [
    "adjective"
  ],
  "isotope": [
    "noun",
    "verb"
  ],
  "issue": [
    "noun",
    "verb"
  ],
  "issues": [
    "noun"
  ],
  "isthmus": [
    "noun"
  ],
  "itinerary": [
    "noun",
    "adjective"
  ],
  "jab": [
    "noun",
    "verb"
  ],
  "jacked": [
    "adjective"
  ],
  "jacket": [
    "noun",
    "verb"
  ],
  "jackpot": [
    "noun",
    "verb"
  ],
  "jacksonville": [
    "noun"
  ],
  "jacobean": [
    "adjective",
    "noun"
  ],
  "jade": [
    "noun",
    "verb",
    "adjective"
  ],
  "jaguar": [
    "noun"
  ],
  "jail": [
    "noun",
    "verb"
  ],
  "jailbreak": [
    "noun",
    "verb"
  ],
  "jailhouse": [
    "noun"
  ],
  "jailing": [
    "noun"
  ],
  "jam": [
    "noun",
    "verb"
  ],
  "jamb": [
    "noun",
    "verb"
  ],
  "jambalaya": [
    "noun"
  ],
  "jamestown": [
    "noun"
  ],
  "jap": [
    "noun",
    "adjective",
    "verb"
  ],
  "japan": [
    "noun",
    "verb"
  ],
  "jar": [
    "noun",
    "verb"
  ],
  "jaw": [
    "noun",
    "verb"
  ],
  "jawed": [
    "adjective"
  ],
  "jaywalk": [
    "verb"
  ],
  "jaywalking": [
    "noun"
  ],
  "jazz": [
    "noun",
    "verb"
  ],
  "jealous": [
    "adjective",
    "verb"
  ],
  "jeep": [
    "noun",
    "verb",
    "adjective"
  ],
  "jeered": [
    "verb"
  ],
  "jejune": [
    "adjective"
  ],
  "jerk": [
    "noun",
    "verb"
  ],
  "jerked": [
    "verb"
  ],
  "jerking": [
    "noun"
  ],
  "jerks": [
    "noun",
    "verb"
  ],
  "jester": [
    "noun",
    "verb"
  ],
  "jet": [
    "noun",
    "verb",
    "adjective"
  ],
  "jetliner": [
    "noun"
  ],
  "jets": [
    "noun"
  ],
  "jetting": [
    "noun"
  ],
  "jetty": [
    "noun",
    "verb",
    "adjective"
  ],
  "jewel": [
    "noun",
    "verb"
  ],
  "jewfish": [
    "noun"
  ],
  "jig": [
    "noun",
    "verb"
  ],
  "jiggle": [
    "verb",
    "noun"
  ],
  "jigsaw": [
    "noun",
    "verb"
  ],
  "jillion": [
    "noun"
  ],
  "jilt": [
    "noun",
    "verb"
  ],
  "jimmy": [
    "noun",
    "verb"
  ],
  "jingle": [
    "noun",
    "verb"
  ],
  "jinx": [
    "noun",
    "verb"
  ],
  "jitterbug": [
    "noun",
    "verb"
  ],
  "jive": [
    "noun",
    "verb"
  ],
  "job": [
    "noun",
    "verb"
  ],
  "jocks": [
    "noun"
  ],
  "jog": [
    "noun",
    "verb"
  ],
  "join": [
    "verb",
    "noun"
  ],
  "joined": [
    "adjective"
  ],
  "joint": [
    "adjective",
    "noun",
    "verb"
  ],
  "joking": [
    "verb",
    "noun"
  ],
  "jot": [
    "noun",
    "verb"
  ],
  "joule": [
    "noun"
  ],
  "journal": [
    "noun",
    "verb",
    "adjective"
  ],
  "journalist": [
    "noun"
  ],
  "journey": [
    "noun",
    "verb"
  ],
  "joy": [
    "noun",
    "verb"
  ],
  "joystick": [
    "noun",
    "verb"
  ],
  "judaism": [
    "noun"
  ],
  "judge": [
    "noun",
    "verb"
  ],
  "judgmental": [
    "adjective"
  ],
  "jug": [
    "noun",
    "verb"
  ],
  "juggernaut": [
    "noun"
  ],
  "juggle": [
    "verb",
    "noun"
  ],
  "juice": [
    "noun",
    "verb",
    "adjective"
  ],
  "jukebox": [
    "noun",
    "verb"
  ],
  "jumble": [
    "noun",
    "verb"
  ],
  "jump": [
    "verb",
    "noun",
    "adverb",
    "adjective"
  ],
  "jumping": [
    "noun",
    "adjective"
  ],
  "jumpsuit": [
    "noun"
  ],
  "juncture": [
    "noun"
  ],
  "jungle": [
    "noun",
    "adjective"
  ],
  "junkyard": [
    "noun"
  ],
  "jurisprudential": [
    "adjective"
  ],
  "jury": [
    "noun",
    "verb",
    "adjective"
  ],
  "justice": [
    "noun"
  ],
  "justified": [
    "adjective"
  ],
  "justify": [
    "verb"
  ],
  "justifying": [
    "noun"
  ],
  "jut": [
    "noun",
    "verb"
  ],
  "juxtapose": [
    "verb"
  ],
  "juxtaposed": [
    "adjective"
  ],
  "juxtaposition": [
    "noun",
    "verb"
  ],
  "jynx": [
    "noun"
  ],
  "kaleidoscope": [
    "noun",
    "verb"
  ],
  "kangaroos": [
    "noun"
  ],
  "katydid": [
    "noun"
  ],
  "kayak": [
    "noun",
    "verb"
  ],
  "kayaking": [
    "noun"
  ],
  "keen": [
    "adjective",
    "verb",
    "noun"
  ],
  "keep": [
    "verb",
    "noun"
  ],
  "keeping": [
    "noun"
  ],
  "keeps": [
    "noun"
  ],
  "keepsake": [
    "noun"
  ],
  "keepsakes": [
    "noun"
  ],
  "kennel": [
    "noun",
    "verb"
  ],
  "keratoconus": [
    "noun"
  ],
  "kerosene": [
    "noun"
  ],
  "kestrel": [
    "noun"
  ],
  "key": [
    "adjective",
    "noun",
    "verb"
  ],
  "keyboard": [
    "noun",
    "verb"
  ],
  "keyed": [
    "adjective"
  ],
  "keyhole": [
    "noun",
    "verb"
  ],
  "keynote": [
    "noun",
    "verb"
  ],
  "keypad": [
    "noun"
  ],
  "keystone": [
    "noun",
    "verb"
  ],
  "keystroke": [
    "noun",
    "verb"
  ],
  "khartoum": [
    "noun"
  ],
  "kibbutzim": [
    "noun"
  ],
  "kick": [
    "verb",
    "noun"
  ],
  "kickbacks": [
    "noun"
  ],
  "kid": [
    "noun",
    "verb"
  ],
  "kidnap": [
    "verb",
    "noun"
  ],
  "kidnaped": [
    "verb"
  ],
  "kidnaps": [
    "verb"
  ],
  "kidney": [
    "noun"
  ],
  "kill": [
    "verb",
    "noun"
  ],
  "kilogram": [
    "noun"
  ],
  "kilos": [
    "noun"
  ],
  "kilowatt": [
    "noun"
  ],
  "kind": [
    "noun",
    "adjective"
  ],
  "kindness": [
    "noun"
  ],
  "kinesthetic": [
    "adjective"
  ],
  "kinetic": [
    "adjective"
  ],
  "king": [
    "noun",
    "verb"
  ],
  "kingbirds": [
    "noun"
  ],
  "kingdom": [
    "noun"
  ],
  "kingpin": [
    "noun"
  ],
  "kinks": [
    "noun",
    "verb"
  ],
  "kinship": [
    "noun"
  ],
  "kissing": [
    "noun",
    "adjective"
  ],
  "kitchen": [
    "noun",
    "verb"
  ],
  "kite": [
    "noun",
    "verb"
  ],
  "kiting": [
    "noun"
  ],
  "kits": [
    "noun"
  ],
  "kitsch": [
    "noun",
    "adjective"
  ],
  "kitten": [
    "noun",
    "verb"
  ],
  "klondike": [
    "noun",
    "verb"
  ],
  "knave": [
    "noun"
  ],
  "knead": [
    "verb",
    "noun"
  ],
  "knee": [
    "noun",
    "verb"
  ],
  "kneecap": [
    "noun",
    "verb"
  ],
  "kneecaps": [
    "noun"
  ],
  "kneel": [
    "verb"
  ],
  "knickknacks": [
    "noun"
  ],
  "knife": [
    "noun",
    "verb"
  ],
  "knight": [
    "noun",
    "verb"
  ],
  "knighthood": [
    "noun"
  ],
  "knit": [
    "verb",
    "noun"
  ],
  "knits": [
    "noun"
  ],
  "knitting": [
    "noun"
  ],
  "knock": [
    "verb",
    "noun"
  ],
  "knockdown": [
    "noun",
    "adjective",
    "verb"
  ],
  "knocked": [
    "verb"
  ],
  "knocking": [
    "noun"
  ],
  "knockout": [
    "noun",
    "adjective"
  ],
  "knot": [
    "noun",
    "verb"
  ],
  "know": [
    "verb",
    "noun"
  ],
  "knowledge": [
    "noun",
    "verb"
  ],
  "knut": [
    "noun"
  ],
  "koranic": [
    "adjective"
  ],
  "kowtow": [
    "verb",
    "noun"
  ],
  "kuomintang": [
    "noun"
  ],
  "kurd": [
    "noun"
  ],
  "kurdistan": [
    "noun"
  ],
  "kyd": [
    "noun"
  ],
  "lab": [
    "noun"
  ],
  "laboratory": [
    "noun"
  ],
  "laborious": [
    "adjective"
  ],
  "labyrinth": [
    "noun",
    "verb"
  ],
  "labyrinthine": [
    "adjective"
  ],
  "lac": [
    "noun"
  ],
  "laced": [
    "adjective"
  ],
  "lacked": [
    "verb"
  ],
  "laconic": [
    "adjective"
  ],
  "lacrosse": [
    "noun"
  ],
  "lacteals": [
    "noun"
  ],
  "lad": [
    "noun"
  ],
  "ladder": [
    "noun",
    "verb"
  ],
  "lady": [
    "noun",
    "verb"
  ],
  "ladybird": [
    "noun"
  ],
  "ladybug": [
    "noun"
  ],
  "ladylike": [
    "adjective"
  ],
  "lag": [
    "noun",
    "verb",
    "adjective"
  ],
  "lagniappe": [
    "noun"
  ],
  "lagoon": [
    "noun"
  ],
  "laid": [
    "adjective",
    "noun"
  ],
  "lake": [
    "noun",
    "verb"
  ],
  "lakefront": [
    "noun",
    "adjective"
  ],
  "lambaste": [
    "verb"
  ],
  "lament": [
    "noun",
    "verb"
  ],
  "lamented": [
    "adjective"
  ],
  "laminated": [
    "adjective"
  ],
  "lamp": [
    "noun",
    "verb"
  ],
  "lamplighter": [
    "noun"
  ],
  "lampoon": [
    "noun",
    "verb"
  ],
  "lamppost": [
    "noun"
  ],
  "lancashire": [
    "noun"
  ],
  "lancelot": [
    "noun"
  ],
  "land": [
    "noun",
    "verb"
  ],
  "landfall": [
    "noun"
  ],
  "landfill": [
    "noun",
    "verb"
  ],
  "landgrave": [
    "noun"
  ],
  "landholder": [
    "noun"
  ],
  "landline": [
    "noun"
  ],
  "landlord": [
    "noun",
    "verb"
  ],
  "landmass": [
    "noun"
  ],
  "landscape": [
    "noun",
    "verb"
  ],
  "landslide": [
    "noun",
    "verb"
  ],
  "landslides": [
    "noun",
    "verb"
  ],
  "language": [
    "noun",
    "verb"
  ],
  "lantana": [
    "noun"
  ],
  "lantern": [
    "noun",
    "verb",
    "adjective"
  ],
  "lap": [
    "noun",
    "verb",
    "adjective"
  ],
  "lapdog": [
    "noun"
  ],
  "lapel": [
    "noun"
  ],
  "lapped": [
    "adjective"
  ],
  "lapps": [
    "noun"
  ],
  "lapse": [
    "noun",
    "verb"
  ],
  "laptop": [
    "noun",
    "adjective"
  ],
  "larkspur": [
    "noun"
  ],
  "laryngoscope": [
    "noun"
  ],
  "las": [
    "noun"
  ],
  "last": [
    "adjective",
    "adverb",
    "verb",
    "noun"
  ],
  "latch": [
    "noun",
    "verb"
  ],
  "late": [
    "adjective",
    "adverb",
    "noun"
  ],
  "lately": [
    "adverb"
  ],
  "latest": [
    "adjective",
    "noun",
    "adverb"
  ],
  "latex": [
    "noun"
  ],
  "lath": [
    "noun",
    "verb"
  ],
  "latitude": [
    "noun"
  ],
  "latrine": [
    "noun"
  ],
  "latrines": [
    "noun"
  ],
  "latrobe": [
    "noun"
  ],
  "latter": [
    "adjective"
  ],
  "latticework": [
    "noun"
  ],
  "laugh": [
    "noun",
    "verb"
  ],
  "laughingstock": [
    "noun"
  ],
  "laughter": [
    "noun"
  ],
  "launchpad": [
    "noun"
  ],
  "laundromat": [
    "noun"
  ],
  "lava": [
    "noun"
  ],
  "lavatory": [
    "noun",
    "adjective"
  ],
  "law": [
    "noun",
    "verb"
  ],
  "lawmaking": [
    "noun"
  ],
  "lawmen": [
    "noun"
  ],
  "lawn": [
    "noun",
    "verb"
  ],
  "lawsuit": [
    "noun",
    "verb"
  ],
  "lawyer": [
    "noun",
    "verb"
  ],
  "lay": [
    "verb",
    "noun",
    "adjective"
  ],
  "laying": [
    "noun"
  ],
  "layoff": [
    "noun"
  ],
  "layout": [
    "noun"
  ],
  "layover": [
    "noun"
  ],
  "lays": [
    "verb"
  ],
  "lazy": [
    "adjective",
    "noun",
    "verb"
  ],
  "leach": [
    "noun",
    "verb"
  ],
  "lead": [
    "verb",
    "noun",
    "adjective"
  ],
  "leadership": [
    "noun"
  ],
  "leading": [
    "adjective",
    "noun"
  ],
  "leads": [
    "verb"
  ],
  "leaf": [
    "noun",
    "verb"
  ],
  "leafhopper": [
    "noun"
  ],
  "leaflike": [
    "adjective"
  ],
  "leak": [
    "noun",
    "verb",
    "adjective"
  ],
  "leaking": [
    "noun"
  ],
  "lean": [
    "adjective",
    "verb",
    "noun"
  ],
  "leans": [
    "noun"
  ],
  "leap": [
    "noun",
    "verb",
    "adjective"
  ],
  "leaped": [
    "verb"
  ],
  "leapfrog": [
    "noun",
    "verb"
  ],
  "learn": [
    "verb",
    "noun"
  ],
  "learning": [
    "noun"
  ],
  "lease": [
    "noun",
    "verb"
  ],
  "leased": [
    "adjective"
  ],
  "leather": [
    "noun",
    "adjective",
    "verb"
  ],
  "leave": [
    "verb",
    "noun"
  ],
  "leaves": [
    "verb",
    "noun"
  ],
  "lebanese": [
    "adjective",
    "noun"
  ],
  "lector": [
    "noun",
    "verb"
  ],
  "lecture": [
    "noun",
    "verb"
  ],
  "led": [
    "adjective",
    "noun"
  ],
  "leftover": [
    "adjective",
    "noun"
  ],
  "legacy": [
    "noun",
    "adjective"
  ],
  "legalese": [
    "noun"
  ],
  "legality": [
    "noun"
  ],
  "legend": [
    "noun",
    "verb"
  ],
  "legendary": [
    "adjective",
    "noun"
  ],
  "legitimacy": [
    "noun"
  ],
  "legitimate": [
    "adjective",
    "verb",
    "noun"
  ],
  "legs": [
    "noun"
  ],
  "legume": [
    "noun"
  ],
  "leicester": [
    "noun"
  ],
  "leitmotif": [
    "noun"
  ],
  "lemon": [
    "adjective",
    "noun",
    "verb"
  ],
  "lemonade": [
    "noun"
  ],
  "lend": [
    "verb",
    "noun"
  ],
  "lender": [
    "noun"
  ],
  "lends": [
    "verb"
  ],
  "leningrad": [
    "noun"
  ],
  "lentil": [
    "noun"
  ],
  "leotard": [
    "noun"
  ],
  "les": [
    "noun",
    "adjective"
  ],
  "lesson": [
    "noun",
    "verb"
  ],
  "lest": [
    "adverb"
  ],
  "let": [
    "verb",
    "noun"
  ],
  "letdown": [
    "noun"
  ],
  "lethality": [
    "noun"
  ],
  "lets": [
    "verb",
    "noun"
  ],
  "letter": [
    "noun",
    "verb"
  ],
  "lettuce": [
    "noun"
  ],
  "letup": [
    "noun"
  ],
  "levant": [
    "noun",
    "verb",
    "adjective"
  ],
  "level": [
    "noun",
    "adjective",
    "verb"
  ],
  "lever": [
    "noun",
    "verb",
    "adverb"
  ],
  "lewd": [
    "adjective",
    "noun",
    "verb"
  ],
  "lexicon": [
    "noun",
    "verb"
  ],
  "lexicons": [
    "noun"
  ],
  "liaison": [
    "noun",
    "verb"
  ],
  "liaisons": [
    "noun"
  ],
  "liar": [
    "noun"
  ],
  "liberia": [
    "noun"
  ],
  "liberian": [
    "adjective",
    "noun"
  ],
  "liberties": [
    "noun"
  ],
  "libertines": [
    "noun"
  ],
  "liberty": [
    "noun"
  ],
  "librarian": [
    "noun"
  ],
  "library": [
    "noun"
  ],
  "libya": [
    "noun"
  ],
  "lice": [
    "noun"
  ],
  "license": [
    "noun",
    "verb"
  ],
  "licentious": [
    "adjective"
  ],
  "lick": [
    "verb",
    "noun"
  ],
  "licks": [
    "noun",
    "verb"
  ],
  "lids": [
    "noun"
  ],
  "lie": [
    "verb",
    "noun"
  ],
  "lief": [
    "adverb",
    "adjective"
  ],
  "liens": [
    "noun"
  ],
  "life": [
    "noun",
    "verb"
  ],
  "lifeboat": [
    "noun",
    "verb"
  ],
  "lifeguard": [
    "noun"
  ],
  "lifelike": [
    "adjective"
  ],
  "lifeline": [
    "noun"
  ],
  "lifelong": [
    "adjective"
  ],
  "lifespan": [
    "noun"
  ],
  "lifestyles": [
    "noun"
  ],
  "lift": [
    "verb",
    "noun"
  ],
  "liftoff": [
    "noun"
  ],
  "light": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "lighthearted": [
    "adjective"
  ],
  "lighthouse": [
    "noun"
  ],
  "lighting": [
    "noun"
  ],
  "lightning": [
    "noun",
    "adjective",
    "verb"
  ],
  "like": [
    "verb",
    "noun",
    "adjective",
    "adverb"
  ],
  "liked": [
    "adjective"
  ],
  "likelihood": [
    "noun"
  ],
  "likely": [
    "adjective",
    "adverb",
    "noun"
  ],
  "likewise": [
    "adverb"
  ],
  "lilac": [
    "adjective",
    "noun"
  ],
  "lilacs": [
    "noun"
  ],
  "lilliputian": [
    "adjective",
    "noun"
  ],
  "lime": [
    "noun",
    "adjective",
    "verb"
  ],
  "limestone": [
    "noun"
  ],
  "limit": [
    "noun",
    "verb",
    "adjective"
  ],
  "limn": [
    "verb"
  ],
  "limousine": [
    "noun"
  ],
  "limousines": [
    "noun"
  ],
  "linchpin": [
    "noun",
    "verb"
  ],
  "line": [
    "noun",
    "verb"
  ],
  "lineage": [
    "noun"
  ],
  "lined": [
    "adjective"
  ],
  "linen": [
    "noun",
    "adjective"
  ],
  "linesman": [
    "noun"
  ],
  "lineup": [
    "noun"
  ],
  "linger": [
    "verb",
    "noun"
  ],
  "lings": [
    "noun"
  ],
  "linguistic": [
    "adjective"
  ],
  "linking": [
    "adjective",
    "noun"
  ],
  "linkup": [
    "noun"
  ],
  "linotype": [
    "noun",
    "verb"
  ],
  "linseed": [
    "noun"
  ],
  "lion": [
    "noun",
    "adjective"
  ],
  "lip": [
    "noun",
    "verb"
  ],
  "liposome": [
    "noun"
  ],
  "lipped": [
    "adjective"
  ],
  "lipstick": [
    "noun",
    "verb"
  ],
  "lipsticks": [
    "noun"
  ],
  "liquefaction": [
    "noun"
  ],
  "liqueur": [
    "noun",
    "verb"
  ],
  "liqueurs": [
    "noun"
  ],
  "listen": [
    "verb",
    "noun"
  ],
  "listening": [
    "noun",
    "adjective"
  ],
  "liszt": [
    "noun"
  ],
  "lit": [
    "verb",
    "noun",
    "adjective"
  ],
  "literally": [
    "adverb"
  ],
  "literary": [
    "adjective"
  ],
  "literature": [
    "noun"
  ],
  "lithograph": [
    "noun",
    "verb"
  ],
  "lithographic": [
    "adjective"
  ],
  "lithographs": [
    "noun"
  ],
  "lits": [
    "noun"
  ],
  "little": [
    "adjective",
    "adverb",
    "noun"
  ],
  "live": [
    "verb",
    "adjective",
    "adverb"
  ],
  "livelihood": [
    "noun"
  ],
  "liver": [
    "noun",
    "adjective"
  ],
  "livestock": [
    "noun"
  ],
  "lizard": [
    "noun"
  ],
  "loafer": [
    "noun",
    "verb"
  ],
  "loam": [
    "noun",
    "verb",
    "adjective"
  ],
  "loath": [
    "adjective",
    "verb"
  ],
  "loathe": [
    "verb"
  ],
  "loblolly": [
    "noun",
    "verb"
  ],
  "lobster": [
    "noun",
    "verb",
    "adjective"
  ],
  "local": [
    "adjective",
    "noun",
    "adverb"
  ],
  "locale": [
    "noun"
  ],
  "locality": [
    "noun"
  ],
  "locating": [
    "noun"
  ],
  "location": [
    "noun"
  ],
  "locator": [
    "noun"
  ],
  "lock": [
    "noun",
    "verb"
  ],
  "locked": [
    "adjective"
  ],
  "locker": [
    "noun"
  ],
  "locket": [
    "noun"
  ],
  "locks": [
    "noun"
  ],
  "locksmith": [
    "noun"
  ],
  "lockstep": [
    "noun",
    "adjective"
  ],
  "locomotive": [
    "noun",
    "adjective"
  ],
  "lode": [
    "noun"
  ],
  "lodge": [
    "noun",
    "verb"
  ],
  "loft": [
    "noun",
    "verb",
    "adjective"
  ],
  "log": [
    "noun",
    "verb"
  ],
  "logbook": [
    "noun"
  ],
  "logic": [
    "noun",
    "adjective",
    "verb"
  ],
  "logical": [
    "adjective"
  ],
  "logistic": [
    "adjective",
    "noun"
  ],
  "logjam": [
    "noun",
    "verb"
  ],
  "logo": [
    "noun"
  ],
  "logogram": [
    "noun"
  ],
  "logographic": [
    "adjective"
  ],
  "loiter": [
    "verb",
    "noun"
  ],
  "lollipop": [
    "noun",
    "verb"
  ],
  "lonely": [
    "adjective"
  ],
  "long": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "longhorn": [
    "noun"
  ],
  "longitude": [
    "noun"
  ],
  "longstanding": [
    "adjective"
  ],
  "longtime": [
    "adjective",
    "adverb"
  ],
  "look": [
    "verb",
    "noun"
  ],
  "loom": [
    "noun",
    "verb"
  ],
  "loon": [
    "noun"
  ],
  "loophole": [
    "noun",
    "verb"
  ],
  "loosestrife": [
    "noun"
  ],
  "loot": [
    "noun",
    "verb"
  ],
  "looter": [
    "noun"
  ],
  "lop": [
    "noun",
    "verb"
  ],
  "lopped": [
    "adjective"
  ],
  "lopsided": [
    "adjective"
  ],
  "lose": [
    "verb",
    "noun"
  ],
  "losing": [
    "adjective",
    "noun"
  ],
  "loss": [
    "noun",
    "verb"
  ],
  "lost": [
    "adjective"
  ],
  "lot": [
    "noun",
    "verb"
  ],
  "lotion": [
    "noun",
    "verb"
  ],
  "lots": [
    "noun",
    "adverb"
  ],
  "loud": [
    "adjective",
    "adverb",
    "noun"
  ],
  "louisville": [
    "noun"
  ],
  "louse": [
    "noun",
    "verb"
  ],
  "love": [
    "noun",
    "verb"
  ],
  "loves": [
    "verb",
    "noun"
  ],
  "loveseat": [
    "noun"
  ],
  "lovesick": [
    "adjective"
  ],
  "low": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "lowborn": [
    "adjective"
  ],
  "lower": [
    "adjective",
    "verb",
    "noun"
  ],
  "lowlands": [
    "noun"
  ],
  "lows": [
    "noun"
  ],
  "lox": [
    "noun",
    "verb"
  ],
  "loyal": [
    "adjective",
    "noun"
  ],
  "loyalty": [
    "noun"
  ],
  "luau": [
    "noun"
  ],
  "lubricious": [
    "adjective"
  ],
  "luck": [
    "noun",
    "verb"
  ],
  "lucky": [
    "adjective",
    "noun"
  ],
  "lug": [
    "noun",
    "verb"
  ],
  "luggage": [
    "noun"
  ],
  "lukewarm": [
    "adjective"
  ],
  "lumbar": [
    "adjective",
    "noun"
  ],
  "lumberjack": [
    "noun",
    "verb"
  ],
  "lumberyard": [
    "noun"
  ],
  "lumen": [
    "noun"
  ],
  "lump": [
    "noun",
    "verb"
  ],
  "lunatic": [
    "noun",
    "adjective"
  ],
  "lunatics": [
    "noun"
  ],
  "lunchroom": [
    "noun"
  ],
  "lunchtime": [
    "noun"
  ],
  "lung": [
    "noun"
  ],
  "lungfish": [
    "noun"
  ],
  "lurch": [
    "noun",
    "verb"
  ],
  "lure": [
    "noun",
    "verb"
  ],
  "lures": [
    "noun",
    "verb"
  ],
  "luring": [
    "noun"
  ],
  "lurk": [
    "verb",
    "noun"
  ],
  "lurked": [
    "verb"
  ],
  "lurking": [
    "noun"
  ],
  "lurks": [
    "verb"
  ],
  "lymphatic": [
    "adjective",
    "noun"
  ],
  "lymphoblast": [
    "noun"
  ],
  "lymphoid": [
    "adjective"
  ],
  "lynx": [
    "noun"
  ],
  "lyre": [
    "noun",
    "verb"
  ],
  "lysander": [
    "noun"
  ],
  "macao": [
    "noun"
  ],
  "macaques": [
    "noun"
  ],
  "macaw": [
    "noun"
  ],
  "macaws": [
    "noun"
  ],
  "machine": [
    "noun",
    "verb"
  ],
  "machinery": [
    "noun"
  ],
  "machines": [
    "noun"
  ],
  "macrophage": [
    "noun"
  ],
  "macs": [
    "noun"
  ],
  "mad": [
    "adjective",
    "adverb",
    "verb",
    "noun"
  ],
  "madam": [
    "noun",
    "verb"
  ],
  "madame": [
    "noun"
  ],
  "madcap": [
    "noun",
    "adjective"
  ],
  "made": [
    "noun"
  ],
  "mademoiselle": [
    "noun",
    "verb"
  ],
  "madhouse": [
    "noun"
  ],
  "madman": [
    "noun"
  ],
  "magazine": [
    "noun"
  ],
  "magazines": [
    "noun"
  ],
  "magical": [
    "adjective"
  ],
  "magician": [
    "noun"
  ],
  "magnet": [
    "noun"
  ],
  "magnetic": [
    "adjective"
  ],
  "magnetism": [
    "noun"
  ],
  "magnificent": [
    "adjective"
  ],
  "magnifier": [
    "noun"
  ],
  "magnifying": [
    "noun",
    "verb"
  ],
  "magnitude": [
    "noun"
  ],
  "maharaja": [
    "noun"
  ],
  "mahayana": [
    "noun"
  ],
  "mail": [
    "noun",
    "verb"
  ],
  "mailbag": [
    "noun"
  ],
  "mailbox": [
    "noun"
  ],
  "mailmen": [
    "noun"
  ],
  "maim": [
    "verb",
    "noun"
  ],
  "main": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "mainframe": [
    "noun"
  ],
  "mainstream": [
    "noun",
    "adjective",
    "verb"
  ],
  "maintain": [
    "verb"
  ],
  "majesty": [
    "noun"
  ],
  "majority": [
    "noun"
  ],
  "make": [
    "verb",
    "noun"
  ],
  "makeup": [
    "noun",
    "verb"
  ],
  "malaprop": [
    "noun",
    "adjective",
    "verb"
  ],
  "malcontent": [
    "noun",
    "adjective",
    "verb"
  ],
  "male": [
    "adjective",
    "noun"
  ],
  "maleficent": [
    "adjective"
  ],
  "mali": [
    "noun"
  ],
  "malicious": [
    "adjective"
  ],
  "maligned": [
    "adjective"
  ],
  "malls": [
    "noun"
  ],
  "mammal": [
    "noun"
  ],
  "mammogram": [
    "noun"
  ],
  "mammography": [
    "noun"
  ],
  "man": [
    "noun",
    "adjective",
    "verb"
  ],
  "manage": [
    "verb",
    "noun"
  ],
  "managed": [
    "verb"
  ],
  "manager": [
    "noun"
  ],
  "mandatory": [
    "adjective",
    "noun"
  ],
  "mandolin": [
    "noun",
    "verb"
  ],
  "mandrake": [
    "noun"
  ],
  "maneuverability": [
    "noun"
  ],
  "manger": [
    "noun"
  ],
  "mango": [
    "noun",
    "verb"
  ],
  "manhole": [
    "noun"
  ],
  "manhood": [
    "noun"
  ],
  "manhunt": [
    "noun"
  ],
  "maniac": [
    "noun"
  ],
  "maniacs": [
    "noun"
  ],
  "manifest": [
    "adjective",
    "verb",
    "noun"
  ],
  "manilla": [
    "noun",
    "adjective"
  ],
  "manioc": [
    "noun"
  ],
  "manipulate": [
    "verb"
  ],
  "manipulating": [
    "verb"
  ],
  "manned": [
    "adjective"
  ],
  "mansion": [
    "noun"
  ],
  "manufacture": [
    "noun",
    "verb"
  ],
  "manure": [
    "noun",
    "verb"
  ],
  "manuscript": [
    "noun",
    "adjective"
  ],
  "manx": [
    "noun",
    "adjective"
  ],
  "map": [
    "noun",
    "verb"
  ],
  "maple": [
    "noun"
  ],
  "mar": [
    "noun",
    "verb",
    "adjective"
  ],
  "marathon": [
    "noun",
    "verb"
  ],
  "marathons": [
    "noun"
  ],
  "maraud": [
    "verb"
  ],
  "margin": [
    "noun",
    "verb"
  ],
  "margrave": [
    "noun"
  ],
  "marina": [
    "noun"
  ],
  "marinade": [
    "noun",
    "verb"
  ],
  "maritime": [
    "adjective"
  ],
  "maritimes": [
    "noun"
  ],
  "market": [
    "noun",
    "verb"
  ],
  "marketplace": [
    "noun"
  ],
  "markup": [
    "noun"
  ],
  "marmalade": [
    "noun",
    "verb"
  ],
  "marred": [
    "adjective"
  ],
  "marrow": [
    "noun"
  ],
  "marsh": [
    "noun"
  ],
  "marshalls": [
    "noun"
  ],
  "marshlands": [
    "noun"
  ],
  "marvel": [
    "noun",
    "verb"
  ],
  "mascara": [
    "noun",
    "verb"
  ],
  "mash": [
    "noun",
    "verb"
  ],
  "mask": [
    "noun",
    "verb"
  ],
  "masked": [
    "adjective"
  ],
  "masking": [
    "noun"
  ],
  "masonic": [
    "adjective"
  ],
  "masquerade": [
    "noun",
    "verb"
  ],
  "mass": [
    "noun",
    "adjective",
    "verb"
  ],
  "massif": [
    "noun"
  ],
  "mast": [
    "noun",
    "verb"
  ],
  "mastered": [
    "adjective"
  ],
  "mastermind": [
    "noun",
    "verb"
  ],
  "masterpiece": [
    "noun"
  ],
  "masterstroke": [
    "noun"
  ],
  "mastodon": [
    "noun"
  ],
  "masturbating": [
    "verb"
  ],
  "mat": [
    "noun",
    "verb",
    "adjective"
  ],
  "match": [
    "noun",
    "verb"
  ],
  "matchbook": [
    "noun"
  ],
  "matchbooks": [
    "noun"
  ],
  "matchbox": [
    "noun"
  ],
  "matchlock": [
    "noun"
  ],
  "matchlocks": [
    "noun"
  ],
  "matchmaking": [
    "noun"
  ],
  "mate": [
    "noun",
    "verb"
  ],
  "material": [
    "noun",
    "adjective",
    "verb"
  ],
  "materialism": [
    "noun"
  ],
  "materialistic": [
    "adjective"
  ],
  "materiality": [
    "noun"
  ],
  "math": [
    "noun",
    "verb"
  ],
  "mathematical": [
    "adjective"
  ],
  "mathematician": [
    "noun"
  ],
  "mating": [
    "noun",
    "adjective"
  ],
  "matriarch": [
    "noun"
  ],
  "matrimony": [
    "noun"
  ],
  "matter": [
    "noun",
    "verb"
  ],
  "mattress": [
    "noun",
    "verb"
  ],
  "mature": [
    "adjective",
    "verb"
  ],
  "matures": [
    "verb"
  ],
  "maturing": [
    "verb"
  ],
  "maturity": [
    "noun"
  ],
  "mauled": [
    "verb"
  ],
  "maxilla": [
    "noun"
  ],
  "may": [
    "noun",
    "verb"
  ],
  "maybe": [
    "adverb",
    "adjective",
    "noun"
  ],
  "mayflower": [
    "noun"
  ],
  "mayonnaise": [
    "noun",
    "verb"
  ],
  "mayor": [
    "noun"
  ],
  "maze": [
    "noun",
    "verb"
  ],
  "meadow": [
    "noun",
    "verb"
  ],
  "meadowlark": [
    "noun"
  ],
  "mealtime": [
    "noun"
  ],
  "mean": [
    "verb",
    "adjective",
    "noun"
  ],
  "meander": [
    "noun",
    "verb"
  ],
  "meaning": [
    "noun",
    "adjective"
  ],
  "meantime": [
    "noun",
    "adverb"
  ],
  "measure": [
    "noun",
    "verb"
  ],
  "meat": [
    "noun"
  ],
  "meatball": [
    "noun"
  ],
  "meatballs": [
    "noun"
  ],
  "mechanic": [
    "noun",
    "adjective"
  ],
  "mechanism": [
    "noun"
  ],
  "mechanistic": [
    "adjective"
  ],
  "med": [
    "noun",
    "verb",
    "adjective"
  ],
  "medal": [
    "noun",
    "verb"
  ],
  "medea": [
    "noun"
  ],
  "mediate": [
    "verb",
    "adjective"
  ],
  "mediator": [
    "noun"
  ],
  "medical": [
    "adjective",
    "noun"
  ],
  "medication": [
    "noun"
  ],
  "medicine": [
    "noun",
    "verb"
  ],
  "medium": [
    "noun",
    "adjective",
    "adverb"
  ],
  "medoc": [
    "noun"
  ],
  "megadeath": [
    "noun"
  ],
  "megaphone": [
    "noun",
    "verb"
  ],
  "megaton": [
    "noun"
  ],
  "megatons": [
    "noun"
  ],
  "meiosis": [
    "noun"
  ],
  "melancholic": [
    "adjective",
    "noun"
  ],
  "melancholy": [
    "adjective",
    "noun"
  ],
  "mellow": [
    "adjective",
    "noun",
    "verb"
  ],
  "melodramatic": [
    "adjective"
  ],
  "melody": [
    "noun"
  ],
  "melon": [
    "noun",
    "adjective"
  ],
  "meltdown": [
    "noun"
  ],
  "meltwater": [
    "noun"
  ],
  "member": [
    "noun",
    "verb"
  ],
  "membership": [
    "noun",
    "verb"
  ],
  "memberships": [
    "noun"
  ],
  "membrane": [
    "noun"
  ],
  "memento": [
    "noun"
  ],
  "memoir": [
    "noun"
  ],
  "memorandum": [
    "noun"
  ],
  "memories": [
    "noun"
  ],
  "memory": [
    "noun"
  ],
  "men": [
    "noun"
  ],
  "mend": [
    "verb",
    "noun"
  ],
  "mental": [
    "adjective",
    "noun"
  ],
  "mentality": [
    "noun"
  ],
  "mention": [
    "verb",
    "noun"
  ],
  "mentioned": [
    "verb"
  ],
  "mentor": [
    "noun",
    "verb"
  ],
  "meow": [
    "noun",
    "verb"
  ],
  "mercantile": [
    "adjective"
  ],
  "mercenary": [
    "adjective",
    "noun"
  ],
  "merchandise": [
    "noun",
    "verb"
  ],
  "merchandiser": [
    "noun"
  ],
  "merchant": [
    "noun",
    "verb"
  ],
  "mercy": [
    "noun",
    "verb"
  ],
  "mere": [
    "adjective",
    "noun",
    "verb"
  ],
  "merge": [
    "verb",
    "noun"
  ],
  "meridian": [
    "noun",
    "adjective",
    "verb"
  ],
  "mermaid": [
    "noun"
  ],
  "merman": [
    "noun"
  ],
  "mesenteric": [
    "adjective"
  ],
  "mesons": [
    "noun"
  ],
  "message": [
    "noun",
    "verb"
  ],
  "messed": [
    "verb"
  ],
  "messenger": [
    "noun",
    "verb"
  ],
  "messy": [
    "adjective"
  ],
  "met": [
    "verb",
    "noun"
  ],
  "metabolism": [
    "noun"
  ],
  "metal": [
    "noun",
    "adjective",
    "verb"
  ],
  "metalwork": [
    "noun"
  ],
  "metalworking": [
    "noun"
  ],
  "metaphor": [
    "noun",
    "verb"
  ],
  "metaphorical": [
    "adjective"
  ],
  "metastatic": [
    "adjective"
  ],
  "mete": [
    "verb",
    "noun",
    "adjective"
  ],
  "meteor": [
    "noun",
    "verb"
  ],
  "meteorite": [
    "noun"
  ],
  "meteorological": [
    "adjective"
  ],
  "meteorology": [
    "noun"
  ],
  "meter": [
    "noun",
    "verb"
  ],
  "methadone": [
    "noun"
  ],
  "methane": [
    "noun"
  ],
  "methanol": [
    "noun"
  ],
  "methodological": [
    "adjective"
  ],
  "methodology": [
    "noun"
  ],
  "meticulous": [
    "adjective"
  ],
  "metronome": [
    "noun"
  ],
  "metropolis": [
    "noun"
  ],
  "mexico": [
    "noun"
  ],
  "mi": [
    "noun"
  ],
  "mice": [
    "verb"
  ],
  "microbiology": [
    "noun"
  ],
  "microchip": [
    "noun",
    "verb"
  ],
  "microcomputer": [
    "noun"
  ],
  "microeconomic": [
    "adjective"
  ],
  "microelectronic": [
    "noun",
    "adjective"
  ],
  "microfiche": [
    "noun",
    "verb"
  ],
  "microfilm": [
    "noun",
    "verb"
  ],
  "microgram": [
    "noun"
  ],
  "microns": [
    "noun"
  ],
  "microphone": [
    "noun",
    "verb"
  ],
  "microscope": [
    "noun",
    "verb"
  ],
  "microwave": [
    "noun",
    "verb"
  ],
  "mid": [
    "noun",
    "adjective",
    "adverb"
  ],
  "midafternoon": [
    "noun"
  ],
  "middle": [
    "noun",
    "adjective",
    "verb"
  ],
  "middleman": [
    "noun",
    "verb"
  ],
  "middlemen": [
    "noun"
  ],
  "mideast": [
    "noun"
  ],
  "midland": [
    "noun",
    "adjective"
  ],
  "midlands": [
    "noun"
  ],
  "midnight": [
    "noun",
    "adjective"
  ],
  "midpoint": [
    "noun"
  ],
  "midsection": [
    "noun"
  ],
  "midstream": [
    "noun",
    "adverb"
  ],
  "midweek": [
    "noun",
    "adjective",
    "adverb"
  ],
  "midwest": [
    "noun"
  ],
  "miffed": [
    "adjective"
  ],
  "might": [
    "noun",
    "verb",
    "adjective"
  ],
  "migraine": [
    "noun"
  ],
  "migration": [
    "noun"
  ],
  "migratory": [
    "adjective"
  ],
  "mild": [
    "adjective",
    "noun"
  ],
  "mile": [
    "noun"
  ],
  "milestone": [
    "noun",
    "verb"
  ],
  "militaristic": [
    "adjective"
  ],
  "military": [
    "adjective",
    "noun"
  ],
  "milk": [
    "noun",
    "verb"
  ],
  "milkman": [
    "noun"
  ],
  "milkshake": [
    "noun",
    "verb"
  ],
  "mill": [
    "noun",
    "verb"
  ],
  "milled": [
    "adjective"
  ],
  "millennium": [
    "noun"
  ],
  "milligram": [
    "noun"
  ],
  "milliliter": [
    "noun"
  ],
  "millilitre": [
    "noun"
  ],
  "millimetre": [
    "noun"
  ],
  "millionaire": [
    "noun"
  ],
  "millions": [
    "noun"
  ],
  "millisecond": [
    "noun"
  ],
  "mime": [
    "noun",
    "verb"
  ],
  "mimeograph": [
    "noun",
    "verb"
  ],
  "minarets": [
    "noun"
  ],
  "mince": [
    "noun",
    "verb"
  ],
  "mincemeat": [
    "noun"
  ],
  "mind": [
    "noun",
    "verb"
  ],
  "minded": [
    "adjective"
  ],
  "minds": [
    "noun",
    "verb"
  ],
  "mine": [
    "noun",
    "verb"
  ],
  "mined": [
    "adjective"
  ],
  "minefield": [
    "noun"
  ],
  "minesweeper": [
    "noun"
  ],
  "miniature": [
    "adjective",
    "noun",
    "verb"
  ],
  "minicomputer": [
    "noun"
  ],
  "miniskirt": [
    "noun"
  ],
  "minority": [
    "noun",
    "adjective"
  ],
  "minstrel": [
    "noun",
    "verb"
  ],
  "minuet": [
    "noun",
    "verb"
  ],
  "minuscule": [
    "adjective",
    "noun"
  ],
  "minute": [
    "noun",
    "adjective",
    "verb"
  ],
  "mirror": [
    "noun",
    "verb"
  ],
  "mirth": [
    "noun"
  ],
  "misanthrope": [
    "noun"
  ],
  "misapprehension": [
    "noun"
  ],
  "misbehave": [
    "verb"
  ],
  "misbehaved": [
    "verb"
  ],
  "miscalculate": [
    "verb"
  ],
  "miscast": [
    "verb",
    "adjective",
    "noun"
  ],
  "miscellaneous": [
    "adjective"
  ],
  "misconceive": [
    "verb"
  ],
  "misconceived": [
    "adjective"
  ],
  "misconceiving": [
    "adjective"
  ],
  "misconstruing": [
    "noun"
  ],
  "miscount": [
    "noun",
    "verb"
  ],
  "misdeed": [
    "noun"
  ],
  "misdeeds": [
    "noun"
  ],
  "miserly": [
    "adjective"
  ],
  "misery": [
    "noun"
  ],
  "misfire": [
    "noun",
    "verb"
  ],
  "misfit": [
    "noun",
    "verb"
  ],
  "misfits": [
    "noun",
    "verb"
  ],
  "misgive": [
    "verb"
  ],
  "misguided": [
    "adjective"
  ],
  "misguides": [
    "verb"
  ],
  "mishandle": [
    "verb",
    "noun"
  ],
  "mishap": [
    "noun",
    "verb"
  ],
  "mishaps": [
    "noun"
  ],
  "mishmash": [
    "noun",
    "verb"
  ],
  "misinform": [
    "verb"
  ],
  "misinterpreted": [
    "verb"
  ],
  "mislead": [
    "verb",
    "noun"
  ],
  "misleads": [
    "verb",
    "noun"
  ],
  "misled": [
    "verb"
  ],
  "mismanage": [
    "verb"
  ],
  "mismatch": [
    "noun",
    "verb"
  ],
  "misperceive": [
    "verb"
  ],
  "misperceived": [
    "verb",
    "adjective"
  ],
  "misplace": [
    "verb"
  ],
  "misplaced": [
    "adjective"
  ],
  "misplacing": [
    "noun"
  ],
  "misprint": [
    "noun",
    "verb"
  ],
  "misquote": [
    "verb",
    "noun"
  ],
  "misread": [
    "verb",
    "noun"
  ],
  "misrepresent": [
    "verb"
  ],
  "misrepresented": [
    "adjective"
  ],
  "misrepresenting": [
    "noun"
  ],
  "misrule": [
    "noun",
    "verb"
  ],
  "mission": [
    "noun",
    "verb"
  ],
  "missionary": [
    "noun",
    "adjective"
  ],
  "misspeak": [
    "verb"
  ],
  "misspelling": [
    "noun"
  ],
  "misspent": [
    "adjective"
  ],
  "mistakes": [
    "noun"
  ],
  "mistaking": [
    "noun"
  ],
  "mistook": [
    "verb"
  ],
  "mistreat": [
    "verb"
  ],
  "mistreating": [
    "verb"
  ],
  "mistrust": [
    "noun",
    "verb"
  ],
  "misunderstand": [
    "verb"
  ],
  "misunderstands": [
    "verb"
  ],
  "misunderstood": [
    "adjective"
  ],
  "misuse": [
    "noun",
    "verb"
  ],
  "misused": [
    "adjective"
  ],
  "misusing": [
    "verb"
  ],
  "miter": [
    "noun",
    "verb"
  ],
  "mitt": [
    "noun"
  ],
  "mitten": [
    "noun",
    "verb"
  ],
  "mixture": [
    "noun"
  ],
  "mizen": [
    "noun"
  ],
  "mnemonic": [
    "adjective",
    "noun"
  ],
  "moccasin": [
    "noun"
  ],
  "mock": [
    "adjective",
    "verb",
    "noun"
  ],
  "mockingbird": [
    "noun"
  ],
  "mocks": [
    "verb"
  ],
  "modality": [
    "noun"
  ],
  "model": [
    "noun",
    "adjective",
    "verb"
  ],
  "modeling": [
    "noun"
  ],
  "modelling": [
    "noun"
  ],
  "modern": [
    "adjective",
    "noun"
  ],
  "modified": [
    "adjective",
    "noun"
  ],
  "modifier": [
    "noun"
  ],
  "modify": [
    "verb"
  ],
  "modifying": [
    "verb"
  ],
  "module": [
    "noun"
  ],
  "moke": [
    "noun"
  ],
  "mol": [
    "noun"
  ],
  "mold": [
    "noun",
    "verb"
  ],
  "mole": [
    "noun",
    "verb"
  ],
  "molecule": [
    "noun"
  ],
  "molehill": [
    "noun"
  ],
  "moleskin": [
    "noun",
    "verb"
  ],
  "molester": [
    "noun",
    "verb"
  ],
  "moment": [
    "noun"
  ],
  "momentous": [
    "adjective"
  ],
  "moments": [
    "noun"
  ],
  "momentum": [
    "noun"
  ],
  "monarchy": [
    "noun"
  ],
  "monastery": [
    "noun"
  ],
  "monatomic": [
    "adjective"
  ],
  "money": [
    "noun",
    "adjective"
  ],
  "moneymaking": [
    "adjective",
    "noun"
  ],
  "mongoloid": [
    "adjective",
    "noun"
  ],
  "monkey": [
    "noun",
    "verb"
  ],
  "monochromatic": [
    "adjective"
  ],
  "monochrome": [
    "noun",
    "adjective"
  ],
  "monocle": [
    "noun"
  ],
  "monogram": [
    "noun",
    "verb"
  ],
  "monograph": [
    "noun",
    "verb"
  ],
  "monographs": [
    "noun"
  ],
  "monologue": [
    "noun",
    "verb"
  ],
  "monophonic": [
    "adjective"
  ],
  "monorail": [
    "noun"
  ],
  "monotype": [
    "noun",
    "verb"
  ],
  "monsieurs": [
    "noun"
  ],
  "monsoon": [
    "noun"
  ],
  "monster": [
    "noun",
    "adjective",
    "verb"
  ],
  "montessori": [
    "adjective"
  ],
  "month": [
    "noun"
  ],
  "monthlong": [
    "adjective"
  ],
  "montreal": [
    "noun"
  ],
  "monument": [
    "noun",
    "verb"
  ],
  "monumental": [
    "adjective"
  ],
  "moon": [
    "noun",
    "verb"
  ],
  "moonbeam": [
    "noun"
  ],
  "moonbeams": [
    "noun"
  ],
  "moonlight": [
    "noun",
    "verb"
  ],
  "moonlighting": [
    "noun"
  ],
  "moonlike": [
    "adjective"
  ],
  "moonlit": [
    "adjective"
  ],
  "moonshine": [
    "noun",
    "verb"
  ],
  "moonstruck": [
    "adjective"
  ],
  "moorlands": [
    "noun"
  ],
  "moose": [
    "noun"
  ],
  "moot": [
    "adjective",
    "noun",
    "verb"
  ],
  "mop": [
    "noun",
    "verb"
  ],
  "mope": [
    "verb",
    "noun"
  ],
  "mopped": [
    "adjective"
  ],
  "moralistic": [
    "adjective"
  ],
  "morass": [
    "noun"
  ],
  "morasses": [
    "noun"
  ],
  "moratoria": [
    "noun"
  ],
  "moratorium": [
    "noun"
  ],
  "more": [
    "adverb",
    "noun",
    "verb"
  ],
  "moreover": [
    "adverb"
  ],
  "morn": [
    "noun"
  ],
  "morning": [
    "noun"
  ],
  "morphological": [
    "adjective"
  ],
  "morphology": [
    "noun"
  ],
  "mortuary": [
    "noun",
    "adjective"
  ],
  "mos": [
    "noun"
  ],
  "mosaic": [
    "noun",
    "adjective",
    "verb"
  ],
  "mosque": [
    "noun"
  ],
  "mostly": [
    "adverb"
  ],
  "motel": [
    "noun",
    "verb"
  ],
  "moth": [
    "noun",
    "verb"
  ],
  "mothballed": [
    "adjective"
  ],
  "mothballing": [
    "noun"
  ],
  "mothballs": [
    "noun"
  ],
  "mother": [
    "noun",
    "verb"
  ],
  "motherfucker": [
    "noun"
  ],
  "motherhood": [
    "noun"
  ],
  "motherland": [
    "noun"
  ],
  "mothers": [
    "noun",
    "verb"
  ],
  "motility": [
    "noun"
  ],
  "motion": [
    "noun",
    "verb"
  ],
  "motivate": [
    "verb"
  ],
  "motor": [
    "noun",
    "adjective",
    "verb"
  ],
  "motorboat": [
    "noun",
    "verb"
  ],
  "motorcar": [
    "noun"
  ],
  "motorcycle": [
    "noun",
    "verb"
  ],
  "motto": [
    "noun",
    "verb"
  ],
  "mounds": [
    "noun"
  ],
  "mount": [
    "noun",
    "verb"
  ],
  "mountain": [
    "noun"
  ],
  "mountaineering": [
    "noun"
  ],
  "mountaineers": [
    "noun"
  ],
  "mountains": [
    "noun"
  ],
  "mountainsides": [
    "noun"
  ],
  "mourn": [
    "verb",
    "noun"
  ],
  "mouse": [
    "noun",
    "verb"
  ],
  "mousetrap": [
    "noun",
    "verb"
  ],
  "mousse": [
    "noun",
    "verb"
  ],
  "mouth": [
    "noun",
    "verb"
  ],
  "mouthpart": [
    "noun"
  ],
  "mouthpiece": [
    "noun"
  ],
  "movement": [
    "noun"
  ],
  "moves": [
    "noun"
  ],
  "movies": [
    "noun"
  ],
  "mow": [
    "verb",
    "noun"
  ],
  "mowed": [
    "verb"
  ],
  "mozambique": [
    "noun"
  ],
  "much": [
    "adverb",
    "adjective",
    "noun"
  ],
  "mucking": [
    "noun"
  ],
  "muckraking": [
    "noun"
  ],
  "mucky": [
    "adjective"
  ],
  "mud": [
    "noun",
    "verb"
  ],
  "muffin": [
    "noun",
    "verb"
  ],
  "muffler": [
    "noun"
  ],
  "mug": [
    "noun",
    "verb",
    "adjective"
  ],
  "mule": [
    "noun",
    "verb"
  ],
  "multinational": [
    "adjective",
    "noun"
  ],
  "multiplex": [
    "noun",
    "adjective",
    "verb"
  ],
  "multiplier": [
    "noun"
  ],
  "multiply": [
    "verb",
    "adverb",
    "noun"
  ],
  "multiplying": [
    "noun"
  ],
  "multiprocessor": [
    "noun"
  ],
  "multitude": [
    "noun"
  ],
  "mumble": [
    "verb",
    "noun"
  ],
  "mummer": [
    "noun",
    "verb"
  ],
  "mummy": [
    "noun",
    "verb"
  ],
  "mums": [
    "noun"
  ],
  "munch": [
    "noun",
    "verb"
  ],
  "mundane": [
    "adjective",
    "noun"
  ],
  "munificent": [
    "adjective"
  ],
  "mural": [
    "noun",
    "adjective",
    "verb"
  ],
  "murder": [
    "noun",
    "verb"
  ],
  "murdered": [
    "adjective"
  ],
  "murderer": [
    "noun"
  ],
  "murk": [
    "noun",
    "adjective",
    "verb"
  ],
  "murmur": [
    "noun",
    "verb"
  ],
  "muscle": [
    "noun",
    "verb"
  ],
  "muse": [
    "noun",
    "verb"
  ],
  "mused": [
    "verb"
  ],
  "museum": [
    "noun",
    "verb"
  ],
  "music": [
    "noun",
    "verb",
    "adjective"
  ],
  "musical": [
    "adjective",
    "noun"
  ],
  "musicality": [
    "noun"
  ],
  "musician": [
    "noun"
  ],
  "musicologist": [
    "noun"
  ],
  "musing": [
    "noun",
    "adjective"
  ],
  "muskmelon": [
    "noun"
  ],
  "mustang": [
    "noun",
    "verb"
  ],
  "mute": [
    "adjective",
    "noun",
    "verb"
  ],
  "mutilated": [
    "adjective"
  ],
  "mutineers": [
    "noun",
    "verb"
  ],
  "mutt": [
    "noun"
  ],
  "mutter": [
    "verb",
    "noun"
  ],
  "mutton": [
    "noun",
    "adjective"
  ],
  "mutuality": [
    "noun"
  ],
  "muzzle": [
    "noun",
    "verb"
  ],
  "mycenaean": [
    "adjective",
    "noun"
  ],
  "myrrh": [
    "noun"
  ],
  "mysterious": [
    "adjective"
  ],
  "mysteriously": [
    "adverb"
  ],
  "mystery": [
    "noun"
  ],
  "mysticism": [
    "noun"
  ],
  "mystifying": [
    "adjective"
  ],
  "mystique": [
    "noun"
  ],
  "myth": [
    "noun"
  ],
  "mythology": [
    "noun"
  ],
  "nad": [
    "noun"
  ],
  "nail": [
    "noun",
    "verb"
  ],
  "naira": [
    "noun"
  ],
  "naked": [
    "adjective"
  ],
  "name": [
    "noun",
    "verb"
  ],
  "named": [
    "adjective"
  ],
  "names": [
    "noun"
  ],
  "namesake": [
    "noun",
    "verb"
  ],
  "namesakes": [
    "noun"
  ],
  "nanometer": [
    "noun"
  ],
  "nanosecond": [
    "noun"
  ],
  "nap": [
    "noun",
    "verb"
  ],
  "napkin": [
    "noun"
  ],
  "napoleonic": [
    "adjective"
  ],
  "napped": [
    "adjective"
  ],
  "naps": [
    "noun"
  ],
  "narc": [
    "noun",
    "verb"
  ],
  "narcissism": [
    "noun"
  ],
  "narration": [
    "noun"
  ],
  "narrative": [
    "noun",
    "adjective"
  ],
  "narrator": [
    "noun"
  ],
  "narrow": [
    "adjective",
    "verb",
    "noun"
  ],
  "nasty": [
    "adjective",
    "noun"
  ],
  "natchez": [
    "noun"
  ],
  "nation": [
    "noun",
    "adverb",
    "adjective"
  ],
  "national": [
    "adjective",
    "noun"
  ],
  "nationalism": [
    "noun"
  ],
  "nationalistic": [
    "adjective"
  ],
  "nationhood": [
    "noun"
  ],
  "nativist": [
    "adjective",
    "noun"
  ],
  "natural": [
    "adjective",
    "noun",
    "adverb"
  ],
  "naturalistic": [
    "adjective"
  ],
  "naturally": [
    "adverb"
  ],
  "nature": [
    "noun",
    "verb"
  ],
  "nauseated": [
    "adjective"
  ],
  "navigate": [
    "verb"
  ],
  "navigator": [
    "noun"
  ],
  "navy": [
    "noun",
    "adjective"
  ],
  "naysayer": [
    "noun"
  ],
  "ne": [
    "noun",
    "adverb",
    "adjective"
  ],
  "neanderthal": [
    "adjective",
    "noun"
  ],
  "neanderthals": [
    "adjective",
    "noun"
  ],
  "near": [
    "adjective",
    "adverb",
    "verb",
    "noun"
  ],
  "nearby": [
    "adjective",
    "adverb",
    "noun"
  ],
  "neared": [
    "verb"
  ],
  "nearly": [
    "adverb"
  ],
  "nears": [
    "verb",
    "noun"
  ],
  "neat": [
    "adjective",
    "noun"
  ],
  "neater": [
    "adjective",
    "adverb"
  ],
  "neatly": [
    "adverb"
  ],
  "nebula": [
    "noun"
  ],
  "nebulizer": [
    "noun"
  ],
  "necessary": [
    "adjective",
    "noun"
  ],
  "neck": [
    "noun",
    "verb"
  ],
  "necklace": [
    "noun",
    "verb"
  ],
  "necks": [
    "noun"
  ],
  "nectar": [
    "noun",
    "verb"
  ],
  "need": [
    "verb",
    "noun"
  ],
  "needlefish": [
    "noun"
  ],
  "needlelike": [
    "adjective"
  ],
  "needlepoint": [
    "noun",
    "verb"
  ],
  "needlework": [
    "noun"
  ],
  "nefarious": [
    "adjective"
  ],
  "negative": [
    "adjective",
    "noun",
    "verb"
  ],
  "neglect": [
    "noun",
    "verb"
  ],
  "negligent": [
    "adjective"
  ],
  "negotiate": [
    "verb"
  ],
  "negotiated": [
    "verb"
  ],
  "negotiating": [
    "verb",
    "noun"
  ],
  "negotiator": [
    "noun"
  ],
  "nehemiah": [
    "noun"
  ],
  "neighbor": [
    "noun",
    "verb"
  ],
  "neighborhood": [
    "noun"
  ],
  "neolith": [
    "noun"
  ],
  "neons": [
    "noun"
  ],
  "nepal": [
    "noun"
  ],
  "nephrosis": [
    "noun"
  ],
  "nepotism": [
    "noun"
  ],
  "nerd": [
    "noun"
  ],
  "nerds": [
    "noun"
  ],
  "neritic": [
    "adjective"
  ],
  "nerve": [
    "noun",
    "verb"
  ],
  "nervous": [
    "adjective"
  ],
  "nest": [
    "noun",
    "verb"
  ],
  "nestle": [
    "noun",
    "verb"
  ],
  "net": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "nets": [
    "noun"
  ],
  "netting": [
    "noun"
  ],
  "network": [
    "noun",
    "verb"
  ],
  "networked": [
    "adjective"
  ],
  "networking": [
    "noun"
  ],
  "networks": [
    "noun"
  ],
  "neurology": [
    "noun"
  ],
  "neuron": [
    "noun"
  ],
  "neutron": [
    "noun"
  ],
  "never": [
    "adverb",
    "verb"
  ],
  "nevertheless": [
    "adverb"
  ],
  "new": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "newfound": [
    "adjective"
  ],
  "news": [
    "noun",
    "verb"
  ],
  "newscast": [
    "noun",
    "verb"
  ],
  "newsman": [
    "noun"
  ],
  "newspaper": [
    "noun",
    "verb"
  ],
  "newspaperman": [
    "noun"
  ],
  "newspeak": [
    "noun"
  ],
  "newsprint": [
    "noun"
  ],
  "newsreel": [
    "noun"
  ],
  "newsreels": [
    "noun"
  ],
  "newsroom": [
    "noun"
  ],
  "newsstand": [
    "noun"
  ],
  "newsstands": [
    "noun"
  ],
  "newt": [
    "noun",
    "verb"
  ],
  "nibble": [
    "verb",
    "noun"
  ],
  "niche": [
    "noun",
    "adjective",
    "verb"
  ],
  "nickname": [
    "noun",
    "verb"
  ],
  "nicotine": [
    "noun"
  ],
  "niece": [
    "noun"
  ],
  "night": [
    "noun",
    "verb"
  ],
  "nightfall": [
    "noun"
  ],
  "nighthawk": [
    "noun"
  ],
  "nightmare": [
    "noun",
    "verb"
  ],
  "nights": [
    "adverb"
  ],
  "nightshirt": [
    "noun"
  ],
  "nightstick": [
    "noun"
  ],
  "nighttime": [
    "noun",
    "adjective"
  ],
  "nighttimes": [
    "noun"
  ],
  "nil": [
    "noun"
  ],
  "nile": [
    "noun"
  ],
  "nimble": [
    "adjective",
    "verb"
  ],
  "nincompoop": [
    "noun"
  ],
  "nine": [
    "noun"
  ],
  "nineteen": [
    "adjective",
    "noun"
  ],
  "nipped": [
    "verb"
  ],
  "nippon": [
    "noun"
  ],
  "nips": [
    "noun",
    "verb"
  ],
  "nit": [
    "noun",
    "verb"
  ],
  "nitrocellulose": [
    "noun"
  ],
  "nitrogen": [
    "noun"
  ],
  "no": [
    "adverb",
    "noun",
    "verb",
    "adjective"
  ],
  "noble": [
    "adjective",
    "noun"
  ],
  "noblewoman": [
    "noun"
  ],
  "nod": [
    "noun",
    "verb"
  ],
  "node": [
    "noun"
  ],
  "noise": [
    "noun",
    "verb"
  ],
  "nomad": [
    "adjective",
    "noun"
  ],
  "nome": [
    "noun"
  ],
  "nominees": [
    "noun"
  ],
  "non": [
    "noun",
    "adverb"
  ],
  "nonaggression": [
    "noun"
  ],
  "nonbeliever": [
    "noun"
  ],
  "nonchalant": [
    "adjective"
  ],
  "nondescript": [
    "adjective",
    "noun"
  ],
  "none": [
    "noun",
    "adverb"
  ],
  "nonessential": [
    "adjective",
    "noun"
  ],
  "nonetheless": [
    "adverb"
  ],
  "nonevent": [
    "noun"
  ],
  "nonfat": [
    "adjective"
  ],
  "nonfiction": [
    "noun"
  ],
  "nonhuman": [
    "adjective",
    "noun"
  ],
  "nonintervention": [
    "noun"
  ],
  "nonplussed": [
    "adjective"
  ],
  "nonpublic": [
    "adjective"
  ],
  "nonresidential": [
    "adjective"
  ],
  "nonsense": [
    "noun",
    "verb",
    "adjective"
  ],
  "nonstick": [
    "adjective"
  ],
  "nonstop": [
    "adjective",
    "noun",
    "adverb"
  ],
  "noodle": [
    "noun",
    "verb"
  ],
  "nook": [
    "noun",
    "verb"
  ],
  "nooks": [
    "noun"
  ],
  "noon": [
    "noun",
    "verb"
  ],
  "noose": [
    "noun",
    "verb"
  ],
  "norm": [
    "noun",
    "verb"
  ],
  "normal": [
    "adjective",
    "noun"
  ],
  "normality": [
    "noun"
  ],
  "normally": [
    "adverb"
  ],
  "northeast": [
    "noun",
    "adverb",
    "adjective"
  ],
  "northernmost": [
    "adjective"
  ],
  "northwest": [
    "noun",
    "adjective",
    "adverb"
  ],
  "nose": [
    "noun",
    "verb"
  ],
  "nosebleed": [
    "noun"
  ],
  "nosed": [
    "adjective"
  ],
  "nosedive": [
    "noun",
    "verb"
  ],
  "note": [
    "noun",
    "verb"
  ],
  "notebooks": [
    "noun"
  ],
  "notepad": [
    "noun"
  ],
  "notes": [
    "noun"
  ],
  "notice": [
    "noun",
    "verb"
  ],
  "noticed": [
    "adjective"
  ],
  "notified": [
    "verb"
  ],
  "notifying": [
    "verb"
  ],
  "notion": [
    "noun"
  ],
  "notorious": [
    "adjective",
    "adverb"
  ],
  "nous": [
    "noun"
  ],
  "nov": [
    "noun"
  ],
  "novel": [
    "noun",
    "adjective"
  ],
  "novella": [
    "noun"
  ],
  "now": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "nowadays": [
    "adverb"
  ],
  "nowhere": [
    "adverb",
    "noun",
    "adjective"
  ],
  "nub": [
    "noun",
    "verb"
  ],
  "nucleoli": [
    "noun"
  ],
  "nucleotides": [
    "noun"
  ],
  "nude": [
    "adjective",
    "noun"
  ],
  "nudge": [
    "noun",
    "verb"
  ],
  "numb": [
    "adjective",
    "verb"
  ],
  "number": [
    "noun",
    "verb"
  ],
  "numbing": [
    "adjective",
    "noun"
  ],
  "numeric": [
    "adjective",
    "noun"
  ],
  "numerology": [
    "noun"
  ],
  "numismatist": [
    "noun"
  ],
  "nun": [
    "noun"
  ],
  "nuns": [
    "noun"
  ],
  "nurse": [
    "noun",
    "verb"
  ],
  "nurture": [
    "verb",
    "noun"
  ],
  "nutrition": [
    "noun"
  ],
  "nuts": [
    "noun",
    "adjective"
  ],
  "nutshell": [
    "noun",
    "verb"
  ],
  "nuzzling": [
    "noun"
  ],
  "nylon": [
    "noun"
  ],
  "nymphomaniac": [
    "noun",
    "adjective"
  ],
  "oasis": [
    "noun"
  ],
  "oat": [
    "noun"
  ],
  "oath": [
    "noun",
    "verb"
  ],
  "oaths": [
    "noun"
  ],
  "oatmeal": [
    "noun",
    "adjective"
  ],
  "obadiah": [
    "noun"
  ],
  "obedience": [
    "noun"
  ],
  "obedient": [
    "adjective",
    "noun"
  ],
  "obelisk": [
    "noun",
    "verb"
  ],
  "obese": [
    "adjective",
    "noun"
  ],
  "obeyed": [
    "verb"
  ],
  "obeying": [
    "verb"
  ],
  "obeys": [
    "verb"
  ],
  "object": [
    "noun",
    "verb"
  ],
  "objective": [
    "noun",
    "adjective"
  ],
  "objector": [
    "noun"
  ],
  "obligatory": [
    "adjective"
  ],
  "oblique": [
    "adjective",
    "noun",
    "verb"
  ],
  "obliterate": [
    "verb",
    "adjective"
  ],
  "oblivion": [
    "noun",
    "verb"
  ],
  "obscene": [
    "adjective",
    "verb"
  ],
  "obscure": [
    "adjective",
    "verb"
  ],
  "obscures": [
    "verb"
  ],
  "obscuring": [
    "noun"
  ],
  "observational": [
    "adjective"
  ],
  "observatory": [
    "noun"
  ],
  "observe": [
    "verb",
    "noun"
  ],
  "obsess": [
    "verb"
  ],
  "obsessed": [
    "adjective"
  ],
  "obsession": [
    "noun"
  ],
  "obsolete": [
    "adjective",
    "noun",
    "verb"
  ],
  "obstruct": [
    "verb"
  ],
  "obtain": [
    "verb"
  ],
  "obtuse": [
    "adjective",
    "verb"
  ],
  "obverse": [
    "noun",
    "adjective"
  ],
  "obvious": [
    "adjective"
  ],
  "occident": [
    "noun"
  ],
  "occidental": [
    "noun",
    "adjective"
  ],
  "occlusion": [
    "noun"
  ],
  "occupational": [
    "adjective"
  ],
  "occupied": [
    "adjective"
  ],
  "occupier": [
    "noun"
  ],
  "occupying": [
    "verb"
  ],
  "ocean": [
    "noun"
  ],
  "oceanfront": [
    "adjective",
    "noun"
  ],
  "oceangoing": [
    "adjective"
  ],
  "oct": [
    "noun"
  ],
  "octagon": [
    "noun"
  ],
  "octillion": [
    "noun"
  ],
  "octopus": [
    "noun",
    "verb"
  ],
  "oculist": [
    "noun"
  ],
  "odd": [
    "adjective",
    "noun"
  ],
  "oddball": [
    "noun",
    "adjective"
  ],
  "oddballs": [
    "noun",
    "adjective"
  ],
  "odometer": [
    "noun"
  ],
  "odyssey": [
    "noun"
  ],
  "oenophile": [
    "noun"
  ],
  "offend": [
    "verb"
  ],
  "offends": [
    "verb"
  ],
  "offered": [
    "verb"
  ],
  "offhand": [
    "adverb",
    "adjective"
  ],
  "office": [
    "noun",
    "verb"
  ],
  "officeholder": [
    "noun"
  ],
  "officers": [
    "noun"
  ],
  "official": [
    "adjective",
    "noun"
  ],
  "offset": [
    "verb",
    "noun",
    "adverb",
    "adjective"
  ],
  "offsets": [
    "noun",
    "verb"
  ],
  "offsetting": [
    "noun"
  ],
  "offshore": [
    "noun",
    "adverb",
    "adjective",
    "verb"
  ],
  "offspring": [
    "noun"
  ],
  "offstage": [
    "adverb",
    "adjective",
    "verb"
  ],
  "often": [
    "adverb",
    "adjective"
  ],
  "oil": [
    "noun",
    "verb"
  ],
  "oilfield": [
    "noun"
  ],
  "oilmen": [
    "noun"
  ],
  "oilseeds": [
    "noun"
  ],
  "ointment": [
    "noun"
  ],
  "old": [
    "adjective",
    "noun"
  ],
  "oleander": [
    "noun"
  ],
  "oleaster": [
    "noun"
  ],
  "oligarch": [
    "noun"
  ],
  "olympiad": [
    "noun"
  ],
  "olympiads": [
    "noun"
  ],
  "omaha": [
    "noun"
  ],
  "omelet": [
    "noun"
  ],
  "omit": [
    "verb"
  ],
  "omits": [
    "verb"
  ],
  "omitting": [
    "noun"
  ],
  "omniscient": [
    "adjective",
    "noun"
  ],
  "oncology": [
    "noun"
  ],
  "oncoming": [
    "adjective",
    "noun"
  ],
  "one": [
    "noun",
    "adjective",
    "verb"
  ],
  "onetime": [
    "adjective"
  ],
  "onion": [
    "noun"
  ],
  "online": [
    "adjective",
    "adverb",
    "verb"
  ],
  "only": [
    "adverb",
    "adjective",
    "noun"
  ],
  "onomastic": [
    "adjective"
  ],
  "onset": [
    "noun",
    "verb"
  ],
  "onslaught": [
    "noun"
  ],
  "ontological": [
    "adjective"
  ],
  "ooze": [
    "noun",
    "verb"
  ],
  "oozed": [
    "verb"
  ],
  "oozing": [
    "noun"
  ],
  "opaque": [
    "adjective",
    "noun",
    "verb"
  ],
  "opec": [
    "noun"
  ],
  "open": [
    "adjective",
    "verb",
    "noun"
  ],
  "opened": [
    "adjective"
  ],
  "opening": [
    "noun",
    "adjective"
  ],
  "opens": [
    "verb"
  ],
  "openwork": [
    "noun"
  ],
  "operate": [
    "verb"
  ],
  "operatic": [
    "adjective"
  ],
  "operation": [
    "noun"
  ],
  "operational": [
    "adjective"
  ],
  "operator": [
    "noun"
  ],
  "ophthalmology": [
    "noun"
  ],
  "ophthalmoscope": [
    "noun"
  ],
  "opiate": [
    "adjective",
    "noun",
    "verb"
  ],
  "opinion": [
    "noun",
    "verb"
  ],
  "opportune": [
    "adjective"
  ],
  "opportunistic": [
    "adjective"
  ],
  "opportunity": [
    "noun"
  ],
  "oppose": [
    "verb"
  ],
  "opposite": [
    "adjective",
    "noun",
    "adverb"
  ],
  "opposition": [
    "noun"
  ],
  "oppress": [
    "verb",
    "noun"
  ],
  "oppressed": [
    "adjective"
  ],
  "oppressing": [
    "adjective"
  ],
  "opt": [
    "verb",
    "noun"
  ],
  "optimistic": [
    "adjective"
  ],
  "opulent": [
    "adjective"
  ],
  "orange": [
    "noun",
    "adjective",
    "verb"
  ],
  "oratory": [
    "noun"
  ],
  "orbit": [
    "noun",
    "verb"
  ],
  "orchard": [
    "noun"
  ],
  "orchestra": [
    "noun"
  ],
  "orchestrate": [
    "verb"
  ],
  "ordeal": [
    "noun"
  ],
  "ordeals": [
    "noun"
  ],
  "ordered": [
    "adjective"
  ],
  "orders": [
    "noun"
  ],
  "ordinary": [
    "adjective",
    "noun"
  ],
  "organ": [
    "noun",
    "verb"
  ],
  "organization": [
    "noun"
  ],
  "organizational": [
    "adjective"
  ],
  "organize": [
    "verb"
  ],
  "orient": [
    "noun",
    "verb",
    "adjective"
  ],
  "original": [
    "adjective",
    "noun"
  ],
  "originality": [
    "noun"
  ],
  "originate": [
    "verb",
    "adjective"
  ],
  "originated": [
    "verb"
  ],
  "oriole": [
    "noun"
  ],
  "ornamental": [
    "adjective",
    "noun"
  ],
  "ornamented": [
    "adjective"
  ],
  "ornithology": [
    "noun"
  ],
  "orthodox": [
    "noun",
    "adjective"
  ],
  "orthography": [
    "noun",
    "verb"
  ],
  "orwell": [
    "noun"
  ],
  "os": [
    "noun",
    "adjective",
    "adverb"
  ],
  "osage": [
    "noun"
  ],
  "oscillate": [
    "verb"
  ],
  "oscilloscope": [
    "noun"
  ],
  "osprey": [
    "noun"
  ],
  "ostentatious": [
    "adjective"
  ],
  "otherwise": [
    "adverb",
    "adjective"
  ],
  "otiose": [
    "adjective"
  ],
  "ottawa": [
    "noun"
  ],
  "otter": [
    "noun"
  ],
  "ottoman": [
    "noun",
    "adjective"
  ],
  "ounce": [
    "noun"
  ],
  "out": [
    "adverb",
    "noun",
    "verb",
    "adjective"
  ],
  "outback": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "outbid": [
    "verb"
  ],
  "outbidding": [
    "verb",
    "noun"
  ],
  "outbids": [
    "verb"
  ],
  "outboard": [
    "noun",
    "adjective"
  ],
  "outbound": [
    "adjective",
    "noun"
  ],
  "outbreak": [
    "noun",
    "verb"
  ],
  "outbreaks": [
    "noun"
  ],
  "outburst": [
    "noun",
    "verb"
  ],
  "outcast": [
    "noun",
    "adjective",
    "verb"
  ],
  "outclass": [
    "verb"
  ],
  "outclassed": [
    "adjective"
  ],
  "outcome": [
    "noun"
  ],
  "outcomes": [
    "noun"
  ],
  "outdid": [
    "verb"
  ],
  "outdoes": [
    "verb"
  ],
  "outdoing": [
    "noun"
  ],
  "outdone": [
    "verb"
  ],
  "outdoor": [
    "adjective",
    "verb"
  ],
  "outermost": [
    "noun"
  ],
  "outfield": [
    "noun",
    "verb"
  ],
  "outfielder": [
    "noun"
  ],
  "outfit": [
    "noun",
    "verb"
  ],
  "outfits": [
    "noun"
  ],
  "outfitting": [
    "noun"
  ],
  "outflank": [
    "verb"
  ],
  "outflanks": [
    "verb"
  ],
  "outfox": [
    "verb"
  ],
  "outgrowing": [
    "noun"
  ],
  "outgrown": [
    "verb"
  ],
  "outgrowth": [
    "noun"
  ],
  "outguessing": [
    "verb",
    "noun"
  ],
  "outlast": [
    "verb"
  ],
  "outlet": [
    "noun"
  ],
  "outlets": [
    "noun"
  ],
  "outline": [
    "noun",
    "verb"
  ],
  "outlined": [
    "adjective"
  ],
  "outlived": [
    "verb"
  ],
  "outlives": [
    "verb"
  ],
  "outlook": [
    "noun",
    "verb"
  ],
  "outlooks": [
    "noun"
  ],
  "outlying": [
    "adjective",
    "noun"
  ],
  "outpace": [
    "verb"
  ],
  "outpaced": [
    "verb"
  ],
  "outpacing": [
    "verb"
  ],
  "outperform": [
    "verb"
  ],
  "outpost": [
    "noun"
  ],
  "outrageous": [
    "adjective"
  ],
  "outreach": [
    "noun",
    "verb"
  ],
  "outrider": [
    "noun"
  ],
  "outrun": [
    "verb",
    "noun"
  ],
  "outruns": [
    "verb"
  ],
  "outselling": [
    "verb"
  ],
  "outset": [
    "noun",
    "verb"
  ],
  "outsides": [
    "noun"
  ],
  "outskirt": [
    "noun",
    "verb"
  ],
  "outsmart": [
    "verb"
  ],
  "outsmarted": [
    "verb"
  ],
  "outsmarting": [
    "noun"
  ],
  "outstripped": [
    "verb"
  ],
  "outstrips": [
    "verb"
  ],
  "outtakes": [
    "noun"
  ],
  "outweighing": [
    "verb"
  ],
  "outwit": [
    "verb"
  ],
  "outwits": [
    "verb"
  ],
  "outwitting": [
    "verb"
  ],
  "oven": [
    "noun",
    "verb"
  ],
  "overact": [
    "verb"
  ],
  "overalls": [
    "noun"
  ],
  "overambitious": [
    "adjective"
  ],
  "overbearing": [
    "adjective"
  ],
  "overboard": [
    "adverb",
    "adjective",
    "verb"
  ],
  "overcame": [
    "verb"
  ],
  "overcharge": [
    "noun",
    "verb"
  ],
  "overcoat": [
    "noun",
    "verb"
  ],
  "overcome": [
    "verb",
    "adjective",
    "noun"
  ],
  "overcomes": [
    "verb"
  ],
  "overcoming": [
    "noun"
  ],
  "overcook": [
    "verb"
  ],
  "overcooked": [
    "adjective"
  ],
  "overcooking": [
    "verb",
    "noun"
  ],
  "overcooks": [
    "verb",
    "noun"
  ],
  "overcrowd": [
    "verb"
  ],
  "overdid": [
    "verb"
  ],
  "overdoes": [
    "verb"
  ],
  "overdoing": [
    "noun"
  ],
  "overdone": [
    "adjective"
  ],
  "overdraft": [
    "noun",
    "verb"
  ],
  "overdraw": [
    "verb",
    "noun"
  ],
  "overdrawn": [
    "verb",
    "adjective"
  ],
  "overdrive": [
    "noun",
    "verb"
  ],
  "overeating": [
    "noun"
  ],
  "overexposed": [
    "adjective"
  ],
  "overextend": [
    "verb"
  ],
  "overextends": [
    "verb",
    "noun"
  ],
  "overflowed": [
    "verb"
  ],
  "overflowing": [
    "noun"
  ],
  "overgrown": [
    "adjective"
  ],
  "overhang": [
    "noun",
    "verb"
  ],
  "overhaul": [
    "noun",
    "verb"
  ],
  "overhauled": [
    "verb"
  ],
  "overhauling": [
    "noun"
  ],
  "overhauls": [
    "noun"
  ],
  "overhead": [
    "adjective",
    "adverb",
    "noun"
  ],
  "overheard": [
    "verb"
  ],
  "overheat": [
    "verb",
    "noun"
  ],
  "overheating": [
    "noun"
  ],
  "overhung": [
    "adjective"
  ],
  "overjoyed": [
    "adjective"
  ],
  "overkill": [
    "noun",
    "verb"
  ],
  "overlap": [
    "noun",
    "verb"
  ],
  "overlapped": [
    "verb",
    "adjective"
  ],
  "overlaps": [
    "verb",
    "noun"
  ],
  "overload": [
    "noun",
    "verb"
  ],
  "overlook": [
    "verb",
    "noun"
  ],
  "overlooked": [
    "adjective"
  ],
  "overlooking": [
    "adjective"
  ],
  "overlooks": [
    "verb"
  ],
  "overlord": [
    "noun",
    "verb"
  ],
  "overnight": [
    "adverb",
    "adjective",
    "verb",
    "noun"
  ],
  "overnighter": [
    "noun"
  ],
  "overpass": [
    "noun",
    "verb"
  ],
  "overpaying": [
    "verb"
  ],
  "overplaying": [
    "verb"
  ],
  "overpower": [
    "verb"
  ],
  "overpowers": [
    "verb"
  ],
  "overprice": [
    "verb"
  ],
  "overproduce": [
    "verb"
  ],
  "overprotection": [
    "noun"
  ],
  "overreach": [
    "verb",
    "noun"
  ],
  "overreact": [
    "verb"
  ],
  "overreaction": [
    "noun"
  ],
  "override": [
    "verb",
    "noun"
  ],
  "overrides": [
    "verb",
    "noun"
  ],
  "overripe": [
    "adjective"
  ],
  "overrule": [
    "verb"
  ],
  "overrun": [
    "verb",
    "noun"
  ],
  "overruns": [
    "noun"
  ],
  "oversaw": [
    "verb"
  ],
  "overseas": [
    "adjective",
    "adverb"
  ],
  "oversee": [
    "verb"
  ],
  "overshot": [
    "adjective",
    "noun"
  ],
  "oversight": [
    "noun",
    "verb"
  ],
  "oversleep": [
    "verb"
  ],
  "overspend": [
    "verb",
    "noun"
  ],
  "overspends": [
    "noun",
    "verb"
  ],
  "overspent": [
    "adjective"
  ],
  "overstepped": [
    "verb"
  ],
  "overstuff": [
    "verb"
  ],
  "overt": [
    "adjective",
    "noun"
  ],
  "overtake": [
    "verb",
    "noun"
  ],
  "overtakes": [
    "verb"
  ],
  "overtaking": [
    "noun"
  ],
  "overthrow": [
    "noun",
    "verb"
  ],
  "overthrowing": [
    "verb"
  ],
  "overtime": [
    "noun",
    "adverb",
    "verb"
  ],
  "overtook": [
    "verb"
  ],
  "overture": [
    "noun",
    "verb",
    "adjective"
  ],
  "overtures": [
    "noun"
  ],
  "overturn": [
    "verb",
    "noun"
  ],
  "overturned": [
    "adjective"
  ],
  "overused": [
    "adjective"
  ],
  "overusing": [
    "verb"
  ],
  "overwhelming": [
    "adjective",
    "noun"
  ],
  "overwork": [
    "noun",
    "verb"
  ],
  "overworked": [
    "adjective"
  ],
  "overworking": [
    "noun"
  ],
  "overworks": [
    "verb"
  ],
  "overwriting": [
    "verb",
    "noun"
  ],
  "overwritten": [
    "verb"
  ],
  "overwrought": [
    "adjective"
  ],
  "ovoid": [
    "adjective",
    "noun"
  ],
  "owe": [
    "verb"
  ],
  "owes": [
    "noun"
  ],
  "owing": [
    "adjective"
  ],
  "owl": [
    "noun",
    "verb"
  ],
  "owner": [
    "noun"
  ],
  "ownership": [
    "noun"
  ],
  "oxcart": [
    "noun"
  ],
  "oxides": [
    "noun"
  ],
  "oxidizer": [
    "noun"
  ],
  "oxygen": [
    "noun"
  ],
  "oxymoron": [
    "noun"
  ],
  "oyster": [
    "noun",
    "adjective",
    "verb"
  ],
  "ozone": [
    "noun",
    "verb"
  ],
  "paced": [
    "adjective"
  ],
  "pacesetter": [
    "noun"
  ],
  "pacifier": [
    "noun"
  ],
  "package": [
    "noun",
    "verb"
  ],
  "packinghouse": [
    "noun"
  ],
  "pact": [
    "noun",
    "verb"
  ],
  "pad": [
    "noun",
    "verb"
  ],
  "padlock": [
    "noun",
    "verb"
  ],
  "padlocks": [
    "noun"
  ],
  "paean": [
    "noun",
    "verb"
  ],
  "pail": [
    "noun"
  ],
  "pain": [
    "noun",
    "verb"
  ],
  "painstaking": [
    "adjective",
    "noun"
  ],
  "paint": [
    "noun",
    "verb"
  ],
  "paintbrush": [
    "noun"
  ],
  "painter": [
    "noun"
  ],
  "painting": [
    "noun"
  ],
  "pair": [
    "noun",
    "verb"
  ],
  "pairing": [
    "noun"
  ],
  "pakistan": [
    "noun"
  ],
  "palace": [
    "noun",
    "verb"
  ],
  "paleontology": [
    "noun"
  ],
  "palestine": [
    "noun"
  ],
  "palette": [
    "noun"
  ],
  "palimony": [
    "noun"
  ],
  "pamphlet": [
    "noun",
    "verb"
  ],
  "pamphleteers": [
    "noun"
  ],
  "pan": [
    "noun",
    "adjective",
    "verb"
  ],
  "panacea": [
    "noun"
  ],
  "panache": [
    "noun"
  ],
  "panama": [
    "noun"
  ],
  "pancake": [
    "noun",
    "verb"
  ],
  "pancakes": [
    "noun"
  ],
  "pancreatic": [
    "adjective"
  ],
  "panel": [
    "noun",
    "verb"
  ],
  "pangloss": [
    "noun"
  ],
  "panic": [
    "noun",
    "adjective",
    "verb"
  ],
  "panned": [
    "verb"
  ],
  "panorama": [
    "noun"
  ],
  "pant": [
    "noun",
    "verb"
  ],
  "pantaloon": [
    "noun"
  ],
  "pantheon": [
    "noun"
  ],
  "pantomime": [
    "noun",
    "verb"
  ],
  "pantry": [
    "noun"
  ],
  "pants": [
    "noun",
    "adjective",
    "verb"
  ],
  "papaya": [
    "noun"
  ],
  "paper": [
    "noun",
    "adjective",
    "verb"
  ],
  "papermaking": [
    "noun"
  ],
  "papers": [
    "noun"
  ],
  "par": [
    "noun",
    "adjective",
    "verb"
  ],
  "parable": [
    "noun",
    "verb",
    "adjective"
  ],
  "parachute": [
    "noun",
    "verb"
  ],
  "parade": [
    "noun",
    "verb"
  ],
  "paradigm": [
    "noun"
  ],
  "paradigms": [
    "noun"
  ],
  "paradox": [
    "noun"
  ],
  "paradoxical": [
    "adjective"
  ],
  "paradoxically": [
    "adverb"
  ],
  "paragon": [
    "noun",
    "verb"
  ],
  "paragraph": [
    "noun",
    "verb"
  ],
  "paragraphs": [
    "noun"
  ],
  "paraguayan": [
    "adjective",
    "noun"
  ],
  "parakeet": [
    "noun"
  ],
  "parallax": [
    "noun",
    "verb"
  ],
  "parallel": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "paralleling": [
    "noun"
  ],
  "paramagnetic": [
    "adjective"
  ],
  "paranoia": [
    "noun"
  ],
  "paraphrasing": [
    "noun"
  ],
  "parasite": [
    "noun",
    "verb"
  ],
  "parasympathetic": [
    "adjective",
    "noun"
  ],
  "parboil": [
    "verb"
  ],
  "parchment": [
    "noun"
  ],
  "pardon": [
    "noun",
    "verb"
  ],
  "pared": [
    "verb"
  ],
  "parenthesis": [
    "noun"
  ],
  "parenthood": [
    "noun"
  ],
  "paring": [
    "noun"
  ],
  "parisienne": [
    "noun"
  ],
  "parity": [
    "noun"
  ],
  "park": [
    "noun",
    "verb"
  ],
  "parking": [
    "noun"
  ],
  "parley": [
    "noun",
    "verb"
  ],
  "parmesan": [
    "noun",
    "adjective"
  ],
  "parody": [
    "noun",
    "verb"
  ],
  "parole": [
    "noun",
    "verb"
  ],
  "paroled": [
    "verb",
    "adjective"
  ],
  "parried": [
    "verb"
  ],
  "parsec": [
    "noun"
  ],
  "parsimony": [
    "noun"
  ],
  "part": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "partake": [
    "verb"
  ],
  "parted": [
    "adjective"
  ],
  "parthenogenetic": [
    "adjective"
  ],
  "parthenon": [
    "noun"
  ],
  "partiality": [
    "noun"
  ],
  "participate": [
    "verb",
    "adjective"
  ],
  "participating": [
    "adjective"
  ],
  "particle": [
    "noun"
  ],
  "particular": [
    "adjective",
    "noun"
  ],
  "parties": [
    "noun"
  ],
  "parting": [
    "noun"
  ],
  "partner": [
    "noun",
    "verb"
  ],
  "partnership": [
    "noun"
  ],
  "partnerships": [
    "noun"
  ],
  "parts": [
    "noun"
  ],
  "party": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "pas": [
    "noun"
  ],
  "pass": [
    "verb",
    "noun"
  ],
  "passbook": [
    "noun"
  ],
  "passbooks": [
    "noun"
  ],
  "passenger": [
    "noun",
    "verb"
  ],
  "passim": [
    "adverb",
    "adjective"
  ],
  "passing": [
    "noun",
    "adjective",
    "adverb"
  ],
  "passion": [
    "noun",
    "verb"
  ],
  "passive": [
    "adjective",
    "noun"
  ],
  "passover": [
    "noun"
  ],
  "password": [
    "noun",
    "verb"
  ],
  "passwords": [
    "noun",
    "verb"
  ],
  "past": [
    "noun",
    "adjective",
    "adverb"
  ],
  "pasta": [
    "noun"
  ],
  "pastime": [
    "noun",
    "verb"
  ],
  "pastimes": [
    "noun"
  ],
  "pasture": [
    "noun",
    "verb"
  ],
  "pat": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "patch": [
    "noun",
    "verb"
  ],
  "patchwork": [
    "noun",
    "verb"
  ],
  "path": [
    "noun",
    "verb"
  ],
  "pathetic": [
    "adjective"
  ],
  "pathways": [
    "noun"
  ],
  "patience": [
    "noun"
  ],
  "patient": [
    "noun",
    "adjective"
  ],
  "patients": [
    "noun",
    "adjective"
  ],
  "patina": [
    "noun",
    "adjective"
  ],
  "patio": [
    "noun"
  ],
  "patois": [
    "noun"
  ],
  "patriarch": [
    "noun"
  ],
  "patrimony": [
    "noun"
  ],
  "patriotism": [
    "noun"
  ],
  "patrol": [
    "noun",
    "verb"
  ],
  "patrolled": [
    "adjective"
  ],
  "patrolman": [
    "noun"
  ],
  "patrolmen": [
    "noun"
  ],
  "patron": [
    "noun",
    "verb"
  ],
  "patronym": [
    "noun"
  ],
  "pause": [
    "noun",
    "verb"
  ],
  "pave": [
    "verb"
  ],
  "paved": [
    "adjective"
  ],
  "pavement": [
    "noun"
  ],
  "pavilion": [
    "noun",
    "verb"
  ],
  "paw": [
    "noun",
    "verb"
  ],
  "pawed": [
    "adjective"
  ],
  "pawnshop": [
    "noun"
  ],
  "pay": [
    "verb",
    "noun",
    "adjective"
  ],
  "payback": [
    "noun",
    "verb"
  ],
  "paychecks": [
    "noun"
  ],
  "paying": [
    "noun"
  ],
  "payload": [
    "noun"
  ],
  "payroll": [
    "noun",
    "verb"
  ],
  "pays": [
    "verb",
    "noun"
  ],
  "pea": [
    "noun"
  ],
  "peace": [
    "noun",
    "verb"
  ],
  "peacenik": [
    "noun"
  ],
  "peacetime": [
    "noun"
  ],
  "peach": [
    "noun",
    "adjective",
    "verb"
  ],
  "peacocks": [
    "noun",
    "verb"
  ],
  "peafowl": [
    "noun"
  ],
  "peak": [
    "noun",
    "adjective",
    "verb"
  ],
  "peaking": [
    "noun",
    "adjective"
  ],
  "peanut": [
    "noun",
    "verb"
  ],
  "pear": [
    "noun"
  ],
  "pearl": [
    "noun",
    "verb"
  ],
  "pearls": [
    "noun",
    "verb"
  ],
  "peas": [
    "noun"
  ],
  "pecan": [
    "noun"
  ],
  "peck": [
    "noun",
    "verb"
  ],
  "peculiar": [
    "adjective",
    "noun"
  ],
  "peculiarity": [
    "noun"
  ],
  "pedagogical": [
    "adjective"
  ],
  "pedal": [
    "noun",
    "verb",
    "adjective"
  ],
  "pedantic": [
    "adjective"
  ],
  "pediatrician": [
    "noun"
  ],
  "peek": [
    "noun",
    "verb"
  ],
  "peeking": [
    "noun"
  ],
  "peel": [
    "noun",
    "verb"
  ],
  "peep": [
    "noun",
    "verb"
  ],
  "peer": [
    "noun",
    "verb"
  ],
  "peered": [
    "verb"
  ],
  "peeve": [
    "noun",
    "verb"
  ],
  "peking": [
    "noun"
  ],
  "pen": [
    "noun",
    "verb"
  ],
  "penalty": [
    "noun"
  ],
  "pencil": [
    "noun",
    "verb"
  ],
  "pendant": [
    "noun"
  ],
  "pendulum": [
    "noun"
  ],
  "penetrating": [
    "adjective"
  ],
  "penguin": [
    "noun"
  ],
  "peninsula": [
    "noun"
  ],
  "penned": [
    "adjective"
  ],
  "pension": [
    "noun",
    "verb"
  ],
  "pentagon": [
    "noun"
  ],
  "pentagons": [
    "noun"
  ],
  "pentathlon": [
    "noun"
  ],
  "pepper": [
    "noun",
    "verb"
  ],
  "pepperidge": [
    "noun"
  ],
  "peptides": [
    "noun"
  ],
  "perceive": [
    "verb"
  ],
  "perceiving": [
    "noun"
  ],
  "percent": [
    "noun",
    "adverb"
  ],
  "percentile": [
    "noun"
  ],
  "percentiles": [
    "noun"
  ],
  "perch": [
    "noun",
    "verb"
  ],
  "perchance": [
    "adverb"
  ],
  "percussion": [
    "noun"
  ],
  "perfection": [
    "noun",
    "verb"
  ],
  "perfectly": [
    "adverb"
  ],
  "perforce": [
    "adverb",
    "verb"
  ],
  "perform": [
    "verb"
  ],
  "performance": [
    "noun"
  ],
  "perfume": [
    "noun",
    "verb"
  ],
  "period": [
    "noun",
    "adjective",
    "verb"
  ],
  "peripatetic": [
    "adjective",
    "noun"
  ],
  "periscope": [
    "noun",
    "verb"
  ],
  "peristyle": [
    "noun"
  ],
  "perk": [
    "noun",
    "verb",
    "adjective"
  ],
  "perked": [
    "adjective"
  ],
  "permeability": [
    "noun"
  ],
  "permission": [
    "noun",
    "verb"
  ],
  "permit": [
    "verb",
    "noun"
  ],
  "permits": [
    "verb",
    "noun"
  ],
  "permitting": [
    "verb",
    "noun"
  ],
  "pernicious": [
    "adjective"
  ],
  "perpendicular": [
    "adjective",
    "noun"
  ],
  "perpetrator": [
    "noun"
  ],
  "perpetuate": [
    "verb",
    "adjective"
  ],
  "perplex": [
    "verb",
    "adjective",
    "noun"
  ],
  "perplexed": [
    "adjective"
  ],
  "persecute": [
    "verb"
  ],
  "persecutor": [
    "noun"
  ],
  "persevere": [
    "verb"
  ],
  "persevered": [
    "verb"
  ],
  "perseveres": [
    "verb"
  ],
  "persevering": [
    "adjective",
    "noun"
  ],
  "persist": [
    "verb"
  ],
  "person": [
    "noun",
    "verb"
  ],
  "personal": [
    "adjective",
    "noun"
  ],
  "personality": [
    "noun"
  ],
  "personally": [
    "adverb"
  ],
  "personnel": [
    "noun"
  ],
  "perspective": [
    "noun",
    "adjective"
  ],
  "perspicacious": [
    "adjective"
  ],
  "perspire": [
    "verb"
  ],
  "persuade": [
    "verb"
  ],
  "peruse": [
    "verb",
    "noun"
  ],
  "perused": [
    "verb"
  ],
  "perusing": [
    "noun"
  ],
  "pervasive": [
    "adjective"
  ],
  "pessimism": [
    "noun"
  ],
  "pessimistic": [
    "adjective"
  ],
  "pest": [
    "noun"
  ],
  "pesticides": [
    "noun"
  ],
  "pet": [
    "noun",
    "verb",
    "adjective"
  ],
  "petal": [
    "noun",
    "verb"
  ],
  "petition": [
    "noun",
    "verb"
  ],
  "petroglyph": [
    "noun"
  ],
  "pets": [
    "noun",
    "verb",
    "adjective"
  ],
  "petticoat": [
    "noun",
    "verb",
    "adjective"
  ],
  "pewter": [
    "noun",
    "adjective",
    "verb"
  ],
  "phage": [
    "noun"
  ],
  "pharaonic": [
    "adjective"
  ],
  "pharmacological": [
    "adjective"
  ],
  "pharmacologist": [
    "noun"
  ],
  "pharmacology": [
    "noun"
  ],
  "pharmacy": [
    "noun"
  ],
  "phase": [
    "noun",
    "verb"
  ],
  "phasing": [
    "noun"
  ],
  "phenolic": [
    "noun",
    "adjective"
  ],
  "phenomenon": [
    "noun"
  ],
  "phenotype": [
    "noun",
    "verb"
  ],
  "philander": [
    "noun",
    "verb"
  ],
  "philharmonic": [
    "noun",
    "adjective"
  ],
  "philippines": [
    "noun"
  ],
  "philistines": [
    "noun",
    "adjective"
  ],
  "philosopher": [
    "noun"
  ],
  "philosophical": [
    "adjective"
  ],
  "philosophy": [
    "noun",
    "verb"
  ],
  "phoenix": [
    "noun",
    "verb"
  ],
  "phone": [
    "noun",
    "verb"
  ],
  "phonetic": [
    "adjective",
    "noun"
  ],
  "phonic": [
    "adjective"
  ],
  "phonograph": [
    "noun",
    "verb"
  ],
  "phonographs": [
    "noun"
  ],
  "phonological": [
    "adjective"
  ],
  "photo": [
    "noun",
    "verb"
  ],
  "photoconductive": [
    "adjective"
  ],
  "photograph": [
    "noun",
    "verb"
  ],
  "photographer": [
    "noun"
  ],
  "photographing": [
    "noun"
  ],
  "photographs": [
    "noun",
    "verb"
  ],
  "photography": [
    "noun"
  ],
  "photon": [
    "noun"
  ],
  "photos": [
    "noun",
    "verb"
  ],
  "phrase": [
    "noun",
    "verb"
  ],
  "phrasing": [
    "noun"
  ],
  "phyle": [
    "noun"
  ],
  "physical": [
    "adjective",
    "noun"
  ],
  "physician": [
    "noun"
  ],
  "physics": [
    "noun"
  ],
  "physiologist": [
    "noun"
  ],
  "physiology": [
    "noun"
  ],
  "physique": [
    "noun"
  ],
  "piano": [
    "noun",
    "adverb",
    "adjective",
    "verb"
  ],
  "piazza": [
    "noun"
  ],
  "pic": [
    "noun"
  ],
  "picayune": [
    "noun",
    "adjective"
  ],
  "pick": [
    "verb",
    "noun"
  ],
  "picky": [
    "adjective",
    "noun"
  ],
  "picnic": [
    "noun",
    "verb"
  ],
  "picnics": [
    "noun"
  ],
  "picture": [
    "noun",
    "verb"
  ],
  "pictures": [
    "noun"
  ],
  "pie": [
    "noun",
    "verb",
    "adjective"
  ],
  "piebald": [
    "noun",
    "adjective"
  ],
  "pieced": [
    "verb"
  ],
  "piecemeal": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "pieces": [
    "noun"
  ],
  "piecework": [
    "noun"
  ],
  "pier": [
    "noun"
  ],
  "piers": [
    "noun"
  ],
  "pig": [
    "noun",
    "verb"
  ],
  "pigeon": [
    "noun",
    "verb"
  ],
  "pigeonhole": [
    "noun",
    "verb"
  ],
  "pigeonholed": [
    "adjective"
  ],
  "piggyback": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "piggybacked": [
    "verb"
  ],
  "piggybacking": [
    "noun"
  ],
  "pigment": [
    "noun",
    "verb"
  ],
  "pigskin": [
    "noun"
  ],
  "pilaster": [
    "noun"
  ],
  "pilate": [
    "noun",
    "adjective"
  ],
  "pile": [
    "noun",
    "verb"
  ],
  "pileup": [
    "noun"
  ],
  "pilgrimage": [
    "noun",
    "verb"
  ],
  "pill": [
    "noun",
    "verb"
  ],
  "pillage": [
    "noun",
    "verb"
  ],
  "pillar": [
    "noun",
    "verb"
  ],
  "pillow": [
    "noun",
    "verb"
  ],
  "pillowcase": [
    "noun"
  ],
  "pills": [
    "noun"
  ],
  "pilot": [
    "noun",
    "adjective",
    "verb"
  ],
  "pinball": [
    "noun",
    "verb"
  ],
  "pinch": [
    "noun",
    "verb"
  ],
  "pine": [
    "noun",
    "verb"
  ],
  "pineapple": [
    "noun"
  ],
  "pined": [
    "verb"
  ],
  "pings": [
    "noun"
  ],
  "pinhole": [
    "noun",
    "verb"
  ],
  "pink": [
    "adjective",
    "noun",
    "verb"
  ],
  "pinnacle": [
    "noun",
    "verb"
  ],
  "pinstripe": [
    "noun"
  ],
  "pioneer": [
    "noun",
    "verb"
  ],
  "pioneered": [
    "verb"
  ],
  "pioneers": [
    "noun",
    "verb"
  ],
  "pip": [
    "noun",
    "verb"
  ],
  "pipe": [
    "noun",
    "verb"
  ],
  "pipefish": [
    "noun"
  ],
  "pipeline": [
    "noun",
    "verb"
  ],
  "pipettes": [
    "noun"
  ],
  "pips": [
    "noun"
  ],
  "pirate": [
    "noun",
    "verb",
    "adjective"
  ],
  "pirouette": [
    "noun",
    "verb"
  ],
  "pirouettes": [
    "noun"
  ],
  "pissing": [
    "noun",
    "adjective"
  ],
  "pistol": [
    "noun",
    "verb"
  ],
  "pit": [
    "noun",
    "verb"
  ],
  "pitchblende": [
    "noun"
  ],
  "pitcher": [
    "noun"
  ],
  "pitfall": [
    "noun"
  ],
  "pitfalls": [
    "noun"
  ],
  "pith": [
    "noun",
    "verb",
    "adjective"
  ],
  "pitied": [
    "verb"
  ],
  "piton": [
    "noun",
    "verb"
  ],
  "pits": [
    "noun"
  ],
  "pitting": [
    "noun"
  ],
  "pix": [
    "noun",
    "verb"
  ],
  "pizza": [
    "noun"
  ],
  "pizzazz": [
    "noun"
  ],
  "pizzeria": [
    "noun"
  ],
  "place": [
    "noun",
    "verb"
  ],
  "places": [
    "noun",
    "verb"
  ],
  "plagiarism": [
    "noun"
  ],
  "plaid": [
    "noun",
    "adjective"
  ],
  "plain": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "plainsong": [
    "noun"
  ],
  "plan": [
    "noun",
    "verb"
  ],
  "plane": [
    "noun",
    "adjective",
    "verb"
  ],
  "planet": [
    "noun"
  ],
  "planetary": [
    "adjective",
    "noun"
  ],
  "planks": [
    "noun"
  ],
  "planktonic": [
    "adjective"
  ],
  "planning": [
    "noun"
  ],
  "plans": [
    "noun",
    "verb"
  ],
  "plant": [
    "noun",
    "verb"
  ],
  "planting": [
    "noun"
  ],
  "plaque": [
    "noun"
  ],
  "plaques": [
    "noun"
  ],
  "plastered": [
    "adjective"
  ],
  "plasterwork": [
    "noun"
  ],
  "plastic": [
    "adjective",
    "noun"
  ],
  "plasticizer": [
    "noun"
  ],
  "plate": [
    "noun",
    "verb"
  ],
  "plateau": [
    "noun",
    "verb"
  ],
  "platen": [
    "noun"
  ],
  "platitude": [
    "noun"
  ],
  "platonic": [
    "adjective",
    "noun"
  ],
  "platoon": [
    "noun",
    "verb"
  ],
  "platter": [
    "noun"
  ],
  "plausibility": [
    "noun"
  ],
  "play": [
    "verb",
    "noun"
  ],
  "playback": [
    "noun"
  ],
  "playboy": [
    "noun",
    "adjective"
  ],
  "played": [
    "adjective"
  ],
  "player": [
    "noun"
  ],
  "playground": [
    "noun"
  ],
  "playgrounds": [
    "noun"
  ],
  "playhouse": [
    "noun"
  ],
  "playlist": [
    "noun",
    "verb"
  ],
  "playoff": [
    "noun"
  ],
  "playpen": [
    "noun"
  ],
  "playroom": [
    "noun"
  ],
  "plays": [
    "noun",
    "verb"
  ],
  "plaything": [
    "noun",
    "adjective"
  ],
  "playthings": [
    "noun"
  ],
  "plaza": [
    "noun"
  ],
  "plea": [
    "noun",
    "verb"
  ],
  "plead": [
    "verb"
  ],
  "pleads": [
    "verb"
  ],
  "please": [
    "verb",
    "adverb"
  ],
  "pleased": [
    "adjective"
  ],
  "plebeian": [
    "adjective",
    "noun"
  ],
  "pled": [
    "noun"
  ],
  "plenty": [
    "noun",
    "adverb",
    "adjective"
  ],
  "plexiglas": [
    "noun"
  ],
  "plexiglass": [
    "noun"
  ],
  "plier": [
    "noun"
  ],
  "plight": [
    "noun",
    "verb"
  ],
  "plod": [
    "verb",
    "noun"
  ],
  "plop": [
    "noun",
    "verb"
  ],
  "plopped": [
    "verb"
  ],
  "plot": [
    "noun",
    "verb"
  ],
  "plotter": [
    "noun",
    "verb"
  ],
  "ploughed": [
    "adjective"
  ],
  "plow": [
    "noun",
    "verb"
  ],
  "ploy": [
    "noun",
    "verb"
  ],
  "ploys": [
    "noun"
  ],
  "plucking": [
    "noun"
  ],
  "plum": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "plumber": [
    "noun",
    "verb"
  ],
  "plumbing": [
    "noun"
  ],
  "plummet": [
    "verb",
    "noun"
  ],
  "plump": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "plums": [
    "noun"
  ],
  "plunder": [
    "noun",
    "verb"
  ],
  "plunge": [
    "verb",
    "noun"
  ],
  "plurality": [
    "noun"
  ],
  "plutocrat": [
    "noun"
  ],
  "plutonic": [
    "adjective"
  ],
  "plying": [
    "noun"
  ],
  "plywood": [
    "noun",
    "verb"
  ],
  "pneumatic": [
    "adjective",
    "noun"
  ],
  "pneumonia": [
    "noun"
  ],
  "pneumonic": [
    "adjective",
    "noun"
  ],
  "poach": [
    "verb",
    "noun"
  ],
  "pocket": [
    "noun",
    "verb",
    "adjective"
  ],
  "pocketbook": [
    "noun"
  ],
  "pocketbooks": [
    "noun"
  ],
  "pockmark": [
    "noun"
  ],
  "podcast": [
    "noun",
    "verb"
  ],
  "podiatrist": [
    "noun"
  ],
  "podium": [
    "noun",
    "verb"
  ],
  "poem": [
    "noun"
  ],
  "poetry": [
    "noun"
  ],
  "pogrom": [
    "noun",
    "verb"
  ],
  "poinsettia": [
    "noun"
  ],
  "point": [
    "noun",
    "verb"
  ],
  "poise": [
    "noun",
    "verb"
  ],
  "poison": [
    "noun",
    "verb"
  ],
  "poke": [
    "verb",
    "noun"
  ],
  "polar": [
    "adjective",
    "noun"
  ],
  "polariscope": [
    "noun"
  ],
  "polarography": [
    "noun"
  ],
  "polaroid": [
    "noun",
    "verb"
  ],
  "polder": [
    "noun",
    "verb"
  ],
  "polecat": [
    "noun"
  ],
  "police": [
    "noun",
    "verb"
  ],
  "policed": [
    "verb",
    "adjective"
  ],
  "policewoman": [
    "noun"
  ],
  "policy": [
    "noun",
    "verb"
  ],
  "policyholder": [
    "noun"
  ],
  "polite": [
    "adjective",
    "verb",
    "noun"
  ],
  "politic": [
    "adjective",
    "noun",
    "verb"
  ],
  "political": [
    "adjective",
    "noun"
  ],
  "politician": [
    "noun"
  ],
  "polled": [
    "adjective"
  ],
  "pollen": [
    "noun",
    "verb"
  ],
  "pollute": [
    "verb",
    "adjective"
  ],
  "polluter": [
    "noun"
  ],
  "polychrome": [
    "adjective",
    "noun",
    "verb"
  ],
  "polyester": [
    "noun",
    "adjective"
  ],
  "polygraphs": [
    "noun"
  ],
  "polyphonic": [
    "adjective"
  ],
  "pompons": [
    "noun"
  ],
  "poncho": [
    "noun"
  ],
  "pond": [
    "noun",
    "verb"
  ],
  "ponder": [
    "verb",
    "noun"
  ],
  "pontiac": [
    "noun"
  ],
  "pontoon": [
    "noun"
  ],
  "pony": [
    "noun",
    "verb",
    "adjective"
  ],
  "ponytail": [
    "noun",
    "verb"
  ],
  "poor": [
    "adjective",
    "noun",
    "verb"
  ],
  "poorhouse": [
    "noun"
  ],
  "pop": [
    "noun",
    "verb",
    "adjective"
  ],
  "popped": [
    "verb"
  ],
  "popular": [
    "adjective",
    "noun"
  ],
  "popularizer": [
    "noun"
  ],
  "population": [
    "noun"
  ],
  "porch": [
    "noun"
  ],
  "porphyritic": [
    "adjective"
  ],
  "portability": [
    "noun"
  ],
  "portend": [
    "verb"
  ],
  "portends": [
    "verb"
  ],
  "portent": [
    "noun"
  ],
  "portion": [
    "noun",
    "verb"
  ],
  "portrayed": [
    "adjective"
  ],
  "portraying": [
    "noun"
  ],
  "portuguese": [
    "adjective",
    "noun"
  ],
  "pos": [
    "noun",
    "adjective"
  ],
  "pose": [
    "verb",
    "noun"
  ],
  "position": [
    "noun",
    "verb"
  ],
  "positional": [
    "adjective",
    "noun"
  ],
  "positive": [
    "adjective",
    "noun"
  ],
  "positron": [
    "noun"
  ],
  "positrons": [
    "noun"
  ],
  "possess": [
    "verb"
  ],
  "possessed": [
    "adjective"
  ],
  "possessing": [
    "verb"
  ],
  "possession": [
    "noun",
    "verb"
  ],
  "possibility": [
    "noun"
  ],
  "possibly": [
    "adverb"
  ],
  "postage": [
    "noun"
  ],
  "postcard": [
    "noun",
    "verb"
  ],
  "poster": [
    "noun",
    "verb"
  ],
  "posterior": [
    "adjective",
    "noun"
  ],
  "postmark": [
    "noun",
    "verb"
  ],
  "postmaster": [
    "noun"
  ],
  "postpone": [
    "verb"
  ],
  "postscript": [
    "noun",
    "verb"
  ],
  "posture": [
    "noun",
    "verb"
  ],
  "pot": [
    "noun",
    "verb"
  ],
  "potage": [
    "noun"
  ],
  "potato": [
    "noun",
    "verb"
  ],
  "pothole": [
    "noun"
  ],
  "potion": [
    "noun",
    "verb"
  ],
  "potlatch": [
    "noun",
    "verb"
  ],
  "potluck": [
    "noun",
    "verb"
  ],
  "pounce": [
    "verb",
    "noun"
  ],
  "poured": [
    "verb"
  ],
  "pout": [
    "noun",
    "verb"
  ],
  "poverty": [
    "noun"
  ],
  "pow": [
    "noun"
  ],
  "powerboat": [
    "noun"
  ],
  "powerful": [
    "adjective",
    "adverb"
  ],
  "powerhouse": [
    "noun"
  ],
  "powwow": [
    "noun",
    "verb"
  ],
  "pox": [
    "noun",
    "verb"
  ],
  "practicality": [
    "noun"
  ],
  "practice": [
    "noun",
    "verb"
  ],
  "praetor": [
    "noun"
  ],
  "pragmatic": [
    "adjective",
    "noun"
  ],
  "prairie": [
    "noun"
  ],
  "praise": [
    "noun",
    "verb"
  ],
  "praising": [
    "noun"
  ],
  "prance": [
    "noun",
    "verb"
  ],
  "prancer": [
    "noun"
  ],
  "pranks": [
    "noun"
  ],
  "pratfalls": [
    "noun"
  ],
  "prawn": [
    "noun",
    "verb"
  ],
  "pray": [
    "verb",
    "adverb",
    "noun"
  ],
  "prayed": [
    "verb"
  ],
  "praying": [
    "noun"
  ],
  "prays": [
    "verb"
  ],
  "preach": [
    "verb",
    "noun"
  ],
  "prearrange": [
    "verb"
  ],
  "prearranged": [
    "adjective"
  ],
  "precarious": [
    "adjective"
  ],
  "precast": [
    "adjective",
    "noun",
    "verb"
  ],
  "precede": [
    "verb",
    "noun"
  ],
  "precedes": [
    "verb"
  ],
  "precept": [
    "noun",
    "verb"
  ],
  "precession": [
    "noun"
  ],
  "precious": [
    "adjective",
    "noun",
    "adverb"
  ],
  "preclusion": [
    "noun"
  ],
  "preconceive": [
    "verb"
  ],
  "preconceived": [
    "adjective"
  ],
  "precook": [
    "verb"
  ],
  "precooked": [
    "adjective"
  ],
  "predaceous": [
    "adjective"
  ],
  "predator": [
    "noun"
  ],
  "predatory": [
    "adjective"
  ],
  "predetermine": [
    "verb"
  ],
  "predetermined": [
    "adjective"
  ],
  "predict": [
    "verb",
    "noun"
  ],
  "predictability": [
    "noun"
  ],
  "predilection": [
    "noun"
  ],
  "predisposed": [
    "adjective"
  ],
  "predominant": [
    "adjective",
    "noun"
  ],
  "predominate": [
    "verb",
    "adjective"
  ],
  "preexist": [
    "verb"
  ],
  "prefab": [
    "noun",
    "adjective",
    "verb"
  ],
  "prefect": [
    "noun"
  ],
  "prefer": [
    "verb"
  ],
  "prefered": [
    "verb"
  ],
  "preferred": [
    "adjective",
    "noun"
  ],
  "pregnant": [
    "adjective",
    "noun"
  ],
  "preheat": [
    "verb",
    "noun"
  ],
  "prelim": [
    "noun",
    "adjective"
  ],
  "preliminary": [
    "adjective",
    "noun"
  ],
  "prelude": [
    "noun",
    "verb"
  ],
  "premature": [
    "adjective",
    "noun"
  ],
  "premier": [
    "noun",
    "adjective",
    "verb"
  ],
  "premiere": [
    "noun",
    "verb"
  ],
  "premiered": [
    "verb"
  ],
  "premieres": [
    "noun"
  ],
  "premiering": [
    "verb"
  ],
  "premiers": [
    "noun"
  ],
  "premium": [
    "noun",
    "adjective"
  ],
  "premonition": [
    "noun"
  ],
  "preparatory": [
    "adjective"
  ],
  "prepare": [
    "verb",
    "noun"
  ],
  "prepay": [
    "verb"
  ],
  "prepaying": [
    "verb"
  ],
  "prepuce": [
    "noun"
  ],
  "prerequisite": [
    "noun",
    "adjective"
  ],
  "preschool": [
    "adjective",
    "noun",
    "verb"
  ],
  "prescribe": [
    "verb"
  ],
  "presence": [
    "noun",
    "verb"
  ],
  "present": [
    "adjective",
    "noun",
    "verb"
  ],
  "presentation": [
    "noun"
  ],
  "preserve": [
    "verb",
    "noun"
  ],
  "preside": [
    "verb"
  ],
  "presided": [
    "verb"
  ],
  "president": [
    "noun",
    "verb",
    "adjective"
  ],
  "presidential": [
    "adjective"
  ],
  "presides": [
    "verb"
  ],
  "pressed": [
    "adjective"
  ],
  "pressure": [
    "noun",
    "verb"
  ],
  "preteens": [
    "noun"
  ],
  "pretend": [
    "verb",
    "adjective",
    "noun"
  ],
  "pretender": [
    "noun",
    "verb"
  ],
  "pretends": [
    "verb"
  ],
  "pretense": [
    "noun"
  ],
  "pretension": [
    "noun",
    "verb"
  ],
  "pretentious": [
    "adjective"
  ],
  "pretext": [
    "noun",
    "verb"
  ],
  "pretty": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "pretzel": [
    "noun",
    "verb"
  ],
  "prevail": [
    "verb"
  ],
  "prevailing": [
    "adjective"
  ],
  "prevent": [
    "verb"
  ],
  "prevention": [
    "noun"
  ],
  "preview": [
    "noun",
    "verb"
  ],
  "previewing": [
    "verb",
    "noun"
  ],
  "previews": [
    "noun",
    "verb"
  ],
  "previously": [
    "adverb"
  ],
  "prey": [
    "noun",
    "verb"
  ],
  "preying": [
    "verb"
  ],
  "priam": [
    "noun"
  ],
  "price": [
    "noun",
    "verb"
  ],
  "prick": [
    "noun",
    "verb"
  ],
  "pricked": [
    "adjective"
  ],
  "prickly": [
    "adjective",
    "adverb",
    "noun"
  ],
  "pride": [
    "noun",
    "verb"
  ],
  "prided": [
    "verb"
  ],
  "prides": [
    "noun"
  ],
  "prig": [
    "noun",
    "verb"
  ],
  "primary": [
    "adjective",
    "noun",
    "verb"
  ],
  "primate": [
    "noun"
  ],
  "prime": [
    "adjective",
    "noun",
    "verb"
  ],
  "prince": [
    "noun",
    "verb"
  ],
  "princess": [
    "noun"
  ],
  "principal": [
    "adjective",
    "noun"
  ],
  "principality": [
    "noun"
  ],
  "printer": [
    "noun"
  ],
  "printmaking": [
    "noun"
  ],
  "printout": [
    "noun"
  ],
  "prioritize": [
    "verb"
  ],
  "priority": [
    "noun"
  ],
  "prism": [
    "noun"
  ],
  "prison": [
    "noun",
    "verb"
  ],
  "prisoner": [
    "noun"
  ],
  "privilege": [
    "noun",
    "verb"
  ],
  "prize": [
    "noun",
    "adjective",
    "verb"
  ],
  "proceed": [
    "verb"
  ],
  "proceeds": [
    "noun"
  ],
  "procession": [
    "noun",
    "verb"
  ],
  "processor": [
    "noun"
  ],
  "proclaim": [
    "verb"
  ],
  "proctologist": [
    "noun"
  ],
  "proctoscope": [
    "noun"
  ],
  "procure": [
    "verb"
  ],
  "procuring": [
    "noun"
  ],
  "prod": [
    "noun",
    "verb"
  ],
  "produce": [
    "verb",
    "noun"
  ],
  "producer": [
    "noun"
  ],
  "profess": [
    "verb"
  ],
  "professing": [
    "noun"
  ],
  "profession": [
    "noun"
  ],
  "professional": [
    "adjective",
    "noun"
  ],
  "professionalism": [
    "noun"
  ],
  "professor": [
    "noun"
  ],
  "professorial": [
    "adjective"
  ],
  "professorships": [
    "noun"
  ],
  "proficient": [
    "adjective",
    "noun"
  ],
  "profiled": [
    "verb",
    "adjective"
  ],
  "profiles": [
    "noun"
  ],
  "profit": [
    "noun",
    "verb"
  ],
  "profitability": [
    "noun"
  ],
  "profiteering": [
    "noun"
  ],
  "profiteers": [
    "noun"
  ],
  "profuse": [
    "adjective",
    "verb"
  ],
  "profusion": [
    "noun"
  ],
  "programme": [
    "noun",
    "verb"
  ],
  "progress": [
    "noun",
    "verb"
  ],
  "progressed": [
    "verb"
  ],
  "progression": [
    "noun"
  ],
  "progressivity": [
    "noun"
  ],
  "prohibit": [
    "verb"
  ],
  "prohibition": [
    "noun"
  ],
  "project": [
    "noun",
    "verb"
  ],
  "projection": [
    "noun"
  ],
  "proliferate": [
    "verb"
  ],
  "prolog": [
    "noun",
    "verb"
  ],
  "prolong": [
    "verb"
  ],
  "promenade": [
    "noun",
    "verb"
  ],
  "prominent": [
    "adjective",
    "noun"
  ],
  "promise": [
    "noun",
    "verb"
  ],
  "promised": [
    "adjective"
  ],
  "promissory": [
    "adjective"
  ],
  "promotional": [
    "adjective",
    "noun"
  ],
  "prone": [
    "adjective",
    "verb",
    "noun"
  ],
  "prong": [
    "noun",
    "verb"
  ],
  "pronghorn": [
    "noun"
  ],
  "pronunciation": [
    "noun"
  ],
  "proof": [
    "noun",
    "adjective",
    "verb"
  ],
  "proofread": [
    "verb",
    "noun"
  ],
  "prop": [
    "noun",
    "verb"
  ],
  "propane": [
    "noun"
  ],
  "propel": [
    "verb"
  ],
  "propelling": [
    "noun"
  ],
  "properly": [
    "adverb"
  ],
  "property": [
    "noun",
    "verb"
  ],
  "prophecy": [
    "noun",
    "verb"
  ],
  "prophet": [
    "noun"
  ],
  "prophetic": [
    "adjective"
  ],
  "propitious": [
    "adjective"
  ],
  "proportional": [
    "adjective",
    "noun"
  ],
  "proportionality": [
    "noun"
  ],
  "proportionate": [
    "adjective",
    "verb"
  ],
  "propose": [
    "verb",
    "noun"
  ],
  "proposition": [
    "noun",
    "verb"
  ],
  "propped": [
    "verb"
  ],
  "pros": [
    "noun"
  ],
  "proscribe": [
    "verb"
  ],
  "prose": [
    "noun",
    "verb"
  ],
  "prosecute": [
    "verb"
  ],
  "prospector": [
    "noun"
  ],
  "prosthetic": [
    "adjective",
    "noun"
  ],
  "prostitute": [
    "noun",
    "adjective",
    "verb"
  ],
  "protagonist": [
    "noun"
  ],
  "protean": [
    "adjective",
    "noun"
  ],
  "protect": [
    "verb"
  ],
  "protege": [
    "noun"
  ],
  "protein": [
    "noun"
  ],
  "proteinaceous": [
    "adjective"
  ],
  "proteins": [
    "noun"
  ],
  "protest": [
    "noun",
    "verb"
  ],
  "protester": [
    "noun"
  ],
  "protocols": [
    "noun",
    "verb"
  ],
  "proton": [
    "noun"
  ],
  "proud": [
    "adjective",
    "noun"
  ],
  "proved": [
    "adjective"
  ],
  "provide": [
    "verb"
  ],
  "provided": [
    "verb"
  ],
  "providential": [
    "adjective"
  ],
  "provides": [
    "verb"
  ],
  "province": [
    "noun"
  ],
  "proving": [
    "noun"
  ],
  "provision": [
    "noun",
    "verb"
  ],
  "prudential": [
    "adjective",
    "noun"
  ],
  "prune": [
    "noun",
    "verb"
  ],
  "prunella": [
    "noun"
  ],
  "prying": [
    "noun"
  ],
  "pseudonym": [
    "noun"
  ],
  "psychologist": [
    "noun"
  ],
  "psychology": [
    "noun"
  ],
  "psychosomatic": [
    "adjective"
  ],
  "pub": [
    "noun",
    "verb"
  ],
  "publicity": [
    "noun"
  ],
  "publicize": [
    "verb"
  ],
  "puck": [
    "noun",
    "verb"
  ],
  "puerile": [
    "adjective"
  ],
  "puffin": [
    "noun"
  ],
  "pug": [
    "noun",
    "verb"
  ],
  "pugilistic": [
    "adjective"
  ],
  "puking": [
    "noun"
  ],
  "pull": [
    "verb",
    "noun"
  ],
  "pulled": [
    "adjective"
  ],
  "pump": [
    "noun",
    "verb"
  ],
  "pun": [
    "noun",
    "verb"
  ],
  "punch": [
    "noun",
    "verb",
    "adjective"
  ],
  "punctuation": [
    "noun"
  ],
  "puncture": [
    "noun",
    "verb"
  ],
  "punishment": [
    "noun"
  ],
  "puns": [
    "noun"
  ],
  "pup": [
    "noun",
    "verb"
  ],
  "puppy": [
    "noun",
    "verb"
  ],
  "purgatory": [
    "noun",
    "adjective"
  ],
  "purifier": [
    "noun"
  ],
  "purifying": [
    "noun"
  ],
  "purloin": [
    "verb"
  ],
  "purple": [
    "adjective",
    "noun",
    "verb"
  ],
  "purport": [
    "noun",
    "verb"
  ],
  "purports": [
    "verb"
  ],
  "purpose": [
    "noun",
    "verb"
  ],
  "purr": [
    "noun",
    "verb"
  ],
  "purse": [
    "noun",
    "verb"
  ],
  "pursed": [
    "verb",
    "adjective"
  ],
  "pursue": [
    "verb"
  ],
  "pursues": [
    "verb"
  ],
  "pursuit": [
    "noun"
  ],
  "purveying": [
    "verb",
    "noun"
  ],
  "purveyor": [
    "noun"
  ],
  "push": [
    "verb",
    "noun"
  ],
  "pushed": [
    "verb"
  ],
  "pushing": [
    "adjective",
    "noun"
  ],
  "pushover": [
    "noun"
  ],
  "pushup": [
    "noun"
  ],
  "pussycat": [
    "noun"
  ],
  "put": [
    "verb",
    "noun"
  ],
  "puts": [
    "noun"
  ],
  "putting": [
    "noun"
  ],
  "puzzle": [
    "noun",
    "verb"
  ],
  "pylon": [
    "noun"
  ],
  "pylons": [
    "noun"
  ],
  "pyongyang": [
    "noun"
  ],
  "pyre": [
    "noun"
  ],
  "python": [
    "noun"
  ],
  "qatar": [
    "noun"
  ],
  "quack": [
    "noun",
    "verb",
    "adjective"
  ],
  "quacks": [
    "noun"
  ],
  "quagmire": [
    "noun",
    "verb"
  ],
  "quaint": [
    "adjective",
    "noun"
  ],
  "quake": [
    "noun",
    "verb"
  ],
  "quakes": [
    "noun",
    "verb"
  ],
  "quaking": [
    "noun",
    "adjective"
  ],
  "qualified": [
    "adjective"
  ],
  "qualifier": [
    "noun"
  ],
  "qualifying": [
    "noun"
  ],
  "quality": [
    "noun",
    "adjective"
  ],
  "quarantine": [
    "noun",
    "verb"
  ],
  "quarantines": [
    "noun"
  ],
  "quark": [
    "noun"
  ],
  "quart": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "quarter": [
    "noun",
    "adjective",
    "verb"
  ],
  "quarterback": [
    "noun",
    "verb"
  ],
  "quarterbacks": [
    "noun"
  ],
  "quarterdeck": [
    "noun"
  ],
  "quartet": [
    "noun"
  ],
  "quartets": [
    "noun"
  ],
  "quarts": [
    "noun"
  ],
  "quaver": [
    "noun",
    "verb"
  ],
  "quebec": [
    "noun"
  ],
  "queen": [
    "noun",
    "verb"
  ],
  "queenfish": [
    "noun"
  ],
  "queens": [
    "noun"
  ],
  "queer": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "queers": [
    "noun"
  ],
  "quell": [
    "verb",
    "noun"
  ],
  "quelling": [
    "noun",
    "adjective"
  ],
  "quest": [
    "noun",
    "verb"
  ],
  "queues": [
    "noun"
  ],
  "queuing": [
    "noun"
  ],
  "quick": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "quickie": [
    "noun"
  ],
  "quicksand": [
    "noun"
  ],
  "quicksands": [
    "noun"
  ],
  "quiet": [
    "adjective",
    "noun",
    "verb"
  ],
  "quietly": [
    "adverb"
  ],
  "quill": [
    "noun",
    "verb"
  ],
  "quilt": [
    "noun",
    "verb"
  ],
  "quintessential": [
    "adjective",
    "noun"
  ],
  "quipped": [
    "verb"
  ],
  "quips": [
    "noun",
    "verb"
  ],
  "quirks": [
    "noun"
  ],
  "quit": [
    "verb",
    "adjective",
    "noun"
  ],
  "quits": [
    "adjective"
  ],
  "quitting": [
    "noun"
  ],
  "quiver": [
    "noun",
    "verb",
    "adjective"
  ],
  "quiz": [
    "noun",
    "verb"
  ],
  "quoin": [
    "noun",
    "verb"
  ],
  "quorum": [
    "noun"
  ],
  "quote": [
    "verb",
    "noun"
  ],
  "rabbit": [
    "noun",
    "verb"
  ],
  "raccoon": [
    "noun"
  ],
  "race": [
    "noun",
    "verb"
  ],
  "raced": [
    "adjective"
  ],
  "racehorse": [
    "noun"
  ],
  "racemes": [
    "noun"
  ],
  "racetrack": [
    "noun"
  ],
  "racing": [
    "noun"
  ],
  "racked": [
    "verb"
  ],
  "racker": [
    "noun"
  ],
  "racketeers": [
    "noun"
  ],
  "racking": [
    "noun",
    "adjective"
  ],
  "racks": [
    "noun"
  ],
  "racquetball": [
    "noun"
  ],
  "radiation": [
    "noun"
  ],
  "radiator": [
    "noun"
  ],
  "radioed": [
    "verb"
  ],
  "radiography": [
    "noun"
  ],
  "radiological": [
    "adjective"
  ],
  "radios": [
    "noun"
  ],
  "raft": [
    "noun",
    "verb"
  ],
  "rafter": [
    "noun",
    "verb"
  ],
  "rafting": [
    "noun"
  ],
  "rage": [
    "noun",
    "verb"
  ],
  "ragtag": [
    "adjective",
    "noun"
  ],
  "ragtime": [
    "noun",
    "verb"
  ],
  "ragweed": [
    "noun"
  ],
  "rail": [
    "noun",
    "verb"
  ],
  "railways": [
    "noun"
  ],
  "rain": [
    "noun",
    "verb"
  ],
  "rainbow": [
    "noun",
    "adjective",
    "verb"
  ],
  "rainbows": [
    "noun",
    "adjective",
    "verb"
  ],
  "raincoat": [
    "noun"
  ],
  "raindrop": [
    "noun"
  ],
  "rainfall": [
    "noun"
  ],
  "rainfalls": [
    "noun"
  ],
  "rainforest": [
    "noun"
  ],
  "rainstorm": [
    "noun"
  ],
  "raise": [
    "verb",
    "noun"
  ],
  "raised": [
    "adjective"
  ],
  "raising": [
    "noun"
  ],
  "rake": [
    "noun",
    "verb"
  ],
  "raking": [
    "noun",
    "adjective"
  ],
  "ramble": [
    "noun",
    "verb"
  ],
  "ramp": [
    "noun",
    "verb"
  ],
  "rampage": [
    "noun",
    "verb"
  ],
  "rampart": [
    "noun",
    "verb"
  ],
  "ramrod": [
    "noun",
    "verb"
  ],
  "ran": [
    "noun"
  ],
  "ranch": [
    "noun",
    "verb"
  ],
  "random": [
    "adjective",
    "noun",
    "verb"
  ],
  "ranged": [
    "adjective"
  ],
  "ranger": [
    "noun",
    "verb"
  ],
  "rangoon": [
    "noun"
  ],
  "ransacked": [
    "adjective"
  ],
  "ransacking": [
    "noun"
  ],
  "rap": [
    "noun",
    "verb"
  ],
  "rape": [
    "noun",
    "verb",
    "adverb"
  ],
  "rapid": [
    "adjective",
    "noun",
    "adverb"
  ],
  "rapped": [
    "verb"
  ],
  "rappelling": [
    "noun"
  ],
  "raps": [
    "noun",
    "verb"
  ],
  "rapt": [
    "adjective",
    "verb",
    "noun"
  ],
  "raptorial": [
    "adjective"
  ],
  "rapture": [
    "noun",
    "verb"
  ],
  "rare": [
    "adjective",
    "noun",
    "verb"
  ],
  "raspberry": [
    "noun",
    "adjective",
    "verb"
  ],
  "raster": [
    "noun",
    "verb"
  ],
  "rat": [
    "noun",
    "verb"
  ],
  "rate": [
    "noun",
    "verb"
  ],
  "ratepayer": [
    "noun"
  ],
  "rating": [
    "noun"
  ],
  "ration": [
    "noun",
    "verb"
  ],
  "rational": [
    "adjective",
    "noun"
  ],
  "rationale": [
    "noun"
  ],
  "rationalize": [
    "verb"
  ],
  "rattlesnake": [
    "noun"
  ],
  "rattlesnakes": [
    "noun"
  ],
  "raved": [
    "verb"
  ],
  "raven": [
    "noun",
    "verb",
    "adjective"
  ],
  "ravine": [
    "noun"
  ],
  "ravines": [
    "noun"
  ],
  "raw": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "ray": [
    "noun",
    "verb"
  ],
  "rays": [
    "noun"
  ],
  "razing": [
    "noun"
  ],
  "razor": [
    "noun",
    "verb"
  ],
  "razzmatazz": [
    "noun"
  ],
  "reach": [
    "verb",
    "noun"
  ],
  "reaction": [
    "noun"
  ],
  "read": [
    "verb",
    "noun"
  ],
  "readjust": [
    "verb"
  ],
  "readmit": [
    "verb"
  ],
  "readout": [
    "noun"
  ],
  "reads": [
    "verb"
  ],
  "ready": [
    "adjective",
    "verb",
    "noun"
  ],
  "reaffirm": [
    "verb"
  ],
  "reagent": [
    "noun"
  ],
  "realise": [
    "verb"
  ],
  "realities": [
    "noun"
  ],
  "reality": [
    "noun"
  ],
  "realized": [
    "adjective"
  ],
  "realpolitik": [
    "noun"
  ],
  "reappear": [
    "verb"
  ],
  "reappeared": [
    "verb"
  ],
  "reappears": [
    "verb"
  ],
  "reared": [
    "verb"
  ],
  "rearing": [
    "noun"
  ],
  "rearranged": [
    "verb"
  ],
  "rears": [
    "verb",
    "noun"
  ],
  "reason": [
    "noun",
    "verb"
  ],
  "reassert": [
    "verb"
  ],
  "reassessing": [
    "verb"
  ],
  "reassigned": [
    "verb"
  ],
  "reassure": [
    "verb"
  ],
  "reassures": [
    "verb"
  ],
  "reassuring": [
    "adjective",
    "noun"
  ],
  "reave": [
    "verb"
  ],
  "rebel": [
    "noun",
    "verb"
  ],
  "rebellion": [
    "noun"
  ],
  "rebirth": [
    "noun",
    "verb"
  ],
  "reboot": [
    "verb",
    "noun"
  ],
  "reborn": [
    "adjective",
    "noun"
  ],
  "rebound": [
    "noun",
    "verb"
  ],
  "rebounds": [
    "noun",
    "verb"
  ],
  "rebroadcast": [
    "verb",
    "noun"
  ],
  "rebuff": [
    "noun",
    "verb"
  ],
  "rebuild": [
    "verb",
    "noun"
  ],
  "rebut": [
    "verb"
  ],
  "recall": [
    "verb",
    "noun"
  ],
  "recalled": [
    "verb"
  ],
  "recalling": [
    "noun"
  ],
  "recalls": [
    "verb"
  ],
  "recant": [
    "verb"
  ],
  "recap": [
    "noun",
    "verb"
  ],
  "recapped": [
    "verb"
  ],
  "recaps": [
    "verb",
    "noun"
  ],
  "recast": [
    "verb",
    "noun"
  ],
  "recede": [
    "verb"
  ],
  "recedes": [
    "verb"
  ],
  "receipt": [
    "noun",
    "verb"
  ],
  "receive": [
    "verb",
    "noun"
  ],
  "receiving": [
    "noun"
  ],
  "recently": [
    "adverb"
  ],
  "recess": [
    "noun",
    "verb",
    "adjective"
  ],
  "recessing": [
    "verb",
    "noun"
  ],
  "recession": [
    "noun"
  ],
  "recharge": [
    "noun",
    "verb"
  ],
  "recidivist": [
    "adjective",
    "noun"
  ],
  "recipe": [
    "noun"
  ],
  "reciprocate": [
    "verb"
  ],
  "recite": [
    "verb"
  ],
  "reciting": [
    "noun"
  ],
  "reckless": [
    "adjective",
    "noun"
  ],
  "reckoned": [
    "verb"
  ],
  "reclaim": [
    "verb",
    "noun"
  ],
  "recliner": [
    "noun"
  ],
  "recluse": [
    "noun",
    "adjective",
    "verb"
  ],
  "recognise": [
    "verb"
  ],
  "recognition": [
    "noun"
  ],
  "recognize": [
    "verb"
  ],
  "recoil": [
    "noun",
    "verb"
  ],
  "recollect": [
    "verb",
    "noun"
  ],
  "recollection": [
    "noun"
  ],
  "recommend": [
    "verb",
    "noun"
  ],
  "recommends": [
    "verb"
  ],
  "recommitted": [
    "verb"
  ],
  "recompense": [
    "noun",
    "verb"
  ],
  "reconcile": [
    "verb"
  ],
  "reconciles": [
    "verb"
  ],
  "reconfirm": [
    "verb"
  ],
  "reconsider": [
    "verb"
  ],
  "reconvenes": [
    "verb"
  ],
  "recoup": [
    "verb"
  ],
  "recover": [
    "verb",
    "noun"
  ],
  "recovery": [
    "noun"
  ],
  "recreational": [
    "adjective"
  ],
  "recruit": [
    "verb",
    "noun"
  ],
  "rectifier": [
    "noun"
  ],
  "recur": [
    "verb"
  ],
  "recurred": [
    "verb"
  ],
  "recuse": [
    "verb"
  ],
  "recused": [
    "verb"
  ],
  "recusing": [
    "verb",
    "noun"
  ],
  "red": [
    "adjective",
    "noun",
    "verb"
  ],
  "redbud": [
    "noun"
  ],
  "redcoat": [
    "noun",
    "verb"
  ],
  "redeeming": [
    "adjective",
    "noun"
  ],
  "redeems": [
    "verb"
  ],
  "redefined": [
    "verb"
  ],
  "redemption": [
    "noun"
  ],
  "redeploy": [
    "verb"
  ],
  "redeployed": [
    "verb"
  ],
  "redesigned": [
    "verb"
  ],
  "redfish": [
    "noun"
  ],
  "redid": [
    "verb"
  ],
  "rediffusion": [
    "noun"
  ],
  "redirect": [
    "verb",
    "noun"
  ],
  "redistribution": [
    "noun"
  ],
  "redneck": [
    "noun"
  ],
  "rednecks": [
    "noun"
  ],
  "redo": [
    "noun",
    "verb"
  ],
  "redoing": [
    "verb",
    "noun"
  ],
  "redraft": [
    "verb",
    "noun"
  ],
  "redress": [
    "noun",
    "verb"
  ],
  "redressing": [
    "verb"
  ],
  "redskin": [
    "noun"
  ],
  "reduce": [
    "verb"
  ],
  "reed": [
    "noun",
    "verb"
  ],
  "reeking": [
    "adjective"
  ],
  "reelection": [
    "noun"
  ],
  "reeled": [
    "verb"
  ],
  "reenact": [
    "verb"
  ],
  "reevaluate": [
    "verb"
  ],
  "refer": [
    "verb",
    "noun"
  ],
  "referee": [
    "noun",
    "verb"
  ],
  "referendum": [
    "noun"
  ],
  "referred": [
    "verb"
  ],
  "refilled": [
    "verb"
  ],
  "refinance": [
    "verb"
  ],
  "refined": [
    "adjective",
    "noun"
  ],
  "refiner": [
    "noun"
  ],
  "refinery": [
    "noun"
  ],
  "refinished": [
    "verb",
    "adjective"
  ],
  "refit": [
    "noun",
    "verb"
  ],
  "refitting": [
    "noun"
  ],
  "reflect": [
    "verb"
  ],
  "reflective": [
    "adjective"
  ],
  "reflector": [
    "noun"
  ],
  "reform": [
    "noun",
    "verb",
    "adjective"
  ],
  "reformatory": [
    "noun",
    "adjective"
  ],
  "refrain": [
    "verb",
    "noun"
  ],
  "refrigerator": [
    "noun"
  ],
  "refuge": [
    "noun",
    "verb"
  ],
  "refugee": [
    "noun",
    "verb"
  ],
  "refund": [
    "noun",
    "verb"
  ],
  "refuse": [
    "verb",
    "noun",
    "adjective"
  ],
  "refusing": [
    "verb"
  ],
  "refute": [
    "verb"
  ],
  "regain": [
    "verb",
    "noun"
  ],
  "regaling": [
    "verb"
  ],
  "regatta": [
    "noun"
  ],
  "regenerate": [
    "verb",
    "noun",
    "adjective"
  ],
  "regimental": [
    "adjective"
  ],
  "regimented": [
    "adjective"
  ],
  "regimes": [
    "noun"
  ],
  "region": [
    "noun"
  ],
  "regional": [
    "adjective",
    "noun"
  ],
  "register": [
    "noun",
    "verb"
  ],
  "registrar": [
    "noun"
  ],
  "regression": [
    "noun"
  ],
  "regret": [
    "noun",
    "verb"
  ],
  "regrets": [
    "noun"
  ],
  "regular": [
    "adjective",
    "noun",
    "adverb"
  ],
  "regularity": [
    "noun"
  ],
  "regulate": [
    "verb"
  ],
  "regulation": [
    "noun",
    "adjective"
  ],
  "regulator": [
    "noun"
  ],
  "regulatory": [
    "adjective"
  ],
  "rehash": [
    "noun",
    "verb"
  ],
  "rehear": [
    "verb"
  ],
  "rehearsal": [
    "noun"
  ],
  "rehearse": [
    "verb"
  ],
  "reign": [
    "noun",
    "verb"
  ],
  "reigniting": [
    "verb"
  ],
  "reimburse": [
    "verb"
  ],
  "reimbursed": [
    "verb"
  ],
  "reimposed": [
    "verb"
  ],
  "reindeer": [
    "noun",
    "verb"
  ],
  "reinforce": [
    "verb"
  ],
  "reinstall": [
    "verb",
    "noun"
  ],
  "reinsure": [
    "verb"
  ],
  "reintroduce": [
    "verb"
  ],
  "reinvent": [
    "verb"
  ],
  "reinvented": [
    "verb"
  ],
  "reinventing": [
    "verb",
    "noun"
  ],
  "reject": [
    "verb",
    "noun"
  ],
  "rejection": [
    "noun"
  ],
  "rejoice": [
    "verb"
  ],
  "relapse": [
    "noun",
    "verb"
  ],
  "relating": [
    "noun"
  ],
  "relation": [
    "noun"
  ],
  "relational": [
    "adjective"
  ],
  "relationship": [
    "noun"
  ],
  "relative": [
    "adjective",
    "noun",
    "adverb"
  ],
  "relativistic": [
    "adjective"
  ],
  "relax": [
    "verb"
  ],
  "relaying": [
    "noun"
  ],
  "relays": [
    "noun"
  ],
  "released": [
    "adjective"
  ],
  "relent": [
    "verb",
    "noun",
    "adjective"
  ],
  "relented": [
    "verb"
  ],
  "relenting": [
    "noun"
  ],
  "relevant": [
    "adjective"
  ],
  "reliable": [
    "adjective",
    "noun"
  ],
  "relief": [
    "noun",
    "adjective"
  ],
  "relieving": [
    "adjective",
    "noun"
  ],
  "relived": [
    "verb"
  ],
  "reload": [
    "verb",
    "noun"
  ],
  "rely": [
    "verb"
  ],
  "relying": [
    "verb"
  ],
  "rem": [
    "noun",
    "adjective"
  ],
  "remain": [
    "verb",
    "noun"
  ],
  "remains": [
    "noun"
  ],
  "remake": [
    "verb",
    "noun"
  ],
  "remakes": [
    "verb",
    "noun"
  ],
  "remaking": [
    "noun"
  ],
  "remand": [
    "noun",
    "verb"
  ],
  "remarriage": [
    "noun"
  ],
  "remarried": [
    "adjective",
    "noun"
  ],
  "remedy": [
    "noun",
    "verb"
  ],
  "remember": [
    "verb"
  ],
  "remembered": [
    "adjective"
  ],
  "reminisce": [
    "verb",
    "noun"
  ],
  "reminisced": [
    "verb"
  ],
  "reminiscing": [
    "noun"
  ],
  "remiss": [
    "adjective"
  ],
  "remission": [
    "noun",
    "verb"
  ],
  "remit": [
    "verb",
    "noun"
  ],
  "remorse": [
    "noun",
    "verb"
  ],
  "remove": [
    "verb",
    "noun"
  ],
  "removed": [
    "adjective"
  ],
  "removing": [
    "noun"
  ],
  "rename": [
    "verb",
    "noun"
  ],
  "renegade": [
    "noun",
    "adjective",
    "verb"
  ],
  "renege": [
    "verb"
  ],
  "renewed": [
    "adjective"
  ],
  "renewing": [
    "adjective",
    "noun"
  ],
  "renoir": [
    "noun"
  ],
  "renown": [
    "noun",
    "verb"
  ],
  "renowned": [
    "adjective"
  ],
  "rent": [
    "noun",
    "verb",
    "adjective"
  ],
  "rental": [
    "noun",
    "adjective"
  ],
  "repaid": [
    "verb"
  ],
  "repair": [
    "noun",
    "verb"
  ],
  "repairing": [
    "noun"
  ],
  "repairman": [
    "noun"
  ],
  "repairmen": [
    "noun"
  ],
  "repay": [
    "verb"
  ],
  "repaying": [
    "verb"
  ],
  "repeal": [
    "noun",
    "verb"
  ],
  "repealed": [
    "verb"
  ],
  "repealing": [
    "noun"
  ],
  "repeals": [
    "verb",
    "noun"
  ],
  "repeat": [
    "verb",
    "noun"
  ],
  "repeater": [
    "noun"
  ],
  "repeating": [
    "adjective",
    "noun"
  ],
  "repel": [
    "verb"
  ],
  "repelling": [
    "noun"
  ],
  "repent": [
    "verb",
    "adjective"
  ],
  "repenting": [
    "noun"
  ],
  "repertoire": [
    "noun"
  ],
  "repertory": [
    "noun"
  ],
  "repetitious": [
    "adjective"
  ],
  "rephrase": [
    "verb"
  ],
  "replace": [
    "verb"
  ],
  "replant": [
    "verb",
    "noun"
  ],
  "replay": [
    "noun",
    "verb"
  ],
  "replaying": [
    "noun"
  ],
  "replicate": [
    "verb",
    "noun",
    "adjective"
  ],
  "replied": [
    "verb"
  ],
  "reply": [
    "noun",
    "verb"
  ],
  "replying": [
    "verb"
  ],
  "reporter": [
    "noun"
  ],
  "repository": [
    "noun"
  ],
  "repossession": [
    "noun"
  ],
  "represent": [
    "verb"
  ],
  "representational": [
    "adjective"
  ],
  "repressed": [
    "verb",
    "adjective"
  ],
  "repressing": [
    "noun"
  ],
  "repression": [
    "noun"
  ],
  "reprieve": [
    "noun",
    "verb"
  ],
  "reprimand": [
    "noun",
    "verb"
  ],
  "reprimands": [
    "noun",
    "verb"
  ],
  "reprint": [
    "noun",
    "verb"
  ],
  "reproduce": [
    "verb"
  ],
  "reptile": [
    "noun",
    "adjective"
  ],
  "reptilian": [
    "adjective",
    "noun"
  ],
  "republic": [
    "noun"
  ],
  "reputation": [
    "noun"
  ],
  "repute": [
    "noun",
    "verb"
  ],
  "request": [
    "noun",
    "verb"
  ],
  "requester": [
    "noun"
  ],
  "require": [
    "verb"
  ],
  "reread": [
    "verb",
    "noun"
  ],
  "rerun": [
    "verb",
    "noun"
  ],
  "reruns": [
    "noun"
  ],
  "resale": [
    "noun"
  ],
  "rescission": [
    "noun"
  ],
  "rescue": [
    "noun",
    "verb"
  ],
  "rescues": [
    "verb",
    "noun"
  ],
  "reseal": [
    "verb"
  ],
  "resealed": [
    "verb",
    "adjective"
  ],
  "reseals": [
    "verb",
    "noun"
  ],
  "researcher": [
    "noun"
  ],
  "resection": [
    "noun",
    "verb"
  ],
  "resell": [
    "verb"
  ],
  "reselling": [
    "verb"
  ],
  "resemble": [
    "verb"
  ],
  "resent": [
    "verb"
  ],
  "reservation": [
    "noun"
  ],
  "reservoir": [
    "noun",
    "verb"
  ],
  "reset": [
    "noun",
    "verb"
  ],
  "resets": [
    "verb",
    "noun"
  ],
  "reshape": [
    "verb"
  ],
  "reside": [
    "verb",
    "noun"
  ],
  "resided": [
    "verb"
  ],
  "resident": [
    "noun",
    "adjective"
  ],
  "residential": [
    "adjective",
    "noun"
  ],
  "resign": [
    "verb"
  ],
  "resigned": [
    "adjective"
  ],
  "resilience": [
    "noun"
  ],
  "resolute": [
    "adjective",
    "noun"
  ],
  "resolutely": [
    "adverb"
  ],
  "resolution": [
    "noun"
  ],
  "resolve": [
    "verb",
    "noun"
  ],
  "resolved": [
    "adjective"
  ],
  "resonance": [
    "noun"
  ],
  "resort": [
    "noun",
    "verb"
  ],
  "resorts": [
    "noun",
    "verb"
  ],
  "resound": [
    "verb",
    "noun"
  ],
  "respectability": [
    "noun"
  ],
  "respirator": [
    "noun"
  ],
  "respiratory": [
    "adjective"
  ],
  "respond": [
    "verb",
    "noun"
  ],
  "responsibility": [
    "noun"
  ],
  "responsible": [
    "adjective",
    "noun"
  ],
  "rest": [
    "noun",
    "verb"
  ],
  "restart": [
    "verb",
    "noun"
  ],
  "restarted": [
    "verb"
  ],
  "restarting": [
    "verb",
    "noun"
  ],
  "restaurant": [
    "noun"
  ],
  "restaurants": [
    "noun"
  ],
  "restaurateur": [
    "noun"
  ],
  "restaurateurs": [
    "noun"
  ],
  "restitution": [
    "noun"
  ],
  "restock": [
    "verb",
    "noun"
  ],
  "restore": [
    "verb",
    "noun"
  ],
  "restored": [
    "adjective"
  ],
  "restrain": [
    "verb"
  ],
  "restrict": [
    "verb",
    "adjective"
  ],
  "restroom": [
    "noun"
  ],
  "resubmit": [
    "verb"
  ],
  "resubmitted": [
    "verb"
  ],
  "resubmitting": [
    "verb"
  ],
  "results": [
    "noun",
    "verb"
  ],
  "resume": [
    "verb",
    "noun"
  ],
  "resurrect": [
    "verb"
  ],
  "resurrection": [
    "noun"
  ],
  "retail": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "retailing": [
    "noun"
  ],
  "retain": [
    "verb",
    "noun"
  ],
  "retake": [
    "verb",
    "noun"
  ],
  "retaking": [
    "noun"
  ],
  "retaliate": [
    "verb"
  ],
  "retaliatory": [
    "adjective"
  ],
  "retard": [
    "verb",
    "noun"
  ],
  "retelling": [
    "noun"
  ],
  "retention": [
    "noun"
  ],
  "rethink": [
    "verb",
    "noun"
  ],
  "rethinking": [
    "noun"
  ],
  "rethought": [
    "verb",
    "noun"
  ],
  "retook": [
    "verb"
  ],
  "retool": [
    "verb"
  ],
  "retorts": [
    "noun",
    "verb"
  ],
  "retrace": [
    "verb",
    "noun"
  ],
  "retracing": [
    "noun"
  ],
  "retract": [
    "verb",
    "noun"
  ],
  "retreading": [
    "noun",
    "verb"
  ],
  "retreat": [
    "noun",
    "verb"
  ],
  "retreating": [
    "noun"
  ],
  "retrieving": [
    "noun"
  ],
  "retrofit": [
    "verb",
    "noun"
  ],
  "retrofits": [
    "noun"
  ],
  "retrofitting": [
    "noun"
  ],
  "retrospect": [
    "noun",
    "verb"
  ],
  "retrospective": [
    "adjective",
    "noun"
  ],
  "return": [
    "noun",
    "verb"
  ],
  "returned": [
    "adjective"
  ],
  "reuniting": [
    "noun"
  ],
  "reuse": [
    "noun",
    "verb"
  ],
  "reused": [
    "verb"
  ],
  "reveal": [
    "verb",
    "noun"
  ],
  "reveals": [
    "verb"
  ],
  "revenge": [
    "noun",
    "verb"
  ],
  "revenuer": [
    "noun"
  ],
  "revenues": [
    "noun"
  ],
  "revered": [
    "adjective"
  ],
  "reverential": [
    "adjective",
    "noun"
  ],
  "reveres": [
    "verb"
  ],
  "reverie": [
    "noun",
    "verb"
  ],
  "reverse": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "revert": [
    "verb",
    "noun"
  ],
  "review": [
    "noun",
    "verb"
  ],
  "reviewed": [
    "verb"
  ],
  "reviews": [
    "noun",
    "verb"
  ],
  "revile": [
    "verb",
    "noun"
  ],
  "reviled": [
    "adjective"
  ],
  "revise": [
    "verb",
    "noun"
  ],
  "revision": [
    "noun",
    "verb"
  ],
  "revoke": [
    "verb",
    "noun"
  ],
  "revolution": [
    "noun"
  ],
  "revolutionary": [
    "adjective",
    "noun"
  ],
  "revolved": [
    "adjective"
  ],
  "rewire": [
    "verb",
    "noun"
  ],
  "rewired": [
    "verb"
  ],
  "reword": [
    "verb"
  ],
  "rework": [
    "noun",
    "verb"
  ],
  "reworked": [
    "adjective"
  ],
  "reworking": [
    "noun"
  ],
  "rewrite": [
    "verb",
    "noun"
  ],
  "rewriting": [
    "noun"
  ],
  "rewrote": [
    "verb"
  ],
  "rhetoric": [
    "noun",
    "adjective"
  ],
  "rhetorical": [
    "adjective",
    "noun"
  ],
  "rheumatic": [
    "adjective",
    "noun"
  ],
  "rheumatism": [
    "noun"
  ],
  "rheumatoid": [
    "noun",
    "adjective"
  ],
  "rheumatologist": [
    "noun"
  ],
  "rhizoid": [
    "adjective",
    "noun"
  ],
  "rhizome": [
    "noun"
  ],
  "rhyme": [
    "noun",
    "verb"
  ],
  "rhythm": [
    "noun",
    "verb"
  ],
  "rice": [
    "noun",
    "verb"
  ],
  "rich": [
    "adjective",
    "noun",
    "verb"
  ],
  "ricocheting": [
    "verb"
  ],
  "ridden": [
    "adjective"
  ],
  "ridding": [
    "noun"
  ],
  "riddle": [
    "noun",
    "verb"
  ],
  "ride": [
    "verb",
    "noun"
  ],
  "ridicule": [
    "noun",
    "verb",
    "adjective"
  ],
  "ridiculous": [
    "adjective"
  ],
  "rids": [
    "verb",
    "noun"
  ],
  "riffed": [
    "adjective"
  ],
  "riffraff": [
    "noun"
  ],
  "rig": [
    "noun",
    "verb"
  ],
  "rigatoni": [
    "noun"
  ],
  "right": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "rights": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "rime": [
    "noun",
    "verb"
  ],
  "rind": [
    "noun",
    "verb"
  ],
  "ring": [
    "noun",
    "verb"
  ],
  "ringing": [
    "noun",
    "adjective"
  ],
  "ringmaster": [
    "noun",
    "verb"
  ],
  "riposte": [
    "noun",
    "verb"
  ],
  "rips": [
    "noun",
    "verb"
  ],
  "rise": [
    "noun",
    "verb"
  ],
  "risk": [
    "noun",
    "verb"
  ],
  "rite": [
    "noun",
    "adverb",
    "adjective"
  ],
  "ritual": [
    "noun",
    "adjective"
  ],
  "ritualistic": [
    "adjective"
  ],
  "rivalry": [
    "noun"
  ],
  "river": [
    "noun",
    "verb"
  ],
  "riverbank": [
    "noun"
  ],
  "road": [
    "noun",
    "adjective"
  ],
  "roadblock": [
    "noun",
    "verb"
  ],
  "roadblocks": [
    "noun"
  ],
  "roadhouse": [
    "noun"
  ],
  "roadsides": [
    "noun"
  ],
  "roam": [
    "verb",
    "noun"
  ],
  "roanoke": [
    "noun"
  ],
  "roar": [
    "noun",
    "verb"
  ],
  "roared": [
    "verb"
  ],
  "roast": [
    "noun",
    "verb",
    "adjective"
  ],
  "robbery": [
    "noun"
  ],
  "robe": [
    "noun",
    "verb"
  ],
  "robin": [
    "noun"
  ],
  "robot": [
    "noun"
  ],
  "robust": [
    "adjective"
  ],
  "roc": [
    "noun"
  ],
  "rock": [
    "noun",
    "verb"
  ],
  "rockabilly": [
    "noun"
  ],
  "rocket": [
    "noun",
    "verb"
  ],
  "rockslide": [
    "noun"
  ],
  "roi": [
    "noun"
  ],
  "roil": [
    "verb"
  ],
  "role": [
    "noun"
  ],
  "roleplaying": [
    "noun"
  ],
  "roll": [
    "noun",
    "verb"
  ],
  "rolled": [
    "adjective"
  ],
  "rollover": [
    "noun",
    "verb"
  ],
  "romantic": [
    "adjective",
    "noun"
  ],
  "romanticism": [
    "noun"
  ],
  "roof": [
    "noun",
    "verb"
  ],
  "rooftop": [
    "noun"
  ],
  "rook": [
    "noun",
    "verb"
  ],
  "rooms": [
    "noun",
    "verb",
    "adverb",
    "adjective"
  ],
  "root": [
    "noun",
    "verb"
  ],
  "rooter": [
    "noun"
  ],
  "rope": [
    "noun",
    "verb"
  ],
  "rorschach": [
    "noun"
  ],
  "rose": [
    "verb",
    "noun",
    "adjective"
  ],
  "rosettes": [
    "noun"
  ],
  "rosewood": [
    "noun"
  ],
  "rot": [
    "noun",
    "verb"
  ],
  "rotate": [
    "verb",
    "adjective"
  ],
  "rotating": [
    "adjective"
  ],
  "rotational": [
    "adjective",
    "noun"
  ],
  "rotten": [
    "adjective",
    "adverb"
  ],
  "rotterdam": [
    "noun"
  ],
  "roughneck": [
    "noun",
    "verb"
  ],
  "roughnecks": [
    "noun"
  ],
  "roughshod": [
    "adjective"
  ],
  "roulettes": [
    "noun",
    "verb"
  ],
  "round": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "roundabout": [
    "adjective",
    "noun",
    "verb"
  ],
  "roundhouse": [
    "noun",
    "verb"
  ],
  "roundtable": [
    "noun"
  ],
  "roundup": [
    "noun"
  ],
  "route": [
    "noun",
    "verb"
  ],
  "routine": [
    "adjective",
    "noun"
  ],
  "routines": [
    "noun"
  ],
  "row": [
    "noun",
    "verb"
  ],
  "rowboat": [
    "noun",
    "verb"
  ],
  "rowed": [
    "adjective"
  ],
  "rowing": [
    "noun"
  ],
  "rows": [
    "noun"
  ],
  "royal": [
    "noun",
    "adjective"
  ],
  "rub": [
    "verb",
    "noun"
  ],
  "rubber": [
    "noun",
    "verb",
    "adjective"
  ],
  "rubble": [
    "noun",
    "verb"
  ],
  "rubella": [
    "noun"
  ],
  "ruby": [
    "noun",
    "adjective",
    "verb"
  ],
  "rucksack": [
    "noun"
  ],
  "rude": [
    "adjective"
  ],
  "rug": [
    "noun",
    "verb"
  ],
  "rugby": [
    "noun",
    "verb"
  ],
  "ruin": [
    "noun",
    "verb"
  ],
  "ruined": [
    "adjective"
  ],
  "rule": [
    "noun",
    "verb"
  ],
  "ruler": [
    "noun",
    "verb"
  ],
  "rules": [
    "noun"
  ],
  "rum": [
    "noun",
    "adjective"
  ],
  "rumen": [
    "noun"
  ],
  "rums": [
    "noun",
    "verb"
  ],
  "run": [
    "verb",
    "noun",
    "adjective"
  ],
  "runabout": [
    "noun"
  ],
  "runaways": [
    "adjective",
    "noun"
  ],
  "rundown": [
    "noun",
    "adjective"
  ],
  "rune": [
    "noun",
    "verb"
  ],
  "rung": [
    "noun",
    "adjective"
  ],
  "running": [
    "noun",
    "adjective",
    "adverb"
  ],
  "runoff": [
    "noun"
  ],
  "runs": [
    "noun"
  ],
  "rupees": [
    "noun"
  ],
  "rupiah": [
    "noun"
  ],
  "rupture": [
    "noun",
    "verb"
  ],
  "rus": [
    "noun"
  ],
  "rustproof": [
    "adjective",
    "verb"
  ],
  "rut": [
    "noun",
    "verb"
  ],
  "saboteur": [
    "noun"
  ],
  "sac": [
    "noun",
    "verb"
  ],
  "saccule": [
    "noun"
  ],
  "sacked": [
    "adjective"
  ],
  "sacking": [
    "noun"
  ],
  "sacrilegious": [
    "adjective"
  ],
  "sacs": [
    "noun"
  ],
  "sad": [
    "adjective",
    "verb",
    "noun"
  ],
  "saddlebag": [
    "noun",
    "verb"
  ],
  "sadness": [
    "noun"
  ],
  "safari": [
    "noun",
    "verb"
  ],
  "safe": [
    "adjective",
    "noun",
    "verb"
  ],
  "safeguard": [
    "verb",
    "noun"
  ],
  "safety": [
    "noun",
    "verb"
  ],
  "safflower": [
    "noun"
  ],
  "sag": [
    "noun",
    "verb"
  ],
  "saga": [
    "noun"
  ],
  "sagebrush": [
    "noun"
  ],
  "said": [
    "adjective",
    "noun"
  ],
  "saigon": [
    "noun"
  ],
  "sail": [
    "noun",
    "verb"
  ],
  "sailboat": [
    "noun",
    "verb"
  ],
  "sailfish": [
    "noun"
  ],
  "sailing": [
    "noun",
    "adjective"
  ],
  "sailor": [
    "noun"
  ],
  "saint": [
    "noun",
    "verb"
  ],
  "sainthood": [
    "noun"
  ],
  "sakes": [
    "noun"
  ],
  "salad": [
    "noun"
  ],
  "sale": [
    "noun"
  ],
  "salespeople": [
    "noun"
  ],
  "saleswoman": [
    "noun"
  ],
  "saleswomen": [
    "noun"
  ],
  "saline": [
    "noun",
    "adjective"
  ],
  "salmonella": [
    "noun"
  ],
  "saloon": [
    "noun"
  ],
  "salt": [
    "noun",
    "adjective",
    "verb"
  ],
  "salute": [
    "noun",
    "verb"
  ],
  "same": [
    "adjective",
    "adverb",
    "noun"
  ],
  "sample": [
    "noun",
    "verb"
  ],
  "samurai": [
    "noun"
  ],
  "sanatorium": [
    "noun"
  ],
  "sanctimony": [
    "noun"
  ],
  "sanction": [
    "noun",
    "verb"
  ],
  "sanctuary": [
    "noun"
  ],
  "sand": [
    "noun",
    "verb",
    "adjective"
  ],
  "sandal": [
    "noun"
  ],
  "sandbag": [
    "noun",
    "verb"
  ],
  "sandbar": [
    "noun"
  ],
  "sandblast": [
    "noun",
    "verb"
  ],
  "sandbox": [
    "noun",
    "verb"
  ],
  "sandstorm": [
    "noun"
  ],
  "sandwich": [
    "noun",
    "verb",
    "adjective"
  ],
  "sane": [
    "adjective",
    "noun"
  ],
  "sap": [
    "noun",
    "verb"
  ],
  "sapling": [
    "noun"
  ],
  "sapped": [
    "verb"
  ],
  "sappy": [
    "adjective"
  ],
  "saps": [
    "noun"
  ],
  "sardines": [
    "noun"
  ],
  "sardonic": [
    "adjective"
  ],
  "sarong": [
    "noun"
  ],
  "sash": [
    "noun",
    "verb"
  ],
  "saskatchewan": [
    "noun"
  ],
  "saskatoon": [
    "noun"
  ],
  "sassafras": [
    "noun"
  ],
  "sat": [
    "noun",
    "adjective"
  ],
  "satchel": [
    "noun"
  ],
  "satellite": [
    "noun",
    "verb"
  ],
  "satin": [
    "noun",
    "adjective",
    "verb"
  ],
  "satire": [
    "noun"
  ],
  "satisfied": [
    "adjective"
  ],
  "satisfy": [
    "verb"
  ],
  "satisfying": [
    "adjective"
  ],
  "saturday": [
    "noun",
    "adverb",
    "verb"
  ],
  "sauce": [
    "noun",
    "verb"
  ],
  "saucepan": [
    "noun",
    "verb"
  ],
  "sauerkraut": [
    "noun"
  ],
  "sausage": [
    "noun",
    "verb"
  ],
  "saute": [
    "verb"
  ],
  "sauterne": [
    "noun"
  ],
  "savanna": [
    "noun"
  ],
  "save": [
    "verb",
    "noun"
  ],
  "saving": [
    "noun",
    "adjective"
  ],
  "savor": [
    "verb",
    "noun"
  ],
  "saw": [
    "verb",
    "noun"
  ],
  "sawdust": [
    "noun",
    "verb"
  ],
  "sawmill": [
    "noun",
    "verb"
  ],
  "saws": [
    "noun"
  ],
  "saxophone": [
    "noun",
    "verb"
  ],
  "say": [
    "verb",
    "noun",
    "adverb"
  ],
  "scab": [
    "noun",
    "verb"
  ],
  "scad": [
    "noun"
  ],
  "scalar": [
    "noun",
    "adjective"
  ],
  "scald": [
    "noun",
    "verb",
    "adjective"
  ],
  "scale": [
    "noun",
    "verb"
  ],
  "scaling": [
    "noun"
  ],
  "scam": [
    "noun",
    "verb"
  ],
  "scan": [
    "noun",
    "verb"
  ],
  "scandal": [
    "noun",
    "verb"
  ],
  "scanned": [
    "adjective"
  ],
  "scant": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "scape": [
    "noun",
    "verb"
  ],
  "scapegoat": [
    "noun",
    "verb"
  ],
  "scar": [
    "noun",
    "verb"
  ],
  "scare": [
    "verb",
    "noun",
    "adjective"
  ],
  "scared": [
    "adjective"
  ],
  "scarf": [
    "noun",
    "verb"
  ],
  "scarface": [
    "noun"
  ],
  "scarred": [
    "adjective"
  ],
  "scary": [
    "adjective",
    "adverb",
    "noun"
  ],
  "scat": [
    "noun",
    "verb"
  ],
  "scatter": [
    "noun",
    "verb"
  ],
  "scene": [
    "noun",
    "verb"
  ],
  "scenery": [
    "noun"
  ],
  "scenes": [
    "noun",
    "verb"
  ],
  "scent": [
    "noun",
    "verb"
  ],
  "schadenfreude": [
    "noun"
  ],
  "schedule": [
    "noun",
    "verb"
  ],
  "schematic": [
    "adjective",
    "noun"
  ],
  "schemes": [
    "noun"
  ],
  "scheming": [
    "noun",
    "adjective"
  ],
  "schist": [
    "noun"
  ],
  "schlock": [
    "noun"
  ],
  "schmoozing": [
    "noun"
  ],
  "schnapps": [
    "noun"
  ],
  "schnook": [
    "noun"
  ],
  "schnooks": [
    "noun"
  ],
  "scholarship": [
    "noun",
    "verb"
  ],
  "scholarships": [
    "noun"
  ],
  "school": [
    "noun",
    "verb"
  ],
  "schoolbook": [
    "noun"
  ],
  "schoolbooks": [
    "noun"
  ],
  "schoolboy": [
    "noun",
    "adjective"
  ],
  "schoolboys": [
    "noun"
  ],
  "schoolchild": [
    "noun"
  ],
  "schoolgirls": [
    "noun"
  ],
  "schoolhouse": [
    "noun"
  ],
  "schoolroom": [
    "noun"
  ],
  "schooltime": [
    "noun"
  ],
  "schoolwork": [
    "noun"
  ],
  "schoolyard": [
    "noun"
  ],
  "schtick": [
    "noun"
  ],
  "science": [
    "noun",
    "verb"
  ],
  "scientist": [
    "noun"
  ],
  "scilla": [
    "noun"
  ],
  "scintilla": [
    "noun"
  ],
  "scion": [
    "noun"
  ],
  "scissors": [
    "noun"
  ],
  "scofflaws": [
    "noun"
  ],
  "scoffs": [
    "verb",
    "noun"
  ],
  "scold": [
    "verb",
    "noun"
  ],
  "sconce": [
    "noun",
    "verb"
  ],
  "scone": [
    "noun",
    "verb"
  ],
  "scoot": [
    "verb",
    "noun"
  ],
  "scooter": [
    "noun",
    "verb"
  ],
  "scope": [
    "noun",
    "verb"
  ],
  "scoreboard": [
    "noun"
  ],
  "scorecard": [
    "noun"
  ],
  "scored": [
    "verb"
  ],
  "scorekeeper": [
    "noun"
  ],
  "scorn": [
    "noun",
    "verb"
  ],
  "scorpion": [
    "noun",
    "adjective"
  ],
  "scour": [
    "noun",
    "verb"
  ],
  "scours": [
    "noun"
  ],
  "scout": [
    "noun",
    "verb"
  ],
  "scoutmaster": [
    "noun"
  ],
  "scowl": [
    "noun",
    "verb"
  ],
  "scram": [
    "noun",
    "verb"
  ],
  "scramble": [
    "noun",
    "verb"
  ],
  "scrap": [
    "noun",
    "verb"
  ],
  "scrapbook": [
    "noun",
    "verb"
  ],
  "scrapbooks": [
    "noun"
  ],
  "scrape": [
    "verb",
    "noun"
  ],
  "scrapped": [
    "verb"
  ],
  "scratch": [
    "noun",
    "verb",
    "adjective"
  ],
  "scrawled": [
    "adjective"
  ],
  "scream": [
    "noun",
    "verb"
  ],
  "screams": [
    "noun",
    "verb"
  ],
  "screen": [
    "noun",
    "verb"
  ],
  "screenplay": [
    "noun",
    "verb"
  ],
  "screens": [
    "noun"
  ],
  "screw": [
    "noun",
    "verb"
  ],
  "screwball": [
    "adjective",
    "noun"
  ],
  "screwed": [
    "adjective"
  ],
  "scrimshaw": [
    "noun",
    "verb"
  ],
  "script": [
    "noun",
    "verb"
  ],
  "scripture": [
    "noun"
  ],
  "scrod": [
    "noun",
    "verb"
  ],
  "scroll": [
    "noun",
    "verb"
  ],
  "scrupulous": [
    "adjective"
  ],
  "scud": [
    "noun",
    "verb",
    "adjective"
  ],
  "scuff": [
    "noun",
    "verb"
  ],
  "sculpt": [
    "verb",
    "noun"
  ],
  "sculptor": [
    "noun"
  ],
  "sculpture": [
    "noun",
    "verb"
  ],
  "scuppernong": [
    "noun"
  ],
  "scurried": [
    "verb"
  ],
  "scuttlebutt": [
    "noun",
    "verb"
  ],
  "sea": [
    "noun"
  ],
  "seabed": [
    "noun"
  ],
  "seaboard": [
    "noun"
  ],
  "seaborne": [
    "adjective"
  ],
  "seacoast": [
    "noun"
  ],
  "seafood": [
    "noun"
  ],
  "seagoing": [
    "adjective"
  ],
  "seal": [
    "noun",
    "verb"
  ],
  "seam": [
    "noun",
    "verb"
  ],
  "seams": [
    "noun"
  ],
  "seaport": [
    "noun"
  ],
  "seaports": [
    "noun"
  ],
  "search": [
    "noun",
    "verb"
  ],
  "searching": [
    "noun",
    "adjective"
  ],
  "seared": [
    "adjective"
  ],
  "seas": [
    "noun"
  ],
  "seashell": [
    "noun",
    "adjective",
    "verb"
  ],
  "seasick": [
    "adjective"
  ],
  "season": [
    "noun",
    "verb"
  ],
  "seat": [
    "noun",
    "verb"
  ],
  "seating": [
    "noun"
  ],
  "seaweed": [
    "noun"
  ],
  "seaweeds": [
    "noun"
  ],
  "sebaceous": [
    "adjective"
  ],
  "secede": [
    "verb"
  ],
  "secession": [
    "noun"
  ],
  "secondary": [
    "adjective",
    "noun"
  ],
  "secondhand": [
    "adjective",
    "noun",
    "adverb"
  ],
  "seconds": [
    "noun"
  ],
  "secret": [
    "noun",
    "adjective",
    "verb"
  ],
  "secretary": [
    "noun",
    "verb"
  ],
  "secrete": [
    "verb",
    "adjective"
  ],
  "secrets": [
    "noun"
  ],
  "sect": [
    "noun"
  ],
  "secures": [
    "verb"
  ],
  "securing": [
    "verb"
  ],
  "security": [
    "noun"
  ],
  "sedan": [
    "noun"
  ],
  "sediment": [
    "noun",
    "verb"
  ],
  "seduce": [
    "verb"
  ],
  "see": [
    "verb",
    "noun"
  ],
  "seed": [
    "noun",
    "verb"
  ],
  "seedling": [
    "noun"
  ],
  "seedpod": [
    "noun"
  ],
  "seek": [
    "verb",
    "noun"
  ],
  "seeking": [
    "noun",
    "adjective"
  ],
  "seeks": [
    "verb",
    "noun"
  ],
  "seeling": [
    "noun",
    "verb"
  ],
  "seemed": [
    "verb"
  ],
  "seeming": [
    "adjective",
    "noun"
  ],
  "seen": [
    "verb",
    "noun"
  ],
  "seep": [
    "verb",
    "noun"
  ],
  "seesaw": [
    "noun",
    "verb",
    "adjective"
  ],
  "seesawed": [
    "verb"
  ],
  "segment": [
    "noun",
    "verb"
  ],
  "segmented": [
    "adjective"
  ],
  "segmenting": [
    "verb",
    "noun"
  ],
  "seine": [
    "noun",
    "verb"
  ],
  "seize": [
    "verb"
  ],
  "seldom": [
    "adverb",
    "adjective"
  ],
  "select": [
    "verb",
    "adjective",
    "noun"
  ],
  "selectivity": [
    "noun"
  ],
  "selfish": [
    "adjective"
  ],
  "selfless": [
    "adjective"
  ],
  "sell": [
    "verb",
    "noun"
  ],
  "sellout": [
    "noun"
  ],
  "semester": [
    "noun"
  ],
  "semiautomatic": [
    "adjective",
    "noun"
  ],
  "semigloss": [
    "noun",
    "adjective"
  ],
  "seminar": [
    "noun",
    "verb"
  ],
  "semitrailer": [
    "noun"
  ],
  "semolina": [
    "noun"
  ],
  "senator": [
    "noun"
  ],
  "send": [
    "verb",
    "noun"
  ],
  "sending": [
    "noun"
  ],
  "sends": [
    "verb"
  ],
  "senile": [
    "adjective",
    "noun"
  ],
  "senor": [
    "noun"
  ],
  "sensed": [
    "adjective"
  ],
  "sensitive": [
    "adjective",
    "noun"
  ],
  "sensitivity": [
    "noun"
  ],
  "sent": [
    "noun"
  ],
  "sentence": [
    "noun",
    "verb"
  ],
  "sentry": [
    "noun"
  ],
  "seoul": [
    "noun"
  ],
  "separate": [
    "adjective",
    "verb",
    "noun"
  ],
  "separating": [
    "noun",
    "adjective"
  ],
  "sequel": [
    "noun"
  ],
  "sequential": [
    "adjective"
  ],
  "sequester": [
    "verb",
    "noun"
  ],
  "seraphim": [
    "noun"
  ],
  "serendipitous": [
    "adjective"
  ],
  "serendipity": [
    "noun"
  ],
  "serenity": [
    "noun"
  ],
  "series": [
    "noun"
  ],
  "serious": [
    "adjective",
    "adverb"
  ],
  "sermon": [
    "noun",
    "verb"
  ],
  "serologist": [
    "noun"
  ],
  "serology": [
    "noun"
  ],
  "serpentine": [
    "noun",
    "adjective",
    "verb"
  ],
  "serve": [
    "verb",
    "noun"
  ],
  "served": [
    "verb"
  ],
  "service": [
    "noun",
    "verb"
  ],
  "services": [
    "noun"
  ],
  "serving": [
    "noun"
  ],
  "servitude": [
    "noun"
  ],
  "set": [
    "verb",
    "noun",
    "adjective"
  ],
  "setback": [
    "noun"
  ],
  "setbacks": [
    "noun"
  ],
  "sets": [
    "noun"
  ],
  "setter": [
    "noun",
    "verb"
  ],
  "setting": [
    "noun",
    "adjective"
  ],
  "settled": [
    "adjective"
  ],
  "settlement": [
    "noun"
  ],
  "seventeens": [
    "noun"
  ],
  "sever": [
    "verb"
  ],
  "several": [
    "adjective",
    "adverb",
    "noun"
  ],
  "sewed": [
    "adjective"
  ],
  "sewn": [
    "adjective"
  ],
  "sexed": [
    "adjective"
  ],
  "sextant": [
    "noun"
  ],
  "sexual": [
    "adjective",
    "noun"
  ],
  "sexy": [
    "adjective"
  ],
  "shacks": [
    "noun"
  ],
  "shadbush": [
    "noun"
  ],
  "shade": [
    "noun",
    "verb"
  ],
  "shadow": [
    "noun",
    "verb",
    "adjective"
  ],
  "shadows": [
    "noun",
    "verb",
    "adjective"
  ],
  "shake": [
    "verb",
    "noun"
  ],
  "shakedown": [
    "noun",
    "adjective"
  ],
  "shakes": [
    "noun"
  ],
  "shakeup": [
    "noun"
  ],
  "shaking": [
    "noun"
  ],
  "shale": [
    "noun",
    "verb"
  ],
  "shallow": [
    "adjective",
    "verb",
    "noun"
  ],
  "shame": [
    "noun",
    "verb",
    "adjective"
  ],
  "shampoo": [
    "noun",
    "verb"
  ],
  "shamrock": [
    "noun"
  ],
  "shanghai": [
    "noun",
    "verb"
  ],
  "shantytown": [
    "noun"
  ],
  "shape": [
    "noun",
    "verb"
  ],
  "shard": [
    "noun",
    "verb"
  ],
  "share": [
    "noun",
    "verb"
  ],
  "sharecropper": [
    "noun"
  ],
  "shark": [
    "noun",
    "verb"
  ],
  "shatter": [
    "verb",
    "noun"
  ],
  "shatterproof": [
    "adjective",
    "verb"
  ],
  "shave": [
    "verb",
    "noun"
  ],
  "shaved": [
    "adjective"
  ],
  "shawls": [
    "noun"
  ],
  "sheaf": [
    "noun",
    "verb"
  ],
  "sheared": [
    "adjective"
  ],
  "shed": [
    "verb",
    "noun"
  ],
  "sheens": [
    "noun"
  ],
  "sheep": [
    "noun"
  ],
  "sheepskin": [
    "noun"
  ],
  "sheer": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "sheet": [
    "noun",
    "verb"
  ],
  "sheeting": [
    "noun"
  ],
  "sheik": [
    "noun"
  ],
  "sheiks": [
    "noun"
  ],
  "shelf": [
    "noun",
    "verb"
  ],
  "shellacking": [
    "noun"
  ],
  "shelter": [
    "noun",
    "verb"
  ],
  "shema": [
    "noun"
  ],
  "shepherd": [
    "noun",
    "verb"
  ],
  "shia": [
    "noun"
  ],
  "shiah": [
    "noun"
  ],
  "shibboleth": [
    "noun"
  ],
  "shield": [
    "noun",
    "verb"
  ],
  "shift": [
    "noun",
    "verb"
  ],
  "shine": [
    "verb",
    "noun"
  ],
  "shined": [
    "verb"
  ],
  "shingle": [
    "noun",
    "verb"
  ],
  "shiny": [
    "adjective",
    "noun"
  ],
  "ship": [
    "noun",
    "verb"
  ],
  "shipwreck": [
    "noun",
    "verb"
  ],
  "shipyard": [
    "noun"
  ],
  "shirk": [
    "verb",
    "noun"
  ],
  "shirked": [
    "verb"
  ],
  "shirking": [
    "noun"
  ],
  "shirt": [
    "noun",
    "verb"
  ],
  "shirtsleeve": [
    "noun",
    "adjective"
  ],
  "shithead": [
    "noun"
  ],
  "shits": [
    "noun"
  ],
  "shitting": [
    "noun",
    "adjective"
  ],
  "shitty": [
    "adjective",
    "noun"
  ],
  "shiver": [
    "noun",
    "verb"
  ],
  "shock": [
    "noun",
    "adjective",
    "verb"
  ],
  "shocks": [
    "noun"
  ],
  "shod": [
    "adjective"
  ],
  "shoddy": [
    "adjective",
    "noun"
  ],
  "shoe": [
    "noun",
    "verb"
  ],
  "shoehorn": [
    "noun",
    "verb"
  ],
  "shoelace": [
    "noun"
  ],
  "shoestring": [
    "noun",
    "verb",
    "adjective"
  ],
  "shook": [
    "verb",
    "adjective",
    "noun"
  ],
  "shoot": [
    "verb",
    "noun"
  ],
  "shooting": [
    "noun",
    "adjective"
  ],
  "shop": [
    "noun",
    "verb"
  ],
  "shoplift": [
    "verb",
    "noun"
  ],
  "shopped": [
    "verb"
  ],
  "shopping": [
    "noun"
  ],
  "shopworn": [
    "adjective"
  ],
  "shore": [
    "noun",
    "verb",
    "adverb"
  ],
  "shoreward": [
    "adverb",
    "adjective",
    "noun"
  ],
  "shorn": [
    "adjective"
  ],
  "short": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "shortcake": [
    "noun"
  ],
  "shortcoming": [
    "noun"
  ],
  "shortcut": [
    "noun",
    "verb"
  ],
  "shortfalls": [
    "noun"
  ],
  "shorthand": [
    "noun",
    "verb"
  ],
  "shorts": [
    "noun"
  ],
  "shortstop": [
    "noun",
    "verb"
  ],
  "shoshone": [
    "noun"
  ],
  "shot": [
    "verb",
    "noun",
    "adjective"
  ],
  "shotgun": [
    "noun",
    "verb"
  ],
  "shotguns": [
    "noun"
  ],
  "shots": [
    "noun"
  ],
  "shoulder": [
    "noun",
    "verb"
  ],
  "shout": [
    "verb",
    "noun"
  ],
  "shouting": [
    "noun"
  ],
  "shove": [
    "verb",
    "noun"
  ],
  "shoved": [
    "verb"
  ],
  "shovel": [
    "noun",
    "verb"
  ],
  "show": [
    "verb",
    "noun"
  ],
  "showboat": [
    "noun",
    "verb"
  ],
  "showcase": [
    "noun",
    "verb"
  ],
  "showdown": [
    "noun"
  ],
  "showgirls": [
    "noun"
  ],
  "showpiece": [
    "noun"
  ],
  "shrank": [
    "noun"
  ],
  "shred": [
    "noun",
    "verb",
    "adjective"
  ],
  "shreveport": [
    "noun"
  ],
  "shrewd": [
    "adjective"
  ],
  "shriek": [
    "noun",
    "verb"
  ],
  "shrieking": [
    "adjective"
  ],
  "shrieks": [
    "noun",
    "verb"
  ],
  "shrift": [
    "noun"
  ],
  "shrill": [
    "adjective",
    "noun",
    "verb"
  ],
  "shrimp": [
    "noun",
    "verb"
  ],
  "shrine": [
    "noun",
    "verb"
  ],
  "shrink": [
    "verb",
    "noun"
  ],
  "shrinking": [
    "noun",
    "adjective"
  ],
  "shrinks": [
    "verb",
    "noun"
  ],
  "shrub": [
    "noun",
    "verb"
  ],
  "shrubbery": [
    "noun"
  ],
  "shrug": [
    "noun",
    "verb"
  ],
  "shtick": [
    "noun"
  ],
  "shucking": [
    "noun"
  ],
  "shudder": [
    "noun",
    "verb"
  ],
  "shun": [
    "verb"
  ],
  "shuns": [
    "verb"
  ],
  "shunt": [
    "noun",
    "verb"
  ],
  "shutdown": [
    "noun"
  ],
  "shutter": [
    "noun",
    "verb"
  ],
  "shuttle": [
    "noun",
    "verb"
  ],
  "shy": [
    "adjective",
    "verb",
    "noun"
  ],
  "shylock": [
    "noun",
    "verb"
  ],
  "siam": [
    "noun",
    "verb"
  ],
  "siamese": [
    "adjective",
    "noun"
  ],
  "sickly": [
    "adjective",
    "adverb",
    "verb"
  ],
  "siddhartha": [
    "noun"
  ],
  "side": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "sidebar": [
    "noun",
    "verb"
  ],
  "sided": [
    "adjective",
    "verb"
  ],
  "sidekick": [
    "noun"
  ],
  "sideline": [
    "noun",
    "verb"
  ],
  "sidelined": [
    "verb"
  ],
  "sidestep": [
    "verb",
    "noun"
  ],
  "sidestepped": [
    "verb"
  ],
  "sidetracked": [
    "verb"
  ],
  "sidewalk": [
    "noun"
  ],
  "sideways": [
    "adverb",
    "adjective"
  ],
  "sieves": [
    "noun"
  ],
  "sift": [
    "verb",
    "noun"
  ],
  "sigh": [
    "noun",
    "verb"
  ],
  "sighing": [
    "noun",
    "adjective"
  ],
  "sight": [
    "noun",
    "verb"
  ],
  "sighting": [
    "noun"
  ],
  "sigmoid": [
    "noun",
    "adjective"
  ],
  "sign": [
    "noun",
    "verb"
  ],
  "signal": [
    "noun",
    "adjective",
    "verb"
  ],
  "signatory": [
    "noun",
    "adjective"
  ],
  "signature": [
    "noun",
    "adjective"
  ],
  "signer": [
    "noun"
  ],
  "signet": [
    "noun"
  ],
  "significant": [
    "adjective",
    "noun"
  ],
  "signifying": [
    "noun"
  ],
  "signori": [
    "noun"
  ],
  "signpost": [
    "noun",
    "verb"
  ],
  "sikh": [
    "adjective",
    "noun"
  ],
  "sikhs": [
    "adjective",
    "noun"
  ],
  "silencer": [
    "noun"
  ],
  "silent": [
    "adjective",
    "noun"
  ],
  "silhouette": [
    "noun",
    "verb"
  ],
  "silhouettes": [
    "noun"
  ],
  "silicone": [
    "noun",
    "verb",
    "adjective"
  ],
  "silk": [
    "noun",
    "verb"
  ],
  "silly": [
    "adjective",
    "adverb",
    "noun"
  ],
  "silo": [
    "noun",
    "verb"
  ],
  "silver": [
    "noun",
    "adjective",
    "verb"
  ],
  "silversides": [
    "noun"
  ],
  "similar": [
    "adjective",
    "noun"
  ],
  "simmer": [
    "verb",
    "noun"
  ],
  "simple": [
    "adjective",
    "noun",
    "verb"
  ],
  "simplex": [
    "noun",
    "adjective"
  ],
  "simplicity": [
    "noun"
  ],
  "simplistic": [
    "adjective"
  ],
  "simply": [
    "adverb"
  ],
  "simulator": [
    "noun"
  ],
  "simulcast": [
    "noun",
    "verb"
  ],
  "simultaneous": [
    "adjective"
  ],
  "sin": [
    "noun",
    "verb"
  ],
  "sincere": [
    "adjective",
    "noun"
  ],
  "sing": [
    "verb",
    "noun"
  ],
  "singapore": [
    "noun"
  ],
  "singer": [
    "noun"
  ],
  "singing": [
    "noun",
    "adjective"
  ],
  "sink": [
    "verb",
    "noun"
  ],
  "sinkhole": [
    "noun",
    "verb"
  ],
  "sinner": [
    "noun"
  ],
  "sinusoid": [
    "noun",
    "adjective"
  ],
  "sip": [
    "noun",
    "verb"
  ],
  "sipped": [
    "verb"
  ],
  "sips": [
    "noun",
    "verb"
  ],
  "sire": [
    "noun",
    "verb"
  ],
  "sister": [
    "noun",
    "verb"
  ],
  "sisterhood": [
    "noun"
  ],
  "sisters": [
    "noun"
  ],
  "sit": [
    "verb",
    "noun"
  ],
  "sitcom": [
    "noun"
  ],
  "site": [
    "noun",
    "verb"
  ],
  "siting": [
    "noun",
    "verb"
  ],
  "sits": [
    "verb"
  ],
  "sixteen": [
    "noun",
    "adjective"
  ],
  "sixteens": [
    "noun"
  ],
  "size": [
    "noun",
    "verb"
  ],
  "skate": [
    "noun",
    "verb",
    "adjective"
  ],
  "skateboard": [
    "noun",
    "verb"
  ],
  "skateboarding": [
    "noun"
  ],
  "skater": [
    "noun"
  ],
  "skating": [
    "noun"
  ],
  "skeleton": [
    "noun",
    "verb"
  ],
  "skepticism": [
    "noun"
  ],
  "sketch": [
    "noun",
    "verb",
    "adjective"
  ],
  "sketchbook": [
    "noun"
  ],
  "skewing": [
    "noun"
  ],
  "ski": [
    "noun",
    "verb"
  ],
  "skid": [
    "noun",
    "verb"
  ],
  "skidding": [
    "noun"
  ],
  "skids": [
    "noun"
  ],
  "skied": [
    "verb"
  ],
  "skier": [
    "noun"
  ],
  "skies": [
    "noun"
  ],
  "skiing": [
    "noun"
  ],
  "skill": [
    "noun",
    "adjective",
    "verb"
  ],
  "skills": [
    "noun"
  ],
  "skim": [
    "noun",
    "verb",
    "adjective"
  ],
  "skin": [
    "noun",
    "verb"
  ],
  "skinhead": [
    "noun"
  ],
  "skinks": [
    "noun"
  ],
  "skip": [
    "verb",
    "noun"
  ],
  "skips": [
    "verb",
    "noun"
  ],
  "skis": [
    "noun"
  ],
  "skit": [
    "noun",
    "verb"
  ],
  "skits": [
    "noun"
  ],
  "skullcap": [
    "noun"
  ],
  "skullcaps": [
    "noun"
  ],
  "skunk": [
    "noun",
    "verb"
  ],
  "sky": [
    "noun",
    "verb"
  ],
  "skycap": [
    "noun"
  ],
  "skylark": [
    "noun",
    "verb"
  ],
  "skyline": [
    "noun",
    "verb"
  ],
  "skyscraper": [
    "noun"
  ],
  "skywriting": [
    "noun"
  ],
  "slacks": [
    "noun"
  ],
  "slag": [
    "noun",
    "verb"
  ],
  "slam": [
    "noun",
    "verb"
  ],
  "slang": [
    "noun",
    "verb"
  ],
  "slant": [
    "noun",
    "verb",
    "adjective"
  ],
  "slap": [
    "noun",
    "verb",
    "adverb",
    "adjective"
  ],
  "slapdash": [
    "adjective",
    "adverb",
    "verb"
  ],
  "slapstick": [
    "noun"
  ],
  "slash": [
    "noun",
    "verb",
    "adverb"
  ],
  "slat": [
    "noun",
    "verb"
  ],
  "slather": [
    "verb",
    "noun"
  ],
  "slaughter": [
    "noun",
    "verb"
  ],
  "slaughterhouse": [
    "noun"
  ],
  "slaw": [
    "noun"
  ],
  "slaying": [
    "noun"
  ],
  "sled": [
    "noun",
    "verb"
  ],
  "sleeker": [
    "noun"
  ],
  "sleep": [
    "noun",
    "verb"
  ],
  "sleeping": [
    "noun",
    "adjective"
  ],
  "sleepwalk": [
    "verb"
  ],
  "sleepwalking": [
    "noun"
  ],
  "sleeve": [
    "noun",
    "verb"
  ],
  "sleeved": [
    "adjective"
  ],
  "slice": [
    "noun",
    "verb",
    "adjective"
  ],
  "slicked": [
    "adjective"
  ],
  "slickly": [
    "adverb"
  ],
  "slicks": [
    "noun"
  ],
  "slid": [
    "verb"
  ],
  "slide": [
    "noun",
    "verb"
  ],
  "slides": [
    "noun",
    "verb"
  ],
  "slighting": [
    "noun",
    "adjective"
  ],
  "slime": [
    "noun",
    "verb"
  ],
  "sling": [
    "noun",
    "verb"
  ],
  "slings": [
    "noun"
  ],
  "slingshot": [
    "noun",
    "verb"
  ],
  "slip": [
    "noun",
    "verb"
  ],
  "slipper": [
    "noun",
    "verb",
    "adjective"
  ],
  "slipshod": [
    "adjective"
  ],
  "slit": [
    "noun",
    "verb",
    "adjective"
  ],
  "slits": [
    "noun"
  ],
  "slitting": [
    "noun"
  ],
  "sliver": [
    "noun",
    "verb"
  ],
  "slog": [
    "noun",
    "verb"
  ],
  "slop": [
    "noun",
    "verb",
    "adjective"
  ],
  "slope": [
    "noun",
    "verb",
    "adjective",
    "adverb"
  ],
  "sloppy": [
    "adjective",
    "noun"
  ],
  "slosh": [
    "verb",
    "noun"
  ],
  "sloth": [
    "noun",
    "verb"
  ],
  "slovakian": [
    "adjective",
    "noun"
  ],
  "slow": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "slowdown": [
    "noun"
  ],
  "slowed": [
    "verb"
  ],
  "slowly": [
    "adverb"
  ],
  "slowpoke": [
    "noun"
  ],
  "slows": [
    "noun"
  ],
  "sluggish": [
    "adjective"
  ],
  "sluice": [
    "noun",
    "verb"
  ],
  "slum": [
    "noun",
    "verb"
  ],
  "slums": [
    "noun"
  ],
  "slung": [
    "verb"
  ],
  "slur": [
    "noun",
    "verb"
  ],
  "slurp": [
    "noun",
    "verb"
  ],
  "slurred": [
    "adjective"
  ],
  "sly": [
    "adjective",
    "adverb",
    "noun"
  ],
  "smack": [
    "noun",
    "verb",
    "adverb"
  ],
  "smacked": [
    "verb"
  ],
  "smacks": [
    "verb",
    "noun"
  ],
  "small": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "smallpox": [
    "noun"
  ],
  "smart": [
    "adjective",
    "noun",
    "verb"
  ],
  "smarted": [
    "verb"
  ],
  "smarting": [
    "noun",
    "adjective"
  ],
  "smash": [
    "verb",
    "noun"
  ],
  "smatter": [
    "noun",
    "verb"
  ],
  "smear": [
    "noun",
    "verb"
  ],
  "smearing": [
    "noun"
  ],
  "smears": [
    "noun"
  ],
  "smells": [
    "verb"
  ],
  "smile": [
    "noun",
    "verb"
  ],
  "smirk": [
    "noun",
    "verb",
    "adjective"
  ],
  "smirking": [
    "noun"
  ],
  "smirks": [
    "noun",
    "verb"
  ],
  "smithereens": [
    "noun"
  ],
  "smitten": [
    "adjective"
  ],
  "smoke": [
    "noun",
    "verb"
  ],
  "smokestacks": [
    "noun"
  ],
  "smoking": [
    "noun",
    "adjective"
  ],
  "smorgasbord": [
    "noun"
  ],
  "smuggle": [
    "verb"
  ],
  "smut": [
    "noun",
    "verb"
  ],
  "snack": [
    "noun",
    "verb"
  ],
  "snacking": [
    "verb",
    "noun"
  ],
  "snag": [
    "noun",
    "verb"
  ],
  "snail": [
    "noun",
    "verb"
  ],
  "snake": [
    "noun",
    "verb"
  ],
  "snakelike": [
    "adjective"
  ],
  "snakes": [
    "noun",
    "verb"
  ],
  "snaking": [
    "noun"
  ],
  "snap": [
    "noun",
    "verb",
    "adjective"
  ],
  "snappy": [
    "adjective"
  ],
  "snapshot": [
    "noun",
    "verb"
  ],
  "snared": [
    "verb",
    "adjective"
  ],
  "snaring": [
    "noun"
  ],
  "snarling": [
    "adjective",
    "noun"
  ],
  "snatch": [
    "verb",
    "noun"
  ],
  "sneak": [
    "verb",
    "noun",
    "adjective"
  ],
  "sneaker": [
    "noun"
  ],
  "sneaking": [
    "adjective",
    "noun"
  ],
  "sneaks": [
    "verb",
    "noun"
  ],
  "sneer": [
    "noun",
    "verb"
  ],
  "sneered": [
    "verb"
  ],
  "sneering": [
    "adjective",
    "noun"
  ],
  "sneers": [
    "noun",
    "verb"
  ],
  "sneeze": [
    "noun",
    "verb"
  ],
  "snicker": [
    "noun",
    "verb"
  ],
  "snip": [
    "noun",
    "verb"
  ],
  "snips": [
    "noun"
  ],
  "snog": [
    "noun",
    "verb"
  ],
  "snooze": [
    "noun",
    "verb"
  ],
  "snoozing": [
    "verb"
  ],
  "snore": [
    "verb",
    "noun"
  ],
  "snorkeling": [
    "noun"
  ],
  "snort": [
    "noun",
    "verb"
  ],
  "snout": [
    "noun",
    "verb"
  ],
  "snow": [
    "noun",
    "verb"
  ],
  "snowballed": [
    "verb"
  ],
  "snowballing": [
    "noun"
  ],
  "snowballs": [
    "noun"
  ],
  "snowbird": [
    "noun"
  ],
  "snowbirds": [
    "noun"
  ],
  "snowboarding": [
    "noun"
  ],
  "snowbound": [
    "adjective"
  ],
  "snowed": [
    "verb"
  ],
  "snowflake": [
    "noun",
    "verb"
  ],
  "snowflakes": [
    "noun"
  ],
  "snowmobile": [
    "noun",
    "verb"
  ],
  "snowmobiles": [
    "noun"
  ],
  "snowplow": [
    "noun",
    "verb"
  ],
  "snows": [
    "noun"
  ],
  "snowstorm": [
    "noun"
  ],
  "snug": [
    "adjective",
    "noun",
    "verb"
  ],
  "snuggle": [
    "verb",
    "noun"
  ],
  "so": [
    "adverb",
    "adjective",
    "noun"
  ],
  "soak": [
    "verb",
    "noun"
  ],
  "soap": [
    "noun",
    "verb"
  ],
  "soapbox": [
    "noun",
    "verb"
  ],
  "soar": [
    "verb",
    "noun"
  ],
  "soared": [
    "verb"
  ],
  "soave": [
    "noun"
  ],
  "sobbing": [
    "noun",
    "adjective"
  ],
  "soccer": [
    "noun",
    "verb"
  ],
  "social": [
    "adjective",
    "noun"
  ],
  "socialistic": [
    "adjective"
  ],
  "sociological": [
    "adjective"
  ],
  "sociologist": [
    "noun"
  ],
  "sociology": [
    "noun"
  ],
  "sock": [
    "noun",
    "verb",
    "adjective"
  ],
  "socks": [
    "noun"
  ],
  "socrates": [
    "noun"
  ],
  "socratic": [
    "adjective",
    "noun"
  ],
  "soda": [
    "noun"
  ],
  "sofa": [
    "noun",
    "verb"
  ],
  "soft": [
    "adjective",
    "noun",
    "adverb"
  ],
  "softball": [
    "noun"
  ],
  "softballs": [
    "noun"
  ],
  "software": [
    "noun"
  ],
  "soggy": [
    "adjective"
  ],
  "soil": [
    "noun",
    "verb"
  ],
  "sold": [
    "noun"
  ],
  "soldier": [
    "noun",
    "verb"
  ],
  "soldiers": [
    "noun",
    "verb"
  ],
  "solely": [
    "adverb"
  ],
  "soliloquy": [
    "noun",
    "verb"
  ],
  "solitary": [
    "adjective",
    "noun"
  ],
  "solitude": [
    "noun"
  ],
  "solution": [
    "noun",
    "verb"
  ],
  "solved": [
    "adjective"
  ],
  "somali": [
    "adjective",
    "noun"
  ],
  "someday": [
    "adverb"
  ],
  "somersault": [
    "noun",
    "verb"
  ],
  "sometimes": [
    "adverb",
    "adjective"
  ],
  "somewhere": [
    "adverb",
    "noun"
  ],
  "son": [
    "noun",
    "verb"
  ],
  "sonata": [
    "noun"
  ],
  "song": [
    "noun"
  ],
  "songbird": [
    "noun"
  ],
  "songbirds": [
    "noun"
  ],
  "songbook": [
    "noun"
  ],
  "songbooks": [
    "noun"
  ],
  "songs": [
    "noun"
  ],
  "sonogram": [
    "noun",
    "verb"
  ],
  "soon": [
    "adverb",
    "adjective",
    "noun"
  ],
  "sooner": [
    "adverb",
    "noun"
  ],
  "soot": [
    "noun",
    "verb"
  ],
  "soothe": [
    "verb"
  ],
  "soothsayer": [
    "noun"
  ],
  "sop": [
    "noun",
    "verb"
  ],
  "sophisticates": [
    "noun"
  ],
  "sorbonne": [
    "noun"
  ],
  "sore": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "sorrow": [
    "noun",
    "verb"
  ],
  "sorus": [
    "noun"
  ],
  "sot": [
    "noun",
    "verb",
    "adjective"
  ],
  "soul": [
    "noun",
    "verb"
  ],
  "sound": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "soundtrack": [
    "noun",
    "verb"
  ],
  "soup": [
    "noun",
    "verb"
  ],
  "source": [
    "noun",
    "verb"
  ],
  "south": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "southbound": [
    "adverb",
    "adjective"
  ],
  "southeast": [
    "noun",
    "adjective",
    "adverb"
  ],
  "southernmost": [
    "adjective"
  ],
  "southpaw": [
    "noun"
  ],
  "southwest": [
    "noun",
    "adjective",
    "adverb"
  ],
  "souvenir": [
    "noun",
    "verb"
  ],
  "souvenirs": [
    "noun"
  ],
  "soviets": [
    "noun"
  ],
  "sowed": [
    "verb"
  ],
  "sowing": [
    "noun"
  ],
  "sown": [
    "noun"
  ],
  "soy": [
    "noun",
    "adjective",
    "verb"
  ],
  "soybeans": [
    "noun"
  ],
  "spa": [
    "noun"
  ],
  "space": [
    "noun",
    "verb"
  ],
  "spacecraft": [
    "noun"
  ],
  "spaceship": [
    "noun"
  ],
  "spaceships": [
    "noun"
  ],
  "spacewalk": [
    "noun",
    "verb"
  ],
  "spadework": [
    "noun"
  ],
  "spam": [
    "noun",
    "verb"
  ],
  "span": [
    "noun",
    "verb"
  ],
  "sparing": [
    "adjective",
    "noun"
  ],
  "spark": [
    "noun",
    "verb"
  ],
  "sparred": [
    "verb"
  ],
  "sparrow": [
    "noun"
  ],
  "spas": [
    "noun"
  ],
  "spat": [
    "verb",
    "noun"
  ],
  "spawn": [
    "verb",
    "noun"
  ],
  "spawns": [
    "verb",
    "noun"
  ],
  "speak": [
    "verb",
    "noun"
  ],
  "speaker": [
    "noun"
  ],
  "speakerphone": [
    "noun"
  ],
  "spear": [
    "noun",
    "verb",
    "adjective"
  ],
  "spec": [
    "noun",
    "verb",
    "adjective"
  ],
  "species": [
    "noun"
  ],
  "speck": [
    "noun",
    "verb"
  ],
  "specks": [
    "noun"
  ],
  "specs": [
    "noun"
  ],
  "spectator": [
    "noun"
  ],
  "spectre": [
    "noun"
  ],
  "spectrograph": [
    "noun"
  ],
  "spectrum": [
    "noun"
  ],
  "sped": [
    "noun"
  ],
  "speech": [
    "noun",
    "verb"
  ],
  "speed": [
    "noun",
    "verb"
  ],
  "speedboat": [
    "noun",
    "verb"
  ],
  "speedometer": [
    "noun"
  ],
  "speeds": [
    "noun"
  ],
  "speedup": [
    "noun"
  ],
  "spellbound": [
    "adjective"
  ],
  "spelling": [
    "noun"
  ],
  "spelunk": [
    "noun",
    "verb"
  ],
  "spend": [
    "verb",
    "noun"
  ],
  "spending": [
    "noun"
  ],
  "spends": [
    "verb"
  ],
  "spendthrift": [
    "noun",
    "adjective"
  ],
  "spent": [
    "adjective"
  ],
  "spewing": [
    "noun"
  ],
  "sphere": [
    "noun",
    "verb"
  ],
  "spheres": [
    "noun",
    "adjective"
  ],
  "spheroid": [
    "noun",
    "adjective"
  ],
  "sphinx": [
    "noun",
    "verb"
  ],
  "spic": [
    "noun"
  ],
  "spice": [
    "noun",
    "verb"
  ],
  "spider": [
    "noun",
    "verb"
  ],
  "spiel": [
    "noun",
    "verb"
  ],
  "spill": [
    "noun",
    "verb"
  ],
  "spilling": [
    "noun"
  ],
  "spillover": [
    "noun"
  ],
  "spin": [
    "noun",
    "verb"
  ],
  "spinach": [
    "noun"
  ],
  "spine": [
    "noun"
  ],
  "spinner": [
    "noun"
  ],
  "spirit": [
    "noun",
    "verb"
  ],
  "spiritualist": [
    "noun",
    "adjective"
  ],
  "spit": [
    "verb",
    "noun"
  ],
  "spite": [
    "noun",
    "verb"
  ],
  "spits": [
    "verb",
    "noun"
  ],
  "spitting": [
    "noun"
  ],
  "splash": [
    "noun",
    "verb"
  ],
  "splat": [
    "noun",
    "verb"
  ],
  "splattering": [
    "noun"
  ],
  "spleen": [
    "noun",
    "verb"
  ],
  "splendor": [
    "noun"
  ],
  "splice": [
    "noun",
    "verb"
  ],
  "splint": [
    "noun",
    "verb"
  ],
  "split": [
    "verb",
    "noun",
    "adjective"
  ],
  "splits": [
    "noun"
  ],
  "splitting": [
    "noun",
    "adjective"
  ],
  "spock": [
    "noun",
    "verb"
  ],
  "spokane": [
    "noun"
  ],
  "spoken": [
    "adjective"
  ],
  "spokeswoman": [
    "noun"
  ],
  "spokeswomen": [
    "noun"
  ],
  "sponsorship": [
    "noun"
  ],
  "sponsorships": [
    "noun"
  ],
  "spontaneous": [
    "adjective"
  ],
  "spool": [
    "noun",
    "verb"
  ],
  "spoon": [
    "noun",
    "verb"
  ],
  "sport": [
    "noun",
    "verb"
  ],
  "sportscaster": [
    "noun"
  ],
  "sportswriter": [
    "noun"
  ],
  "spot": [
    "noun",
    "verb",
    "adjective"
  ],
  "spotlight": [
    "noun",
    "verb"
  ],
  "spouse": [
    "noun",
    "verb"
  ],
  "spout": [
    "noun",
    "verb"
  ],
  "sprawled": [
    "adjective"
  ],
  "sprawling": [
    "adjective",
    "noun"
  ],
  "spray": [
    "noun",
    "verb"
  ],
  "sprayed": [
    "adjective"
  ],
  "sprayer": [
    "noun"
  ],
  "spraying": [
    "noun"
  ],
  "spread": [
    "verb",
    "noun"
  ],
  "spreadsheet": [
    "noun",
    "verb"
  ],
  "spring": [
    "noun",
    "verb"
  ],
  "springtime": [
    "noun"
  ],
  "sprinkle": [
    "verb",
    "noun"
  ],
  "sprinkler": [
    "noun",
    "verb"
  ],
  "sprint": [
    "noun",
    "verb"
  ],
  "sprout": [
    "verb",
    "noun"
  ],
  "spur": [
    "noun",
    "verb"
  ],
  "spurge": [
    "noun",
    "verb"
  ],
  "spurn": [
    "verb",
    "noun"
  ],
  "spurned": [
    "adjective"
  ],
  "spurred": [
    "adjective"
  ],
  "spurt": [
    "noun",
    "verb"
  ],
  "sputter": [
    "noun",
    "verb"
  ],
  "spy": [
    "noun",
    "verb"
  ],
  "spyglass": [
    "noun"
  ],
  "spying": [
    "noun"
  ],
  "squalls": [
    "noun"
  ],
  "squander": [
    "verb"
  ],
  "square": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "squaring": [
    "noun"
  ],
  "squash": [
    "noun",
    "verb"
  ],
  "squat": [
    "adjective",
    "verb",
    "noun"
  ],
  "squawking": [
    "noun"
  ],
  "squeak": [
    "noun",
    "verb"
  ],
  "squeaking": [
    "noun"
  ],
  "squeaks": [
    "noun",
    "verb"
  ],
  "squeal": [
    "noun",
    "verb"
  ],
  "squeals": [
    "noun",
    "verb"
  ],
  "squeeze": [
    "verb",
    "noun"
  ],
  "squid": [
    "noun",
    "verb"
  ],
  "squint": [
    "noun",
    "verb",
    "adjective"
  ],
  "squirrel": [
    "noun",
    "verb"
  ],
  "squish": [
    "noun",
    "verb"
  ],
  "stab": [
    "noun",
    "verb",
    "adjective"
  ],
  "stabilizer": [
    "noun"
  ],
  "stable": [
    "adjective",
    "noun",
    "verb"
  ],
  "stacked": [
    "adjective"
  ],
  "stadium": [
    "noun"
  ],
  "staff": [
    "noun",
    "verb"
  ],
  "staffed": [
    "adjective"
  ],
  "staffing": [
    "noun"
  ],
  "staffs": [
    "noun"
  ],
  "stagecraft": [
    "noun"
  ],
  "stagehands": [
    "noun"
  ],
  "stagger": [
    "verb",
    "noun"
  ],
  "staggering": [
    "adjective",
    "noun"
  ],
  "stair": [
    "noun"
  ],
  "staircase": [
    "noun",
    "verb"
  ],
  "stairwell": [
    "noun"
  ],
  "stake": [
    "noun",
    "verb"
  ],
  "stakeout": [
    "noun"
  ],
  "staking": [
    "noun"
  ],
  "stale": [
    "adjective",
    "noun",
    "verb"
  ],
  "stalingrad": [
    "noun"
  ],
  "stalk": [
    "noun",
    "verb"
  ],
  "stalked": [
    "adjective"
  ],
  "stalking": [
    "noun"
  ],
  "stall": [
    "noun",
    "verb"
  ],
  "stamp": [
    "noun",
    "verb"
  ],
  "stampede": [
    "noun",
    "verb"
  ],
  "stand": [
    "verb",
    "noun"
  ],
  "standard": [
    "adjective",
    "noun"
  ],
  "standstill": [
    "noun"
  ],
  "stanza": [
    "noun"
  ],
  "staph": [
    "noun"
  ],
  "staple": [
    "noun",
    "verb",
    "adjective"
  ],
  "star": [
    "noun",
    "verb"
  ],
  "stardust": [
    "noun"
  ],
  "stare": [
    "verb",
    "noun"
  ],
  "starer": [
    "noun"
  ],
  "starlike": [
    "adjective"
  ],
  "starred": [
    "adjective"
  ],
  "starship": [
    "noun"
  ],
  "start": [
    "verb",
    "noun",
    "adverb"
  ],
  "starts": [
    "verb",
    "noun"
  ],
  "state": [
    "noun",
    "verb",
    "adjective"
  ],
  "statecraft": [
    "noun"
  ],
  "statehouse": [
    "noun"
  ],
  "statement": [
    "noun",
    "verb",
    "adjective"
  ],
  "statesmanlike": [
    "adjective"
  ],
  "stating": [
    "noun"
  ],
  "station": [
    "noun",
    "verb"
  ],
  "stationery": [
    "noun",
    "adjective"
  ],
  "statistic": [
    "noun",
    "adjective",
    "verb"
  ],
  "statue": [
    "noun",
    "verb"
  ],
  "statues": [
    "noun"
  ],
  "statuette": [
    "noun"
  ],
  "statuettes": [
    "noun"
  ],
  "statutory": [
    "adjective"
  ],
  "staved": [
    "verb"
  ],
  "stay": [
    "verb",
    "noun",
    "adjective",
    "adverb"
  ],
  "stayed": [
    "verb"
  ],
  "staying": [
    "noun"
  ],
  "stays": [
    "noun"
  ],
  "steadfast": [
    "adjective"
  ],
  "steady": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "steak": [
    "noun",
    "verb"
  ],
  "steakhouse": [
    "noun"
  ],
  "steaks": [
    "noun"
  ],
  "steals": [
    "noun"
  ],
  "steamboat": [
    "noun",
    "verb"
  ],
  "steaming": [
    "noun",
    "adjective"
  ],
  "steams": [
    "noun",
    "verb"
  ],
  "steeds": [
    "noun"
  ],
  "steel": [
    "noun",
    "adjective",
    "verb"
  ],
  "steeled": [
    "verb"
  ],
  "steels": [
    "noun"
  ],
  "steelworks": [
    "noun"
  ],
  "steep": [
    "adjective",
    "verb",
    "noun"
  ],
  "steeper": [
    "noun"
  ],
  "steeple": [
    "noun",
    "verb"
  ],
  "steeplechase": [
    "noun",
    "verb"
  ],
  "steer": [
    "verb",
    "noun"
  ],
  "steered": [
    "verb"
  ],
  "steers": [
    "noun",
    "verb"
  ],
  "stem": [
    "noun",
    "verb"
  ],
  "stentor": [
    "noun"
  ],
  "stepchild": [
    "noun"
  ],
  "stepchildren": [
    "noun"
  ],
  "steppe": [
    "noun"
  ],
  "steps": [
    "noun"
  ],
  "stepson": [
    "noun"
  ],
  "sterility": [
    "noun"
  ],
  "sterilizer": [
    "noun"
  ],
  "sternpost": [
    "noun"
  ],
  "steroid": [
    "noun"
  ],
  "stethoscope": [
    "noun",
    "verb"
  ],
  "stew": [
    "noun",
    "verb"
  ],
  "stewed": [
    "adjective"
  ],
  "stewing": [
    "noun"
  ],
  "sticky": [
    "adjective",
    "noun",
    "verb"
  ],
  "stigma": [
    "noun"
  ],
  "stigmata": [
    "noun"
  ],
  "still": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "stillborn": [
    "adjective",
    "noun"
  ],
  "stilled": [
    "adjective"
  ],
  "stimulate": [
    "verb"
  ],
  "stimulating": [
    "adjective"
  ],
  "sting": [
    "noun",
    "verb"
  ],
  "stings": [
    "noun",
    "verb"
  ],
  "stingy": [
    "adjective"
  ],
  "stinking": [
    "adjective",
    "noun"
  ],
  "stinks": [
    "noun"
  ],
  "stirred": [
    "adjective"
  ],
  "stock": [
    "noun",
    "verb",
    "adjective"
  ],
  "stockpile": [
    "noun",
    "verb"
  ],
  "stockpiled": [
    "verb",
    "adjective"
  ],
  "stockpiles": [
    "noun"
  ],
  "stockroom": [
    "noun"
  ],
  "stocky": [
    "adjective"
  ],
  "stockyard": [
    "noun"
  ],
  "stolen": [
    "adjective",
    "noun"
  ],
  "stomach": [
    "noun",
    "verb"
  ],
  "stone": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "stonecutter": [
    "noun"
  ],
  "stonewalled": [
    "adjective"
  ],
  "stonewalling": [
    "noun"
  ],
  "stony": [
    "noun",
    "adjective"
  ],
  "stood": [
    "verb"
  ],
  "stop": [
    "verb",
    "noun"
  ],
  "stopgap": [
    "adjective",
    "noun",
    "verb"
  ],
  "stopover": [
    "noun"
  ],
  "stopwatch": [
    "noun",
    "verb"
  ],
  "store": [
    "noun",
    "verb"
  ],
  "stored": [
    "adjective"
  ],
  "storefront": [
    "noun"
  ],
  "storefronts": [
    "noun"
  ],
  "storehouse": [
    "noun",
    "verb"
  ],
  "storekeeper": [
    "noun"
  ],
  "storeroom": [
    "noun"
  ],
  "stories": [
    "noun"
  ],
  "storm": [
    "noun",
    "verb"
  ],
  "story": [
    "noun",
    "verb"
  ],
  "storybook": [
    "noun",
    "adjective"
  ],
  "storybooks": [
    "noun"
  ],
  "stoup": [
    "noun",
    "verb"
  ],
  "stove": [
    "noun",
    "verb"
  ],
  "stowed": [
    "verb"
  ],
  "straight": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "straightforward": [
    "adjective",
    "adverb"
  ],
  "stranding": [
    "noun"
  ],
  "strands": [
    "noun"
  ],
  "strange": [
    "adjective",
    "noun",
    "verb"
  ],
  "stranger": [
    "noun",
    "verb"
  ],
  "stranglehold": [
    "noun",
    "verb"
  ],
  "strap": [
    "noun",
    "verb"
  ],
  "straps": [
    "noun"
  ],
  "stratosphere": [
    "noun"
  ],
  "straw": [
    "noun",
    "adjective",
    "verb"
  ],
  "strawberry": [
    "noun",
    "adjective",
    "verb"
  ],
  "stray": [
    "noun",
    "verb",
    "adjective"
  ],
  "straying": [
    "noun"
  ],
  "strays": [
    "noun",
    "verb",
    "adjective"
  ],
  "streak": [
    "noun",
    "verb"
  ],
  "streaking": [
    "noun"
  ],
  "streaks": [
    "noun"
  ],
  "stream": [
    "noun",
    "verb"
  ],
  "streaming": [
    "noun",
    "adjective"
  ],
  "streamlined": [
    "adjective"
  ],
  "streep": [
    "noun"
  ],
  "street": [
    "noun",
    "verb",
    "adjective"
  ],
  "streetcar": [
    "noun"
  ],
  "strengthen": [
    "verb"
  ],
  "strenuous": [
    "adjective"
  ],
  "stress": [
    "noun",
    "verb"
  ],
  "stressed": [
    "adjective"
  ],
  "stretch": [
    "noun",
    "verb"
  ],
  "strewn": [
    "adjective"
  ],
  "stride": [
    "noun",
    "verb"
  ],
  "strides": [
    "noun"
  ],
  "strife": [
    "noun"
  ],
  "striker": [
    "noun"
  ],
  "string": [
    "noun",
    "verb"
  ],
  "strings": [
    "noun"
  ],
  "strip": [
    "noun",
    "verb"
  ],
  "strive": [
    "verb",
    "noun"
  ],
  "stroll": [
    "noun",
    "verb"
  ],
  "strolled": [
    "verb"
  ],
  "strong": [
    "adjective",
    "adverb",
    "noun"
  ],
  "stronger": [
    "adjective"
  ],
  "stronghold": [
    "noun"
  ],
  "strongman": [
    "noun"
  ],
  "strove": [
    "verb"
  ],
  "structure": [
    "noun",
    "verb"
  ],
  "struggle": [
    "noun",
    "verb"
  ],
  "strumming": [
    "noun"
  ],
  "strums": [
    "verb",
    "noun"
  ],
  "strung": [
    "adjective"
  ],
  "strut": [
    "noun",
    "verb",
    "adjective"
  ],
  "stuck": [
    "adjective",
    "noun"
  ],
  "student": [
    "noun",
    "adjective"
  ],
  "students": [
    "noun"
  ],
  "studio": [
    "noun"
  ],
  "studios": [
    "noun"
  ],
  "study": [
    "noun",
    "verb"
  ],
  "studying": [
    "noun"
  ],
  "stumble": [
    "verb",
    "noun"
  ],
  "stump": [
    "noun",
    "verb"
  ],
  "stun": [
    "verb",
    "noun"
  ],
  "stung": [
    "adjective"
  ],
  "stunk": [
    "verb",
    "noun"
  ],
  "stuns": [
    "verb",
    "noun"
  ],
  "stunt": [
    "noun",
    "verb"
  ],
  "stupa": [
    "noun"
  ],
  "style": [
    "noun",
    "verb"
  ],
  "styled": [
    "adjective"
  ],
  "stylistic": [
    "adjective"
  ],
  "styrofoam": [
    "noun"
  ],
  "styx": [
    "noun"
  ],
  "subdivide": [
    "verb"
  ],
  "subdivided": [
    "adjective"
  ],
  "subdivision": [
    "noun",
    "verb"
  ],
  "subdued": [
    "adjective"
  ],
  "subduing": [
    "noun"
  ],
  "subgroup": [
    "noun",
    "verb"
  ],
  "subhuman": [
    "adjective",
    "noun"
  ],
  "subject": [
    "noun",
    "adjective",
    "verb"
  ],
  "subkingdom": [
    "noun"
  ],
  "sublease": [
    "noun",
    "verb"
  ],
  "sublet": [
    "verb",
    "noun"
  ],
  "sublime": [
    "adjective",
    "noun",
    "verb"
  ],
  "submarine": [
    "noun",
    "adjective",
    "verb"
  ],
  "submarines": [
    "noun",
    "adjective",
    "verb"
  ],
  "submerge": [
    "verb"
  ],
  "submerse": [
    "verb",
    "adjective"
  ],
  "submission": [
    "noun"
  ],
  "submit": [
    "verb"
  ],
  "submits": [
    "verb"
  ],
  "submitting": [
    "noun"
  ],
  "subordinate": [
    "adjective",
    "noun",
    "verb"
  ],
  "subpoena": [
    "noun",
    "verb"
  ],
  "subscribe": [
    "verb"
  ],
  "subsequent": [
    "adjective",
    "noun"
  ],
  "subservient": [
    "adjective"
  ],
  "subsets": [
    "noun"
  ],
  "subsided": [
    "verb"
  ],
  "subsides": [
    "verb"
  ],
  "subsist": [
    "verb"
  ],
  "subsoil": [
    "noun",
    "verb"
  ],
  "subspace": [
    "noun"
  ],
  "subspaces": [
    "noun"
  ],
  "substantial": [
    "adjective",
    "noun"
  ],
  "substantiate": [
    "verb"
  ],
  "substitute": [
    "noun",
    "verb"
  ],
  "substitution": [
    "noun"
  ],
  "substrate": [
    "noun",
    "adjective",
    "verb"
  ],
  "subtract": [
    "verb"
  ],
  "subtraction": [
    "noun"
  ],
  "suburb": [
    "noun"
  ],
  "subversive": [
    "adjective",
    "noun"
  ],
  "subvert": [
    "verb",
    "noun"
  ],
  "subway": [
    "noun",
    "verb"
  ],
  "succeed": [
    "verb"
  ],
  "succeeds": [
    "verb"
  ],
  "successful": [
    "adjective"
  ],
  "succumb": [
    "verb"
  ],
  "succumbing": [
    "verb"
  ],
  "succumbs": [
    "verb"
  ],
  "such": [
    "noun"
  ],
  "sucking": [
    "noun",
    "adjective"
  ],
  "sucks": [
    "verb",
    "noun"
  ],
  "sudden": [
    "adjective",
    "adverb",
    "noun"
  ],
  "suddenly": [
    "adverb"
  ],
  "suede": [
    "noun",
    "adjective",
    "verb"
  ],
  "sues": [
    "verb",
    "noun"
  ],
  "suffer": [
    "verb"
  ],
  "suffering": [
    "noun",
    "adjective"
  ],
  "suffice": [
    "verb"
  ],
  "sufficient": [
    "adjective"
  ],
  "suffocating": [
    "adjective",
    "noun"
  ],
  "suffragette": [
    "noun"
  ],
  "suffragettes": [
    "noun"
  ],
  "suffused": [
    "adjective"
  ],
  "suffusing": [
    "verb"
  ],
  "sugar": [
    "noun",
    "verb"
  ],
  "suggest": [
    "verb"
  ],
  "suggestion": [
    "noun"
  ],
  "suggestions": [
    "noun"
  ],
  "suicide": [
    "noun",
    "verb"
  ],
  "suicides": [
    "noun",
    "verb"
  ],
  "suisse": [
    "noun"
  ],
  "suit": [
    "noun",
    "verb"
  ],
  "suitability": [
    "noun"
  ],
  "suitcase": [
    "noun",
    "verb"
  ],
  "sukiyaki": [
    "noun"
  ],
  "sulk": [
    "verb",
    "noun"
  ],
  "summary": [
    "noun",
    "adjective"
  ],
  "summer": [
    "noun",
    "verb"
  ],
  "summertime": [
    "noun"
  ],
  "summing": [
    "noun"
  ],
  "summit": [
    "noun",
    "verb"
  ],
  "sums": [
    "noun",
    "verb"
  ],
  "sun": [
    "noun",
    "verb"
  ],
  "sunbeam": [
    "noun"
  ],
  "sunbelt": [
    "noun"
  ],
  "sunburn": [
    "noun",
    "verb"
  ],
  "sunburned": [
    "adjective"
  ],
  "sunburst": [
    "noun"
  ],
  "sundays": [
    "adverb"
  ],
  "sundial": [
    "noun"
  ],
  "sundown": [
    "noun",
    "verb"
  ],
  "sunfish": [
    "noun",
    "verb"
  ],
  "sunflower": [
    "noun"
  ],
  "sunflowers": [
    "noun"
  ],
  "sung": [
    "noun"
  ],
  "sunglass": [
    "noun"
  ],
  "sunglasses": [
    "noun"
  ],
  "sunlight": [
    "noun",
    "verb"
  ],
  "sunlit": [
    "adjective"
  ],
  "sunny": [
    "adjective",
    "noun",
    "adverb"
  ],
  "sunrise": [
    "noun",
    "verb"
  ],
  "sunroom": [
    "noun"
  ],
  "sunscreen": [
    "noun",
    "verb"
  ],
  "sunset": [
    "noun",
    "verb"
  ],
  "sunsets": [
    "noun"
  ],
  "suntan": [
    "noun",
    "verb"
  ],
  "sup": [
    "noun",
    "verb",
    "adjective"
  ],
  "supercharge": [
    "noun",
    "verb"
  ],
  "superhuman": [
    "adjective",
    "noun"
  ],
  "superimposed": [
    "adjective"
  ],
  "superintendent": [
    "noun",
    "adjective"
  ],
  "superior": [
    "adjective",
    "noun"
  ],
  "superpower": [
    "noun",
    "verb"
  ],
  "superpowers": [
    "noun"
  ],
  "supersede": [
    "verb",
    "noun"
  ],
  "supersedes": [
    "verb"
  ],
  "supersonic": [
    "adjective",
    "noun"
  ],
  "superstar": [
    "noun"
  ],
  "superstition": [
    "noun"
  ],
  "supervise": [
    "verb"
  ],
  "supplant": [
    "verb"
  ],
  "supplants": [
    "verb"
  ],
  "supplemental": [
    "adjective",
    "noun"
  ],
  "supplemented": [
    "verb"
  ],
  "supplier": [
    "noun"
  ],
  "supplies": [
    "noun"
  ],
  "supply": [
    "noun",
    "verb",
    "adverb"
  ],
  "supplying": [
    "noun"
  ],
  "support": [
    "noun",
    "verb"
  ],
  "suppose": [
    "verb"
  ],
  "suppress": [
    "verb"
  ],
  "suppressed": [
    "adjective"
  ],
  "suppressing": [
    "noun"
  ],
  "suppression": [
    "noun"
  ],
  "suppressor": [
    "noun"
  ],
  "surcease": [
    "noun",
    "verb"
  ],
  "surcharge": [
    "noun",
    "verb"
  ],
  "surely": [
    "adverb"
  ],
  "surf": [
    "noun",
    "verb"
  ],
  "surfboard": [
    "noun",
    "verb"
  ],
  "surfing": [
    "noun"
  ],
  "surgery": [
    "noun"
  ],
  "surinam": [
    "noun"
  ],
  "surname": [
    "noun",
    "verb"
  ],
  "surpass": [
    "verb"
  ],
  "surpassed": [
    "verb"
  ],
  "surprise": [
    "noun",
    "verb"
  ],
  "surprised": [
    "adjective"
  ],
  "surreal": [
    "adjective",
    "noun"
  ],
  "surrealistic": [
    "adjective"
  ],
  "surrender": [
    "noun",
    "verb"
  ],
  "surreptitious": [
    "adjective"
  ],
  "surrounds": [
    "noun"
  ],
  "surveying": [
    "noun"
  ],
  "surveyor": [
    "noun"
  ],
  "survival": [
    "noun"
  ],
  "survive": [
    "verb"
  ],
  "survivor": [
    "noun"
  ],
  "sus": [
    "noun",
    "adjective",
    "verb"
  ],
  "suspect": [
    "verb",
    "noun",
    "adjective"
  ],
  "suspend": [
    "verb"
  ],
  "suspender": [
    "noun"
  ],
  "suspends": [
    "verb"
  ],
  "suspense": [
    "noun",
    "adjective"
  ],
  "suspension": [
    "noun"
  ],
  "suspicion": [
    "noun",
    "verb"
  ],
  "suspicious": [
    "adjective"
  ],
  "susquehanna": [
    "noun"
  ],
  "sustain": [
    "verb",
    "noun"
  ],
  "suture": [
    "noun",
    "verb"
  ],
  "swallow": [
    "verb",
    "noun"
  ],
  "swamp": [
    "noun",
    "verb"
  ],
  "swap": [
    "noun",
    "verb"
  ],
  "swapped": [
    "verb"
  ],
  "swarm": [
    "noun",
    "verb"
  ],
  "swat": [
    "noun",
    "verb"
  ],
  "sway": [
    "noun",
    "verb"
  ],
  "swaying": [
    "noun"
  ],
  "sweater": [
    "noun",
    "verb"
  ],
  "sweats": [
    "noun"
  ],
  "sweatshirt": [
    "noun"
  ],
  "sweatshop": [
    "noun"
  ],
  "swedes": [
    "noun"
  ],
  "sweep": [
    "noun",
    "verb"
  ],
  "sweepstakes": [
    "noun"
  ],
  "sweetly": [
    "adverb"
  ],
  "swerve": [
    "verb",
    "noun"
  ],
  "swift": [
    "adjective",
    "noun",
    "adverb"
  ],
  "swill": [
    "noun",
    "verb"
  ],
  "swim": [
    "verb",
    "noun"
  ],
  "swimming": [
    "noun"
  ],
  "swimsuit": [
    "noun"
  ],
  "swindle": [
    "noun",
    "verb"
  ],
  "swine": [
    "noun"
  ],
  "swing": [
    "noun",
    "verb"
  ],
  "swings": [
    "noun",
    "verb"
  ],
  "swirl": [
    "noun",
    "verb"
  ],
  "swirled": [
    "adjective"
  ],
  "swirls": [
    "noun",
    "verb"
  ],
  "swish": [
    "noun",
    "adjective",
    "verb"
  ],
  "switch": [
    "noun",
    "verb",
    "adjective"
  ],
  "switchboard": [
    "noun",
    "verb"
  ],
  "swoon": [
    "noun",
    "verb"
  ],
  "sword": [
    "noun",
    "verb"
  ],
  "swore": [
    "verb"
  ],
  "swum": [
    "verb"
  ],
  "swung": [
    "verb"
  ],
  "sycophant": [
    "noun",
    "verb"
  ],
  "syllabus": [
    "noun"
  ],
  "symbol": [
    "noun",
    "verb"
  ],
  "symbolic": [
    "adjective"
  ],
  "symbolical": [
    "adjective"
  ],
  "symbolism": [
    "noun"
  ],
  "symmetry": [
    "noun"
  ],
  "sympathetic": [
    "adjective",
    "noun"
  ],
  "sympathizer": [
    "noun"
  ],
  "symphonic": [
    "adjective"
  ],
  "symphony": [
    "noun"
  ],
  "symposium": [
    "noun"
  ],
  "symptom": [
    "noun"
  ],
  "symptomatic": [
    "adjective",
    "noun"
  ],
  "synchronic": [
    "adjective"
  ],
  "synergetic": [
    "adjective"
  ],
  "synonym": [
    "noun",
    "verb"
  ],
  "synonymous": [
    "adjective"
  ],
  "syntax": [
    "noun"
  ],
  "syntheses": [
    "noun"
  ],
  "synthesis": [
    "noun"
  ],
  "synthesizer": [
    "noun"
  ],
  "synthetic": [
    "adjective",
    "noun"
  ],
  "syringe": [
    "noun",
    "verb"
  ],
  "syrup": [
    "noun",
    "verb"
  ],
  "system": [
    "noun"
  ],
  "systematic": [
    "adjective",
    "adverb"
  ],
  "systematize": [
    "verb"
  ],
  "table": [
    "noun",
    "verb"
  ],
  "tablecloth": [
    "noun"
  ],
  "tablespoon": [
    "noun"
  ],
  "tablet": [
    "noun",
    "verb"
  ],
  "tabletop": [
    "noun",
    "adjective",
    "verb"
  ],
  "taboos": [
    "noun"
  ],
  "tachycardia": [
    "noun"
  ],
  "taciturn": [
    "adjective"
  ],
  "tacked": [
    "verb"
  ],
  "tacking": [
    "noun"
  ],
  "tacks": [
    "noun"
  ],
  "taco": [
    "noun",
    "verb"
  ],
  "tact": [
    "noun",
    "verb"
  ],
  "tad": [
    "noun"
  ],
  "tadpole": [
    "noun"
  ],
  "tail": [
    "noun",
    "verb",
    "adjective"
  ],
  "tailor": [
    "noun",
    "verb"
  ],
  "tailpipe": [
    "noun",
    "verb"
  ],
  "tailspin": [
    "noun",
    "verb"
  ],
  "taiwan": [
    "noun"
  ],
  "taiwanese": [
    "adjective",
    "noun"
  ],
  "take": [
    "verb",
    "noun"
  ],
  "takeout": [
    "noun",
    "adjective"
  ],
  "takeover": [
    "noun",
    "verb"
  ],
  "tale": [
    "noun",
    "verb"
  ],
  "talk": [
    "verb",
    "noun"
  ],
  "talks": [
    "noun"
  ],
  "tall": [
    "adjective",
    "noun"
  ],
  "tame": [
    "adjective",
    "verb",
    "noun"
  ],
  "tamil": [
    "noun",
    "adjective"
  ],
  "tamp": [
    "verb"
  ],
  "tan": [
    "noun",
    "adjective",
    "verb"
  ],
  "tandem": [
    "noun",
    "adverb",
    "adjective",
    "verb"
  ],
  "tandoor": [
    "noun"
  ],
  "tangelo": [
    "noun"
  ],
  "tangential": [
    "adjective"
  ],
  "tangerine": [
    "noun",
    "adjective"
  ],
  "tangerines": [
    "noun"
  ],
  "tanned": [
    "adjective"
  ],
  "tap": [
    "noun",
    "verb"
  ],
  "tape": [
    "noun",
    "verb"
  ],
  "tapestry": [
    "noun",
    "verb"
  ],
  "tar": [
    "noun",
    "verb"
  ],
  "target": [
    "noun",
    "verb"
  ],
  "tarheel": [
    "noun"
  ],
  "tarmac": [
    "noun",
    "verb"
  ],
  "tarred": [
    "verb",
    "adjective"
  ],
  "tart": [
    "noun",
    "adjective",
    "verb"
  ],
  "tarzan": [
    "noun",
    "verb"
  ],
  "tasked": [
    "verb"
  ],
  "tasking": [
    "noun"
  ],
  "taskmaster": [
    "noun"
  ],
  "tassel": [
    "noun",
    "verb"
  ],
  "taste": [
    "noun",
    "verb",
    "adjective"
  ],
  "tater": [
    "noun"
  ],
  "tatter": [
    "noun",
    "verb"
  ],
  "tattoo": [
    "noun",
    "verb"
  ],
  "tattooed": [
    "adjective"
  ],
  "tattooing": [
    "noun"
  ],
  "tattoos": [
    "noun",
    "verb"
  ],
  "taunted": [
    "verb"
  ],
  "taut": [
    "adjective",
    "verb"
  ],
  "tavern": [
    "noun"
  ],
  "taxi": [
    "noun",
    "verb"
  ],
  "taxicab": [
    "noun",
    "verb"
  ],
  "taxpaying": [
    "noun",
    "adjective"
  ],
  "tea": [
    "noun",
    "verb",
    "adjective"
  ],
  "teach": [
    "verb",
    "noun"
  ],
  "teacher": [
    "noun"
  ],
  "teaching": [
    "noun"
  ],
  "teacup": [
    "noun",
    "adjective"
  ],
  "teak": [
    "noun",
    "adjective"
  ],
  "team": [
    "noun",
    "verb"
  ],
  "teaming": [
    "noun"
  ],
  "teams": [
    "noun",
    "verb"
  ],
  "teapot": [
    "noun"
  ],
  "tear": [
    "verb",
    "noun"
  ],
  "tears": [
    "noun"
  ],
  "teaspoon": [
    "noun",
    "verb"
  ],
  "tec": [
    "noun"
  ],
  "technician": [
    "noun"
  ],
  "technique": [
    "noun"
  ],
  "techniques": [
    "noun"
  ],
  "technocrat": [
    "noun"
  ],
  "technologist": [
    "noun"
  ],
  "technology": [
    "noun"
  ],
  "teddy": [
    "noun"
  ],
  "tedium": [
    "noun"
  ],
  "teeming": [
    "adjective"
  ],
  "teen": [
    "noun",
    "adjective",
    "verb"
  ],
  "teenager": [
    "noun"
  ],
  "teens": [
    "noun"
  ],
  "teeter": [
    "noun",
    "verb"
  ],
  "teeth": [
    "noun",
    "verb"
  ],
  "telecast": [
    "noun",
    "verb"
  ],
  "telegram": [
    "noun",
    "verb"
  ],
  "telegraph": [
    "noun",
    "verb"
  ],
  "telegraphed": [
    "verb"
  ],
  "telephone": [
    "noun",
    "verb"
  ],
  "telephonic": [
    "adjective"
  ],
  "telephony": [
    "noun"
  ],
  "teleport": [
    "noun",
    "verb"
  ],
  "telescope": [
    "noun",
    "verb"
  ],
  "television": [
    "noun",
    "verb"
  ],
  "telex": [
    "noun",
    "verb"
  ],
  "telexed": [
    "verb",
    "noun"
  ],
  "tells": [
    "verb"
  ],
  "telltale": [
    "adjective",
    "noun"
  ],
  "temerity": [
    "noun"
  ],
  "temper": [
    "noun",
    "verb"
  ],
  "temperamental": [
    "adjective"
  ],
  "temperature": [
    "noun"
  ],
  "temple": [
    "noun",
    "verb"
  ],
  "tempo": [
    "noun"
  ],
  "temporary": [
    "adjective",
    "noun"
  ],
  "ten": [
    "noun"
  ],
  "tenacious": [
    "adjective"
  ],
  "tenacity": [
    "noun"
  ],
  "tend": [
    "verb"
  ],
  "tends": [
    "verb"
  ],
  "tenfold": [
    "adverb",
    "adjective",
    "verb"
  ],
  "tennessean": [
    "noun",
    "adjective"
  ],
  "tennis": [
    "noun",
    "verb"
  ],
  "tenrecs": [
    "noun"
  ],
  "tensiometer": [
    "noun"
  ],
  "tension": [
    "noun",
    "verb"
  ],
  "tent": [
    "noun",
    "verb"
  ],
  "tenting": [
    "noun"
  ],
  "tenuous": [
    "adjective"
  ],
  "teriyaki": [
    "noun"
  ],
  "term": [
    "noun",
    "adjective",
    "verb"
  ],
  "terminate": [
    "verb",
    "adjective"
  ],
  "terminator": [
    "noun"
  ],
  "terminology": [
    "noun"
  ],
  "terms": [
    "noun",
    "adjective",
    "verb"
  ],
  "terrace": [
    "noun",
    "verb"
  ],
  "terrain": [
    "noun"
  ],
  "terrific": [
    "adjective"
  ],
  "terrified": [
    "adjective"
  ],
  "terrifying": [
    "adjective"
  ],
  "territory": [
    "noun"
  ],
  "terror": [
    "noun",
    "adjective"
  ],
  "terse": [
    "adjective"
  ],
  "test": [
    "noun",
    "verb"
  ],
  "testified": [
    "verb"
  ],
  "testify": [
    "verb"
  ],
  "testifying": [
    "verb"
  ],
  "testimony": [
    "noun"
  ],
  "testosterone": [
    "noun"
  ],
  "tests": [
    "noun"
  ],
  "text": [
    "noun",
    "verb"
  ],
  "textbook": [
    "noun",
    "adjective"
  ],
  "textbooks": [
    "noun"
  ],
  "textile": [
    "noun",
    "adjective"
  ],
  "textiles": [
    "noun",
    "adjective"
  ],
  "textual": [
    "adjective"
  ],
  "texture": [
    "noun",
    "verb",
    "adjective"
  ],
  "thailand": [
    "noun"
  ],
  "thaw": [
    "noun",
    "verb"
  ],
  "thaws": [
    "noun",
    "verb"
  ],
  "theater": [
    "noun"
  ],
  "theft": [
    "noun"
  ],
  "thematic": [
    "adjective",
    "noun"
  ],
  "theme": [
    "noun",
    "verb"
  ],
  "themes": [
    "noun",
    "verb"
  ],
  "theming": [
    "noun"
  ],
  "then": [
    "adverb",
    "adjective",
    "noun"
  ],
  "thence": [
    "adverb"
  ],
  "theologian": [
    "noun"
  ],
  "theology": [
    "noun"
  ],
  "theoretical": [
    "adjective"
  ],
  "theoretically": [
    "adverb"
  ],
  "theory": [
    "noun"
  ],
  "therapy": [
    "noun",
    "verb"
  ],
  "there": [
    "adverb",
    "noun"
  ],
  "therefore": [
    "adverb"
  ],
  "therein": [
    "adverb"
  ],
  "thereon": [
    "adverb"
  ],
  "therm": [
    "noun",
    "verb"
  ],
  "thermometer": [
    "noun"
  ],
  "thermoplastic": [
    "adjective",
    "noun"
  ],
  "thermosetting": [
    "adjective"
  ],
  "thermostat": [
    "noun"
  ],
  "thesaurus": [
    "noun"
  ],
  "thick": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "thicket": [
    "noun"
  ],
  "thickly": [
    "adverb"
  ],
  "thief": [
    "noun"
  ],
  "thieve": [
    "verb"
  ],
  "thieving": [
    "adjective",
    "noun"
  ],
  "thighs": [
    "noun"
  ],
  "thimble": [
    "noun",
    "verb"
  ],
  "thin": [
    "adjective",
    "verb",
    "noun",
    "adverb"
  ],
  "thing": [
    "noun",
    "verb"
  ],
  "thingamabob": [
    "noun"
  ],
  "think": [
    "verb",
    "noun"
  ],
  "thinner": [
    "noun"
  ],
  "third": [
    "adjective",
    "noun",
    "verb"
  ],
  "thirds": [
    "noun"
  ],
  "thirst": [
    "noun",
    "verb"
  ],
  "thirty": [
    "noun"
  ],
  "thistle": [
    "noun"
  ],
  "thither": [
    "adverb",
    "adjective"
  ],
  "thorn": [
    "noun",
    "verb"
  ],
  "thoroughbred": [
    "adjective",
    "noun"
  ],
  "though": [
    "adverb",
    "verb"
  ],
  "thoughts": [
    "noun"
  ],
  "thousand": [
    "noun",
    "adjective"
  ],
  "thousands": [
    "noun"
  ],
  "thread": [
    "noun",
    "verb"
  ],
  "threaten": [
    "verb"
  ],
  "threatened": [
    "adjective"
  ],
  "three": [
    "noun"
  ],
  "threefold": [
    "adjective",
    "verb",
    "adverb",
    "noun"
  ],
  "threes": [
    "noun"
  ],
  "thresh": [
    "verb"
  ],
  "threshold": [
    "noun"
  ],
  "threw": [
    "verb"
  ],
  "thrice": [
    "adverb"
  ],
  "thrill": [
    "noun",
    "verb"
  ],
  "thrilling": [
    "adjective",
    "noun"
  ],
  "thrips": [
    "noun"
  ],
  "throb": [
    "noun",
    "verb"
  ],
  "thrombolytic": [
    "adjective",
    "noun"
  ],
  "throne": [
    "noun",
    "verb"
  ],
  "throng": [
    "noun",
    "verb",
    "adjective"
  ],
  "throughput": [
    "noun"
  ],
  "throve": [
    "verb"
  ],
  "throw": [
    "verb",
    "noun"
  ],
  "thrown": [
    "adjective"
  ],
  "throws": [
    "verb"
  ],
  "thumb": [
    "noun",
    "verb"
  ],
  "thumbing": [
    "noun"
  ],
  "thumbs": [
    "noun"
  ],
  "thump": [
    "noun",
    "verb"
  ],
  "thunder": [
    "noun",
    "verb"
  ],
  "thunderbird": [
    "noun"
  ],
  "thunderstruck": [
    "adjective"
  ],
  "thwart": [
    "verb",
    "adjective",
    "noun",
    "adverb"
  ],
  "thwarts": [
    "verb",
    "noun"
  ],
  "thyme": [
    "noun"
  ],
  "tibet": [
    "noun"
  ],
  "tic": [
    "noun",
    "verb"
  ],
  "ticket": [
    "noun",
    "verb"
  ],
  "tickets": [
    "noun"
  ],
  "tickle": [
    "verb",
    "noun",
    "adverb",
    "adjective"
  ],
  "ticks": [
    "noun",
    "verb"
  ],
  "tics": [
    "noun"
  ],
  "tidbit": [
    "noun"
  ],
  "tide": [
    "noun",
    "verb"
  ],
  "tides": [
    "noun",
    "adverb"
  ],
  "tidewater": [
    "noun"
  ],
  "tie": [
    "noun",
    "verb"
  ],
  "tied": [
    "adjective"
  ],
  "ties": [
    "noun"
  ],
  "tiger": [
    "noun"
  ],
  "tight": [
    "adjective",
    "adverb",
    "verb"
  ],
  "tightrope": [
    "noun",
    "verb"
  ],
  "tightwad": [
    "noun"
  ],
  "tike": [
    "noun"
  ],
  "tile": [
    "noun",
    "verb"
  ],
  "tiled": [
    "adjective"
  ],
  "tiles": [
    "noun"
  ],
  "tilling": [
    "noun"
  ],
  "tilt": [
    "noun",
    "verb"
  ],
  "timber": [
    "noun",
    "verb"
  ],
  "timberlands": [
    "noun"
  ],
  "time": [
    "noun",
    "verb"
  ],
  "timeline": [
    "noun",
    "verb"
  ],
  "timepiece": [
    "noun"
  ],
  "timer": [
    "noun"
  ],
  "timid": [
    "adjective"
  ],
  "tinderbox": [
    "noun"
  ],
  "tint": [
    "noun",
    "verb"
  ],
  "tiny": [
    "adjective",
    "noun"
  ],
  "tiptoe": [
    "noun",
    "verb",
    "adjective"
  ],
  "tiptoeing": [
    "verb"
  ],
  "tire": [
    "noun",
    "verb"
  ],
  "tired": [
    "adjective"
  ],
  "tires": [
    "noun"
  ],
  "tissue": [
    "noun",
    "verb"
  ],
  "tissues": [
    "noun"
  ],
  "tit": [
    "noun",
    "verb"
  ],
  "tits": [
    "noun",
    "adjective"
  ],
  "tizzy": [
    "noun"
  ],
  "toad": [
    "noun",
    "verb"
  ],
  "toaster": [
    "noun"
  ],
  "toastmaster": [
    "noun"
  ],
  "today": [
    "noun",
    "adverb",
    "adjective"
  ],
  "toe": [
    "noun",
    "verb"
  ],
  "toehold": [
    "noun"
  ],
  "toeing": [
    "noun"
  ],
  "toenail": [
    "noun",
    "verb"
  ],
  "toes": [
    "adverb",
    "noun"
  ],
  "toff": [
    "noun"
  ],
  "toil": [
    "noun",
    "verb"
  ],
  "toilet": [
    "noun",
    "verb"
  ],
  "token": [
    "noun",
    "adjective",
    "verb"
  ],
  "told": [
    "noun"
  ],
  "tolerant": [
    "adjective",
    "noun"
  ],
  "tolerate": [
    "verb"
  ],
  "toll": [
    "noun",
    "verb"
  ],
  "tolled": [
    "verb"
  ],
  "tolstoy": [
    "noun"
  ],
  "tomboy": [
    "noun"
  ],
  "tombstone": [
    "noun",
    "verb"
  ],
  "tomcat": [
    "noun",
    "verb"
  ],
  "tomorrow": [
    "noun",
    "adverb"
  ],
  "tonality": [
    "noun"
  ],
  "tongue": [
    "noun",
    "verb"
  ],
  "tonight": [
    "adverb",
    "noun"
  ],
  "tonnes": [
    "noun"
  ],
  "tons": [
    "noun"
  ],
  "too": [
    "adverb"
  ],
  "took": [
    "noun"
  ],
  "toot": [
    "noun",
    "verb"
  ],
  "toothbrush": [
    "noun",
    "verb"
  ],
  "toothlike": [
    "adjective"
  ],
  "toothpick": [
    "noun",
    "verb"
  ],
  "toothpicks": [
    "noun"
  ],
  "top": [
    "noun",
    "adjective",
    "verb",
    "adverb"
  ],
  "topaz": [
    "noun",
    "adjective"
  ],
  "topknot": [
    "noun"
  ],
  "topological": [
    "adjective"
  ],
  "topped": [
    "adjective"
  ],
  "topple": [
    "verb",
    "noun"
  ],
  "topsoil": [
    "noun",
    "verb"
  ],
  "torch": [
    "noun",
    "verb"
  ],
  "torchlight": [
    "noun"
  ],
  "tore": [
    "noun",
    "adjective"
  ],
  "torment": [
    "noun",
    "verb"
  ],
  "torn": [
    "adjective"
  ],
  "tornado": [
    "noun",
    "verb"
  ],
  "torpedoed": [
    "verb"
  ],
  "torpedoing": [
    "noun"
  ],
  "torrential": [
    "adjective"
  ],
  "tort": [
    "noun",
    "adjective"
  ],
  "torte": [
    "noun"
  ],
  "tortilla": [
    "noun"
  ],
  "torts": [
    "noun"
  ],
  "torture": [
    "noun",
    "verb"
  ],
  "tot": [
    "noun",
    "verb"
  ],
  "total": [
    "adjective",
    "noun",
    "verb"
  ],
  "totality": [
    "noun"
  ],
  "touch": [
    "noun",
    "verb"
  ],
  "touchdown": [
    "noun"
  ],
  "touched": [
    "adjective"
  ],
  "tourette": [
    "verb"
  ],
  "touring": [
    "noun",
    "adjective"
  ],
  "tournament": [
    "noun"
  ],
  "tours": [
    "noun"
  ],
  "tow": [
    "noun",
    "verb"
  ],
  "towed": [
    "verb"
  ],
  "towel": [
    "noun",
    "verb"
  ],
  "tower": [
    "noun",
    "verb"
  ],
  "towing": [
    "noun"
  ],
  "town": [
    "noun"
  ],
  "townsfolk": [
    "noun"
  ],
  "townspeople": [
    "noun"
  ],
  "toxicological": [
    "adjective"
  ],
  "toxicologist": [
    "noun"
  ],
  "toy": [
    "noun",
    "verb",
    "adjective"
  ],
  "toyed": [
    "verb"
  ],
  "track": [
    "noun",
    "verb"
  ],
  "tracked": [
    "adjective"
  ],
  "tract": [
    "noun",
    "verb"
  ],
  "tractor": [
    "noun",
    "verb"
  ],
  "trade": [
    "noun",
    "verb",
    "adjective"
  ],
  "trademark": [
    "noun",
    "verb",
    "adjective"
  ],
  "tradeoff": [
    "noun"
  ],
  "tradition": [
    "noun",
    "verb"
  ],
  "traditional": [
    "adjective",
    "noun"
  ],
  "traffic": [
    "noun",
    "verb",
    "adjective"
  ],
  "tragedy": [
    "noun"
  ],
  "trail": [
    "noun",
    "verb"
  ],
  "trailblazer": [
    "noun"
  ],
  "train": [
    "noun",
    "verb"
  ],
  "training": [
    "noun"
  ],
  "traitor": [
    "noun",
    "verb",
    "adjective"
  ],
  "tramontana": [
    "noun"
  ],
  "trample": [
    "verb",
    "noun"
  ],
  "trampoline": [
    "noun",
    "verb"
  ],
  "tranquility": [
    "noun"
  ],
  "tranquillity": [
    "noun"
  ],
  "transact": [
    "verb"
  ],
  "transcend": [
    "verb"
  ],
  "transcendence": [
    "noun"
  ],
  "transcendent": [
    "adjective",
    "noun"
  ],
  "transcendental": [
    "adjective",
    "noun"
  ],
  "transcends": [
    "verb"
  ],
  "transcontinental": [
    "noun",
    "adjective"
  ],
  "transfer": [
    "noun",
    "verb"
  ],
  "transfix": [
    "verb",
    "noun"
  ],
  "transform": [
    "verb",
    "noun"
  ],
  "transformer": [
    "noun"
  ],
  "transfused": [
    "verb",
    "adjective"
  ],
  "transgressing": [
    "verb"
  ],
  "transgression": [
    "noun"
  ],
  "transgressor": [
    "noun"
  ],
  "transition": [
    "noun",
    "verb"
  ],
  "transitional": [
    "adjective"
  ],
  "transitory": [
    "adjective"
  ],
  "translating": [
    "verb",
    "noun"
  ],
  "translation": [
    "noun"
  ],
  "translator": [
    "noun"
  ],
  "transmission": [
    "noun"
  ],
  "transmit": [
    "verb"
  ],
  "transmits": [
    "verb"
  ],
  "transmittal": [
    "noun"
  ],
  "transmitting": [
    "noun"
  ],
  "transoceanic": [
    "adjective"
  ],
  "transpire": [
    "verb"
  ],
  "transplant": [
    "noun",
    "verb"
  ],
  "transports": [
    "noun",
    "verb"
  ],
  "transposed": [
    "adjective"
  ],
  "transvaal": [
    "noun"
  ],
  "transverse": [
    "noun",
    "adjective",
    "verb"
  ],
  "trap": [
    "noun",
    "verb"
  ],
  "trapeze": [
    "noun",
    "verb"
  ],
  "travel": [
    "noun",
    "verb"
  ],
  "traveler": [
    "noun"
  ],
  "travelogue": [
    "noun"
  ],
  "tray": [
    "noun",
    "verb"
  ],
  "trays": [
    "noun"
  ],
  "tread": [
    "verb",
    "noun"
  ],
  "treadmill": [
    "noun",
    "verb"
  ],
  "treadwheel": [
    "noun"
  ],
  "treason": [
    "noun"
  ],
  "treasonous": [
    "adjective"
  ],
  "treasure": [
    "noun",
    "verb"
  ],
  "treat": [
    "verb",
    "noun"
  ],
  "treated": [
    "adjective"
  ],
  "treater": [
    "noun"
  ],
  "treating": [
    "noun"
  ],
  "treatment": [
    "noun"
  ],
  "treaty": [
    "noun",
    "verb"
  ],
  "tree": [
    "noun",
    "verb"
  ],
  "trek": [
    "noun",
    "verb",
    "adjective"
  ],
  "treks": [
    "noun"
  ],
  "tremble": [
    "verb",
    "noun"
  ],
  "tremor": [
    "noun",
    "verb"
  ],
  "trench": [
    "noun",
    "verb"
  ],
  "trend": [
    "noun",
    "verb"
  ],
  "trendiest": [
    "adjective",
    "noun"
  ],
  "trends": [
    "noun"
  ],
  "trespass": [
    "noun",
    "verb"
  ],
  "triad": [
    "noun"
  ],
  "trial": [
    "noun",
    "verb",
    "adjective"
  ],
  "triassic": [
    "noun",
    "adjective"
  ],
  "tribe": [
    "noun",
    "verb"
  ],
  "tribute": [
    "noun",
    "verb"
  ],
  "trick": [
    "noun",
    "verb",
    "adjective"
  ],
  "tricky": [
    "adjective"
  ],
  "tricycle": [
    "noun",
    "verb"
  ],
  "tries": [
    "verb"
  ],
  "trig": [
    "noun",
    "adjective",
    "verb"
  ],
  "triglycerides": [
    "noun"
  ],
  "trilogy": [
    "noun"
  ],
  "trimester": [
    "noun"
  ],
  "trip": [
    "noun",
    "verb",
    "adjective"
  ],
  "triplex": [
    "noun",
    "adjective",
    "verb"
  ],
  "tripod": [
    "noun",
    "verb"
  ],
  "tripper": [
    "noun"
  ],
  "trireme": [
    "noun"
  ],
  "triremes": [
    "noun"
  ],
  "triumph": [
    "noun",
    "verb"
  ],
  "trod": [
    "verb",
    "noun"
  ],
  "trombone": [
    "noun",
    "verb"
  ],
  "troops": [
    "noun"
  ],
  "trophy": [
    "noun",
    "verb"
  ],
  "tropopause": [
    "noun"
  ],
  "trot": [
    "noun",
    "verb"
  ],
  "troubadour": [
    "noun"
  ],
  "trouble": [
    "noun",
    "verb"
  ],
  "troubleshooter": [
    "noun"
  ],
  "truce": [
    "noun",
    "verb"
  ],
  "truck": [
    "noun",
    "verb"
  ],
  "trucked": [
    "adjective"
  ],
  "trucking": [
    "noun"
  ],
  "true": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "trumpet": [
    "noun",
    "verb"
  ],
  "trust": [
    "noun",
    "verb",
    "adjective"
  ],
  "trustees": [
    "noun"
  ],
  "trustworthy": [
    "adjective"
  ],
  "truth": [
    "noun",
    "verb"
  ],
  "try": [
    "verb",
    "noun",
    "adjective"
  ],
  "tryout": [
    "noun"
  ],
  "tryst": [
    "noun",
    "verb"
  ],
  "tsar": [
    "noun"
  ],
  "tsunami": [
    "noun"
  ],
  "tucking": [
    "noun"
  ],
  "tucson": [
    "noun"
  ],
  "tuesdays": [
    "adverb"
  ],
  "tug": [
    "noun",
    "verb"
  ],
  "tugboat": [
    "noun"
  ],
  "tuition": [
    "noun"
  ],
  "tumble": [
    "verb",
    "noun"
  ],
  "tundra": [
    "noun"
  ],
  "tune": [
    "noun",
    "verb"
  ],
  "tunnel": [
    "noun",
    "verb"
  ],
  "turboprop": [
    "noun"
  ],
  "turbulent": [
    "adjective"
  ],
  "turing": [
    "noun"
  ],
  "turkmen": [
    "noun",
    "adjective"
  ],
  "turmeric": [
    "noun"
  ],
  "turmoil": [
    "noun",
    "verb"
  ],
  "turn": [
    "verb",
    "noun"
  ],
  "turnaround": [
    "noun"
  ],
  "turnarounds": [
    "noun"
  ],
  "turncoat": [
    "noun",
    "verb"
  ],
  "turndown": [
    "noun",
    "adjective"
  ],
  "turning": [
    "noun"
  ],
  "turnout": [
    "noun"
  ],
  "turnover": [
    "noun",
    "adjective"
  ],
  "turnpike": [
    "noun",
    "verb"
  ],
  "turnstile": [
    "noun"
  ],
  "turnstiles": [
    "noun"
  ],
  "turntable": [
    "noun",
    "verb"
  ],
  "turtle": [
    "noun",
    "verb"
  ],
  "turtleneck": [
    "noun"
  ],
  "turtlenecks": [
    "noun"
  ],
  "tut": [
    "noun",
    "verb"
  ],
  "tutorial": [
    "noun",
    "adjective"
  ],
  "twain": [
    "noun",
    "verb",
    "adjective"
  ],
  "twat": [
    "noun",
    "verb"
  ],
  "tweak": [
    "verb",
    "noun"
  ],
  "tweaking": [
    "noun"
  ],
  "tweaks": [
    "noun",
    "verb"
  ],
  "tweed": [
    "noun"
  ],
  "tweezer": [
    "noun",
    "adjective",
    "verb"
  ],
  "twenty": [
    "noun"
  ],
  "twilight": [
    "noun",
    "adjective",
    "verb"
  ],
  "twill": [
    "noun",
    "verb"
  ],
  "twin": [
    "noun",
    "adjective",
    "verb"
  ],
  "twirl": [
    "verb",
    "noun"
  ],
  "twirled": [
    "verb"
  ],
  "twirls": [
    "verb",
    "noun"
  ],
  "twist": [
    "noun",
    "verb"
  ],
  "twitch": [
    "noun",
    "verb"
  ],
  "twofold": [
    "adjective",
    "adverb"
  ],
  "twos": [
    "noun",
    "verb"
  ],
  "tycoon": [
    "noun"
  ],
  "tying": [
    "noun"
  ],
  "tyke": [
    "noun"
  ],
  "tympanic": [
    "adjective"
  ],
  "typecast": [
    "verb",
    "noun"
  ],
  "typeface": [
    "noun"
  ],
  "typesetting": [
    "noun"
  ],
  "typewriting": [
    "noun"
  ],
  "typewritten": [
    "adjective"
  ],
  "typhoon": [
    "noun",
    "verb"
  ],
  "typical": [
    "adjective",
    "noun"
  ],
  "typologies": [
    "noun"
  ],
  "ubiquity": [
    "noun"
  ],
  "ufos": [
    "noun"
  ],
  "ugly": [
    "adjective",
    "noun",
    "verb"
  ],
  "ukraine": [
    "noun"
  ],
  "ulterior": [
    "adjective"
  ],
  "ultrasonic": [
    "adjective"
  ],
  "ultrasound": [
    "noun",
    "verb"
  ],
  "umbrella": [
    "noun",
    "verb"
  ],
  "umpire": [
    "noun",
    "verb"
  ],
  "un": [
    "noun"
  ],
  "unaccredited": [
    "adjective"
  ],
  "unalloyed": [
    "adjective"
  ],
  "unanimous": [
    "adjective"
  ],
  "unapologetic": [
    "adjective"
  ],
  "unappealing": [
    "adjective"
  ],
  "unavailing": [
    "adjective"
  ],
  "unavoidable": [
    "adjective",
    "noun"
  ],
  "unaware": [
    "adjective"
  ],
  "unbearable": [
    "adjective"
  ],
  "unbecoming": [
    "adjective",
    "noun"
  ],
  "unbelievable": [
    "adjective"
  ],
  "unbelieving": [
    "adjective"
  ],
  "unbend": [
    "verb"
  ],
  "unborn": [
    "adjective",
    "noun"
  ],
  "unbound": [
    "adjective"
  ],
  "unboxing": [
    "noun"
  ],
  "uncaring": [
    "adjective",
    "noun"
  ],
  "uncertainly": [
    "adverb"
  ],
  "unchanged": [
    "adjective"
  ],
  "uncharacteristic": [
    "adjective"
  ],
  "uncharted": [
    "adjective"
  ],
  "unchecked": [
    "adjective"
  ],
  "uncle": [
    "noun",
    "verb"
  ],
  "unclean": [
    "adjective"
  ],
  "unclear": [
    "adjective",
    "verb"
  ],
  "uncoil": [
    "verb"
  ],
  "uncommitted": [
    "adjective"
  ],
  "unconcealed": [
    "adjective"
  ],
  "unconcern": [
    "noun"
  ],
  "unconcerned": [
    "adjective"
  ],
  "unconditional": [
    "adjective",
    "noun"
  ],
  "uncontrolled": [
    "adjective"
  ],
  "unconventional": [
    "adjective",
    "noun"
  ],
  "uncool": [
    "adjective"
  ],
  "uncouple": [
    "verb"
  ],
  "uncut": [
    "adjective"
  ],
  "undaunted": [
    "adjective"
  ],
  "undecided": [
    "adjective",
    "noun"
  ],
  "undeclared": [
    "adjective"
  ],
  "undefined": [
    "adjective",
    "noun"
  ],
  "undeniable": [
    "adjective"
  ],
  "under": [
    "adverb",
    "adjective",
    "noun"
  ],
  "underbid": [
    "verb",
    "noun"
  ],
  "underbrush": [
    "noun",
    "verb"
  ],
  "underclass": [
    "noun"
  ],
  "undercut": [
    "verb",
    "adjective",
    "noun"
  ],
  "underdevelop": [
    "verb"
  ],
  "underemployed": [
    "adjective"
  ],
  "underestimate": [
    "verb",
    "noun"
  ],
  "undergo": [
    "verb"
  ],
  "undergoing": [
    "verb"
  ],
  "undergone": [
    "verb"
  ],
  "undergrad": [
    "noun"
  ],
  "undergrowth": [
    "noun"
  ],
  "underline": [
    "verb",
    "noun",
    "adjective"
  ],
  "underlined": [
    "verb",
    "adjective"
  ],
  "underlying": [
    "adjective",
    "noun"
  ],
  "undermine": [
    "verb"
  ],
  "undermined": [
    "verb"
  ],
  "underpass": [
    "noun"
  ],
  "underpaying": [
    "verb"
  ],
  "underpin": [
    "verb"
  ],
  "underprice": [
    "verb"
  ],
  "underselling": [
    "noun"
  ],
  "undershirt": [
    "noun"
  ],
  "understaffed": [
    "adjective"
  ],
  "understand": [
    "verb"
  ],
  "understanding": [
    "noun",
    "adjective"
  ],
  "understands": [
    "verb"
  ],
  "understudy": [
    "noun",
    "verb"
  ],
  "undertake": [
    "verb",
    "noun"
  ],
  "undertakes": [
    "verb"
  ],
  "undertaking": [
    "noun"
  ],
  "undertook": [
    "verb"
  ],
  "undervalue": [
    "verb",
    "noun"
  ],
  "underwear": [
    "noun"
  ],
  "underwent": [
    "verb",
    "adjective"
  ],
  "underwriter": [
    "noun"
  ],
  "underwriting": [
    "noun"
  ],
  "underwritten": [
    "verb"
  ],
  "undeterred": [
    "adjective"
  ],
  "undid": [
    "verb"
  ],
  "undiminished": [
    "adjective"
  ],
  "undisclosed": [
    "adjective"
  ],
  "undivided": [
    "adjective"
  ],
  "undock": [
    "verb"
  ],
  "undone": [
    "adjective"
  ],
  "undress": [
    "verb",
    "noun"
  ],
  "undressed": [
    "adjective"
  ],
  "undulate": [
    "verb",
    "adjective"
  ],
  "undying": [
    "adjective"
  ],
  "unearned": [
    "adjective"
  ],
  "unearth": [
    "verb"
  ],
  "unenthusiastic": [
    "adjective"
  ],
  "unequivocal": [
    "adjective"
  ],
  "unexciting": [
    "adjective"
  ],
  "unexpired": [
    "adjective"
  ],
  "unexplored": [
    "adjective"
  ],
  "unfailing": [
    "adjective"
  ],
  "unfair": [
    "adjective",
    "verb"
  ],
  "unfaithful": [
    "adjective"
  ],
  "unfamiliarity": [
    "noun"
  ],
  "unfeeling": [
    "adjective"
  ],
  "unfenced": [
    "adjective"
  ],
  "unfilled": [
    "adjective"
  ],
  "unfinished": [
    "adjective"
  ],
  "unfit": [
    "adjective",
    "verb"
  ],
  "unfold": [
    "verb",
    "noun"
  ],
  "unforgettable": [
    "adjective"
  ],
  "unfortunately": [
    "adverb"
  ],
  "unfurl": [
    "verb"
  ],
  "unheard": [
    "adjective"
  ],
  "unhitch": [
    "verb"
  ],
  "unhook": [
    "verb"
  ],
  "unhurried": [
    "adjective"
  ],
  "unhurt": [
    "adjective"
  ],
  "unicorn": [
    "noun",
    "adjective",
    "verb"
  ],
  "unidentified": [
    "adjective"
  ],
  "uniform": [
    "adjective",
    "noun",
    "verb"
  ],
  "unify": [
    "verb"
  ],
  "unifying": [
    "adjective",
    "noun"
  ],
  "unimaginable": [
    "adjective"
  ],
  "unimpaired": [
    "adjective"
  ],
  "unimproved": [
    "adjective"
  ],
  "uninspired": [
    "adjective"
  ],
  "unintentionally": [
    "adverb"
  ],
  "uninterested": [
    "adjective"
  ],
  "uninteresting": [
    "adjective"
  ],
  "uninviting": [
    "adjective"
  ],
  "unisex": [
    "adjective",
    "noun"
  ],
  "unit": [
    "noun",
    "adjective"
  ],
  "unite": [
    "verb",
    "noun"
  ],
  "united": [
    "noun",
    "adjective"
  ],
  "uniting": [
    "noun"
  ],
  "unity": [
    "noun"
  ],
  "universality": [
    "noun"
  ],
  "universe": [
    "noun"
  ],
  "university": [
    "noun"
  ],
  "unjust": [
    "adjective"
  ],
  "unkind": [
    "adjective"
  ],
  "unknowing": [
    "adjective",
    "noun"
  ],
  "unknown": [
    "adjective",
    "noun"
  ],
  "unload": [
    "verb"
  ],
  "unlock": [
    "verb",
    "noun"
  ],
  "unloved": [
    "adjective"
  ],
  "unmanned": [
    "adjective"
  ],
  "unmarried": [
    "adjective",
    "noun"
  ],
  "unmasked": [
    "adjective"
  ],
  "unmistakable": [
    "adjective"
  ],
  "unmoved": [
    "adjective"
  ],
  "unnecessary": [
    "adjective"
  ],
  "unopposed": [
    "adjective"
  ],
  "unorthodox": [
    "adjective"
  ],
  "unpack": [
    "verb"
  ],
  "unpacked": [
    "adjective"
  ],
  "unpaid": [
    "adjective"
  ],
  "unpaved": [
    "adjective"
  ],
  "unplaced": [
    "adjective"
  ],
  "unplanned": [
    "adjective"
  ],
  "unplug": [
    "verb"
  ],
  "unprecedented": [
    "adjective"
  ],
  "unpredictability": [
    "noun"
  ],
  "unprepared": [
    "adjective",
    "noun"
  ],
  "unproved": [
    "adjective"
  ],
  "unquestionable": [
    "adjective"
  ],
  "unravel": [
    "verb"
  ],
  "unreal": [
    "adjective"
  ],
  "unreality": [
    "noun"
  ],
  "unreconciled": [
    "adjective"
  ],
  "unrehearsed": [
    "adjective"
  ],
  "unreleased": [
    "adjective"
  ],
  "unrelenting": [
    "adjective"
  ],
  "unreliability": [
    "noun"
  ],
  "unreliable": [
    "adjective",
    "noun"
  ],
  "unrelieved": [
    "adjective"
  ],
  "unremitting": [
    "adjective"
  ],
  "unresolved": [
    "adjective"
  ],
  "unrest": [
    "noun"
  ],
  "unroll": [
    "verb"
  ],
  "unsaid": [
    "adjective"
  ],
  "unsatisfying": [
    "adjective"
  ],
  "unseal": [
    "verb"
  ],
  "unsealed": [
    "adjective"
  ],
  "unseen": [
    "adjective",
    "noun"
  ],
  "unsentimental": [
    "adjective"
  ],
  "unshaken": [
    "adjective"
  ],
  "unsigned": [
    "adjective",
    "noun"
  ],
  "unskilled": [
    "adjective"
  ],
  "unsold": [
    "adjective"
  ],
  "unsolved": [
    "adjective"
  ],
  "unsound": [
    "adjective"
  ],
  "unsparing": [
    "adjective"
  ],
  "unspent": [
    "adjective"
  ],
  "unsportsmanlike": [
    "adjective"
  ],
  "unstuck": [
    "verb"
  ],
  "unsung": [
    "adjective"
  ],
  "unsure": [
    "adjective"
  ],
  "unsurpassed": [
    "adjective"
  ],
  "unsympathetic": [
    "adjective"
  ],
  "untapped": [
    "adjective"
  ],
  "unthinking": [
    "adjective"
  ],
  "untie": [
    "verb"
  ],
  "untold": [
    "adjective"
  ],
  "untoward": [
    "adjective"
  ],
  "unturned": [
    "adjective"
  ],
  "unused": [
    "adjective"
  ],
  "unusually": [
    "adverb"
  ],
  "unveil": [
    "verb"
  ],
  "unwanted": [
    "adjective",
    "noun"
  ],
  "unwell": [
    "adjective"
  ],
  "unwilling": [
    "adjective"
  ],
  "unwind": [
    "verb",
    "noun"
  ],
  "unwitting": [
    "adjective"
  ],
  "unworried": [
    "adjective"
  ],
  "unwound": [
    "verb"
  ],
  "unwrap": [
    "verb",
    "noun"
  ],
  "unwrapped": [
    "adjective"
  ],
  "unzip": [
    "verb"
  ],
  "unzipped": [
    "adjective"
  ],
  "up": [
    "adverb",
    "noun",
    "adjective",
    "verb"
  ],
  "upbeat": [
    "adjective",
    "noun"
  ],
  "upcoming": [
    "noun",
    "adjective"
  ],
  "updraft": [
    "noun"
  ],
  "upgrade": [
    "verb",
    "noun",
    "adverb"
  ],
  "uphill": [
    "adverb",
    "adjective",
    "noun",
    "verb"
  ],
  "uphold": [
    "verb",
    "noun"
  ],
  "upkeep": [
    "noun",
    "verb"
  ],
  "uplift": [
    "noun",
    "verb"
  ],
  "uplink": [
    "noun",
    "verb"
  ],
  "uplinks": [
    "noun"
  ],
  "upload": [
    "verb",
    "noun"
  ],
  "uppermost": [
    "adjective",
    "adverb"
  ],
  "uproot": [
    "verb",
    "noun"
  ],
  "upscale": [
    "adjective",
    "verb"
  ],
  "upset": [
    "verb",
    "noun",
    "adjective"
  ],
  "upsets": [
    "verb",
    "noun"
  ],
  "upshot": [
    "noun"
  ],
  "upside": [
    "noun"
  ],
  "upstage": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "upstairs": [
    "adverb",
    "noun",
    "adjective"
  ],
  "upstart": [
    "noun",
    "adjective",
    "verb"
  ],
  "upstream": [
    "adverb",
    "adjective",
    "verb",
    "noun"
  ],
  "upsurge": [
    "noun",
    "verb"
  ],
  "uptake": [
    "noun",
    "verb"
  ],
  "uptight": [
    "adjective",
    "noun"
  ],
  "uptown": [
    "noun",
    "adverb",
    "adjective"
  ],
  "upturn": [
    "noun",
    "verb"
  ],
  "urbana": [
    "noun"
  ],
  "urea": [
    "noun"
  ],
  "urgent": [
    "adjective"
  ],
  "urology": [
    "noun"
  ],
  "useful": [
    "adjective"
  ],
  "useless": [
    "adjective"
  ],
  "ussr": [
    "noun"
  ],
  "usual": [
    "adjective",
    "noun"
  ],
  "usually": [
    "adverb"
  ],
  "utah": [
    "noun"
  ],
  "utopia": [
    "noun"
  ],
  "vacation": [
    "noun",
    "verb"
  ],
  "vaccina": [
    "noun"
  ],
  "vaccine": [
    "noun",
    "adjective",
    "verb"
  ],
  "vaccines": [
    "noun"
  ],
  "vain": [
    "adjective",
    "verb",
    "noun"
  ],
  "valkyrie": [
    "noun"
  ],
  "valley": [
    "noun",
    "verb"
  ],
  "value": [
    "noun",
    "verb"
  ],
  "van": [
    "noun",
    "verb"
  ],
  "vanguard": [
    "noun"
  ],
  "vanilla": [
    "noun",
    "adjective"
  ],
  "vanish": [
    "verb",
    "noun"
  ],
  "variability": [
    "noun"
  ],
  "varied": [
    "adjective"
  ],
  "vase": [
    "noun",
    "verb"
  ],
  "vast": [
    "adjective",
    "noun"
  ],
  "vat": [
    "noun",
    "verb",
    "adjective"
  ],
  "vaudevillian": [
    "noun",
    "adjective"
  ],
  "vault": [
    "noun",
    "verb"
  ],
  "vaunted": [
    "adjective"
  ],
  "veered": [
    "verb"
  ],
  "veering": [
    "noun"
  ],
  "veers": [
    "verb",
    "noun"
  ],
  "vehicle": [
    "noun",
    "verb"
  ],
  "veiling": [
    "noun"
  ],
  "vein": [
    "noun",
    "verb"
  ],
  "velocity": [
    "noun"
  ],
  "velodrome": [
    "noun"
  ],
  "velvet": [
    "noun",
    "adjective",
    "verb"
  ],
  "venality": [
    "noun"
  ],
  "vendor": [
    "noun",
    "verb"
  ],
  "veneer": [
    "noun",
    "verb"
  ],
  "veneers": [
    "noun"
  ],
  "vented": [
    "adjective"
  ],
  "ventilator": [
    "noun"
  ],
  "venture": [
    "noun",
    "verb"
  ],
  "veracity": [
    "noun"
  ],
  "veranda": [
    "noun"
  ],
  "verb": [
    "noun",
    "verb"
  ],
  "verbena": [
    "noun"
  ],
  "verdict": [
    "noun"
  ],
  "verify": [
    "verb"
  ],
  "verifying": [
    "adjective"
  ],
  "verisimilitude": [
    "noun"
  ],
  "vernacular": [
    "noun",
    "adjective"
  ],
  "vernal": [
    "adjective",
    "noun"
  ],
  "verse": [
    "noun",
    "verb"
  ],
  "versed": [
    "adjective",
    "noun"
  ],
  "vertex": [
    "noun"
  ],
  "vest": [
    "noun",
    "verb"
  ],
  "vestibule": [
    "noun",
    "verb"
  ],
  "vet": [
    "noun",
    "verb"
  ],
  "vetoed": [
    "verb"
  ],
  "vetoing": [
    "verb"
  ],
  "vets": [
    "noun"
  ],
  "vex": [
    "verb",
    "noun"
  ],
  "vexatious": [
    "adjective"
  ],
  "vexed": [
    "adjective"
  ],
  "vibrational": [
    "adjective"
  ],
  "vice": [
    "noun",
    "adjective",
    "verb"
  ],
  "vichyssoise": [
    "noun"
  ],
  "victim": [
    "noun",
    "verb"
  ],
  "victims": [
    "noun",
    "verb"
  ],
  "victorious": [
    "adjective"
  ],
  "victory": [
    "noun",
    "verb"
  ],
  "video": [
    "noun",
    "verb"
  ],
  "videocassettes": [
    "noun"
  ],
  "videodisk": [
    "noun"
  ],
  "vie": [
    "noun",
    "verb"
  ],
  "viennese": [
    "adjective",
    "noun"
  ],
  "vietnamese": [
    "adjective",
    "noun"
  ],
  "view": [
    "noun",
    "verb"
  ],
  "viewed": [
    "adjective"
  ],
  "viewer": [
    "noun"
  ],
  "views": [
    "noun"
  ],
  "vignettes": [
    "noun"
  ],
  "village": [
    "noun"
  ],
  "villain": [
    "noun",
    "verb"
  ],
  "villi": [
    "noun"
  ],
  "vim": [
    "noun"
  ],
  "vine": [
    "noun"
  ],
  "vinegar": [
    "noun",
    "verb"
  ],
  "vineyard": [
    "noun"
  ],
  "violence": [
    "noun",
    "verb"
  ],
  "violent": [
    "adjective",
    "verb",
    "noun"
  ],
  "violin": [
    "noun",
    "verb"
  ],
  "vips": [
    "noun"
  ],
  "virgule": [
    "noun"
  ],
  "virological": [
    "adjective"
  ],
  "virologist": [
    "noun"
  ],
  "virology": [
    "noun"
  ],
  "virtue": [
    "noun"
  ],
  "virus": [
    "noun",
    "verb"
  ],
  "vision": [
    "noun",
    "verb"
  ],
  "visionary": [
    "adjective",
    "noun"
  ],
  "visit": [
    "noun",
    "verb"
  ],
  "visitor": [
    "noun"
  ],
  "vitriolic": [
    "adjective"
  ],
  "vocabulary": [
    "noun"
  ],
  "vocational": [
    "adjective"
  ],
  "vodka": [
    "noun"
  ],
  "voice": [
    "noun",
    "verb"
  ],
  "void": [
    "noun",
    "adjective",
    "verb"
  ],
  "volcano": [
    "noun",
    "verb"
  ],
  "volley": [
    "noun",
    "verb"
  ],
  "volleyball": [
    "noun"
  ],
  "voltage": [
    "noun"
  ],
  "volume": [
    "noun",
    "verb"
  ],
  "volunteer": [
    "noun",
    "verb"
  ],
  "volunteered": [
    "verb"
  ],
  "volunteers": [
    "noun",
    "verb"
  ],
  "vote": [
    "noun",
    "verb"
  ],
  "vow": [
    "noun",
    "verb"
  ],
  "vox": [
    "noun"
  ],
  "voyage": [
    "noun",
    "verb"
  ],
  "voyeuristic": [
    "adjective"
  ],
  "vulture": [
    "noun",
    "verb",
    "adjective"
  ],
  "vying": [
    "noun"
  ],
  "wa": [
    "noun"
  ],
  "waffle": [
    "noun",
    "verb"
  ],
  "wag": [
    "noun",
    "verb"
  ],
  "wagon": [
    "noun",
    "verb"
  ],
  "wail": [
    "noun",
    "verb"
  ],
  "waited": [
    "verb"
  ],
  "waiter": [
    "noun",
    "verb"
  ],
  "waive": [
    "verb",
    "noun"
  ],
  "waived": [
    "verb"
  ],
  "wake": [
    "noun",
    "verb"
  ],
  "wakes": [
    "noun"
  ],
  "waking": [
    "noun",
    "adjective"
  ],
  "walk": [
    "verb",
    "noun"
  ],
  "walked": [
    "verb"
  ],
  "walkout": [
    "noun",
    "verb"
  ],
  "wall": [
    "noun",
    "verb"
  ],
  "walled": [
    "adjective"
  ],
  "wallet": [
    "noun"
  ],
  "wallflower": [
    "noun",
    "verb"
  ],
  "walnut": [
    "noun",
    "adjective"
  ],
  "wander": [
    "verb",
    "noun"
  ],
  "wanderlust": [
    "noun",
    "verb"
  ],
  "wanting": [
    "adjective",
    "noun"
  ],
  "wapiti": [
    "noun"
  ],
  "war": [
    "noun",
    "verb"
  ],
  "wardrobe": [
    "noun",
    "verb"
  ],
  "warehouse": [
    "noun",
    "verb"
  ],
  "warfare": [
    "noun",
    "verb"
  ],
  "warhead": [
    "noun"
  ],
  "warlike": [
    "adjective"
  ],
  "warlord": [
    "noun"
  ],
  "warm": [
    "adjective",
    "verb",
    "noun"
  ],
  "warn": [
    "verb",
    "noun"
  ],
  "warning": [
    "noun"
  ],
  "warrant": [
    "noun",
    "verb"
  ],
  "warrior": [
    "noun"
  ],
  "warsaws": [
    "noun"
  ],
  "warship": [
    "noun"
  ],
  "warships": [
    "noun"
  ],
  "wart": [
    "noun"
  ],
  "wartime": [
    "noun"
  ],
  "wartimes": [
    "noun"
  ],
  "washout": [
    "noun"
  ],
  "washroom": [
    "noun"
  ],
  "washtub": [
    "noun"
  ],
  "wasp": [
    "noun",
    "verb"
  ],
  "wasteland": [
    "noun"
  ],
  "wastewater": [
    "noun"
  ],
  "wasting": [
    "noun",
    "adjective"
  ],
  "watch": [
    "verb",
    "noun"
  ],
  "watched": [
    "adjective"
  ],
  "watchword": [
    "noun"
  ],
  "watchwords": [
    "noun"
  ],
  "water": [
    "noun",
    "verb"
  ],
  "waterborne": [
    "adjective"
  ],
  "waterfall": [
    "noun",
    "verb"
  ],
  "waterfalls": [
    "noun"
  ],
  "waterfront": [
    "noun"
  ],
  "watermark": [
    "noun",
    "verb"
  ],
  "watermelon": [
    "noun"
  ],
  "waterworks": [
    "noun"
  ],
  "wave": [
    "noun",
    "verb"
  ],
  "waved": [
    "adjective"
  ],
  "waveform": [
    "noun"
  ],
  "wavelength": [
    "noun"
  ],
  "waver": [
    "verb",
    "noun"
  ],
  "way": [
    "noun",
    "adverb",
    "adjective",
    "verb"
  ],
  "weak": [
    "adjective"
  ],
  "weaken": [
    "verb"
  ],
  "wealth": [
    "noun"
  ],
  "wealthy": [
    "adjective",
    "noun"
  ],
  "weapon": [
    "noun",
    "verb"
  ],
  "weapons": [
    "noun",
    "verb"
  ],
  "wear": [
    "verb",
    "noun"
  ],
  "wearable": [
    "adjective",
    "noun"
  ],
  "weather": [
    "noun",
    "verb",
    "adjective"
  ],
  "weathermen": [
    "noun"
  ],
  "weatherproof": [
    "adjective",
    "verb"
  ],
  "weave": [
    "verb",
    "noun"
  ],
  "weaved": [
    "verb"
  ],
  "web": [
    "noun",
    "verb"
  ],
  "website": [
    "noun"
  ],
  "wed": [
    "verb",
    "noun"
  ],
  "wedding": [
    "noun",
    "verb"
  ],
  "wedgwood": [
    "noun"
  ],
  "wednesdays": [
    "adverb"
  ],
  "weed": [
    "noun",
    "verb"
  ],
  "weeds": [
    "noun"
  ],
  "week": [
    "noun"
  ],
  "weekday": [
    "noun"
  ],
  "weekend": [
    "noun",
    "adjective",
    "verb"
  ],
  "weekender": [
    "noun"
  ],
  "weekends": [
    "adverb"
  ],
  "weeklong": [
    "adjective"
  ],
  "weep": [
    "verb",
    "noun"
  ],
  "weigh": [
    "verb",
    "noun"
  ],
  "weighed": [
    "verb"
  ],
  "weighing": [
    "noun",
    "adjective"
  ],
  "weighs": [
    "verb"
  ],
  "weight": [
    "noun",
    "verb"
  ],
  "weightless": [
    "adjective"
  ],
  "welcome": [
    "adjective",
    "verb",
    "noun"
  ],
  "welfare": [
    "noun",
    "verb"
  ],
  "wellpoint": [
    "noun"
  ],
  "wellspring": [
    "noun"
  ],
  "wends": [
    "verb",
    "noun"
  ],
  "went": [
    "noun"
  ],
  "west": [
    "noun",
    "adjective",
    "adverb",
    "verb"
  ],
  "westbound": [
    "adverb",
    "adjective"
  ],
  "westernmost": [
    "adjective"
  ],
  "westinghouse": [
    "noun"
  ],
  "wet": [
    "adjective",
    "noun",
    "verb"
  ],
  "wetlands": [
    "noun"
  ],
  "whacked": [
    "adjective"
  ],
  "whacker": [
    "noun"
  ],
  "whacks": [
    "noun",
    "verb"
  ],
  "whale": [
    "noun",
    "verb"
  ],
  "whaling": [
    "noun"
  ],
  "wham": [
    "noun",
    "verb"
  ],
  "wharf": [
    "noun",
    "verb"
  ],
  "whatnot": [
    "noun"
  ],
  "wheel": [
    "noun",
    "verb"
  ],
  "wheelbarrow": [
    "noun",
    "verb"
  ],
  "wheelbase": [
    "noun"
  ],
  "wheelchair": [
    "noun",
    "verb"
  ],
  "wheeled": [
    "adjective"
  ],
  "wheels": [
    "noun"
  ],
  "wheeze": [
    "noun",
    "verb"
  ],
  "whence": [
    "adverb"
  ],
  "whet": [
    "verb",
    "noun"
  ],
  "whig": [
    "noun",
    "verb"
  ],
  "whim": [
    "noun",
    "verb"
  ],
  "whine": [
    "noun",
    "verb"
  ],
  "whiner": [
    "noun"
  ],
  "whip": [
    "noun",
    "verb"
  ],
  "whiplash": [
    "noun",
    "verb"
  ],
  "whips": [
    "noun",
    "verb"
  ],
  "whipsaw": [
    "noun",
    "verb",
    "adjective"
  ],
  "whipsawed": [
    "verb"
  ],
  "whirl": [
    "noun",
    "verb"
  ],
  "whirlpool": [
    "noun",
    "verb"
  ],
  "whiskey": [
    "noun"
  ],
  "whisper": [
    "noun",
    "verb"
  ],
  "whisperer": [
    "noun"
  ],
  "whispering": [
    "noun",
    "adjective"
  ],
  "whistle": [
    "noun",
    "verb"
  ],
  "white": [
    "adjective",
    "noun",
    "verb"
  ],
  "whitefish": [
    "noun",
    "verb"
  ],
  "who": [
    "noun"
  ],
  "wholehearted": [
    "adjective"
  ],
  "wholesale": [
    "adjective",
    "noun",
    "adverb",
    "verb"
  ],
  "wholesaling": [
    "noun"
  ],
  "whore": [
    "noun",
    "verb"
  ],
  "whorl": [
    "noun",
    "verb"
  ],
  "whorls": [
    "noun"
  ],
  "why": [
    "adverb",
    "noun",
    "verb"
  ],
  "wichita": [
    "noun"
  ],
  "wide": [
    "adjective",
    "adverb",
    "noun"
  ],
  "widespread": [
    "adjective"
  ],
  "wife": [
    "noun",
    "verb"
  ],
  "wig": [
    "noun",
    "verb",
    "adjective"
  ],
  "wiggle": [
    "verb",
    "noun"
  ],
  "wild": [
    "adjective",
    "noun",
    "verb",
    "adverb"
  ],
  "wildcat": [
    "noun",
    "adjective",
    "verb"
  ],
  "wildcatter": [
    "noun"
  ],
  "wilderness": [
    "noun"
  ],
  "wildfire": [
    "noun"
  ],
  "wildflower": [
    "noun"
  ],
  "will": [
    "noun",
    "verb"
  ],
  "willows": [
    "noun"
  ],
  "willpower": [
    "noun"
  ],
  "win": [
    "verb",
    "noun"
  ],
  "wince": [
    "verb",
    "noun"
  ],
  "wind": [
    "noun",
    "verb"
  ],
  "windfall": [
    "noun"
  ],
  "windfalls": [
    "noun"
  ],
  "windmill": [
    "noun",
    "verb"
  ],
  "window": [
    "noun",
    "verb"
  ],
  "windows": [
    "noun"
  ],
  "windowsill": [
    "noun"
  ],
  "windstorm": [
    "noun"
  ],
  "windswept": [
    "adjective"
  ],
  "windup": [
    "noun",
    "adjective"
  ],
  "wine": [
    "noun",
    "verb"
  ],
  "wined": [
    "verb",
    "adjective"
  ],
  "wing": [
    "noun",
    "verb"
  ],
  "winglike": [
    "adjective"
  ],
  "wingspan": [
    "noun"
  ],
  "wink": [
    "noun",
    "verb"
  ],
  "winking": [
    "noun"
  ],
  "winner": [
    "noun"
  ],
  "winnowing": [
    "noun"
  ],
  "winter": [
    "noun",
    "verb"
  ],
  "wintertime": [
    "noun"
  ],
  "wire": [
    "noun",
    "verb"
  ],
  "wiretap": [
    "noun",
    "verb"
  ],
  "wiretapped": [
    "adjective"
  ],
  "wiretaps": [
    "noun"
  ],
  "wiry": [
    "adjective"
  ],
  "wis": [
    "noun",
    "verb",
    "adverb",
    "adjective"
  ],
  "wisdom": [
    "noun"
  ],
  "wise": [
    "adjective",
    "noun",
    "verb"
  ],
  "wisecracking": [
    "adjective"
  ],
  "wisecracks": [
    "noun"
  ],
  "wish": [
    "verb",
    "noun"
  ],
  "wishes": [
    "noun",
    "verb"
  ],
  "wit": [
    "noun",
    "verb"
  ],
  "witch": [
    "noun",
    "verb"
  ],
  "withdraw": [
    "verb",
    "noun"
  ],
  "withdraws": [
    "verb"
  ],
  "withe": [
    "noun",
    "verb"
  ],
  "withhold": [
    "verb",
    "noun"
  ],
  "withstand": [
    "verb"
  ],
  "withstanding": [
    "verb"
  ],
  "withstands": [
    "verb"
  ],
  "withstood": [
    "verb"
  ],
  "witness": [
    "noun",
    "verb"
  ],
  "witnesses": [
    "noun"
  ],
  "wits": [
    "noun"
  ],
  "wizard": [
    "noun",
    "adjective",
    "verb"
  ],
  "wobble": [
    "noun",
    "verb"
  ],
  "woe": [
    "noun",
    "adjective"
  ],
  "woebegone": [
    "adjective"
  ],
  "woes": [
    "noun"
  ],
  "wok": [
    "noun",
    "verb"
  ],
  "woken": [
    "verb"
  ],
  "woks": [
    "noun"
  ],
  "wolf": [
    "noun",
    "verb"
  ],
  "wolverine": [
    "noun"
  ],
  "womanhood": [
    "noun"
  ],
  "womb": [
    "noun",
    "verb"
  ],
  "wombat": [
    "noun"
  ],
  "won": [
    "verb",
    "noun"
  ],
  "wonder": [
    "verb",
    "noun"
  ],
  "wondering": [
    "adjective",
    "noun"
  ],
  "wonderland": [
    "noun"
  ],
  "wood": [
    "noun",
    "verb",
    "adjective"
  ],
  "woodchuck": [
    "noun"
  ],
  "woodlands": [
    "noun"
  ],
  "woodpecker": [
    "noun"
  ],
  "woodwork": [
    "noun",
    "verb"
  ],
  "woodworking": [
    "noun"
  ],
  "wooed": [
    "verb"
  ],
  "wooing": [
    "noun"
  ],
  "wool": [
    "noun"
  ],
  "wop": [
    "noun",
    "verb"
  ],
  "word": [
    "noun",
    "verb"
  ],
  "wordsmith": [
    "noun",
    "verb"
  ],
  "wore": [
    "verb"
  ],
  "work": [
    "noun",
    "verb"
  ],
  "workbook": [
    "noun"
  ],
  "workbooks": [
    "noun"
  ],
  "workers": [
    "noun"
  ],
  "workhorse": [
    "noun"
  ],
  "workload": [
    "noun"
  ],
  "workmanlike": [
    "adjective"
  ],
  "workout": [
    "noun"
  ],
  "workplace": [
    "noun"
  ],
  "workroom": [
    "noun"
  ],
  "workshop": [
    "noun",
    "verb"
  ],
  "workspace": [
    "noun"
  ],
  "workweek": [
    "noun"
  ],
  "workweeks": [
    "noun"
  ],
  "world": [
    "noun",
    "verb"
  ],
  "worldwide": [
    "adjective",
    "adverb"
  ],
  "wormhole": [
    "noun",
    "verb"
  ],
  "wormholes": [
    "noun"
  ],
  "wormlike": [
    "adjective"
  ],
  "worn": [
    "adjective"
  ],
  "worry": [
    "verb",
    "noun"
  ],
  "worse": [
    "adverb",
    "noun",
    "verb"
  ],
  "worshiping": [
    "noun"
  ],
  "worst": [
    "adjective",
    "noun",
    "verb"
  ],
  "worthwhile": [
    "adjective"
  ],
  "wound": [
    "noun",
    "verb"
  ],
  "wow": [
    "noun",
    "verb"
  ],
  "wowed": [
    "verb"
  ],
  "wracked": [
    "verb",
    "adjective"
  ],
  "wracking": [
    "adjective",
    "verb",
    "noun"
  ],
  "wrap": [
    "noun",
    "verb"
  ],
  "wrath": [
    "noun",
    "verb",
    "adjective"
  ],
  "wreak": [
    "verb",
    "noun"
  ],
  "wreaking": [
    "noun"
  ],
  "wreaks": [
    "verb"
  ],
  "wreck": [
    "noun",
    "verb"
  ],
  "wrecked": [
    "adjective"
  ],
  "wrecks": [
    "noun",
    "verb"
  ],
  "wrench": [
    "noun",
    "verb"
  ],
  "wrestling": [
    "noun"
  ],
  "wring": [
    "verb",
    "noun"
  ],
  "wrist": [
    "noun",
    "verb"
  ],
  "writ": [
    "noun"
  ],
  "write": [
    "verb",
    "noun"
  ],
  "writer": [
    "noun"
  ],
  "writing": [
    "noun"
  ],
  "writs": [
    "noun"
  ],
  "written": [
    "adjective"
  ],
  "wrong": [
    "adjective",
    "adverb",
    "noun",
    "verb"
  ],
  "wrongdoer": [
    "noun"
  ],
  "wrung": [
    "verb"
  ],
  "xylophone": [
    "noun",
    "verb"
  ],
  "yacht": [
    "noun",
    "verb"
  ],
  "yahoos": [
    "noun"
  ],
  "yahweh": [
    "noun"
  ],
  "yak": [
    "noun",
    "verb"
  ],
  "yanks": [
    "noun",
    "verb"
  ],
  "yaps": [
    "noun",
    "verb"
  ],
  "yardstick": [
    "noun"
  ],
  "yardsticks": [
    "noun"
  ],
  "yawn": [
    "noun",
    "verb"
  ],
  "year": [
    "noun"
  ],
  "yearbook": [
    "noun"
  ],
  "yearbooks": [
    "noun"
  ],
  "yearlong": [
    "adjective",
    "adverb"
  ],
  "yearn": [
    "verb",
    "noun"
  ],
  "yearned": [
    "verb"
  ],
  "yearning": [
    "noun"
  ],
  "yell": [
    "verb",
    "noun"
  ],
  "yellow": [
    "adjective",
    "noun",
    "verb"
  ],
  "yellowstone": [
    "noun"
  ],
  "yelp": [
    "noun",
    "verb"
  ],
  "yesterday": [
    "noun",
    "adverb"
  ],
  "yet": [
    "adverb",
    "verb",
    "noun"
  ],
  "yogurt": [
    "noun"
  ],
  "yolk": [
    "noun",
    "verb"
  ],
  "young": [
    "adjective",
    "noun",
    "verb"
  ],
  "youngstown": [
    "noun"
  ],
  "yucky": [
    "adjective"
  ],
  "yukon": [
    "noun"
  ],
  "zag": [
    "noun",
    "verb"
  ],
  "zanzibar": [
    "noun"
  ],
  "zap": [
    "noun",
    "verb"
  ],
  "zaps": [
    "verb",
    "noun"
  ],
  "zeal": [
    "noun"
  ],
  "zebra": [
    "noun"
  ],
  "zed": [
    "noun",
    "verb"
  ],
  "zen": [
    "noun",
    "adjective"
  ],
  "zero": [
    "noun",
    "verb",
    "adjective"
  ],
  "zeus": [
    "noun"
  ],
  "zig": [
    "noun",
    "verb"
  ],
  "ziggurat": [
    "noun"
  ],
  "zinc": [
    "noun",
    "verb"
  ],
  "zing": [
    "noun",
    "verb"
  ],
  "zip": [
    "noun",
    "verb"
  ],
  "zipped": [
    "adjective"
  ],
  "zipper": [
    "noun",
    "verb"
  ],
  "zips": [
    "noun"
  ],
  "zodiac": [
    "noun"
  ],
  "zone": [
    "noun",
    "verb"
  ],
  "zoo": [
    "noun"
  ],
  "zoological": [
    "adjective"
  ],
  "zoology": [
    "noun"
  ],
  "zoom": [
    "noun",
    "verb"
  ],
  "zoos": [
    "noun"
  ]
};
