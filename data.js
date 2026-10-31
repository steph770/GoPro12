/* H12 Begleiter - Inhalte. [[schluessel]] oder [[schluessel|Text]] wird zum antippbaren Begriff. */
var D = window.D = {};

/* ================= Begriffe ================= */
D.terms = {
  preset: { t: 'Voreinstellung', en: 'Preset', d: 'Ein gespeichertes Paket aus Einstellungen (Auflösung, Bildrate, Objektiv, Stabilisierung usw.) unter einem Namen. Du wechselst damit mit einem Tipp zwischen fertigen Rezepten, statt jede Einstellung einzeln zu ändern.', bild: 'Wie Speicherplätze für Radiosender: einmal eingestellt, danach nur noch auswählen.', wo: 'Unten in der Mitte des Displays auf die Voreinstellung tippen.' },
  modus: { t: 'Aufnahmemodus', en: 'Capture mode', d: 'Die drei Grundarten: Video, Foto und Zeitraffer. Jeder Modus hat eigene Voreinstellungen.' },
  aufloesung: { t: 'Auflösung', en: 'Resolution', d: 'Wie viele Bildpunkte ein Videobild hat. 5.3K hat etwa 5300 Pixel in der Breite, 4K etwa 3800, 2.7K etwa 2700, 1080p etwa 1900. Mehr Auflösung heißt mehr Details und mehr Spielraum zum Zuschneiden, aber größere Dateien, mehr Akkuverbrauch und mehr Wärme.' },
  fps: { t: 'Bildrate (fps)', en: 'Frame rate, frames per second', d: 'Wie viele Einzelbilder pro Sekunde aufgenommen werden. 24 bis 30 wirkt wie Film, 60 wirkt flüssiger und erlaubt doppelte Zeitlupe. 120 und 240 sind für starke Zeitlupe gedacht: Die Kamera nimmt schneller auf als abgespielt wird, so dehnt sich die Bewegung.', bild: 'Ein Daumenkino mit mehr Seiten pro Sekunde: Spielst du es langsamer ab, bleibt es trotzdem flüssig.' },
  seitenverhaeltnis: { t: 'Seitenverhältnis', en: 'Aspect ratio', d: 'Form des Bildes. 16:9 ist das normale Breitbild (YouTube, Fernseher). 9:16 ist dasselbe hochkant (Reels, Shorts). 8:7 ist fast quadratisch und nutzt die ganze Sensorfläche.' },
  s87: { t: '8:7 (voller Sensor)', en: '8:7 full sensor', d: 'Die HERO12 hat einen fast quadratischen Sensor. Im Format 8:7 wird er vollständig genutzt. Aus so einem Clip kannst du später in der Quik-App sowohl ein Querformat (16:9) als auch ein Hochformat (9:16) herausschneiden, ohne beim Filmen entscheiden zu müssen.', bild: 'Wie ein großer Bogen Papier, aus dem du später ein quer- oder hochformatiges Foto ausschneidest.' },
  linse: { t: 'Digitales Objektiv', en: 'Digital lens', d: 'Die GoPro hat ein fest eingebautes Superweitwinkel-Objektiv. Das „digitale Objektiv“ bestimmt, welcher Ausschnitt verwendet und wie stark die Fischaugen-Krümmung entzerrt wird. Von weit nach eng: HyperView, SuperView, Weitwinkel, Linear, Schmal.', bild: 'Wie ein Bilderrahmen, den du über dasselbe Foto legst: Der Rahmen ändert den Ausschnitt, das Foto bleibt gleich.' },
  hyperview: { t: 'HyperView', d: 'Das weiteste digitale Objektiv: Es nutzt den vollen 8:7-Sensor und streckt ihn auf 16:9. Ergebnis: maximaler Rundumblick mit starkem Mittendrin-Gefühl, die Ränder wirken gedehnt. Ideal für Fahrten aus Ich-Perspektive.' },
  superview: { t: 'SuperView', d: 'Sehr weites digitales Objektiv, etwas weniger extrem als HyperView. Gut für Action aus Ich-Perspektive.' },
  weitwinkel: { t: 'Weitwinkel', en: 'Wide', d: 'Das klassische GoPro-Bild: sehr weit, mit sichtbarer Krümmung zum Rand hin (Fischaugen-Effekt). Gute Standardwahl.' },
  linear: { t: 'Linear', d: 'Das Bild wird entzerrt: Gerade Linien wie Horizont oder Häuserkanten bleiben gerade. Etwas engerer Ausschnitt. Gut für Landschaft, Architektur und alles, was natürlich aussehen soll.' },
  schmal: { t: 'Schmal', en: 'Narrow', d: 'Der engste Ausschnitt, ungefähr wie ein normales Handy-Objektiv. Holt Motive näher heran, ist aber digital vergrößert, also mit weniger Details.' },
  horizont: { t: 'Horizontausgleich / Horizontsperre', en: 'Horizon Leveling / Horizon Lock', d: 'Die Kamera hält den Horizont gerade, auch wenn du sie kippst. Horizontausgleich gleicht kleinere Neigungen aus, die Horizontsperre auch eine volle Drehung. Dafür wird ein Teil des Bildes abgeschnitten.' },
  hypersmooth: { t: 'HyperSmooth', d: 'Die elektronische Bildstabilisierung der GoPro. Die Kamera schneidet einen etwas kleineren Ausschnitt aus und verschiebt ihn gegen deine Wackler. Stufen: Aus, An, Boost (stärkste Stufe, schneidet mehr ab) und AutoBoost (verstärkt nur bei Bedarf).', bild: 'Wie ein Kran-Kameramann, der jedes Ruckeln im letzten Moment ausgleicht - nur dass er dafür ein Stück vom Bildrand braucht.' },
  autoboost: { t: 'AutoBoost', d: 'HyperSmooth-Stufe, die nur dann stärker stabilisiert (und mehr abschneidet), wenn es wirklich wackelt. Ruhige Szenen bleiben weit.' },
  protune: { t: 'Protune', d: 'Die erweiterten Einstellungen der GoPro: Weißabgleich, ISO, Verschlusszeit, Belichtungskorrektur, Schärfe, Farbe, Bitrate und Ton. Sichtbar, wenn die Kamera auf Pro-Steuerung steht.' },
  wb: { t: 'Weißabgleich', en: 'White balance', d: 'Sagt der Kamera, welche Farbe das Licht hat, damit Weiß auch weiß aussieht. Angabe in Kelvin: niedrige Werte (2300 K) für warmes Kunstlicht, hohe (6500 K) für Schatten und bewölkten Himmel. „Auto“ entscheidet selbst.' },
  iso: { t: 'ISO', d: 'Die Lichtempfindlichkeit. Höhere ISO macht das Bild bei wenig Licht heller, aber körniger (Bildrauschen). Bei der GoPro stellst du meist eine Ober- und Untergrenze ein und die Kamera wählt dazwischen.' },
  shutter: { t: 'Verschlusszeit', en: 'Shutter', d: 'Wie lange jedes Einzelbild belichtet wird. Kurz (1/1000 s) friert Bewegung ein, lang (1/30 s) lässt Bewegungen verwischen. Bei Video wirkt eine Verschlusszeit von etwa 1/(2 x Bildrate) am natürlichsten, das geht in der Sonne aber nur mit Graufilter.' },
  ev: { t: 'Belichtungskorrektur (EV)', en: 'Exposure compensation', d: 'Macht das Bild gezielt heller (+) oder dunkler (-), ohne sonst etwas zu ändern. -0,5 schützt helle Bereiche wie Himmel, Sand oder Wasseroberfläche vor dem Ausfressen (reines Weiß ohne Zeichnung).' },
  bittiefe: { t: 'Bittiefe (8 / 10 Bit)', en: 'Bit depth', d: 'Wie viele Farbabstufungen gespeichert werden. 8 Bit: rund 16 Millionen Farben. 10 Bit: über eine Milliarde. Mehr Abstufungen verhindern Streifen in Verläufen (Himmel, Wasser) und vertragen Farbkorrektur besser.', bild: 'Eine Treppe mit mehr, dafür kleineren Stufen: Von weitem sieht sie wie eine glatte Rampe aus.' },
  bitrate: { t: 'Bitrate', d: 'Wie viele Daten pro Sekunde gespeichert werden. Höher heißt weniger Kompression und mehr Details bei viel Bewegung (Wasser, Blätter, Staub), aber größere Dateien.' },
  farbe: { t: 'Farbprofil', en: 'Color', d: 'Wie die Kamera die Farben abstimmt. „GoPro“ ist kräftig und fertig zum Teilen. „Natürlich“ ist zurückhaltender und lässt mehr Spielraum für Nachbearbeitung. „Log“ ist sehr flau und nur sinnvoll, wenn du am Computer Farben korrigierst.' },
  log: { t: 'GP-Log', d: 'Ein sehr flaches Farbprofil, das möglichst viel Helligkeitsumfang speichert. Sieht unbearbeitet grau und matt aus und braucht Farbkorrektur am Computer. Für Handyschnitt mit Quik nicht empfehlenswert.' },
  hdr: { t: 'HDR', en: 'High Dynamic Range', d: 'Hoher Dynamikumfang: Die Kamera kombiniert mehrere Belichtungen bzw. arbeitet so, dass helle und dunkle Bereiche gleichzeitig Zeichnung behalten. Gut bei Gegenlicht und Sonnenauf- und -untergang, schlecht bei schneller Bewegung (mögliche Geisterbilder).' },
  hindsight: { t: 'HindSight', d: 'Die Kamera puffert ständig die letzten 15 oder 30 Sekunden. Drückst du den Auslöser, beginnt das Video rückwirkend vor dem Drücken. So verpasst du den Moment nicht, in dem der Leopard aus dem Gebüsch kommt. Kostet merklich Akku, weil die Kamera ständig aufnimmt.', bild: 'Wie eine Dashcam, die immer mitläuft, aber nur speichert, wenn du es willst.' },
  timewarp: { t: 'TimeWarp', d: 'Ein stabilisierter Zeitraffer aus der Bewegung, also während du gehst, fährst oder läufst. Die Kamera beschleunigt das Video (z. B. 10x) und glättet dabei stark. Bei „Auto“ passt sie die Geschwindigkeit selbst an. Antippen während der Aufnahme schaltet kurz auf Echtzeit um (Speed Ramp).' },
  zeitraffer: { t: 'Zeitraffer', en: 'Time lapse', d: 'Die Kamera macht in festen Abständen ein Bild (z. B. alle 0,5 oder 2 Sekunden) und setzt sie zu einem Video zusammen. Für Wolken, Nebel, Menschenmengen. Die Kamera muss dabei still stehen.' },
  nachtzeitraffer: { t: 'Nachtzeitraffer', en: 'Night lapse', d: 'Zeitraffer mit langen Belichtungszeiten für die Nacht, etwa für Sternenhimmel. Kamera muss absolut ruhig stehen.' },
  nachteffekte: { t: 'Nachteffekte', en: 'Night Effects', d: 'Langzeitbelichtungs-Effekte im Zeitraffer-Modus: Sternspuren, Lichtmalerei und Fahrzeug-Lichtspuren. Die Kamera addiert Bilder, sodass Lichter als Spuren erscheinen.' },
  zeitlupe: { t: 'Zeitlupe', en: 'Slo-Mo', d: 'Mit hoher Bildrate aufnehmen (120 oder 240 Bilder pro Sekunde) und normal abspielen. 240 fps ergibt 8-fache Zeitlupe bei 30 fps Wiedergabe.' },
  quik: { t: 'Quik-App', d: 'Die GoPro-App fürs Handy: Kamera fernsteuern, Aufnahmen aufs Handy übertragen, schneiden, Hochformat-Ausschnitte wählen und Firmware aktualisieren. Für Android im Google Play Store.' },
  quikcapture: { t: 'QuikCapture', d: 'Wenn die Kamera aus ist, startet ein Druck auf den Auslöser sofort eine Videoaufnahme, ein weiterer Druck stoppt sie und die Kamera schaltet wieder ab. Spart Akku und ist ideal im Tauchgehäuse.' },
  hilight: { t: 'HiLight', d: 'Eine Markierung, die du während der Aufnahme setzt. Quik findet die Stelle später sofort und nutzt sie für automatische Schnitte.' },
  gpr: { t: 'RAW (.GPR)', d: 'Unbearbeitete Sensordaten bei Fotos, zusätzlich zur JPG-Datei. Mehr Spielraum bei Belichtung und Farbe, braucht aber ein Bearbeitungsprogramm wie Lightroom.' },
  superphoto: { t: 'SuperPhoto', d: 'Automatische Bildoptimierung bei Fotos: Die Kamera wählt je nach Licht HDR, Rauschunterdrückung oder Tonwertanpassung. Bequem, aber kein RAW möglich.' },
  rotfilter: { t: 'Rotfilter', d: 'Wasser schluckt rotes Licht schon in wenigen Metern Tiefe, alles wird blau-grün. Ein Rotfilter vor dem Objektiv lässt Blau und Grün weniger durch und gleicht so aus. Funktioniert nur mit Sonnenlicht und in einem bestimmten Tiefenbereich. Magentafilter sind die Variante für grünliches Wasser.' },
  antifog: { t: 'Anti-Beschlag-Einlage', en: 'Anti-fog insert', d: 'Saugfähige Streifen, die man ins Gehäuse legt. Sie nehmen die Feuchtigkeit der eingeschlossenen Luft auf, damit das Glas von innen nicht beschlägt. Vor Gebrauch trocknen (z. B. kurz auf warme Oberfläche).' },
  dichtung: { t: 'Dichtung (O-Ring)', d: 'Der Gummiring im Deckel des Tauchgehäuses. Schon ein Haar oder Sandkorn darauf kann zu Wassereinbruch führen. Vor jedem Tauchgang ansehen und mit dem Finger abfahren.' },
  backscatter: { t: 'Schwebeteilchen-Reflexe', en: 'Backscatter', d: 'Helle Punkte im Bild, wenn Licht (Sonne oder Lampe) Partikel im Wasser direkt vor der Kamera anstrahlt. Abhilfe: nah ans Motiv, Lampen seitlich halten, nicht im aufgewirbelten Sand filmen.' },
  reframe: { t: 'Neu ausrichten (Reframe)', d: 'In der Quik-App nachträglich einen Ausschnitt wählen, z. B. ein Hochformat aus einem breiten Clip. Funktioniert am besten mit 8:7-Aufnahmen und hoher Auflösung.' },
  framegrab: { t: 'Frame Grab', d: 'Ein Einzelbild aus einem Video als Foto speichern. Bei 5.3K hat so ein Standbild etwa 15 Megapixel, genug für Instagram und kleine Abzüge. In Quik beim Ansehen eines Videos.' },
  enduro: { t: 'Enduro-Akku', d: 'Der Akku der HERO12 (1720 mAh), gebaut für Kälte und lange Laufzeit. Austauschbar über die Klappe an der Seite.' },
  sd: { t: 'microSD-Karte (V30 / UHS-3)', d: 'Die Speicherkarte. Für 5.3K und hohe Bitraten braucht die GoPro schnelle Karten, erkennbar am Aufdruck V30 oder U3. Langsame Karten führen zu Abbrüchen und Fehlermeldungen. In der Kamera formatieren, nicht am Computer.' },
  nd: { t: 'Graufilter (ND)', en: 'Neutral density filter', d: 'Ein „Sonnenbrillen“-Filter, der nur Licht reduziert. Damit kann die Kamera auch in der Sonne längere Verschlusszeiten wählen, Bewegungen wirken dann natürlich verwischt statt abgehackt.' },
  hevc: { t: 'HEVC (H.265)', d: 'Das platzsparende Videoformat der GoPro. Moderne Handys spielen es ab, ältere Rechner kommen manchmal ins Stocken.' },
  rolling: { t: 'Rolling Shutter („Wackelpudding“)', d: 'Der Sensor liest das Bild zeilenweise aus. Bei Vibrationen (Motor, Zug) oder schnellen Schwenks wirken gerade Linien schief oder wabbelig. Höhere Bildrate und feste Halterung helfen.' },
  crop: { t: 'Beschnitt (Crop)', d: 'Teil des Bildes, der abgeschnitten wird, etwa für Stabilisierung oder Horizontsperre. Mehr Beschnitt heißt engerer Bildausschnitt.' },
  dashboard: { t: 'Dashboard', d: 'Das Schnellmenü, das du mit einem Wisch vom oberen Displayrand nach unten öffnest. Dort liegen Schalter wie Sprachsteuerung, Bildschirmsperre und die Einstellungen.' },
  frontscreen: { t: 'Frontdisplay', d: 'Der kleine Farbbildschirm vorne neben dem Objektiv. Zeigt wahlweise das Livebild (praktisch für Selfies), nur Statusinfos oder ist aus (spart Akku).' },
  standardvor: { t: 'Standard-Voreinstellung', en: 'Default preset', d: 'Die Voreinstellung, mit der die Kamera nach dem Einschalten startet. Für Tauchgänge Gold wert: Du stellst dein Tauchrezept als Standard ein und musst im Gehäuse nichts mehr umstellen.' },
  timecode: { t: 'Timecode-Synchronisation', d: 'Gleicht die Uhrzeit mehrerer Kameras ab, damit sich Clips im Schnitt leicht zusammenführen lassen. Für dich kaum relevant.' },
  touchzoom: { t: 'Touch-Zoom', d: 'Digitaler Zoom per Schieberegler am Display. Vergrößert den Bildausschnitt, verliert dabei Details. Nur bei bestimmten Objektiv- und Auflösungs-Kombinationen verfügbar.' },
  intervall: { t: 'Intervall', d: 'Der Abstand zwischen zwei Bildern beim Zeitraffer. Kurz (0,5 s) für schnelle Bewegung wie Wolken bei Wind oder Menschenmengen, lang (5 bis 10 s) für langsame Veränderungen wie Sonnenuntergang.' },
  sternspuren: { t: 'Sternspuren', en: 'Star Trails', d: 'Die Kamera belichtet über lange Zeit, sodass Sterne durch die Erddrehung als Kreisbögen erscheinen.' },
  lichtmalerei: { t: 'Lichtmalerei', en: 'Light Painting', d: 'Bewegte Lichtquellen (Taschenlampe, Handylicht, Wunderkerze) hinterlassen leuchtende Spuren im Bild, alles andere bleibt dunkel.' },
  fahrzeugspuren: { t: 'Fahrzeug-Lichtspuren', en: 'Vehicle Light Trails', d: 'Scheinwerfer und Rücklichter von Autos und Tuk-Tuks werden zu leuchtenden Bändern.' },
  geplant: { t: 'Geplante Aufnahme', en: 'Scheduled Capture', d: 'Die Kamera schaltet sich zu einer festgelegten Uhrzeit selbst ein und startet die Aufnahme. Ideal für Sonnenaufgänge.' },
  dauer: { t: 'Aufnahmedauer', en: 'Duration Capture', d: 'Begrenzt die Aufnahme auf eine feste Zeit (z. B. 15 Sekunden, 1 Stunde). Danach stoppt die Kamera von selbst. Spart Speicher und Akku bei Zeitraffern.' },
  pro: { t: 'Einfache / Pro-Steuerung', en: 'Easy / Pro controls', d: 'Zwei Bedienmodi. Die einfache Steuerung zeigt nur wenige Optionen und wählt viel automatisch. Die Pro-Steuerung zeigt alle Voreinstellungen, Kurzbefehle und Protune. Diese App geht von der Pro-Steuerung aus.' }
};

