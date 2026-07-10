
class VersionCore {
    static info = {"number": "96", "hash": "9A94C4"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
