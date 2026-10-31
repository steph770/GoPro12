/* H12 Begleiter - Inhalte. [[schluessel]] oder [[schluessel|Text]] wird zum antippbaren Begriff. */
var D = window.D = {};

/* ================= Begriffe ================= */
D.terms = {
  preset: { t: 'Voreinstellung', en: 'Preset', d: 'Ein gespeichertes Paket aus Einstellungen (Auflösung, Bildrate, Objektiv, Stabilisierung usw.) unter einem Namen. Du wechselst damit mit einem Tipp zwischen fertigen Rezepten, statt jede Einstellung einzeln zu ändern.', bild: 'Wie Speicherplätze für Radiosender: einmal eingestellt, danach nur noch auswählen.', wo: 'Unten in der Mitte des Displays auf die Voreinstellung tippen.' },
  modus: { t: 'Aufnahmemodus', en: 'Capture mode', d: 'Die drei Grundarten: Video, Foto und Zeitraffer. Jeder Modus hat eigene Voreinstellungen.' },
  aufloesung: { t: 'Auflösung', en: 'Resolution', d: 'Wie viele Bildpunkte ein Videobild hat. 5.3K hat etwa 5300 Pixel in der Breite, 4K etwa 3800, 2.7K etwa 2700, 1080p etwa 1900. Mehr Auflösung heißt mehr Details und mehr Spielraum zum Zuschneiden, aber größere Dateien, mehr Akkuverbrauch und mehr Wärme.' },
  fps: { t: 'Bildrate (fps)', en: 'Frame rate, frames per second', d: 'Wie viele Einzelbilder pro Sekunde aufgenommen werden. 24 bis 30 wirkt wie Film, 60 wirkt flüssiger und erlaubt doppelte Zeitlupe. 120 und 240 sind für starke Zeitlupe gedacht: Die Kamera nimmt schneller auf als abgespielt wird, so dehnt sich die Bewegung. Mit Antiflimmern 50 Hz (empfohlen für diese Reise) heißen die Stufen 25, 50, 100 und 200.', bild: 'Ein Daumenkino mit mehr Seiten pro Sekunde: Spielst du es langsamer ab, bleibt es trotzdem flüssig.' },
  seitenverhaeltnis: { t: 'Seitenverhältnis', en: 'Aspect ratio', d: 'Form des Bildes. 16:9 ist das normale Breitbild (YouTube, Fernseher). 9:16 ist dasselbe hochkant (Reels, Shorts). 8:7 ist fast quadratisch und nutzt die ganze Sensorfläche.' },
  s87: { t: '8:7 (voller Sensor)', en: '8:7 full sensor', d: 'Die HERO12 hat einen fast quadratischen Sensor. Im Format 8:7 wird er vollständig genutzt. Aus so einem Clip kannst du später in der Quik-App sowohl ein Querformat (16:9) als auch ein Hochformat (9:16) herausschneiden, ohne beim Filmen entscheiden zu müssen.', bild: 'Wie ein großer Bogen Papier, aus dem du später ein quer- oder hochformatiges Foto ausschneidest.' },
  linse: { t: 'Digitales Objektiv', en: 'Digital lens', d: 'Die GoPro hat ein fest eingebautes Superweitwinkel-Objektiv. Das „digitale Objektiv“ bestimmt, welcher Ausschnitt verwendet und wie stark die Fischaugen-Krümmung entzerrt wird. Von weit nach eng: HyperView, SuperView, Weit, Linear und Linear + Horizontsperre. Welche angeboten werden, hängt von Auflösung und Bildrate ab.', bild: 'Wie ein Bilderrahmen, den du über dasselbe Foto legst: Der Rahmen ändert den Ausschnitt, das Foto bleibt gleich.' },
  hyperview: { t: 'HyperView', d: 'Das weiteste digitale Objektiv: Es nutzt den vollen 8:7-Sensor und streckt ihn auf 16:9. Ergebnis: maximaler Rundumblick mit starkem Mittendrin-Gefühl, die Ränder wirken gedehnt. Ideal für Fahrten aus Ich-Perspektive.' },
  superview: { t: 'SuperView', d: 'Sehr weites digitales Objektiv, etwas weniger extrem als HyperView. Gut für Action aus Ich-Perspektive.' },
  weitwinkel: { t: 'Weit', en: 'Wide', d: 'Das klassische GoPro-Bild: sehr weit, mit sichtbarer Krümmung zum Rand hin (Fischaugen-Effekt). Gute Standardwahl.' },
  linear: { t: 'Linear', d: 'Das Bild wird entzerrt: Gerade Linien wie Horizont oder Häuserkanten bleiben gerade. Etwas engerer Ausschnitt. Gut für Landschaft, Architektur und alles, was natürlich aussehen soll.' },
  horizont: { t: 'Horizontsperre / Horizontausrichtung', en: 'Horizon Lock / Horizon Leveling', d: 'Die Kamera hält den Horizont gerade. Die Horizontsperre schafft das sogar bei einer vollen 360-Grad-Drehung und gilt bei den meisten Bildraten. Bei der jeweils höchsten Bildrate (5.3K 50, 4K 100, 2.7K 200 bzw. bei 60 Hz 60, 120, 240) arbeitet stattdessen die Horizontausrichtung, die nur Neigungen um etwa 25 Grad ausgleicht. In 8:7 und 9:16 gibt es beides nicht. Dafür wird ein Teil des Bildes abgeschnitten.', wo: 'Als Objektiv „Linear + Horizontsperre“ wählen.' },
  hypersmooth: { t: 'HyperSmooth', d: 'Die elektronische Bildstabilisierung der GoPro. Die Kamera schneidet einen etwas kleineren Ausschnitt aus und verschiebt ihn gegen deine Wackler. Stufen: Aus, Ein (hohe Stabilisierung, wenig Beschnitt) und AutoBoost (maximale Stabilisierung bei möglichst weitem Bild, der Beschnitt passt sich an).', bild: 'Wie ein Kran-Kameramann, der jedes Ruckeln im letzten Moment ausgleicht - nur dass er dafür ein Stück vom Bildrand braucht.' },
  autoboost: { t: 'AutoBoost', d: 'HyperSmooth-Stufe, die so stark wie nötig stabilisiert und dabei so viel Bild wie möglich behält. Wackelt es kaum, bleibt das Bild weit, bei starkem Ruckeln wird mehr abgeschnitten.' },
  protune: { t: 'Protune', d: 'Die erweiterten Einstellungen der GoPro: Weißabgleich, ISO, Verschlusszeit, Belichtungskorrektur, Schärfe, Farbe, Bitrate und Ton. Nur in den Profi-Bedienfunktionen: Voreinstellung gedrückt halten und in den Einstellungen nach unten scrollen. Gilt jeweils nur für diese Voreinstellung.' },
  wb: { t: 'Weißabgleich', en: 'White balance', d: 'Sagt der Kamera, welche Farbe das Licht hat, damit Weiß auch weiß aussieht. Angabe in Kelvin: niedrige Werte (2300 K) für warmes Kunstlicht, hohe (6500 K) für Schatten und bewölkten Himmel. „Auto“ entscheidet selbst. Die Kamera bietet Auto, 2300K bis 6500K und Nativ.', wo: 'Protune › Weißabgleich' },
  iso: { t: 'ISO', d: 'Die Lichtempfindlichkeit. Höhere ISO macht das Bild bei wenig Licht heller, aber körniger (Bildrauschen). Bei der GoPro stellst du in Protune eine Unter- und Obergrenze ein (100 bis 6400) und die Kamera wählt dazwischen.' },
  shutter: { t: 'Verschlusszeit', en: 'Shutter', d: 'Wie lange jedes Einzelbild belichtet wird. Kurz (1/1000 s) friert Bewegung ein, lang (1/30 s) lässt Bewegungen verwischen. Bei Video wirkt eine Verschlusszeit von etwa 1/(2 x Bildrate) am natürlichsten, das geht in der Sonne aber nur mit Graufilter.' },
  ev: { t: 'Belichtungskorrektur (Bel.-Korr.)', en: 'Exposure compensation, EV', d: 'Macht das Bild gezielt heller (+) oder dunkler (-), ohne sonst etwas zu ändern. -0,5 schützt helle Bereiche wie Himmel, Sand oder Wasseroberfläche vor dem Ausfressen (reines Weiß ohne Zeichnung). Bereich: bis zu 2 Stufen in jede Richtung.', wo: 'Protune › Bel.-Korr. oder über die Belichtungssteuerung (Display gedrückt halten).' },
  bittiefe: { t: 'Bittiefe (8 / 10 Bit)', en: 'Bit depth', d: 'Wie viele Farbabstufungen gespeichert werden. 8 Bit: rund 16 Millionen Farben. 10 Bit: über eine Milliarde. Mehr Abstufungen verhindern Streifen in Verläufen (Himmel, Wasser) und vertragen Farbkorrektur besser.', bild: 'Eine Treppe mit mehr, dafür kleineren Stufen: Von weitem sieht sie wie eine glatte Rampe aus.', wo: 'Einstellungen › Video › Bittiefe. Gilt für alle Voreinstellungen, wirkt ab 4K und nicht bei 9:16.' },
  bitrate: { t: 'Bitrate', d: 'Wie viele Daten pro Sekunde gespeichert werden. Höher heißt weniger Kompression und mehr Details bei viel Bewegung (Wasser, Blätter, Staub), aber größere Dateien. Die HERO12 bietet Standard und Hoch (bis 120 Mbit/s).', wo: 'Einstellungen › Video › Bitrate' },
  farbe: { t: 'Farbe und Profil', en: 'Color, Profile', d: 'Zwei Stellschrauben. In Protune › Farbe wählst du die Abstimmung: „Natürlich“ ist der Standard, daneben gibt es eine kräftigere und eine flache Variante (englisch Vibrant und Flat). Beim „Profil“ wählst du Standard, HDR oder Log. Für Quik am Handy: Profil Standard, Farbe Natürlich oder die kräftige Variante.' },
  log: { t: 'GP-Log', d: 'Ein sehr flaches Farbprofil, das möglichst viel Helligkeitsumfang speichert. Sieht unbearbeitet grau und matt aus und braucht Farbkorrektur am Computer. Für Handyschnitt mit Quik nicht empfehlenswert. Funktioniert nur mit 10-Bit.', wo: 'Profil › Log (vorher Einstellungen › Video › Bittiefe auf 10-Bit)' },
  hdr: { t: 'HDR', en: 'High Dynamic Range', d: 'Hoher Dynamikumfang: Die Kamera kombiniert mehrere Belichtungen bzw. arbeitet so, dass helle und dunkle Bereiche gleichzeitig Zeichnung behalten. Gut bei Gegenlicht und Sonnenauf- und -untergang, am besten bei hellem Licht und ruhigen Szenen. Video-HDR gibt es bei 5.3K bis 25 und 4K bis 50 in 16:9 sowie 4K bis 25 in 8:7 (bei 60 Hz: 30, 60, 30).', wo: 'Video: Profil › HDR. Foto: Ausgabe › HDR.' },
  hindsight: { t: 'HindSight', d: 'Die Kamera puffert ständig die letzten 15 oder 30 Sekunden. Drückst du den Auslöser, beginnt das Video rückwirkend vor dem Drücken. So verpasst du den Moment nicht, in dem der Leopard aus dem Gebüsch kommt. Kostet merklich Akku, weil die Kamera ständig aufnimmt.', bild: 'Wie eine Dashcam, die immer mitläuft, aber nur speichert, wenn du es willst.' },
  timewarp: { t: 'TimeWarp', d: 'Ein stabilisierter Zeitraffer aus der Bewegung, also während du gehst, fährst oder läufst. Die Kamera beschleunigt das Video (z. B. 10x) und glättet dabei stark. Bei „Auto“ passt sie die Geschwindigkeit selbst an. Feste Stufen: 2x, 5x, 10x, 15x, 30x. Antippen des Displays während der Aufnahme schaltet auf Echtzeit, nochmal antippen zurück (Geschwindigkeitsanpassung).' },
  zeitraffer: { t: 'Zeitraffer', en: 'Time lapse', d: 'Die Kamera macht in festen Abständen ein Bild (z. B. alle 0,5 oder 2 Sekunden) und setzt sie zu einem Video zusammen. Für Wolken, Nebel, Menschenmengen. Die Kamera muss dabei still stehen.' },
  nachtzeitraffer: { t: 'Zeitraffer bei Nacht', en: 'Night Lapse', d: 'Zeitraffer mit langen Belichtungszeiten für die Nacht, etwa für Sternenhimmel. Kamera muss absolut ruhig stehen.' },
  nachteffekte: { t: 'Nachteffekte', en: 'Night Effects', d: 'Langzeitbelichtungs-Effekte im Zeitraffer-Modus: Startrails, Lichtmalerei und Auto-Lichtspuren. Die Kamera addiert Bilder, sodass Lichter als Spuren erscheinen. Länge der Lichtspur: Max, Lange oder Kurze Lichtspuren.' },
  zeitlupe: { t: 'Zeitlupe', en: 'Slo-Mo', d: 'Mit hoher Bildrate aufnehmen und normal abspielen. Bei 50-Hz-Einstellung: 50 Bilder pro Sekunde ergeben 2-fache, 100 ergeben 4-fache und 200 ergeben 8-fache Zeitlupe (bei 60 Hz: 60, 120, 240).', wo: 'Shortcut Geschwindigkeit oder Bildrate in der Voreinstellung' },
  quik: { t: 'Quik-App', d: 'Die GoPro-App fürs Handy: Kamera fernsteuern, Aufnahmen aufs Handy übertragen, schneiden, Hochformat-Ausschnitte wählen und Firmware aktualisieren. Für Android im Google Play Store.' },
  quikcapture: { t: 'QuikCapture', d: 'Wenn die Kamera aus ist, startet ein Druck auf den Auslöser sofort eine Videoaufnahme mit den zuletzt genutzten Videoeinstellungen. Ein weiterer Druck stoppt sie, und die Kamera schaltet wieder ab. Spart Akku und ist ideal im Tauchgehäuse.', wo: 'Standardmäßig an. Dashboard › QuikCapture oder Einstellungen › Allgemein.' },
  hilight: { t: 'HiLight', d: 'Eine Markierung, die du während der Aufnahme setzt. Quik findet die Stelle später sofort und nutzt sie für automatische Schnitte.' },
  gpr: { t: 'RAW (.GPR)', d: 'Unbearbeitete Sensordaten bei Fotos, zusätzlich zur JPG-Datei. Mehr Spielraum bei Belichtung und Farbe, braucht aber ein Bearbeitungsprogramm wie Lightroom.' },
  superphoto: { t: 'SuperFoto', d: 'Automatische Bildoptimierung bei Fotos: Die Kamera wählt je nach Licht HDR, Rauschunterdrückung oder Tonwertanpassung. Bequem, aber kein RAW möglich.' },
  rotfilter: { t: 'Rotfilter', d: 'Wasser schluckt rotes Licht schon in wenigen Metern Tiefe, alles wird blau-grün. Ein Rotfilter vor dem Objektiv lässt Blau und Grün weniger durch und gleicht so aus. Funktioniert nur mit Sonnenlicht und in einem bestimmten Tiefenbereich. Magentafilter sind die Variante für grünliches Wasser.' },
  antifog: { t: 'Anti-Beschlag-Einlage', en: 'Anti-fog insert', d: 'Saugfähige Streifen, die man ins Gehäuse legt. Sie nehmen die Feuchtigkeit der eingeschlossenen Luft auf, damit das Glas von innen nicht beschlägt. Bis zu viermal verwendbar. Zum Trocknen etwa 5 Minuten bei 150 °C in den Backofen, dann luftdicht aufbewahren. Die Einlage darf die Dichtung nicht berühren.' },
  dichtung: { t: 'Dichtung (O-Ring)', d: 'Der Gummiring im Deckel des Tauchgehäuses. Schon ein Haar oder Sandkorn darauf kann zu Wassereinbruch führen. Vor jedem Tauchgang ansehen und mit dem Finger abfahren.' },
  backscatter: { t: 'Schwebeteilchen-Reflexe', en: 'Backscatter', d: 'Helle Punkte im Bild, wenn Licht (Sonne oder Lampe) Partikel im Wasser direkt vor der Kamera anstrahlt. Abhilfe: nah ans Motiv, Lampen seitlich halten, nicht im aufgewirbelten Sand filmen.' },
  reframe: { t: 'Neu ausrichten (Reframe)', d: 'In der Quik-App nachträglich einen Ausschnitt wählen, z. B. ein Hochformat aus einem breiten Clip. Funktioniert am besten mit 8:7-Aufnahmen und hoher Auflösung: Aus 5.3K 8:7 bleibt für ein Hochformat-Reel rund 2,4-fache Reserve, aus 4K 16:9 fast keine.' },
  framegrab: { t: 'Frame Grab', d: 'Ein Einzelbild aus einem Video als Foto speichern. Bei 5.3K 16:9 hat so ein Standbild knapp 16 Megapixel, bei 5.3K 8:7 rund 24. Genug für Instagram und Abzüge. In Quik beim Ansehen eines Videos.' },
  enduro: { t: 'Enduro-Akku', d: 'Der Akku der HERO12 (1720 mAh), gebaut für Kälte und lange Laufzeit. Austauschbar über die Klappe an der Seite.' },
  sd: { t: 'microSD-Karte (V30 / UHS-3)', d: 'Die Speicherkarte. Für 5.3K und hohe Bitraten braucht die GoPro schnelle Karten, erkennbar am Aufdruck V30 oder U3. Langsame Karten führen zu Abbrüchen und Fehlermeldungen. Bis 1 TB. In der Kamera formatieren, nicht am Computer.', wo: 'Einstellungen › Zurücksetzen › SD-Karte formatieren' },
  nd: { t: 'Graufilter (ND)', en: 'Neutral density filter', d: 'Ein „Sonnenbrillen“-Filter, der nur Licht reduziert. Damit kann die Kamera auch in der Sonne längere Verschlusszeiten wählen, Bewegungen wirken dann natürlich verwischt statt abgehackt.' },
  hevc: { t: 'HEVC (H.265)', d: 'Das platzsparende Videoformat der GoPro. Moderne Handys spielen es ab, ältere Rechner kommen manchmal ins Stocken.' },
  rolling: { t: 'Rolling Shutter („Wackelpudding“)', d: 'Der Sensor liest das Bild zeilenweise aus. Bei Vibrationen (Motor, Zug) oder schnellen Schwenks wirken gerade Linien schief oder wabbelig. Höhere Bildrate und feste Halterung helfen.' },
  crop: { t: 'Beschnitt (Crop)', d: 'Teil des Bildes, der abgeschnitten wird, etwa für Stabilisierung oder Horizontsperre. Mehr Beschnitt heißt engerer Bildausschnitt.' },
  dashboard: { t: 'Dashboard', d: 'Das Schnellmenü, das du mit einem Wisch vom oberen Displayrand nach unten öffnest (nur im Querformat). Dort liegen Kacheln wie Sprachsteuerung, QuikCapture, Bildschirmsperre und Display vorne. Nach links gewischt: Gerät koppeln, Steuerung und Einstellungen. Nach rechts: der Status der Speicherkarte.' },
  frontscreen: { t: 'Vorderes Display', en: 'Front screen', d: 'Der kleine Farbbildschirm vorne neben dem Objektiv. Optionen: Vollbild, Aktives Display (unbeschnittene Vorschau), Nur Status oder Display aus. Das Livebild ist praktisch für Selfies, „Display aus“ spart Akku.', wo: 'Dashboard › Display vorne' },
  standardvor: { t: 'Standardvoreinstellung', en: 'Default preset', d: 'Die Voreinstellung, mit der die Kamera nach dem Einschalten mit der Modustaste startet. Für Tauchgänge Gold wert: Du stellst dein Tauchrezept als Standard ein und musst im Gehäuse nichts mehr umstellen. Achtung: QuikCapture nutzt stattdessen die zuletzt verwendete Video-Voreinstellung.', wo: 'Einstellungen › Allgemein › Standardvoreinstellung' },
  timecode: { t: 'Timecode-Synchronisation', d: 'Gleicht die Uhrzeit mehrerer Kameras ab, damit sich Clips im Schnitt leicht zusammenführen lassen. Für dich kaum relevant.' },
  touchzoom: { t: 'Touch-Zoom', d: 'Digitaler Zoom per Schieberegler am Display. Vergrößert den Bildausschnitt, verliert dabei Details. Der Regler rechts sperrt den Zoomfaktor.' },
  intervall: { t: 'Zeitrafferintervall', en: 'Interval', d: 'Der Abstand zwischen zwei Bildern beim Zeitraffer, von 0,5 s (Standard) bis 1 h. GoPro empfiehlt 2 s für belebte Straßen und 5 bis 10 s für Wolken. Faustregel: 2 s Intervall über 10 Minuten ergeben 10 Sekunden Video.' },
  sternspuren: { t: 'Startrails', en: 'Star Trails', d: 'Die Kamera belichtet über lange Zeit, sodass Sterne durch die Erddrehung als Kreisbögen erscheinen.' },
  lichtmalerei: { t: 'Lichtmalerei', en: 'Light Painting', d: 'Bewegte Lichtquellen (Taschenlampe, Handylicht, Wunderkerze) hinterlassen leuchtende Spuren im Bild, alles andere bleibt dunkel.' },
  fahrzeugspuren: { t: 'Auto-Lichtspuren', en: 'Vehicle Light Trails', d: 'Scheinwerfer und Rücklichter von Autos und Tuk-Tuks werden zu leuchtenden Bändern.' },
  geplant: { t: 'Geplante Aufnahme', en: 'Scheduled Capture', d: 'Die Kamera schaltet sich zu einer festgelegten Uhrzeit selbst ein und startet die Aufnahme. Bis zu 24 Stunden im Voraus. Ideal für Sonnenaufgänge.', wo: 'Voreinstellung gedrückt halten › Aufnahme › Geplante Aufnahme' },
  dauer: { t: 'Aufnahmedauer', en: 'Duration Capture', d: 'Begrenzt die Aufnahme auf eine feste Zeit (z. B. 15 Sekunden, 1 Stunde). Danach stoppt die Kamera von selbst. Von 15 Sekunden bis 3 Stunden oder keine Beschränkung. Spart Speicher und Akku bei Zeitraffern.', wo: 'Voreinstellung gedrückt halten › Aufnahme › Dauer' },
  antiflimmern: { t: 'Antiflimmern (50 / 60 Hz)', en: 'Anti-Flicker', d: 'Stimmt die Bildraten auf das Stromnetz ab, damit Kunstlicht (LED, Neon) im Video nicht flackert. Sri Lanka, die Malediven und Österreich haben 50 Hz. Dann heißen die Bildraten 25, 50, 100 und 200 statt 30, 60, 120 und 240.', wo: 'Einstellungen › Video › Antiflimmern' },
  pro: { t: 'Einfache / Profi-Bedienfunktionen', en: 'Easy / Pro controls', d: 'Zwei Bedienmodi. Die einfachen Bedienfunktionen (ab Werk aktiv) bieten wenige Optionen per Schieberegler, ohne Voreinstellungen und ohne Protune. Die Profi-Bedienfunktionen zeigen alle Voreinstellungen, Shortcuts und Protune. Diese App geht von Profi aus.', wo: 'Dashboard öffnen, nach links wischen, „Steuerung“ antippen.' }
};