/* ================= Kamera ================= */
D.cam = {
  hint: 'Tipp: Wische auf dem Display nach unten, oben, links oder rechts.',
  defaultScreen: { mode: 'video', preset: 'Standard', settings: '5.3K | 30 | W', battery: 87, remaining: '1:12:40', shortcuts: ['slomo', 'linse', 'zoom', 'hindsight'], art: 'walk', rec: false },
  shortcutPos: ['left:2.5%;bottom:5%', 'left:15%;bottom:5%', 'right:15%;bottom:5%', 'right:2.5%;bottom:5%'],
  modes: [
    { name: 'Video', mode: 'video', preset: 'Standard', settings: '5.3K | 30 | W', shortcuts: ['slomo', 'linse', 'zoom', 'hindsight'], listTitle: 'Video-Voreinstellungen',
      presets: [['Standard', '5.3K | 30 | W', 'Allround-Rezept für fast alles.'], ['Aktivität', '2.7K | 60 | SV', 'Weit und flüssig für Bewegung.'], ['Kinematografie', '5.3K | 30 | L', 'Entzerrt, filmischer Look.'], ['Ultra-Zeitlupe', '2.7K | 240 | W', 'Für 8-fache Zeitlupe.']] },
    { name: 'Foto', mode: 'foto', preset: 'Foto', settings: '27MP | W', shortcuts: ['timer', 'linse', 'zoom', 'blitz'], listTitle: 'Foto-Voreinstellungen',
      presets: [['Foto', '27MP | W', 'Einzelbild mit 27 Megapixeln.'], ['Serienbild', 'Auto | W', 'Mehrere Bilder pro Sekunde.'], ['Nacht', 'Auto | W', 'Lange Belichtung, Kamera muss stillstehen.']] },
    { name: 'Zeitraffer', mode: 'zeitraffer', preset: 'TimeWarp', settings: '5.3K | Auto | W', shortcuts: ['dreh', 'linse', 'zoom', 'timer'], listTitle: 'Zeitraffer-Voreinstellungen',
      presets: [['TimeWarp', '5.3K | Auto | W', 'Zeitraffer in Bewegung.'], ['Zeitraffer', '5.3K | 0,5s | W', 'Kamera steht still.'], ['Nachtzeitraffer', '4K | Auto | W', 'Für die Nacht.'], ['Sternspuren', '4K | Lang | W', 'Sterne als Bögen.'], ['Lichtmalerei', '4K | Lang | W', 'Mit Licht zeichnen.'], ['Fahrzeug-Lichtspuren', '4K | Lang | W', 'Lichtbänder von Autos.']] }
  ],
  fields: [],
  shortcuts: {},
  gestures: [],
  dash: [],
  keys: [],
  voice: []
};

