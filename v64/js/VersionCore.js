
class VersionCore {
    static info = {"number": "64", "hash": "7F2F9C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
