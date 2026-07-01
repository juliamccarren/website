/**
 * DiaryService manages the fetching, display, and modal logic for personal logs.
 */
class DiaryService {
    constructor(containerId, modalId) {
        this.container = document.getElementById(containerId);
        this.modal = document.getElementById(modalId);
        this.entries = [];
    }

    /**
     * Fetches fresh diary entries and renders the grid
     */
    async refresh() {
        if (!this.container) return;
        try {
            const response = await fetch('diary.json');
            if (!response.ok) throw new Error('Diary fetch failed');
            const data = await response.json();
            
            // Sort by timestamp and take the latest 4 entries
            this.entries = data.sort((a, b) => b.timestamp.localeCompare(a.timestamp)).slice(0, 4);
            this.render();
        } catch (e) {
            console.error("Diary Service Error:", e);
            this.container.innerHTML = '<p class="text-red-500/50 text-xs uppercase tracking-widest">Offline / No Data</p>';
        }
    }

    render() {
        this.container.innerHTML = '';
        this.entries.forEach((entry, index) => {
            const card = document.createElement('div');
            card.className = 'group bg-neutral-900/30 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900/60 transition-all duration-500 cursor-pointer flex flex-col h-full';
            card.onclick = () => this.open(index);
            card.innerHTML = `
                <div class="text-fuchsia-500 text-[10px] font-black uppercase tracking-widest mb-3">${this.formatDate(entry.timestamp)}</div>
                <p class="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">${entry.text.substring(0, 100)}...</p>
                <div class="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-neutral-500 group-hover:text-fuchsia-500 transition-colors mt-auto">
                    Read Entry <i data-lucide="arrow-right" size="14"></i>
                </div>
            `;
            this.container.appendChild(card);
        });
        if (window.lucide) lucide.createIcons();
    }

    formatDate(ts) {
        if(!ts || ts.length < 13) return ts;
        return `${ts.substring(6,8)}.${ts.substring(4,6)}.${ts.substring(0,4)} // ${ts.substring(9,11)}:${ts.substring(11,13)}`;
    }

    open(index) {
        const entry = this.entries[index];
        document.getElementById('diary-modal-date').textContent = this.formatDate(entry.timestamp);
        document.getElementById('diary-modal-text').textContent = entry.text;
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}