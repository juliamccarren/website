
class VersionCore {
    static info = {"number": "90", "hash": "BE265F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
