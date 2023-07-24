# Overlay
### Was ist das Overlay?
Das Overlay zeigt dir an, wo falsche Pixel sind, damit du richtige setzen kannst. Es setzt keine Pixel für dich.

Readme by [r/placeDE](https://github.com/PlaceDE-Official/place-overlay) und JuKo.

Direktlinks:  
[Installation](#overlay-installieren)  
[Updates](#overlay-updaten)  
[Wie funktioniert das Overlay?](#wie-funktioniert-das-overlay)  
[FAQ](#faq)  
----
## Overlay installieren

1. https://www.tampermonkey.net/ öffnen
   
   ![Website von Tampermonkey](imt/../img/tampermonkey.png)

2. Unter "Download" mit "Gehe zum Store" das Plugin installieren -> Weiterleitung zu den App-Stores dort installieren
   
   ![Download-Fenster](img/tapermonkey-marker.png)

3. Anschließend auf einen der folgenden Links klicken, um das jeweilige Overlay zu installieren, Tampermonkey sollte sich automatisch öffnen (wenn du dich nicht entscheiden kannst, findest du die Unterschiede [hier](#wie-funktioniert-das-overlay)):
   - [Normales Overlay](https://github.com/FlashSkyNews/place-overlay/raw/main/src/scripts/placeDE-overlay.user.js)  
   - [Empfehlung: Erweitertes Overlay](https://github.com/FlashSkyNews/place-overlay/raw/main/src/scripts/advanced_overlay.user.js)

4. Nun drückt ihr in Tampermonkey nur noch auf "Updaten" oder "Neu installieren".
Das Ganze sieht dann in Tampermonkey (abhängig von der gewählten Variante) ungefähr so aus:
   
   ![Addonseite von Tampermonkey](img/script-uebersicht.png)

   WICHTIG: Dannach bitte einmal den r/place Tab neu laden!
------

## Overlay updaten
Um das Overlay auf eine neue Version zu aktualisieren (nicht die Motive des Overlays, sondern das Skript) klickt ihr einfach auf den entsprechenden Link (normal bzw. erweitert).
   - [Normales Overlay](https://github.com/FlashSkyNews/place-overlay/raw/main/src/scripts/placeDE-overlay.user.js)  
   - [Empfehlung: Erweitertes Overlay](https://github.com/FlashSkyNews/place-overlay/raw/main/src/scripts/advanced_overlay.user.js)
Nun drückt ihr in Tampermonkey nur noch auf "Updaten" oder "Neu installieren".

WICHTIG: Dannach bitte einmal den r/place Tab neu laden!

--------

## Wie funktioniert das Overlay?
### Normale Variante:
Nach dem Installieren siehst du auf der r/place Leinwand kleinere "Pixel" innerhalb der tatsächlichen Pixel. Diese kleineren Pixel geben dir an, welche Farbe der Pixel haben sollte:

### Erweiterte Variante:

Mit dem Knopf unten rechts (1) kann man zwischen mehreren Modi wechseln:
1. - Kleine Pixel (wie im normalen Overlay);  
   - Button hat "Kleine Pixel" als Aufschrift  
   - Dies ist der Standardmodus, welcher bei jedem neu laden der Seite aktiv ist
  
2. - Volle Pixel, d.h. man sieht wie das Bild aussehen sollte und falsche Pixel werden vollständig überdeckt  
   - Button hat "Vollbild Pixel" als Aufschrift  
   - Dieser Modus eignet sich sehr gut, wenn man das ganze Bild ohne Fehler sehen will

Welcher Modus aktiv ist, erkennt man anhand der Aufschrift des Buttons (1).

Außerdem gibt es unter dem Button einen Schieberegler (2).  
Dieser regelt, wie "durchscheinend" das Overlay sein soll.  
Auf der ganz linken Position ist das Overlay komplett durchsichtig.

------------

## FAQ

### Wieso ist die Flagge nicht im Overlay?
Die Flagge ist relativ simpel und klar abgegrenzt.
Somit kann jeder - auch Leute ohne Overlay - die Flagge reparieren.
Wir nutzen die verfügbaren Pixel der Leute, die das Overlay installiert haben, lieber um die komplizierteren Artworks zu schützen, die man nicht so einfach ohne irgendwelche Anweisungen wie z.B. das Overlay reparieren kann.

### Wieso funktioniert das Overlay nicht?
Falls das Overlay nicht funktioniert stelle bitte folgende Sachen sicher:
- Lade die Seite einmal neu, eventuell wurde das Skript einfach nur nicht geladen.
- Zoome einmal in das Canvas auf Höhe des r/placeDE-Bereichs herein, da es sein kann, dass das Overlay erst bei etwas Zoom deutlich sichtbar wird.
- In den ersten Versionen kam es bei manchen Browsern in Kombination mit einem eingeschalteten Darkmode zu Komplikationen. Bitte update das Skript für das Overlay oder deaktiviere den Darkmode.
- Falls du noch einen anderen Browser hast, probiere bitte einmal diesen Browser.
- Falls alles nicht hilft, frage bitte im tech-support nach, vielleicht hatte dort jemand das gleiche Problem.

### Wieso aktualisiert sich mein Overlay nicht?
Eventuell hast du noch die alte Overlay-Version, probiere einmal das Skript für [das Overlay neu zu installieren](#overlay-updaten).
Danach sollten sich die Motive für das Overlay automatisch alle 30 Sekunden updaten.
Falls das nicht klappt, muss die Seite leider manuell neu geladen werden, um ein Update zu erhalten.
Danach sollte es sich wieder selbst aktualisieren (eventuell sorgen aber auch andere Erweiterungen dafür, dass nur durch Neuladen der Seite neue Pixelarts angezeigt werden können).

### Wie kann ich das Overlay in der Reddit-App nutzen?
In der App kann das Overlay leider nicht genutzt werden. In manchen Browsern funktioniert das Overlay auf dem Handy, wenn man die Desktop-Version nutzt.

### Wieso ist der Pixel im Overlay falsch?
Das liegt daran, dass die Vorlage einen Fehler enthält.
Um das zu beheben, muss sich ein Designer an die Vorlage setzen und sie reparieren.

### Setzt das Overlay automatisch Pixel?
Nein, das ist nicht der Zweck des Overlays.
Das Overlay ist nur als Hilfe zum Pixeln gedacht.
Die r/placeDE hat einen automatischen Bot, in dem jedoch andere Ziele beschützt werden. Bei Interesse findest du [hier](https://place.army/) weitere Informationen.
