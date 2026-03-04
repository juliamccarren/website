
class VersionCore {
    static info = {"number": "41", "hash": "336A47"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
