
class VersionCore {
    static info = {"number": "66", "hash": "B9F799"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