/* ================= Kamera ================= */
D.cam = {
  hint: 'Wische über das Display oder tippe auf die Tasten am Gehäuse (oben und rechts).',
  defaultScreen: { mode: 'video', preset: 'Standard', settings: '5.3K 16:9 | 25 | W', battery: 87, remaining: '1H:12', shortcuts: ['objektiv', 'slomo', 'zoom', 'hindsight'], art: 'walk', rec: false },
  shortcutPos: ['left:2.5%;bottom:5%', 'left:15%;bottom:5%', 'right:15%;bottom:5%', 'right:2.5%;bottom:5%'],
  modes: [
    { name: 'Video', mode: 'video', preset: 'Standard', settings: '5.3K 16:9 | 25 | W', shortcuts: ['objektiv', 'slomo', 'zoom', 'hindsight'], listTitle: 'Video-Voreinstellungen',
      presets: [['Tauchen', '4K 8:7 | 50 | W', 'Deine eigene, ganz oben in der Liste. Siehe Szene Tauchen.'], ['Tauchen Zeitlupe', '4K 16:9 | 100 | W', 'Deine eigene für Mantas.'], ['Standard', '5.3K 16:9 | 25 | W', 'Werks-Voreinstellung als Ausgangspunkt.'], ['Safari', '5.3K 8:7 | 25 | W', 'Deine eigene, siehe Szene Safari.'], ['Fahrt', '4K 16:9 | 50 | HV', 'Deine eigene, siehe Szene Zug und Fahrten.'], ['Zeitlupe', '2.7K 16:9 | 200 | W', 'Deine eigene für 8-fache Zeitlupe.'], ['+ Neu erstellen', '', 'Ganz unten in der Liste legst du eigene Voreinstellungen an.']] },
    { name: 'Foto', mode: 'foto', preset: 'Foto', settings: '27MP 8:7 | W', shortcuts: ['timer', 'objektiv', 'zoom', 'ausgabe'], listTitle: 'Foto-Voreinstellungen',
      presets: [['Foto', '27MP 8:7 | W', 'Einzelfoto mit SuperFoto-Bildverarbeitung.'], ['Serienfoto', 'Auto | W', 'Bis zu 30 Fotos pro Sekunde.'], ['Nachtfoto', 'Auto | W', 'Lange Belichtung, Kamera muss stillstehen.']] },
    { name: 'Zeitraffer', mode: 'zeitraffer', preset: 'TimeWarp', settings: '5.3K 16:9 | Auto | W', shortcuts: ['geschw', 'objektiv', 'dauer', 'zoom'], listTitle: 'Zeitraffervoreinstellungen',
      presets: [['TimeWarp', '5.3K 16:9 | Auto | W', 'Zeitraffer in Bewegung.'], ['Startrails', '4K 16:9 | Max | W', 'Sterne als Bögen.'], ['Lichtmalerei', '4K 16:9 | Lang | W', 'Mit Licht zeichnen.'], ['Auto-Lichtspuren', '4K 16:9 | Lang | W', 'Lichtbänder von Fahrzeugen.'], ['Zeitraffer', '4K 16:9 | 0,5s | W', 'Kamera steht still.'], ['Zeitraffer bei Nacht', '4K 16:9 | Auto | W', 'Für Dämmerung und Nacht.']] }
  ],
  pillMsg: 'Tippen öffnet die Liste der Voreinstellungen. Gedrückt halten öffnet die Einstellungen der aktuellen Voreinstellung.',
  screenNote: 'Die Nummern entsprechen dem Handbuch. Die genaue Lage der Symbole kann je nach Firmware leicht abweichen. Kürzel im Feld 4: W = Weit, L = Linear, SV = SuperView, HV = HyperView. Die Bildraten in dieser App gelten für [[antiflimmern|Antiflimmern 50 Hz]] (25, 50, 100, 200). Steht die Kamera auf 60 Hz, siehst du 30, 60, 120, 240. Falls die Kamera bei eigenen Voreinstellungen keinen eigenen Namen anzeigt, erkennst du sie an dieser Zeile.',
  fields: [
    { key: 'modus', n: 1, t: 'Aktueller Modus', short: 'Video, Foto oder Zeitraffer',
      what: 'Zeigt, in welchem der drei [[modus|Aufnahmemodi]] du bist.',
      how: 'Auf dem Display nach links oder rechts wischen. Oder bei eingeschalteter Kamera die Modustaste drücken.',
      tip: 'Wenn die Kamera nur „Video“, „Foto“ und „Zeitraffer“ ohne eigene Voreinstellungen anbietet, steht sie auf [[pro|Einfache Bedienfunktionen]]. Im Dashboard unter „Steuerung“ auf Profi umschalten.' },
    { key: 'rest', n: 2, t: 'Verbleibende Aufnahmezeit / Fotoanzahl', short: 'wie lange die Karte noch reicht',
      what: 'Wie viel Video (z. B. „1H:12“ = 1 Stunde 12 Minuten) oder wie viele Fotos noch auf die Speicherkarte passen. Der Wert hängt von den aktuellen Einstellungen ab: 5.3K frisst viel mehr als 1080p. Während der Aufnahme läuft hier die Aufnahmezeit mit.',
      how: 'Platz schaffen: Clips aufs Handy übertragen und dann löschen, oder die Karte formatieren (Einstellungen › Zurücksetzen › SD-Karte formatieren).',
      tip: 'Ist [[hindsight|HindSight]] aktiv, erscheint oben in der Mitte zusätzlich eine Anzeige. Sie wird blau, sobald der Puffer gefüllt ist.' },
    { key: 'kurz', n: 3, t: 'Bildschirm-Shortcuts', short: 'vier Schnellzugriffe pro Voreinstellung',
      what: 'Jede Voreinstellung hat vier Shortcuts, also Abkürzungen zu einzelnen Einstellungen wie Objektiv, Zoom oder HindSight.',
      how: 'Antippen öffnet einen Schieberegler. Gedrückt halten, dann nach rechts scrollen und einen anderen Shortcut wählen, um ihn zu ersetzen.',
      tip: 'Leg dir für jede eigene Voreinstellung die Shortcuts an, die du dort wirklich brauchst: bei Safari HindSight und Zoom, bei Fahrten das Objektiv.' },
    { key: 'preset', n: 4, t: 'Aufnahmeeinstellungen (mittlere Schaltfläche)', short: 'Voreinstellung mit Auflösung | Bildrate | Objektiv',
      what: 'Name der aktiven [[preset|Voreinstellung]] und darunter die wichtigsten Werte, z. B. „4K 16:9 | 50 | W“: [[aufloesung|Auflösung]] mit [[seitenverhaeltnis|Bildformat]], [[fps|Bildrate]] und [[linse|Objektiv]].',
      how: 'Antippen: Liste der Voreinstellungen. Gedrückt halten: alle Einstellungen dieser Voreinstellung, darunter die erweiterten [[protune|Protune]]-Einstellungen. Änderungen mit dem Speichern-Symbol sichern. „Speichern als“ legt eine neue Voreinstellung an.',
      tip: 'Hältst du die Kamera hochkant, sind die Aufnahmeeinstellungen nicht erreichbar. Vorher im Querformat einstellen.' },
    { key: 'akku', n: 5, t: 'Akkustatus', short: 'Ladestand in Prozent',
      what: 'Ladestand des [[enduro|Enduro-Akkus]]. Unter 10 % warnt die Kamera, bei 0 % stoppt sie die Aufnahme, speichert und schaltet ab.',
      how: 'Laden per USB-C, voll nach etwa 3 Stunden. GoPro nennt als Ladegerät 5 V / 1 A oder den eigenen Supercharger.',
      tip: 'Mit Netzteil kannst du auch während des Ladens filmen (nicht am Computer). Der Akku lädt dann erst nach der Aufnahme weiter.' }
  ],
  shortcutHow: 'Antippen öffnet einen Schieberegler. Gedrückt halten, um den Shortcut durch einen anderen zu ersetzen.',
  shortcuts: {
    objektiv: { t: 'Objektiv', icon: 'linse', d: 'Wechselt das [[linse|digitale Objektiv]]: HyperView, SuperView, Weit, Linear, Linear + [[horizont|Horizontsperre]]. Angeboten werden nur die, die zu Auflösung und Bildrate passen.', tip: 'Ausgegraute Objektive gehen bei der aktuellen Auflösung und Bildrate nicht. HyperView gibt es z. B. nur bei 5.3K 25 und 4K 50 (16:9), 8:7 und 9:16 nur mit Weit.' },
    slomo: { t: 'Geschwindigkeit (Zeitlupe)', icon: 'slomo', d: 'Schaltet die [[zeitlupe|Zeitlupe]]: 2x, 4x oder 8x. Die Kamera erhöht dafür die Bildrate und senkt bei Bedarf die Auflösung.', tip: 'Zeitlupe braucht viel Licht. Im Schatten oder Innenraum wird sie körnig.' },
    zoom: { t: 'Zoom', icon: 'zoom', d: '[[touchzoom|Touch-Zoom]] per Schieberegler. Der Regler auf der rechten Seite sperrt den Zoomfaktor.', tip: 'Zoom vor der Aufnahme vergrößert sogar den Spielraum für die Stabilisierung. Für ferne Tiere trotzdem lieber in hoher Auflösung filmen und später zuschneiden.' },
    hindsight: { t: 'HindSight', icon: 'hindsight', d: '[[hindsight|HindSight]] mit 15 oder 30 Sekunden ein- oder ausschalten.', tip: 'Im Puffermodus verbraucht die Kamera so viel Akku wie beim Filmen. Nach dem spannenden Moment wieder aus.' },
    timer: { t: 'Selbstauslöser', icon: 'timer', d: 'Löst nach 3 oder 10 Sekunden aus. Praktisch für Gruppenfotos und um Wackler beim Drücken zu vermeiden.' },
    ausgabe: { t: 'Ausgabe', icon: 'foto', d: 'Wie das Foto gespeichert wird: [[superphoto|SuperFoto]] (Kamera wählt selbst), HDR, Standard oder [[gpr|RAW]].' },
    geschw: { t: 'Geschwindigkeit (TimeWarp)', icon: 'zeitraffer', d: 'Raffung beim [[timewarp|TimeWarp]]: Auto oder 2x, 5x, 10x, 15x, 30x. GoPro empfiehlt 2x bis 5x im Auto, 10x beim Wandern.' },
    dauer: { t: 'Dauer', icon: 'timer', d: '[[dauer|Aufnahmedauer]] von 15 Sekunden bis 3 Stunden oder keine Beschränkung. Danach stoppt die Kamera selbst.' }
  },
  gestureNote: 'Die Mediengalerie öffnest du auch über die Quik-App. Das Dashboard öffnet sich nur, wenn die Kamera quer steht.',
  gestures: [
    { key: 'down', arrow: '↓', t: 'Vom oberen Rand nach unten wischen', short: 'Dashboard öffnen', msg: '[[dashboard|Dashboard]] offen. Tippe auf eine Kachel für die Erklärung, nach oben wischen schließt.' },
    { key: 'up', arrow: '↑', t: 'Vom unteren Rand nach oben wischen', short: 'Letzte Aufnahme und Mediengalerie', msg: 'Mediengalerie: die letzte Aufnahme, nach links und rechts blättern. Hier setzt du auch HiLights oder löschst Dateien.' },
    { key: 'left', arrow: '←', t: 'Nach links wischen', short: 'Nächster Modus (Video, Foto, Zeitraffer)', msg: 'Modus gewechselt. Wische weiter, um durch Video, Foto und Zeitraffer zu blättern.' },
    { key: 'right', arrow: '→', t: 'Nach rechts wischen', short: 'Vorheriger Modus', msg: 'Modus gewechselt.' },
    { key: 'tap', arrow: '•', t: 'Kurz antippen', short: 'Statussymbole aus- und einblenden', msg: 'Statussymbole aus- bzw. eingeblendet. Auf einer Kachel oder einem Schalter wählt Antippen aus.' },
    { key: 'hold', arrow: '◎', t: 'Gedrückt halten', short: 'Belichtungssteuerung', msg: 'Belichtungssteuerung: Die Klammern zeigen den Bereich, nach dem belichtet wird. Ziehen verschiebt ihn.' }
  ],
  dashTitle: 'Dashboard',
  dash: [
    { key: 'sprache', icon: 'sprache', t: 'Sprachsteuerung', d: 'Schaltet die [[dashboard|Sprachsteuerung]] ein oder aus. Befehle siehe Bereich „Sprachbefehle“.' },
    { key: 'ton', icon: 'ton', t: 'Kamera-Signaltöne', d: 'Piepen beim Start und Stopp. Bei Tieren lieber leise stellen, unter Wasser hörst du sie ohnehin nicht.' },
    { key: 'qc', icon: 'blitz', t: 'QuikCapture', d: '[[quikcapture|QuikCapture]] ein oder aus. Standardmäßig an.' },
    { key: 'sperre', icon: 'sperre', t: 'Bildschirmsperre', d: 'Sperrt den Touchscreen gegen versehentliches Antippen, etwa in der Tasche oder an der Brusthalterung.' },
    { key: 'front', icon: 'front', t: 'Display vorne', d: 'Wahl für das [[frontscreen|vordere Display]]: Vollbild, Aktives Display (unbeschnittene Vorschau), Nur Status oder Display aus.' },
    { key: 'ausr', icon: 'dreh', t: 'Ausrichtungssperre', d: 'Hält die Bildschirmausrichtung fest. Kamera zuerst in die gewünschte Lage drehen, dann das Schloss antippen.' },
    { key: 'max', icon: 'linse', t: 'Max Lens Mod-Modus', d: 'Nur mit dem aufsteckbaren Max-Objektiv. Ohne dieses Zubehör ausgeschaltet lassen, sonst wird das Bild verzerrt.' },
    { key: 'sd', icon: 'karte', t: 'SD-Kartenstatus', d: 'Im Dashboard nach rechts wischen: Belegung der Karte und „SD-Karte verwalten“.' },
    { key: 'koppeln', icon: 'funk', t: 'Gerät koppeln', d: 'Im Dashboard nach links wischen: Quik-App, Fernbedienung, Bluetooth-Mikrofon oder Ohrstöpsel verbinden.' },
    { key: 'steuerung', icon: 'stern', t: 'Steuerung', d: 'Im Dashboard nach links wischen: Antippen wechselt zwischen [[pro|Einfache und Profi-Bedienfunktionen]]. Für diese App: Profi.' },
    { key: 'einst', icon: 'karte', t: 'Einstellungen', d: 'Im Dashboard nach links wischen. Wichtige Bereiche: Verbindungen, Allgemein (QuikCapture, Standardvoreinstellung, Automatisches Ausschalten), Video (Bitrate, Bittiefe, Antiflimmern), Sprachsteuerung, Displays, Sprache, Datum + Uhrzeit, Info, Zurücksetzen.' }
  ],
  keys: [
    { t: 'Modustaste drücken', d: 'Bei ausgeschalteter Kamera: einschalten. Bei eingeschalteter Kamera: Modus wechseln (Video, Foto, Zeitraffer).' },
    { t: 'Modustaste 3 s halten', d: 'Ausschalten.' },
    { t: 'Modustaste während der Aufnahme', d: 'Setzt einen [[hilight|HiLight Tag]].' },
    { t: 'Modustaste 10 s halten', d: 'Neustart, wenn die Kamera nicht mehr reagiert. Einstellungen bleiben erhalten.' },
    { t: 'Auslöser drücken', d: 'Aufnahme starten, erneut drücken stoppt. Bei Foto: auslösen.' },
    { t: 'Auslöser bei ausgeschalteter Kamera', d: '[[quikcapture|QuikCapture]]: Die Kamera schaltet ein und filmt sofort mit den zuletzt genutzten Videoeinstellungen. Nochmal drücken stoppt und schaltet aus.' },
    { t: 'Modustaste halten + Auslöser', d: 'Öffnet ein Menü auf dem vorderen Display. Dann blättert die Modustaste durch die Voreinstellungen, der Auslöser wählt aus. Dashboard und Galerie sind so nicht erreichbar.' }
  ],
  keyNote: '<b>Im Tauchgehäuse</b> funktioniert der Touchscreen nicht, die Tasten schon. Mit „Modustaste halten + Auslöser“ wechselst du auch unter Wasser die Voreinstellung über das vordere Display.',
  voiceIntro: 'Im Dashboard die Kachel Sprachsteuerung einschalten. Die Sprache der Befehle stellst du unter Einstellungen › Sprachsteuerung › Sprache ein, die vollständige Liste steht unter Einstellungen › Sprachsteuerung › Befehle.',
  voice: [
    ['GoPro Aufnahme starten', 'Startet eine Videoaufnahme.'],
    ['GoPro Aufnahme beenden', 'Beendet die Videoaufnahme.'],
    ['GoPro HiLight', 'Setzt während der Aufnahme einen [[hilight|HiLight Tag]].'],
    ['GoPro Foto machen', 'Ein einzelnes Foto.'],
    ['GoPro Serienaufnahme machen', 'Serienfotos.'],
    ['GoPro Zeitraffer starten', 'Startet den zuletzt genutzten Zeitraffermodus.'],
    ['GoPro Zeitraffer stoppen', 'Beendet den Zeitraffer.'],
    ['GoPro starten', 'Startet die Aufnahme im aktuellen Modus.'],
    ['GoPro stoppen', 'Stoppt Video oder Zeitraffer.'],
    ['GoPro Video-Modus', 'Wechselt in den Videomodus, ohne aufzunehmen. Ebenso „Foto-Modus“ und „Zeitraffer-Modus“.'],
    ['GoPro ausschalten', 'Schaltet die Kamera aus.']
  ],
  voiceNote: 'Wind, Lärm und Abstand verschlechtern die Erkennung. Eine laufende Aufnahme vor einem neuen Befehl stoppen. Mit gekoppelten Bluetooth-Ohrstöpseln hört die Kamera dich auch, wenn sie weiter weg montiert ist.',
  recStart: 'Aufnahme läuft. Modustaste setzt jetzt einen HiLight, Auslöser stoppt.',
  recStop: 'Aufnahme gestoppt und gespeichert.',
  photoMsg: 'Foto aufgenommen.',
  modeWhileRec: 'HiLight gesetzt. Diese Stelle findest du später in Quik sofort wieder.',
  modeMsg: 'Modustaste: Modus %s.'
};

