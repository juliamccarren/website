
class VersionCore {
    static info = {"number": "156", "hash": "4DAF60"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
