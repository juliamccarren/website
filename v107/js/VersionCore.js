
class VersionCore {
    static info = {"number": "107", "hash": "CE907F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