/* ================= Szenen ================= */
D.scenesIntro = 'Fertige Rezepte für deine Reise. Lege dir für die wichtigsten am besten vorab eine eigene [[preset|Voreinstellung]] an, dann wechselst du unterwegs mit einem Tipp.';
D.scenes = [
{
  id: 'tauchen', art: 'reef', title: 'Tauchen mit Gehäuse', short: 'Walhai, Manta, Riff - mit Rotfilter und ohne Touchscreen.', tags: ['Malediven', 'Gehäuse', 'Rotfilter'],
  goal: 'Ruhige, farbige Unterwasserclips, bei denen du unter Wasser nur noch zwei Tasten brauchst.',
  before: '<b>Im Tauchgehäuse reagiert der Touchscreen nicht.</b> Stell dieses Rezept an Land ein, mach es zur [[standardvor|Standard-Voreinstellung]] und teste es einmal im Waschbecken. Unter Wasser drückst du nur noch den Auslöser.',
  screen: { mode: 'video', preset: 'Tauchen', settings: '4K | 60 | W', shortcuts: [] },
  screenNote: 'Eigene Voreinstellung „Tauchen“. Kurzbefehle brauchst du hier keine, im Gehäuse lassen sie sich ohnehin nicht antippen.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Genug Reserve für Ausschnitte und Hochkant-Clips. Spart gegenüber 5.3K Akku und Speicher, was bei zwei Tauchgängen pro Tag zählt.', 'Voreinstellung antippen › Stift-Symbol › Auflösung'],
    ['[[fps|Bildrate]]', '60', 'Flüssige Bewegung, und du kannst den vorbeigleitenden Walhai später auf halbe Geschwindigkeit bremsen.'],
    ['[[seitenverhaeltnis|Seitenverhältnis]]', '8:7', 'Voller Sensor: Daraus schneidest du später in Quik Quer- und Hochformat. Wird 8:7 bei 4K 60 nicht angeboten, nimm 16:9.'],
    ['[[linse|Objektiv]]', 'Weitwinkel', 'Unter Wasser gibt es kaum gerade Linien, die Krümmung fällt nicht auf. Weit heißt: Du kannst nah ran, und wenig Wasser zwischen Linse und Tier bedeutet mehr Farbe und Schärfe.'],
    ['[[hypersmooth|HyperSmooth]]', 'An', 'Glättet Flossenschläge. Boost schneidet mehr Bild ab, das brauchst du schwebend nicht.'],
    ['[[wb|Weißabgleich]]', 'Auto', 'Mit Rotfilter rechnet die Kamera selbst nach. Ein fester Kelvin-Wert passt nur für eine Tiefe.', 'Protune'],
    ['[[iso|ISO]] min / max', '100 / 1600', 'Begrenzt das Rauschen, wenn es in der Tiefe oder im Schatten dunkler wird.', 'Protune'],
    ['[[ev|Belichtungskorrektur]]', '0', 'Über hellem Sand oder knapp unter der Oberfläche -0,5, damit die hellen Stellen nicht ausfressen.', 'Protune'],
    ['[[farbe|Farbe]]', 'GoPro', 'Fertige, kräftige Farben für den Schnitt am Handy. „Natürlich“ nur, wenn du die Farben selbst nachziehst.', 'Protune'],
    ['[[bittiefe|Bittiefe]]', '10 Bit', 'Weiche Blauverläufe im Freiwasser ohne Treppenstufen.', 'Protune'],
    ['[[hindsight|HindSight]]', 'Aus', 'Frisst Akku. Unter Wasser startest du die Aufnahme ohnehin früh.']
  ],
  mount: [
    'Kurzer Griff unten am Gehäuse, damit du ruhig und mit Abstand zum Körper filmst.',
    'Immer eine Sicherungsleine: ans Handgelenk oder mit Karabiner ans Jacket (Tarierweste). Eine verlorene Leih-GoPro sinkt sofort.',
    'Kopf- und Brusthalterung beim Gerätetauchen eher nicht: Der Kopfgurt verrutscht über Maske und Haube, die Brust ist vom Jacket und Schlauch verdeckt.'
  ],
  tips: [
    'Aufnahme schon beim Abtauchen oder an der Oberfläche starten. Ein langer Clip ist im Gehäuse einfacher als ständiges Start/Stopp, und du verpasst nichts. Gute Stellen markierst du mit einem [[hilight|HiLight]].',
    'Nah ran: am besten unter 1-2 m Abstand. Jeder Meter Wasser vor der Linse kostet Farbe und Kontrast.',
    '[[rotfilter|Rotfilter]] gehört in den Bereich von etwa 5 bis 20 m bei Sonne und klarem Wasser. Knapp unter der Oberfläche, beim Nachttauchgang, in Höhlen oder mit Lampe: abnehmen bzw. wegklappen.',
    'Sonne im Rücken, Kamera ruhig halten, langsam schwenken. Jede Einstellung 8-10 Sekunden halten, damit sie im Schnitt nutzbar ist.',
    'Tiere nie verfolgen oder bedrängen. Ein Manta, der an dir vorbeizieht, gibt das schönere Bild als einer, dem du hinterherjagst.',
    'Zuerst tauchen, dann filmen: Tarierung und Luft haben Vorrang.'
  ],
  fixes: [
    ['Alles ist blau-grün und flau.', 'Näher ans Motiv, Rotfilter im passenden Tiefenbereich, Weißabgleich Auto. Den Rest holst du in Quik mit dem Farbregler.'],
    ['Das Gehäuse beschlägt von innen.', 'Gehäuse im kühlen, trockenen Raum schließen, getrocknete [[antifog|Anti-Beschlag-Einlage]] rein, die Kamera vorher nicht in der Sonne aufheizen lassen.'],
    ['Weiße Punkte und Schleier im Bild.', 'Das sind [[backscatter|Schwebeteilchen-Reflexe]]. Nicht über aufgewirbeltem Sand filmen, näher ran, gegen die Sonne meiden.'],
    ['Hektisches, schwer anzusehendes Video.', 'Kamera mit beiden Händen nah am Körper, Ellbogen ran, langsame Bewegungen. Lieber kurz anhalten als dem Tier hinterherschwenken.'],
    ['Akku leer beim zweiten Tauchgang.', 'Zwischen den Tauchgängen Akku tauschen, Frontdisplay aus, WLAN aus. Und einen langen Clip pro Tauchgang statt Dauerfilm über die ganze Stunde.']
  ],
  vertical: 'Mit 8:7 schneidest du den Manta später in Quik hochkant aus. Halte das Tier möglichst in der Bildmitte und lass oben und unten Luft, dann hast du beim Ausschneiden Spielraum.',
  related: ['zeitlupe', 'reframe', 'overunder']
},
{
  id: 'safari', art: 'safari', title: 'Safari aus dem Jeep', short: 'Yala, Udawalawe: Tiere, Staub, plötzliche Momente.', tags: ['Sri Lanka', 'HindSight'],
  goal: 'Die Stimmung der Pirschfahrt einfangen und die überraschenden Momente nicht verpassen. Für ferne Tiere ist ein Teleobjektiv die bessere Wahl - die GoPro liefert den Kontext und alles, was nah kommt.',
  screen: { mode: 'video', preset: 'Safari', settings: '5.3K | 30 | L', shortcuts: ['hindsight', 'zoom', 'linse', 'slomo'] },
  screenNote: 'Eigene Voreinstellung „Safari“ mit HindSight und Zoom als Kurzbefehl.',
  settings: [
    ['[[aufloesung|Auflösung]]', '5.3K', 'Maximale Details: Du kannst später in Quik nah ans Tier heranschneiden und gute [[framegrab|Standbilder]] ziehen.'],
    ['[[fps|Bildrate]]', '30', 'Bei 5.3K reicht das; es spart Akku und Wärme. Für Vögel im Flug oder staubende Elefanten lieber 4K 60.'],
    ['[[seitenverhaeltnis|Seitenverhältnis]]', '16:9', 'Breitbild für die Landschaft. Für Hochkant-Clips später den Ausschnitt in Quik wählen.'],
    ['[[linse|Objektiv]]', 'Linear', 'Entzerrt und etwas enger: Horizont und Jeep-Rahmen bleiben gerade, Tiere wirken weniger klein als im Weitwinkel.'],
    ['[[touchzoom|Zoom]]', 'nach Bedarf', 'Bringt ein Tier näher, kostet aber Details. Besser: groß aufnehmen und später zuschneiden.'],
    ['[[hypersmooth|HyperSmooth]]', 'An', 'Gleicht das Rumpeln der Piste aus. AutoBoost, wenn die Kamera am Griff frei in der Hand liegt.'],
    ['[[hindsight|HindSight]]', '15 s', 'Das Video beginnt 15 Sekunden vor dem Druck auf den Auslöser. So hast du den Leoparden, der gerade aus dem Gebüsch trat. Kostet Akku: nur aktiv, wenn es spannend wird.'],
    ['[[ev|Belichtungskorrektur]]', '-0,5', 'Heller Himmel und Staub fressen sonst aus.', 'Protune'],
    ['[[farbe|Farbe]]', 'GoPro', 'Fertige Farben für Quik.', 'Protune']
  ],
  mount: [
    'Griff oder kurzer Selfiestick, in beiden Händen auf dem Rahmen oder der Lehne aufgestützt. Das dämpft Stöße besser als freihändig.',
    'Mit dem ausziehbaren Stick über das Dach halten: Perspektive über die Köpfe der Mitfahrer hinweg.',
    'Kopfhalterung für die Fahrt selbst: zeigt, was du siehst, und du hast die Hände frei für Fernglas oder zweite Kamera.'
  ],
  tips: [
    'Die GoPro ist superweit. Ein Leopard in 50 m Entfernung wird ein Punkt. Nutze sie für Elefanten nah am Jeep, die Fahrt, den Staub, die Gesichter der Mitreisenden und die Landschaft.',
    'Für ferne Tiere bleibt Zuschneiden das beste Werkzeug: in 5.3K aufnehmen, in Quik heranzoomen.',
    'Mittagshitze: Im Jeep wird die Kamera schnell heiß. Display-Helligkeit runter, zwischendurch in den Schatten.',
    'Staub: Linse immer wieder mit Mikrofasertuch abwischen. Klappen geschlossen halten.',
    'Leise sein: Tonaufnahme ist bei Safari oft das Highlight (Vögel, Elefantentrompeten). Wind-Reduzierung in Protune nutzen.'
  ],
  fixes: [
    ['Tier ist nur ein Pünktchen.', 'Linear statt Weitwinkel, 5.3K und später zuschneiden, oder die Aufnahme nur auf nahe Tiere beschränken.'],
    ['Moment verpasst, Kamera war aus.', 'HindSight aktivieren, sobald der Fahrer langsamer wird oder auf etwas zeigt.'],
    ['Video wabbelt bei Motorvibration.', 'Das ist [[rolling|Rolling Shutter]]: Kamera nicht direkt aufs Blech setzen, mit der Hand abfedern, HyperSmooth an.'],
    ['Himmel weiß, Tiere dunkel.', 'Belichtungskorrektur -0,5 und Tiere nicht direkt gegen die Sonne filmen.']
  ],
  vertical: 'Einen Elefanten, der direkt neben dem Jeep steht, kannst du auch gleich hochkant filmen: Kamera am Griff um 90 Grad drehen. Sonst später in Quik ausschneiden.',
  related: ['hindsight', 'zeitlupe', 'framegrab']
},
{
  id: 'fahrt', art: 'train', title: 'Zug und Fahrten', short: 'Ella-Zug, Tuk-Tuk, Serpentinen im Hochland.', tags: ['Sri Lanka', 'TimeWarp', 'Halterung'],
  goal: 'Die berühmte Zugfahrt und die Wege dazwischen so filmen, dass man mitfährt, ohne seekrank zu werden.',
  screen: { mode: 'video', preset: 'Fahrt', settings: '4K | 60 | HV', shortcuts: ['linse', 'hindsight', 'zoom', 'slomo'] },
  screenNote: 'Eigene Voreinstellung „Fahrt“ mit HyperView für das Mittendrin-Gefühl.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Guter Kompromiss aus Details und Akkulaufzeit bei langen Fahrten.'],
    ['[[fps|Bildrate]]', '60', 'Fahrtbewegung wirkt flüssig, und der Rolling-Shutter-Effekt durch Vibration fällt geringer aus.'],
    ['[[linse|Objektiv]]', 'HyperView', 'Maximales Sichtfeld aus der Zugtür oder dem Tuk-Tuk. Für Aufnahmen mit geradem Horizont (Teeplantagen aus dem Fenster): Linear mit Horizontausgleich.'],
    ['[[hypersmooth|HyperSmooth]]', 'AutoBoost', 'Verstärkt nur, wenn es rüttelt.'],
    ['[[horizont|Horizontausgleich]]', 'bei Linear', 'Hält den Horizont gerade, wenn der Zug in die Kurve kippt oder die Hand wackelt.'],
    ['Ton: [[protune|Wind]]', 'Auto', 'Fahrtwind übersteuert sonst das Mikrofon.', 'Protune'],
    ['Alternativ: [[timewarp|TimeWarp]]', 'Auto', 'Für lange Strecken: Eine Stunde Zugfahrt wird zu einer Minute.', 'Modus Zeitraffer › TimeWarp']
  ],
  mount: [
    'Brusthalterung im Tuk-Tuk oder beim Sitzen am offenen Fenster: zeigt Fahrtrichtung und deine Hände, sehr stabil.',
    'Kopfhalterung für Blicke aus dem Fenster: die Kamera folgt deinem Blick. Wirkt schnell unruhig, eher für kurze Clips.',
    'Griff oder Selfiestick aus der offenen Zugtür: nur mit Handschlaufe, Stick kurz halten. Tunnel, Masten und Äste kommen sehr nah.'
  ],
  tips: [
    'Ella-Zug: Am meisten Wirkung hat die Kamera seitlich aus Tür oder Fenster, wenn der Zug eine Kurve fährt und man den Zug selbst im Bild sieht.',
    'Den Zug von außen filmen: an einer Brücke (z. B. Nine Arch Bridge) mit [[zeitraffer|Zeitraffer]] oder normalem Video vom Stativ oder Felsen aus.',
    'Im Tuk-Tuk Brusthalterung etwas nach oben neigen, sonst filmst du vor allem deinen Bauch und den Sitz.',
    'Lange Fahrten: TimeWarp mit Antippen für Echtzeit, wenn etwas Spannendes passiert. Ergibt automatisch den Wechsel aus schnell und langsam.',
    'Sicherheit zuerst: Bei offener Zugtür mit einer Hand festhalten. Kamera nie mit ausgestrecktem Arm in Fahrtrichtung.'
  ],
  fixes: [
    ['Bild wabbelt wie Wackelpudding.', '[[rolling|Rolling Shutter]] durch Vibration: 60 fps, Kamera nicht auf Metall abstützen, HyperSmooth AutoBoost.'],
    ['Horizont kippt ständig.', 'Objektiv Linear mit Horizontausgleich wählen.'],
    ['Nur Rauschen im Ton.', 'Wind-Reduzierung auf Auto, Kamera aus dem direkten Fahrtwind.'],
    ['Aufnahme bricht nach langer Fahrt ab.', 'Hitze oder Akku. Für lange Strecken TimeWarp statt Video, Frontdisplay aus, notfalls per USB-Powerbank laden.']
  ],
  vertical: 'Für Reels die Kamera am Griff hochkant halten, wenn du aus der Tür filmst: Zug, Landschaft und Gleis wirken im Hochformat sehr gut. Oder in 8:7 aufnehmen und später ausschneiden.',
  related: ['timewarp', 'hyperview', 'drohne']
},
{
  id: 'landschaft', art: 'hills', title: 'Landschaft und Zeitraffer', short: 'Teeplantagen, Nebel, Sonnenaufgang, Sterne.', tags: ['Hochland', 'Zeitraffer', 'Nacht'],
  goal: 'Weite Landschaft scharf und mit geradem Horizont, und Zeitraffer, in denen Nebel und Wolken über die Hügel ziehen.',
  screen: { mode: 'zeitraffer', preset: 'Zeitraffer', settings: '4K | 2s | L', shortcuts: ['dreh', 'linse', 'zoom', 'timer'] },
  screenNote: 'Voreinstellung „Zeitraffer“ mit 2 Sekunden Intervall und Linear.',
  settings: [
    ['Modus', 'Zeitraffer', 'Kamera steht still, die Welt bewegt sich. Für Fahrten nimmst du TimeWarp.'],
    ['[[intervall|Intervall]]', '2 s', 'Gut für ziehenden Nebel und Wolken. Schnelle Wolken 0,5 s, langsamer Sonnenuntergang 5 s.'],
    ['[[aufloesung|Auflösung]]', '4K', 'Für Landschaft genug, und die Dateien bleiben überschaubar.'],
    ['[[linse|Objektiv]]', 'Linear', 'Gerader Horizont statt Fischauge.'],
    ['Videoalternative: [[hdr|HDR]]', 'An', 'Bei Sonnenaufgang mit Gegenlicht: helle Wolken und dunkle Hügel behalten Zeichnung. Nur bei ruhigen Szenen.'],
    ['[[dauer|Aufnahmedauer]]', '30 min', 'Stoppt automatisch. 30 Minuten mit 2 s Intervall ergeben etwa 30 Sekunden Video.'],
    ['Nacht: [[nachtzeitraffer|Nachtzeitraffer]]', 'Auto / 20 s', 'Für Sternenhimmel über der Lodge. Kamera muss völlig ruhig liegen.', 'Modus Zeitraffer › Nachtzeitraffer']
  ],
  mount: [
    'Griff als Mini-Stativ (falls dein Griff ausklappbare Beine hat), auf Fels, Mauer oder Rucksack.',
    'Ohne Stativ: Kamera auf flache Oberfläche legen, mit Steinchen oder Mütze ausrichten. Hauptsache, sie bewegt sich nicht.',
    'Für Wanderungen: Brusthalterung und TimeWarp, so wird der Weg zur Plantage zu einem Clip.'
  ],
  tips: [
    'Horizont in das obere oder untere Drittel legen, nicht in die Mitte.',
    'Vordergrund hilft: ein Teestrauch, eine Pflückerin (vorher fragen), ein Zaunpfahl. Mit dem Superweitwinkel ganz nah ran.',
    'Nebel im Hochland zieht am Morgen: früh raus, Kamera hinstellen, Frühstück holen. Zeitraffer erledigen sich von selbst.',
    'Sonnenaufgang ohne selbst wach zu sein: [[geplant|Geplante Aufnahme]] am Vorabend einstellen.',
    'Für Sternspuren und Nachtzeitraffer brauchst du echte Dunkelheit, z. B. in Yala oder Udawalawe fern von Lampen.'
  ],
  fixes: [
    ['Himmel weiß ausgefressen.', 'Belichtungskorrektur -0,5 oder HDR-Video bei ruhigen Szenen.'],
    ['Zeitraffer ruckelt oder wackelt.', 'Kamera stand nicht still. Feste Unterlage, Bildschirm vorher per Sprachbefehl oder Quik auslösen statt Taste.'],
    ['Horizont schief.', 'Linear und die Wasserwaage im Display nutzen bzw. Horizontausgleich.'],
    ['Akku vor Ende leer.', 'Bei langen Zeitraffern Frontdisplay aus, Display-Abschaltung kurz, Powerbank per USB-C (nicht unterwegs im Regen).']
  ],
  vertical: 'Landschaftszeitraffer funktionieren hochkant besonders gut mit hohem Vordergrund: Kamera um 90 Grad drehen, Teesträucher unten, Nebel oben.',
  related: ['sternspuren', 'geplant', 'lichtmalerei']
},
{
  id: 'unterwegs', art: 'walk', title: 'Unterwegs und Selfie', short: 'Das Basisrezept für Spaziergänge, Märkte, dich selbst.', tags: ['Basis', 'Griff', 'Frontdisplay'],
  goal: 'Ein Rezept, das fast immer passt: Spaziergänge, Märkte, Tempel, Strand, du selbst im Bild.',
  screen: { mode: 'video', preset: 'Standard', settings: '4K | 60 | L+HL', shortcuts: ['slomo', 'linse', 'zoom', 'hindsight'] },
  screenNote: 'Die Standard-Voreinstellung, leicht angepasst.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Reicht für alles und lässt Reserve.'],
    ['[[fps|Bildrate]]', '60', 'Flüssig und mit Zeitlupen-Reserve.'],
    ['[[seitenverhaeltnis|Seitenverhältnis]]', '8:7', 'Wenn angeboten: maximal flexibel für Quer- und Hochformat.'],
    ['[[linse|Objektiv]]', 'Linear + Horizontausgleich', 'Am Griff vor dir: natürliche Proportionen, gerader Horizont. Für Selfies Weitwinkel, sonst wird es eng.'],
    ['[[hypersmooth|HyperSmooth]]', 'An', 'Gehen wirkt wie schweben.'],
    ['[[frontscreen|Frontdisplay]]', 'Vollbild', 'Für Selfies siehst du dich selbst. Sonst aus, spart Akku.', 'Dashboard (nach unten wischen)'],
    ['[[farbe|Farbe]]', 'GoPro', 'Schnell teilbar.', 'Protune']
  ],
  mount: [
    'Griff oder Selfiestick: Für Selfies auf Armlänge, Kamera leicht über Augenhöhe.',
    'Kopfhalterung beim Wandern und Klettern: zeigt deine Hände und den Weg.',
    'Brusthalterung auf Märkten: unauffällig und stabil, hält Gesichter auf Augenhöhe.'
  ],
  tips: [
    'Beim Gehen den Griff locker halten und leicht in den Knien federn. HyperSmooth erledigt den Rest.',
    'Menschen vorher fragen, besonders bei Tempeln und auf Märkten. Auf Tempelgeländen gilt teils Filmverbot.',
    'Weitwinkel-Selfies: Gesicht nicht an den Rand, dort wird es verzerrt.',
    'Für Erzählungen: Mikro der Kamera ist vorne. Sprich zur Kamera, nicht zur Seite.'
  ],
  fixes: [
    ['Gesicht im Selfie verzerrt.', 'Kamera weiter weg (Stick ausziehen), Gesicht in die Bildmitte.'],
    ['Aufnahme läuft nicht, obwohl gedrückt.', 'Bildschirmsperre aktiv oder Karte voll. Im Dashboard prüfen.'],
    ['Ton dumpf.', 'Finger oder Griff verdecken das Mikrofon. Kamera anders greifen.']
  ],
  vertical: 'Für Reels die Kamera einfach hochkant drehen: Die HERO12 erkennt die Lage und nimmt hochkant auf. Für Selfies hochkant besonders praktisch, weil du dich im Frontdisplay siehst.',
  related: ['reframe', 'drohne', 'timewarp']
}
];

