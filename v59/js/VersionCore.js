
class VersionCore {
    static info = {"number": "59", "hash": "52A51F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
