
class VersionCore {
    static info = {"number": "79", "hash": "4929A3"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
