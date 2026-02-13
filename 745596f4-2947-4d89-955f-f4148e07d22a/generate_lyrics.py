import json
import os
import sys

def generate_lyrics_page():
    # Ermittelt den absoluten Pfad des Ordners, in dem dieses Skript liegt
    base_path = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_path, 'songs.json')
    output_path = os.path.join(base_path, 'lyrics.html')

    print(f"Suche nach: {json_path}...")

    # 1. Daten laden
    if not os.path.exists(json_path):
        print(f"FEHLER: 'songs.json' wurde nicht gefunden unter {json_path}")
        print("Stelle sicher, dass die Datei exakt so heißt (Kleinschreibung beachten!).")
        return

    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            songs = json.load(f)
    except Exception as e:
        print(f"FEHLER beim Lesen der JSON: {e}")
        return

    # 2. HTML Header & Style (exakt dein Website-Design)
    html_content = f'''<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lyrics Archive | Julia McCarren</title>
    <meta name="description" content="Official lyrics archive of Julia McCarren.">
    <script src="../js/tailwindcss.js"></script>
    <script src="../js/lucide.js"></script>
    <style>
        body {{ background-color: #000; color: #fff; font-family: sans-serif; }}
        .hero-text-mccarren {{
            background: linear-gradient(to right, #f472b6, #d946ef, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
        }}
        .glass-card {{
            background: rgba(23, 23, 23, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }}
        ::-webkit-scrollbar {{ width: 8px; }}
        ::-webkit-scrollbar-track {{ background: #000; }}
        ::-webkit-scrollbar-thumb {{ background: #d946ef; border-radius: 10px; }}
    </style>
</head>
<body class="bg-black text-white">
    <nav class="p-8 border-b border-white/5 bg-black/50 sticky top-0 z-50 backdrop-blur-lg">
        <div class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-2xl font-black tracking-tighter">
                <span class="text-white/90">Julia</span> <span class="hero-text-mccarren">McCarren</span>
            </a>
        </div>
    </nav>

    <header class="py-20 text-center">
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">Neural <span class="hero-text-mccarren">Lyrics</span></h1>
        <p class="text-neutral-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">Static Linguistic Data Stream</p>
    </header>

    <main class="container mx-auto px-6 max-w-4xl pb-24 space-y-16">
    '''

    # 3. Songs in HTML umwandeln
    for song in songs:
        tags = "".join([f'<span class="px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-500 text-[9px] font-black uppercase tracking-widest">{t}</span>' for t in song.get('tags', [])])
        
        html_content += f'''
        <article id="{song['id']}" class="glass-card p-10 rounded-[2.5rem]">
            <div class="flex flex-wrap gap-3 mb-8">{tags}</div>
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 hero-text-mccarren">{song['title']}</h2>
            <p class="text-neutral-400 text-xl leading-relaxed italic mb-10 border-l-2 border-fuchsia-500/30 pl-6">{song['background']}</p>
            <div class="bg-black/40 rounded-3xl border border-white/5 p-8 md:p-12">
                <pre class="whitespace-pre-wrap font-sans text-neutral-200 leading-[1.8] text-lg md:text-xl italic">{song['lyrics']}</pre>
            </div>
        </article>
        '''

    # 4. Footer
    html_content += '''
    </main>
    <footer class="py-16 border-t border-neutral-900 text-center">
        <p class="text-xs text-neutral-600 font-bold uppercase tracking-[0.3em]">© 2026 Julia McCarren</p>
    </footer>
    <script>lucide.createIcons();</script>
</body>
</html>'''

    # 5. Speichern
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"ERFOLG: '{output_path}' wurde erstellt!")
    except Exception as e:
        print(f"FEHLER beim Schreiben der Datei: {e}")

if __name__ == "__main__":
    generate_lyrics_page()