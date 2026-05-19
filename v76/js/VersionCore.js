
class VersionCore {
    static info = {"number": "76", "hash": "6A2753"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
