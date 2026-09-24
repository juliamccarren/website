
class VersionCore {
    static info = {"number": "139", "hash": "95F422"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
