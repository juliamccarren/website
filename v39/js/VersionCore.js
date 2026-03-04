
class VersionCore {
    static info = {"number": "39", "hash": "248136"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