/* ================= Szenen ================= */
D.scenesIntro = 'Fertige Rezepte für deine Reise. Lege dir für die wichtigsten am besten vorab eine eigene [[preset|Voreinstellung]] an, dann wechselst du unterwegs mit einem Tipp.';
D.scenes = [
{
  id: 'tauchen', art: 'reef', title: 'Tauchen mit Gehäuse', short: 'Walhai, Manta, Riff - mit Rotfilter und ohne Touchscreen.', tags: ['Malediven', 'Gehäuse', 'Rotfilter'],
  goal: 'Ruhige, farbige Unterwasserclips in 5 bis 25 m, die du später quer und hochkant schneiden kannst, bedient mit nur zwei Tasten.',
  before: '<b>Im Tauchgehäuse reagiert der Touchscreen nicht, die Tasten schon.</b> Leg dieses Rezept an Land als eigene Voreinstellung an, mach es zur [[standardvor|Standardvoreinstellung]] und wähle es vor dem Schließen einmal aus, denn [[quikcapture|QuikCapture]] filmt mit den zuletzt genutzten Videoeinstellungen. Unter Wasser wechselst du bei Bedarf so: Modustaste halten und Auslöser drücken, dann blättert die Modustaste durch die Voreinstellungen (Anzeige auf dem vorderen Display), der Auslöser wählt aus.',
  screen: { mode: 'video', preset: 'Tauchen', settings: '4K 8:7 | 50 | W', shortcuts: [] },
  screenNote: 'Eigene Voreinstellung „Tauchen“. Shortcuts brauchst du hier keine, im Gehäuse lassen sie sich ohnehin nicht antippen.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Genug Reserve für Ausschnitte und Hochkant-Clips. Spart gegenüber 5.3K Akku und Speicher, was bei zwei Tauchgängen pro Tag zählt.', 'Mittlere Schaltfläche › ganz unten „Neu erstellen“ › Video'],
    ['[[seitenverhaeltnis|Bildformat]]', '8:7', '[[s87|Voller Sensor]]: Daraus schneidest du später in Quik Quer- und Hochformat. 4K 8:7 ist das einzige 8:7-Format mit 50 Bildern pro Sekunde.'],
    ['[[fps|Bildrate]]', '50', '2-fache Zeitlupe für gleitende Mantas und ruhigere Handbewegungen. Tief und dunkel lieber 25: Die Kamera darf dann länger belichten, es rauscht weniger.'],
    ['[[linse|Objektiv]]', 'Weit', 'In 8:7 die einzige Wahl, und unter Wasser die richtige: HyperView wirkt dort unnatürlich verzerrt.'],
    ['[[hypersmooth|HyperSmooth]]', 'Ein', 'In 8:7 gibt es nur Ein oder Aus. Glättet Flossenschläge.'],
    ['[[touchzoom|Zoom]]', '1,0x', 'Lieber hinschwimmen: Zoom schneidet nur ab und kostet Auflösung.'],
    ['[[wb|Weißabgleich]]', 'Auto', 'Mit Filter findet die Automatik den neutralen Punkt. Die Kelvin-Werte der Kamera reichen nur bis 6500K, das Blau bekommen sie nicht weg.', 'Protune'],
    ['[[iso|ISO]] min / max', '100 / 3200', 'Kompromiss aus Helligkeit und Rauschen, wenn es tiefer und dunkler wird.', 'Protune'],
    ['[[ev|Bel.-Korr.]]', '-0,5', 'Schützt die helle Oberfläche, Sand und die weißen Bäuche der Mantas vor dem Ausfressen.', 'Protune'],
    ['[[protune|Schärfe]]', 'Niedrig', 'In der Tiefe verstärkt hohe Schärfe vor allem Rauschen.', 'Protune'],
    ['[[farbe|Farbe]] / Profil', 'Natürlich / Standard', 'Ausgewogen, mit Spielraum, um in Quik etwas Wärme nachzulegen. HDR und Log passen hier nicht.', 'Protune bzw. Profil'],
    ['[[bittiefe|Bittiefe]]', '10-Bit', 'Weiche Blauverläufe im Freiwasser ohne Treppenstufen.', 'Einstellungen › Video (gilt für alle Voreinstellungen)'],
    ['[[bitrate|Bitrate]]', 'Hoch', 'Schwebeteilchen, Lichtstrahlen und bewegtes Wasser zerfallen sonst in Blöcke. Rechne mit fast 1 GB pro Minute.', 'Einstellungen › Video'],
    ['Ausrichtung', 'Querformat', 'Verhindert, dass Clips seitlich kippen, wenn du dich im Wasser drehst. An Land wieder auf Auto.', 'Einstellungen › Displays › Ausrichtung'],
    ['Automatisches Ausschalten', '15 Min.', 'Die Kamera geht zwischen den Szenen nicht zu früh aus.', 'Einstellungen › Allgemein'],
    ['[[hindsight|HindSight]]', 'Aus', 'Puffert ständig und frisst Akku wie Filmen.']
  ],
  settingsNote: 'Leg dir zusätzlich „Tauchen Zeitlupe“ mit 4K 16:9 | 100 | W an (4-fache Zeitlupe für Mantas und Fischschwärme). Zieh beide ganz nach oben in die Liste (Bearbeiten-Symbol oben rechts, halten und ziehen), dann erreichst du sie mit den Tasten am schnellsten. WLAN, Sprachsteuerung und Signaltöne für den Tauchgang ausschalten: Funk geht unter Wasser ohnehin nicht.',
  mount: [
    'Kurzer Griff unten am Gehäuse, Stick ganz eingefahren. So filmst du ruhig und mit etwas Abstand zum Körper.',
    'Immer eine Sicherungsleine: ans Handgelenk oder mit Karabiner ans Jacket (Tarierweste). Eine verlorene Leih-GoPro sinkt sofort.',
    'Brusthalterung am Jacket geht für freihändige Riff-Aufnahmen mit Händen und Instrumenten im Bild. Mit Kopfgurt unter der Maske filmst du blind.'
  ],
  tips: [
    '[[rotfilter|Rotfilter]] in blauem Wasser bei Sonnenlicht ab etwa 3 m bis 20-25 m. Abnehmen bzw. wegklappen beim Schnorcheln und flacher als etwa 3 m (sonst wird alles rosa), beim Walhai an der Oberfläche, an Bord, bei Nacht, in Höhlen und tiefem Schatten und sobald eine Lampe das Hauptlicht ist. Wirkt das Wasser grünlich (viel Plankton, etwa an Manta-Futterplätzen): Magentafilter.',
    'Beim ersten Tauchgang testen: je 10 Sekunden mit Filter in 5 m und in 15 m filmen und abends am Handy prüfen, was in diesem Wasser besser aussieht.',
    'Aufnahme ein paar Sekunden vor der Szene starten. Lange Clips sind im Gehäuse einfacher als ständiges Start/Stopp. Gute Momente mit der Modustaste als [[hilight|HiLight]] markieren.',
    'Nah ran: am Riff 0,5 bis 2 m. Jeder Meter Wasser vor der Linse kostet Farbe und Kontrast. Die Kamera stellt ab etwa 30 cm scharf.',
    'Sonne im Rücken, waagrecht oder leicht nach oben filmen. Senkrecht nach unten über Sand wird es flach und blau. Gegen die Sonne entstehen Silhouetten.',
    'Parallel zu großen Tieren schwimmen oder still halten, keine schnellen Schwenks. Mantas kommen zu dir: tief bleiben, hinter der Putzerstation, nie darüber schwimmen.',
    '<b>Walhai-Regeln auf den Malediven</b> (Regelung von 2024): mindestens 3 m Abstand zum Körper und 4 m zur Schwanzflosse, nicht berühren, kein Blitz und keine Lampe, höchstens 15 Minuten im Wasser pro Begegnung. Selfiesticks sind dort verboten, wo Walhaie gesichtet werden. Richte dich im Zweifel nach deinem Guide.',
    'Vor jedem Einstieg ein Blick aufs vordere Display: Steht dort „4K 8:7 | 50 | W“?'
  ],
  fixes: [
    ['Alles ist blau-grün und flau.', 'Näher ans Motiv, Sonne in den Rücken, Rotfilter im passenden Tiefenbereich (in grünem Wasser Magenta), Weißabgleich Auto. In Quik etwas wärmer stellen.'],
    ['Alles ist rosa oder orange.', 'Rotfilter zu flach benutzt. Oberhalb von etwa 3 m und an der Oberfläche abnehmen.'],
    ['Grau-grün und verrauscht in 25 m und tiefer.', 'Jenseits dessen, was ein Filter schafft. Flacher filmen, näher ran, auf 25 Bilder pro Sekunde wechseln. Ohne Lampen ist das die Grenze.'],
    ['Das Gehäuse beschlägt von innen.', 'Gehäuse im kühlen, trockenen Raum schließen, mit abgekühlter Kamera (nicht direkt vom Ladegerät) und einer trockenen [[antifog|Anti-Beschlag-Einlage]]. Nie auf dem feuchten Boot schließen.'],
    ['Weiße Punkte und Schleier im Bild.', '[[backscatter|Schwebeteilchen-Reflexe]] durch sonnenbeschienenes Plankton. Sonne in den Rücken, näher ran, nicht über aufgewirbeltem Sand filmen.'],
    ['Akku oder Karte voll vor dem Ende.', 'GoPro nennt rund 80 Minuten Daueraufnahme bei 4K 50/60. Ein durchgefilmter Tauchgang von 50 Minuten belegt bei hoher Bitrate um die 45 GB. Gezielte Clips statt Dauerfilm, Akku vor jedem Tauchgang über 80 %.'],
    ['Seitlich gekippte Clips oder falsches Rezept.', 'Ausrichtung auf Querformat, Tauchen als Standardvoreinstellung und zuletzt ausgewählt, vor dem Abtauchen die Anzeige vorne prüfen.']
  ],
  vertical: 'Mit 8:7 schneidest du später in Quik hochkant aus. Mantas, abtauchende Taucher und Schildkröten auf dem Weg nach oben wirken hochkant gut. Walhaie sind lang und waagrecht: meist besser im Querformat, außer sie schwimmen direkt auf dich zu.',
  related: ['zeitlupe', 'reframe', 'overunder']
},
{
  id: 'safari', art: 'safari', title: 'Safari aus dem Jeep', short: 'Yala, Udawalawe: Tiere, Staub, plötzliche Momente.', tags: ['Sri Lanka', 'HindSight'],
  goal: 'Die Stimmung der Pirschfahrt und alles, was nah kommt. Die GoPro entspricht etwa 16-34 mm (Weit) bzw. 19-39 mm (Linear) Kleinbild-Brennweite ohne optischen Zoom. Ein Leopard in 50 m wird ein Punkt: Für ferne Tiere ist ein Teleobjektiv die bessere Wahl.',
  screen: { mode: 'video', preset: 'Safari', settings: '5.3K 8:7 | 25 | W', shortcuts: ['hindsight', 'zoom', 'slomo', 'dauer'] },
  screenNote: 'Eigene Voreinstellung „Safari“ mit HindSight und Zoom als Shortcuts.',
  settings: [
    ['[[aufloesung|Auflösung]]', '5.3K', 'Maximale Details: Du kannst in Quik nah ans Tier heranschneiden und gute [[framegrab|Standbilder]] mit rund 24 Megapixeln ziehen.'],
    ['[[seitenverhaeltnis|Bildformat]]', '8:7', 'Für ein Hochkant-Reel kannst du daraus noch gut 2-fach heranzoomen und bleibst scharf.'],
    ['[[fps|Bildrate]]', '25', 'Mehr geht bei 5.3K 8:7 nicht. Tiere brauchen selten Zeitlupe, und bei Tageslicht ist jedes Einzelbild trotzdem scharf.'],
    ['[[linse|Objektiv]]', 'Weit', 'In 8:7 fest. Enger und mit 50 Bildern pro Sekunde: Alternative 5.3K 16:9 | 50 | L.'],
    ['[[hypersmooth|HyperSmooth]]', 'Ein', 'Gleicht das Rumpeln der Piste aus. In 8:7 gibt es nur Ein oder Aus.'],
    ['[[hindsight|HindSight]]', '30 s', 'Nur einschalten, wenn eine Sichtung wahrscheinlich ist. Puffert ständig (Akku und Wärme wie beim Filmen), pausiert nach 15 Minuten ohne Aufnahme, und solange es läuft, sind die Einstellungen gesperrt.'],
    ['[[touchzoom|Zoom]]', '1,0x', 'Bis 2,0x, wenn der Bildausschnitt klar ist. Sonst lieber später zuschneiden.'],
    ['[[ev|Bel.-Korr.]]', '0 bis -0,5', 'Weit hat viel Himmel im Bild. Bei hellem Himmel -0,5.', 'Protune'],
    ['[[farbe|Farbe]]', 'Natürlich', 'Ausgewogen, in Quik leicht anzupassen.', 'Protune'],
    ['[[protune|Windgeräuschminderung]]', 'Auto', 'Offener Jeep, viel Fahrtwind.', 'Protune'],
    ['Fotos von nahen Vögeln', 'Serienfoto', 'Serienfotorate Auto (bis 30 pro Sekunde). Oder Foto mit Ausgabe RAW für Lightroom.', 'Modus Foto']
  ],
  mount: [
    'Brusthalterung im Sitzen: zeigt den Jeep, den Tracker und deine Hände, also die Nähe.',
    'Griff tief seitlich aus dem Fahrzeug oder aus der Dachluke halten.',
    'Ausgezogener Stick über dem Jeep für den Blick über eine Herde. Innerhalb des Fahrzeugumrisses bleiben und nie zu Elefanten hin schwenken.',
    'Kopfgurt mit TimeWarp für die Fahrt selbst.'
  ],
  tips: [
    'Die GoPro für Tiere in 2 bis 10 m, für den Größenvergleich und die Fahrt. In Udawalawe kommen Elefanten oft nah an die Fahrzeuge.',
    'Mit einer zweiten Kamera mit Tele: nach jedem Tele-Bild ein GoPro-Weitwinkel vom selben Platz, das erzählt die Szene.',
    'HindSight einschalten, sobald der Tracker langsamer wird oder zeigt. Auslöser drücken, wenn etwas passiert. Zwischen den Sichtungen wieder aus.',
    'Fahrzeug oder Menschen mit ins Bild nehmen, etwa einen Elefanten, der am Außenspiegel vorbeigeht. Das zeigt die Nähe.',
    'Staub und Novemberschauer: Kamera zwischen den Sichtungen in einen Zipp-Beutel. Die Klappe nie im Staub öffnen. Die Linse ist wasserabweisend, mit Mikrofasertuch abwischen.',
    'Kamera-Signaltöne im Dashboard ausschalten, der Ton der Tiere ist oft das Beste am Clip.'
  ],
  fixes: [
    ['Das Tier ist nur ein Pünktchen.', 'GoPro nur für nahe Tiere und den Zusammenhang. 5.3K in Quik zuschneiden.'],
    ['„Kamera ist zu heiß“ zur Mittagszeit.', '30 bis 35 °C sind schon an der Betriebsgrenze von 35 °C. Kamera beschatten, HindSight zwischen den Sichtungen aus, kurze Clips.'],
    ['Unruhiges Bild aus der Hand.', 'Griff locker halten, den Ellbogen am eigenen Körper abstützen und nicht am Jeep-Rahmen (der überträgt die Motorvibration).'],
    ['Moment verpasst, Kamera war aus.', 'HindSight 30 s aktivieren, sobald es spannend wird.']
  ],
  vertical: '8:7 lässt dir für ein Hochkant-Reel rund 2,4-fache Reserve: In Quik heranzoomen und trotzdem scharfes 1080 x 1920 liefern.',
  related: ['hindsight', 'zeitlupe', 'framegrab']
},
{
  id: 'fahrt', art: 'train', title: 'Zug und Fahrten', short: 'Ella-Zug, Tuk-Tuk, Taxi durchs Hochland.', tags: ['Sri Lanka', 'TimeWarp', 'Halterung'],
  goal: 'Die berühmte Zugfahrt, den Zug in Kurven und auf Brücken und die Energie im Tuk-Tuk, ohne Risiko.',
  before: '<b>Sicherheit zuerst:</b> Anfang 2025 ist ein Tourist gestorben, der sich für ein Foto aus einem Zug in Sri Lanka gelehnt hat, andere wurden an Masten und Tunnelwänden schwer verletzt. Kopf, Arme und Selfiestick bleiben im Türrahmen, die Handschlaufe ist immer dran. Nie einen Stick aus einem fahrenden Zug oder Tuk-Tuk strecken.',
  screen: { mode: 'video', preset: 'Fahrt', settings: '4K 16:9 | 50 | HV', shortcuts: ['objektiv', 'hindsight', 'zoom', 'slomo'] },
  screenNote: 'Eigene Voreinstellung „Fahrt“ mit HyperView für das Mittendrin-Gefühl im Tuk-Tuk.',
  settings: [
    ['Tuk-Tuk aus Ich-Perspektive', '4K 16:9 | 50 | HV', '[[hyperview|HyperView]]: maximal weit und hoch, das stärkste Mittendrin-Gefühl. [[hypersmooth|HyperSmooth]] AutoBoost.'],
    ['Zugtür und Fenster', '4K 16:9 | 50 | L', 'Objektiv Linear + [[horizont|Horizontsperre]], AutoBoost: Der Horizont bleibt gerade, auch wenn der Zug schaukelt oder die Hand kippt.'],
    ['Lange Strecken: [[timewarp|TimeWarp]]', 'Auto oder 10x', '10x macht aus 5 Minuten 30 Sekunden. Im Tuk-Tuk 2x bis 5x. Objektiv Linear + Horizontausrichtung oder Weit.', 'Modus Zeitraffer › TimeWarp'],
    ['Geschwindigkeitsanpassung', 'Antippen', 'Während des TimeWarp das hintere Display antippen: Echtzeit, etwa wenn der Zug auf die Brücke fährt. Nochmal tippen: wieder schnell.'],
    ['[[bittiefe|Bittiefe]] / [[bitrate|Bitrate]]', '8-Bit / Standard', 'Für lange Clips: kleiner und am Handy problemlos abspielbar.', 'Einstellungen › Video'],
    ['[[protune|Windgeräuschminderung]]', 'Auto', 'An der Zugtür ruiniert der Wind den Ton trotzdem oft, plane dort Musik ein.', 'Protune']
  ],
  settingsNote: 'TimeWarp oder Zeitraffer? TimeWarp ist für eine bewegte Kamera (Hand, Brust, Kopf), stabilisiert und in der Geschwindigkeit regelbar. Zeitraffer ist für eine Kamera, die völlig still steht. Eine Kamera auf dem Fensterbrett eines fahrenden Zugs vibriert und bewegt sich, also dort TimeWarp.',
  mount: [
    'Zug: Griff in der Hand an der offenen Tür, oder Brusthalterung, wenn du in der Tür sitzt (Beine und Arme innen).',
    'Taxi: Brusthalterung auf dem Beifahrersitz, oder Griff am Fenster mit Linear + Horizontsperre.',
    'Tuk-Tuk: Brusthalterung (Fahrer, Armaturen und Straße im Bild) leicht nach oben geneigt, oder Kopfgurt für einen TimeWarp.'
  ],
  tips: [
    'In Kurven aus der Tür oder dem letzten Wagen nach vorne entlang des Zugs filmen: Dann sieht man Lok und Wagen um den Hang biegen.',
    'Vorausschauen: Lücken zwischen Bäumen, Masten und Leitungen kommen schnell. Aufnahme vorher starten.',
    'Den Zug von außen: an einer Brücke wie der Nine Arch Bridge oder an der Demodara-Schleife, mit Video vom Felsen aus oder als Zeitraffer.',
    'Vibration: Kamera nicht fest am Fahrzeug montieren. Körper oder Hand dämpfen das Brummen des Motors.',
    'Erzählen während der Fahrt: Bluetooth-Ohrstöpsel als Mikrofon koppeln (Dashboard › nach links wischen › Gerät koppeln). Oder später Musik in Quik.'
  ],
  fixes: [
    ['Horizont kippt in 8:7 oder 9:16.', 'Dort gibt es keine Horizontsperre. Für diese Szenen 16:9 mit Linear + Horizontsperre.'],
    ['TimeWarp zu schnell, macht schwindlig.', 'Geschwindigkeit Auto oder 5x bis 10x, und die Höhepunkte per Antippen in Echtzeit.'],
    ['Bild wabbelt wie Wackelpudding.', '[[rolling|Rolling Shutter]] durch Vibration: Kamera nicht auf Metall abstützen, AutoBoost, mit dem Körper abfedern.'],
    ['Nur Rauschen und Dröhnen im Ton.', 'Windgeräuschminderung Auto, Kamera in den Windschatten deines Körpers, und Musik einplanen.']
  ],
  vertical: 'TimeWarp kann direkt in 9:16 aufnehmen. Für ein fertiges Hochkant-Video aus der Zugtür: Bildformat 9:16 (4K, Weit) und den Griff gerade halten, denn in 9:16 gibt es keine Horizontsperre.',
  related: ['timewarp', 'hyperview', 'bluetooth']
},
{
  id: 'landschaft', art: 'hills', title: 'Landschaft und Zeitraffer', short: 'Teeplantagen, Nebel, Sonnenaufgang, Sterne.', tags: ['Hochland', 'Zeitraffer', 'Nacht'],
  goal: 'Nebel, der über die Teehügel zieht, Sonnenaufgänge ohne ausgefressenen Himmel und Sterne über dem Indischen Ozean.',
  screen: { mode: 'zeitraffer', preset: 'Zeitraffer', settings: '4K 8:7 | 2s | W', shortcuts: ['dauer', 'objektiv', 'zoom', 'timer'] },
  screenNote: 'Werks-Voreinstellung „Zeitraffer“, angepasst auf 2 Sekunden Intervall und 8:7.',
  settings: [
    ['Modus', 'Zeitraffer', 'Für eine Kamera, die völlig still steht. In Bewegung nimmst du TimeWarp.'],
    ['[[intervall|Zeitrafferintervall]]', '2 s', 'Für ziehenden Nebel. Langsame Wolken 5 s. 5 s über 1 Stunde ergeben 20 Sekunden Video.'],
    ['[[aufloesung|Auflösung]] / Bildformat', '4K 8:7', 'Zeitraffer gibt es nicht in 9:16. Mit 8:7 bleibt Hochkant später möglich.'],
    ['[[linse|Objektiv]]', 'Weit', 'Für geraden Horizont in 16:9: Linear.'],
    ['[[wb|Weißabgleich]]', '5500K', 'Ein fester Wert verhindert Farbflackern im Zeitraffer. Auto, wenn du den Farbwechsel des Sonnenaufgangs willst.', 'Protune'],
    ['[[dauer|Dauer]]', '30 Min.', 'Stoppt automatisch.', 'Mittlere Schaltfläche gedrückt halten › Aufnahme'],
    ['Sonnenaufgang als Video', '4K 16:9 | 50 | L', 'Mit [[hdr|Profil HDR]]: zwei Belichtungen werden kombiniert, der Himmel frisst weniger aus. Nur bei ruhigen Szenen. Bel.-Korr. 0 bis -0,5.'],
    ['Nacht: [[nachtzeitraffer|Zeitraffer bei Nacht]]', 'Intervall Auto', 'Verschluss Auto. Fest: 4-5 s für Stadtlicht, 20-30 s für Sterne.', 'Modus Zeitraffer'],
    ['Sterne: [[sternspuren|Startrails]]', 'Länge Max', '1 bis 4 Stunden, mit Powerbank. Siehe Experimente.', 'Modus Zeitraffer'],
    ['Langzeit-Foto', 'Nachtfoto 30 s', 'Für den Sternenhimmel bei völliger Dunkelheit, Ausgabe RAW. 20 s, wenn etwas Licht da ist.', 'Modus Foto › Nachtfoto']
  ],
  mount: [
    'Nichts darf sich bewegen. Die HERO12 hat ein 1/4-Zoll-Stativgewinde in den Befestigungsösen, jedes Ministativ passt.',
    'Ohne Stativ: Fels, Mauer, Rucksack oder zusammengerolltes Handtuch.',
    'Auf dem Stativ HyperSmooth aus, dann läuft die Kamera auch kühler.'
  ],
  tips: [
    'Mondphase: Neumond ist um den 9. und 10. November. In Sri Lanka ist es am frühen Abend noch dunkel, bevor der Mond aufgeht. Die dunkelsten Nächte der Reise hast du auf den Malediven.',
    'Im November ziehen im Hochland oft Nachmittags- und Abendwolken auf. Plane Sternaufnahmen eher für die Malediven, Nebel-Zeitraffer für den Morgen.',
    'Nebel täuscht die Belichtung, alles wird grau. Probier Bel.-Korr. +0,5 für neblige Teehügel.',
    'Horizont ins obere oder untere Drittel, nicht in die Mitte. Vordergrund hilft: ein Teestrauch, ein Zaunpfahl, mit dem Superweitwinkel ganz nah ran.',
    'Zum Einrichten Quik als Live-Vorschau nutzen, dann trennen: Die Verbindung erzeugt Wärme und kostet Akku.',
    'Für Läufe über 1,5 Stunden eine Powerbank per USB-C. Die Kamera filmt dabei weiter, der Akku lädt erst danach. Bei offener Klappe ist sie nicht wasserdicht, Achtung bei Regen und Tau.'
  ],
  fixes: [
    ['Zeitraffer wackelt.', 'Kamera wurde berührt oder stand im Wind. Mit 3 oder 10 Sekunden Selbstauslöser starten, Stativ beschweren.'],
    ['Kamera war vor Sonnenaufgang aus.', '[[geplant|Geplante Aufnahme]] nutzen, oder Automatisches Ausschalten für diesen Morgen auf „Nie“ (Akku im Blick behalten).'],
    ['Zeitraffer bei Nacht zeigt keine Sterne.', 'Zu viel Fremdlicht. Startrails oder ein Nachtfoto mit 30 s an einem wirklich dunklen Ort.'],
    ['Himmel weiß ausgefressen.', 'Bel.-Korr. -0,5 oder Video mit Profil HDR bei ruhigen Szenen.'],
    ['Horizont schief.', 'Gitterlinien einschalten (Einstellungen › Displays › Hinteres Display-Raster) oder in 16:9 Linear wählen.']
  ],
  vertical: 'Zeitraffer, Zeitraffer bei Nacht, Startrails, Lichtmalerei und Auto-Lichtspuren gehen in 8:7, aber nicht in 9:16: also 8:7 aufnehmen und später ausschneiden. Nur TimeWarp nimmt direkt hochkant auf.',
  related: ['sternspuren', 'geplant', 'lichtmalerei']
},
{
  id: 'unterwegs', art: 'walk', title: 'Unterwegs und Selfie', short: 'Das Basisrezept für Spaziergänge, Wanderungen, dich selbst.', tags: ['Basis', 'Griff', 'Vorderes Display'],
  goal: 'Zwei Rezepte, die fast immer passen: eines für Landschaft und alles, was du später zuschneiden willst, eines für Aufnahmen im Gehen und Selfies.',
  screen: { mode: 'video', preset: 'Action', settings: '4K 16:9 | 50 | L', shortcuts: ['objektiv', 'slomo', 'zoom', 'hindsight'] },
  screenNote: 'Eigene Voreinstellung „Action“ für Gehen und Selfies.',
  settings: [
    ['„Reisen“ für Landschaft', '5.3K 8:7 | 25 | W', 'HyperSmooth Ein. 8:7 heißt maximale Freiheit beim späteren Zuschneiden in Quer- oder Hochformat.'],
    ['„Action“ für Gehen und Selfies', '4K 16:9 | 50 | L', 'Objektiv Linear + [[horizont|Horizontsperre]], [[autoboost|AutoBoost]]: das ruhigste Bild im Gehen, natürliche Proportionen.'],
    ['[[frontscreen|Display vorne]]', 'Aktives Display', 'Für Selfies: zeigt den echten, unbeschnittenen Bildausschnitt. „Vollbild“ beschneidet nur die Anzeige.', 'Dashboard › Display vorne'],
    ['[[bittiefe|Bittiefe]] / [[bitrate|Bitrate]]', '8-Bit / Standard', 'Spart Platz und schont das Handy. Für schöne Landschaft Bitrate Hoch.', 'Einstellungen › Video'],
    ['[[farbe|Farbe]] / Weißabgleich / Bel.-Korr.', 'Natürlich / Auto / 0', 'Die Automatik macht das gut.', 'Protune'],
    ['Fotos', 'Foto mit SuperFoto', 'Kommt mit Mittagssonne gut zurecht. Für Lightroom: Ausgabe RAW (nur mit Objektiv Weit).', 'Modus Foto']
  ],
  mount: [
    'Griff oder Selfiestick: auf Armlänge, Kamera etwas über Augenhöhe und leicht nach unten geneigt.',
    'Brusthalterung beim Wandern: Hände und Stöcke im Bild, sehr ruhig.',
    'Kopfgurt für TimeWarp-Aufstiege, etwa auf den Little Adam\'s Peak.'
  ],
  tips: [
    'Den Griff locker halten und mit leicht gebeugten Knien gehen. HyperSmooth erledigt den Rest.',
    'Selfie: mehr Platz in die Richtung lassen, in die du schaust. Gesicht weg vom Bildrand.',
    'Für spontane Momente [[quikcapture|QuikCapture]]: Kamera aus, ein Druck auf den Auslöser, und sie filmt.',
    'Gute Stellen mit der Modustaste als HiLight markieren, das spart später Zeit in Quik.',
    'Menschen vorher fragen, besonders in Tempeln und auf Märkten. Auf manchen Tempelgeländen ist Filmen verboten.'
  ],
  fixes: [
    ['Gesicht im Selfie verzerrt.', 'Objektiv Linear, Stick weiter ausziehen, Gesicht in die Bildmitte.'],
    ['Ungewollte Aufnahmen in der Tasche.', 'QuikCapture hat ausgelöst. Kamera richtig ausschalten oder QuikCapture an Reisetagen im Dashboard abschalten.'],
    ['Display reagiert nicht aufs Antippen.', 'Bildschirmsperre aktiv (Dashboard) oder Finger und Display nass. Abwischen. Reagiert gar nichts mehr: Modustaste 10 s halten.'],
    ['Ton dumpf.', 'Finger oder Griff verdecken ein Mikrofon. Kamera anders greifen.']
  ],
  vertical: 'Ist eine Szene sicher nur fürs Reel, leg dir „Reel“ mit 4K 9:16 | 50 | W an. Dann bleibt die Kamera quer am Griff und nimmt trotzdem hochkant auf. Einschränkungen: nur Weit, nur 8-Bit, keine Horizontsperre.',
  related: ['reframe', 'drohne', 'rotation']
}
];

