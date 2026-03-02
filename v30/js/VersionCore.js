
class VersionCore {
    static info = {"number": "30", "hash": "6FC6B0"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
