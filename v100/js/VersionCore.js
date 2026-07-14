
class VersionCore {
    static info = {"number": "100", "hash": "F97811"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
