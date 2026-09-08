
class VersionCore {
    static info = {"number": "119", "hash": "DEBF25"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
