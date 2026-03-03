
class VersionCore {
    static info = {"number": "36", "hash": "0AE2B7"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
