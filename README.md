# H12 Begleiter

Bedienhilfe für die GoPro HERO12 Black als Web-App fürs Handy, offline nutzbar.

- **Kamera**: Nachbildung des Rück-Displays zum Antippen und Wischen, Tasten, Sprachbefehle, Grundwissen
- **Szenen**: Rezepte für Tauchen mit Gehäuse und Rotfilter, Safari aus dem Jeep, Zug und Fahrten, Landschaft und Zeitraffer, Unterwegs und Selfie
- **Ideen**: Experimente, die nur mit einer Action-Cam gehen (TimeWarp, Sternspuren, Lichtmalerei, 8:7-Reframe u. a.)
- **Checks**: Checklisten zum Abhaken und ein Problemlöser

Menübegriffe folgen der deutschen Kamerasprache. Begriffe mit gepunkteter Unterstreichung lassen sich antippen und werden erklärt.

## Nutzung

Seite im Handy-Browser öffnen und über das Browser-Menü „Zum Startbildschirm hinzufügen“. Danach funktioniert die App auch ohne Netz.

## Technik

Statische Seite ohne Build-Schritt: `index.html`, `style.css`, `data.js` (alle Inhalte), `app.js` (Logik), `sw.js` (Offline-Speicher). Gehostet über GitHub Pages.
