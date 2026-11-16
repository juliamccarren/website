/**
 * PickerDrum handles the vertical scrollable number selector.
 * It synchronizes the UI drum with the hidden input value.
 */
class PickerDrum {
    /**
     * @param {string} containerId - The ID of the drum element
     * @param {string} inputId - The ID of the hidden input field
     */
    constructor(containerId, inputId) {
        this.drum = document.getElementById(containerId);
        this.input = document.getElementById(inputId);
        this.itemHeight = 40; // Fixed height in pixels to match CSS
    }

    /**
     * Generates the number list based on the total songs available
     * @param {number} totalItems - Maximum number of songs
     * @param {number} initialValue - The starting value (default 6)
     */
    init(totalItems = 41, initialValue = 6) {
        if (!this.drum) return;

        this.drum.innerHTML = '';
        for (let i = 1; i <= totalItems; i++) {
            const numDiv = document.createElement('div');
            numDiv.className = 'h-10 w-full flex items-center justify-center text-lg font-black text-white/20 transition-all duration-300';
            numDiv.id = `picker-num-${i}`;
            numDiv.textContent = i;
            numDiv.style.height = `${this.itemHeight}px`; 
            this.drum.appendChild(numDiv);
        }
        
        this.input.value = initialValue;
        this.updatePosition(initialValue);
    }

    /**
     * Animates the drum and highlights the active number
     * @param {number} value - The number to center
     */
    updatePosition(value) {
        if (!this.drum) return;

        const offset = (value - 1) * this.itemHeight;
        this.drum.style.transform = `translateY(${-offset}px)`;

        // Reset all numbers to dimmed state
        this.drum.querySelectorAll('div').forEach(el => {
            el.classList.replace('text-fuchsia-500', 'text-white/20');
            el.classList.remove('scale-125');
        });

        // Highlight the selected number
        const active = document.getElementById(`picker-num-${value}`);
        if (active) {
            active.classList.replace('text-white/20', 'text-fuchsia-500');
            active.classList.add('scale-125');
        }
    }

    /**
     * Changes the current limit by a delta value
     * @param {number} delta - Increase or decrease amount
     * @param {number} maxItems - Boundary check
     */
    change(delta, maxItems) {
        let val = parseInt(this.input.value) + delta;

        if (val < 1) val = 1;
        if (val > maxItems) val = maxItems;

        this.input.value = val;
        this.updatePosition(val);
        
        // Haptic feedback for mobile devices
        if (window.navigator.vibrate) window.navigator.vibrate(5);
    }

    get value() {
        return parseInt(this.input.value);
    }
}
