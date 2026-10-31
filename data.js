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
  linse: { t: 'Digitales Objektiv', en: 'Digital lens', d: 'Die GoPro hat ein fest eingebautes Superweitwinkel-Objektiv. Das „digitale Objektiv“ bestimmt, welcher Ausschnitt verwendet und wie stark die Fischaugen-Krümmung entzerrt wird. Von weit nach eng: HyperView, SuperView, Weit, Linear und Linear + Horizontsperre. Welche angeboten werden, hängt von Auflösung und Bildrate ab.', bild: 'Wie ein Bilderrahmen, den du über dasselbe Foto legst: Der Rahmen ändert den Ausschnitt, das Foto bleibt gleich.' },
  hyperview: { t: 'HyperView', d: 'Das weiteste digitale Objektiv: Es nutzt den vollen 8:7-Sensor und streckt ihn auf 16:9. Ergebnis: maximaler Rundumblick mit starkem Mittendrin-Gefühl, die Ränder wirken gedehnt. Ideal für Fahrten aus Ich-Perspektive.' },
  superview: { t: 'SuperView', d: 'Sehr weites digitales Objektiv, etwas weniger extrem als HyperView. Gut für Action aus Ich-Perspektive.' },
  weitwinkel: { t: 'Weit', en: 'Wide', d: 'Das klassische GoPro-Bild: sehr weit, mit sichtbarer Krümmung zum Rand hin (Fischaugen-Effekt). Gute Standardwahl.' },
  linear: { t: 'Linear', d: 'Das Bild wird entzerrt: Gerade Linien wie Horizont oder Häuserkanten bleiben gerade. Etwas engerer Ausschnitt. Gut für Landschaft, Architektur und alles, was natürlich aussehen soll.' },
  horizont: { t: 'Horizontsperre / Horizontausrichtung', en: 'Horizon Lock / Horizon Leveling', d: 'Die Kamera hält den Horizont gerade. Die Horizontsperre schafft das sogar bei einer vollen 360-Grad-Drehung und gilt bei den meisten Bildraten. Bei der jeweils höchsten Bildrate (5.3K 60, 4K 120, 2.7K 240) arbeitet stattdessen die Horizontausrichtung, die nur Neigungen ausgleicht. Dafür wird ein Teil des Bildes abgeschnitten.', wo: 'Als Objektiv „Linear + Horizontsperre“ wählen.' },
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
  hdr: { t: 'HDR', en: 'High Dynamic Range', d: 'Hoher Dynamikumfang: Die Kamera kombiniert mehrere Belichtungen bzw. arbeitet so, dass helle und dunkle Bereiche gleichzeitig Zeichnung behalten. Gut bei Gegenlicht und Sonnenauf- und -untergang, am besten bei hellem Licht und ruhigen Szenen. Video-HDR gibt es bei 5.3K 30 und 4K 60 (16:9) sowie 4K 30 (8:7).', wo: 'Video: Profil › HDR. Foto: Ausgabe › HDR.' },
  hindsight: { t: 'HindSight', d: 'Die Kamera puffert ständig die letzten 15 oder 30 Sekunden. Drückst du den Auslöser, beginnt das Video rückwirkend vor dem Drücken. So verpasst du den Moment nicht, in dem der Leopard aus dem Gebüsch kommt. Kostet merklich Akku, weil die Kamera ständig aufnimmt.', bild: 'Wie eine Dashcam, die immer mitläuft, aber nur speichert, wenn du es willst.' },
  timewarp: { t: 'TimeWarp', d: 'Ein stabilisierter Zeitraffer aus der Bewegung, also während du gehst, fährst oder läufst. Die Kamera beschleunigt das Video (z. B. 10x) und glättet dabei stark. Bei „Auto“ passt sie die Geschwindigkeit selbst an. Feste Stufen: 2x, 5x, 10x, 15x, 30x. Antippen des Displays während der Aufnahme schaltet auf Echtzeit, nochmal antippen zurück (Geschwindigkeitsanpassung).' },
  zeitraffer: { t: 'Zeitraffer', en: 'Time lapse', d: 'Die Kamera macht in festen Abständen ein Bild (z. B. alle 0,5 oder 2 Sekunden) und setzt sie zu einem Video zusammen. Für Wolken, Nebel, Menschenmengen. Die Kamera muss dabei still stehen.' },
  nachtzeitraffer: { t: 'Zeitraffer bei Nacht', en: 'Night Lapse', d: 'Zeitraffer mit langen Belichtungszeiten für die Nacht, etwa für Sternenhimmel. Kamera muss absolut ruhig stehen.' },
  nachteffekte: { t: 'Nachteffekte', en: 'Night Effects', d: 'Langzeitbelichtungs-Effekte im Zeitraffer-Modus: Startrails, Lichtmalerei und Auto-Lichtspuren. Die Kamera addiert Bilder, sodass Lichter als Spuren erscheinen. Länge der Lichtspur: Max, Lange oder Kurze Lichtspuren.' },
  zeitlupe: { t: 'Zeitlupe', en: 'Slo-Mo', d: 'Mit hoher Bildrate aufnehmen und normal abspielen. Bei Wiedergabe mit 30 fps: 60 fps ergibt 2-fache, 120 fps 4-fache und 240 fps 8-fache Zeitlupe.', wo: 'Shortcut Geschwindigkeit oder Bildrate in der Voreinstellung' },
  quik: { t: 'Quik-App', d: 'Die GoPro-App fürs Handy: Kamera fernsteuern, Aufnahmen aufs Handy übertragen, schneiden, Hochformat-Ausschnitte wählen und Firmware aktualisieren. Für Android im Google Play Store.' },
  quikcapture: { t: 'QuikCapture', d: 'Wenn die Kamera aus ist, startet ein Druck auf den Auslöser sofort eine Videoaufnahme mit den zuletzt genutzten Videoeinstellungen. Ein weiterer Druck stoppt sie, und die Kamera schaltet wieder ab. Spart Akku und ist ideal im Tauchgehäuse.', wo: 'Standardmäßig an. Dashboard › QuikCapture oder Einstellungen › Allgemein.' },
  hilight: { t: 'HiLight', d: 'Eine Markierung, die du während der Aufnahme setzt. Quik findet die Stelle später sofort und nutzt sie für automatische Schnitte.' },
  gpr: { t: 'RAW (.GPR)', d: 'Unbearbeitete Sensordaten bei Fotos, zusätzlich zur JPG-Datei. Mehr Spielraum bei Belichtung und Farbe, braucht aber ein Bearbeitungsprogramm wie Lightroom.' },
  superphoto: { t: 'SuperFoto', d: 'Automatische Bildoptimierung bei Fotos: Die Kamera wählt je nach Licht HDR, Rauschunterdrückung oder Tonwertanpassung. Bequem, aber kein RAW möglich.' },
  rotfilter: { t: 'Rotfilter', d: 'Wasser schluckt rotes Licht schon in wenigen Metern Tiefe, alles wird blau-grün. Ein Rotfilter vor dem Objektiv lässt Blau und Grün weniger durch und gleicht so aus. Funktioniert nur mit Sonnenlicht und in einem bestimmten Tiefenbereich. Magentafilter sind die Variante für grünliches Wasser.' },
  antifog: { t: 'Anti-Beschlag-Einlage', en: 'Anti-fog insert', d: 'Saugfähige Streifen, die man ins Gehäuse legt. Sie nehmen die Feuchtigkeit der eingeschlossenen Luft auf, damit das Glas von innen nicht beschlägt. Vor Gebrauch trocknen (z. B. kurz auf warme Oberfläche).' },
  dichtung: { t: 'Dichtung (O-Ring)', d: 'Der Gummiring im Deckel des Tauchgehäuses. Schon ein Haar oder Sandkorn darauf kann zu Wassereinbruch führen. Vor jedem Tauchgang ansehen und mit dem Finger abfahren.' },
  backscatter: { t: 'Schwebeteilchen-Reflexe', en: 'Backscatter', d: 'Helle Punkte im Bild, wenn Licht (Sonne oder Lampe) Partikel im Wasser direkt vor der Kamera anstrahlt. Abhilfe: nah ans Motiv, Lampen seitlich halten, nicht im aufgewirbelten Sand filmen.' },
  reframe: { t: 'Neu ausrichten (Reframe)', d: 'In der Quik-App nachträglich einen Ausschnitt wählen, z. B. ein Hochformat aus einem breiten Clip. Funktioniert am besten mit 8:7-Aufnahmen und hoher Auflösung.' },
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
  pro: { t: 'Einfache / Profi-Bedienfunktionen', en: 'Easy / Pro controls', d: 'Zwei Bedienmodi. Die einfachen Bedienfunktionen (ab Werk aktiv) bieten wenige Optionen per Schieberegler, ohne Voreinstellungen und ohne Protune. Die Profi-Bedienfunktionen zeigen alle Voreinstellungen, Shortcuts und Protune. Diese App geht von Profi aus.', wo: 'Dashboard öffnen, nach links wischen, „Steuerung“ antippen.' }
};