/* ================= Ideen ================= */
D.ideasIntro = 'Dinge, die eine große Kamera so nicht kann: winzig, wasserdicht, superweit und mit eingebauten Spezialmodi. Probier pro Reisetag eins davon.';
D.ideas = [
{ id: 'timewarp', title: 'TimeWarp mit Echtzeit-Moment', short: 'Eine ganze Fahrt in 30 Sekunden, mit Bremsmoment.',
  what: 'Ein [[timewarp|TimeWarp]] rafft eine Bewegung stark zusammen und glättet sie. Tippst du während der Aufnahme aufs Display, läuft dieser Teil in Echtzeit. So entsteht ein Clip, der rast und an der spannenden Stelle abbremst.',
  why: 'Stabilisierter Zeitraffer aus der Bewegung braucht mit einer normalen Kamera Gimbal und Nachbearbeitung. Die GoPro rechnet ihn live.',
  where: 'Tuk-Tuk durch Kandy oder Ella, Wanderung auf den Little Adam\'s Peak, Gang über den Markt.',
  settings: [['Modus', 'Zeitraffer › TimeWarp'], ['Geschwindigkeit', 'Auto', 'Passt sich an Bewegung, Szene und Licht an. Fest: 2x bis 5x im Auto, 10x beim Gehen.'], ['Objektiv', 'Weit']],
  steps: ['Zeitraffer-Modus wählen (nach links oder rechts wischen), Voreinstellung TimeWarp.', 'Kamera an Brust oder Griff, Aufnahme starten.', 'Wenn etwas passiert (Kuh auf der Straße, Aussicht): Display antippen. Nochmal tippen geht zurück zur Raffung.', 'Nach dem Ziel stoppen. Fertig ist der Clip ohne Schnitt.'],
  tip: 'Die Echtzeit-Umschaltung geht nur per Antippen des hinteren Displays. Im Gehäuse oder mit nassen Fingern also nicht, dann die Stelle später in Quik verlangsamen.' },
{ id: 'hyperview', title: 'HyperView aus der Ich-Perspektive', short: 'Das typische GoPro-Gefühl: mittendrin statt dabei.',
  what: '[[hyperview|HyperView]] nutzt den ganzen Sensor und streckt ihn ins Breitbild. Die Ränder werden gedehnt, das erzeugt ein starkes Geschwindigkeits- und Raumgefühl.',
  why: 'Kein Wechselobjektiv kommt an diesen Bildwinkel heran, schon gar nicht am Kopf getragen.',
  where: 'Zugtür in Ella, Tuk-Tuk-Rücksitz, Bootsfahrt zum Tauchplatz auf den Malediven.',
  settings: [['Objektiv', 'HyperView'], ['Auflösung / Bildrate', '4K 16:9 / 50'], ['HyperSmooth', 'AutoBoost']],
  steps: ['Brusthalterung anlegen, Kamera leicht nach oben neigen.', 'Kopfüber montiert? Die Kamera dreht das Bild selbst. Soll die Lage fix bleiben: Dashboard › Ausrichtungssperre.', 'Aufnahme starten. Kurze Clips: HyperView in der Sonne heizt die Kamera auf.'],
  tip: 'HyperView wirkt am besten mit etwas Nahem im Bild: Hände am Geländer, Bootsrand, Zuggeländer.' },
{ id: 'reframe', title: 'Einmal filmen, zweimal posten', short: '8:7 aufnehmen, in Quik quer und hochkant ausschneiden.',
  what: 'Mit [[s87|8:7]] speichert die Kamera den ganzen Sensor. In der Quik-App wählst du später per [[reframe|Neu ausrichten]] den Ausschnitt, auch hochkant für Reels, und kannst ihn sogar im Clip wandern lassen.',
  why: 'Normale Kameras nehmen ein festes Format auf. Der fast quadratische Sensor der HERO12 lässt die Entscheidung offen.',
  where: 'Überall, wo du dich nicht festlegen willst: Tauchgänge, Safari, Strand.',
  settings: [['Bildformat', '8:7'], ['Auflösung / Bildrate', '5.3K 25 oder 4K 50'], ['Objektiv', 'Weit', '8:7 gibt es nur mit Weit.'], ['HyperSmooth', 'Ein', 'In 8:7 gibt es kein AutoBoost.']],
  steps: ['Mittlere Schaltfläche gedrückt halten, Bildformat 8:7 wählen, speichern.', 'Motiv mittig halten und rundum Platz lassen.', 'In Quik den Clip öffnen, beim Zuschneiden 9:16 wählen und den Ausschnitt mit den Fingern schieben. Für die Querversion dasselbe mit 16:9.'],
  tip: 'Aus 5.3K 8:7 kannst du im Hochformat noch etwa 2-fach heranzoomen und bleibst scharf. Aus 4K 16:9 bleibt hochkant fast nichts übrig.' },
{ id: 'zeitlupe', title: '8-fache Zeitlupe', short: 'Wellen, Vögel, Wassertropfen mit 200 Bildern pro Sekunde.',
  what: 'Bei 200 Bildern pro Sekunde (60 Hz: 240) wird beim normalen Abspielen jede Sekunde zu acht: [[zeitlupe|8-fache Zeitlupe]].',
  why: 'Wenige Kameras dieser Größe schaffen so hohe Bildraten, und kaum eine davon kannst du dabei ins Meer halten.',
  where: 'Brechende Wellen am Strand, auffliegende Reiher in Udawalawe, dein Kopfschütteln nach dem Tauchgang, ein Sprung vom Boot.',
  settings: [['Auflösung / Bildrate', '2.7K 16:9 / 200'], ['Objektiv', 'Weit oder Linear'], ['Für Hochkant', '4K 16:9 / 100', '4-fache Zeitlupe, aber genug Pixel für einen Hochformat-Ausschnitt.'], ['Licht', 'viel Sonne nötig']],
  steps: ['Shortcut Geschwindigkeit auf 8x stellen, oder eine eigene Voreinstellung „Zeitlupe“ mit 2.7K 200 anlegen.', 'Nur bei hellem Tageslicht: Zeitlupe braucht viel Licht, sonst rauscht es.', '2 Sekunden vor der Aktion starten, kurze Clips von 5-10 Sekunden.', 'In Quik nur den Teil mit der Aktion verlangsamen.'],
  tip: 'Im Kunstlicht flackert Zeitlupe oft. Draußen in der Sonne ist sie am schönsten.' },
{ id: 'hindsight', title: 'HindSight: rückwirkend aufnehmen', short: 'Der Moment, bevor du gedrückt hast, ist schon im Kasten.',
  what: 'Mit [[hindsight|HindSight]] puffert die Kamera ständig 15 oder 30 Sekunden. Drückst du den Auslöser, enthält das Video auch die Zeit davor.',
  why: 'Tiere warten nicht auf dich. Eine Kamera, die schon läuft, bevor du reagierst, gibt es sonst kaum.',
  where: 'Pirschfahrt in Yala, Delfine an der Bootskante, plötzlich auftauchender Walhai beim Schnorcheln.',
  settings: [['HindSight', '30 s'], ['Achtung', 'kostet Akku und erzeugt Wärme']],
  steps: ['Shortcut HindSight antippen und 30 s wählen.', 'Die Kamera puffert jetzt. Oben in der Mitte wird die Anzeige blau, sobald der Puffer voll ist.', 'Passiert etwas: Auslöser drücken. Das Video beginnt rückwirkend.', 'Danach wieder ausschalten. Solange HindSight läuft, lassen sich die Einstellungen nicht ändern.'] },
{ id: 'sternspuren', title: 'Startrails über der Lodge', short: 'Die Erddrehung sichtbar machen.',
  what: 'Der Nachteffekt [[sternspuren|Startrails]] belichtet über lange Zeit und addiert die Bilder: Sterne ziehen Kreisbögen.',
  why: 'Mit einer Systemkamera brauchst du dafür Stativ, Fernauslöser, Hunderte Fotos und eine Software zum Stapeln. Die GoPro erledigt das intern.',
  where: 'Strand auf Dhigurah um den Neumond (9./10. November), Safari-Lodge fern von Lampen.',
  settings: [['Modus', 'Zeitraffer › Startrails'], ['Länge der Lichtspur', 'Max', 'Durchgehende Spuren ohne Lücken.'], ['Dauer', '1-4 h', 'Schöne Bögen brauchen Zeit. Der Akku hält etwa 2 Stunden, also Powerbank anstecken.']],
  steps: ['Kamera aufs Ministativ oder eine feste Unterlage. Nahe am Äquator steht der Polarstern nur wenige Grad über dem Nordhorizont: Nach Norden gibt es flache Bögen, nach Osten oder Westen schräge Striche.', 'Voreinstellung Startrails wählen, Länge der Lichtspur Max.', 'Mit dem 10-Sekunden-Selbstauslöser starten, dann nicht mehr berühren.', 'Ergebnis: Video, in dem die Spuren wachsen, plus Einzelbild am Ende.'],
  tip: 'Einzelne Bilder lassen sich nachträglich nicht entfernen, jede Taschenlampe und jedes Flugzeug bleibt drin. Ein dunkler Platz abseits der Resortlampen und eine Palme im Vordergrund machen das Bild.' },
{ id: 'lichtmalerei', title: 'Lichtmalerei am Strand', short: 'Mit der Handylampe in die Nacht schreiben.',
  what: 'Bei [[lichtmalerei|Lichtmalerei]] bleiben bewegte Lichter als Spur stehen. Du schreibst mit einer Taschenlampe oder dem Handylicht Wörter oder Formen in die Luft.',
  why: 'Die Kamera zeigt die entstehende Zeichnung live im Video, das schafft eine normale Langzeitbelichtung nicht.',
  where: 'Strand auf Dhigurah nach dem Abendessen, Hotelterrasse in Negombo.',
  settings: [['Modus', 'Zeitraffer › Lichtmalerei'], ['Länge der Lichtspur', 'Lange Lichtspuren']],
  steps: ['Kamera fest hinlegen, Richtung dunkler Hintergrund.', 'Voreinstellung Lichtmalerei, Aufnahme starten.', 'Mit dem Licht zur Kamera gewandt zeichnen. Buchstaben spiegelverkehrt schreiben, weil die Kamera dich von vorn sieht. Einfacher: Formen wie Herz, Kreis oder Spirale.', 'Nach 1-2 Minuten stoppen.'],
  tip: 'Licht von der Kamera abgewandt zeigt nichts. Leuchte immer in Richtung Objektiv.' },
{ id: 'fahrzeugspuren', title: 'Auto-Lichtspuren im Verkehr', short: 'Tuk-Tuks werden zu Lichtbändern.',
  what: 'Der Nachteffekt [[fahrzeugspuren|Auto-Lichtspuren]] macht aus Scheinwerfern und Rücklichtern leuchtende Linien.',
  why: 'Klassische Langzeitbelichtung, aber als Video, das die Spuren wachsen lässt, und ohne Stativ-Ausrüstung.',
  where: 'Kreuzung in Colombo oder Negombo am letzten Abend, Serpentinenstraße im Hochland von oben.',
  settings: [['Modus', 'Zeitraffer › Auto-Lichtspuren'], ['Länge der Lichtspur', 'Lange Lichtspuren']],
  steps: ['Erhöhter Standpunkt (Brücke, Balkon), Kamera fest auflegen.', 'Voreinstellung wählen, Aufnahme 1-3 Minuten.', 'Nicht bewegen, solange die Aufnahme läuft.'] },
{ id: 'geplant', title: 'Sonnenaufgang, ohne aufzustehen', short: 'Die Kamera startet um 5:45 Uhr allein.',
  what: 'Mit [[geplant|Geplanter Aufnahme]] schaltet sich die GoPro zu einer Uhrzeit selbst ein und nimmt auf. Kombiniert mit [[dauer|Aufnahmedauer]] stoppt sie auch selbst.',
  why: 'Eine Kamera, die man über Nacht draußen liegen lassen kann, weil sie robust und klein ist.',
  where: 'Balkon in Ella oder Nuwara Eliya mit Blick ins Tal, Bungalow-Veranda auf den Malediven.',
  settings: [['Modus', 'Zeitraffer, 4K 8:7, 2-5 s'], ['Geplante Aufnahme', 'z. B. 05:30'], ['Dauer', '45 Min.', 'Wichtig: Nach der geplanten Aufnahme bleibt die Kamera sonst an, bis sie sich automatisch ausschaltet.']],
  steps: ['Am Abend Kamera aufstellen und Bildausschnitt prüfen.', 'In der Voreinstellung Geplante Aufnahme mit Uhrzeit und Aufnahmedauer setzen.', 'Kamera ausschalten. Sie startet zur eingestellten Zeit.', 'Morgens ansehen und weiterschlafen.'],
  tip: 'Uhrzeit der Kamera vorher auf Ortszeit stellen: Sri Lanka UTC+5:30, Malediven UTC+5 (Einstellungen › Datum + Uhrzeit, oder automatisch beim Verbinden mit Quik).' },
{ id: 'drohne', title: 'Selfiestick-Drohnenflug', short: 'Kamera hoch über dir, als würde eine Drohne kreisen.',
  what: 'Ausgezogener Stick, Kamera nach unten auf dich gerichtet, langsam hochheben oder um dich herumdrehen. Mit Linear + [[horizont|Horizontsperre]] bleibt das Bild gerade, selbst wenn sich der Stick dreht.',
  why: 'Superweitwinkel plus Stabilisierung lässt den Stick im Bild fast verschwinden. Drohnen sind in Sri Lanka und auf den Malediven ohnehin streng geregelt.',
  where: 'Aussichtspunkt am Little Adam\'s Peak, Sandbank auf den Malediven, Bootsdeck.',
  settings: [['Objektiv', 'Linear + Horizontsperre'], ['HyperSmooth', 'AutoBoost'], ['Auflösung / Bildrate', '4K 16:9 / 50']],
  steps: ['Stick ganz ausziehen, Kamera nach unten neigen.', 'Aufnahme starten, Arm langsam heben und dabei eine halbe Drehung machen.', 'Der Stick sollte genau in Verlängerung der Kamera zeigen, dann verschwindet er fast.', 'Variante Durchreichen: Kamera langsam durch eine Lücke führen (Palmwedel, Tempeltor) und auf der anderen Seite von jemandem übernehmen lassen.'],
  tip: 'Nicht in der Nähe von Walhaien: Dort sind Selfiesticks auf den Malediven verboten.' },
{ id: 'overunder', title: 'Halb über, halb unter Wasser', short: 'Strand oben, Fische unten, in einem Bild.',
  what: 'Die Kamera halb eintauchen, sodass die Wasserlinie durchs Bild läuft. Oben Insel und Himmel, unten Sand und Fische.',
  why: 'Eine wasserdichte Kamera, die man ohne Sorge halb ins Meer hält.',
  where: 'Flache, ruhige Lagune auf Dhigurah, bei Sonne und Ebbe.',
  settings: [['Objektiv', 'Weit'], ['Bel.-Korr.', '-0,5'], ['Auflösung / Bildrate', '4K 8:7 / 50']],
  steps: ['Ruhiges, klares Wasser suchen, Sonne im Rücken.', 'Kamera ohne Gehäuse (bis 10 m dicht) halb eintauchen, Linse vorher anfeuchten.', 'Langsam bewegen und die Wasserlinie mittig halten.'],
  tip: 'Mit der flachen Front klappt das nur bei ganz ruhigem Wasser und ist Glückssache. Profis nutzen dafür eine Kuppel (Dome-Port). Als Experiment trotzdem lohnend.' },
{ id: 'framegrab', title: 'Fotos aus dem Video', short: 'Aus 5.3K-Clips das beste Standbild ziehen.',
  what: 'Aus einem 5.3K-Video lässt sich in Quik jedes Einzelbild als Foto speichern ([[framegrab|Frame Grab]]). Damit fängst du Momente, die für ein Foto zu schnell waren.',
  why: 'Video in so hoher Auflösung mit so kurzer Verschlusszeit liefert Standbilder in Fotoqualität fürs Handy.',
  where: 'Springende Delfine, Elefanten beim Baden, Sprung ins Meer.',
  settings: [['Auflösung / Bildformat', '5.3K 8:7', 'Ergibt Standbilder mit rund 24 Megapixeln, 5.3K 16:9 knapp 16.'], ['Licht', 'Tageslicht', 'Kurze Verschlusszeit, scharfe Einzelbilder.']],
  steps: ['In 5.3K filmen.', 'In Quik den Clip öffnen, Bild für Bild zum besten Moment.', 'Frame Grab bzw. Foto speichern. Es wird in voller Aufnahmeauflösung gesichert.'] },
{ id: 'rotation', title: 'Drehung mit gerader Welt', short: 'Kamera dreht sich um 360 Grad, der Horizont bleibt stehen.',
  what: 'Mit Linear + [[horizont|Horizontsperre]] hält die Kamera den Horizont sogar bei einer vollen Drehung gerade. Drehst du den Griff langsam einmal rundherum, bleibt die Welt waagrecht stehen. Das wirkt fast unwirklich.',
  why: 'Bei normalen Kameras bräuchtest du dafür einen motorisierten Gimbal.',
  where: 'Strandspaziergang, Bootsdeck, Rolle unter Wasser (dann muss das Tauchrezept 16:9 sein, in 8:7 gibt es keine Horizontsperre).',
  settings: [['Objektiv', 'Linear + Horizontsperre'], ['Auflösung / Bildrate', '4K 16:9 / 50']],
  steps: ['Griff auf Armlänge, Aufnahme starten.', 'Beim Vorwärtsgehen die Kamera langsam um 360 Grad drehen.', 'Im Clip dreht sich nur der Rahmen, der Horizont bleibt ruhig.'] },
{ id: 'bluetooth', title: 'Erzählen per Bluetooth-Ohrstöpsel', short: 'Kamera am Stick, deine Stimme trotzdem klar.',
  what: 'Die HERO12 kann Bluetooth-Ohrstöpsel als Mikrofon nutzen. Die Kamera hängt an Brust oder Stick, du erzählst, und der Ton kommt sauber aus dem Ohr statt aus dem Fahrtwind. Sprachbefehle hört sie darüber auch aus der Distanz.',
  why: 'Eine kabellose Tonlösung ohne Zusatzmikrofon. Bei der HERO12 neu.',
  where: 'Zugfahrt, Tuk-Tuk, Erzählung zur Pirschfahrt.',
  steps: ['Ohrstöpsel in den Koppelmodus bringen.', 'Dashboard › nach links wischen › Gerät koppeln, Ohrstöpsel antippen.', 'Aufnahme starten und erzählen.'],
  tip: 'Testberichte erwähnen, dass sich Ohrstöpsel manchmal neu koppeln müssen. Vor der Zugfahrt einmal ausprobieren.' }
];

