
class VersionCore {
    static info = {"number": "106", "hash": "7845A5"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
