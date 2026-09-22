
class VersionCore {
    static info = {"number": "134", "hash": "8A47D1"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
