import json
import os

def generate_lyrics_page():
    base_path = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_path, 'songs.json')
    output_path = os.path.join(base_path, 'lyrics.html')

    if not os.path.exists(json_path):
        print(f"FEHLER: 'songs.json' nicht gefunden.")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        songs = json.load(f)

    html_content = f'''<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lyrics Archive | Julia McCarren</title>
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
        .glass-button {{
            background: rgba(217, 70, 239, 0.15);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(217, 70, 239, 0.3);
            transition: all 0.3s ease;
        }}
        ::-webkit-scrollbar {{ width: 8px; }}
        ::-webkit-scrollbar-track {{ background: #000; }}
        ::-webkit-scrollbar-thumb {{ background: #d946ef; border-radius: 10px; }}
    </style>
</head>
<body class="bg-black text-white overflow-x-hidden">
    <nav class="p-6 md:p-10 border-b border-white/5 bg-black/50 sticky top-0 z-50 backdrop-blur-lg">
        <div class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-xl md:text-2xl font-black tracking-tighter uppercase">
                <span class="text-white/90">Julia</span> <span class="hero-text-mccarren">McCarren</span>
            </a>
        </div>
    </nav>

    <header class="py-16 md:py-24 text-center px-6">
        <h1 class="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">Neural <span class="hero-text-mccarren">Lyrics</span></h1>
        <p class="text-neutral-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">Static Linguistic Data Stream</p>
    </header>

    <main class="container mx-auto px-4 md:px-6 max-w-4xl pb-24 space-y-8 md:space-y-16">
    '''

    for song in songs:
        tags = "".join([f'<span class="px-2 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-500 text-[8px] font-black uppercase tracking-widest">{t}</span>' for t in song.get('tags', [])])
        
        html_content += f'''
        <article id="{song['id']}" class="glass-card p-3 md:p-12 rounded-[2rem]">
            <div class="flex flex-wrap gap-2 mb-6">{tags}</div>
            <h2 class="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-6 hero-text-mccarren leading-none">{song['title']}</h2>
            <p class="text-neutral-400 text-lg md:text-xl leading-relaxed italic mb-8 border-l border-fuchsia-500/30 pl-2 md:pl-6">{song['background']}</p>
            
            <div class="bg-black/40 rounded-2xl border border-white/5 p-2 md:p-10">
                <h3 class="text-[9px] font-black uppercase tracking-[0.3em] text-fuchsia-500/50 mb-4 italic">Data Stream</h3>
                <pre class="whitespace-pre-wrap font-sans text-neutral-200 leading-[1.6] md:leading-[1.8] text-base md:text-xl italic">{song['lyrics']}</pre>
            </div>
        </article>
        '''

    html_content += '''
    </main>
    <footer class="py-16 border-t border-neutral-900 text-center">
        <p class="text-[9px] text-neutral-600 font-bold uppercase tracking-[0.3em]">© 2026 Julia McCarren</p>
    </footer>
    <script>lucide.createIcons();</script>
</body>
</html>'''

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Update abgeschlossen: {output_path}")

if __name__ == "__main__":
    generate_lyrics_page()