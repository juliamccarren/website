
class VersionCore {
    static info = {"number": "38", "hash": "8374DE"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
