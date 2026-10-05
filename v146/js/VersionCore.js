
class VersionCore {
    static info = {"number": "146", "hash": "6B0F6A"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
