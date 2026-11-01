
class VersionCore {
    static info = {"number": "150", "hash": "C624EA"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