/* ================= Checks ================= */
D.checksIntro = 'Abhaken, was erledigt ist. Die Häkchen bleiben auf deinem Handy gespeichert.';
D.checklists = [
{ id: 'abflug', title: 'Heute vor dem Abflug', when: 'Einmal erledigen, solange du noch WLAN und Steckdose hast.', items: [
  ['Mit dem Besitzer klären', 'Darf ich Einstellungen und Firmware ändern? Sind Daten auf der Karte, die bleiben müssen? Vor der Rückgabe: Einstellungen › Zurücksetzen › Voreinstellungen zurücksetzen.'],
  ['Quik-App installieren und Kamera koppeln', 'Google Play: GoPro Quik. Einmal drahtlos und einmal per USB-C-Kabel übertragen testen.'],
  ['Firmware über Quik prüfen', 'Nur mit dem Okay des Besitzers aktualisieren. Akku mindestens 20 %, während des Updates nichts drücken.'],
  ['Auf Profi-Bedienfunktionen umschalten', 'Dashboard › nach links wischen › Steuerung. Ab Werk steht die Kamera auf Einfach, dann fehlen Voreinstellungen und Protune.'],
  ['Antiflimmern 50 Hz', 'Einstellungen › Video › Antiflimmern. Passt zum Stromnetz in Sri Lanka und auf den Malediven. Die Bildraten heißen dann 25, 50, 100, 200.'],
  ['Zeitzone einstellen', 'Einstellungen › Datum + Uhrzeit: Sri Lanka UTC+5:30, ab 8. November Malediven UTC+5. Dann sortieren sich die Clips richtig.'],
  ['Eigene Voreinstellungen anlegen', 'Tauchen, Tauchen Zeitlupe, Safari, Fahrt, Action, Reisen. Mittlere Schaltfläche › ganz unten „Neu erstellen“. Tauchen ganz nach oben ziehen, unbenutzte ausblenden.'],
  ['Speicherkarten in der Kamera formatieren', 'Einstellungen › Zurücksetzen › SD-Karte formatieren. [[sd|V30 / U3]], am besten 2 bis 3 Karten mit je 256 GB: Tauchgänge mit hoher Bitrate brauchen rund 50 GB pro Stunde. Auf jeder Karte 5 Minuten 5.3K testen.'],
  ['Alle Akkus laden', 'Für Tauchtage am besten drei Enduro-Akkus. Ersatzakkus und Powerbank ins Handgepäck.'],
  ['Ladezubehör und Adapter', 'USB-C-Kabel (eines USB-C auf USB-C fürs Handy), Netzteil, Powerbank, Steckdosenadapter für Sri Lanka und die Malediven.'],
  ['Tauchgehäuse ohne Kamera testen', 'Taschentuch hinein, 10 Minuten ins Waschbecken drücken, danach auf nasse Stellen prüfen. Dichtung sauber? Filter sitzt und klappt?'],
  ['Kleinzeug einpacken', 'Getrocknete [[antifog|Anti-Beschlag-Einlagen]] luftdicht, 3 Mikrofasertücher, Zipp-Beutel, Sicherungsleine fürs Jacket, Ministativ, USB-C-Kartenleser.'],
  ['10-Bit-Clip am Handy abspielen', 'Ruckelt ein 4K-8:7-Clip mit 10-Bit in Quik, an Land lieber 8-Bit nehmen.'],
  ['Diese App aufs Handy holen', 'Im Browser-Menü „Zum Startbildschirm hinzufügen“ und einmal alle Bereiche öffnen. Danach geht sie auch ohne Netz.']
] },
{ id: 'morgen', title: 'Jeden Morgen', items: [
  ['Akku voll, Ersatzakku geladen'],
  ['Genug Speicher frei', 'Dashboard › nach rechts wischen zeigt den SD-Kartenstatus.'],
  ['Linse sauber, Klappendichtung frei von Sand und Staub'],
  ['Einmal-Einstellungen zurück', 'HindSight aus, Geplante Aufnahme aus, Dauer auf keine Beschränkung, Zoom 1,0x.'],
  ['Standardvoreinstellung für den Tag', 'Reisen, Safari oder Tauchen.'],
  ['Kamera nicht in der Sonne, auf dem Armaturenbrett oder im heißen Jeep liegen lassen']
] },
{ id: 'vortauch', title: 'Vor jedem Tauchgang', when: 'Am besten im klimatisierten Zimmer, sonst kühl im Schatten.', items: [
  ['Akku über 80 %, mindestens 60 GB frei'],
  ['Bittiefe 10-Bit, Bitrate Hoch', 'Einstellungen › Video. Gilt für alle Voreinstellungen, einmal pro Tauchtag.'],
  ['Voreinstellung Tauchen ausgewählt', 'Anzeige „4K 8:7 | 50 | W“. Auch als Standardvoreinstellung, dann startet QuikCapture damit.'],
  ['Ausrichtung Querformat, Automatisches Ausschalten 15 Min.', 'Einstellungen › Displays bzw. Allgemein.'],
  ['WLAN, Sprachsteuerung, Signaltöne aus; Bildschirmsperre an'],
  ['[[dichtung|Dichtung]] prüfen', 'Mit dem Finger rundum fahren: kein Haar, kein Sand, keine Fussel.'],
  ['Trockene Anti-Beschlag-Einlage, kühle Kamera', 'Nicht direkt vom Ladegerät ins Gehäuse.'],
  ['Gehäuse schließen, Verschluss ganz einrasten'],
  ['Tauchtest im Spülbecken', '30 bis 60 Sekunden: keine Bläschen an der Dichtung, kein Tropfen innen.'],
  ['Filter-Entscheidung', 'Rot: blaues Wasser, etwa 3 bis 25 m, Sonne. Magenta: grünes Wasser. Keiner: Schnorcheln, Walhai an der Oberfläche, Nacht, mit Lampe.'],
  ['Sicherungsleine am Jacket', 'An Walhai-Tagen bleibt der Selfiestick an Bord.'],
  ['3-Sekunden-Testclip an Bord', 'Gehäuse bis zum Einstieg im Schatten halten.']
] },
{ id: 'nachtauch', title: 'Nach jedem Tauchgang', items: [
  ['Aufnahme vor dem Aufstieg stoppen', 'An der Oberfläche den Filter wegklappen, falls du weiterfilmst.'],
  ['Geschlossenes Gehäuse in Süßwasser einweichen', 'Möglichst 15 Minuten, dabei die Tasten mehrmals drücken.'],
  ['Außen ganz abtrocknen, erst dann öffnen', 'Im Schatten oder klimatisierten Raum, mit trockenen Händen.'],
  ['Innen auf Tropfen prüfen, Einlage herausnehmen', 'Zum Wiederverwenden trocknen, höchstens viermal.'],
  ['Akku nur trocken und im Schatten tauschen', 'Reicht er für den nächsten Tauchgang, das Gehäuse lieber zu lassen.'],
  ['Beste Clips merken, Filter und Leine abspülen', 'Gehäuse nie in der Sonne liegen lassen.']
] },
{ id: 'abend', title: 'Jeden Abend', items: [
  ['Ausgewählte Clips in Quik aufs Handy', 'HiLights zuerst. Per USB-C-Kabel geht es am schnellsten.'],
  ['Originale auf der Karte lassen', 'Erst löschen, wenn sie gesichert sind. Lieber die Karte wechseln.'],
  ['Alle Akkus, Powerbank und Handy laden'],
  ['Kamera und Halterungen von Sand und Salz befreien']
] }
];