/* ================= Ideen ================= */
D.ideasIntro = 'Dinge, die eine große Kamera so nicht kann: winzig, wasserdicht, superweit und mit eingebauten Spezialmodi. Probier pro Reisetag eins davon.';
D.ideas = [
{ id: 'timewarp', title: 'TimeWarp mit Echtzeit-Moment', short: 'Eine ganze Fahrt in 30 Sekunden, mit Bremsmoment.',
  what: 'Ein [[timewarp|TimeWarp]] rafft eine Bewegung stark zusammen und glättet sie. Tippst du während der Aufnahme aufs Display, läuft dieser Teil in Echtzeit. So entsteht ein Clip, der rast und an der spannenden Stelle abbremst.',
  why: 'Stabilisierter Zeitraffer aus der Bewegung braucht mit einer normalen Kamera Gimbal und Nachbearbeitung. Die GoPro rechnet ihn live.',
  where: 'Tuk-Tuk durch Kandy oder Ella, Wanderung auf den Little Adam\'s Peak, Gang über den Markt.',
  settings: [['Modus', 'Zeitraffer › TimeWarp'], ['Geschwindigkeit', 'Auto', 'Passt sich selbst an: langsamer, wenn es ruhig wird.'], ['Objektiv', 'Weitwinkel']],
  steps: ['Zeitraffer-Modus wählen (nach links oder rechts wischen), Voreinstellung TimeWarp.', 'Kamera an Brust oder Griff, Aufnahme starten.', 'Wenn etwas passiert (Kuh auf der Straße, Aussicht): Display antippen. Nochmal tippen geht zurück zur Raffung.', 'Nach dem Ziel stoppen. Fertig ist der Clip ohne Schnitt.'],
  tip: 'Im Gehäuse oder mit Handschuh geht das Antippen nicht. Dann übernimmt die Modus-Taste die Echtzeit-Funktion (falls verfügbar, sonst einfach im Schnitt verlangsamen).' },
{ id: 'hyperview', title: 'HyperView aus der Ich-Perspektive', short: 'Das typische GoPro-Gefühl: mittendrin statt dabei.',
  what: '[[hyperview|HyperView]] nutzt den ganzen Sensor und streckt ihn ins Breitbild. Die Ränder werden gedehnt, das erzeugt ein starkes Geschwindigkeits- und Raumgefühl.',
  why: 'Kein Wechselobjektiv kommt an diesen Bildwinkel heran, schon gar nicht am Kopf getragen.',
  where: 'Zugtür in Ella, Tuk-Tuk-Rücksitz, Bootsfahrt zum Tauchplatz auf den Malediven.',
  settings: [['Objektiv', 'HyperView'], ['Auflösung / Bildrate', '4K / 60'], ['HyperSmooth', 'AutoBoost']],
  steps: ['Brust- oder Kopfhalterung anlegen, Kamera in Blickrichtung ausrichten.', 'Im Dashboard die Orientierung prüfen, damit das Bild nicht kopfsteht.', 'Aufnahme starten und die Kamera vergessen.'],
  tip: 'HyperView wirkt am besten mit etwas Nahem im Bild: Hände am Geländer, Bootsrand, Zuggeländer.' },
{ id: 'reframe', title: 'Einmal filmen, zweimal posten', short: '8:7 aufnehmen, in Quik quer und hochkant ausschneiden.',
  what: 'Mit [[s87|8:7]] speichert die Kamera den ganzen Sensor. In der Quik-App wählst du später per [[reframe|Neu ausrichten]] den Ausschnitt, auch hochkant für Reels, und kannst ihn sogar im Clip wandern lassen.',
  why: 'Normale Kameras nehmen ein festes Format auf. Der fast quadratische Sensor der HERO12 lässt die Entscheidung offen.',
  where: 'Überall, wo du dich nicht festlegen willst: Tauchgänge, Safari, Strand.',
  settings: [['Seitenverhältnis', '8:7'], ['Auflösung', '5.3K oder 4K']],
  steps: ['Voreinstellung bearbeiten und Seitenverhältnis 8:7 wählen.', 'Motiv mittig halten, oben und unten Platz lassen.', 'In Quik den Clip öffnen, Zuschneiden bzw. Neu ausrichten auf 9:16 stellen und den Ausschnitt schieben.'] },
{ id: 'zeitlupe', title: '8-fache Zeitlupe', short: 'Wellen, Vögel, Wassertropfen in 240 Bildern pro Sekunde.',
  what: 'Bei [[zeitlupe|Ultra-Zeitlupe]] nimmt die Kamera 240 Bilder pro Sekunde auf. Abgespielt mit 30 wird jede Sekunde zu acht.',
  why: 'Wenige Kameras dieser Größe schaffen 240 fps in guter Auflösung, und keine davon kannst du dabei ins Meer halten.',
  where: 'Brechende Wellen am Strand, auffliegende Reiher in Udawalawe, dein Kopfschütteln nach dem Tauchgang, ein Sprung vom Boot.',
  settings: [['Voreinstellung', 'Ultra-Zeitlupe'], ['Auflösung / Bildrate', '2.7K / 240'], ['Licht', 'viel Sonne nötig']],
  steps: ['Video-Voreinstellung Ultra-Zeitlupe wählen (oder Kurzbefehl Zeitlupe).', 'Nur bei hellem Tageslicht: Zeitlupe braucht viel Licht, sonst rauscht es.', 'Kurze Clips von 5-10 Sekunden, Kamera ruhig halten.', 'Quik spielt den Clip automatisch verlangsamt ab.'],
  tip: 'Im Kunstlicht flackert Zeitlupe oft. Draußen in der Sonne ist sie am schönsten.' },
{ id: 'hindsight', title: 'HindSight: rückwirkend aufnehmen', short: 'Der Moment, bevor du gedrückt hast, ist schon im Kasten.',
  what: 'Mit [[hindsight|HindSight]] puffert die Kamera ständig 15 oder 30 Sekunden. Drückst du den Auslöser, enthält das Video auch die Zeit davor.',
  why: 'Tiere warten nicht auf dich. Eine Kamera, die schon läuft, bevor du reagierst, gibt es sonst kaum.',
  where: 'Pirschfahrt in Yala, Delfine an der Bootskante, plötzlich auftauchender Walhai beim Schnorcheln.',
  settings: [['HindSight', '15 s'], ['Achtung', 'kostet Akku']],
  steps: ['Kurzbefehl HindSight antippen oder in der Voreinstellung aktivieren.', 'Kamera bleibt im Bereitschaftsmodus und puffert.', 'Passiert etwas: Auslöser drücken. Das Video beginnt rückwirkend.', 'Danach wieder ausschalten, um Akku zu sparen.'] },
{ id: 'sternspuren', title: 'Sternspuren über der Lodge', short: 'Die Erddrehung sichtbar machen.',
  what: 'Der Nachteffekt [[sternspuren|Sternspuren]] belichtet über lange Zeit und addiert die Bilder: Sterne ziehen Kreisbögen.',
  why: 'Mit einer Systemkamera brauchst du dafür Stativ, Fernauslöser, Hunderte Fotos und eine Software zum Stapeln. Die GoPro erledigt das intern.',
  where: 'Safari-Lodge in Yala oder Udawalawe, fern von Lampen. Malediven-Strand bei Neumond.',
  settings: [['Modus', 'Zeitraffer › Sternspuren'], ['Spurlänge', 'Lang oder Max'], ['Dauer', '30-60 min']],
  steps: ['Kamera auf feste Unterlage legen, nach Norden oder Süden ausrichten, wenig Horizont.', 'Voreinstellung Sternspuren wählen, Spurlänge lang.', 'Aufnahme starten, dann mindestens 30 Minuten nicht berühren.', 'Ergebnis: Video, in dem die Spuren wachsen, plus Einzelbild am Ende.'],
  tip: 'Ein Baum oder eine Hütte im Vordergrund macht aus einem Himmelsbild eine Szene.' },
{ id: 'lichtmalerei', title: 'Lichtmalerei am Strand', short: 'Mit der Handylampe in die Nacht schreiben.',
  what: 'Bei [[lichtmalerei|Lichtmalerei]] bleiben bewegte Lichter als Spur stehen. Du schreibst mit einer Taschenlampe oder dem Handylicht Wörter oder Formen in die Luft.',
  why: 'Die Kamera zeigt die entstehende Zeichnung live im Video, das schafft eine normale Langzeitbelichtung nicht.',
  where: 'Strand auf Dhigurah nach dem Abendessen, Hotelterrasse in Negombo.',
  settings: [['Modus', 'Zeitraffer › Lichtmalerei'], ['Spurlänge', 'Lang']],
  steps: ['Kamera fest hinlegen, Richtung dunkler Hintergrund.', 'Voreinstellung Lichtmalerei, Aufnahme starten.', 'Mit dem Licht zur Kamera gewandt zeichnen. Buchstaben spiegelverkehrt schreiben, weil die Kamera dich von vorn sieht. Einfacher: Formen wie Herz, Kreis oder Spirale.', 'Nach 1-2 Minuten stoppen.'],
  tip: 'Licht von der Kamera abgewandt zeigt nichts. Leuchte immer in Richtung Objektiv.' },
{ id: 'fahrzeugspuren', title: 'Lichtspuren im Verkehr', short: 'Tuk-Tuks werden zu Lichtbändern.',
  what: 'Der Nachteffekt [[fahrzeugspuren|Fahrzeug-Lichtspuren]] macht aus Scheinwerfern und Rücklichtern leuchtende Linien.',
  why: 'Klassische Langzeitbelichtung, aber als Video, das die Spuren wachsen lässt, und ohne Stativ-Ausrüstung.',
  where: 'Kreuzung in Colombo oder Negombo am letzten Abend, Serpentinenstraße im Hochland von oben.',
  settings: [['Modus', 'Zeitraffer › Fahrzeug-Lichtspuren'], ['Spurlänge', 'Mittel bis Lang']],
  steps: ['Erhöhter Standpunkt (Brücke, Balkon), Kamera fest auflegen.', 'Voreinstellung wählen, Aufnahme 1-3 Minuten.', 'Nicht bewegen, solange die Aufnahme läuft.'] },
{ id: 'geplant', title: 'Sonnenaufgang, ohne aufzustehen', short: 'Die Kamera startet um 5:45 Uhr allein.',
  what: 'Mit [[geplant|Geplanter Aufnahme]] schaltet sich die GoPro zu einer Uhrzeit selbst ein und nimmt auf. Kombiniert mit [[dauer|Aufnahmedauer]] stoppt sie auch selbst.',
  why: 'Eine Kamera, die man über Nacht draußen liegen lassen kann, weil sie robust und klein ist.',
  where: 'Balkon in Ella oder Nuwara Eliya mit Blick ins Tal, Bungalow-Veranda auf den Malediven.',
  settings: [['Modus', 'Zeitraffer (2 s)'], ['Geplante Aufnahme', 'Uhrzeit'], ['Aufnahmedauer', '45 min']],
  steps: ['Am Abend Kamera aufstellen und Bildausschnitt prüfen.', 'In der Voreinstellung Geplante Aufnahme mit Uhrzeit und Aufnahmedauer setzen.', 'Kamera ausschalten. Sie startet zur eingestellten Zeit.', 'Morgens ansehen und weiterschlafen.'],
  tip: 'Uhrzeit der Kamera vorher auf Ortszeit stellen (über Quik geschieht das automatisch beim Verbinden).' },
{ id: 'drohne', title: 'Selfiestick-Drohnenflug', short: 'Kamera hoch über dir, als würde eine Drohne kreisen.',
  what: 'Ausgezogener Stick, Kamera nach unten auf dich gerichtet, langsam hochheben oder um dich herumdrehen. Mit [[horizont|Horizontausgleich]] bleibt das Bild gerade.',
  why: 'Superweitwinkel plus Stabilisierung lässt den Stick im Bild fast verschwinden. Drohnen sind in Sri Lanka und auf den Malediven ohnehin streng geregelt.',
  where: 'Aussichtspunkt am Little Adam\'s Peak, Sandbank auf den Malediven, Bootsdeck.',
  settings: [['Objektiv', 'Linear + Horizontausgleich'], ['HyperSmooth', 'Boost'], ['Bildrate', '60']],
  steps: ['Stick ganz ausziehen, Kamera nach unten neigen.', 'Aufnahme starten, Arm langsam heben und dabei eine halbe Drehung machen.', 'Der Stick sollte genau in Verlängerung der Kamera zeigen, dann verschwindet er fast.'] },
{ id: 'overunder', title: 'Halb über, halb unter Wasser', short: 'Strand oben, Fische unten, in einem Bild.',
  what: 'Die Kamera halb eintauchen, sodass die Wasserlinie durchs Bild läuft. Oben Insel und Himmel, unten Sand und Fische.',
  why: 'Eine wasserdichte Kamera, die man ohne Sorge halb ins Meer hält.',
  where: 'Flache, ruhige Lagune auf Dhigurah, bei Sonne und Ebbe.',
  settings: [['Objektiv', 'Weitwinkel'], ['Belichtungskorrektur', '-0,5'], ['Video', '4K / 60']],
  steps: ['Ruhiges, klares Wasser suchen, Sonne im Rücken.', 'Kamera ohne Gehäuse (bis 10 m dicht) halb eintauchen, Linse vorher anfeuchten.', 'Langsam bewegen und die Wasserlinie mittig halten.'],
  tip: 'Mit der flachen Front klappt das nur bei ganz ruhigem Wasser und ist Glückssache. Profis nutzen dafür eine Kuppel (Dome-Port). Als Experiment trotzdem lohnend.' },
{ id: 'framegrab', title: 'Fotos aus dem Video', short: 'Aus 5.3K-Clips das beste Standbild ziehen.',
  what: 'Aus einem 5.3K-Video lässt sich in Quik jedes Einzelbild als Foto speichern ([[framegrab|Frame Grab]]). Damit fängst du Momente, die für ein Foto zu schnell waren.',
  why: 'Video in so hoher Auflösung mit so kurzer Verschlusszeit liefert Standbilder in Fotoqualität fürs Handy.',
  where: 'Springende Delfine, Elefanten beim Baden, Sprung ins Meer.',
  settings: [['Auflösung', '5.3K'], ['Bildrate', '60'], ['Belichtung', 'viel Licht = scharfe Einzelbilder']],
  steps: ['In 5.3K filmen.', 'In Quik den Clip öffnen, Bild für Bild zum besten Moment.', 'Frame Grab bzw. Foto speichern.'] }
];

