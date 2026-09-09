
class VersionCore {
    static info = {"number": "123", "hash": "0287B3"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
