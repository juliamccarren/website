
class VersionCore {
    static info = {"number": "92", "hash": "EF5514"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