/* ================= Checks ================= */
D.checksIntro = 'Abhaken, was erledigt ist. Die Häkchen bleiben auf deinem Handy gespeichert.';
D.checklists = [
{ id: 'abflug', title: 'Heute vor dem Abflug', when: 'Einmal erledigen, solange du noch WLAN und Steckdose hast.', items: [
  ['Quik-App installieren und Kamera koppeln', 'Google Play: GoPro Quik. Beim Koppeln wird auch die Uhrzeit gesetzt.'],
  ['Firmware-Update über Quik prüfen', 'Quik bietet es nach dem Koppeln an. Kamera dabei am Ladegerät lassen.'],
  ['Kamerasprache auf Deutsch prüfen', 'Einstellungen › Regional › Sprache.'],
  ['Alle Akkus voll laden', 'Lithium-Akkus und Powerbank ins Handgepäck, nicht in den Koffer.'],
  ['Speicherkarte in der Kamera formatieren', 'Vorher prüfen, ob noch Daten des Verleihers drauf sind und ob sie gesichert werden sollen. [[sd|Karte]] mit V30-Aufdruck?'],
  ['Eigene Voreinstellungen anlegen: Tauchen, Safari, Fahrt', 'Werte aus den Szenen-Rezepten in dieser App.'],
  ['Tauchgehäuse ohne Kamera im Waschbecken testen', '15 Minuten mit Gewicht untertauchen, innen mit Taschentuch auf Feuchtigkeit prüfen.'],
  ['Zubehör einpacken', 'Gehäuse, Rotfilter, [[antifog|Anti-Beschlag-Einlagen]], Griff, Brust- und Kopfhalterung, USB-C-Kabel, Netzteil, Mikrofasertuch, Sicherungsleine.'],
  ['Diese App offline speichern', 'Im Browser-Menü „Zum Startbildschirm hinzufügen“. Danach funktioniert sie auch ohne Netz.']
] },
{ id: 'morgen', title: 'Jeden Morgen', items: [
  ['Akku voll, Ersatzakku geladen'],
  ['Genug Speicher frei', 'Oben in der Mitte zeigt das Display die Restzeit.'],
  ['Linse und Frontglas sauber', 'Mikrofasertuch, keine Sonnencreme-Finger.'],
  ['Richtige Voreinstellung für den Tag gewählt'],
  ['Halterungen und Schrauben fest']
] },
{ id: 'vortauch', title: 'Vor jedem Tauchgang', when: 'Am besten im klimatisierten Zimmer oder kühl im Schatten.', items: [
  ['[[dichtung|Dichtung]] im Gehäuse prüfen', 'Mit dem Finger rundum fahren: kein Haar, kein Sand, keine Risse.'],
  ['Trockene Anti-Beschlag-Einlage einlegen'],
  ['Akku voll, Kamera mit Tauch-Voreinstellung als Standard'],
  ['Frontdisplay und WLAN aus', 'Spart Akku, unter Wasser ohnehin nutzlos.'],
  ['Gehäuse schließen, Verschluss hörbar einrasten lassen'],
  ['Tasten durchs Gehäuse testen', 'Auslöser startet und stoppt? Modus-Taste schaltet?'],
  ['Rotfilter-Entscheidung', 'Sonnig, 5-20 m: drauf. Flach, Nacht, Lampe: weg.'],
  ['Sicherungsleine am Handgelenk oder Jacket']
] },
{ id: 'nachtauch', title: 'Nach jedem Tauchgang', items: [
  ['Geschlossenes Gehäuse in Süßwasser spülen', 'Ein paar Minuten einweichen, dabei die Tasten mehrmals drücken.'],
  ['Außen abtrocknen, erst dann öffnen', 'Kein Tropfen darf beim Öffnen hineinlaufen.'],
  ['Akku tauschen oder laden'],
  ['Anti-Beschlag-Einlage trocknen'],
  ['Clips sichten und mit Quik aufs Handy holen']
] },
{ id: 'abend', title: 'Jeden Abend', items: [
  ['Aufnahmen in Quik aufs Handy übertragen', 'Am Hotel-WLAN geht es schneller, die Kamera baut ein eigenes WLAN auf.'],
  ['Alle Akkus laden'],
  ['Kamera und Halterungen von Sand und Salz befreien'],
  ['Erst nach gesicherter Übertragung Platz auf der Karte schaffen']
] }
];

