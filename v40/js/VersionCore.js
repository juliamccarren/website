
class VersionCore {
    static info = {"number": "40", "hash": "E555F2"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
