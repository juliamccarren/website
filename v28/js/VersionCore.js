
class VersionCore {
    static info = {"number": "28", "hash": "8687D0"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