D.problems = [
{ group: 'Akku und Hitze', items: [
  ['Die Kamera wird heiß und schaltet ab.', '<p>Die HERO12 warnt mit einem Temperatursymbol und schaltet sich bei Überhitzung ab, um sich zu schützen. Häufigste Ursachen: hohe Auflösung und Bildrate, direkte Sonne, keine Luftbewegung (im Jeep, auf dem Handtuch).</p><ul class="bul"><li>Auflösung oder Bildrate senken (4K 30 statt 5.3K 60).</li><li>Kamera in den Schatten, in der Hand oder im Fahrtwind halten.</li><li>Frontdisplay aus, WLAN aus, Display-Helligkeit runter.</li><li>Abkühlen lassen, nicht in den Kühlschrank (Kondenswasser).</li></ul>'],
  ['Der Akku ist zu schnell leer.', '<ul class="bul"><li>Frontdisplay aus, Display-Helligkeit runter, automatisches Abschalten auf kurz.</li><li>WLAN und Fernbedienung aus, wenn du Quik nicht brauchst.</li><li>HindSight nur bei Bedarf, es nimmt ständig auf.</li><li>Für Tauchgänge [[quikcapture|QuikCapture]]: Kamera aus, Auslöser startet die Aufnahme direkt.</li><li>Unterwegs per USB-C an der Powerbank laden. Am Netzteil laden ist schneller.</li></ul>'],
  ['Aufnahme stoppt nach einiger Zeit von allein.', '<p>Meist Hitze, ein voller Speicher oder eine zu langsame Karte. Ist eine [[dauer|Aufnahmedauer]] eingestellt, endet die Aufnahme planmäßig. Sehr lange Videos teilt die Kamera außerdem in mehrere Dateien auf, das ist normal und kein Verlust.</p>']
] },
{ group: 'Bild und Ton', items: [
  ['Das Bild ist verwackelt.', '<p>[[hypersmooth|HyperSmooth]] prüfen (An oder AutoBoost). Bei Vibration hilft eine höhere Bildrate. Bei Dämmerung wird die Verschlusszeit lang, Bewegung verwischt: mehr Licht oder ruhiger halten.</p>'],
  ['Nachts ist alles körnig oder verschmiert.', '<p>Die kleine Sensorfläche braucht Licht. In der Dämmerung lieber 30 statt 60 fps, [[iso|ISO]]-Obergrenze 1600 bis 3200, und die Kamera abstützen. Für Sterne: Nachtzeitraffer oder Sternspuren statt Video.</p>'],
  ['Unter Wasser ist alles blau oder grün.', '<p>Rot verschwindet im Wasser zuerst. Näher ans Motiv, [[rotfilter|Rotfilter]] zwischen etwa 5 und 20 m, [[wb|Weißabgleich]] Auto. In flachem Wasser oder mit Lampe den Filter abnehmen, sonst wird es rosa.</p>'],
  ['Wassertropfen auf der Linse.', '<p>Linse vor dem Eintauchen nass machen, dann bilden sich weniger Tropfen. Beim Auftauchen kurz untertauchen und schnell wieder hoch, oder das Glas mit der Zunge oder einem nassen Finger abwischen (der alte Surfertrick).</p>'],
  ['Der Ton rauscht im Wind.', '<p>In [[protune|Protune]] die Wind-Reduzierung auf Auto. Kamera aus dem direkten Fahrtwind, Mikrofon (vorne unten) nicht mit dem Finger verdecken.</p>'],
  ['Die Farben wirken flau und grau.', '<p>Wahrscheinlich steht das Farbprofil auf [[log|Log]] oder Natürlich. Für Quik am Handy auf „GoPro“ stellen.</p>']
] },
{ group: 'Speicher und Übertragen', items: [
  ['Die Kamera meldet einen Kartenfehler.', '<p>Karte in der Kamera neu formatieren (vorher sichern!). Bleibt der Fehler, ist die Karte zu langsam oder defekt. Für die HERO12: microSD mit [[sd|V30 / UHS-3]], bis 512 GB.</p>'],
  ['Quik findet die Kamera nicht.', '<ul class="bul"><li>Bluetooth und Standort am Handy einschalten, Quik die Berechtigungen geben.</li><li>Kamera einschalten, im Dashboard die Verbindungen aktivieren.</li><li>Im Zweifel Verbindungen zurücksetzen und neu koppeln (Einstellungen › Verbindungen).</li><li>Für die Übertragung baut die Kamera ein eigenes WLAN auf, das Handy verliert dabei kurz das Internet. Das ist normal.</li></ul>'],
  ['Das Handy wird voll.', '<p>5.3K-Clips sind groß (mehrere Gigabyte pro 10 Minuten). In Quik nur die besten Clips importieren, oder in Quik einen Ausschnitt speichern statt des ganzen Videos. Die Originale bleiben auf der Karte.</p>'],
  ['Videos ruckeln am Handy oder Computer.', '<p>Die GoPro speichert in [[hevc|HEVC]]. Ältere Geräte kommen bei 5.3K nicht mit. Quik wandelt beim Exportieren um; für den Computer notfalls eine niedrigere Auflösung filmen.</p>']
] },
{ group: 'Unter Wasser', items: [
  ['Das Gehäuse beschlägt.', '<p>Feuchte Tropenluft ist im Gehäuse eingeschlossen und kondensiert am kühleren Glas. Gehäuse im klimatisierten Raum schließen, getrocknete [[antifog|Anti-Beschlag-Einlage]] rein, vor dem Tauchgang nicht in der Sonne liegen lassen.</p>'],
  ['Ich kann im Gehäuse nichts einstellen.', '<p>Der Touchscreen reagiert durch das Gehäuse nicht. Die Tasten schon. Deshalb das Tauchrezept vorab als [[standardvor|Standard-Voreinstellung]] festlegen. Mit der Modus-Taste wechselst du zwischen den Modi.</p>'],
  ['Wasser im Gehäuse.', '<p>Sofort auftauchen, Kamera nach oben halten. An Land: Gehäuse außen trocknen, öffnen, Akku raus. Die HERO12 selbst ist bis 10 m dicht, flaches Salzwasser verträgt sie. Gründlich mit Süßwasser spülen und trocknen lassen. Danach Dichtung prüfen, bevor es wieder runtergeht.</p>']
] }
];

