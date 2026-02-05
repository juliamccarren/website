import http.server
import socketserver
import webbrowser
import os

# Einstellungen
PORT = 8000
# Falls deine HTML-Datei in einem Unterordner liegt, z.B. "html/index.html"
HTML_PATH = "index.html" 

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

# Startet den Browser verzögert, damit der Server Zeit zum Hochfahren hat
webbrowser.open(f"http://localhost:{PORT}/{HTML_PATH}")

print(f"Server läuft auf http://localhost:{PORT}")
with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    httpd.serve_forever()