D.problems = [
{ group: 'Akku und Hitze', items: [
  ['Die Kamera wird heiß und schaltet ab.', '<p>Die Meldung „Kamera ist zu heiß“ erscheint mit einem Temperatursymbol, dann schaltet sich die Kamera zum Abkühlen ab. GoPro nennt als Betriebsbereich -10 bis 35 °C Umgebungstemperatur, in Sri Lanka bist du oft nah dran. In einem Test schaltete die Kamera bei 5.3K 60 nach etwa 18 Minuten ab, still auf dem Tisch bei 24 °C. Am Körper mit Fahrtwind lief 4K 60 bei 30 °C dagegen 72 Minuten, bis der Akku leer war. Fazit: in Bewegung meist kein Problem, still in der Tropensonne schon. Einen eigenen Leistungsmodus hat die HERO12 nicht.</p><ul class="bul"><li>Auflösung oder Bildrate senken (4K 25 statt 5.3K 50), kürzere Clips, HindSight aus.</li><li>Auf dem Stativ HyperSmooth aus.</li><li>Das Tauchgehäuse nicht an Land benutzen, es staut die Hitze.</li><li>Kamera in den Schatten, in der Hand oder im Fahrtwind halten.</li><li>Vorderes Display aus, WLAN aus, Helligkeit runter, Quik trennen.</li><li>Nach dem Abschalten 10 bis 15 Minuten ruhen lassen, nicht in den Kühlschrank (Kondenswasser).</li></ul>'],
  ['Der Akku ist zu schnell leer.', '<ul class="bul"><li>Vorderes Display aus (Dashboard › Display vorne), Helligkeit runter, Bildschirmschoner kurz (Einstellungen › Displays).</li><li>Automatisches Ausschalten auf 5 Minuten (Einstellungen › Allgemein).</li><li>WLAN aus, wenn du Quik nicht brauchst.</li><li>HindSight nur bei Bedarf, es nimmt ständig auf.</li><li>Für Tauchgänge [[quikcapture|QuikCapture]]: Kamera aus, Auslöser startet die Aufnahme direkt.</li><li>Unterwegs per USB-C an der Powerbank laden. Voll ist der Akku nach etwa 3 Stunden.</li></ul>'],
  ['Die Kamera schaltet sich von allein aus.', '<p>Meist das Automatische Ausschalten nach 5 Minuten ohne Bedienung (Einstellungen › Allgemein, für Tauchgänge und Zeitraffer 15 Min. oder Nie). Bei QuikCapture ist es normal: Zweiter Druck stoppt und schaltet aus. Nach einer geplanten Aufnahme bleibt die Kamera an, bis das Automatische Ausschalten greift. Sonst: Akku unter 10 % oder Hitze.</p>'],
  ['Die Kamera reagiert nicht mehr.', '<p>Modustaste 10 Sekunden gedrückt halten. Das startet die Kamera neu, deine Einstellungen bleiben erhalten. Lässt sie sich gar nicht einschalten: zuerst laden.</p>'],
  ['Aufnahme stoppt nach einiger Zeit von allein.', '<p>Meist Hitze, ein voller Speicher oder eine zu langsame Karte. Ist eine [[dauer|Aufnahmedauer]] eingestellt, endet die Aufnahme planmäßig. Sehr lange Videos teilt die Kamera außerdem in mehrere Dateien auf, das ist normal und kein Verlust.</p>']
] },
{ group: 'Bild und Ton', items: [
  ['Das Bild ist verwackelt.', '<p>[[hypersmooth|HyperSmooth]] prüfen (Ein oder AutoBoost). Bei Vibration hilft eine höhere Bildrate. Bei Dämmerung wird die Verschlusszeit lang, Bewegung verwischt: mehr Licht oder ruhiger halten.</p>'],
  ['Nachts ist alles körnig oder verschmiert.', '<p>Der kleine Sensor braucht Licht, nachts wählt die Kamera lange Verschlusszeiten, und Bewegung verwischt. In der Dämmerung lieber 25 statt 50 Bilder pro Sekunde, [[iso|ISO]]-Obergrenze 3200, HyperSmooth Ein statt AutoBoost, HyperView meiden und das Motiv anleuchten (Handylampe, Straßenlaterne). Für Sterne: Startrails oder Nachtfoto statt Video. Schwaches Licht ist eine bekannte Schwäche von Action-Cams.</p>'],
  ['Unter Wasser ist alles blau oder grün.', '<p>Rot verschwindet im Wasser zuerst. Näher ans Motiv, [[rotfilter|Rotfilter]] zwischen etwa 5 und 20 m, [[wb|Weißabgleich]] Auto. In flachem Wasser oder mit Lampe den Filter abnehmen, sonst wird es rosa.</p>'],
  ['Wassertropfen auf der Linse.', '<p>Linse vor dem Eintauchen nass machen, dann bilden sich weniger Tropfen. Beim Auftauchen kurz untertauchen und schnell wieder hoch, oder das Glas mit der Zunge oder einem nassen Finger abwischen (der alte Surfertrick).</p>'],
  ['Der Ton rauscht im Wind.', '<p>In [[protune|Protune]] die Windgeräuschminderung auf Auto. Kamera aus dem direkten Fahrtwind, Mikrofon (vorne unten) nicht mit dem Finger verdecken.</p>'],
  ['Die Farben wirken flau und grau.', '<p>Wahrscheinlich steht das Profil auf [[log|Log]] oder die Farbe auf der flachen Variante. Für Quik am Handy: Profil Standard, Farbe Natürlich.</p>']
] },
{ group: 'Speicher und Übertragen', items: [
  ['Die Kamera meldet einen Kartenfehler.', '<p>Erst die Kamera neu starten, sie versucht dann, Dateien zu reparieren. Hilft das nicht: Karte in der Kamera formatieren (vorher sichern!). Meldet die Kamera „SD-Karten-Klassifizierung“, ist die Karte zu langsam. Für die HERO12: microSD mit [[sd|V30 / UHS-3]], bis 1 TB, etwa SanDisk Extreme, Samsung PRO Plus oder Lexar Professional Silver Plus. Keine microSD-Express-Karten, die passen nicht.</p>'],
  ['Quik findet die Kamera nicht.', '<ul class="bul"><li>Bluetooth, WLAN und Standort am Handy einschalten, Quik die Berechtigungen geben (Android braucht den Standort, um die Kamera zu finden). Energiesparmodus für Quik aus.</li><li>Im Android-WLAN den automatischen Wechsel zu mobilen Daten ausschalten, sonst verlässt das Handy das WLAN der Kamera, weil es kein Internet hat.</li><li>Kamera einschalten, Dashboard › nach links wischen › Einstellungen › Verbindungen › Drahtlosverbindungen, dann den Schritten in Quik folgen.</li><li>Im Zweifel unter Verbindungen „Verbindungen zurücksetzen“ und neu koppeln.</li><li>WLAN-Band der Kamera zwischen 5 und 2,4 GHz wechseln (Einstellungen › Verbindungen).</li><li>Plan B: USB-C-Kabel von der Kamera direkt ans Handy, Quik öffnen. Plan C: Karte in einen USB-C-Kartenleser, Videos aus DCIM/100GOPRO kopieren (die .LRV- und .THM-Dateien ignorieren).</li></ul>'],
  ['Das Handy wird voll.', '<p>Bei hoher Bitrate sind es fast 1 GB pro Minute. In Quik nur die besten Clips importieren, oder in Quik einen Ausschnitt speichern statt des ganzen Videos. Die Originale bleiben auf der Karte.</p>'],
  ['Videos ruckeln am Handy oder Computer.', '<p>Die GoPro speichert in [[hevc|HEVC]]. Ältere Geräte kommen bei 5.3K nicht mit. Quik wandelt beim Exportieren um. Am Computer hilft der GoPro Player.</p>']
] },
{ group: 'Unter Wasser', items: [
  ['Das Gehäuse beschlägt.', '<p>Feuchte Tropenluft ist im Gehäuse eingeschlossen und kondensiert am kühleren Glas. Gehäuse im klimatisierten Raum schließen, getrocknete [[antifog|Anti-Beschlag-Einlage]] rein, vor dem Tauchgang nicht in der Sonne liegen lassen.</p>'],
  ['Ich kann im Gehäuse nichts einstellen.', '<p>Der Touchscreen reagiert unter Wasser nicht, die Tasten schon. Modustaste halten und Auslöser drücken: Auf dem vorderen Display erscheint ein Menü, die Modustaste blättert durch die Voreinstellungen, der Auslöser wählt. Am einfachsten ist trotzdem, das Tauchrezept vorab als [[standardvor|Standardvoreinstellung]] festzulegen und zuletzt auszuwählen.</p>'],
  ['Wasser im Gehäuse.', '<p>Sofort auftauchen, Kamera nach oben halten. An Land: Gehäuse außen trocknen, öffnen, Akku raus. Die HERO12 selbst ist bis 10 m dicht, flaches Salzwasser verträgt sie. Gründlich mit Süßwasser spülen und trocknen lassen. Danach Dichtung prüfen, bevor es wieder runtergeht.</p>']
] }
];

