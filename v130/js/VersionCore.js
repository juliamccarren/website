
class VersionCore {
    static info = {"number": "130", "hash": "E5B63F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
