
class VersionCore {
    static info = {"number": "57", "hash": "AE359B"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
