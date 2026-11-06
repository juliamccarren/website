
class VersionCore {
    static info = {"number": "153", "hash": "8477E8"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
