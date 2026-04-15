
class VersionCore {
    static info = {"number": "58", "hash": "C6021C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
