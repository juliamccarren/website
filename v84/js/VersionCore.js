
class VersionCore {
    static info = {"number": "84", "hash": "A21A34"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