/* ================= Kamera ================= */
D.cam = {
  hint: 'Wische über das Display oder tippe auf die Tasten am Gehäuse (oben und rechts).',
  defaultScreen: { mode: 'video', preset: 'Standard', settings: '5.3K 16:9 | 30 | W', battery: 87, remaining: '1H:12', shortcuts: ['objektiv', 'slomo', 'zoom', 'hindsight'], art: 'walk', rec: false },
  shortcutPos: ['left:2.5%;bottom:5%', 'left:15%;bottom:5%', 'right:15%;bottom:5%', 'right:2.5%;bottom:5%'],
  modes: [
    { name: 'Video', mode: 'video', preset: 'Standard', settings: '5.3K 16:9 | 30 | W', shortcuts: ['objektiv', 'slomo', 'zoom', 'hindsight'], listTitle: 'Video-Voreinstellungen',
      presets: [['Standard', '5.3K 16:9 | 30 | W', 'Werks-Voreinstellung als Ausgangspunkt.'], ['Tauchen', '4K 8:7 | 60 | W', 'Deine eigene, siehe Szene Tauchen.'], ['Safari', '5.3K 16:9 | 30 | L', 'Deine eigene, siehe Szene Safari.'], ['Fahrt', '4K 16:9 | 60 | HV', 'Deine eigene, siehe Szene Zug und Fahrten.'], ['Zeitlupe', '2.7K 16:9 | 240 | W', 'Deine eigene für 8-fache Zeitlupe.'], ['+ Neu erstellen', '', 'Ganz unten in der Liste legst du eigene Voreinstellungen an.']] },
    { name: 'Foto', mode: 'foto', preset: 'Foto', settings: '27MP 8:7 | W', shortcuts: ['timer', 'objektiv', 'zoom', 'ausgabe'], listTitle: 'Foto-Voreinstellungen',
      presets: [['Foto', '27MP 8:7 | W', 'Einzelfoto mit SuperFoto-Bildverarbeitung.'], ['Serienfoto', 'Auto | W', 'Bis zu 30 Fotos pro Sekunde.'], ['Nachtfoto', 'Auto | W', 'Lange Belichtung, Kamera muss stillstehen.']] },
    { name: 'Zeitraffer', mode: 'zeitraffer', preset: 'TimeWarp', settings: '5.3K 16:9 | Auto | W', shortcuts: ['geschw', 'objektiv', 'dauer', 'zoom'], listTitle: 'Zeitraffervoreinstellungen',
      presets: [['TimeWarp', '5.3K 16:9 | Auto | W', 'Zeitraffer in Bewegung.'], ['Startrails', '4K 16:9 | Max | W', 'Sterne als Bögen.'], ['Lichtmalerei', '4K 16:9 | Lang | W', 'Mit Licht zeichnen.'], ['Auto-Lichtspuren', '4K 16:9 | Lang | W', 'Lichtbänder von Fahrzeugen.'], ['Zeitraffer', '4K 16:9 | 0,5s | W', 'Kamera steht still.'], ['Zeitraffer bei Nacht', '4K 16:9 | Auto | W', 'Für Dämmerung und Nacht.']] }
  ],
  pillMsg: 'Tippen öffnet die Liste der Voreinstellungen. Gedrückt halten öffnet die Einstellungen der aktuellen Voreinstellung.',
  screenNote: 'Die Nummern entsprechen dem Handbuch. Die genaue Lage der Symbole kann je nach Firmware leicht abweichen. Kürzel im Feld 4: W = Weit, L = Linear, SV = SuperView, HV = HyperView. Ein kurzes Antippen des echten Displays blendet die Statussymbole aus und wieder ein.',
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
      what: 'Name der aktiven [[preset|Voreinstellung]] und darunter die wichtigsten Werte, z. B. „4K 16:9 | 60 | W“: [[aufloesung|Auflösung]] mit [[seitenverhaeltnis|Bildformat]], [[fps|Bildrate]] und [[linse|Objektiv]].',
      how: 'Antippen: Liste der Voreinstellungen. Gedrückt halten: alle Einstellungen dieser Voreinstellung, darunter die erweiterten [[protune|Protune]]-Einstellungen. Änderungen mit dem Speichern-Symbol sichern. „Speichern als“ legt eine neue Voreinstellung an.',
      tip: 'Hältst du die Kamera hochkant, sind die Aufnahmeeinstellungen nicht erreichbar. Vorher im Querformat einstellen.' },
    { key: 'akku', n: 5, t: 'Akkustatus', short: 'Ladestand in Prozent',
      what: 'Ladestand des [[enduro|Enduro-Akkus]]. Unter 10 % warnt die Kamera, bei 0 % stoppt sie die Aufnahme, speichert und schaltet ab.',
      how: 'Laden per USB-C, voll nach etwa 3 Stunden. GoPro nennt als Ladegerät 5 V / 1 A oder den eigenen Supercharger.',
      tip: 'Mit Netzteil kannst du auch während des Ladens filmen (nicht am Computer). Der Akku lädt dann erst nach der Aufnahme weiter.' }
  ],
  shortcutHow: 'Antippen öffnet einen Schieberegler. Gedrückt halten, um den Shortcut durch einen anderen zu ersetzen.',
  shortcuts: {
    objektiv: { t: 'Objektiv', icon: 'linse', d: 'Wechselt das [[linse|digitale Objektiv]]: HyperView, SuperView, Weit, Linear, Linear + [[horizont|Horizontsperre]]. Angeboten werden nur die, die zu Auflösung und Bildrate passen.', tip: 'Ausgegraute Objektive gehen bei der aktuellen Auflösung und Bildrate nicht. HyperView gibt es z. B. nur bei 5.3K 30 und 4K 60.' },
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
  goal: 'Ruhige, farbige Unterwasserclips, bei denen du unter Wasser nur noch zwei Tasten brauchst.',
  before: '<b>Im Tauchgehäuse reagiert der Touchscreen nicht, die Tasten schon.</b> Leg dieses Rezept an Land als eigene Voreinstellung an, mach es zur [[standardvor|Standardvoreinstellung]] und wähle es vor dem Schließen einmal aus, denn [[quikcapture|QuikCapture]] filmt mit den zuletzt genutzten Videoeinstellungen. Unter Wasser wechselst du bei Bedarf so: Modustaste halten und Auslöser drücken, dann blättert die Modustaste durch die Voreinstellungen (Anzeige auf dem vorderen Display), der Auslöser wählt aus.',
  screen: { mode: 'video', preset: 'Tauchen', settings: '4K 8:7 | 60 | W', shortcuts: [] },
  screenNote: 'Eigene Voreinstellung „Tauchen“. Shortcuts brauchst du hier keine, im Gehäuse lassen sie sich ohnehin nicht antippen.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Genug Reserve für Ausschnitte und Hochkant-Clips. Spart gegenüber 5.3K Akku und Speicher, was bei zwei Tauchgängen pro Tag zählt.', 'Voreinstellungen › ganz unten „Neu erstellen“ › Video'],
    ['[[fps|Bildrate]]', '60', 'Flüssige Bewegung, und du kannst den vorbeigleitenden Walhai später auf halbe Geschwindigkeit bremsen.'],
    ['[[seitenverhaeltnis|Bildformat]]', '8:7', '[[s87|Voller Sensor]]: Daraus schneidest du später in Quik Quer- und Hochformat. Bei 4K 60 gibt es 8:7 nur mit dem Objektiv Weit, das passt hier ohnehin.'],
    ['[[linse|Objektiv]]', 'Weit', 'Unter Wasser gibt es kaum gerade Linien, die Krümmung fällt nicht auf. Weit heißt: Du kannst nah ran, und wenig Wasser zwischen Linse und Tier bedeutet mehr Farbe und Schärfe.'],
    ['[[hypersmooth|HyperSmooth]]', 'Ein', 'Glättet Flossenschläge bei wenig Beschnitt. AutoBoost, wenn es in der Strömung unruhig wird.'],
    ['[[wb|Weißabgleich]]', 'Auto', 'Mit Rotfilter rechnet die Kamera selbst nach. Ein fester Kelvin-Wert passt nur für eine Tiefe.', 'Protune'],
    ['[[iso|ISO]] min / max', '100 / 1600', 'Begrenzt das Rauschen, wenn es in der Tiefe oder im Schatten dunkler wird.', 'Protune'],
    ['[[ev|Bel.-Korr.]]', '0', 'Über hellem Sand oder knapp unter der Oberfläche -0,5, damit die hellen Stellen nicht ausfressen.', 'Protune'],
    ['[[farbe|Farbe]]', 'Natürlich', 'Der Standard. Ausgewogen und mit Spielraum, um in Quik etwas Rot und Kontrast nachzulegen. Profil bleibt auf Standard.', 'Protune'],
    ['[[bittiefe|Bittiefe]]', '10-Bit', 'Weiche Blauverläufe im Freiwasser ohne Treppenstufen.', 'Einstellungen › Video › Bittiefe (gilt für alle Voreinstellungen)'],
    ['[[hindsight|HindSight]]', 'Aus', 'Frisst Akku. Unter Wasser startest du die Aufnahme ohnehin früh.']
  ],
  mount: [
    'Kurzer Griff unten am Gehäuse, damit du ruhig und mit Abstand zum Körper filmst.',
    'Immer eine Sicherungsleine: ans Handgelenk oder mit Karabiner ans Jacket (Tarierweste). Eine verlorene Leih-GoPro sinkt sofort.',
    'Kopf- und Brusthalterung beim Gerätetauchen eher nicht: Der Kopfgurt verrutscht über Maske und Haube, die Brust ist vom Jacket und Schlauch verdeckt.'
  ],
  tips: [
    'Aufnahme schon beim Abtauchen oder an der Oberfläche starten. Ein langer Clip ist im Gehäuse einfacher als ständiges Start/Stopp, und du verpasst nichts. Gute Stellen markierst du mit einem [[hilight|HiLight]]: Modustaste während der Aufnahme drücken.',
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
    ['Akku leer beim zweiten Tauchgang.', 'Zwischen den Tauchgängen Akku tauschen, vorderes Display aus, WLAN aus. Zur Orientierung: GoPro nennt rund 70 Minuten Daueraufnahme bei 5.3K 60, mit 4K 60 kommst du etwas weiter. Also lieber gezielte Clips statt Dauerfilm über die ganze Stunde.'],
    ['Kamera filmt im falschen Rezept.', 'QuikCapture nimmt die zuletzt genutzten Videoeinstellungen. Vor dem Schließen des Gehäuses „Tauchen“ auswählen, oder unter Wasser mit Modustaste halten + Auslöser wechseln.']
  ],
  vertical: 'Mit 8:7 schneidest du den Manta später in Quik hochkant aus. Halte das Tier möglichst in der Bildmitte und lass oben und unten Luft, dann hast du beim Ausschneiden Spielraum.',
  related: ['zeitlupe', 'reframe', 'overunder']
},
{
  id: 'safari', art: 'safari', title: 'Safari aus dem Jeep', short: 'Yala, Udawalawe: Tiere, Staub, plötzliche Momente.', tags: ['Sri Lanka', 'HindSight'],
  goal: 'Die Stimmung der Pirschfahrt einfangen und die überraschenden Momente nicht verpassen. Für ferne Tiere ist ein Teleobjektiv die bessere Wahl - die GoPro liefert den Kontext und alles, was nah kommt.',
  screen: { mode: 'video', preset: 'Safari', settings: '5.3K 16:9 | 30 | L', shortcuts: ['hindsight', 'zoom', 'objektiv', 'slomo'] },
  screenNote: 'Eigene Voreinstellung „Safari“ mit HindSight und Zoom als Shortcuts.',
  settings: [
    ['[[aufloesung|Auflösung]]', '5.3K', 'Maximale Details: Du kannst später in Quik nah ans Tier heranschneiden und gute [[framegrab|Standbilder]] ziehen.'],
    ['[[fps|Bildrate]]', '30', 'Bei 5.3K reicht das; es spart Akku und Wärme. Für Vögel im Flug oder staubende Elefanten lieber 4K 60.'],
    ['[[seitenverhaeltnis|Bildformat]]', '16:9', 'Breitbild für die Landschaft. Für Hochkant-Clips später den Ausschnitt in Quik wählen.'],
    ['[[linse|Objektiv]]', 'Linear', 'Entzerrt und etwas enger: Horizont und Jeep-Rahmen bleiben gerade, Tiere wirken weniger klein als mit Weit.'],
    ['[[touchzoom|Zoom]]', 'nach Bedarf', 'Bringt ein Tier näher, kostet aber Details. Besser: groß aufnehmen und später zuschneiden.'],
    ['[[hypersmooth|HyperSmooth]]', 'AutoBoost', 'Gleicht das Rumpeln der Piste so stark wie nötig aus und behält dabei möglichst viel Bild.'],
    ['[[hindsight|HindSight]]', '15 s', 'Das Video beginnt 15 Sekunden vor dem Druck auf den Auslöser. So hast du den Leoparden, der gerade aus dem Gebüsch trat. Kostet Akku: nur aktiv, wenn es spannend wird.'],
    ['[[ev|Bel.-Korr.]]', '-0,5', 'Heller Himmel und Staub fressen sonst aus.', 'Protune'],
    ['[[farbe|Farbe]]', 'Natürlich', 'Ausgewogen, in Quik leicht nachzuschärfen.', 'Protune']
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
    'Leise sein: Der Ton ist bei Safari oft das Highlight (Vögel, Elefantentrompeten). Kamera-Signaltöne im Dashboard ausschalten, und gegen Fahrtwind die Windgeräuschminderung in Protune auf Auto lassen.'
  ],
  fixes: [
    ['Tier ist nur ein Pünktchen.', 'Linear statt Weit, 5.3K und später zuschneiden, oder die Aufnahme nur auf nahe Tiere beschränken.'],
    ['Moment verpasst, Kamera war aus.', 'HindSight aktivieren, sobald der Fahrer langsamer wird oder auf etwas zeigt.'],
    ['Video wabbelt bei Motorvibration.', 'Das ist [[rolling|Rolling Shutter]]: Kamera nicht direkt aufs Blech setzen, mit der Hand abfedern, HyperSmooth ein.'],
    ['Himmel weiß, Tiere dunkel.', 'Bel.-Korr. -0,5, oder das Display auf das Tier gedrückt halten: Die Belichtungssteuerung misst dann dort. Tiere nicht direkt gegen die Sonne filmen.']
  ],
  vertical: 'Einen Elefanten direkt neben dem Jeep kannst du gleich hochkant filmen: Kamera am Griff um 90 Grad drehen, die Anzeige dreht mit. Einstellungen lassen sich hochkant nicht ändern, also vorher quer einstellen. Sonst später in Quik ausschneiden.',
  related: ['hindsight', 'zeitlupe', 'framegrab']
},
{
  id: 'fahrt', art: 'train', title: 'Zug und Fahrten', short: 'Ella-Zug, Tuk-Tuk, Serpentinen im Hochland.', tags: ['Sri Lanka', 'TimeWarp', 'Halterung'],
  goal: 'Die berühmte Zugfahrt und die Wege dazwischen so filmen, dass man mitfährt, ohne seekrank zu werden.',
  screen: { mode: 'video', preset: 'Fahrt', settings: '4K 16:9 | 60 | HV', shortcuts: ['objektiv', 'hindsight', 'zoom', 'slomo'] },
  screenNote: 'Eigene Voreinstellung „Fahrt“ mit HyperView für das Mittendrin-Gefühl.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Guter Kompromiss aus Details und Akkulaufzeit bei langen Fahrten.'],
    ['[[fps|Bildrate]]', '60', 'Fahrtbewegung wirkt flüssig, und der Rolling-Shutter-Effekt durch Vibration fällt geringer aus.'],
    ['[[linse|Objektiv]]', 'HyperView', 'Maximales Sichtfeld aus der Zugtür oder dem Tuk-Tuk. Für Aufnahmen mit geradem Horizont (Teeplantagen aus dem Fenster): Linear + Horizontsperre.'],
    ['[[hypersmooth|HyperSmooth]]', 'AutoBoost', 'Stabilisiert so stark wie nötig.'],
    ['[[horizont|Horizontsperre]]', 'bei Linear', 'Hält den Horizont gerade, wenn der Zug in die Kurve kippt oder die Hand wackelt. Bei 4K 60 verfügbar.'],
    ['[[protune|Windgeräuschminderung]]', 'Auto', 'Fahrtwind übersteuert sonst das Mikrofon.', 'Protune'],
    ['Alternativ: [[timewarp|TimeWarp]]', 'Auto', 'Für lange Strecken. Bei 10x werden 5 Minuten Fahrt zu 30 Sekunden Video. GoPro empfiehlt 2x bis 5x im Auto.', 'Modus Zeitraffer › TimeWarp']
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
    ['Horizont kippt ständig.', 'Objektiv Linear + Horizontsperre wählen.'],
    ['Nur Rauschen im Ton.', 'Windgeräuschminderung auf Auto, Kamera aus dem direkten Fahrtwind.'],
    ['Aufnahme bricht nach langer Fahrt ab.', 'Hitze oder Akku. Für lange Strecken TimeWarp statt Video, vorderes Display aus. Mit Netzteil oder Powerbank kannst du auch während des Ladens filmen.']
  ],
  vertical: 'Für Reels gibt es zwei Wege: Bildformat 9:16 wählen (4K, Objektiv Weit), dann bleibt die Kamera quer am Griff. Oder die Kamera hochkant drehen. Zug, Landschaft und Gleis wirken im Hochformat sehr gut.',
  related: ['timewarp', 'hyperview', 'drohne']
},
{
  id: 'landschaft', art: 'hills', title: 'Landschaft und Zeitraffer', short: 'Teeplantagen, Nebel, Sonnenaufgang, Sterne.', tags: ['Hochland', 'Zeitraffer', 'Nacht'],
  goal: 'Weite Landschaft scharf und mit geradem Horizont, und Zeitraffer, in denen Nebel und Wolken über die Hügel ziehen.',
  screen: { mode: 'zeitraffer', preset: 'Zeitraffer', settings: '4K 16:9 | 2s | L', shortcuts: ['dauer', 'objektiv', 'zoom', 'timer'] },
  screenNote: 'Voreinstellung „Zeitraffer“ mit 2 Sekunden Intervall und Linear.',
  settings: [
    ['Modus', 'Zeitraffer', 'Kamera steht still, die Welt bewegt sich. Für Fahrten nimmst du TimeWarp.'],
    ['[[intervall|Zeitrafferintervall]]', '2 s', 'Gut für ziehenden Nebel. Wolken 5 bis 10 s, schnelle Bewegung 0,5 bis 1 s.'],
    ['[[aufloesung|Auflösung]]', '4K', 'Für Landschaft genug, und die Dateien bleiben überschaubar.'],
    ['[[linse|Objektiv]]', 'Linear', 'Gerader Horizont statt Fischauge.'],
    ['Videoalternative: [[hdr|Profil HDR]]', '4K 60', 'Bei Sonnenaufgang mit Gegenlicht: helle Wolken und dunkle Hügel behalten Zeichnung. Nur bei ruhigen Szenen.'],
    ['[[dauer|Dauer]]', '30 min', 'Stoppt automatisch. 30 Minuten mit 2 s Intervall ergeben etwa 30 Sekunden Video.'],
    ['Nacht: [[nachtzeitraffer|Zeitraffer bei Nacht]]', 'Auto / 20-30 s', 'Für Sternenhimmel über der Lodge. GoPro empfiehlt 20 bis 30 s für Sterne. Kamera muss völlig ruhig liegen.', 'Modus Zeitraffer › Zeitraffer bei Nacht']
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
    'Für Startrails und Zeitraffer bei Nacht brauchst du echte Dunkelheit, z. B. in Yala oder Udawalawe fern von Lampen.'
  ],
  fixes: [
    ['Himmel weiß ausgefressen.', 'Bel.-Korr. -0,5 oder Video mit Profil HDR bei ruhigen Szenen.'],
    ['Zeitraffer ruckelt oder wackelt.', 'Kamera stand nicht still. Feste Unterlage, und per Sprachbefehl, Selbstauslöser oder Quik starten statt mit dem Finger auf dem Auslöser.'],
    ['Horizont schief.', 'Objektiv Linear und Gitterlinien einschalten (Einstellungen › Displays › Hinteres Display-Raster).'],
    ['Akku vor Ende leer.', 'Bei langen Zeitraffern vorderes Display aus, Bildschirmschoner kurz, Powerbank per USB-C. Beim Laden ist die Klappe offen, die Kamera also nicht wasserdicht.']
  ],
  vertical: 'Landschaftszeitraffer funktionieren hochkant besonders gut mit hohem Vordergrund: Kamera um 90 Grad drehen, Teesträucher unten, Nebel oben.',
  related: ['sternspuren', 'geplant', 'lichtmalerei']
},
{
  id: 'unterwegs', art: 'walk', title: 'Unterwegs und Selfie', short: 'Das Basisrezept für Spaziergänge, Märkte, dich selbst.', tags: ['Basis', 'Griff', 'Frontdisplay'],
  goal: 'Ein Rezept, das fast immer passt: Spaziergänge, Märkte, Tempel, Strand, du selbst im Bild.',
  screen: { mode: 'video', preset: 'Standard', settings: '4K 16:9 | 60 | L', shortcuts: ['objektiv', 'slomo', 'zoom', 'hindsight'] },
  screenNote: 'Die Standard-Voreinstellung, leicht angepasst.',
  settings: [
    ['[[aufloesung|Auflösung]]', '4K', 'Reicht für alles und lässt Reserve.'],
    ['[[fps|Bildrate]]', '60', 'Flüssig und mit Zeitlupen-Reserve.'],
    ['[[seitenverhaeltnis|Bildformat]]', '16:9', 'Für maximale Flexibilität 8:7, dann aber nur mit Objektiv Weit.'],
    ['[[linse|Objektiv]]', 'Linear + Horizontsperre', 'Am Griff vor dir: natürliche Proportionen, gerader Horizont. Für Selfies Weit, sonst wird es eng.'],
    ['[[hypersmooth|HyperSmooth]]', 'Ein', 'Gehen wirkt wie schweben.'],
    ['[[frontscreen|Display vorne]]', 'Vollbild', 'Für Selfies siehst du dich selbst. Sonst aus, spart Akku.', 'Dashboard › Display vorne'],
    ['[[farbe|Farbe]]', 'Natürlich', 'Der Standard, schnell teilbar.', 'Protune']
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
    ['Display reagiert nicht aufs Antippen.', 'Bildschirmsperre aktiv (Dashboard) oder Finger und Display nass. Abwischen. Reagiert gar nichts mehr: Modustaste 10 s halten.'],
    ['Ton dumpf.', 'Finger oder Griff verdecken das Mikrofon. Kamera anders greifen.']
  ],
  vertical: 'Für Reels entweder die Kamera hochkant drehen (die Anzeige dreht mit) oder das Bildformat 9:16 wählen und quer halten. Achtung: 10-Bit gibt es bei 9:16 nicht, und hochkant lassen sich keine Einstellungen ändern.',
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
  settings: [['Modus', 'Zeitraffer › TimeWarp'], ['Geschwindigkeit', 'Auto', 'Passt sich an Bewegung, Szene und Licht an. Fest: 2x bis 5x im Auto, 10x beim Gehen.'], ['Objektiv', 'Weit']],
  steps: ['Zeitraffer-Modus wählen (nach links oder rechts wischen), Voreinstellung TimeWarp.', 'Kamera an Brust oder Griff, Aufnahme starten.', 'Wenn etwas passiert (Kuh auf der Straße, Aussicht): Display antippen. Nochmal tippen geht zurück zur Raffung.', 'Nach dem Ziel stoppen. Fertig ist der Clip ohne Schnitt.'],
  tip: 'Die Echtzeit-Umschaltung geht nur per Antippen des hinteren Displays. Im Gehäuse oder mit nassen Fingern also nicht, dann die Stelle später in Quik verlangsamen.' },
{ id: 'hyperview', title: 'HyperView aus der Ich-Perspektive', short: 'Das typische GoPro-Gefühl: mittendrin statt dabei.',
  what: '[[hyperview|HyperView]] nutzt den ganzen Sensor und streckt ihn ins Breitbild. Die Ränder werden gedehnt, das erzeugt ein starkes Geschwindigkeits- und Raumgefühl.',
  why: 'Kein Wechselobjektiv kommt an diesen Bildwinkel heran, schon gar nicht am Kopf getragen.',
  where: 'Zugtür in Ella, Tuk-Tuk-Rücksitz, Bootsfahrt zum Tauchplatz auf den Malediven.',
  settings: [['Objektiv', 'HyperView'], ['Auflösung / Bildrate', '4K / 60'], ['HyperSmooth', 'AutoBoost']],
  steps: ['Brust- oder Kopfhalterung anlegen, Kamera in Blickrichtung ausrichten.', 'Kopfüber montiert? Die Kamera dreht das Bild selbst. Soll die Lage fix bleiben: Dashboard › Ausrichtungssperre.', 'Aufnahme starten und die Kamera vergessen.'],
  tip: 'HyperView wirkt am besten mit etwas Nahem im Bild: Hände am Geländer, Bootsrand, Zuggeländer.' },
{ id: 'reframe', title: 'Einmal filmen, zweimal posten', short: '8:7 aufnehmen, in Quik quer und hochkant ausschneiden.',
  what: 'Mit [[s87|8:7]] speichert die Kamera den ganzen Sensor. In der Quik-App wählst du später per [[reframe|Neu ausrichten]] den Ausschnitt, auch hochkant für Reels, und kannst ihn sogar im Clip wandern lassen.',
  why: 'Normale Kameras nehmen ein festes Format auf. Der fast quadratische Sensor der HERO12 lässt die Entscheidung offen.',
  where: 'Überall, wo du dich nicht festlegen willst: Tauchgänge, Safari, Strand.',
  settings: [['Bildformat', '8:7'], ['Auflösung / Bildrate', '5.3K 30 oder 4K 60'], ['Objektiv', 'Weit', '8:7 gibt es nur mit Weit.']],
  steps: ['Mittlere Schaltfläche gedrückt halten, Bildformat 8:7 wählen, speichern.', 'Motiv mittig halten, oben und unten Platz lassen.', 'In Quik den Clip öffnen, beim Zuschneiden 9:16 wählen und den Ausschnitt schieben.'] },
{ id: 'zeitlupe', title: '8-fache Zeitlupe', short: 'Wellen, Vögel, Wassertropfen in 240 Bildern pro Sekunde.',
  what: 'Bei 240 Bildern pro Sekunde wird beim Abspielen mit 30 jede Sekunde zu acht: [[zeitlupe|8-fache Zeitlupe]].',
  why: 'Wenige Kameras dieser Größe schaffen 240 fps in guter Auflösung, und keine davon kannst du dabei ins Meer halten.',
  where: 'Brechende Wellen am Strand, auffliegende Reiher in Udawalawe, dein Kopfschütteln nach dem Tauchgang, ein Sprung vom Boot.',
  settings: [['Auflösung / Bildrate', '2.7K / 240'], ['Objektiv', 'Weit oder Linear'], ['Licht', 'viel Sonne nötig']],
  steps: ['Shortcut Geschwindigkeit auf 8x stellen, oder eine eigene Voreinstellung „Zeitlupe“ mit 2.7K 240 anlegen.', 'Nur bei hellem Tageslicht: Zeitlupe braucht viel Licht, sonst rauscht es.', 'Kurze Clips von 5-10 Sekunden, Kamera ruhig halten.', 'Quik spielt den Clip automatisch verlangsamt ab.'],
  tip: 'Im Kunstlicht flackert Zeitlupe oft. Draußen in der Sonne ist sie am schönsten.' },
{ id: 'hindsight', title: 'HindSight: rückwirkend aufnehmen', short: 'Der Moment, bevor du gedrückt hast, ist schon im Kasten.',
  what: 'Mit [[hindsight|HindSight]] puffert die Kamera ständig 15 oder 30 Sekunden. Drückst du den Auslöser, enthält das Video auch die Zeit davor.',
  why: 'Tiere warten nicht auf dich. Eine Kamera, die schon läuft, bevor du reagierst, gibt es sonst kaum.',
  where: 'Pirschfahrt in Yala, Delfine an der Bootskante, plötzlich auftauchender Walhai beim Schnorcheln.',
  settings: [['HindSight', '15 s'], ['Achtung', 'kostet Akku']],
  steps: ['Shortcut HindSight antippen und 15 oder 30 s wählen.', 'Die Kamera puffert jetzt. Oben in der Mitte wird die Anzeige blau, sobald der Puffer voll ist.', 'Passiert etwas: Auslöser drücken. Das Video beginnt rückwirkend.', 'Danach wieder ausschalten, um Akku zu sparen.'] },
{ id: 'sternspuren', title: 'Startrails über der Lodge', short: 'Die Erddrehung sichtbar machen.',
  what: 'Der Nachteffekt [[sternspuren|Startrails]] belichtet über lange Zeit und addiert die Bilder: Sterne ziehen Kreisbögen.',
  why: 'Mit einer Systemkamera brauchst du dafür Stativ, Fernauslöser, Hunderte Fotos und eine Software zum Stapeln. Die GoPro erledigt das intern.',
  where: 'Safari-Lodge in Yala oder Udawalawe, fern von Lampen. Malediven-Strand bei Neumond.',
  settings: [['Modus', 'Zeitraffer › Startrails'], ['Länge der Lichtspur', 'Max', 'Durchgehende Spuren ohne Lücken.'], ['Dauer', '30-60 min']],
  steps: ['Kamera auf feste Unterlage legen, nach Norden oder Süden ausrichten, wenig Horizont.', 'Voreinstellung Startrails wählen, Länge der Lichtspur Max.', 'Aufnahme starten, dann mindestens 30 Minuten nicht berühren.', 'Ergebnis: Video, in dem die Spuren wachsen, plus Einzelbild am Ende.'],
  tip: 'Ein Baum oder eine Hütte im Vordergrund macht aus einem Himmelsbild eine Szene.' },
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
  settings: [['Modus', 'Zeitraffer (2 s)'], ['Geplante Aufnahme', 'Uhrzeit'], ['Aufnahmedauer', '45 min']],
  steps: ['Am Abend Kamera aufstellen und Bildausschnitt prüfen.', 'In der Voreinstellung Geplante Aufnahme mit Uhrzeit und Aufnahmedauer setzen.', 'Kamera ausschalten. Sie startet zur eingestellten Zeit.', 'Morgens ansehen und weiterschlafen.'],
  tip: 'Uhrzeit der Kamera vorher auf Ortszeit stellen (über Quik geschieht das automatisch beim Verbinden).' },
{ id: 'drohne', title: 'Selfiestick-Drohnenflug', short: 'Kamera hoch über dir, als würde eine Drohne kreisen.',
  what: 'Ausgezogener Stick, Kamera nach unten auf dich gerichtet, langsam hochheben oder um dich herumdrehen. Mit Linear + [[horizont|Horizontsperre]] bleibt das Bild gerade, selbst wenn sich der Stick dreht.',
  why: 'Superweitwinkel plus Stabilisierung lässt den Stick im Bild fast verschwinden. Drohnen sind in Sri Lanka und auf den Malediven ohnehin streng geregelt.',
  where: 'Aussichtspunkt am Little Adam\'s Peak, Sandbank auf den Malediven, Bootsdeck.',
  settings: [['Objektiv', 'Linear + Horizontsperre'], ['HyperSmooth', 'AutoBoost'], ['Auflösung / Bildrate', '4K / 60']],
  steps: ['Stick ganz ausziehen, Kamera nach unten neigen.', 'Aufnahme starten, Arm langsam heben und dabei eine halbe Drehung machen.', 'Der Stick sollte genau in Verlängerung der Kamera zeigen, dann verschwindet er fast.'] },
{ id: 'overunder', title: 'Halb über, halb unter Wasser', short: 'Strand oben, Fische unten, in einem Bild.',
  what: 'Die Kamera halb eintauchen, sodass die Wasserlinie durchs Bild läuft. Oben Insel und Himmel, unten Sand und Fische.',
  why: 'Eine wasserdichte Kamera, die man ohne Sorge halb ins Meer hält.',
  where: 'Flache, ruhige Lagune auf Dhigurah, bei Sonne und Ebbe.',
  settings: [['Objektiv', 'Weit'], ['Bel.-Korr.', '-0,5'], ['Auflösung / Bildrate', '4K / 60']],
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
  ['Auf Profi-Bedienfunktionen umschalten', 'Dashboard › nach links wischen › Steuerung. Ab Werk steht die Kamera auf Einfach, dann fehlen Voreinstellungen und Protune.'],
  ['Bittiefe 10-Bit und Antiflimmern 50 Hz', 'Einstellungen › Video. 50 Hz passt zum Stromnetz in Sri Lanka und auf den Malediven, dann flackert Kunstlicht nicht.'],
  ['Alle Akkus voll laden', 'Lithium-Akkus und Powerbank ins Handgepäck, nicht in den Koffer.'],
  ['Speicherkarte in der Kamera formatieren', 'Einstellungen › Zurücksetzen › SD-Karte formatieren. Vorher klären, ob noch Daten des Verleihers drauf sind. [[sd|Karte]] mit V30- oder U3-Aufdruck?'],
  ['Eigene Voreinstellungen anlegen: Tauchen, Safari, Fahrt', 'Mittlere Schaltfläche › ganz unten „Neu erstellen“. Werte aus den Szenen-Rezepten in dieser App.'],
  ['Tauchen als Standardvoreinstellung', 'Einstellungen › Allgemein › Standardvoreinstellung. Spätestens vor den Malediven.'],
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
  ['Akku voll, Voreinstellung Tauchen zuletzt ausgewählt', 'Dann startet auch QuikCapture mit dem Tauchrezept.'],
  ['Vorderes Display auf „Display aus“ oder „Nur Status“', 'Spart Akku. Für den Tasten-Wechsel der Voreinstellung zeigt es trotzdem das Menü an.'],
  ['Gehäuse schließen, Verschluss hörbar einrasten lassen'],
  ['Tasten durchs Gehäuse testen', 'Auslöser startet und stoppt? Modustaste setzt HiLight?'],
  ['Rotfilter-Entscheidung', 'Sonnig, 5-20 m: drauf. Flach, Nacht, Lampe: weg.'],
  ['Sicherungsleine am Handgelenk oder Jacket']
] },
{ id: 'nachtauch', title: 'Nach jedem Tauchgang', items: [
  ['Geschlossenes Gehäuse in Süßwasser spülen', 'Ein paar Minuten einweichen, dabei die Tasten mehrmals drücken. Die Kamera selbst nach Salzwasser ebenfalls abspülen.'],
  ['Außen abtrocknen, erst dann öffnen', 'Kein Tropfen darf beim Öffnen hineinlaufen.'],
  ['Akku tauschen oder laden'],
  ['Anti-Beschlag-Einlage trocknen'],
  ['Clips sichten und mit Quik aufs Handy holen']
] },
{ id: 'abend', title: 'Jeden Abend', items: [
  ['Aufnahmen in Quik aufs Handy übertragen', 'Drahtlos baut die Kamera ein eigenes WLAN auf. Schneller geht es per USB-C-Kabel direkt ans Android-Handy.'],
  ['Alle Akkus laden'],
  ['Kamera und Halterungen von Sand und Salz befreien'],
  ['Erst nach gesicherter Übertragung Platz auf der Karte schaffen']
] }
];

