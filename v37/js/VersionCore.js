
class VersionCore {
    static info = {"number": "37", "hash": "7E5F6F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
