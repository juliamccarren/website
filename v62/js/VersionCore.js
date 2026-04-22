
class VersionCore {
    static info = {"number": "62", "hash": "800E83"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
