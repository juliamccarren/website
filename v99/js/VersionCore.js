
class VersionCore {
    static info = {"number": "99", "hash": "45B8ED"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
