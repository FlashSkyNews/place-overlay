# Overlay installieren oder updaten

1. [Nur bei Installation] https://www.tampermonkey.net/ öffnen
   
   ![Website Tampermonkey](imt/../img/tampermonkey.png)

2. [Nur bei Installation] Unter "Download" mit "Gehe zum Store" das Plugin installieren -> Weiterleitung zu den App-Stores dort installieren
   
   ![Download-Fenster](img/tapermonkey-marker.png)

3. AUCH BEIM UPDATE: Anschließend auf diesen Link klicken: https://github.com/FlashSkyNews/place-overlay/raw/main/src/scripts/placeDE-overlay.user.js. Tampermonkey sollte das Skript erkennen.
   
   ![Addon Tampermonkey](img/script-uebersicht.png)
   
4. AUCH BEIM UPDATE: Script in Tampermonkey installieren oder updaten/neu installieren 
   
   ![installieren button](img/install.png)

# Wie funktioniert das Overlay?
Nach dem Installieren siehst du auf der r/place Leinwand kleinere "Pixel" innerhalb der tatsächlichen Pixel, welche dir angeben, welche Farbe der Pixel haben sollte:

![image](https://github.com/PlaceDE-Official/place-overlay/assets/28481491/50247ae0-b082-45f2-8769-0e017c23056f)


# FAQ

## Kann ich mir anschauen, welche Motive das Overlay anzeigt?
Ja, das kannst du immer über diesen Link machen: https://place.kayo.zip/outputs/overlay_target.png

## Wieso funktioniert das Overlay nicht?
Falls das Overlay nicht funktioniert stelle bitte folgende Sachen sicher:
- Lade die Seite einmal neu, eventuell wurde das Skript einfach nur nicht geladen.
- Zoom einmal in das Canvas auf Höhe des Artworks an dem wir gerade arbeiten herein, da es sein kann, dass das Overlay erst bei etwas Zoom deutlich sichtbar wird.
- In den ersten Versionen kam es bei manchen Browsern in Kombination mit einem eingeschalteten Darkmode zu komplikationen. Bitte update das Skrip für das Overlay oder deaktiviere den Darkmode.
- Wenn der Canvas vergrößert wurde, geht das Overlay kaputt. Bitte einmal updaten (auf den Link aus dem 3. Schritt klicken).
- Falls du noch einen anderen Browser hast, probiere bitte einmal diesen Browser.
- Falls alles nicht hilft, frage bitte im tech-support nach, vielleicht hatte dort jemand das gleiche Problem.

## Wieso aktualisiert sich mein Overlay nicht?
Eventuell hast du noch die alte Overlay-Version, probiere einmal das Skript für das Overlay neu zu installieren. Dannach sollte sich das Overlay automatisch alle 30 Sekunden updaten. Falls das nicht klappt, muss die Seite leider manuell neu geladen werden, um ein Update zu erhalten.

## Wie kann ich das Overlay mit der Reddit App nutzen?
Ne, leider ist das nicht möglich und wird auch in Zukunft nicht möglich sein. Über den Browser im Handy ist es evtl. möglich, wenn Tampermonkey oder eine vergleichbare Extension installiert werden kann und reddit im Desktop-Modus ist.

## Wieso ist der Pixel im Overlay falsch?
Das liegt daran, dass die Vorlage einen Fehler enthält. Um das zu beheben muss sich ein Designer an die Vorlage setzen und sie reparieren.

## Setzt das Overlay automatisch Pixel?
Nein, das ist nicht der Zweck des Overlays. Das Overlay ist nur als Hilfe zum Pixeln gedacht.
