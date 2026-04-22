
class VersionCore {
    static info = {"number": "61", "hash": "A2FB8F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