D.basicsIntro = 'Die wichtigsten Stellschrauben, kurz erklärt.';
D.basics = [
  { t: 'Modus, Voreinstellung, Einstellung: wie hängt das zusammen?', d: '<p>Ganz oben stehen die drei [[modus|Aufnahmemodi]] Video, Foto und Zeitraffer. Jeder Modus hat mehrere [[preset|Voreinstellungen]], und jede Voreinstellung ist ein Paket aus Einzeleinstellungen. Du änderst also selten eine einzelne Einstellung, du wählst ein Paket.</p><div class="note"><p>Bildlich: Der Modus ist die Abteilung im Supermarkt, die Voreinstellung das fertige Rezept, die Einstellungen sind die Zutaten.</p></div><p>Eigene Voreinstellung anlegen: mittlere Schaltfläche unten antippen, in der Liste ganz nach unten scrollen, „Neu erstellen“, Modus wählen, Einstellungen festlegen, Symbol und Name vergeben, speichern. Werks-Voreinstellungen lassen sich ändern, aber nicht löschen. Bitrate, Bittiefe und Antiflimmern sind keine Zutaten des Rezepts: Sie gelten für alle Voreinstellungen (Einstellungen › Video).</p>' },
  { t: 'Auflösung und Bildrate: welche Kombination wofür?', d: '<p>Die Werte gelten für [[antiflimmern|Antiflimmern 50 Hz]]. Bei 60 Hz heißen sie 30, 60, 120 und 240.</p><ul class="bul"><li><b>5.3K 25</b>: maximale Details, viel Spielraum zum Zuschneiden und für Standbilder. Landschaft, Safari.</li><li><b>4K 50</b>: der Allrounder. Flüssig, 2-fache Zeitlupe möglich, moderat im Akku. Tauchen, Fahrten, Alltag.</li><li><b>4K 100 / 2.7K 200</b>: 4- bzw. 8-fache Zeitlupe. Braucht viel Licht.</li><li><b>1080p</b>: kleinste Dateien, längste Laufzeit.</li></ul><p>Je höher beide Werte, desto mehr Akku, Wärme und Speicher. GoPro nennt für einen vollen Akku etwa 70 Minuten bei 5.3K 50/60, rund 80 bei 4K 50/60, knapp 100 bei 5.3K 25/30 und 155 bei 1080p.</p>' },
  { t: 'Digitale Objektive im Vergleich', d: '<p>Von weit nach eng: [[hyperview|HyperView]], [[superview|SuperView]], [[weitwinkel|Weit]] (etwa 16-34 mm Kleinbild), [[linear|Linear]] (etwa 19-39 mm), Linear + [[horizont|Horizontsperre]].</p><ul class="bul"><li>Mittendrin-Gefühl und Geschwindigkeit: HyperView oder SuperView.</li><li>Das typische GoPro-Bild, unter Wasser, 8:7 und 9:16: Weit.</li><li>Landschaft, Architektur, Menschen ohne Verzerrung: Linear.</li><li>Ferne Motive: Zoom bis 2,0x oder besser in hoher Auflösung filmen und später zuschneiden.</li></ul><p>Nicht jedes Objektiv gibt es bei jeder Auflösung und Bildrate: HyperView etwa nur bei 5.3K 25 und 4K 50 (16:9), 8:7 und 9:16 nur mit Weit. Die Kamera bietet nur passende Kombinationen an.</p>' },
  { t: 'HyperSmooth: wie viel Stabilisierung?', d: '<p>Die HERO12 kennt drei Stufen. [[hypersmooth|HyperSmooth]] „Ein“ reicht fast immer und schneidet wenig ab. [[autoboost|AutoBoost]] für sehr unruhige Situationen (Laufen, Jeep, Zugtür): so viel Stabilisierung wie nötig. In 8:7 und 9:16 gibt es nur Ein oder Aus. „Aus“ nur auf dem Stativ, dann läuft die Kamera auch kühler.</p>' },
  { t: 'Hochkant für Reels: welches Format?', d: '<p>Drei Wege zum 9:16-Clip, mit unterschiedlich viel Reserve für ein scharfes 1080 x 1920:</p><ul class="bul"><li><b>5.3K 8:7</b>: rund 2,4-fache Reserve. Du entscheidest erst in Quik, ob quer oder hochkant, und kannst noch heranzoomen. Die flexibelste Wahl.</li><li><b>4K 9:16</b>: direkt hochkant, Kamera bleibt quer am Griff. 2-fache Reserve, aber nur Weit, nur 8-Bit, keine Horizontsperre.</li><li><b>4K 8:7</b>: rund 1,75-fache Reserve, dafür mit 50 Bildern pro Sekunde.</li><li><b>4K 16:9</b>: hochkant ausgeschnitten bleibt fast nichts übrig. 2.7K und 1080p werden dabei unscharf.</li></ul><p>Für hochkant in Zeitlupe lieber 4K 100 als 2.7K 200. Oder die Kamera einfach hochkant drehen, die Anzeige dreht mit. Einstellungen lassen sich dann aber nicht ändern.</p>' },
  { t: 'Protune: muss ich das anfassen?', d: '<p>Für den Anfang nicht. [[protune|Protune]] lohnt sich bei drei Situationen auf deiner Reise:</p><ul class="bul"><li>Tauchen: [[iso|ISO]]-Grenzen, Bel.-Korr. und Schärfe festlegen.</li><li>Gleißende Sonne, Sand, Wasser: [[ev|Bel.-Korr.]] auf -0,5.</li><li>Wind und Fahrt: Windgeräuschminderung auf Auto.</li></ul><p>Den Rest kann die Automatik besser, als man glaubt. Schneller als Protune: Display gedrückt halten für die Belichtungssteuerung.</p>' },
  { t: 'Farbe und Bittiefe für den Handyschnitt', d: '<p>Weil du in Quik am Handy schneidest: Profil Standard, [[farbe|Farbe]] Natürlich (oder die kräftigere Variante), [[bittiefe|Bittiefe]] 10-Bit unter Einstellungen › Video, falls dein Handy das flüssig abspielt. [[log|GP-Log]] meiden, das braucht Farbkorrektur am Computer und sieht in Quik grau aus.</p>' },
  { t: 'Vom Clip zum Reel in Quik', d: '<ol class="steps"><li>In Quik verbinden (per USB-C-Kabel am schnellsten) und zuerst die Clips mit HiLight importieren. Quik erkennt auch selbst Höhepunkte.</li><li>Einzelnen Clip öffnen, Format 9:16 wählen und den Ausschnitt mit den Fingern verschieben.</li><li>Mit dem Geschwindigkeits-Werkzeug nur die Aktion verlangsamen: 50 Bilder pro Sekunde ergeben 2-fach, 100 ergeben 4-fach, 200 ergeben 8-fach.</li><li>Unter Wasser etwas wärmer stellen, nicht übertreiben.</li><li>Für ein Reel aus mehreren Clips: 6 bis 15 Clips auswählen und die automatische Bearbeitung nutzen. Danach Musik tauschen, Clips auf 1 bis 2 Sekunden kürzen, den stärksten zuerst.</li><li>Speichern und in 1080p aufs Handy exportieren, das reicht für Reels und Shorts.</li></ol><p class="muted small">Manche Themen und Musikstücke (mit Blitz-Symbol) brauchen ein Abo. Ein Abo hängt am GoPro-Konto, nicht an der Kamera.</p>' },
  { t: 'Einfache oder Profi-Bedienfunktionen?', d: '<p>Ab Werk steht die Kamera auf [[pro|Einfache Bedienfunktionen]]: übersichtlich, aber ohne Voreinstellungen und Protune. Diese App geht von Profi aus. Umschalten: [[dashboard|Dashboard]] öffnen (vom oberen Rand nach unten wischen), nach links wischen, „Steuerung“ antippen.</p>' }
];