D.problems = [
{ group: 'Akku und Hitze', items: [
  ['Die Kamera wird heiß und schaltet ab.', '<p>Die Meldung „Kamera ist zu heiß“ erscheint mit einem Temperatursymbol, dann schaltet sich die Kamera zum Abkühlen ab. GoPro nennt als Betriebsbereich -10 bis 35 °C Umgebungstemperatur, in Sri Lanka bist du oft nah dran. Ursachen: hohe Auflösung und Bildrate, direkte Sonne, keine Luftbewegung, eine aktive Quik-Verbindung.</p><ul class="bul"><li>Auflösung oder Bildrate senken (4K 30 statt 5.3K 60), kürzere Clips.</li><li>Kamera in den Schatten, in der Hand oder im Fahrtwind halten.</li><li>Vorderes Display aus, WLAN aus, Helligkeit runter, Quik trennen.</li><li>Abkühlen lassen, nicht in den Kühlschrank (Kondenswasser).</li></ul>'],
  ['Der Akku ist zu schnell leer.', '<ul class="bul"><li>Vorderes Display aus (Dashboard › Display vorne), Helligkeit runter, Bildschirmschoner kurz (Einstellungen › Displays).</li><li>Automatisches Ausschalten auf 5 Minuten (Einstellungen › Allgemein).</li><li>WLAN aus, wenn du Quik nicht brauchst.</li><li>HindSight nur bei Bedarf, es nimmt ständig auf.</li><li>Für Tauchgänge [[quikcapture|QuikCapture]]: Kamera aus, Auslöser startet die Aufnahme direkt.</li><li>Unterwegs per USB-C an der Powerbank laden. Voll ist der Akku nach etwa 3 Stunden.</li></ul>'],
  ['Die Kamera reagiert nicht mehr.', '<p>Modustaste 10 Sekunden gedrückt halten. Das startet die Kamera neu, deine Einstellungen bleiben erhalten. Lässt sie sich gar nicht einschalten: zuerst laden.</p>'],
  ['Aufnahme stoppt nach einiger Zeit von allein.', '<p>Meist Hitze, ein voller Speicher oder eine zu langsame Karte. Ist eine [[dauer|Aufnahmedauer]] eingestellt, endet die Aufnahme planmäßig. Sehr lange Videos teilt die Kamera außerdem in mehrere Dateien auf, das ist normal und kein Verlust.</p>']
] },
{ group: 'Bild und Ton', items: [
  ['Das Bild ist verwackelt.', '<p>[[hypersmooth|HyperSmooth]] prüfen (Ein oder AutoBoost). Bei Vibration hilft eine höhere Bildrate. Bei Dämmerung wird die Verschlusszeit lang, Bewegung verwischt: mehr Licht oder ruhiger halten.</p>'],
  ['Nachts ist alles körnig oder verschmiert.', '<p>Die kleine Sensorfläche braucht Licht. In der Dämmerung lieber 30 statt 60 fps, [[iso|ISO]]-Obergrenze 1600 bis 3200, und die Kamera abstützen. Für Sterne: Zeitraffer bei Nacht oder Startrails statt Video.</p>'],
  ['Unter Wasser ist alles blau oder grün.', '<p>Rot verschwindet im Wasser zuerst. Näher ans Motiv, [[rotfilter|Rotfilter]] zwischen etwa 5 und 20 m, [[wb|Weißabgleich]] Auto. In flachem Wasser oder mit Lampe den Filter abnehmen, sonst wird es rosa.</p>'],
  ['Wassertropfen auf der Linse.', '<p>Linse vor dem Eintauchen nass machen, dann bilden sich weniger Tropfen. Beim Auftauchen kurz untertauchen und schnell wieder hoch, oder das Glas mit der Zunge oder einem nassen Finger abwischen (der alte Surfertrick).</p>'],
  ['Der Ton rauscht im Wind.', '<p>In [[protune|Protune]] die Windgeräuschminderung auf Auto. Kamera aus dem direkten Fahrtwind, Mikrofon (vorne unten) nicht mit dem Finger verdecken.</p>'],
  ['Die Farben wirken flau und grau.', '<p>Wahrscheinlich steht das Profil auf [[log|Log]] oder die Farbe auf der flachen Variante. Für Quik am Handy: Profil Standard, Farbe Natürlich.</p>']
] },
{ group: 'Speicher und Übertragen', items: [
  ['Die Kamera meldet einen Kartenfehler.', '<p>Erst die Kamera neu starten, sie versucht dann, Dateien zu reparieren. Hilft das nicht: Karte in der Kamera formatieren (vorher sichern!). Meldet die Kamera „SD-Karten-Klassifizierung“, ist die Karte zu langsam. Für die HERO12: microSD mit [[sd|V30 / UHS-3]], bis 1 TB.</p>'],
  ['Quik findet die Kamera nicht.', '<ul class="bul"><li>Bluetooth und Standort am Handy einschalten, Quik die Berechtigungen geben.</li><li>Kamera einschalten, Dashboard › nach links wischen › Einstellungen › Verbindungen › Drahtlosverbindungen, dann den Schritten in Quik folgen.</li><li>Im Zweifel unter Verbindungen „Verbindungen zurücksetzen“ und neu koppeln.</li><li>Für die Übertragung baut die Kamera ein eigenes WLAN auf, das Handy verliert dabei kurz das Internet. Das ist normal.</li></ul>'],
  ['Das Handy wird voll.', '<p>5.3K-Clips sind groß (mehrere Gigabyte pro 10 Minuten). In Quik nur die besten Clips importieren, oder in Quik einen Ausschnitt speichern statt des ganzen Videos. Die Originale bleiben auf der Karte.</p>'],
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
  { t: 'Modus, Voreinstellung, Einstellung: wie hängt das zusammen?', d: '<p>Ganz oben stehen die drei [[modus|Aufnahmemodi]] Video, Foto und Zeitraffer. Jeder Modus hat mehrere [[preset|Voreinstellungen]], und jede Voreinstellung ist ein Paket aus Einzeleinstellungen. Du änderst also selten eine einzelne Einstellung, du wählst ein Paket.</p><div class="note"><p>Bildlich: Modus ist die Abteilung im Supermarkt, Voreinstellung das fertige Rezept, die Einstellungen sind die Zutaten.</p></div><p>Eigene Voreinstellung anlegen: mittlere Schaltfläche unten antippen, in der Liste ganz nach unten scrollen, „Neu erstellen“, Modus wählen, Einstellungen festlegen, Symbol und Name vergeben, speichern. Werks-Voreinstellungen lassen sich ändern, aber nicht löschen.</p>' },
  { t: 'Auflösung und Bildrate: welche Kombination wofür?', d: '<ul class="bul"><li><b>5.3K 30</b>: maximale Details, viel Spielraum zum Zuschneiden und für Standbilder. Landschaft, Safari.</li><li><b>4K 60</b>: der Allrounder. Flüssig, 2-fache Zeitlupe möglich, moderat im Akku. Tauchen, Fahrten, Alltag.</li><li><b>4K 120 / 2.7K 240</b>: Zeitlupe. Braucht viel Licht.</li><li><b>1080p</b>: kleinste Dateien, längste Laufzeit. Für lange, unwichtige Aufnahmen.</li></ul><p>GoPro nennt für einen vollen Akku etwa 70 Minuten bei 5.3K 60, über 95 Minuten bei 5.3K 30 und über 155 Minuten bei 1080p 30.</p><p>Faustregel: Je höher beide Werte, desto mehr Akku, Wärme und Speicher.</p>' },
  { t: 'Digitale Objektive im Vergleich', d: '<p>Von weit nach eng: [[hyperview|HyperView]], [[superview|SuperView]], [[weitwinkel|Weit]], [[linear|Linear]], Linear + [[horizont|Horizontsperre]].</p><ul class="bul"><li>Mittendrin-Gefühl und Geschwindigkeit: HyperView oder SuperView.</li><li>Das typische GoPro-Bild, unter Wasser, 8:7 und 9:16: Weit.</li><li>Landschaft, Architektur, Menschen ohne Verzerrung: Linear.</li><li>Ferne Motive: Zoom oder besser in hoher Auflösung filmen und später zuschneiden.</li></ul><p>Nicht jedes Objektiv gibt es bei jeder Auflösung und Bildrate: HyperView etwa nur bei 5.3K 30 und 4K 60, 8:7 und 9:16 nur mit Weit. Die Kamera bietet nur passende Kombinationen an.</p>' },
  { t: 'HyperSmooth: wie viel Stabilisierung?', d: '<p>Die HERO12 kennt drei Stufen. [[hypersmooth|HyperSmooth]] „Ein“ reicht fast immer und schneidet wenig ab. [[autoboost|AutoBoost]] für sehr unruhige Situationen (Laufen, Jeep, Zugtür): so viel Stabilisierung wie nötig. „Aus“ nur auf festem Untergrund oder Stativ.</p>' },
  { t: 'Protune: muss ich das anfassen?', d: '<p>Für den Anfang nicht. [[protune|Protune]] lohnt sich bei drei Situationen auf deiner Reise:</p><ul class="bul"><li>Tauchen: [[iso|ISO]]-Obergrenze festlegen.</li><li>Gleißende Sonne, Sand, Wasser: [[ev|Bel.-Korr.]] auf -0,5.</li><li>Wind und Fahrt: Windgeräuschminderung auf Auto.</li></ul><p>Den Rest kann die Automatik besser, als man glaubt. Schneller als Protune: Display gedrückt halten für die Belichtungssteuerung.</p>' },
  { t: 'Farbe und Bittiefe für den Handyschnitt', d: '<p>Weil du in Quik am Handy schneidest: Profil Standard, [[farbe|Farbe]] Natürlich (oder die kräftigere Variante), [[bittiefe|Bittiefe]] 10-Bit unter Einstellungen › Video. [[log|GP-Log]] meiden, das braucht Farbkorrektur am Computer und sieht in Quik grau aus.</p>' },
  { t: 'Einfache oder Profi-Bedienfunktionen?', d: '<p>Ab Werk steht die Kamera auf [[pro|Einfache Bedienfunktionen]]: übersichtlich, aber ohne Voreinstellungen und Protune. Diese App geht von Profi aus. Umschalten: [[dashboard|Dashboard]] öffnen (vom oberen Rand nach unten wischen), nach links wischen, „Steuerung“ antippen.</p>' }
];
