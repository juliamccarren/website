
class VersionCore {
    static info = {"number": "61", "hash": "020F0A"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