D.basicsIntro = 'Die wichtigsten Stellschrauben, kurz erklärt.';
D.basics = [
  { t: 'Modus, Voreinstellung, Einstellung: wie hängt das zusammen?', d: '<p>Ganz oben stehen die drei [[modus|Aufnahmemodi]] Video, Foto und Zeitraffer. Jeder Modus hat mehrere [[preset|Voreinstellungen]], und jede Voreinstellung ist ein Paket aus Einzeleinstellungen. Du änderst also selten eine einzelne Einstellung, du wählst ein Paket.</p><div class="note"><p>Bildlich: Modus ist die Abteilung im Supermarkt, Voreinstellung das fertige Rezept, die Einstellungen sind die Zutaten.</p></div><p>Eigene Voreinstellung anlegen: Voreinstellung unten antippen, in der Liste ganz nach unten scrollen, Plus-Symbol.</p>' },
  { t: 'Auflösung und Bildrate: welche Kombination wofür?', d: '<ul class="bul"><li><b>5.3K 30</b>: maximale Details, viel Spielraum zum Zuschneiden und für Standbilder. Landschaft, Safari.</li><li><b>4K 60</b>: der Allrounder. Flüssig, 2-fache Zeitlupe möglich, moderat im Akku. Tauchen, Fahrten, Alltag.</li><li><b>4K 120 / 2.7K 240</b>: Zeitlupe. Braucht viel Licht.</li><li><b>1080p</b>: kleinste Dateien, längste Laufzeit. Für lange, unwichtige Aufnahmen.</li></ul><p>Faustregel: Je höher beide Werte, desto mehr Akku, Wärme und Speicher.</p>' },
  { t: 'Digitale Objektive im Vergleich', d: '<p>Von weit nach eng: [[hyperview|HyperView]], [[superview|SuperView]], [[weitwinkel|Weitwinkel]], [[linear|Linear]], Linear + [[horizont|Horizontausgleich]], [[schmal|Schmal]].</p><ul class="bul"><li>Mittendrin-Gefühl und Geschwindigkeit: HyperView oder SuperView.</li><li>Das typische GoPro-Bild, unter Wasser: Weitwinkel.</li><li>Landschaft, Architektur, Menschen ohne Verzerrung: Linear.</li><li>Ferne Motive: Schmal oder besser später zuschneiden.</li></ul><p>Nicht jedes Objektiv gibt es bei jeder Auflösung und Bildrate. Die Kamera graut Kombinationen aus, die nicht gehen.</p>' },
  { t: 'HyperSmooth: wie viel Stabilisierung?', d: '<p>[[hypersmooth|HyperSmooth]] „An“ reicht fast immer. „Boost“ für sehr unruhige Situationen (Laufen, Ritt im Jeep), kostet Bildwinkel. [[autoboost|AutoBoost]] entscheidet selbst. „Aus“ nur auf Stativ oder bei Zeitraffern, die die Kamera ohnehin anders stabilisiert.</p>' },
  { t: 'Protune: muss ich das anfassen?', d: '<p>Für den Anfang nicht. [[protune|Protune]] lohnt sich bei drei Situationen auf deiner Reise:</p><ul class="bul"><li>Tauchen: [[iso|ISO]]-Obergrenze und Bittiefe festlegen.</li><li>Gleißende Sonne, Sand, Wasser: [[ev|Belichtungskorrektur]] auf -0,5.</li><li>Wind und Fahrt: Wind-Reduzierung.</li></ul><p>Den Rest kann Automatik besser, als man glaubt.</p>' },
  { t: 'Farbe und Bittiefe für den Handyschnitt', d: '<p>Weil du in Quik am Handy schneidest: [[farbe|Farbe]] „GoPro“, Bittiefe [[bittiefe|10 Bit]] wenn verfügbar. [[log|GP-Log]] meiden, das braucht Farbkorrektur am Computer und sieht in Quik grau aus.</p>' },
  { t: 'Einfache oder Pro-Steuerung?', d: '<p>In der [[pro|einfachen Steuerung]] sieht die Kamera übersichtlicher aus, du kommst aber nicht an Voreinstellungen, Kurzbefehle und Protune. Diese App geht von der Pro-Steuerung aus. Umschalten: im [[dashboard|Dashboard]] (vom oberen Rand nach unten wischen).</p>' }
];
