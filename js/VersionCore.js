
class VersionCore {
    static info = {"number": "151", "hash": "B7DC06"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
